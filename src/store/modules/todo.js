const state = {
  todos: [
    {
      id: 0,
      task: 'Buy food.',
      completed: false
    },
    {
      id: 1,
      task: 'Clean Kitchen.',
      completed: true
    },
    {
      id: 2,
      task: 'Take out the trash.',
      completed: false
    }
  ]
}

const getters = {
  getTodos: state => state.todos
}

const mutations = {
  ADD_TODO: (state, payload) => {
    let newTask = {
      id: payload.newId,
      task: payload.task,
      completed: false
    }
    state.todos.unshift(newTask)
  },
  TOGGLE_TODO: (state, payload) => {
    let item = state.todos.find(todo => todo.id === payload.id)
    item.completed = !item.completed
  },
  DELETE_TODO: (state, payload) => {
    let index = state.todos.findIndex(todo => todo.id === payload)
    state.todos.splice(index, 1)
  }
}

const actions = {
  addTodo: (context, payload) => {
    context.commit('ADD_TODO', payload)
  },
  toggleTodo: (context, payload) => {
    console.log(payload.vm)
    context.commit('TOGGLE_TODO', payload)
    payload.vm.$Notice.open({
      title: 'Toggled Todo',
      desc: 'Here is the notification description. Here is the notification description. '
    })
  },
  deleteTodo: (context, payload) => {
    context.commit('DELETE_TODO', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
