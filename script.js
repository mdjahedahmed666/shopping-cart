document.getElementById("case-increase").addEventListener("click", function () {
  handleProductChange("case", true);
  calculateTotal();
  //   const caseInput = document.getElementById("case-count");
  //   const caseCount = parseInt(caseInput.value);
  //   const caseNewCount = caseCount + 1;
  //   caseInput.value = caseNewCount;
  //   const caseTotal = caseNewCount * 59;
  //   document.getElementById("case-total").innerText = "$" + caseTotal;
});

document.getElementById("case-decrease").addEventListener("click", function () {
  handleProductChange("case", false);
  calculateTotal();
  //   const caseInput = document.getElementById("case-count");
  //   const caseCount = parseInt(caseInput.value);
  //   const caseNewCount = caseCount - 1;
  //   caseInput.value = caseNewCount;
  //   const caseTotal = caseNewCount * 59;
  //   document.getElementById("case-total").innerText = "$" + caseTotal;
});

document
  .getElementById("phone-increase")
  .addEventListener("click", function () {
    handleProductChange("phone", true);
    calculateTotal();
    //   const caseInput = document.getElementById("case-count");
    //   const caseCount = parseInt(caseInput.value);
    //   const caseNewCount = caseCount + 1;
    //   caseInput.value = caseNewCount;
    //   const caseTotal = caseNewCount * 59;
    //   document.getElementById("case-total").innerText = "$" + caseTotal;
  });

document
  .getElementById("phone-decrease")
  .addEventListener("click", function () {
    handleProductChange("phone", false);
    calculateTotal();
    //   const caseInput = document.getElementById("case-count");
    //   const caseCount = parseInt(caseInput.value);
    //   const caseNewCount = caseCount - 1;
    //   caseInput.value = caseNewCount;
    //   const caseTotal = caseNewCount * 59;
    //   document.getElementById("case-total").innerText = "$" + caseTotal;
  });

function handleProductChange(product, isIncrease) {
  const caseCount = getInputValue(product);
  //   const caseNewCount = caseCount - 1;
  let caseNewCount = caseCount;
  if (isIncrease == true) {
    caseNewCount = caseCount + 1;
  }
  if (isIncrease == false && caseCount > 0) {
    caseNewCount = caseCount - 1;
  }
  document.getElementById(product + "-count").value = caseNewCount;
  //   const caseTotal = caseNewCount * 59;
  let caseTotal = 0;
  if (product == "phone") {
    caseTotal = caseNewCount * 1219;
  }
  if (product == "case") {
    caseTotal = caseNewCount * 59;
  }
  document.getElementById(product + "-total").innerText = "$" + caseTotal;
}

// function handlePhoneChange(isIncrease) {
//   const phoneInput = document.getElementById("phone-count");
//   const phoneCount = parseInt(phoneInput.value);
//   //   const caseNewCount = caseCount - 1;
//   let phoneNewCount = phoneCount;
//   if (isIncrease == true) {
//     phoneNewCount = phoneCount + 1;
//   }
//   if (isIncrease == false && phoneCount > 0) {
//     phoneNewCount = phoneCount - 1;
//   }
//   phoneInput.value = phoneNewCount;
//   const phoneTotal = phoneNewCount * 1219;
//   document.getElementById("phone-total").innerText = "$" + phoneTotal;
// }
function calculateTotal() {
  const phoneCount = getInputValue("phone");
  const caseCount = getInputValue("case");
  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.getElementById("total-price").innerText = "$" + totalPrice;

  const tax = Math.round(totalPrice * 0.1);
  document.getElementById("tax-amount").innerText = "$" + tax;

  const grandTotal = totalPrice + tax;
  console.log(totalPrice);
  console.log(tax);
  console.log(grandTotal);
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}
function getInputValue(product) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  return productCount;
}
