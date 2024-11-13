function tinhtoanGiaiThua(event) {
    event.preventDefault();
    let number = parseInt(document.getElementById('number').value);
    if (number < 0) {
        document.getElementById('result1').innerHTML = "Vui lòng nhập một số nguyên không âm.";
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById('result1').innerHTML = `
        <p>Giai thừa của ${number} bằng: ${factorial}</p>
    `;
}

function tinhtoanLuyThua(event) {
    event.preventDefault();
    let base = parseFloat(document.getElementById('base').value);
    let exponent = parseInt(document.getElementById('exponent').value);
    if (isNaN(base) || isNaN(exponent)) {
        document.getElementById('result2').innerHTML = "Vui lòng nhập cơ số hoặc số mũ hợp lệ.";
        return;
    }
    let power = Math.pow(base, exponent);
    document.getElementById('result2').innerHTML = `
        <p>${base} lũy thừa ${exponent} bằng: ${power}</p>
    `;
}