package org.generation.iterable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class IterableMain {

	public static void main(String[] args) {
		System.out.println();
		System.out.println("*****--- Iterator ---*****");
		//Podemons Iterrar sobre una coleccion de 3 maneras;
		//1. Interracion mediante ciclo for-each
		List<String> nombres =new ArrayList<String>();
		
		nombres.addAll(Arrays.asList("Braulio", "Fernanda", "Ruben", "Rey"));
		
		for (String nombre :nombres) {
			System.out.println(nombre);
		}
		
		//2. Iterrar mediante iterator
		System.out.println();
		System.out.println("*****--- Iterator ---*****");
		List<String> apellidos =new ArrayList<String>();
		//Utilizamos un nuevo iterador y le vamos a pasar el metodo iterar() a nuestro array
		apellidos.addAll(Arrays.asList("Bravo", "Fernandez", "Rodriguez", "Ramirez"));
		Iterator<String> iterador = apellidos.iterator();	
		
		//
		while(iterador.hasNext()) {
			String elemento = iterador.next();
			System.out.println(elemento);
		}
		
		//2. Mediantre forEach tomada un exprecion Java Lambda como parametro
		System.out.println();
		System.out.println("*****--- Java Lambda ---*****");
		
		List<String> animales =new ArrayList<String>();
		animales.addAll(Arrays.asList("Hamster", "Cuyo", "Perito de la Pradera", "Cacuoa"));
		
		animales.forEach((animal) ->{
			System.out.println(animal);
		});
	}

}
