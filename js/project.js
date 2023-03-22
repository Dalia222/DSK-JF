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

//start chat
const popup = document.querySelector(".chat-popup");
const chatBtn = document.querySelector(".chat-btn");
const submitBtn = document.querySelector(".submit");
const chatArea = document.querySelector(".chat-area");
const inputElm = document.querySelector(".input-area input");

chatBtn.addEventListener("click", () => {
  popup.classList.toggle("show");
});
submitBtn.addEventListener("click", () => {
  let userInput = inputElm.value;

  let temp = `<div class="out-msg">
              <span class="my-msg">${userInput}</span>
              <img src="../images/user.png" class="avatar">
              </div>`;

  chatArea.insertAdjacentHTML("beforeend", temp);
  inputElm.value = "";
});
//end chat
