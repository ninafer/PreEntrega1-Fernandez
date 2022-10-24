

function cantidadArticulos (){
    let cantidad = parseInt (prompt("Que cantidad desea comprar?"));
    while (isNaN(cantidad)){
        cantidad = prompt("Por favor ingrese un numero");
    }
    return cantidad;
}
function menu (articulo, cantidad){
    if (isNaN(articulo)) {
        switch (articulo) {
            case "collar":
                alert(" El precio del Collar es " + cantidad * 500);
                break;
            case "pulsera":
                alert(" El precio de la Pulsera es " + cantidad * 300);
                break;
            case "anillo":
                alert(" El precio del Anillo es " +  cantidad * 200);
                break;
            default:
                alert("Articulo no encontrado");
                break;
        }
    }
}

let articulo = prompt("Indique que articulo desea consultar").toLowerCase();
let cantidad = cantidadArticulos ();
menu (articulo, cantidad);
alert ("Gracias por visitarnos!");

