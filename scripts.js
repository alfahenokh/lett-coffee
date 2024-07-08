document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = encodeURIComponent(this.elements["name"].value);
    const email = encodeURIComponent(this.elements["email"].value);
    const message = encodeURIComponent(this.elements["message"].value);

    const whatsappURL = `https://wa.me/6281290960583?text=Name:%20${name}%0AEmail:%20${email}%0A%0AMessage:%20${message}`;

    window.open(whatsappURL, "_blank");

    alert("Thank you for your message! We will get back to you soon.");

    // Optional: Reset form after submission
    this.reset();
  });
});
