//variables de los botones de Like y Dislike
let boton_MeGusta = document.getElementsByClassName('btn-like');
let contador_MeGusta = document.getElementById('contador_MeGusta');
let contador_NoMeGusta = document.getElementById('contador_NoMeGusta');

//variables de el comentario
let contador_Comentario = document.getElementById('contadorComment');
let añadir_Comentario = document.getElementById('añadir_Comentario');
let caja_Comentario = document.getElementById('caja_Comentario');
let enviar_Comentario = document.getElementById('enviar_Comentario');
let contenido_Card = document.getElementById('contenido_Card');
let textarea = document.getElementById('comentario');
let comentario_Exit = false;
let lista_Elementos = contenido_Card.childNodes;

//funciones de los botones de Like y Dislike

function validarLike(valor){
    if(valor == 'like'){
        boton_MeGusta[1].classList.remove('bg-danger','text-white');
        boton_MeGusta[1].setAttribute("active", false);
        contador_NoMeGusta.textContent = '0';
    }else{
        boton_MeGusta[0].classList.remove('bg-primary','text-white');
        boton_MeGusta[0].setAttribute("active", false);
        contador_MeGusta.textContent = '0';
    }
}

boton_MeGusta[0].addEventListener("click", ()=>{
    boton_MeGusta[0].classList.add('bg-primary','text-white');
    boton_MeGusta[0].setAttribute("active", true);
    contador_MeGusta.textContent = '1';
    validarLike('like');
});

boton_MeGusta[1].addEventListener("click", ()=>{
    boton_MeGusta[1].classList.add('bg-danger','text-white');
    boton_MeGusta[1].setAttribute("active", true);
    contador_NoMeGusta.textContent = '1';
    validarLike('dislike');
});

//funciones del comentario

añadir_Comentario.addEventListener("click", ()=>{
    añadir_Comentario.classList.add('bg-warning','text-white');
    if(!comentario_Exit){
        caja_Comentario.classList.remove('visually-hidden');
    }
});

enviar_Comentario.addEventListener("click", ()=>{
    console.log(lista_Elementos[14]);
    caja_Comentario.classList.add('visually-hidden');
    comentario_Exit = true;
    
    const nodoHijo = document.createElement("div");
    nodoHijo.classList.add('bg-warning','bg-opacity-10','border','border-warning','px-4','py-3','rounded');
    nodoHijo.innerHTML = `
        <strong class="font-bold">${textarea.value}</strong>
        <button type="button" class="btn-close" id="eliminar_Comentario">
            <i class="bi bi-x-lg"></i>
        </button>`;

    document.getElementById('text-comment').classList.add('d-none');
    contenido_Card.appendChild(nodoHijo);
    contador_Comentario.textContent = '1';
    eliminarComentario();
    
});

// sweetalert

function eliminarComentario(){
    console.log(lista_Elementos);
    document.getElementById('eliminar_Comentario').addEventListener("click", ()=>{
        Swal.fire({
            title: 'Está seguro de eliminar este Comentario?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00b606',
            cancelButtonColor: '#C40000',
            confirmButtonText: 'Eliminar'
            }).then((result) => {
            if (result.isConfirmed) {
                contenido_Card.removeChild(lista_Elementos[15]);
                document.getElementById('text-comment').classList.remove('d-none');
                contador_Comentario.textContent = '0';
                Swal.fire({
                    title: 'Comentario eliminado exitosamente!',
                    icon: 'success'
                })
            }
        })
        
    });
    
}