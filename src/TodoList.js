import React , {Component} from 'react';
import './TodoList.scss';
import FormBox from './FormBox';
import uuid from 'uuid';
import Todo from './Todo';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state ={
            todos: []
        }
        this.add = this.add.bind(this); 
        this.save = this.save.bind(this); 
        this.remove = this.remove.bind(this); 

    }

    add(todo){
        const newTodo = {name:todo, id: uuid()};
        this.setState(st => ({ 
            todos: [...st.todos, newTodo] }));
    }
    save(id, name){
        this.setState(st =>{
            const newTodos = st.todos.map(todo =>{
                if(todo.id === id)
                    todo = {id, name};
                return todo;
            });
            return {todos: newTodos}
        });
    }

    remove(id){
        setTimeout(() => {
            this.setState(st=>({
                todos: st.todos.filter(todo => todo.id !== id)
            }));
        }, 400);
        
    }
    render(){
        const renderedTodos = this.state.todos.map(todo =>{
            return <Todo name={todo.name} key={todo.id} id={todo.id} save ={this.save} remove={this.remove}/>
        });
        return(
            <div className="TodoList">
                <h2 className="TodoList-title">Todo List!</h2>
                <h3 className="TodoList-description">A Simple React Todo App</h3>
                {renderedTodos}
                <FormBox add={this.add}/>
            </div>
        );
    }
}
export default TodoList;
