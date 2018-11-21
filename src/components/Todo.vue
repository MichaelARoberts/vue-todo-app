<template lang="pug">
  div#todolist
    div(v-for="todo in getTodos")
      <Checkbox size="large" v-model="todo.completed" @click.prevent.native="_toggleTodo(todo.id)"/> {{todo.task}}
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'todo',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'addTodo',
      'toggleTodo',
      'deleteTodo'
    ]),
    _toggleTodo: function (id) {
      this.toggleTodo({
        id: id,
        vm: this
      })
    }
  },
  computed: {
    ...mapGetters([
      'getTodos'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
