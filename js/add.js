'use strict';

// Initial name request prompt followed my alert greeting visitor with their name
let user = prompt('Thanks for visiting this page! What is your name?');
console.log('The user\'s name is ' + user)
alert('Hello ' + user + '! I hope you\'re ready for a guessing game! Let\'s see how well you know Christopher Yamas, before you get all the juicy details...');

// First About Me guessing question
function ageGuessQuestion() {
  let ageGuess = prompt('Yes or No: is Christopher over thirty years old?').toLowerCase();
  if (ageGuess === 'y' || ageGuess === 'yes') {
    alert('Lol no, he\'s not that old.');
  // console.log('Lol no, he\'s not that old.');
  } else if (ageGuess === 'n' || ageGuess === 'no') {
    alert('Correct! At 29 years old, Christopher is just BARELY less than thirty.');
  //  console.log('Correct! At 29 years old, Christopher is just BARELY less than thirty.');
  } else {
    alert('You gotta respond in yes or no form!');
  //  console.log('You gotta respond in yes or no form!');
    ageGuessQuestion();
  }
}
ageGuessQuestion()

// Second About Me guessing question
function coastSchoolQuestion() {
  let coastSchool = prompt('Yes or No: did Christopher earn his undergraduate degree from a university on the east coast of the U.S.?').toLowerCase();
  if (coastSchool === 'y' || coastSchool === 'yes') {
    alert('Nope! He graduated from a university in California!');
  //  console.log('Nope! He graduated from a university in California!');
  } else if (coastSchool === 'n' || coastSchool === 'no') {
    alert('Yup! He graduated from a university in California!');
  //  console.log('Yup! He graduated from a university in California!');
  } else {
    alert('You gotta respond in yes or no form!');
  //  console.log('You gotta respond in yes or no form!');
    coastSchoolQuestion();
  }
}
coastSchoolQuestion()

// Third About Me guessing question
function bidenCampQuestion() {
  let bidenCamp = prompt('Yes or No: did Christopher work for the Joe Biden presidential campaign in 2020?').toLowerCase();
  if (bidenCamp === 'y' || bidenCamp === 'yes') {
    alert('Not that one! But he did work during the 2020 primary on Elizabeth Warren\'s campaign.');
  //  console.log('Not that one! But he did work during the 2020 primary on Elizabeth Warren\'s campaign.');
  } else if (bidenCamp === 'n' || bidenCamp === 'no') {
    alert('Correct! While he did not work for the Biden campaign, he did work during the primary for the Elizabeth Warren campaign.');
  //  console.log('Correct! While he did not work for the Biden campaign, he did work during the primary for the Elizabeth Warren campaign.');
  } else {
    alert('You gotta respond in yes or no form!');
  //  console.log('You gotta respond in yes or no form!');
    bidenCampQuestion();
  }
}
bidenCampQuestion()

// Fourth About Me guessing question
function python401Question() {
  let python401 = prompt('SECOND TO LAST QUESTION! Yes or No: is one of Christopher\'s goals to take the Code 401 for PYTHON specifically?').toLowerCase();
  if (python401 === 'y' || python401 === 'yes') {
    alert('Yes! Not necessarily because he is partial to Python, but because he wants to complete his Code Fellows track as soon as possible.');
  //  console.log('Yes! Not necessarily because he is partial to Python, but because he wants to complete his Code Fellows track as soon as possible.');
  } else if (python401 === 'n' || python401 === 'no') {
    alert('Nope, he DOES want to take the Python course. He is looking to finish his Code Fellows track as soon as possible, and then he will dealve deeper into the other languages.');
  //  console.log('Nope, he DOES want to take the Python course. He is looking to finish his Code Fellows track as soon as possible, and then he will dealve deeper into the other languages.');
  } else {
    alert('You gotta respond in yes or no form!');
  //  console.log('You gotta respond in yes or no form!');
    python401Question();
  }
}
python401Question()

// Fifth About Me guessing question
function remoteWorkQuestion() {
  let remoteWork = prompt('LAST QUESTION! Yes or No: would Christopher prefer to work remotely at his next job?').toLowerCase();
  if (remoteWork === 'y' || remoteWork === 'yes') {
    alert('Yes, he loves to have flexibility of location so he would definitely prefer to work remotely!');
  //  console.log('Yes, he loves to have flexibility of location so he would definitely prefer to work remotely!');
  } else if (remoteWork === 'n' || remoteWork === 'no') {
    alert('Nope, while he may still be game for an in-person job, his goal is to secure the best remote work job he can find!');
  //  console.log('Nope, while he may still be game for an in-person job, his goal is to secure the best remote work job he can find!');
  } else {
    alert('You gotta respond in yes or no form!');
  //  console.log('You gotta respond in yes or no form!');
    remoteWorkQuestion();
  }
}
remoteWorkQuestion()