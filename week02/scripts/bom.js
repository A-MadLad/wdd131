const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const li = document.createElement("li");
const deleteButton = document.createElement("button");

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);
    input.value = "";
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
      input.value = "";
    });
  } else {
    alert("Please enter a chapter");
    input.focus();
  }
});
