import {useState} from "react";
import { stringToHash } from "./utils/helpers";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const NewTask = ({tasks, setTasks}) => {
    const [name, setName] = useState("");
    const [deadline, setDeadline] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = stringToHash(name);
        const new_task = {id, name, deadline}
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
                 {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        required
                        value={deadline}
                        onChange={(newDate) => setDeadline(newDate)}
                    />
                </LocalizationProvider> */}
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