const TaskList = ({tasks, title}) => {

    return (
        <div className="task-list">
            <h2>{title}</h2>
            {tasks.map((task) => (
                <div className="task-preview" key={task.id}>
                    <h4>{task.name}</h4>
                    <p>{task.deadline}</p>
                </div>
            ))}
        </div>
    );
}
 
export default TaskList;