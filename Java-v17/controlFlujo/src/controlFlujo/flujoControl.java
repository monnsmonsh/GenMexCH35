package controlFlujo;

import java.util.Scanner;

public class flujoControl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		


		//Recuerda que para que algo se ejecute, siiempre debe de ir en el metodo principal
		
		
		//Primero defino una variable del tipo String donde se almacena un dato
		// Dejo en null y despues agrego fecha 
		// Variable declarada e inicializada, en null a proposito, para tener un "espacio" de memoria ya asignado, y solo reemplazarlo con un nuevo dato
		
		//Para validar si podemos viajar en cierta fecha
		
		
		/*
		String viaje = "16-01-2024";
		
		if (viaje != null) { //variable vacia
			System.out.println("Ya no tenemos fechas disponibles, una disculpa.");
			
		} else {
			System.out.println("Puede reservar su viaje");
		}
		*/
		
		/*
		
		//////////////////////////////////
		//Validacion de contraseña
		Scanner scanner = new Scanner(System.in);

        // Solicitar la primera contraseña
        System.out.print("Ingrese la contraseña: ");
        String contraseña1 = scanner.nextLine();

        // Solicitar la segunda contraseña
        System.out.print("Ingrese la contraseña nuevamente: ");
        String contraseña2 = scanner.nextLine();

        // Verificar si las contraseñas coinciden
        if (contraseña1.equals(contraseña2)) {
            System.out.println("Las contraseñas coinciden. Acceso permitido.");
        } else {
            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
        }

        // Cerrar el scanner
        scanner.close();
		*/

        ////////////////
        //
        
        //
       
        
        //
		
        System.out.println("Bienvenido a la dulceria");
        System.out.println("------------------------");
        System.out.println("¿que desea ordenar");
        System.out.println("1. Palomitas");
        System.out.println("2. Refrescos");
        System.out.println("3. Nachos");
        System.out.println("4. HotDog");
        System.out.println("4. Pagar");
        
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        
        switch (num) {
        case 1:
        	System.out.println("Usted ha agregado palomitas a su combo");
        	break;
        case 2:
        	System.out.println("Usted ha agregado refresco a su combo");
        	break;
        case 3:
        	System.out.println("Usted ha agregado Nachos a su combo");
        	break;
        case 4:
        	System.out.println("Usted ha seleccionado pagar su combo");
        default:
        	System.out.println("Por el momento no contamos con esa opcion");
        	break;
        }
        
				
				
	}
}
