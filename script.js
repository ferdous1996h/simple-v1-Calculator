'use strict';
const dis_value = document.querySelector('.display');
const reset = document.querySelector('.rst');
const back = document.querySelector('.bk');
const operators = document.querySelector('.operator');
const btn = document.querySelectorAll('.num_btn');

let num1 = [];
let result1 = 0;
let result2 = 0;
let lastOp = '';
let finalR='0';
function calc(a, b, ope) {
  switch (ope) {
    case '÷': return a / b;
    case '×': return a * b;
    case '-': return a - b;
    case '+': return a + b;
  }
}
btn.forEach(b => b.addEventListener('click', (e) => {
  const textC = b.textContent;
  const regexNum = new RegExp('^[0-9]$');
  if (regexNum.test(textC)) {
    num1.push(textC);
    finalR = num1.join('');
  } 
  if (b.classList.contains('rst')) {
    num1 = []
    finalR = '0';
    btn.forEach(a=>a.removeAttribute('disabled'))
  }
  if (b.textContent === '⟵') {
    if (num1.length <2 ) {
      num1.pop();
      finalR = 0;
    } else if (num1.length >1) {
      num1.pop();
      finalR = num1.join('');
    }

  }
  if (b.textContent === '÷') {
    result1 = parseInt(num1.join(''));
    num1=['0']
    finalR = num1.join('');
    lastOp = '÷';
  }
  if (b.textContent === '+') {
    result1 = parseInt(num1.join(''));
    num1=['0']
    finalR = num1.join('');
    lastOp = '+';
  }
  if (b.textContent === '-') {
    result1 = parseInt(num1.join(''));
    num1=['0']
    finalR = num1.join('');
    lastOp = '-';
  }
  if (b.textContent === '×') {
    result1 = parseInt(num1.join(''));
    num1 = ['0'];
    finalR = num1.join('');
    lastOp = '×';
  }
  if (b.textContent === '=') {
    result2 = parseInt(num1.join(''));
    finalR = calc(parseInt(result1), parseInt(result2), lastOp);
    result1 = finalR;
    btn.forEach(a => {
      if (!a.classList.contains('rst')) {
        a.setAttribute('disabled', '');
      }
    })
  }
  dis_value.textContent= finalR;
}))