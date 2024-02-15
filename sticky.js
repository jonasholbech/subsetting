const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
for (let i = 0; i < 12; i++) {
  const g = document.querySelector("template").content;
  const c = g.cloneNode(true);
  c.querySelector("h2").innerText = months[i];
  c.querySelector("h2").dataset.month = months[i];
  document.querySelector(".groups").appendChild(c);
  const li = document.createElement("li");
  li.textContent = months[i];
  li.dataset.month = months[i];
  document.querySelector(".menu ol").appendChild(li);
}
document.querySelector(".group");
const els = document.querySelectorAll("h2");
els.forEach((el) => {
  const observer = new IntersectionObserver(
    ([e]) => {
      if (e.intersectionRatio < 1 && e.intersectionRatio > 0) {
        console.log(e.intersectionRatio, el.textContent, e.isIntersecting);
        //active
        e.target.classList.add("is-pinned");
        document
          .querySelector(`.menu ol [data-month=${e.target.dataset.month}]`)
          .classList.add("is-pinned");
      } else {
        e.target.classList.remove("is-pinned");
        document
          .querySelector(`.menu ol [data-month=${e.target.dataset.month}]`)
          .classList.remove("is-pinned");
      }
    },
    { threshold: [1] }
  );

  observer.observe(el);
});
