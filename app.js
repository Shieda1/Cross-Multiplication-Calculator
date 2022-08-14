// https://www.omnicalculator.com/math/cross-multiplication

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ARadio = document.getElementById('ARadio');
const BRadio = document.getElementById('BRadio');
const CRadio = document.getElementById('CRadio');
const DRadio = document.getElementById('DRadio');

let A;
let B = v1;
let C = v2;
let D = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

ARadio.addEventListener('click', function() {
  variable1.textContent = 'B';
  variable2.textContent = 'C';
  variable3.textContent = 'D';
  B = v1;
  C = v2;
  D = v3;
  result.textContent = '';
});

BRadio.addEventListener('click', function() {
  variable1.textContent = 'A';
  variable2.textContent = 'C';
  variable3.textContent = 'D';
  A = v1;
  C = v2;
  D = v3;
  result.textContent = '';
});

CRadio.addEventListener('click', function() {
  variable1.textContent = 'A';
  variable2.textContent = 'B';
  variable3.textContent = 'D';
  A = v1;
  B = v2;
  D = v3;
  result.textContent = '';
});

DRadio.addEventListener('click', function() {
  variable1.textContent = 'A';
  variable2.textContent = 'B';
  variable3.textContent = 'C';
  A = v1;
  B = v2;
  C = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ARadio.checked)
    result.textContent = `A = ${computeA().toFixed(5)}`;

  else if(BRadio.checked)
    result.textContent = `B = ${computeB().toFixed(5)}`;

  else if(CRadio.checked)
    result.textContent = `C = ${computeC().toFixed(5)}`;

  else if(DRadio.checked)
    result.textContent = `D = ${computeD().toFixed(5)}`;
})

// calculation

function computeA() {
  return (Number(B.value) * Number(C.value)) / Number(D.value);
}

function computeB() {
  return (Number(A.value) * Number(D.value)) / Number(C.value);
}

function computeC() {
  return (Number(A.value) * Number(D.value)) / Number(B.value);
}

function computeD() {
  return (Number(B.value) * Number(C.value)) / Number(A.value);
}