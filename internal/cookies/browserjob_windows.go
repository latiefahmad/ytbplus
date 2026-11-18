//go:build windows

package cookies

import (
	"log"
	"os/exec"
	"unsafe"

	"golang.org/x/sys/windows"
)

// startBrowser starts the sign-in browser in a job object of its own and
// returns the way to end that job. A Windows browser can hand its window to
// another process and exit, so the process this app started is not always the
// one that holds the window; the job is, and it ends every process the
// browser started, however many times the window moves.
//
// A job that cannot be made or joined is not fatal: the browser still runs,
// and cancelling the command kills the process tree this app did start.
func startBrowser(cmd *exec.Cmd) (func(), error) {
	job, err := windows.CreateJobObject(nil, nil)
	if err != nil {
		log.Printf("sign-in window: could not make a job for the browser: %v", err)
	}
	if job != 0 {
		info := windows.JOBOBJECT_EXTENDED_LIMIT_INFORMATION{
			BasicLimitInformation: windows.JOBOBJECT_BASIC_LIMIT_INFORMATION{
				LimitFlags: windows.JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE,
			},
		}
		if _, err := windows.SetInformationJobObject(job, windows.JobObjectExtendedLimitInformation,
			uintptr(unsafe.Pointer(&info)), uint32(unsafe.Sizeof(info))); err != nil {
			log.Printf("sign-in window: could not set up the browser's job: %v", err)
			_ = windows.CloseHandle(job)
			job = 0
		}
	}
	if err := cmd.Start(); err != nil {
		if job != 0 {
			_ = windows.CloseHandle(job)
		}
		return nil, err
	}
	if job != 0 {
		process, err := windows.OpenProcess(windows.PROCESS_SET_QUOTA|windows.PROCESS_TERMINATE, false, uint32(cmd.Process.Pid))
		if err != nil {
			log.Printf("sign-in window: could not watch the browser process: %v", err)
			_ = windows.CloseHandle(job)
			job = 0
		} else {
			assignErr := windows.AssignProcessToJobObject(job, process)
			_ = windows.CloseHandle(process)
			if assignErr != nil {
				// A browser started inside another job may refuse a nested
				// one. It still runs, and cancelling the command kills what
				// this app started.
				log.Printf("sign-in window: could not hold the browser in a job: %v", assignErr)
				_ = windows.CloseHandle(job)
				job = 0
			}
		}
	}
	return func() {
		if job != 0 {
			_ = windows.TerminateJobObject(job, 1)
			_ = windows.CloseHandle(job)
		}
	}, nil
}
