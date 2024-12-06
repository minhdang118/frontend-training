import TaskList from "./TaskList";
import {useState, useEffect} from "react";
import { clearStorage, getFromStorage, saveToStorage } from "./utils/helpers";
import NewTask from "./NewTask";

const Home = () => {
    let storedTasks = getFromStorage("tasks");
    if (!storedTasks) {
        storedTasks = [];
    }
    const [tasks, setTasks] = useState(storedTasks);

    const handleClearAll = () => {
        clearStorage();
        setTasks([]);
    }

    useEffect(() => {
        saveToStorage("tasks", tasks);
    }, [tasks]);

    return (
        <div className="home">
            <NewTask tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks} setTasks={setTasks} title="All Tasks" />
            <button onClick={handleClearAll}>Clear All</button>
        </div>
    );
}
 
export default Home;