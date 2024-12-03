import TaskList from "./TaskList";
import {useState} from "react";

const Home = () => {
    const [tasks, setTasks] = useState([
        {id: 1, name: "Read a paper", deadline: "Dec 07"},
        {id: 2, name: "Go for a run", deadline: "Dec 08"},
        {id: 3, name: "Write an essay", deadline: "Dec 10"},
        {id: 4, name: "Repair glasses", deadline: "Dec 13"},
        {id: 5, name: "Fix lights", deadline: "Dec 14"}
    ]);

    


    return (
        <div className="home">
            <h2>Tasks</h2>
            <TaskList tasks={tasks} title="All Tasks" />
        </div>
    );
}
 
export default Home;