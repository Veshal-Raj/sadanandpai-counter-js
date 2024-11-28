let currentCount = document.querySelector('#count');
let incDecInput = document.querySelector('#inc-dec-input');
let incBtn = document.querySelector('#inc-btn');
let decBtn = document.querySelector('#dec-btn');
let resetBtn = document.querySelector("#reset-btn");


incBtn.addEventListener('click', incValue);
decBtn.addEventListener('click', decValue);
resetBtn.addEventListener('click', resetValue);

function incValue() {
    let currIncDecValue = incDecInput.value;
    let currentValue = currentCount.textContent;
    currentCount.textContent = parseInt(currentValue) + parseInt(currIncDecValue);
}

function decValue() {
    let currIncDecValue = incDecInput.value;
    let currentValue = currentCount.textContent;
    currentCount.textContent = parseInt(currentValue) - parseInt(currIncDecValue);
}

function resetValue() {
    currentCount.textContent = 0;
    incDecInput.value = 1;
}
