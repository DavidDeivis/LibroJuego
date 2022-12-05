import datos from "./componentes.js";
const container = document.querySelector(".game");

console.log(datos.mensajes("Hola"));


let publicacion = 0;
let cargado = 0;

let result;


const observar = entry =>{

	if(entry[0].isIntersecting){
		if(result[publicacion] != undefined){
			cargarComents();
		}else{
			// console.log("No hay más");
		}
	}

}


const apiObservar = new IntersectionObserver(observar);


const getInformacion = async ()=>{

	// let informacion = await fetch("Comentarios.txt");
	// result = await informacion.json();

	// cargarComents();

}

function droga(){
	console.log("iniciado");
}

getInformacion();


function cargarComents(){

	

	

		const elemento = document.createElement("DIV");
		elemento.classList.add("container-chat");

		elemento.innerHTML = 
			`
			<div class="chat">
				<div class="img-user"></div>
				<p class="text-user">
					${result[publicacion].name}: ${result[publicacion].comentario}
				</p>
			</div>
			`

		
		container.appendChild(elemento);
		setTimeout(()=>{
			elemento.style.opacity = 1;
		}, 100)

		cargado++;
		publicacion++;

		if(cargado == 4){
			apiObservar.observe(elemento);
			cargado = 0;
		} else{
			if(result[publicacion] != undefined){
				setTimeout(()=>{
					cargarComents(result);
				}, 300)
			} else{
				// console.log("No hay más");
			}
		}
	
}






