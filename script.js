/**
 * Hamro Surprise — site behaviour
 * Static site: no data is stored. Bookings open a pre-filled WhatsApp chat.
 */
"use strict";

const CONFIG = Object.freeze({
  // Country code + number, digits only (no +, spaces or hyphens).
  whatsappNumber: "9779745260730",
  businessName: "Hamro Surprise",
  // Nepali mobile numbers: 97/98 followed by 8 digits.
  phonePattern: /^9[78]\d{8}$/,
});

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

/* ---------- Navigation ---------- */
function initNavigation() {
  const toggle = $("#menuToggle");
  const links = $("#navLinks");
  if (!toggle || !links) return;

  const setOpen = (open) => {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => setOpen(!links.classList.contains("open")));
  $$("a", links).forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));
}

/* ---------- Package buttons ---------- */
function initPackageButtons() {
  const select = $("#packageSelect");
  $$(".choose-package").forEach((button) => {
    button.addEventListener("click", () => {
      if (select) select.value = button.dataset.package;
      $("#booking")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* ---------- Booking form ---------- */
function localISODate(date) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function buildMessage(data) {
  const field = (key, fallback = "") => (data.get(key) || fallback).toString().trim();
  return [
    `✨ NEW BOOKING REQUEST — ${CONFIG.businessName.toUpperCase()} ✨`,
    "",
    `Customer name: ${field("name")}`,
    `Phone: ${field("phone")}`,
    `Service: ${field("service")}`,
    `Package: ${field("package")}`,
    `City: ${field("city")}`,
    `Preferred date: ${field("date")}`,
    `Preferred time: ${field("time", "Flexible")}`,
    `Delivery address: ${field("address")}`,
    `Recipient: ${field("recipient", "Not provided")}`,
    `Additional details: ${field("message", "None")}`,
    "",
    "Please confirm availability and final price.",
  ].join("\n");
}

function initBookingForm() {
  const form = $("#bookingForm");
  if (!form) return;
  const error = $("#formError");
  const dateInput = form.elements.date;
  if (dateInput) dateInput.min = localISODate(new Date());

  const showError = (msg) => { error.textContent = msg; };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showError("");

    const phone = form.elements.phone.value.replace(/[\s-]/g, "").replace(/^\+?977/, "");
    if (!CONFIG.phonePattern.test(phone)) {
      showError("कृपया सही मोबाइल नम्बर राख्नुहोस् (जस्तै 98XXXXXXXX)।");
      form.elements.phone.focus();
      return;
    }
    form.elements.phone.value = phone;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const message = buildMessage(new FormData(form));
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url; // popup blocked (common on mobile)
  });
}

/* ---------- Motion & effects ---------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initScrollReveal() {
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  const groups = [
    ".intro-art", ".intro-copy", ".section-head", ".trust-grid > div", ".service-card",
    ".steps li", ".package", ".custom-callout", ".gallery-tile", ".booking-intro",
    ".booking-form", ".faq details", ".contact-card",
  ];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  groups.forEach((selector) => {
    $$(selector).forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--delay", `${(i % 4) * 90}ms`);
      observer.observe(el);
    });
  });
}

function initHeroParticles() {
  const layer = $("#heroParticles");
  if (!layer || reduceMotion) return;
  const symbols = ["✦", "♥", "✧", "●"];
  for (let i = 0; i < 16; i++) {
    const p = document.createElement("span");
    p.textContent = symbols[i % symbols.length];
    p.style.left = `${Math.random() * 100}%`;
    p.style.fontSize = `${10 + Math.random() * 16}px`;
    p.style.animationDuration = `${9 + Math.random() * 10}s`;
    p.style.animationDelay = `${-Math.random() * 14}s`;
    layer.appendChild(p);
  }
}

function initScrollEffects() {
  const header = $(".header");
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  const links = $$(".nav-links > a[href^='#']:not(.nav-book)");
  const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);

  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    header.classList.toggle("scrolled", window.scrollY > 30);
    const pos = window.scrollY + 140;
    let current = null;
    sections.forEach((s) => { if (s.offsetTop <= pos) current = s.id; });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
  initNavigation();
  initPackageButtons();
  initBookingForm();
  initScrollReveal();
  initHeroParticles();
  initScrollEffects();
});
