//Escribir clases 

class Tarea {
    constructor(){
            this.nombre=nombre;
            this.prioridad=prioridad 
    }  
    mostrar(){
       return`${this.nombre}tiene una prioridad de ${this.prioridad}`   ;
    }   
 
 }
 
 
 //crear objetos 
 
 let tarea1=new Tarea('Aprender JavaScript','Alta ');
 let tarea2=new Tarea('Preparar cafe ','Alta ');
 let tarea3=new Tarea('Pasear al perro','Media ');
 let tarea4=new Tarea('Conocer a mis suegros','Baja');
 
 console.log(tarea1.mostrar());
 console.log(tarea2.mostrar());
 console.log(tarea3.mostrar());
 console.log(tarea4.mostrar());
 