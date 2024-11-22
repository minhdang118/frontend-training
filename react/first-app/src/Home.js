import {useEffect, useState} from 'react'
import BookList from './BookList';

const Home = () => {
    // Clicks
    const [numClicks, setNumClicks] = useState(0);
    const handleClick = () => {
        setNumClicks(numClicks + 1);
    }

    // Books
    const [books, setBooks] = useState([
        { title: "Republic", genre: "Philosophy", author: "Plato", id: 1 },
        { title: "The Da Vinci Code", genre: "Thriller", author: "Dan Brown", id: 2 },
        { title: "Start With Why", genre: "Self-help", author: "Simon Sinek", id: 3 },
        { title: "Iliad", genre: "Epic", author: "Homer", id: 4 },
        { title: "Digital Fortress", genre: "Thriller", author: "Dan Brown", id: 5 },
        { title: "Deception Point", genre: "Thriller", author: "Dan Brown", id: 6 },
        { title: "Angels and Demons", genre: "Thriller", author: "Dan Brown", id: 7 },
    ]);

    const [numBooks, setNumBooks] = useState(books.length)

    const handleDelete = (id) => {
        const newBooks = books.filter((book) => book.id !== id);
        setBooks(newBooks);
        setNumBooks(newBooks.length)
    }

    useEffect(() => {}, [books]);

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ numClicks }</p>
            <button onClick={ handleClick }>Click me!</button>
            <p>{ numBooks }</p>
            <BookList books={ books } title="All Books" handleDelete={ handleDelete }/>
            <BookList books={books.filter((book) => book.author === "Dan Brown")} title="Books by Dan Brown" handleDelete={ handleDelete }/>
        </div>
    );
}
 
export default Home;