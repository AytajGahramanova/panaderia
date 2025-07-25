// search
let search = document.getElementsByClassName("search")[0];
let searchWrapper = document.getElementsByClassName("search-wrapper")[0];
let closeSvg = document.getElementsByClassName("close-svg")[0];

search.addEventListener("click", () => {
  searchWrapper.classList.add("active");
  searchWrapper.style.display = "block";
  closeSvg.classList.remove("d-none");
  search.classList.add("d-none");
  closeSvg.style.fill = "#81d742";
});
closeSvg.addEventListener("click", () => {
  searchWrapper.classList.remove("active");
  searchWrapper.style.display = "none";
  closeSvg.classList.add("d-none");
  search.classList.remove("d-none");
});

// scroll and fixed header and scroll bottom
let scrollButton = document.querySelector(".page-scroll-button");
window.addEventListener("scroll", () => {
  let bottomHeader = document.querySelector(".bottom-header");

  if (window.scrollY > 200) {
    bottomHeader.classList.add("fixed");
    scrollButton.classList.remove("d-none");
  } else {
    bottomHeader.classList.remove("fixed");
    scrollButton.classList.add("d-none");
  }
});

// scroll bottom
scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// gallery fancybox
Fancybox.bind("[data-fancybox]", {});
