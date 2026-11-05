// The releases the page offers. Versions and asset names come from the
// workflow, so the download links point at files that really exist.
export const version = "1.0.2";
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
