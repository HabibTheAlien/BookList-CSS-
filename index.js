const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
	e.preventDefault();
	if (title.value == "" && author.value == "" && year.value == "") {
		alert("Please Add Some Books !!!");
	} else {
		const newBook = document.querySelector(".book-list");
		const newRow = document.createElement("tr");

		const newTitle = document.createElement("td");
		newTitle.innerHTML = title.value;
		newRow.appendChild(newTitle);

		const newAuthor = document.createElement("td");
		newAuthor.innerHTML = author.value;
		newRow.appendChild(newAuthor);

		const newYear = document.createElement("td");
		newYear.innerHTML = year.value;
		newRow.appendChild(newYear);

		newBook.appendChild(newRow);
	}
});
