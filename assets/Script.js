const form = document.querySelector("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const task = input.value;

  if (task) {
    const li = document.createElement("li");
    li.textContent = task;

    list.appendChild(li);

    input.value = "";
  }
});
const completed = function (j) {
  let eleList = j.target;
  eleList.classList.toggle("completed");
};
document.querySelector("ul").addEventListener("click", completed);
