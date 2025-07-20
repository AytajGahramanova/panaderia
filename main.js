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

// scroll and fixed header
window.addEventListener("scroll", () => {
  let bottomHeader = document.querySelector(".bottom-header");

  if (window.scrollY > 150) {
    bottomHeader.classList.add("fixed");
    // console.log("salam");
  } else {
    bottomHeader.classList.remove("fixed");
  }
});
