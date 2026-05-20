const $btn1 = document.querySelector(".btn-1");

$btn1.addEventListener("click", function(){
    document.querySelector(".text-1").textContent = "Primer texto cambiado!";
});



const $btn2 = document.querySelector(".btn-2");


$btn2.addEventListener("click", function(){
    document.querySelector(".text-2").innerHTML = "Segundo texto cambiado!";
});


let $img = document.querySelector(".imagen");

$img.src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/cb/95/57/img-20180721-wa0042-largejpg.jpg?w=900&h=500&s=1";




const $send = document.querySelector(".send");

$send.addEventListener("click", function(){
    let $input = document.querySelector(".input-user");
    let $input2 = document.querySelector(".contra");

    console.log($input.value);
    console.log($input2.value);
});

const $decoration = document.querySelector(".decoration");

$decoration.classList.add("red");

const $descorar = document.querySelector(".descorar");

$descorar.classList.remove("descorar");

const $oscuro = document.querySelector(".oscuro");

$oscuro.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});



const $lista = document.querySelector(".lista");

const $agregar = document.querySelector(".add");
let amount = 8;

$agregar.addEventListener('click', function(){
    amount++;
    const $nuevopunto = document.createElement("li");
    $nuevopunto.textContent = "Punto " + amount;

    $lista.appendChild($nuevopunto);
});

/*----------------------*/
const $nombre = document.querySelector(".nombre-input");
const $color = document.querySelector(".color-input");
const $mensaje = document.querySelector(".mensaje-input");

const $enviar = document.querySelector(".enviar");


/*----------------------*/
const $output_nombre = document.querySelector(".nombre");
const $output_color = document.querySelector(".color");
const $output_mensaje = document.querySelector(".mensaje");


/*----------------------*/
const $result = document.querySelector(".resultado");


$enviar.addEventListener('click', function(){
    const $card = document.createElement("div");
    $card.innerHTML += "<h2> Nombre: " + $nombre.value + "</h2>";
    $card.innerHTML += "<h2> Color favorito: " + $color.value + "</h2>";
    $card.innerHTML += "<h2> Mensaje:" + $mensaje.value + "</h2>";

    const $error = document.querySelector(".error");

    if($nombre.value != "" && $color.value != "" && $mensaje.value != ""){

        $error.textContent = "";
        $error.classList.remove("error-style");

        $output_nombre.textContent = $nombre.value;
        $output_color.textContent = $color.value;
        $output_mensaje.textContent = $mensaje.value;

        $result.classList.add("card");
        document.body.append($card);
    }else{
     
      $error.textContent = "Por favor complete todos los campos!";  
      $error.classList.add("error-style");
    }
 
});

