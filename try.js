const todos = [
    {

        id: 1,
        title: "testing the title example",
        completed: false
    },
    {

        id: 2,
        title: "testing the title example",
        completed: false
    },
    {

        id: 3,
        title: "testing the title example",
        completed: false
    },
    {

        id: 4,
        title: "testing the title example",
        completed: false
    },
    {

        id: 5,
        title: "testing the title example",
        completed: true
    },
]

new_todos = todos.filter(todo=>todo.complete === false);
console.log(new_todos);