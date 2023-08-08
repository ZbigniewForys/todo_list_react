import { createSlice } from "@reduxjs/toolkit";

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");
  return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getInitialTasks(),
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks.splice(index, 1);
    },

    toggleTaskDone: ({ tasks }, { payload }) => {
      tasks.map((task) => {
        if (task.id === payload) {
          task.done = !task.done;
        }

        return task;
      });
    },

    setAllDone: ({ tasks }) => {
      tasks.map((task) => {
        task.done = true;
        return tasks;
      });
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  removeTask,
  toggleTaskDone,
  setAllDone,
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
