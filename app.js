"use strict";


// User Prompts

let questionTotal = 12;

let questionCounter = 0;

let intro = 'Please enter a' ;

let questionArray = [
' name of a friend.',
' nasty adjective.',
'n animal sound.',
' color.',
'n animal.',
'n adjective.',
' body part (plural).',
' body part.',
' verb (past-tense).',
'n animal (plural).',
' verb (past-tense).',
'n adjective.'
];

let userInputs = [];

for (let i = questionTotal; i > 0; i--){

    console.log(intro+questionArray[questionCounter] + `(${questionTotal} questions left)`); 

    userInputs.push(prompt(intro+questionArray[questionCounter] + ` (${questionTotal} questions left)`));


    questionCounter++;
    questionTotal--;    
}

console.log(userInputs);

alert('All done. Check out your story!')

 
// The Story



let originalStory = 
`<h3>Deep in the jungle, ${userInputs[0]} and I suddenly heard ${userInputs[1]} ${userInputs[2]}s.
'Watch out!' shouted ${userInputs[0]}.'That ${userInputs[3]} ${userInputs[4]} is going to get you!'
It had very ${userInputs[5]} ${userInputs[6]} and a huge ${userInputs[7]}, 
so we ${userInputs[8]} onto our ${userInputs[9]} and ${userInputs[10]} away from the dark, ${userInputs[11]} forest.</h3>`;

console.log(originalStory);
document.write(originalStory);

/* orginalStory - 

Deep in the jungle, Jay and I suddenly heard loud bellows.
'Watch out!' shouted Jay.'That green monkey is going to get you!'
It had very sharp claws and a huge mouth, so we jumped onto our horses and ran away from the dark, dense forest.

let userInputs = [
    'Jay',
    'loud',
    'bellow',
    'green',
    'monkey',
    'sharp',
    'claws',
    'mouth',
    'jumped',
    'horses',
    'ran',
    'dense'
];

*/