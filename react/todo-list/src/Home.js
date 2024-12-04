import TaskList from "./TaskList";
import {useState, useEffect} from "react";
import { clearStorage, getFromStorage, saveToStorage } from "./utils/storage";
import NewTask from "./NewTask";

const Home = () => {
    let storedTasks = getFromStorage("tasks");
    if (!storedTasks) {
        storedTasks = [];
    }
    const [tasks, setTasks] = useState(storedTasks);

    const handleClick = () => {
        clearStorage();
        setTasks([]);
    }

    useEffect(() => {
        saveToStorage("tasks", tasks);
    }, [tasks]);

    return (
        <div className="home">
            <NewTask tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks} title="All Tasks" />
            <button onClick={handleClick}>Clear All Tasks!</button>
        </div>
    );
}
 
export default Home;