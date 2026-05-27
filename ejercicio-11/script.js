const $boton_agregar = document.querySelector(".add");
const $input1 = document.querySelector(".nombre_img");
const $input2 = document.querySelector(".url_img")
const $error = document.querySelector(".error");
const $total = document.querySelector(".total");
const $fav = document.querySelector(".favoritos");
const $no_fav = document.querySelector(".no-favoritas");
const $remove_galeria = document.querySelector(".remove_all");

/*Filtro botones*/
const $tarjetas = document.querySelectorAll(".card-style");
const $show_all = document.querySelector(".show_all");
const $fav_all = document.querySelector(".fav_all");
const $no_fav_all = document.querySelector(".no_fav_all");


let total_imgs = 0;
let fav_imgs = 0;
let no_fav_imgs = 0;

$boton_agregar.addEventListener('click', function(){

   
    event.preventDefault();

    $error.textContent = "";
    $error.classList.remove("error-style");


    if($input1.value !== "" && $input2.value !== ""){
        total_imgs++;
        console.log(total_imgs);
        no_fav_imgs = total_imgs;

        $total.textContent = total_imgs;
        $no_fav.textContent = no_fav_imgs;
        console.log("Datos obtenidos: ");
        console.log("Nombre de la imagen: " + $input1.value);
        console.log("Url de la imagen: " + $input2.value)

        const $card = document.createElement("div");
        $card.classList.add("card-style");

        $card.innerHTML += "<p>" + $input1.value  + "</p>";
   
        const $img  = document.createElement("img");
        $img.src = $input2.value;
        $img.classList.add("imagenes");

        const $eliminar_boton = document.createElement("button");
        $eliminar_boton.textContent = "Eliminar";
        $eliminar_boton.classList.add("eleminar"); 

        $eliminar_boton.addEventListener('click', function(){
            total_imgs--;
            $card.remove();

            if($favorito_boton.classList.contains("imagenes-fav")){
                fav_imgs--;
            }

            no_fav_imgs = total_imgs - fav_imgs;
            $no_fav.textContent = no_fav_imgs;
            $total.textContent = total_imgs;
            $fav.textContent = fav_imgs;
        });


        const $favorito_boton = document.createElement("button");
        $favorito_boton.innerHTML = '<i class="fa-solid fa-star"></i>';
        $favorito_boton.classList.add("favorito-style");

        $favorito_boton.addEventListener('click', function(){
            $favorito_boton.classList.toggle("imagenes-fav");
            console.log($favorito_boton.className);

            if($favorito_boton.classList.contains("imagenes-fav")){
                fav_imgs++;
            }else if(fav_imgs > 0){
                fav_imgs--;
            }
          
            no_fav_imgs = total_imgs - fav_imgs;

            $fav.textContent = fav_imgs;
            $no_fav.textContent = no_fav_imgs;
        });

        $card.appendChild($img);
        $card.appendChild($eliminar_boton);
        $card.appendChild($favorito_boton);

        const $galeria = document.querySelector(".galeria");

        $galeria.appendChild($card);
        
    }else{
        
        $error.textContent = "Por favor, complete todos los campos!";
        $error.classList.add("error-style");

    }
});

$remove_galeria.addEventListener('click', function(){
    if(total_imgs > 0){
        const all_divs = document.querySelectorAll(".card-style");
        all_divs.remove();
    }
});

$show_all.addEventListener('click', function(){

    const tarjetas = document.querySelectorAll(".card-style");

    tarjetas.forEach(card => {
        card.style.display = "block";
    });

});

$fav_all.addEventListener('click', function (){

    const tarjetas = document.querySelectorAll(".card-style");

    tarjetas.forEach(card => {

        const botonFav = card.querySelector(".favorito-style");

        if(botonFav.classList.contains('imagenes-fav')){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});


$no_fav_all.addEventListener('click', function (){

    const tarjetas = document.querySelectorAll(".card-style");

    tarjetas.forEach(card => {

        const botonFav = card.querySelector(".favorito-style");

        if(!botonFav.classList.contains('imagenes-fav')){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});