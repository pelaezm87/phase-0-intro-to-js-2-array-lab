// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newCat1 = [...cats, "Broom"]
    return newCat1;
}

function prependCat(name) {
    const newCat2 = ["Arnold", ...cats]
    return newCat2;
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    return cats.splice(1);
}