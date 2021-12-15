bt = document.getElementById('btn5');

bt.addEventListener('click', () => {
    let x1 = document.getElementById('btn1').innerText;
    let x2 = document.getElementById('btn2').innerText;
    let x3 = document.getElementById('btn3').innerText;
    let x4 = document.getElementById('btn4').innerText;
    let x5 = document.getElementById('btn5').innerText;
    let x6 = document.getElementById('btn6').innerText;
    let x7 = document.getElementById('btn7').innerText;
    let x8 = document.getElementById('btn8').innerText;
    let x9 = document.getElementById('btn9').innerText;

    document.getElementById('btn1').innerText = x4;
    document.getElementById('btn2').innerText = x1;
    document.getElementById('btn3').innerText = x2;
    document.getElementById('btn4').innerText = x7;
    document.getElementById('btn5').innerText = x5;
    document.getElementById('btn6').innerText = x3;
    document.getElementById('btn7').innerText = x8;
    document.getElementById('btn8').innerText = x9;
    document.getElementById('btn9').innerText = x6;

});