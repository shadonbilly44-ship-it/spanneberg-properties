document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = form.querySelector("button");
    const originalText = button.textContent;

    button.textContent = "Enquiry sent";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 2000);
  });
});
