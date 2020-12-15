<script> 
var img = {src:"", id:""};

function cambiar(imagen) {
    if(img.src=="" && img.id==""){
        img.src=imagen.src;
        img.id=imagen.id;
    }
    else{ 
        var aux = imagen.src;

        document.getElementById(imagen.id).src = img.src;
        document.getElementById(img.id).src = aux;

        img.src = ""; img.id="";
    }
} 
</script>