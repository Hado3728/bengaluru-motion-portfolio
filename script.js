const progress = document.querySelector("#progress");
const reveals = document.querySelectorAll(".reveal");
const heroMap = document.querySelector(".hero-map");
const pathDemo = document.querySelector("#pathDemo");
const marker = document.querySelector(".you-marker");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  });
}, { threshold: 0.14 });
reveals.forEach(el => observer.observe(el));

function onScroll(){
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${Math.min(100, (scrollY / max) * 100)}%`;

  const y = Math.min(scrollY * 0.035, 34);
  if (heroMap) heroMap.style.transform = `scale(1.08) translateY(${y}px)`;

  if (pathDemo && marker){
    const r = pathDemo.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (innerHeight * .72 - r.top) / (innerHeight * .75)));
    marker.style.left = `${58 + p * 18}%`;
    marker.style.top = `${43 - p * 10}%`;
  }
}
addEventListener("scroll", onScroll, {passive:true});
onScroll();
