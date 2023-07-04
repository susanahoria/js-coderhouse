const inputFullName = document.getElementById("userName");
const inputAmount = document.getElementById("amount");
const inputMonths = document.getElementById("month");
const resume = document.getElementById("resume");
const historial = [];

const creditCalculator = (fullName, amount, month) => {
  let impuesto;
  switch (month) {
    case 3:
      impuesto = 1.5;
      break;
    case 6:
      impuesto = 2.5;
      break;
    case 9:
      impuesto = 3;
      break;
    case 12:
      impuesto = 4;
      break;
    case 15:
      impuesto = 4.5;
      break;
    case 18:
      impuesto = 6;
      break;
  }
  const total = (amount * impuesto) / 100;
  const totalAmount = total + amount;
  historial.push(totalAmount);
  resume.innerHTML = `${fullName}, el monto total a pagar de tu crédito de $${amount}, en ${month} cuotas sería de $${totalAmount}`;

  const ul = document.getElementById("ul");
  ul.innerHTML = "";

  for (let index = 0; index < historial.length; index++) {
    const element = historial[index];
    const li = document.createElement("li");
    li.innerHTML = element;
    ul.appendChild(li);
  }
};

// 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

const showData = () => {
  const fullName = inputFullName.value;
  const amount = Number(inputAmount.value);
  const month = Number(inputMonths.value);
  if (fullName === "" || amount === "") {
    alert("todos los campos son obligatorios");
  }
  if (amount < 100) {
    alert("ingrese un monto mayor a $100");
  } else {
    creditCalculator(fullName, amount, month);
  }
};
