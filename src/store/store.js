// import Vue from "vue";
import { createStore } from "vuex";


//Load Vuex
// Vue.useContext(Vuex);
// Vue.use(Vuex);
//Create store
export const store = createStore({
  state: {
    todos: [
      {
        id: 1,
        title: "Todo One",
      },
      {
        id: 1,
        title: "Todo One",
      },
    ],
  },

  getters: {
    allTodos: (state) => state.todos,
  },

  actions: {},

  mutations: {},
});

// export default store