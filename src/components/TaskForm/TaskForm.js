import { useDispatch } from "react-redux";

import { Button } from "components/Button/Button";
import { addTask } from "redux/operations";

import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const text = form.elements.text.value.trim();

    if (!text) {
      return;
    }

    dispatch(addTask(text));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
        required
      />

      <Button type="submit">Add task</Button>
    </form>
  );
};
