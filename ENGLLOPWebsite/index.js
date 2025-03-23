document.addEventListener('DOMContentLoaded',postData);
const data = document.location.search;
const params = new URLSearchParams(data);

const name = params.get('fname');
const faith = params.get('faith');
const trait = params.getAll('trait');
const stranded = params.get('stranded');
const truth = params.get('truth');
const range = params.get('range');
const version = params.get('version');


let characters;
let image = 0;
let Acount = 0;
let Bcount = 0;
let Ccount = 0;
let Dcount = 0;

console.log(Acount);

if (trait == "A") {
    Acount++;
} else if (trait == "B") {
    Bcount++;
} else if (trait == "C") {
    Ccount++;
} else {
    Dcount++;
}

if (stranded == "A") {
    Acount++;
} else if (stranded == "B") {
    Bcount++;
} else if (stranded == "C") {
    Ccount++;
} else {
    Dcount++;
}

if (truth == "A") {
    Acount++;
} else if (truth == "B") {
    Bcount++;
} else if (truth == "C") {
    Ccount++;
} else {
    Dcount++;
}

if (version == "A") {
    Acount++;
} else if (version == "B") {
    Bcount++;
} else if (version == "C") {
    Ccount++;
} else {
    Dcount++;
}

if (faith == 1 || faith == 2) {
    Bcount++;
} else if (faith == 3) {
    Ccount++;
} else if (faith == 4) {
    Acount++;
} else {
    Dcount++;
}

if (range == 1 || range == 2) {
    Bcount++;
} else if (range == 3) {
    Ccount++;
} else if (range == 4) {
    Acount++;
} else {
    Dcount++;
}

function maxCountFunction(a, b, c, d) {
    const counts = {
        a:a,
        b:b,
        c:c,
        d:d,
    };

    let maxCount = -1;
    let maxCountVar = "";

    for (const variable in counts) {
        if (counts[variable] > maxCount) {
            maxCount = counts[variable];
            maxCountVar = variable;
        }
    }

    return maxCountVar;
}

const highestCountVar = maxCountFunction(Acount, Bcount, Ccount, Dcount);

if (highestCountVar == 'a') {
    characters = 'Faithful';
    image = 'images/faithfulSurvivour.jpeg';
    sentence = 'You embrace faith and use it as a source of strength and resilience. In times of adversity, you approach the challenges with positivity, by seeing them as an opportunity for personal growth just like Pi.'
} else if (highestCountVar == 'b') {
    characters = 'Pragmatic';
    image = 'images/pragmatic.png';
    sentence = 'You value practical solutions over abstract beliefs. Similar to the strategic method used by Pi, you use practical techniques to prioritize your survival and well-being.';
} else if (highestCountVar == 'c') {
    characters = 'Agnostic';
    image = 'images/agnostic.png';
    sentence = 'You are open-minded and unsure about definitive truths. You look for meaning from multiple sources.';
} else {
    characters = 'Existentialist';
    image = 'images/existentialism.png';
    sentence = 'You believe in existentialsm. You believe that life can feel meaningless and chaotic, but it is your own choice to give it a meaning. Despite this lack of order, you believe in using self-determination to craft your own way in this world.';
}


//wriitng html code
function postData() {
    const container = document.getElementById('results');
    container.innerHTML = `<h1 style="color: white; font-family: copperplate">${name}, you are a(n) ${characters}!</h1>
                            <p style="color:white; font-family: fantasy">${sentence}</p>
                            <img src="${image}"></img>`;
    }
