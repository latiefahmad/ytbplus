//go:build !windows

package cookies

import "os/exec"

// startBrowser starts the sign-in browser and returns the way to end it and
// everything it started. proc.Command puts the browser in a process group
// that cancellation kills, so the returned function has nothing left to do.
func startBrowser(cmd *exec.Cmd) (func(), error) {
	if err := cmd.Start(); err != nil {
		return nil, err
	}
	return func() {}, nil
}
