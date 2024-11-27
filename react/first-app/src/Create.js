import {useState} from 'react';
import {useNavigate} from 'react-router-dom'; 

const Create = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("Epic");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, author, genre };

        setIsPending(true);

        setTimeout(() => {
            fetch("http://localhost:8000/books", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(book)
            }).then(() => {
                console.log("new book added");
                setIsPending(false);
            });
        }, 500);
        navigate("/");
    }

    return (
        <div className="create">
            <h2>Add A New Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Book title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Book author: </label>
                <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Book genre: </label>
                <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="Epic">Epic</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Self-improvement">Self-improvement</option>
                </select>
                { !isPending && <button>Add Book</button> }
                { isPending && <button disabled>Adding Book...</button> }
            </form>
        </div>
    );
}
 
export default Create;