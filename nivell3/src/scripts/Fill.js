export default {
    name: "Fill",
    methods: {
        suma() {
            this.$emit('sumar', this.name);
        }
    },
    props: {
        name: String,
        contador: Number
    },
    emits: [
        'sumar'
    ]
}