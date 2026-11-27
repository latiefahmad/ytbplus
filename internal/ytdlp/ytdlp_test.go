package ytdlp

import (
	"os"
	"path/filepath"
	"runtime"
	"testing"
)

// TestLookupJSRuntimeNeverPicksBun checks which JavaScript runtime yt-dlp is
// given to solve YouTube's challenges. Bun is skipped on purpose: newer
// versions cannot run the solver, so a machine that has only Bun must fall
// through to QuickJS instead of failing every track.
func TestLookupJSRuntimeNeverPicksBun(t *testing.T) {
	dir := t.TempDir()
	writeTool(t, toolPath(dir, "node"))
	writeTool(t, toolPath(dir, "bun"))
	t.Setenv("PATH", dir)

	if name, _ := lookupJSRuntime(); name != "node" {
		t.Fatalf("with Node and Bun on PATH the runtime is %q, want node", name)
	}
	if err := os.Remove(toolPath(dir, "node")); err != nil {
		t.Fatal(err)
	}
	if name, _ := lookupJSRuntime(); name == "bun" {
		t.Fatalf("with only Bun on PATH the runtime is %q, want anything but bun", name)
	}
}

// toolPath names a fake program the way the platform looks one up: with an
// .exe suffix on Windows, and its bare name elsewhere.
func toolPath(dir, name string) string {
	if runtime.GOOS == "windows" {
		name += ".exe"
	}
	return filepath.Join(dir, name)
}

func writeTool(t *testing.T, path string) {
	t.Helper()
	if err := os.WriteFile(path, []byte("#!/bin/sh\nexit 0\n"), 0o755); err != nil {
		t.Fatal(err)
	}
}
