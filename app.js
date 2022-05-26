function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = parseInt(productInput.value);
  if (isIncreasing == true) {
    productNumber++;
  } else if (productNumber > 0) {
    productNumber--;
  }
  productInput.value = productNumber;
  //update total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  //calculate total
  calculateTotal();
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const taxAmount = subTotal / 10;
  const totalPrice = subTotal + taxAmount;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = taxAmount;
  document.getElementById("total-price").innerText = totalPrice;
}

//phone handle events
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

//handle case events
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
