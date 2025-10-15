function checkAge() {
  let age = document.getElementById("age").value;
  let result = "";
  if (age === "") {
    result = "Please select your age!";
  } else if (age < 13) {
    result = "Child ";
  } else if (age >= 13 && age <= 18) {
    result = "Teenager ";
  } else if (age > 18 && age < 60) {
    result = "Adult ";
  } else {
    result = "Senior Citizen";
  }
  document.getElementById("result").textContent = result;
}
