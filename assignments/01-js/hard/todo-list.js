/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list=[]
  }
  add(toDo) {
    this.list.push(toDo)
  }

  remove(index) {
    this.list = this.list.filter((item, idx) => {
      if (idx != index) {
        return item;
      }
    })
  }

  update(index, updatedTodo) {
    if (index < this.list.length) {
      this.list[index] = updatedTodo
    }
  }

  getAll() {
    return this.list;
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.list.length) {
      return this.list[indexOfTodo]
    }
    return null
  }

  clear() {
    this.list=[]
  }

}

module.exports = Todo;
