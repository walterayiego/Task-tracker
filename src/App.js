// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import About from "./components/About";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasksArray, setTasksArray] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const getTaskData = await fetchRequest();
      setTasksArray(getTaskData);
    };

    getTasks();
  }, []);

  const fetchRequest = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    console.log(data);
    return data;
  };

  //deleteTask

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasksArray(tasksArray.filter((task) => task.id !== id));
  };

  //Add tasks
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasksArray([...tasksArray, data]);

    // const data = await res.json()

    //   const id = Math.floor(Math.random() * 1000 + 1);
    //   const newTask = { id, ...task };
    //   setTasksArray([...tasksArray, newTask]);
  };
  //fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  //set Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();

    setTasksArray(
      tasksArray.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}

        {tasksArray.length > 0 ? (
          <Tasks
            tasksArr={tasksArray}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Task Available"
        )}


        <Footer />
      </div>
    </Router>
  );
}

export default App;

//trying to console log reminder
