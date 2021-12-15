let bt = document.getElementById('btn');

bt.addEventListener('click', (element) => {
    element.currentTarget.innerText = Number(element.currentTarget.innerText)+1;
});