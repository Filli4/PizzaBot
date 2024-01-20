//Put your Javscript code here:

const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

function submitForm() {
  const orderName = document.getElementById('pizzaType').value;
  const orderQuantity = document.getElementById('numberOfPizzas').value;

  if (checkOrderName(orderName)) {
    cookingTime(orderName, orderQuantity);
  }
}


function checkOrderName(orderName) {
  if (
    orderName == vegetarian ||
    orderName == hawaiian ||
    orderName == pepperoni
  ) {
    return true;
  } else {
    alert(`${orderName} is not a valid option`);
    return false;
  }
}

function totalCost(orderQuantity) {
  const orderTotal = orderQuantity * pizzaPrice;
  return orderTotal;
}

function cookingTime(orderName, orderQuantity) {
  const responseDiv = document.getElementById('response');

  if (orderQuantity <= 2) {
    responseDiv.innerHTML = `
      Great, I'll get started on your ${orderName} right away. It will cost ${totalCost(orderQuantity)} kr. The pizzas will take 10 minutes.
    `;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    responseDiv.innerHTML = `
      Great, I'll get started on your ${orderName} right away. It will cost ${totalCost(orderQuantity)} kr. The pizzas will take 15 minutes.
    `;
  } else if (orderQuantity >= 6) {
    responseDiv.innerHTML = `
      Great, I'll get started on your ${orderName} right away. It will cost ${totalCost(orderQuantity)} kr. The pizzas will take 20 minutes.
    `;
  }
}

