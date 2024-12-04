import {useState} from "react";

const NewTask = ({tasks, setTasks}) => {
    const [name, setName] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const new_task = {name, deadline}
        setTasks([...tasks, new_task]);
        setName("");
        setDeadline("");
    }
    return (
        <div className="new-task">
            <h2>Add A New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task name: </label>
                <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                 />
                 <label>Deadline: </label>
                 <input
                type="text"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                 />
                 <button>Add Task</button>
            </form>
        </div>
    );
}
 
export default NewTask;