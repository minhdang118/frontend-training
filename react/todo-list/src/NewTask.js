import {useState} from "react";

const NewTask = () => {
    const [name, setName] = useState("");
    const [deadline, setDeadline] = useState("");
    return (
        <div className="new-task">
            <h2>Add New Task</h2>
        </div>
    );
}
 
export default NewTask;