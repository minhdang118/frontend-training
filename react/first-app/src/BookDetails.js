import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
    const { id } = useParams();
    const { data: book, isPending, error } = useFetch("http://localhost:8000/books/" + id);

    return (
        <div className="book-details">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {book && (
                <article>
                    <h2>{ book.title }</h2>
                    <p>Written by: { book.author }</p>
                    <p>Genre: { book.genre }</p>
                </article>
            )}
        </div>
    );
}
 
export default BookDetails;