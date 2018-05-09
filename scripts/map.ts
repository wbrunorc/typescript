let nameAge = new Map<string, number>();
nameAge.set("Bruninho Map", 30);
nameAge.set("T Chan", 23);
nameAge.set("Bruninho Map", 31);
// nameAge.set()

console.log(nameAge);
console.log("-----------------------------");

let nameAge2 = new Map<string, number>().set("Bruninho", 1).set("T Chan", 2);
console.log(nameAge2);
console.log("-----------------------------");

let animeEpisodes = new Map<string, number>([
    ["DBZ", 200], ["Lain", 13], ["FullMetal", 64]
]);

console.log(animeEpisodes);
console.log(animeEpisodes.get("Lain"));
console.log(animeEpisodes.has("FullMetal"));
// console.log(animeEpisodes.delete("FullMetal"));
// console.log(animeEpisodes.has("FullMetal"));



for (let key of Array.from(animeEpisodes.keys())) {
    console.log(key);
}
console.log("-----------------------------");
console.log("-----------------------------");

for(let v of Array.from(animeEpisodes.values())){
    console.log(v);
}
console.log("-----------------------------");
console.log("-----------------------------");

for(let entry of Array.from(animeEpisodes.entries())){
    console.log(entry);
}
console.log("-----------------------------");


for(let entry of Array.from(animeEpisodes)){
    console.log(`${entry[0]} | ${entry[1]}`);
}
console.log("-----------------------------");
console.log("-----------------------------");

animeEpisodes.clear();
console.log(animeEpisodes.size);
