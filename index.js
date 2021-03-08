const calculator = () => {
  const str = document.getElementById('arguments').value;
  const answer = document.getElementById('values');
  const num = str.split(' ');
  const arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 4000, 5000, 9000, 10000];
  const romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M", "M&#8577;", "&#8577;", "&#8577;&#8578;", "&#8578;"];

  const to_romans = (text) => {
    let result = "";
    let n = arabic.length - 1;
    while (text > 0) {
      if (text >= arabic[n]) {
        result += romans[n];
        text -= arabic[n];
      }
      else n--;
    }
    return result;
  }

  const to_arabic = (str) => {
    var text = str.toUpperCase();
    var result = 0;
    var posit = 0;
    var n = arabic.length - 1;
    while (n >= 0 && posit < text.length) {
      if (text.substr(posit, romans[n].length) == romans[n]) {
        result += arabic[n];
        posit += romans[n].length;
      }
      else n--;
    }
    return result;
  }

  const a = Number(num[0]);
  const b = Number(num[2]);
  const c = num[1];
  const summa = (a, b) => a + b;
  const diff = (a, b) => a - b;
  const multi = (a, b) => a * b;
  const div = (a, b) => a / b;

  if (num.length !== 3) {
    return alert("must be two arguments !")
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    let a = to_arabic(num[0]);
    let b = to_arabic(num[2]);
    if (a < 0 || a > 10 || b < 0 || b > 10) {
      return alert("arguments must be between 0 and 10 inclusive !")
    }
    else {
      switch (c) {
        case "+":
          return answer.innerHTML = String(to_romans(summa(a, b)))
        case "-":
          return answer.innerHTML = String(to_romans(diff(a, b)));
        case "*":
          return answer.innerHTML = String(to_romans(multi(a, b)));
        case "/":
          return answer.innerHTML = String(to_romans(Math.trunc((div(a, b)))));
        default:
          return alert("invalid math operation !");
      }
    }

  } if (a < 0 || a > 10 || b < 0 || b > 10) {
    return alert("arguments must be between 0 and 10 inclusive !")
  } else {
    switch (c) {
      case "+":
        return answer.innerHTML = String(summa(a, b));
      case "-":
        return answer.innerHTML = String(diff(a, b));
      case "*":
        return answer.innerHTML = String(multi(a, b));
      case "/":
        return answer.innerHTML = String(Math.trunc(div(a, b)));
      default:
        return alert("invalid math operation !");
    }
  }
};