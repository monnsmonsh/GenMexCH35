package org.generation.letras;

import java.util.Scanner;

public class Letras {
	/*
	 * */
	
	//
	Scanner scanner = new Scanner(System.in);
	
	//
	public String leerEntrada() {
		return scanner.nextLine();
	}
	
	//Metodo para proporcionar contexto al usuario
	public void mostrarMensaje(String mensaje) {
		System.out.println(mensaje);
	}
}