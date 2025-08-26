const commentName = document.getElementById('name');
const commentEmail = document.getElementById('email');
const commentBody = document.getElementById('body');

const urltypicode = "https://jsonplaceholder.typicode.com/comments";

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

    fetch(urltypicode)
    .then((res) => res.json())
    .then((data) => {
        let totalElements = data.length;
        console.log(`Total de elementos: ${totalElements}`);
        let id = prompt(`Existen ${totalElements} comentarios. Escribe el id (0-${totalElements-1})`)
        fetch(`${urltypicode}/${id}`) 
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            commentName.innerText = data.name;
            commentBody.innerText = data.body;
            commentEmail.innerText = data.email;    
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error))

    

    

}