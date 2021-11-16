var app = new Vue({
    el: '#app',
    data: {
        titulo: "Directivas condicionales",
        modoOscuro: false,
        ventana: false,
        tareas: [
            {
                titulo: "Comprar leche",
                descripcion: "Comprar leche en la tienda",
                prioridad: true
            },
            {
                titulo: "Comprar azucar",
                descripcion: "Comprar azucar en la tienda",
                prioridad: false
            },
            {
                titulo: "Comprar cerveza",
                descripcion: "Comprar cerveza en la tienda",
                prioridad: true
            }
        ],
        inputTitulo: "",
        inputDescripcion: "",
        inputImportante: false,
        tableHeaders: ['Numero', 'Titulo', 'Descripcion', 'Prioridad'],
        tableItems: [
            {
                numero: 1,
                titulo: "Comprar leche",
                descripcion: "Comprar leche en la tienda",
            },
            {
                numero: 2,
                titulo: "Comprar leche",
                descripcion: "Comprar leche en la tienda",
            }
        ]
    },
    methods: {
        cambioFondo(){
            this.modoOscuro = !this.modoOscuro;
        },
        guardarTarea(){
           
            const nuevaTarea = {
                titulo: this.inputTitulo,
                descripcion: this.inputDescripcion,
                prioridad: this.inputImportante
            }
            console.log(nuevaTarea);
            this.tareas.push(nuevaTarea);
        }
    }
  
});