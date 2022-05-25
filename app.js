document.getElementById("case-plus").addEventListener("click", function () {
  const caseInput = document.getElementById("case-number");
  const caseNumber = parseInt(caseInput.value);
  caseInput.value = caseNumber + 1;
});
