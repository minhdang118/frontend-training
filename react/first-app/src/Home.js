import {useState} from 'react'

const Home = () => {
    const [numClicks, setNumClicks] = useState(0);
    const handleClick = () => {
        setNumClicks(numClicks + 1);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ numClicks }</p>
            <button onClick={ handleClick }>Click me!</button>
        </div>
    );
}
 
export default Home;