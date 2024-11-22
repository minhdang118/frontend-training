import {useState} from 'react';
import BookList from './BookList';
import useFetch from './useFetch';

const Home = () => {
    // Clicks
    const [numClicks, setNumClicks] = useState(0);
    const handleClick = () => {
        setNumClicks(numClicks + 1);
    }

    // Books
    const { data: books, isPending, error } = useFetch("http://localhost:8000/books");

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ numClicks }</p>
            <button onClick={ handleClick }>Click me!</button>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {books && <BookList books={ books } title="All Books" />}
        </div>
    );
}
 
export default Home;