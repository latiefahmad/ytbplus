package main

import (
	"testing"

	"github.com/latiefahmad/ytbplus/youtube"
)

// recordingNotices is a trackNotices that records what the app asks of it.
type recordingNotices struct {
	active    bool
	notified  int
	dismissed int
}

func (n *recordingNotices) appActive() bool { return n.active }

func (n *recordingNotices) notify(youtube.MusicItem, []byte) { n.notified++ }

func (n *recordingNotices) dismissNotification() { n.dismissed++ }

// A track notification is for when the user is in another app. While a
// ytbplus window is in front the window already shows the track, and the
// notification of the track before goes.
func TestTrackNotificationsStayQuietWhileTheAppIsInFront(t *testing.T) {
	for _, c := range []struct {
		name      string
		active    bool
		notified  int
		dismissed int
	}{
		{"in front", true, 0, 1},
		{"in another app", false, 1, 0},
	} {
		t.Run(c.name, func(t *testing.T) {
			a := &app{}
			notices := &recordingNotices{active: c.active}
			a.notices = notices
			a.notifyTrack(youtube.MusicItem{VideoID: "v", Title: "Track"})
			if notices.notified != c.notified || notices.dismissed != c.dismissed {
				t.Errorf("notified %d, dismissed %d; want %d and %d",
					notices.notified, notices.dismissed, c.notified, c.dismissed)
			}
		})
	}
}
