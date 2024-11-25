// Contact form

document
  .getElementById("contactForm")
  .addEventListener("submit",(event)=> {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Form submitted:", { name, email, message });
    document.getElementById("contactForm").reset();
  });
