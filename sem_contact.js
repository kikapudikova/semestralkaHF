document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Zabraňuje predvolenej akcii formulára (odoslaniu stránky)

    // Získanie hodnôt z formulára
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Vloženie hodnôt do sekcie Submitted Data
    document.getElementById("submitted-name").textContent = name;
    document.getElementById("submitted-email").textContent = email;
    document.getElementById("submitted-message").textContent = message;

    // Zobrazenie sekcie so zadanými údajmi
    const submittedDataSection = document.getElementById("submitted-data");
    submittedDataSection.classList.remove("hidden");
  });
