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
    methods: {
        adicion(nombre) {
            const miHijo = this.misHijos.find(hijo => hijo.name === nombre);
            miHijo.contador++;
        }
    },
    components: {
        Fill
    }
}