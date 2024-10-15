// frequency constants
const c3 = 130.91;
const chs3 = 134.75;
const cs3 = 138.59;
const dhf3 = 142.65;
const d3 = 146.83;
const dhs3 = 151.13;
const ds3 = 155.56;
const ehf3 = 160.12;
const e3 = 164.81;
const ehs3 = 169.64;
const f3 = 174.61;
const fhs3 = 179.73;
const fs3 = 185.0;
const ghf3 = 190.42;
const g3 = 196.0;
const ghs3 = 201.74;
const gs3 = 207.65;
const ahf3 = 213.73;
const a3 = 220.0;
const ahs3 = 226.45;
const as3 = 233.08;
const bhf3 = 239.91;
const b3 = 246.94;
const bhs3 = 254.18;
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
const c5 = 523.25;
const chs5 = 538.58;
const cs5 = 554.37;
const dhf5 = 570.61;
const d5 = 587.33;
const dhs5 = 604.54;
const ds5 = 622.25;
const ehf5 = 640.48;
const e5 = 659.26;
const ehs5 = 678.58;
const f5 = 698.46;
const fhs5 = 718.93;
const fs5 = 739.99;
const ghf5 = 761.67;
const g5 = 783.99;
const ghs5 = 806.96;
const gs5 = 830.61;
const ahf5 = 854.95;
const a5 = 880.0;
const ahs5 = 905.79;
const as5 = 932.33;
const bhf5 = 959.65;
const b5 = 987.77;
const bhs5 = 1016.71;

const mapping = {
    130.91: "c",
    134.75: "chs",
    138.59: "cs",
    142.65: "dhf",
    146.83: "d",
    151.13: "dhs",
    155.56: "ds",
    160.12: "ehf",
    164.81: "e",
    169.64: "ehs",
    174.61: "f",
    179.73: "fhs",
    185.0: "fs",
    190.42: "ghf",
    196.0: "g",
    201.74: "ghs",
    207.65: "gs",
    213.73: "ahf",
    220.0: "a",
    226.45: "ahs",
    233.08: "as",
    239.91: "bhf",
    246.94: "b",
    254.18: "bhs",
    261.63: "c",
    269.30: "chs",
    277.18: "cs",
    285.30: "dhf",
    293.66: "d",
    302.26: "dhs",
    311.13: "ds",
    320.25: "ehf",
    329.63: "e",
    339.29: "ehs",
    349.23: "f",
    359.46: "fhs",
    369.99: "fs",
    380.83: "ghf",
    392.0: "g",
    403.49: "ghs",
    415.3: "gs",
    427.47: "ahf",
    440.0: "a",
    452.89: "ahs",
    466.16: "as",
    479.82: "bhf",
    493.88: "b",
    508.35: "bhs",
    523.25: "c",
    538.58: "chs",
    554.37: "cs",
    570.61: "dhf",
    587.33: "d",
    604.54: "dhs",
    622.25: "ds",
    640.48: "ehf",
    659.26: "e",
    678.58: "ehs",
    698.46: "f",
    718.93: "fhs",
    739.99: "fs",
    761.67: "ghf",
    783.99: "g",
    806.96: "ghs",
    830.61: "gs",
    854.95: "ahf",
    880.0: "a",
    905.79: "ahs",
    932.33: "as",
    959.65: "bhf",
    987.77: "b",
    1016.71: "bhs"
};

const synth = new Tone.Synth().toDestination();

var currentNote;
var correct = false;
var streak = 0;
var maxStreak = 0;

const streakValue = document.getElementById("streak-value");
const maxStreakValue = document.getElementById("max-streak-value");

function playRandomNote() {
    removeButtonColor();
    correct = false;
    // select random key from object
    // currentNote = Math.floor(Math.random() * Object.keys(mapping).length);
    currentNote = Object.keys(mapping)[Math.floor(Math.random() * Object.keys(mapping).length)];
    // play the note
    synth.triggerAttackRelease(currentNote, "8n");
}


function playNote() {
    if (!currentNote || correct) {
        playRandomNote();
    } else {
        synth.triggerAttackRelease(currentNote, "8n");
    } 
} 

function replayNote() {
    synth.triggerAttackRelease(currentNote, "8n");
}

// Check if the clicked button's ID matches the mapping key
function checkNoteSelection(event) {
    const buttonId = event.target.id; // Get the ID of the clicked button
    if (buttonId === mapping[currentNote]) {
        console.log(`Correct! You selected: ${buttonId}`);
        playNote();
        correct = true;
        // turn the button green
        event.target.style.backgroundColor = "green";
        streak += 1;
        streakValue.textContent = streak;
        if (streak > maxStreak) {
            maxStreak = streak;
            maxStreakValue.textContent = maxStreak;
        }
    } else {
        if (correct) {
            return;
        }
        console.log(`Incorrect selection: ${buttonId}, expected: ${mapping[currentNote]}`);
        // turn the button red
        event.target.style.backgroundColor = "red";
        streak = 0;
        streakValue.textContent = streak;
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
document.getElementById("replay").addEventListener("click", replayNote);
document.getElementById("play").addEventListener("click", playNote);