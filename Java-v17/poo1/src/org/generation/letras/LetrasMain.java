package org.generation.letras;

public class LetrasMain {
	public static void main(String [] args) {
		//Instanciar obj (Letas y Contador)
		Letras letras = new Letras();
		letras.mostrarMensaje("Escribe un tecto y te mostrare en Num. vocal, Num Cons, simbolo y numeros");
		String palabra = letras.leerEntrada();
		
		//Invocar los metodos que permiten contar los caracteres
		Contador contador = new Contador();
		
		int totalVocales = contador.contarVocales(palabra);
		System.out.println("Hay"+totalVocales+" vocales");
	
		int totalNumeros = contador.contarNumeros(palabra);
		System.out.println("Hay"+totalNumeros+" numeros");
		
		int totalConsonantes = contador.contarConsonantes(palabra);
		System.out.println("Hay"+totalConsonantes+" consonantes");
		
		int totalSimbolos = contador.contarSimbolos(palabra);
		System.out.println("Hay"+totalSimbolos+" simbolos");
	}
}
