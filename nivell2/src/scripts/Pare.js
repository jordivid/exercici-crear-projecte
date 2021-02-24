import Fill from "./../components/Fill.vue";

export default {
    name: "Pare",
    data() {
        return {
            misHijos: [
                {
                    name: "Item 1",
                    contador: 0
                },
                {
                    name: "Item 2",
                    contador: 0
                },
                {
                    name: "Item 3",
                    contador: 0
                }
            ]
        }
    },
    components: {
        Fill
    }
}