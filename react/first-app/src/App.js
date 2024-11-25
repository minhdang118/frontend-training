import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BookDetails from './BookDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={ <Home /> }></Route>
            <Route path="/create" element={ <Create /> }></Route>
            <Route path="/books/:id" element={ <BookDetails /> }></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
