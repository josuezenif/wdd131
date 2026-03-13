const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list")

// li.textContent = input.value;
// deletebutton.textContent = "❌"
// li.append(deletebutton);
// list.append(li);

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        const deletebutton = document.createElement("button");
        deletebutton.textContent = "❌"
        deletebutton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deletebutton);
        list.appendChild(li);
        input.value = "";
    }
    input.focus();
});