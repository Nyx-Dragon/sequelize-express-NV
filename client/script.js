const API_URL = "http://localhost:8000/books";

const bookList = document.getElementById("bookList");
const bookForm = document.getElementById("bookForm");

const loadBooks = async () => {
  bookList.innerHTML = "Cargando libros...";
  const res = await fetch(API_URL);
  const books = await res.json();

  bookList.innerHTML = "";

  books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <strong>${book.title}</strong> (${book.length || 0} páginas)<br>
      <em>${book.description || "Sin descripción"}</em><br>
      <button onclick="deleteBook(${book.id})">Eliminar</button>
    `;
    bookList.appendChild(div);
  });
};

const addBook = async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const length = document.getElementById("length").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, length }),
  });

  bookForm.reset();
  loadBooks();
};

const deleteBook = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  loadBooks();
};

bookForm.addEventListener("submit", addBook);
loadBooks();