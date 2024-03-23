//POR FAVOR LEER EL READ.ME

//Variables:

let continuar = true;

//Clases:

class cuenta{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
};

class gasto{
    constructor(importeGasto,descGasto){
        this.importeGasto = importeGasto;
        this.descGasto = descGasto;
    }
};

class ingreso{
    constructor(importeIng,descIng){
        this.importeIng = importeIng;
        this.descIng = descIng;
    }
};

//ARRAYS:

let cuentas = [
    cuentaPrincipal = new cuenta("Principal",0.0),
    cuentaEfectivo = new cuenta("Efectivo",0.0),
    cuentaBanco = new cuenta("Banco",0.0),
];

let gastos = [];

let ingresos = [];

//FUNCIONES



function gastar(){
    let indice = parseInt(prompt(`Ingrese a que cuenta desea enviar el gasto: 1) ${cuentas[0].nombre} 2) ${cuentas[1].nombre} 3) ${cuentas[2].nombre}`));
    if(indice==1){
        let importe = parseFloat(prompt(`Ingrese el valor del gasto: `));
        let desc = prompt(`Ingrese la descripcion del gasto: `);
        let gastoP = new gasto(importe,desc);
        gastos.push(importe,desc);
        cuentas[0].saldo = cuentas[0].saldo - gastoP.importeGasto;
        return cuentas[0].saldo;
    }
    else if(indice==2){
        let importe = parseFloat(prompt(`Ingrese el valor del gasto: `));
        let desc = prompt(`Ingrese la descripcion del gasto: `);
        let gastoP = new gasto(importe,desc);
        gastos.push(importe,desc);
        cuentas[1].saldo = cuentas[1].saldo - gastoP.importeGasto;
        return cuentas[1].saldo
    }
    else if(indice==3){
        let importe = parseFloat(prompt(`Ingrese el valor del gasto: `));
        let desc = prompt(`Ingrese la descripcion del gasto: `);
        let gastoP = new gasto(importe,desc);
        gastos.push(importe,desc);
            cuentas[2].saldo = cuentas[2].saldo - gastoP.importeGasto;
            return cuentas[2].saldo
    }
    else{  
        alert(`Ingrese un valor valido`)
    }
};

function ingresar(){
    let indice = parseInt(prompt(`Ingrese a que cuenta desea enviar el ingreso: 1) ${cuentas[0].nombre} 2) ${cuentas[1].nombre} 3) ${cuentas[2].nombre}`));
    if(indice==1){
        let importe = parseFloat(prompt(`Ingrese el valor del ingreso: `));
        let desc = prompt(`Ingrese la descripcion del gasto: `);
        let ingP = new gasto(importe,desc);
        ingresos.push(importe,desc);
        cuentas[0].saldo = cuentas[0].saldo + ingP.importeGasto;
        return cuentas[0].saldo
    }
    else if(indice==2){
        let importe = parseFloat(prompt(`Ingrese el valor del ingreso: `));
        let desc = prompt(`Ingrese la descripcion del gasto: `);
        let ingP = new gasto(importe,desc);
        ingresos.push(importe,desc);
        cuentas[1].saldo = cuentas[1].saldo + ingP.importeGasto;
        return cuentas[1].saldo
    }
    else if(indice==3){
        let importe = parseFloat(prompt(`Ingrese el valor del ingreso: `));
        let desc = prompt(`Ingrese la descripcion del gasto: `);
        let ingP = new gasto(importe,desc);
        ingresos.push(importe,desc);
            cuentas[2].saldo = cuentas[2].saldo + ingP.importeGasto;
            return cuentas[2].saldo
    }
    else{
        alert(`Ingrese un valor valido`)
    }
};

function mostrarCuenta(){
    let indice = parseInt(prompt(`Ingrese la cuenta a mostrar: 1) ${cuentas[0].nombre} 2) " ${cuentas[1].nombre} 3) ${cuentas[2].nombre}`));
    if(indice==1){
        alert(`El saldo en la cuenta ${cuentas[0].nombre} es de ${cuentas[0].saldo}`);
    }
    else if(indice==2){
        alert(`El saldo en la cuenta ${cuentas[1].nombre} es de ${cuentas[1].saldo}`);
    }
    else if(indice==3){
        alert(`El saldo en la cuenta ${cuentas[2].nombre} es de ${cuentas[2].saldo}`);
    }
    else{
        alert(`Ingrese un valor valido`)
    }
}

function mostrarTodasCuentas(){
    cuentas.forEach((item) => alert(`La cuenta ${item.nombre} tiene un saldo de ${item.saldo}`));
}



function comenzar(){
    let opcion = prompt(`Bienvenido/a! Que desea realizar: \n
     A) Registrar gasto \n
     B) Registrar Ingreso \n
     C) Mostrar una cuenta\n
     D) Mostrar todas las cuentas\n
     E) Cancelar\n
     `).toLowerCase();

    switch(opcion){
        case "a":
            gastar();
        break;
        case "b":
            ingresar();
        break;
        case "c":
            mostrarCuenta();
        break;
        case "d":
            mostrarTodasCuentas();
        break;
        case "e":
            alert(`Cancelado`);
        break;
        default:
            alert(`Ingrese una variante valida`);
        }
    }




//INICIA PROGRAMA:

do {
    comenzar();
    let confirmacion = confirm(`¿Desea continuar?`);
    if (!confirmacion) {
        continuar = false;
    }
} while (continuar);   
mostrarTodasCuentas();











