import { makeAutoObservable } from "mobx";

class Placeholder {

    todos = [
        {id: 1, title: 'Running', completed: false},
        {id: 2, title: 'Eating', completed: true},
        {id: 3, title: 'Sporting', completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }
}

// export default new Placeholder()