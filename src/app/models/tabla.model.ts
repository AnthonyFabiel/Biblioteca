export class Producto{
    id:string
    nombre:string
    precio:string
    envio:string
    subtotal:number
    impuesto:number
    totalNeto:number 

    

    constructor(id2:string, nombre2:string, precio2:string,envio2:string,subtotal2:number,impuesto2:number, totalNeto2:number){
    this.id= id2;
    this.nombre=nombre2; 
    this.precio= precio2;
    this.envio= envio2;
    this.subtotal= subtotal2;
    this.impuesto= impuesto2;
    this.totalNeto= totalNeto2;

    }
}