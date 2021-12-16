btnClr.onclick = function() {
    res.innerHTML = "";
}

btn0.onclick = function() {
    res.innerHTML += "0";
}

btn1.onclick = function() {
    res.innerHTML += "1";
}

btnSum.onclick = function() {
    res.innerHTML += "+";
}

btnSub.onclick = function() {
    res.innerHTML += "-";
}

btnMul.onclick = function() {
    res.innerHTML += "*";
}

btnDiv.onclick = function() {
    res.innerHTML += "/";
}

btnEql.onclick = function() {
    let s = res.innerHTML;
    s = Math.floor(eval(s.replace(/(\d+)/g, function(match){
        return parseInt(match, 2);
    }))).toString(2);
    res.innerHTML = s;
}

