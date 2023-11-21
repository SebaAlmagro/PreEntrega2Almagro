let carrito = [];

function agregarProducto() {
    let producto = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (!isNaN(precio)) {
        carrito.push({ producto, precio });
        console.log(`${producto} agregado al carrito. Precio: $${precio.toFixed(2)}`);
    } else {
        console.log("¡Precio no válido! Por favor, ingrese un número.");
    }
}

function verCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.log("Productos en el carrito:");
        for (let i = 0; i < carrito.length; i++) {
            console.log(`${carrito[i].producto} - $${carrito[i].precio.toFixed(2)}`);
        }
    }
}

function calcularTotal() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total.toFixed(2);
}

function simularCarrito() {
    while (true) {
        let opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Ver carrito\n3. Calcular total\n4. Salir");

        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                verCarrito();
                break;
            case "3":
                console.log(`Total de la compra: $${calcularTotal()}`);
                break;
            case "4":
                console.log("Gracias por utilizar el simulador de carrito de compras. ¡Hasta luego!");
                return;
            default:
                console.log("Opción no válida. Por favor, ingrese una opción correcta.");
        }
    }
}


simularCarrito();

