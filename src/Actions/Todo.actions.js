let nextIdTodo = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextIdTodo++,
    complete: false,
    text,
});