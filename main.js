const projectDivs = document.querySelectorAll(".projects");

for (let i = 0; i < projectDivs.length; i++) {
  projectDivs[i].addEventListener(
    "mouseenter",
    function(evt) {
      evt.preventDefault();
      projectDivs[i].style.background = "rgba(0, 0, 0, 0.8)";

      //   setTimeout(function() {
      //     projectDivs[i].style.color = "";
      //   }, 500);
    },
    false
  );
}

for (let i = 0; i < projectDivs.length; i++) {
  projectDivs[i].addEventListener(
    "mouseleave",
    function(evt) {
      evt.preventDefault();
      projectDivs[i].style.background = "";

      //   setTimeout(function() {
      //     projectDivs[i].style.color = "";
      //   }, 500);
    },
    false
  );
}

// for (let i = 0; i < aliveOrDeadButtons.length; i++) {
//   aliveOrDeadButtons[i].addEventListener("click", function(evt) {
//     evt.preventDefault();
//     if (stati[i] === "dead") {
//       characterDivs[i].append(dead);
//     } else if (stati[i] === "alive") {
//       characterDivs[i].append(alive);
//     }
//   });
// }
