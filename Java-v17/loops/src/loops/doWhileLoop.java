package loops;

import java.util.Scanner;

public class doWhileLoop {
	public static void main(String[] args) {
		
		
		int cuenta = 5;
		do {
			System.out.println(cuenta);
			cuenta++;
		}while(cuenta <0);//Output 1 ya se ejecuto al menos 1 vez
	
		/*
		 * Crear un programa para un cajero bancario
		 * - El programa me mostrará 4 opciones:
		 * 1. Consultar saldo
		 * 2. Ingresar dineros
		 * 3. Retirar dineros
		 * 4. Salir
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 */
		
		/*
		System.out.println("Bienvenido Ghotam Bank");

		System.out.println("1. Consultar Saldo");
		System.out.println("2. Ingresar Dinero");
		System.out.println("3. Retirar Dinero");
		System.out.println("4. Salir");
		
		Scanner src = new Scanner(System.in);
		int opcion;
		do {
			opcion = src.nextInt();
			switch(opcion) {
			case 1: System.out.println("saldo");
				break;
			case 2: System.out.println("Ingresar Dinero");
				break;
			case 3: System.out.println("Retirar Dinero");
				break;
			case 4: System.out.println("salir");
				break;
			default:
				System.out.println("Opcion incorrecta elije una correcta");
				break;
			}
			
		}while(opcion !=4);
		src.close();
		*/
		
		
		Scanner scanner = new Scanner(System.in);
		//Código del cajero:

		boolean repetir = true; //Es la condición que me permite ejecuar mi ciclo do-while siempre que sea "verdadera"
				int opcion = 1;	//Es el valor que me permite elegir una opción del switch 
				int dinero = 0; //Es la variable que me permite almacenar el saldo del cliente en mi programa
				int añadir = 0; //Es la variable que me permite añadir otra cantidad al saldo
				int retirar = 0;//Es la variable que me permite retirar otra cantidad al saldo
				
				do {
					//Menú de opciones 
					System.out.println("Bienvenido al cajero automático. Seleccione una opción");
					System.out.println("1. Consultar saldo ");
					System.out.println("2. Ingresar dinero");
					System.out.println("3. Retirar dinero");
					System.out.println("4. Salir");
					
					opcion=scanner.nextInt();//permite reasignar el valor de "opcion" por el nuevo valor ingresado a traves del scanner
					
					System.out.println("Usted eligió la opción "+ opcion);//Imprime la opción que eligió
					
					switch(opcion) { //El switch me permite ejecutar un bloque de código especifíco según la opción elegida (opcion)
					case 1://Si la opción es 1
						System.out.println("Su saldo es "+ dinero);//Muestra el saldo
						break;
					case 2://Si la opción es 2
						System.out.println("Ingrese el monto por añadir");
							añadir=scanner.nextInt();//permite añadir saldo a traves del scanner y lo reescribe en la variable "añadir"
							dinero+=añadir; //suma la nueva cantidad al saldo guardado en la variable "dinero"
						break;
					case 3://Si la opción es 3
						System.out.println("Ingrese el monto a retirar ");
						retirar=scanner.nextInt();//permite retirar dinero a traves del scanner y reescribe el monto a retirar en la variable "retirar"
						if (dinero>=retirar) {//evalua si el monto a retirar es menor o igual a slado disponlible
							dinero-=retirar;//si es asì, resta la cantidad al saldo guardado en la variable "dinero"
						}else {
							System.out.println("Saldo insuficiente");
						}
						break;
					case 4://Si la opción es 4
						repetir = false;//reescribe el valor de repetir a false.
						break;
					
					}
					
					System.out.println("¿Desea elegir otra opción? (true/false) ");//permite al usuario elegir repetir el ciclo decidiendo entre true o false
					repetir=scanner.nextBoolean();//reasigna el valor de la variable repetir segun lo ingresado por el usuario a traves de scanner.
					
				}while(repetir); //se ejecuta el codigo siempre que repetir igual a true;
		
	}
	
}
