// Enhanced book list with more suggestions
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", pages: 281, difficulty: "medium" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction", pages: 328, difficulty: "advanced" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", pages: 432, difficulty: "medium" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", pages: 310, difficulty: "medium" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", pages: 234, difficulty: "easy" },
    { title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", pages: 689, difficulty: "medium" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "Mystery", pages: 672, difficulty: "advanced" },
    { title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult", pages: 374, difficulty: "easy" },
    { title: "The Help", author: "Kathryn Stockett", genre: "Historical Fiction", pages: 451, difficulty: "medium" },
    { title: "The Martian", author: "Andy Weir", genre: "Science Fiction", pages: 369, difficulty: "medium" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", pages: 309, difficulty: "easy" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", pages: 180, difficulty: "medium" },
    { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", pages: 197, difficulty: "easy" },
    { title: "The Silent Patient", author: "Alex Michaelides", genre: "Thriller", pages: 325, difficulty: "medium" },
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", pages: 412, difficulty: "advanced" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", pages: 1178, difficulty: "advanced" },
    { title: "Gone Girl", author: "Gillian Flynn", genre: "Thriller", pages: 422, difficulty: "medium" },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", genre: "Dystopian", pages: 311, difficulty: "advanced" },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction", pages: 193, difficulty: "easy" },
    { title: "The Kite Runner", author: "Khaled Hosseini", genre: "Historical Fiction", pages: 371, difficulty: "medium" },
    { title: "The Shining", author: "Stephen King", genre: "Horror", pages: 447, difficulty: "medium" },
    { title: "The Fault in Our Stars", author: "John Green", genre: "Young Adult", pages: 313, difficulty: "easy" },
    { title: "The Girl on the Train", author: "Paula Hawkins", genre: "Mystery", pages: 316, difficulty: "medium" },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", genre: "Fantasy", pages: 767, difficulty: "easy" },
    { title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction", pages: 311, difficulty: "advanced" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Gothic Fiction", pages: 254, difficulty: "medium" },
    { title: "The Pillars of the Earth", author: "Ken Follett", genre: "Historical Fiction", pages: 973, difficulty: "advanced" },
    { title: "The Giver", author: "Lois Lowry", genre: "Young Adult", pages: 180, difficulty: "easy" },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", pages: 662, difficulty: "medium" },
    { title: "The Maze Runner", author: "James Dashner", genre: "Young Adult", pages: 375, difficulty: "easy" },
    { title: "The Nightingale", author: "Kristin Hannah", genre: "Historical Fiction", pages: 440, difficulty: "medium" },
    { title: "The Road", author: "Cormac McCarthy", genre: "Post-Apocalyptic", pages: 287, difficulty: "medium" },
    { title: "The Book Thief", author: "Markus Zusak", genre: "Historical Fiction", pages: 552, difficulty: "medium" },
    { title: "The Graveyard Book", author: "Neil Gaiman", genre: "Fantasy", pages: 312, difficulty: "easy" },
    { title: "The Goldfinch", author: "Donna Tartt", genre: "Fiction", pages: 771, difficulty: "advanced" },
    { title: "The Curious Incident of the Dog in the Night-Time", author: "Mark Haddon", genre: "Mystery", pages: 226, difficulty: "easy" },
    { title: "The Guernsey Literary and Potato Peel Pie Society", author: "Mary Ann Shaffer", genre: "Historical Fiction", pages: 290, difficulty: "medium" },
    { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", genre: "Non-fiction", pages: 381, difficulty: "medium" },
    { title: "The Inheritance Cycle", author: "Christopher Paolini", genre: "Fantasy", pages: 2908, difficulty: "medium" },
    { title: "The Lovely Bones", author: "Alice Sebold", genre: "Fiction", pages: 328, difficulty: "medium" },
    { title: "It Ends with Us", author: "Colleen Hoover", genre: "Romance", pages: 385, difficulty: "medium" },
    { title: "Verity", author: "Colleen Hoover", genre: "Thriller", pages: 333, difficulty: "medium" },
    { title: "Ugly Love", author: "Colleen Hoover", genre: "Romance", pages: 336, difficulty: "medium" },
    { title: "November 9", author: "Colleen Hoover", genre: "Romance", pages: 310, difficulty: "medium" },
    { title: "Confess", author: "Colleen Hoover", genre: "Romance", pages: 320, difficulty: "medium" },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", genre: "Magical Realism", pages: 417, difficulty: "advanced" },
    { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", pages: 197, difficulty: "easy" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "Crime Fiction", pages: 672, difficulty: "medium" },
    { title: "Norwegian Wood", author: "Haruki Murakami", genre: "Literary Fiction", pages: 296, difficulty: "medium" },
    { title: "The God of Small Things", author: "Arundhati Roy", genre: "Literary Fiction", pages: 340, difficulty: "medium" },
    { title: "Things Fall Apart", author: "Chinua Achebe", genre: "Historical Fiction", pages: 209, difficulty: "medium" },
    { title: "The Unbearable Lightness of Being", author: "Milan Kundera", genre: "Philosophical Fiction", pages: 314, difficulty: "advanced" },
    { title: "The Name of the Rose", author: "Umberto Eco", genre: "Historical Mystery", pages: 536, difficulty: "advanced" },
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "Non-fiction", pages: 498, difficulty: "medium" },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", genre: "Self-help", pages: 381, difficulty: "medium" },
    { title: "The Diary of a Young Girl", author: "Anne Frank", genre: "Non-fiction", pages: 283, difficulty: "medium" },
    { title: "The Little Prince", author: "Antoine de Saint-Exupéry", genre: "Children's Literature", pages: 96, difficulty: "easy" },
    { title: "The Kite Runner", author: "Khaled Hosseini", genre: "Historical Fiction", pages: 371, difficulty: "medium" },
    { title: "Life of Pi", author: "Yann Martel", genre: "Adventure Fiction", pages: 352, difficulty: "medium" },
    { title: "The Girl on the Train", author: "Paula Hawkins", genre: "Thriller", pages: 316, difficulty: "medium" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Coming-of-age Fiction", pages: 234, difficulty: "medium" },
    { title: "The Power of Habit", author: "Charles Duhigg", genre: "Non-fiction", pages: 371, difficulty: "medium" },
    { title: "The Brief Wondrous Life of Oscar Wao", author: "Junot Díaz", genre: "Contemporary Fiction", pages: 335, difficulty: "medium" },
    { title: "The Wind-Up Bird Chronicle", author: "Haruki Murakami", genre: "Magical Realism", pages: 607, difficulty: "advanced" },
    { title: "Becoming", author: "Michelle Obama", genre: "Autobiography", pages: 448, difficulty: "medium" },
    // Add more books here...
];

function getRecommendations(preferences) {
    const { genres, authors, readingLevel, bookLength } = preferences;

    const pageLimits = {
        short: { min: 0, max: 300 },
        medium: { min: 300, max: 500 },
        long: { min: 500, max: Infinity }
    };

    const scoredBooks = books.map(book => {
        let score = 0;

        // Author match (higher weight)
        if (authors.some(author => book.author.toLowerCase().includes(author.toLowerCase()))) {
            score += 10; // Increased score for author match
        }

        // Genre match
        if (genres.includes(book.genre)) score += 5;

        // Reading level match
        if (book.difficulty === readingLevel) score += 2;

        // Book length match
        const pageLimit = pageLimits[bookLength];
        if (book.pages >= pageLimit.min && book.pages <= pageLimit.max) score += 1;

        return { ...book, score };
    });

    // Sort books by score and return top recommendations
    return scoredBooks
        .filter(book => book.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
}

function displayRecommendations(recommendations) {
    const recommendationsSection = document.getElementById("recommendations");
    recommendationsSection.innerHTML = "<h2>Recommended Books</h2>";
    if (recommendations.length === 0) {
        recommendationsSection.innerHTML += "<p>No matching books found. Try adjusting your preferences.</p>";
        return;
    }
    const ul = document.createElement("ul");
    recommendations.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>Pages: ${book.pages}</p>
            <p>Difficulty: ${book.difficulty}</p>
        `;
        ul.appendChild(li);
    });
    recommendationsSection.appendChild(ul);
    recommendationsSection.classList.add("fadeIn");
}

// Modify the form submission handler to handle author input
document.getElementById("preferencesForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const genres = Array.from(document.getElementById("genres").selectedOptions).map(option => option.value);
    const authors = document.getElementById("authors").value.split(",").map(author => author.trim());
    const readingLevel = document.getElementById("readingLevel").value;
    const bookLength = document.getElementById("bookLength").value;

    if (genres.length === 0 && authors.length === 0) {
        alert("Please select at least one genre or enter an author");
        return;
    }

    const preferences = { genres, authors, readingLevel, bookLength };
    const recommendations = getRecommendations(preferences);
    displayRecommendations(recommendations);
});

function displayAuthorRecommendations(author) {
    const authorBooks = books.filter(book => 
        book.author.toLowerCase().includes(author.toLowerCase())
    );

    const recommendationsSection = document.getElementById("recommendations");
    recommendationsSection.innerHTML = `<h2>Books by ${author}</h2>`;

    if (authorBooks.length === 0) {
        recommendationsSection.innerHTML += "<p>No books found by this author in our database.</p>";
        return;
    }

    const ul = document.createElement("ul");
    authorBooks.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${book.title}</h3>
            <p>Genre: ${book.genre}</p>
            <p>Pages: ${book.pages}</p>
            <p>Difficulty: ${book.difficulty}</p>   
        `;
        ul.appendChild(li);
    });
    recommendationsSection.appendChild(ul);
    recommendationsSection.classList.add("fadeIn");
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add an event listener for the authors input field
document.getElementById("authors").addEventListener("change", (e) => {
    const author = e.target.value.trim();
    if (author) {
        displayAuthorRecommendations(author);
    }
});

// Show active section
function showActiveSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Initialize the page
showActiveSection('home');