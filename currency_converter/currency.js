const currencies = {
  USD: 1.0,
  JPY: 113.5,
  RUB: 74.36,
  EUR: 0.89,
  GBP: 0.75
};

document.getElementById("convertBtn").addEventListener("click", () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = parseFloat(document.getElementById("amount").value);

  const resultDiv = document.getElementById("result");

  if (isNaN(amount) || amount < 0) {
    resultDiv.textContent = "Please enter a valid positive amount.";
    return;
  }

  if (currencies[from] && currencies[to]) {
    const converted = (amount * currencies[to]) / currencies[from];
    resultDiv.textContent = `Result: ${amount} ${from} = ${converted.toFixed(4)} ${to}`;
  } else {
    resultDiv.textContent = "Currency not supported.";
  }
});
