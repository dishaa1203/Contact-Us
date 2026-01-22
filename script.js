document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    query: document.getElementById("query").value
  };

  try {
    const response = await fetch(
      "https://disha1203.app.n8n.cloud/webhook-test/portfolio-contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    document.getElementById("status").innerText =
      "Message sent successfully!";
  } catch (error) {
    document.getElementById("status").innerText =
      "Error sending message";
  }
});
