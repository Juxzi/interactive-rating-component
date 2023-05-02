const notes = document.querySelectorAll(".rating button");
const submit = document.querySelector(".submit");
const result = document.querySelector(".block2");
const noteResult = document.querySelector(".resultat");

notes.forEach((button) => {
  button.addEventListener("click", setRating);
});
function setRating() {
  const rating = this.dataset.rating;
  notes.forEach((button) => {
    button.classList.remove("active");
    if (button.dataset.rating <= rating) {
      button.classList.add("active");
    }
  });

  submit.addEventListener("click", () => {
    result.style.visibility = "visible";
    noteResult.textContent = `${rating}`;
  });
}
