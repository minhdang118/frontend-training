import Button from "@mui/material/Button"

const TaskList = ({tasks, setTasks, title}) => {
    const handleClear = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }
    return (
        <div className="task-list">
            <h2>{title}</h2>
            {tasks.map((task) => (
                <div className="task-preview">
                    <h4>{task.name}</h4>
                    <p>{task.deadline}</p>
                    {/* <p>{task.id}</p> */}
                    <button onClick={() => handleClear(task.id)}>Clear</button>
                    {/* <Button variant="contained" onClick={() => handleClear(task.id)}>Clear</Button> */}
                </div>
            ))}
        </div>
    );
}
 
export default TaskList;