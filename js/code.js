
let misProductos = [];
let productos = document.getElementById('result');

class Producto {
    constructor(codigop, producto, precioC, precioV) {
        this.codigopro = codigop,
        this.producto = producto,
            this.precioC = precioC,
            this.precioV = precioV

    }
}

function guardarP(codigopr,nProducto, pcompra, pventa) {
    const codigoP = document.getElementById(codigopr).value;
    const nomProducto = document.getElementById(nProducto).value;
    const pCompra = document.getElementById(pcompra).value;
    const pVenta = document.getElementById(pventa).value;
    

    let productoC = new Producto(codigoP, nomProducto, pCompra, pVenta);

    misProductos.push(productoC);

    mostrar();

    document.getElementById('a').value = "";
    document.getElementById('b').value = "";
    document.getElementById('c').value = "";
    document.getElementById('d').value = "";
}

function mostrar() {
    productos.innerHTML = "";

    for (let i = 0; i < misProductos.length; i++) {
        let product = misProductos[i];
        productos.innerHTML = productos.innerHTML +
            "<td>" + product.codigopro + "</td>"+
            "<td>" + product.producto + "</td>" +
            "<td>" + "s/." + product.precioC + "</td>" +
            "<td>" + "s/." + product.precioV + "</td>"           

    }
}