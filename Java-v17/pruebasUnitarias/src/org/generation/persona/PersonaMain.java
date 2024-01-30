package org.generation.persona;


public class PersonaMain {

	public static void main(String[] args) {
		//Instancias los obj
		Persona persona = new Persona("Martin","rodriguez", 15,"gmail.com");
		Persona Martin = new Persona("Martin","rodriguez", 15,"gmail.com");
		
		Martin.edad();
		/*
		System.out.println("El nombre de la persona es "+persona.nombre("Martin ", "Rodriguez"));
		System.out.println("Su edad es de "+persona.edad(28)+" años");
		System.out.println("La direccion de correo electronico es: "+persona.email("ejemplo@gmail.com ")+persona.validarEmail("ejemplo@gmail.com"));
		*/

	}

}
