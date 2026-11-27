// The releases the page offers. Versions and asset names come from the
// workflow, so the download links point at files that really exist.
export const version = "1.2.0";
export const repo = "https://github.com/latiefahmad/ytbplus";
export const releases = `${repo}/releases`;

export const tag = `ytbplus-v${version}`;

/** Build an asset URL on the release page. */
export const asset = (name: string) =>
  `${releases}/download/ytbplus-v${version}/${name}`;

export type Platform = {
  id: "mac" | "win" | "linux";
  name: string;
  note: string;
  primary: { label: string; file: string; hint: string };
  others: { label: string; file: string }[];
  steps: string[];
};

export const platforms: Platform[] = [
  {
    id: "mac",
    name: "macOS",
    note: "One universal disk image for Apple Silicon and Intel.",
    primary: {
      label: "Download for macOS",
      file: `ytbplus-${version}-macos-universal.dmg`,
      hint: ".dmg · universal",
    },
    others: [
      { label: "Minimal build", file: `ytbplus-${version}-macos-universal-minimal.dmg` },
    ],
    steps: [
      "Open the disk image and drag ytbplus to Applications.",
      "The app is not notarized yet, so the first time, right-click it and choose Open.",
    ],
  },
  {
    id: "win",
    name: "Windows",
    note: "A portable zip that needs no installer, or a setup exe.",
    primary: {
      label: "Download for Windows",
      file: `ytbplus-${version}-windows-amd64-portable.zip`,
      hint: ".zip · portable · amd64",
    },
    others: [
      { label: "Setup installer", file: `ytbplus-${version}-windows-amd64-setup.exe` },
      { label: "Minimal setup", file: `ytbplus-${version}-windows-amd64-minimal-setup.exe` },
    ],
    steps: [
      "Extract the zip, keeping the files together.",
      "Open ytbplus.exe in the extracted folder.",
      "The Windows build is untested. Please report what you find.",
    ],
  },
  {
    id: "linux",
    name: "Linux",
    note: "Deb, RPM, Flatpak or AppImage, for amd64 and arm64.",
    primary: {
      label: "Download for Linux",
      file: `ytbplus_${version}_amd64.deb`,
      hint: ".deb · amd64",
    },
    others: [
      { label: "RPM (amd64)", file: `ytbplus-${version}-linux-amd64.rpm` },
      { label: "Flatpak (amd64)", file: `ytbplus-${version}-linux-amd64.flatpak` },
      { label: "AppImage (amd64)", file: `ytbplus-${version}-linux-amd64.AppImage` },
      { label: "Deb (arm64)", file: `ytbplus_${version}_arm64.deb` },
      { label: "AppImage (arm64)", file: `ytbplus-${version}-linux-arm64.AppImage` },
    ],
    steps: [
      "Install the .deb or .rpm, or run flatpak install, or make the AppImage executable and open it.",
      "On a normal Intel or AMD computer pick amd64; on an ARM computer pick arm64.",
    ],
  },
];

export type Change = { kind: "Added" | "Changed" | "Fixed" | "Removed"; items: string[] };

