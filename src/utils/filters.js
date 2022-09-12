export const filtersTab = {
    all: (todos) => todos,
    active: (todos) =>  todos.filter((todo) => !todo.done),
    completed: (todos) => todos.filter((todo) => todo.done)
}

export const filterTransformText = {
    pluralName: (n, w) => {
        if (n === 1) return w
        else return (w + 's')
    },
    pluralize: (n, w) => this.pluralName(n, w),
    capitalize: (s) => s.charAt(0).toUpperCase() + s.slice(1)
}