'use strict';

let count = 0

// Initial name request prompt followed my alert greeting visitor with their name
let user = prompt('Thanks for visiting this page! What is your name?');
console.log('The user\'s name is ' + user)
alert('Hello ' + user + ', a game is afoot! Time to find out how well you know Christopher (before getting a look at his About Me page).');

// First About Me guessing question
function ageGuessQuestion() {
  let ageGuess = prompt('Question 1 of 7. Yes or No: is Christopher over thirty years old?').toLowerCase();
  if (ageGuess === 'y' || ageGuess === 'yes') {
    alert('Lol no, he\'s not that old.');
  // console.log('Lol no, he\'s not that old.');
  } else if (ageGuess === 'n' || ageGuess === 'no') {
    alert('Nice job! At 29 years old, Christopher is indeed just BARELY less than thirty.');
    count++;
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
  let coastSchool = prompt('Question 2 of 7. Yes or No: did Christopher earn his undergraduate degree from a university on the east coast of the U.S.?').toLowerCase();
  if (coastSchool === 'y' || coastSchool === 'yes') {
    alert('Ah, nice try! But he actually graduated from the University of California!');
  //  console.log('Nope! He graduated from a university in California!');
  } else if (coastSchool === 'n' || coastSchool === 'no') {
    alert('You got it! He graduated from the University of California!');
    count++;
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
  let bidenCamp = prompt('Question 3 of 7. Yes or No: did Christopher work for the Joe Biden presidential campaign in 2020?').toLowerCase();
  if (bidenCamp === 'y' || bidenCamp === 'yes') {
    alert('Nah, he didn\'t work for Grandpa Joe. But he did work during the 2020 primary on Elizabeth Warren\'s campaign.');
  //  console.log('Not that one! But he did work during the 2020 primary on Elizabeth Warren\'s campaign.');
  } else if (bidenCamp === 'n' || bidenCamp === 'no') {
    alert('Correct! While he did not work for the Biden campaign, he did work during the primary for the Elizabeth Warren campaign.');
    count++;
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
  let python401 = prompt('Question 4 of 7. Yes or No: is one of Christopher\'s goals to specifically take the Code 401 course for PYTHON (rather than Java or JavaScript)?').toLowerCase();
  if (python401 === 'y' || python401 === 'yes') {
    alert('You got it! While it\'s not that he is partial to Python, he just wants to complete his Code Fellows track as soon as possible and then learn more objected oriented programming languages after that!');
    count++;
  //  console.log('Yes! Not necessarily because he is partial to Python, but because he wants to complete his Code Fellows track as soon as possible.');
  } else if (python401 === 'n' || python401 === 'no') {
    alert('ACTUALLY, he DOES want to take the Python course. He is looking to finish his Code Fellows track as soon as possible, and then he can delve deeper into the other object oriented programming languages.');
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
  let remoteWork = prompt('Question 5 of 7. Yes or No: would Christopher prefer to work remotely at his next job?').toLowerCase();
  if (remoteWork === 'y' || remoteWork === 'yes') {
    alert('You got it! He loves to have flexibility of location so he would definitely prefer to work remotely.');
    count++;
  //  console.log('Yes, he loves to have flexibility of location so he would definitely prefer to work remotely!');
  } else if (remoteWork === 'n' || remoteWork === 'no') {
    alert('Wrong! While he may still be game for an in-person job, his goal--as of now--is to secure the best possible remote employment he can find!');
  //  console.log('Nope, while he may still be game for an in-person job, his goal is to secure the best remote work job he can find!');
  } else {
    alert('You gotta respond in yes or no form!');
  //  console.log('You gotta respond in yes or no form!');
    remoteWorkQuestion();
  }
}
remoteWorkQuestion()

// Sixth About Me guessing question. Takes in a numeric input by prompting the user to guess a number. Indicates an alert if the guess is "too high" or "too low". It should give the user exactly four opportunities to get the correct answer. After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

let stateGuesses = 4;
let correctStates = 43;
let guessCorrect = false;
  
  for (let i = 0; i < stateGuesses; i++) {
    let userGuess6 = prompt('What is the number of different U.S. states that Christopher hasvisited in his life so far?');
    // stateQuestion();
    if (userGuess6 == correctStates) {
      alert('Wow! That is correct!! Nice job!!!');
      count++;
      break;
    } else if (userGuess6 > correctStates) {
      alert('That guess is too high!');
    } else if (userGuess6 < correctStates) {
      alert('That guess is too low!');
    }
  }
  
// Seventh About Me guessing question
let stateArr = ['alaska', 'arkansas', 'hawaii', 'nebraska', 'north Dakota', 'oklahoma', 'washington']

  for (let i = 0; i < 6; i++) {
    let userGuess7 = prompt('You get 6 attempts total to answer this one: name one of the 7 U.S. states that Christopher has not visited yet!').toLowerCase();
    if (stateArr[i] == userGuess7) {
      alert('You got it! He still has not been to ' + userGuess7 + '! Nice job.');
      count++;
      break;
    } else {
      alert('Try again!');
    }
  }  

// Final personalized alert message to user with their score  
alert(`You completed the guessing game, ${user}, congratulations! Before actually reading Christopher\' About Me page, you correctly answered ${count} questions about him!`)