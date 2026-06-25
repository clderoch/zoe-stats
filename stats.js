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
// ============================================================

const PLAYER = {
  name: "Zoe Derocher",
  number: 12,
  team: "10U Fastpitch",
  season: "2026"
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
