const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let usrChoice

possibleChoices.forEach(possibleChoice.addEventListener('click', (e)=> {
    usrChoice = e.target.id
    userChoice.innerHTML = usrChoice
}))