export const changelog: { version: string; date: string; changes: Change[] }[] = [
  {
    version: "1.2.0",
    date: "27 November 2026",
    changes: [
      {
        kind: "Added",
        items: [
          "Block artists you never want to hear. Choose Block artist in a song's menu, or Block on an artist's page, and ytbplus skips their songs, drops them from your queue, and hides them from search, recommendations and autoplay. On albums, playlists and artist pages their songs stay in the list, greyed out. A song that only features a blocked artist still plays. Unblock them from the same places, or from Settings, where Blocked artists lists everyone you blocked.",
          "The progress bar can be flat. Appearance has a Wavy progress bar switch. Turn it off and the position bar stays a flat line instead of a travelling wave. It is on by default, and the choice is saved between runs.",
          "Browse your listening history. History in the navigation rail lists the songs you played, grouped by day. When you are signed in, it also shows your YouTube Music account history and merges it into the same list, so plays from your phone show up next to plays on this computer.",
        ],
      },
      {
        kind: "Changed",
        items: [
          "Disliking the song that is playing skips to the next one. This matches YouTube Music. Disliking any other song does not change playback.",
          "A song row keeps its length at the right edge. In playlists, albums, search results, Up next and the mini player, the length sits against the row's edge, and the three-dot menu takes its place under the pointer.",
          "The mini player uses smaller controls. The Auto-play switch, Clear queue, Open ytbplus and Quit are sized for the narrow window.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "Songs play with Bun installed. yt-dlp cannot solve YouTube's challenges with newer Bun versions, so every song failed with The page needs to be reloaded. ytbplus now uses Node.js, or the QuickJS the full build ships, and leaves Bun alone.",
          "A late artist lookup no longer shifts a Last.fm scrobble. When ytbplus finds the artist after a track starts, the scrobble keeps the real start time, and the listening before the lookup finishes counts.",
          "Repeats count as plays. Playing the same song again, including repeat-one, adds a new play to the stats instead of being skipped.",
          "The saved position survives a track whose length is not known yet. The position slider no longer resets the saved place while the duration is still being looked up.",
          "Dislikes in the queue survive a restart. After reopening ytbplus, songs you disliked still show as disliked and Auto-skip disliked songs keeps skipping them. Before, the queue came back without knowing which songs were disliked.",
        ],
      },
    ],
  },
  {
    version: "1.1.0",
    date: "18 November 2026",
    changes: [
      {
        kind: "Added",
        items: [
          "Search suggestions work from the keyboard. Up and Down highlight a suggestion, and Enter searches or opens it instead of searching the text typed.",
          "Copy a track's title or artist. The song menu's Copy entry offers both beside Copy link, and says what it copied.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "Skipping a track stops its yt-dlp lookup. A track you skip no longer leaves yt-dlp running in the background, so skipping quickly stays light on the network and the battery.",
          "ytbplus keeps its place when the computer ends the session. Signing out, restarting or shutting down saves the queue, the position and the settings instead of losing the last changes.",
          "No track notification while ytbplus is in front. The window already shows the track, so the notification waits until you are in another app, and the previous track's notification goes.",
          "A default Zen browser on Windows no longer sends sign-in to Firefox. ytbplus recognizes Zen and keeps the sign-in window in Chrome.",
        ],
      },
    ],
  },
  {
    version: "1.0.3",
    date: "18 November 2026",
    changes: [
      {
        kind: "Fixed",
        items: [
          "Signing in with a browser window comes back to ytbplus. The window ytbplus opens now closes when the sign-in ends, including when it fails or times out, even on Windows where Edge can hand the window to another process. ytbplus comes back to the front and says which account signed in.",
        ],
      },
    ],
  },
  {
    version: "1.0.2",
    date: "5 November 2026",
    changes: [
      {
        kind: "Changed",
        items: [
          "A new app icon. The red badge with the white play mark and plus replaces the old blue plate, in the window and taskbar, the tray, and the website favicon.",
        ],
      },
    ],
  },
  {
    version: "1.0.1",
    date: "5 November 2026",
    changes: [
      {
        kind: "Changed",
        items: [
          "Signing in starts with the browser you already use. The dialog offers Import from a browser first, so a browser already signed in to YouTube Music signs ytbplus in without typing an email or password. The throwaway sign-in window and the pasted Cookie header moved under Other ways to sign in.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "The publisher name in the Windows Settings app is latiefahmad again, instead of empty.",
        ],
      },
    ],
  },
  {
    version: "1.0.0",
    date: "5 November 2026",
    changes: [
      {
        kind: "Added",
        items: [
          "The first release: Home, Explore, Search, Library, playlists and podcasts.",
          "A full player with a queue, a mini player, and synced, word-by-word lyrics.",
          "An equaliser, colours taken from the album art, matugen support, and a light or dark theme.",
          "Last.fm scrobbling, listening stats, Discord Rich Presence, media keys and a tray.",
        ],
      },
    ],
  },
];
