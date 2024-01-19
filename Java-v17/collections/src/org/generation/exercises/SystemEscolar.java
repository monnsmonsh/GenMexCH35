package org.generation.exercises;

import java.util.ArrayList;
import java.util.Scanner;

/*
 * Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados.
 * -- Requerimientos:
 * 		> Utilizar ArrayList para guardar a los estudiantes
 * 		> Scanner para interactuar con el usuario y permitir que agregue estudiantes
 * 		> Loop para permitir que se agreguen varios estudiantes (do-while)
 * 		> Opción para salir del loop con la palabra 'Salir' (if-else, try-catch, !=, switch son posibles opciones)
 * 		> Mostrar lista de estudiantes (for-each) 
 */
public class SystemEscolar {

	public static void main(String[] args) {
		
		//Inicializar un ArrayList para guardar a los estudiantes
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		//Scaner para el usuario
		Scanner scanner = new Scanner(System.in);
		
		//Loop para permitir agregar usuarios
		String nombreEstudiante;//incializando de manera global
		String delate;
		do {
			System.out.println("Ingresa el nombre del estudiante.");
			System.out.println("Escribe 'Salir' para finalizar");
			nombreEstudiante = scanner.nextLine();//Invocando de manera local
			estudiantes.add(nombreEstudiante);
			
			if(!nombreEstudiante.equals("Salir") && !nombreEstudiante.equals("salir")) {
				//
				System.out.println("Deseas eliminar el ultimo estudiente Y/N");
				delate = scanner.nextLine();
				if (!delate.equals("Y") && !delate.equals("y")) {
					estudiantes.remove(estudiantes.size()-1);
				}
				//
			}
			
			
		
		}while(!nombreEstudiante.equals("Salir") && !nombreEstudiante.equals("salir")  );//Siempre que NO se escriba "Salir", el loop se sigue ejecutnado
		
		//Mostrar Lista de estudiantes
		System.out.println("** Lista de Estudiantes**");
		for (String estudiante : estudiantes) {
			
			//Si no quiero que se muestre la palabra 'Salir voy agregar una condicial
			if(!estudiante.equals("Salir")&& !estudiante.equals("salir")) {
				System.out.println(estudiante);
			}
			
		}
		
		
		scanner.close();
		
		/*
		 * Modificar nuestro programa para permitir salir con las palabras 'Salir' o 'salir'.
		 * Agreguar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación (.remove();).
		 * */
	}

}
