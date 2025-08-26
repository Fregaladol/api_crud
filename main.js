const commentName = document.getElementById('name');
const commentEmail = document.getElementById('email');
const commentBody = document.getElementById('body');

const urltypicode = "https://jsonplaceholder.typicode.com/comments";


function mostrarTotalComentarios() {
    fetch(urltypicode)
        .then((res) => res.json())
        .then((data) => {
            const total = data.length;
            const totalComentariosElemento = document.getElementById("totalComentarios");
            totalComentariosElemento.innerText = `Total de comentarios: ${total}`;
        })
        .catch((error) => console.error("Error al obtener comentarios:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarTotalComentarios();
});



//GET
function verTodos(){
    fetch(urltypicode)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))
}

// GET by id

function verUno(){
    let id = prompt("Escribe el ID)");
        fetch(`${urltypicode}/${id}`) 
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            commentName.innerText = data.name;
            commentBody.innerText = data.body;
            commentEmail.innerText = data.email;    
        })
        .catch((error) => console.log(error));
}


// POST
function sumarUno(){
    
    fetch(urltypicode, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
            {
                "name": "Pepe Lepu",
                "email":"pepe@lepu.com",
                "body": "Hola soy pepe lepu, soy una mofeta amorosa."

            }
        )

    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));

}

// PATH by id
function cambiarSoloNombre(){

    let id = prompt("Escribe el ID)");
    fetch(`${urltypicode}/${id}`,{
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
        },
        body: JSON.stringify(
            {
                "name": "Javier Solis"
            }
        )
    
        }) 
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        
        })
        .catch((error) => console.log(error));
}

// DELETE por id
function borrarUnoPorId(){
    let id = prompt("Escribe el id a borrar"); 
       fetch(`${urltypicode}/${id}`,{
        method: 'DELETE',
        headers: {
            "Content-type": "application/json",
        }
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("El comentario ha sido borrado exitosamente");
      alert("El comentario fue borrado exitosamente.")
    })
    .catch((error) => console.log(error));
}