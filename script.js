document.addEventListener("DOMContentLoaded", () => {
  // Delikatne pojawianie się elementów podczas przewijania.
  const items = document.querySelectorAll(
    ".link-card, .social-card, .offer-card, .featured-photo, .contact-card"
  );

  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(16px)";
    item.style.transition =
      "opacity .65s ease, transform .65s ease, border-color .3s ease, box-shadow .3s ease";
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.08 }
  );

  items.forEach((item) => observer.observe(item));

  // Jeśli zdjęcie nie istnieje, nie pokazuj brzydkiej ikony broken image.
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.visibility = "hidden";
    });
  });
});
