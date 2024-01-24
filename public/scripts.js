// public/scripts.js
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Validate the form (you can add more validation logic here)

  // Collect form data
  const formData = new FormData(event.target);

  // Send a POST request to the server
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); // You can handle the response here (e.g., show a success message)
    })
    .catch(error => console.error('Error:', error));
});
