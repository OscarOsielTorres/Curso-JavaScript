// CREANDO EL CONSTRUCTOR PARA AGREGAR PRODUCTO
class Producto {
    constructor(id, nombre, precio, depto, img) {
        this.id = parseFloat(id);
        this.nombre  = nombre.toUpperCase();
        this.precio  = Number(precio);
        this.depto = depto.toUpperCase(); 
        this.imagen = img}
}

//Declaramos un array de productos para almacenar objetos
const inventarioProductos = [];


// Agregamos PRODUCTO  al array  de objetos de inventarioProductos
inventarioProductos.push(new Producto("1", "Sabritas", "125", "botana", "img:'./Papas.jpg'"));
inventarioProductos.push(new Producto("2", "CocaCola", "70", "bebidas" ));
inventarioProductos.push(new Producto("3", "Cerveza", "50", "bebidas"));
inventarioProductos.push(new Producto("4", "Doritos", "120", "botana"));
inventarioProductos.push(new Producto("5", "M&M", "100", "dulces"));
inventarioProductos.push(new Producto("6", "Gomitas", "55", "dulces"));
inventarioProductos.push(new Producto("7", "Leche", "85", "bebida"));
inventarioProductos.push(new Producto("8", "Agua", "60", "bebida"));

