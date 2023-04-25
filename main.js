let panel = document.querySelector(".panel");
let btns = document.querySelectorAll(".btns li");
let ring = document.querySelectorAll("#ring");
// 유사배열로 li를 바인딩해서 반환한 값이 "btns"
btns.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
