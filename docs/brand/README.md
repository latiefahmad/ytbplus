# Brand

| File | Use |
| --- | --- |
| `ytbplus.png` | The master app icon artwork, 2000 × 2000 with a transparent background. `resources/icon.png` and the website favicons are exported from it. |
| `wordmark-light.svg` | The name, on light backgrounds. The app itself shows only the wordmark. |
| `wordmark-dark.svg` | The name, on dark backgrounds. |
| `wordmark-accent.svg` | The name with the `+` in the brand blue, for places with room for one extra colour. |
| `icon.svg` | The app icon as flat vector shapes, matching `ytbplus.png`; the website favicon source. |
| `tray-wordmark.svg` | The tray wordmark, flat black for template rendering. |
| `tray-glyph.svg` | The standalone play glyph, flat black for template rendering. |
| `resources/tray-wordmark.png` | The wordmark export used by the macOS and Linux tray. |
| `resources/tray-glyph.png` | The glyph export used by the macOS and Linux tray. |

The wordmark reads **ytbplus** in Google Sans, the app's own typeface, with the
letters set slightly tighter than the font's default and outlined so no font is
needed to show them. The `+` is the one part that can take the brand blue: on
its own it says what the app adds to the YouTube Music it wraps.

## Colours

| Name | Hex | Where |
| --- | --- | --- |
| Badge | `#FF0000` | The icon's rounded rectangle |
| Mark | `#FFFFFF` | The play glyph and the `+` on the badge |
| Accent | `#3388BB` | The `+` in `wordmark-accent.svg`, and the app's default tint |
| Ink | `#1D1B20` | Wordmark on light backgrounds; `#F3F1F8` on dark ones |

## The icon

`ytbplus.png` is the master artwork: a red rounded badge carrying a white play
mark with a white `+` at its upper right, so the icon reads as YouTube Music
plus what the app adds to it. Keep it as the source and export from it rather
than redrawing the mark by hand.

`icon.svg` is the same badge as flat vector shapes, for places that need an
icon that scales without a raster: a `#FF0000` rounded rectangle with the white
play mark and `+` clipped to it.

`resources/icon.png` is the artwork exported at 1024 × 1024 with a transparent
background, the badge centred and scaled to 88% of the width.

The website favicons are exported from the same artwork: `favicon.ico` with
16, 32, 48, 64, 128 and 256 px entries, `favicon-64.png`, and
`apple-touch-icon.png` at 180 × 180.

The macOS and Linux tray images are transparent PNG exports of the two tray
SVGs: `tray-wordmark.svg` at 191 × 64 px, and `tray-glyph.svg` at 64 × 64 px
with extra transparent space around it for a quieter appearance. Windows uses
`icon.png` instead: its notification area reuses the tray icon in track
notifications, and template icons become a solid white square on a dark
taskbar.
