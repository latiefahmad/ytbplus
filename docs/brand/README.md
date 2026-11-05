# Brand

| File | Use |
| --- | --- |
| `wordmark-light.svg` | The name, on light backgrounds. The app itself shows only the wordmark. |
| `wordmark-dark.svg` | The name, on dark backgrounds. |
| `wordmark-accent.svg` | The name with the `+` in the brand blue, for places with room for one extra colour. |
| `icon.svg` | The app icon, the source of `resources/icon.png`. |
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
| Plate, top | `#469DD3` | The icon's background, from top to bottom |
| Plate, bottom | `#1F5C8C` | The icon's background, from top to bottom |
| Accent | `#3388BB` | The `+` in `wordmark-accent.svg`, and the app's default tint |
| Sweep | `#FFD364` → `#FF8899` → `#77BBDD` → `#77DD77` | The bar under the play mark |
| Ink | `#1D1B20` | Wordmark on light backgrounds; `#F3F1F8` on dark ones |

The bar's four stops are the colours the app draws a song's interface from, so
the icon carries the idea that the cover picks the colour.

## The icon

`icon.svg` is flat shapes with light Icon Composer-style shading: a gradient
plate with a lit rim, a gentle top-to-bottom sheen, a white play mark, and a
coloured bar under it standing in for the progress line.

`resources/icon.png` is the same artwork exported at 1024 × 1024 with a
transparent background, the rounded square scaled to 824 px and centred (the
macOS icon grid), with a soft shadow under it.

The macOS and Linux tray images are transparent PNG exports of the two tray
SVGs: `tray-wordmark.svg` at 191 × 64 px, and `tray-glyph.svg` at 64 × 64 px
with extra transparent space around it for a quieter appearance. Windows uses
`icon.png` instead: its notification area reuses the tray icon in track
notifications, and template icons become a solid white square on a dark
taskbar.
