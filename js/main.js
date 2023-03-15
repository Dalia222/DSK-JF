// start nav bar 
let menu = document.getElementById("profileMenu");

function showMenu() {
  menu.classList.toggle("active-list");
}
document.addEventListener("click", function (e) {
  if (
    menu.classList.contains("active-list") &&
    !menu.contains(e.target) &&
    !document.getElementById("profilePic").contains(e.target)
  ) {
    menu.classList.remove("active-list");
  }
});
// end nav bar
