const theInput = document.getElementById('name-input');
const theButton = document.getElementById('the-button');
const wordBox = document.getElementById('word-box');

console.log(wordBox);
theButton.addEventListener('click', () => {


    console.log(theInput.value);
    wordBox.textContent = theInput.value;
});