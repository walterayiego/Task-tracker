import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = () => {
    if (!text) {
      alert("Add Task empty");
      return;
    } else {
      onAdd({ text, day, reminder });

      setDay("");
      setText("");
      setReminder(false);
    }
  };
  return (
    <form
      className="add-form"
      //onSubmit={onSubmit}
    >
      <div className="form-control">
        <label>Task </label>
        <input
          type="text"
          placeholder="Enter Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time </label>
        <input
          type="text"
          placeholder="Add Day and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder </label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        className="btn btn-block"
        type="button"
        value="Save Task"
        onClick={onSubmit}
      />
    </form>
  );
};

export default AddTask;
