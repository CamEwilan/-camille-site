// Active nav link
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a[data-nav]").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  // Contact form (mailto fallback, no backend needed)
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const prenom = encodeURIComponent(fd.get("prenom") || "");
      const nom = encodeURIComponent(fd.get("nom") || "");
      const email = encodeURIComponent(fd.get("email") || "");
      const sujet = encodeURIComponent(fd.get("sujet") || "Contact portfolio");
      const message = encodeURIComponent(
        `${fd.get("message") || ""}\n\n—\nDe : ${fd.get("prenom")} ${fd.get("nom")}\nEmail : ${fd.get("email")}`
      );
      const href = `mailto:camille.villat@ik.me?subject=${sujet}&body=${message}`;
      window.location.href = href;
    });
  }

  // Lightbox for gallery images
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = '<button class="close" aria-label="Fermer">×</button><img alt="">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector("img");
  const close = () => lb.classList.remove("active");
  lb.addEventListener("click", close);
  lb.querySelector(".close").addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  document.querySelectorAll(".gallery .item img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      lbImg.src = img.src;
      lbImg.alt = img.alt || "";
      lb.classList.add("active");
    });
  });
});
