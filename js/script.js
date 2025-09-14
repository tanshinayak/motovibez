
emailjs.init({
  publicKey: "IJbnVi0OwOnu7bFx3",
});

function onSendMessage() {
  let params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_btg625n", "template_bghq67t", params)
    .then(() => {
      console.log("✅ Thank you! We will contact you soon.");
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("❌ Failed to send message.", error);
      alert("Failed to send message. Please try again.");
    });
}

// 🔹 Expose to global scope so onclick works
window.onSendMessage = onSendMessage;
