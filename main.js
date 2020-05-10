const add = document.querySelector('.add');
const reset = document.querySelector('.clean');
const solutions = [];
const advice = document.querySelector("h1");
const showOptions = document.querySelector('.showOptions');
const showAdvice = document.querySelector('.showAdvice');


const addSolution = (e) => {
    const input = document.querySelector('input');
    const solution = input.value;
    e.preventDefault();
    // console.log(e.target.value);
    if (typeof solution !== "number") {
        alert("this is not advice, for sure");
        return;
    };
    if (input.value.length) {
        for (option of solutions) {
            if (option === solution) {
                alert("You've already added it!");
                return;
            }
        }

        solutions.push(solution);
        alert(`you've added: ${solution}`);
    };
    input.value = "";
}

const resetAll = (e) => {
    e.preventDefault();
    solutions.length = 0;
    console.log(solutions);
}

const giveAdvice = () => {

    const i = Math.floor(Math.random() * solutions.length);
    advice.textContent = solutions[i];

}

add.addEventListener('click', addSolution);
reset.addEventListener('click', resetAll);
showAdvice.addEventListener('click', giveAdvice);
showOptions.addEventListener('click', function () {
    alert(`The options are: ${solutions.join('---')}`);
});