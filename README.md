# Zoe Derocher · 2026 Fastpitch Stats

A GitHub Pages site showing advanced batting analytics for Zoe's 2026 season.

## 🚀 Setup (GitHub Pages)

1. Create a new GitHub repository — name it something like `zoe-stats` or `zd12-stats`
2. Upload both files (`index.html` and `stats.js`) to the repo root
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch → main → / (root)**
5. Click Save — your page will be live in ~60 seconds at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## 📊 Updating Stats After Each Game

Open `stats.js` and add a new entry to the `GAMES` array:

```js
{ date: "2026-07-01", opponent: "Team Name 10U",
  pa:3, ab:3, h:2, singles:1, doubles:1, triples:0, hr:0,
  rbi:2, r:1, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:2, cs:0 },
```

**Seasons:** Spring 2026 (10U) games go in `GAMES` / `PITCHING`; Fall 2026 (Intensity 12U McGrath) games go in `FALL_GAMES` / `FALL_PITCHING`. The season switcher at the top of the page picks which one is shown, and `index.html#fall-2026` links straight to Fall. Each season's `innings` setting in `SEASONS` sets the ERA game length; both seasons use 6 to match GameChanger.

**Staff comparison:** The Pitching tab's "Zoe vs. the Pitching Staff" section comes from `FALL_STAFF_PITCHING` in `stats.js`. Copy each pitcher's line from GameChanger's team Stats → **Pitching → Standard** page (official games, no scrimmages), plus the Team row. Keep `self:true` on Zoe's row.

**Field reference:**
| Field | Description |
|-------|-------------|
| `date` | Game date (YYYY-MM-DD) |
| `opponent` | Opponent team name |
| `pa` | Plate appearances |
| `ab` | At bats |
| `h` | Total hits |
| `singles` | 1B hits |
| `doubles` | 2B hits |
| `triples` | 3B hits |
| `hr` | Home runs |
| `rbi` | Runs batted in |
| `r` | Runs scored |
| `bb` | Walks |
| `so` | Strikeouts |
| `hbp` | Hit by pitch |
| `sac` | Sacrifice bunt |
| `sf` | Sacrifice fly |
| `roe` | Reached on error |
| `sb` | Stolen bases |
| `cs` | Caught stealing |

## 📈 Metrics Calculated Automatically

- **AVG / OBP / SLG / OPS** — standard slash line
- **ISO** — isolated power (extra-base hit rate)
- **BABIP** — batting avg on balls in play
- **K% / BB%** — plate discipline rates
- **SB%** — stolen base success rate
- **Rolling charts** — cumulative trend lines across the season

## 🛠 To Add Pitching Stats
When pitching data is available, open `stats.js` and add pitching fields to the `GAMES` array, then ask Claude to build a pitching analytics section into the page.
