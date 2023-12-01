// this file contains the type definitions for parts of the app that concern the todo list implementation. Having dedicated type definition
// files is a best practices because it improves the structure of your project. 

export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
}
export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => (void);
    updateTodo: (id: number) => (void);
}