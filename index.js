// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name) {
          cats.push(name);
          return cats;
};

function  destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
};

function  destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
};

function  destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
};


function  appendCat(name) {
    const kitties = [...cats];
    kitties.push(name);
    return kitties
};

function  prependCat(name) {
    const kitties = [...cats];
    kitties.unshift(name);
    return kitties
};

function  removeLastCat(name) {
    const kitties = [...cats];
    kitties.pop(name);
    return kitties
};

function  removeFirstCat(name) {
    const kitties = [...cats];
    kitties.shift(name);
    return kitties
};

/*function restoreCatsArray(){
    cats = ["Milo", "Otis", "Garfield"];
}
restoreCatsArray();
*/



