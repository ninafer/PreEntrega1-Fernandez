class Productos {
    constructor (id, tipo, nombre, precio){
        this.id = id,
        this.tipo = tipo;
        this.nombre = nombre,
        this.precio = precio
    }
}

const collar = new Productos (001,"collar", "Jacinta", 2400);
const anillo = new Productos (002,"anillo", "Amanda", 1300);
const aro = new Productos (003,"aro", "Julieta", 800);
const pulsera = new Productos (004,"pulsera", "Romina", 1700);