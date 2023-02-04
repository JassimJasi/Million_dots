let tads = document.getElementById("navs");
let links = tads.getElementsByTagName("a");
let selectedLink;

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    if (selectedLink) {
      selectedLink.classList.remove("highlight");
    }
    selectedLink = event.target;
    selectedLink.classList.add("highlight");
  });
}
