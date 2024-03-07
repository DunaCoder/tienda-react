export const useStore = create((set, get) => ({

    //consumir api
    consumirApi() {
        const url = "http://localhost:3000/items";
        fetch(url)
        .then((respuesta) => respuesta.json())
        .then((items) => {
            set({DataFecht: items})
            console.log(items)
        })
    }
}))