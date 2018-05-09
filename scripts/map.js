"use strict";
var nameAge = new Map();
nameAge.set("Bruninho Map", 30);
nameAge.set("T Chan", 23);
nameAge.set("Bruninho Map", 31);
// nameAge.set()
console.log(nameAge);
console.log("-----------------------------");
var nameAge2 = new Map().set("Bruninho", 1).set("T Chan", 2);
console.log(nameAge2);
console.log("-----------------------------");
var animeEpisodes = new Map([
    ["DBZ", 200], ["Lain", 13], ["FullMetal", 64]
]);
console.log(animeEpisodes);
console.log(animeEpisodes.get("Lain"));
console.log(animeEpisodes.has("FullMetal"));
// console.log(animeEpisodes.delete("FullMetal"));
// console.log(animeEpisodes.has("FullMetal"));
for (var _i = 0, _a = Array.from(animeEpisodes.keys()); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
console.log("-----------------------------");
console.log("-----------------------------");
for (var _b = 0, _c = Array.from(animeEpisodes.values()); _b < _c.length; _b++) {
    var v = _c[_b];
    console.log(v);
}
console.log("-----------------------------");
console.log("-----------------------------");
for (var _d = 0, _e = Array.from(animeEpisodes.entries()); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry);
}
console.log("-----------------------------");
for (var _f = 0, _g = Array.from(animeEpisodes); _f < _g.length; _f++) {
    var entry = _g[_f];
    console.log(entry[0] + " | " + entry[1]);
}
console.log("-----------------------------");
console.log("-----------------------------");
animeEpisodes.clear();
console.log(animeEpisodes.size);
