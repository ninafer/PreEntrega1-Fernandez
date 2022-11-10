const BBDD = [];
BBDD.push(collar,anillo,aro,pulsera);
console.log(BBDD);

const carrito = [];


function enterInt(mensaje) {
    let ingreso;
    do {
        ingreso = parseInt(prompt(mensaje));
    } while (isNaN(ingreso));
    return ingreso;
}

function cantidadArticulos (){
    let cantidad = parseInt (prompt("Que cantidad desea comprar?"));
    while (isNaN(cantidad)){
        cantidad = prompt("Por favor ingrese un numero");
    }
    return cantidad;
}

let barticulo = false;
let articulos = "";

while (!barticulo){
    articulos = prompt("Indique que articulo desea consultar").toLowerCase();

    if (BBDD.find(validarArticulo) && isNaN(articulos)){
        barticulo = true;
    }
}

function validarArticulo(art){
    if(art.tipo === articulos){
        return true;
    }
}

let cantidad = cantidadArticulos ();
menu (articulos, cantidad);

function menu (articulos, cantidad){
        switch (articulos) {
            case "collar":
                alert(" El precio del Collar es " + cantidad * collar.precio);
                break;
            case "pulsera":
                alert(" El precio de la Pulsera es " + cantidad * pulsera.precio);
                break;
            case "anillo":
                alert(" El precio del Anillo es " +  cantidad * anillo.precio);
                break;
            case "aro":
                    alert(" El precio del Aro es " +  cantidad * aro.precio);
                    break;
            default:
                alert("Articulo no encontrado");
                break;
        }
    }


let agregarProducto = enterInt ("Ingrese la opcion deseada: \n1-Agregar al carrito\n 2-Salir");
if (agregarProducto == 1 ) { 
    alert ("Producto agregado, garcias por su compra!")
    carrito.push(articulos)
}else if(agregarProducto == 2){
    alert ("Gracias por visitarnos!");

}else{ alert("Opcion incorrecta");
}

carrito.forEach((articulos) => 
console.log(articulos));    


