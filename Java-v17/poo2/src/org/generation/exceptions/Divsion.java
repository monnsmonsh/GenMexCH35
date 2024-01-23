package org.generation.exceptions;

public class Divsion {
	//Metodo para dividir
	public static int dividir(int num1, int num2){
		return  num1/num2;
	}
	public static void main(String[] args) {
		/*
		 *La clase Exception nos permite cualquier caso expecional con nuestro codigo, es el equivalente a los errores.
		 *Utilza una estructura de control try-catch permite manejar las expeciiones
		 * -> try: envuelve el codigo que se puede generar una expecioon y lo evalua
		 * -> catch: contiene el codigo que se ejecuta cuando se lanza la expecion
		 * 	Sintaxis
		 * 		try{
		 * 			//Codigo protegido
		 * 		}catch(Expecioname e){
		 * 			//Bloque de excepcion
		 * 		}
		 * ->Finally simepre se ejecuta, y se utiliza para mostrar un mensaje de ser invocado. Podermos precinder de finally
		 * 
		 * 
		 */
		
		
		//Excepcion que arroja si un numero se divide entre 0
		
		try {
			int resultado = dividir(10,2);
			System.out.println("El resultado de la division es: " +resultado);
		}catch(ArithmeticException e) {
			System.out.println("\u001B[31mError: no puedes dividir entre 0\u001B[31m");
			//System.out.println("Erro no puedes dividir entre 0");
		}finally {
			System.out.println("\u001B[32mPrograma finalizado\u001B[0m");
			//System.out.println("Programa finalizado");
		}
		
	}
}
