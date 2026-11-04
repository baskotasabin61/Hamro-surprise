// WhatsApp number: country code + number, digits only (no +, spaces or hyphens).
const WHATSAPP_NUMBER = "9779767799863";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".choose-package").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("packageSelect").value = button.dataset.package;
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
  });
});

const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInput.min = localToday;

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const error = document.getElementById("formError");
  error.textContent = "";
  if (!/^977\d{9,10}$/.test(WHATSAPP_NUMBER)) {
    error.textContent = "Website admin: script.js मा सही WhatsApp नम्बर राख्नुहोस्।";
    return;
  }
  const form = new FormData(event.currentTarget);
  const message = [
    "✨ NEW BOOKING REQUEST — HAMRO SURPRISE ✨", "",
    `Customer name: ${form.get("name")}`,
    `Phone: ${form.get("phone")}`,
    `Service: ${form.get("service")}`,
    `Package: ${form.get("package")}`,
    `City: ${form.get("city")}`,
    `Preferred date: ${form.get("date")}`,
    `Delivery address: ${form.get("address")}`,
    `Recipient: ${form.get("recipient") || "Not provided"}`,
    `Additional details: ${form.get("message") || "None"}`, "",
    "Please confirm availability and final price."
  ].join("\n");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});