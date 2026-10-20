// ============================================================
//  ZOE DEROCHER — SEASON STATS
//  Update this file after each game to keep the page current.
//
//  BATTING FIELDS:
//    date, opponent, pa, ab, h, singles, doubles, triples, hr,
//    rbi, r, bb, so, hbp, sac, sf, roe, sb, cs
//
//  PITCHING FIELDS:
//    ip (innings pitched as decimal e.g. 5.2), gs (game started 0/1),
//    bf (batters faced), pitches, w, l, sv, h_allowed, r_allowed,
//    er, bb_p (walks), k (strikeouts), hbp_p, era, whip, lob, bk, pik, cs_p, sb_p
//
//  SEASONS (bottom of file) lists each season shown in the season
//  switcher. Spring 2026 uses GAMES / PITCHING; Fall 2026 uses
//  FALL_GAMES / FALL_PITCHING. Same fields for both.
//
//  Add scrim:true to a scrimmage game; the page's "No Scrimmages"
//  filter leaves those games out of every total, chart, and log.
// ============================================================

const PLAYER = {
  name: "Zoe Derocher",
  number: 12
};

const GAMES = [
  { date: "2026-03-08", opponent: "East Boise Select 10U",     pa:2, ab:1, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:1, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-03-14", opponent: "Kuna Kaos 10U",             pa:2, ab:2, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:0, so:2, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-03-14", opponent: "Idaho Show 10U",            pa:1, ab:1, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-03-28", opponent: "Badbusters Enochson 10U",   pa:2, ab:1, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:1, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-03-28", opponent: "Kuna Kaos 10U",             pa:2, ab:2, h:1, singles:0, doubles:0, triples:1, hr:0, rbi:0, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-03-28", opponent: "Idaho Badbusters Simpson",  pa:1, ab:1, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-03-29", opponent: "Badbusters Enochson 10U",   pa:2, ab:2, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-03-29", opponent: "Idaho Badbusters Simpson",  pa:1, ab:1, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:0, r:1, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-04-04", opponent: "Kuna Kaos 10U",             pa:2, ab:1, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:1, r:2, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:2, cs:0 },
  { date: "2026-04-04", opponent: "Boise Blast Jennings 10U",  pa:1, ab:1, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-04-11", opponent: "Badbusters Enochson 10U",   pa:2, ab:2, h:2, singles:1, doubles:1, triples:0, hr:0, rbi:1, r:0, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:1 },
  { date: "2026-04-29", opponent: "Nampa Pride-Mauzella 10U",  pa:2, ab:2, h:1, singles:0, doubles:1, triples:0, hr:0, rbi:0, r:1, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-05-01", opponent: "Lady Stars 10U 2026",       pa:2, ab:1, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-05-01", opponent: "Badbusters Enochson 10U",   pa:1, ab:1, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:2, r:0, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-05-02", opponent: "Kuna Kaos 10U",             pa:1, ab:0, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:1, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-05-03", opponent: "Badbusters Enochson 10U",   pa:3, ab:3, h:1, singles:0, doubles:0, triples:1, hr:0, rbi:1, r:2, bb:0, so:0, hbp:0, sac:0, sf:0, roe:1, sb:1, cs:0 },
  { date: "2026-05-09", opponent: "East Boise Select 10U",     pa:2, ab:2, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:1, r:0, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-05-09", opponent: "Idaho Show 10U",            pa:2, ab:2, h:2, singles:1, doubles:1, triples:0, hr:0, rbi:1, r:2, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-05-17", opponent: "Nampa Dice 10U",            pa:2, ab:1, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:1, r:1, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-05-17", opponent: "Idaho Show 10U",            pa:2, ab:2, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:1, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-05-20", opponent: "Badbusters Enochson 10U",   pa:3, ab:3, h:2, singles:1, doubles:0, triples:1, hr:0, rbi:2, r:2, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-05-22", opponent: "Aces 10U",                  pa:3, ab:1, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:3, bb:1, so:0, hbp:1, sac:0, sf:0, roe:1, sb:2, cs:0 },
  { date: "2026-05-22", opponent: "UV Vipers 12U",             pa:3, ab:3, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:1, r:1, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-05-23", opponent: "Aces 10U",                  pa:3, ab:3, h:3, singles:1, doubles:2, triples:0, hr:0, rbi:1, r:1, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:2, cs:0 },
  { date: "2026-05-23", opponent: "Aces 10U (2)",              pa:3, ab:3, h:3, singles:1, doubles:1, triples:0, hr:1, rbi:2, r:2, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:4, cs:0 },
  { date: "2026-05-27", opponent: "Badbusters Enochson 10U",   pa:2, ab:1, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:1, r:1, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-06-05", opponent: "Rural 208 10U",             pa:2, ab:2, h:2, singles:0, doubles:2, triples:0, hr:0, rbi:2, r:2, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:2, cs:0 },
  { date: "2026-06-05", opponent: "TBD",                       pa:3, ab:3, h:3, singles:0, doubles:3, triples:0, hr:0, rbi:4, r:2, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:4, cs:0 },
  { date: "2026-06-05", opponent: "Boise Blast Campanella 10U",pa:2, ab:2, h:2, singles:0, doubles:2, triples:0, hr:0, rbi:1, r:2, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:2, cs:0 },
  { date: "2026-06-06", opponent: "Nampa Dice 10U",            pa:3, ab:3, h:2, singles:0, doubles:2, triples:0, hr:0, rbi:2, r:0, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-06-06", opponent: "Rural 208 10U",             pa:3, ab:1, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:2, bb:2, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-06-15", opponent: "10U All Stars Carter/Richa",pa:2, ab:2, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:2, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-06-19", opponent: "Nampa Pride Lee-Araiza 10U",pa:2, ab:2, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-06-19", opponent: "TBD",                       pa:2, ab:2, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:2, cs:0 },
  { date: "2026-06-20", opponent: "10U All Stars Carter/Richa",pa:2, ab:1, h:1, singles:0, doubles:0, triples:1, hr:0, rbi:2, r:2, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:2, cs:0 },
  { date: "2026-06-20", opponent: "10U All Stars Carter/Richa",pa:3, ab:3, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:0, r:2, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:4, cs:0 },
  { date: "2026-06-21", opponent: "Nampa Dice 10U",            pa:3, ab:3, h:3, singles:3, doubles:0, triples:0, hr:0, rbi:1, r:1, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:3, cs:0 },
  { date: "2026-06-21", opponent: "MYS 2026 10U Allstars",     pa:2, ab:1, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:1, r:1, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:4, cs:1 },
  { date: "2026-06-25", opponent: "East Boise Select 10U",     pa:3, ab:3, h:2, singles:2, doubles:0, triples:0, hr:0, rbi:1, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-06-25", opponent: "Kuna Krossfire 10U Select", pa:3, ab:2, h:2, singles:1, doubles:1, triples:0, hr:0, rbi:1, r:3, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:4, cs:0 },
];

// ip stored as GameChanger decimal (e.g. 5.2 = 5 innings + 2 outs)
// Helper to convert GC decimal IP to true decimal for math
function ipToDecimal(ip) {
  const whole = Math.floor(ip);
  const outs = Math.round((ip - whole) * 10);
  return whole + outs / 3;
}

const PITCHING = [
  { date:"2026-03-08", opponent:"East Boise Select 10U",    ip:1.0, gs:0, bf:7,  pitches:31,  w:0, l:0, sv:0, h_allowed:0, r_allowed:2,  er:2, bb_p:5, k:2,  hbp_p:0, lob:2, bk:0, pik:0, cs_p:1, sb_p:1 },
  { date:"2026-03-14", opponent:"Idaho Show 10U",           ip:1.0, gs:1, bf:10, pitches:47,  w:0, l:0, sv:0, h_allowed:0, r_allowed:5,  er:5, bb_p:7, k:3,  hbp_p:0, lob:2, bk:0, pik:0, cs_p:0, sb_p:1 },
  { date:"2026-03-28", opponent:"Badbusters Enochson 10U",  ip:6.0, gs:1, bf:26, pitches:124, w:1, l:0, sv:0, h_allowed:1, r_allowed:2,  er:1, bb_p:7, k:16, hbp_p:1, lob:6, bk:0, pik:0, cs_p:1, sb_p:8 },
  { date:"2026-03-29", opponent:"Badbusters Enochson 10U",  ip:6.0, gs:1, bf:22, pitches:99,  w:1, l:0, sv:0, h_allowed:1, r_allowed:3,  er:0, bb_p:3, k:15, hbp_p:0, lob:1, bk:0, pik:0, cs_p:0, sb_p:2 },
  { date:"2026-03-29", opponent:"Idaho Badbusters Simpson", ip:0.2, gs:0, bf:5,  pitches:31,  w:0, l:0, sv:0, h_allowed:0, r_allowed:0,  er:0, bb_p:3, k:1,  hbp_p:0, lob:2, bk:0, pik:0, cs_p:0, sb_p:1 },
  { date:"2026-04-04", opponent:"Kuna Kaos 10U",            ip:2.0, gs:0, bf:6,  pitches:27,  w:0, l:0, sv:0, h_allowed:0, r_allowed:0,  er:0, bb_p:1, k:5,  hbp_p:0, lob:0, bk:0, pik:0, cs_p:1, sb_p:0 },
  { date:"2026-04-11", opponent:"Badbusters Enochson 10U",  ip:1.1, gs:0, bf:4,  pitches:21,  w:0, l:0, sv:0, h_allowed:0, r_allowed:0,  er:0, bb_p:0, k:4,  hbp_p:0, lob:3, bk:0, pik:0, cs_p:0, sb_p:0 },
  { date:"2026-04-29", opponent:"Nampa Pride-Mazzella 10U", ip:1.0, gs:0, bf:3,  pitches:10,  w:0, l:0, sv:0, h_allowed:0, r_allowed:0,  er:0, bb_p:0, k:2,  hbp_p:0, lob:0, bk:0, pik:0, cs_p:0, sb_p:0 },
  { date:"2026-05-01", opponent:"Badbusters Enochson 10U",  ip:2.1, gs:1, bf:13, pitches:64,  w:1, l:0, sv:0, h_allowed:1, r_allowed:2,  er:2, bb_p:5, k:5,  hbp_p:0, lob:1, bk:0, pik:0, cs_p:0, sb_p:6 },
  { date:"2026-05-02", opponent:"Kuna Kaos 10U",            ip:3.0, gs:1, bf:9,  pitches:38,  w:1, l:0, sv:0, h_allowed:2, r_allowed:0,  er:0, bb_p:0, k:6,  hbp_p:0, lob:0, bk:0, pik:0, cs_p:1, sb_p:0 },
  { date:"2026-05-03", opponent:"Badbusters Enochson 10U",  ip:4.0, gs:1, bf:16, pitches:71,  w:1, l:0, sv:1, h_allowed:3, r_allowed:2,  er:2, bb_p:1, k:9,  hbp_p:0, lob:1, bk:0, pik:0, cs_p:0, sb_p:1 },
  { date:"2026-05-09", opponent:"Idaho Show 10U",           ip:1.0, gs:0, bf:3,  pitches:11,  w:1, l:0, sv:0, h_allowed:0, r_allowed:0,  er:0, bb_p:0, k:1,  hbp_p:0, lob:0, bk:0, pik:0, cs_p:0, sb_p:0 },
  { date:"2026-05-17", opponent:"Nampa Elite 10U",          ip:3.0, gs:1, bf:18, pitches:69,  w:1, l:0, sv:0, h_allowed:5, r_allowed:6,  er:2, bb_p:2, k:7,  hbp_p:1, lob:3, bk:0, pik:0, cs_p:0, sb_p:6 },
  { date:"2026-05-22", opponent:"UV Vipers 12U",            ip:5.0, gs:1, bf:26, pitches:122, w:1, l:0, sv:0, h_allowed:2, r_allowed:7,  er:6, bb_p:10,k:12, hbp_p:0, lob:4, bk:0, pik:0, cs_p:1, sb_p:12 },
  { date:"2026-05-23", opponent:"Aces 10U",                 ip:5.2, gs:0, bf:25, pitches:110, w:1, l:0, sv:0, h_allowed:4, r_allowed:1,  er:1, bb_p:5, k:14, hbp_p:0, lob:7, bk:0, pik:0, cs_p:0, sb_p:7 },
  { date:"2026-06-05", opponent:"Rural 208 10U",            ip:2.0, gs:1, bf:7,  pitches:26,  w:0, l:0, sv:0, h_allowed:1, r_allowed:0,  er:0, bb_p:0, k:5,  hbp_p:0, lob:1, bk:0, pik:0, cs_p:0, sb_p:1 },
  { date:"2026-06-05", opponent:"Boise Blast Campanella 10U",ip:3.0,gs:1, bf:11, pitches:51,  w:0, l:0, sv:0, h_allowed:1, r_allowed:1,  er:1, bb_p:2, k:8,  hbp_p:0, lob:1, bk:0, pik:0, cs_p:1, sb_p:6 },
  { date:"2026-06-06", opponent:"Nampa Elite 10U",          ip:1.2, gs:0, bf:10, pitches:37,  w:0, l:0, sv:0, h_allowed:3, r_allowed:2,  er:2, bb_p:2, k:2,  hbp_p:0, lob:1, bk:0, pik:0, cs_p:1, sb_p:5 },
  { date:"2026-06-15", opponent:"10U All Stars Carter/Richa",ip:1.0,gs:0, bf:7,  pitches:35,  w:0, l:0, sv:0, h_allowed:1, r_allowed:3,  er:2, bb_p:3, k:3,  hbp_p:0, lob:1, bk:0, pik:0, cs_p:0, sb_p:4 },
  { date:"2026-06-19", opponent:"TBD-06/19/26",             ip:4.0, gs:1, bf:13, pitches:58,  w:0, l:0, sv:0, h_allowed:1, r_allowed:0,  er:0, bb_p:1, k:9,  hbp_p:0, lob:1, bk:0, pik:0, cs_p:1, sb_p:1 },
  { date:"2026-06-21", opponent:"MYS 2026 10U Allstars",    ip:4.0, gs:1, bf:13, pitches:52,  w:0, l:0, sv:0, h_allowed:1, r_allowed:0,  er:0, bb_p:0, k:10, hbp_p:0, lob:1, bk:0, pik:0, cs_p:0, sb_p:8 },
  { date:"2026-06-25", opponent:"Kuna Krossfire 10U Select", ip:5.0, gs:1, bf:20, pitches:91,  w:0, l:0, sv:0, h_allowed:3, r_allowed:2,  er:2, bb_p:3, k:14, hbp_p:0, lob:3, bk:0, pik:0, cs_p:1, sb_p:4 },
];

// ── FALL 2026 · INTENSITY 12U McGRATH ──────────────────────────
const FALL_GAMES = [
  { date: "2026-09-18", opponent: "Idaho Show Black 12U (Scrim)", scrim:true,   pa:3, ab:1, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:1, r:1, bb:1, so:1, hbp:1, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-09-27", opponent: "Idaho Reign-12U Noell",          pa:3, ab:3, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:1, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-09-27", opponent: "Boise Blast Crespin 12U",        pa:2, ab:2, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:1, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-09-27", opponent: "East Boise Select 12U",          pa:2, ab:2, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:1, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-09-30", opponent: "Idaho Show Orange 12U (Scrim)", scrim:true,  pa:2, ab:1, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:1, r:0, bb:1, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-03", opponent: "Idaho Rampage 12u Denton",       pa:3, ab:3, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-03", opponent: "12u Rural 208",                  pa:3, ab:3, h:2, singles:2, doubles:0, triples:0, hr:0, rbi:2, r:1, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:2, cs:0 },
  { date: "2026-10-03", opponent: "12u Rural 208 (2)",              pa:3, ab:3, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:2, r:1, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-03", opponent: "Blacksheep - Fletcher",          pa:2, ab:1, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-04", opponent: "Blacksheep - Fletcher",          pa:3, ab:3, h:2, singles:2, doubles:0, triples:0, hr:0, rbi:0, r:2, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-10", opponent: "Idaho Rampage 12u Denton",       pa:4, ab:4, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:1, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-10", opponent: "Idaho Show 12U Teal",            pa:4, ab:4, h:4, singles:3, doubles:1, triples:0, hr:0, rbi:2, r:2, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-10-10", opponent: "Bandits - NBR Select 12U",       pa:3, ab:2, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:1, r:0, bb:1, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-11", opponent: "Idaho Reign-12U Noell",          pa:3, ab:3, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:0, so:1, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-16", opponent: "Blast- Cox 12U",                 pa:2, ab:2, h:0, singles:0, doubles:0, triples:0, hr:0, rbi:0, r:0, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-17", opponent: "Idaho Rampage 12u Denton",       pa:3, ab:2, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:2, r:0, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-17", opponent: "TBD",                            pa:2, ab:2, h:2, singles:2, doubles:0, triples:0, hr:0, rbi:2, r:1, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:1, cs:0 },
  { date: "2026-10-17", opponent: "Idaho Show 12U Teal",            pa:3, ab:3, h:1, singles:0, doubles:0, triples:1, hr:0, rbi:2, r:1, bb:0, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-18", opponent: "Idaho Rampage 12u Denton",       pa:3, ab:2, h:1, singles:1, doubles:0, triples:0, hr:0, rbi:1, r:1, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
  { date: "2026-10-18", opponent: "Idaho Show Orange 12U",          pa:3, ab:2, h:2, singles:2, doubles:0, triples:0, hr:0, rbi:3, r:1, bb:1, so:0, hbp:0, sac:0, sf:0, roe:0, sb:0, cs:0 },
];

const FALL_PITCHING = [
  { date:"2026-09-18", opponent:"Idaho Show Black 12U (Scrim)", scrim:true, ip:1.0, gs:0, bf:3,  pitches:11, w:0, l:0, sv:0, h_allowed:1, r_allowed:0, er:0, bb_p:0, k:1, hbp_p:0, lob:0, bk:0, pik:0, cs_p:1, sb_p:0 },
  { date:"2026-09-27", opponent:"East Boise Select 12U",        ip:3.2, gs:0, bf:21, pitches:85, w:0, l:0, sv:0, h_allowed:5, r_allowed:4, er:4, bb_p:4, k:7, hbp_p:1, lob:6, bk:0, pik:0, cs_p:0, sb_p:6 },
  { date:"2026-10-03", opponent:"Idaho Rampage 12u Denton",     ip:6.0, gs:1, bf:23, pitches:77, w:1, l:0, sv:0, h_allowed:4, r_allowed:1, er:1, bb_p:1, k:8, hbp_p:0, lob:4, bk:0, pik:0, cs_p:1, sb_p:1 },
  { date:"2026-10-10", opponent:"Bandits - NBR Select 12U",     ip:4.1, gs:0, bf:19, pitches:64, w:1, l:0, sv:0, h_allowed:2, r_allowed:1, er:1, bb_p:4, k:6, hbp_p:0, lob:5, bk:0, pik:0, cs_p:0, sb_p:0 },
  { date:"2026-10-11", opponent:"Idaho Reign-12U Noell",        ip:4.1, gs:1, bf:23, pitches:92, w:0, l:0, sv:0, h_allowed:9, r_allowed:7, er:7, bb_p:4, k:5, hbp_p:0, lob:3, bk:0, pik:0, cs_p:0, sb_p:12 },
  { date:"2026-10-17", opponent:"Idaho Rampage 12u Denton",     ip:3.0, gs:1, bf:17, pitches:47, w:0, l:0, sv:0, h_allowed:6, r_allowed:5, er:5, bb_p:3, k:4, hbp_p:0, lob:3, bk:0, pik:0, cs_p:1, sb_p:4 },
  { date:"2026-10-18", opponent:"Idaho Show Orange 12U",        ip:1.0, gs:0, bf:8,  pitches:28, w:0, l:0, sv:0, h_allowed:3, r_allowed:2, er:2, bb_p:2, k:2, hbp_p:0, lob:3, bk:0, pik:0, cs_p:0, sb_p:0 },
];

// GameChanger "Pitching → Advanced" tab, copied exactly as shown (null = "-").
// Percentages are 0–100. totals is the Totals row from Zoe's player page, which
// includes scrimmages. officialTotals (optional) is the same row with scrimmages
// left out, from the team Stats page; the "No Scrimmages" filter uses it. Like GameChanger,
// babip and barisp on each game row are season-to-date, not that game alone.
//   pip P/IP · pbf P/BF · lbfp LBFP# · lt3 <3% · loo LOO · first2out 1ST2OUT · inn123 123INN
//   lt13 <13 · fip FIP · s S% · fps FPS% · fpso FPSO% · fpsw FPSW% · fpsh FPSH%
//   bbinn BB/INN · zerobbinn 0BBINN · bbs BBS · lobb LOBB · lobbs LOBBS · sm SM%
//   kbf K/BF · kbb K/BB · weak WEAK% · hhb HHB% · goao GO/AO · hr HR · ld LD% · fb FB% · gb GB%
//   babip BABIP · barisp BA/RISP
const FALL_PITCHING_ADV = {
  totals:
    { ip:23.1, bf:114, pip:17.3, pbf:3.544, lbfp:null, lt3:48.25, loo:14, first2out:8, inn123:5, lt13:10, fip:3.045, s:59.65, fps:58.77, fpso:58.21, fpsw:8.96,  fpsh:31.34, bbinn:.771,  zerobbinn:11, bbs:5, lobb:3, lobbs:2, sm:12.38, kbf:.289, kbb:1.833, weak:77.05, hhb:22.95, goao:.611,  hr:1, ld:16.39, fb:36.07, gb:44.83, babip:.483, barisp:.359 },
  games: [
    { date:"2026-09-18", opponent:"Idaho Show Black 12U (Scrim)", scrim:true, ip:1.0, bf:3,  pip:11.0, pbf:3.667, lbfp:3,  lt3:66.67, loo:0, first2out:0, inn123:0, lt13:1, fip:1.680, s:72.73, fps:66.67, fpso:50.00, fpsw:0.00,  fpsh:50.00, bbinn:.000,  zerobbinn:1, bbs:0, lobb:0, lobbs:0, sm:9.09,  kbf:.333, kbb:null,  weak:100.0, hhb:0.00,  goao:.000,  hr:0, ld:0.00,  fb:50.00, gb:50.00, babip:.500, barisp:null },
    { date:"2026-09-27", opponent:"East Boise Select 12U",        ip:3.2, bf:21, pip:23.2, pbf:4.048, lbfp:82, lt3:23.81, loo:3, first2out:0, inn123:0, lt13:0, fip:2.564, s:54.12, fps:52.38, fpso:36.36, fpsw:18.18, fpsh:45.45, bbinn:1.091, zerobbinn:0, bbs:1, lobb:0, lobbs:0, sm:10.59, kbf:.333, kbb:1.750, weak:100.0, hhb:0.00,  goao:1.000, hr:0, ld:0.00,  fb:55.56, gb:37.50, babip:.545, barisp:.286 },
    { date:"2026-10-03", opponent:"Idaho Rampage 12u Denton",     ip:6.0, bf:23, pip:12.8, pbf:3.348, lbfp:76, lt3:52.17, loo:4, first2out:3, inn123:3, lt13:4, fip:1.500, s:70.13, fps:69.57, fpso:75.00, fpsw:6.25,  fpsh:18.75, bbinn:.167,  zerobbinn:5, bbs:0, lobb:1, lobbs:0, sm:16.88, kbf:.348, kbb:8.000, weak:92.86, hhb:7.14,  goao:.500,  hr:0, ld:7.14,  fb:50.00, gb:38.46, babip:.400, barisp:.235 },
    { date:"2026-10-10", opponent:"Bandits - NBR Select 12U",     ip:4.1, bf:19, pip:14.8, pbf:3.368, lbfp:61, lt3:57.89, loo:3, first2out:2, inn123:2, lt13:2, fip:3.051, s:59.38, fps:63.16, fpso:91.67, fpsw:8.33,  fpsh:0.00,  bbinn:.923,  zerobbinn:2, bbs:1, lobb:1, lobbs:1, sm:20.31, kbf:.316, kbb:1.500, weak:77.78, hhb:22.22, goao:1.000, hr:0, ld:11.11, fb:22.22, gb:66.67, babip:.353, barisp:.200 },
    { date:"2026-10-11", opponent:"Idaho Reign-12U Noell",        ip:4.1, bf:23, pip:21.2, pbf:4.000, lbfp:88, lt3:43.48, loo:3, first2out:2, inn123:0, lt13:1, fip:3.425, s:54.35, fps:34.78, fpso:25.00, fpsw:0.00,  fpsh:75.00, bbinn:.923,  zerobbinn:2, bbs:2, lobb:0, lobbs:0, sm:9.78,  kbf:.217, kbb:1.250, weak:78.57, hhb:21.43, goao:.667,  hr:0, ld:21.43, fb:28.57, gb:50.00, babip:.438, barisp:.250 },
    { date:"2026-10-17", opponent:"Idaho Rampage 12u Denton",     ip:3.0, bf:17, pip:15.7, pbf:2.765, lbfp:47, lt3:70.59, loo:1, first2out:1, inn123:0, lt13:2, fip:6.180, s:61.70, fps:76.47, fpso:61.54, fpsw:7.69,  fpsh:30.77, bbinn:1.000, zerobbinn:1, bbs:1, lobb:1, lobbs:1, sm:2.13,  kbf:.235, kbb:1.333, weak:33.33, hhb:66.67, goao:.000,  hr:1, ld:44.44, fb:33.33, gb:22.22, babip:.456, barisp:.324 },
    { date:"2026-10-18", opponent:"Idaho Show Orange 12U",        ip:1.0, bf:8,  pip:28.0, pbf:3.500, lbfp:24, lt3:37.50, loo:0, first2out:0, inn123:0, lt13:0, fip:4.380, s:57.14, fps:62.50, fpso:20.00, fpsw:20.00, fpsh:40.00, bbinn:2.000, zerobbinn:0, bbs:0, lobb:0, lobbs:0, sm:14.29, kbf:.250, kbb:1.000, weak:50.00, hhb:50.00, goao:null,  hr:0, ld:25.00, fb:0.00,  gb:66.67, babip:.483, barisp:.359 },
  ],
};

// GameChanger team Stats → "Pitching - standard", copied as shown. Includes scrimmages.
// name is shown with the jersey number; self:true marks Zoe's row.
//   so SO · kl K-L (strikeouts looking) · hbp HBP · era ERA · whip WHIP
const FALL_PITCHING_TEAM = {
  pitchers: [
    { name:"K Mendoza", number:10, so:19, kl:6,  hbp:1, era:9.000, whip:2.83 },
    { name:"Z Derocher", number:12, so:33, kl:19, hbp:1, era:5.143, whip:2.05, self:true },
    { name:"J Wilde", number:5,  so:17, kl:8,  hbp:3, era:7.258, whip:2.90 },
    { name:"E Throne", number:4,  so:1,  kl:1,  hbp:1, era:11.65, whip:4.41 },
    { name:"A Weathers", number:8,  so:5,  kl:2,  hbp:0, era:3.000, whip:1.00 },
    { name:"Q Ringe...erg", number:45, so:5,  kl:4,  hbp:2, era:20.25, whip:6.00 },
  ],
  team: { so:80, kl:40, hbp:8, era:7.793, whip:2.75 },
};

// innings = regulation game length used for ERA; 6 for both seasons to match GameChanger
// pitchingAdv (optional) = GameChanger advanced pitching tab; the section is hidden without it
// pitchingTeam (optional) = GameChanger team pitching table for the Team Comparison section
const SEASONS = [
  { id:"spring-2026", label:"Spring 2026", team:"10U Fastpitch",         innings:6, games:GAMES,      pitching:PITCHING },
  { id:"fall-2026",   label:"Fall 2026",   team:"Intensity 12U McGrath", innings:6, games:FALL_GAMES, pitching:FALL_PITCHING, pitchingAdv:FALL_PITCHING_ADV, pitchingTeam:FALL_PITCHING_TEAM },
];
