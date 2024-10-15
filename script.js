// frequency constants
const c4 = 261.63;
const chs4 = 269.30;
const cs4 = 277.18;
const dhf4 = 285.30;
const d4 = 293.66;
const dhs4 = 302.26;
const ds4 = 311.13;
const ehf4 = 320.25;
const e4 = 329.63;
const ehs4 = 339.29;
const f4 = 349.23;
const fhs4 = 359.46;
const fs4 = 369.99;
const ghf4 = 380.83;
const g4 = 392.0;
const ghs4 = 403.49;
const gs4 = 415.3;
const ahf4 = 427.47;
const a4 = 440.0;
const ahs4 = 452.89;
const as4 = 466.16;
const bhf4 = 479.82;
const b4 = 493.88;
const bhs4 = 508.35;

const mapping = {
    "c": c4,
    "chs": chs4,
    "cs": cs4,
    "dhf": dhf4,
    "d": d4,
    "dhs": dhs4,
    "ds": ds4,
    "ehf": ehf4,
    "e": e4,
    "ehs": ehs4,
    "f": f4,
    "fhs": fhs4,
    "fs": fs4,
    "ghf": ghf4,
    "g": g4,
    "ghs": ghs4,
    "gs": gs4,
    "ahf": ahf4,
    "a": a4,
    "ahs": ahs4,
    "as": as4,
    "bhf": bhf4,
    "b": b4,
    "bhs": bhs4
}

// inverted mapping
const invertedMapping = {
    c4: "c",
    chs4: "chs",
    cs4: "cs",
    dhf4: "dhf",
    d4: "d",
    dhs4: "dhs",
    ds4: "ds",
    ehf4: "ehf",
    e4: "e",
    ehs4: "ehs",
    f4: "f",
    fhs4: "fhs",
    fs4: "fs",
    ghf4: "ghf",
    g4: "g",
    ghs4: "ghs",
    gs4: "gs",
    ahf4: "ahf",
    a4: "a",
    ahs4: "ahs",
    as4: "as",
    bhf4: "bhf",
    b4: "b",
    bhs4: "bhs"
}

console.log(reverseMapping);

const synth = new Tone.Synth().toDestination();

var currentNote;

function playRandomNote() {
    removeButtonColor();
    // select random note from mapping
    currentNote = Object.keys(mapping)[Math.floor(Math.random() * Object.keys(mapping).length)];
    // play the note
    synth.triggerAttackRelease(mapping[currentNote], "8n");
}

function replayRandomNote() {
    if (!currentNote) {
        playRandomNote();
    } else {
        synth.triggerAttackRelease(mapping[currentNote], "8n");
    }
}

// Check if the clicked button's ID matches the mapping key
function checkNoteSelection(event) {
    const buttonId = event.target.id; // Get the ID of the clicked button
    if (buttonId === currentNote) {
        console.log(`Correct! You selected: ${buttonId}`);
        replayRandomNote();
        // turn the button green
        event.target.style.backgroundColor = "green";
    } else {
        console.log(`Incorrect selection: ${buttonId}, expected: ${currentNote}`);
        // turn the button red
        event.target.style.backgroundColor = "red";
    }
}

function removeButtonColor() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = "";
    });
}

// Attach event listeners to all note buttons
const noteButtons = document.querySelectorAll('#microtones button');
noteButtons.forEach(button => {
    button.addEventListener('click', checkNoteSelection);
});

// play the note when this button is clicked
document.getElementById("next").addEventListener("click", playRandomNote);
document.getElementById("play").addEventListener("click", replayRandomNote);