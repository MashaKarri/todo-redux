import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";

import { deleteTask, toggleTask } from "redux/operations";

import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(
      toggleTask({
        id: task.id,
        completed: !task.completed,
      })
    );
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />

      <p className={css.text}>{task.text}</p>

      <button
        className={css.btn}
        type="button"
        onClick={handleDelete}
        aria-label="Delete task"
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};
