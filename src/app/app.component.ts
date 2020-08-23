import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Простой список задач';
  todos = [
    {
    label:'Вызубрить основы ангуляра',
      priority: 1,
      done:true

  },
    {
      label:'Создать Задачник простой задачник',
      proirity: 2,
      done:true

    },
    {
      label:'Получить новое задание от Нуриддина',
      proirity: 3 ,
      done:false,

    } ,
    {
      label:'Выполнить задание от Нуриддина',
      proirity: 4,
      done:false,

    }


  ];
  addTodo(newTodoLabel)
  {
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo){
    this.todos =this.todos.filter( t => t.label !== todo.label);
  }
}
