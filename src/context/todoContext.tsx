// This file exports the the created context for the to-do functionality, and its provider. React Context allows you to share
// and manage state across your components without passing down props. The context will provide the data to just the 
// components that need to consume it. 

import * as React from 'react';
import { TodoContextType, ITodo } from '../types/todo';

//To use 'children' in React 18 you have to include the children prop yourself in the interface. See: https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode

interface Props {
    children: React.ReactNode;
  }

// Here we create a Todo context and set its type to match TodoContextType or null. Then we set the default value to null 
// temporarily when creating the context. The intended values will be assigned on the provider. 
export const TodoContext = React.createContext<TodoContextType | null>(null);

// Here we create the Todo provider that profides the context to the component consumers, and we initialize the state with some data
// to have todos work. 
const TodoProvider: React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = React.useState<ITodo[]>([
        {
            id: 1,
            title: 'post 1',
            description: 'this is a description',
            status: false,
        },
        {
            id: 2,
            title: 'post 2',
            description: 'this is another description',
            status: true,
        },
    ]);
// saveTodo function creates a new todo based on the interface ITodo and then appends the object to the array of todos. 
const saveTodo  = (todo: ITodo) => {
    const newTodo: ITodo = {
        id: Math.random(), // not really  unique but fine for this example
        title: todo.title,
        description: todo.description,
        status: false,
    }
    setTodos([...todos, newTodo])
}

// this fuction will look for the id of the todo passed as a parameter in the array of todos and then update it. 
const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
        if (todo.id === id) {
            todo.status = true
            setTodos([...todos])
        }
    })
}

return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
        {children}
    </TodoContext.Provider>
);

};
export default TodoProvider;