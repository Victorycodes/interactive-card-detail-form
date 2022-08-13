const card = document.querySelector('.wrapper-flex');
const thankyouSection = document.getElementById('thanksBox');
const continueBtn = document.getElementById('contBtn');
const formBox = document.querySelector('.wrapper-content');
const changeName = document.getElementById('cardName');
const changeNumber = document.getElementById('cardNumber');
const expireDate = document.getElementById('cardExp');
const input = document.getElementById('card-name');
const numberInput = document.getElementById('card-number');
const monthInput = document.getElementById('card-month');
const cvcInput = document.getElementById('card-cvc');
const changeCvc = document.getElementById('cardCvc')
const message = document.querySelector('.message');
const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');
const message3 = document.querySelector('.message3');
const errorBtn = document.getElementById('formSubmitBtn');
const changeMonth = document.getElementById('cardMon')

document.getElementById('formSubmitBtn').addEventListener('click', openThanks);
function openThanks(e) {
    thankyouSection.style.display = 'flex';
    formBox.style.display = 'none';
    changeName.textContent = '';
    changeNumber.textContent = '';
    changeCvc.textContent = '';
    expireDate.textContent = `${monthInput.value}`;
    changeName.appendChild(document.createTextNode(input.value));
    changeNumber.appendChild(document.createTextNode(numberInput.value));
    changeCvc.appendChild(document.createTextNode(cvcInput.value));
}

// To close using confirm button
continueBtn.addEventListener('click', closeThanks);
function closeThanks(e) {
    thankyouSection.style.display = 'none'
    formBox.style.display = 'flex'
    formSubmitBtn.style.cursor = 'not-allowed'
}

// Listen for error
errorBtn.addEventListener('click', function () {
    let month = parseInt(monthInput.value);
    let cvc = parseInt(cvcInput.value);
    let number = parseInt(numberInput.value);
    let name = input;

    // VALIDATE

    // Month Error
    if (isNaN(month)) {
        setMessage(`Can't be blank`);
        monthInput.style.borderColor = 'red';
    } else {
        monthInput.style.borderColor = 'green';
        monthInput.disabled = true;
    }

    // Cvc Error
    if (isNaN(cvc)) {
        setCvcMessage(`Can't be blank`);
        cvcInput.style.borderColor = 'red'
    } else if (cvc > 999 || month < 000){
        setCvcMessage(`CVC should range from 000 to 999`);
        cvcInput.style.borderColor = 'red';
        changeCvc.style.display = 'none'
    } else {
        cvcInput.disabled = true;
        cvcInput.style.borderColor = 'green'
    }

    // number Error
    if (isNaN(number)) {
        setNumberMessage(`Wrong format, numbers only`);
        numberInput.style.borderColor = 'red'
    } else if (number > 9999999999999999 || number < 0000000000000000){
        setNumberMessage(`Number should not be more than 16 digits`);
        numberInput.style.borderColor = 'red';
        changeNumber.style.display = 'none'
    } else {
        numberInput.disabled = true;
        numberInput.style.borderColor = 'green'
    }

    // name Error
    if (!isNaN(name)) {
        setNameMessage(`Wrong format, names only`);
        input.style.borderColor = 'red'
    } else {
        input.disabled = true;
        input.style.borderColor = 'green'
    }
});

// Set message
function setMessage(msg) {
    message.style.color = 'red';
    message.textContent = msg;
}

function setCvcMessage(msg) {
    message1.style.color = 'red';
    message1.textContent = msg;
}

function setNumberMessage(msg) {
    message2.style.color = 'red';
    message2.textContent = msg;
}

function setNameMessage(msg) {
    message3.style.color = 'red';
    message3.textContent = msg;
}