<script> 
var img = {src:"https://raw.githubusercontent.com/DIEGODOPAZO/Trabajo-TIC-II/gh-pages/imagenes/monkeyDluffy.jpg", id:"imagen1"};

function cambiar(imagen) {
    if(img.src=="https://raw.githubusercontent.com/DIEGODOPAZO/Trabajo-TIC-II/gh-pages/imagenes/monkeyDluffy.jpg" && img.id=="imagen1"){
        img.src=imagen.src;
        img.id=imagen.id;
    }
    else{ 
        var aux = imagen.src;

        document.getElementById(imagen.id).src = img.src;
        document.getElementById(img.id).src = aux;

        img.src = "https://raw.githubusercontent.com/DIEGODOPAZO/Trabajo-TIC-II/gh-pages/imagenes/zoro.jpg"; img.id="imagen2";
    }
} 
</script>

