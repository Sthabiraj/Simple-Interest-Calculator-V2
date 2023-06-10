function updateRate() {
  var rate = document.getElementById("rate").value;
  var rateVal = document.getElementById("rate_val");
  rateVal.innerText = rate;
}

function calculate() {
  let p = document.getElementById("principal");
  let principal = parseInt(p.value);

  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;
  let result = document.getElementById("interest");

  let interest = (principal * rate * years) / 100;
  let ammount = principal + interest;

  if (principal <= 0) {
    alert("Enter a positive number");
    p.focus();
  } else {
    result.value = "$" + ammount;
  }
}
