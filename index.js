let cats = ["Milo", "Otis", "Garfield"];

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}
