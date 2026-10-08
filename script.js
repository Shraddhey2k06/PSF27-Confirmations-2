// Fresh PSF'27 deployment
// Replace this URL only if you create a different Apps Script Web App deployment.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby8YYujGD2-8uJSfVHt3YLfCdwfjkAv8LFoE0U81o3knzVtsjUUsuLMhm9WmsucbB1K/exec";

const form = document.getElementById("investorForm");
const submitBtn = document.getElementById("submitBtn");
const successState = document.getElementById("successState");
const errorState = document.getElementById("errorState");

function clearErrors() {
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
}

function validate() {
  clearErrors();
  let valid = true;

  const required = [
    ["fullName", "Please enter your full name."],
    ["organisation", "Please enter your organisation / venture / fund name."],
    ["contact", "Please enter your contact number."]
  ];

  required.forEach(([id, message]) => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      field.closest("label").querySelector(".error").textContent = message;
      valid = false;
    }
  });

  const contact = document.getElementById("contact").value.trim();
  if (contact && !/^[+]?[\d\s()\-]{8,20}$/.test(contact)) {
    document.getElementById("contact").closest("label").querySelector(".error").textContent =
      "Please enter a valid contact number.";
    valid = false;
  }

  if (!document.querySelector('input[name="attendanceDay"]:checked')) {
    document.getElementById("attendanceError").textContent =
      "Please select your preferred day.";
    valid = false;
  }

  if (!document.getElementById("confirmation").checked) {
    document.getElementById("confirmationError").textContent =
      "Please confirm your participation.";
    valid = false;
  }

  return valid;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!validate()) return;
  if (form.website.value.trim()) return;

  submitBtn.disabled = true;
  submitBtn.classList.add("loading");
  errorState.hidden = true;

  const data = Object.fromEntries(new FormData(form).entries());
  data.source = "PSF27 Investor Relations Website";

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(data)
    });

    document.getElementById("successMessage").textContent =
      `Thank you for your time and for confirming your participation in Pune Startup Fest 2027, ${data.fullName}.`;

    form.hidden = true;
    successState.hidden = false;
    window.scrollTo({ top: successState.offsetTop - 80, behavior: "smooth" });
  } catch (error) {
    document.getElementById("errorMessage").textContent =
      "The confirmation could not be submitted. Please try again.";
    errorState.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");
  }
});

document.getElementById("retryBtn").addEventListener("click", () => {
  errorState.hidden = true;
});
