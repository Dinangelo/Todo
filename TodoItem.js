export default {
    props: {
        todos: {
            type: String,
            required: true
        }
    },
    template: `<p> {{todos}} </p>`
}