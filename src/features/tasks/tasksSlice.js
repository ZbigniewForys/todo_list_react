import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },


    // removeTask: ({ tasks }, { payload: taskId }) => {
    //   const index = tasks.findIndex(({ id }) => id === taskId);
    //   tasks.splice(index, 1);
    // },



    removeTask: ({ tasks }, { payload:taskId}) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
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

    fetchExampleTasks: (state) => {
      state.loading = true;
    },

    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  removeTask,
  toggleTaskDone,
  setAllDone,
  fetchExampleTasks,
  fetchExampleTasksError,
  fetchExampleTasksSuccess,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;

export const selectHideDone = (state) => selectTasksState(state).hideDone;

export const selectIsEveryTaskDone = (state) => {
  selectTasks(state).every(({ done }) => done);
};

export const getTasksById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);
  if (!query || query.trim() === "") return tasks;
  return selectTasks(state).filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};
export const selectLoading = (state) => selectTasksState(state).loading;
export default tasksSlice.reducer;
