const revealNodes = document.querySelectorAll(".reveal");
const backToTop = document.querySelector(".back-to-top");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08,
    rootMargin: "0px 0px -6% 0px",
  }
);

revealNodes.forEach((node) => revealObserver.observe(node));

const syncBackToTop = () => {
  if (!backToTop) {
    return;
  }

  const shouldShow = window.scrollY > window.innerHeight * 0.45;
  backToTop.classList.toggle("is-visible", shouldShow);
};

window.addEventListener("scroll", syncBackToTop, { passive: true });
window.addEventListener("load", syncBackToTop);

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
