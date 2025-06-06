function calculateAge() {
  const birthDate = new Date(document.getElementById('birthdate').value);
  const today = new Date();
  // Change button color on click
const button = document.querySelector('button');
button.style.backgroundColor = '#3e0f9c'; // Darker purple or any color you like

setTimeout(() => {
  button.style.backgroundColor = '#5c21b0'; // original color
}, 1000);


  if (!birthDate || birthDate > today) {
    alert("Please select a valid birth date.");
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('years').innerText = String(years).padStart(2, '0');
  document.getElementById('months').innerText = String(months).padStart(2, '0');
  document.getElementById('days').innerText = String(days).padStart(2, '0');
}
