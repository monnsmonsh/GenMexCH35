package org.generation.collections;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {

	public static void main(String[] args) {
		//************Arrays**********//
		String[] names = {"Eunice", "Rey","Gonzalo","Ana","Ximena","Ania", "Eveida","Paulina","Marco","Carlos"};
		//Imprimiendo Arrays
		System.out.println(Arrays.toString(names));
		
		int[] edades = {23, 35, 27, 18, 27, 23, 22, 25};
		System.out.println(Arrays.toString(edades));
		
		//Acceder a cada elemento del Array
		String name1 = names[0];
		System.out.println("El primer nombre de la lsita es: "+name1);
		int edad1 = edades[7];
		System.out.println("La edad de "+name1+" es de "+edad1+" años");
		
		//Obtner la longitud del Array
		int longitudName = names.length;
		System.out.println("El array names tiene "+longitudName+" elementos");
		
		//Obtener el ultimo elemento
		//String ultimoElemento = names[longitudName - 1];//la longitud ya vive en la varieable 'longitudNames'
		String ultimoElemento = names[names.length - 1];//la longitud no vive en una variable
		System.out.println("El ultimo elemento del Array name es " +ultimoElemento);
		
		//Mostrar cada elemento utilizando forEach
		for(String nombre : names) {
			System.out.println(nombre);
		}
		
		
		//*******   AraysList   *********//
		//ArrayList es un array que puede cambiar de tamaño. es la clase de Java que representa la estructura de Arrays. permite elementos duplicados y recibe varios metodos para su manipulacion
		ArrayList<String> films = new ArrayList<String>();
		ArrayList<Integer> matricula = new ArrayList<>(); //Wrapper class
		ArrayList<Character> character = new ArrayList<>();
		
		//Agregar elementos
		films.add("Inception");
		films.add("Mr. Nobody");
		films.add("Donnie darko");
		films.add("The buterfly effect");
		films.add("The fountain");
		films.add("Requiem");
		
		System.out.println(films);
		
		//obtener un elemetno: name.get(index);
		String film1 = films.get(0);
		System.out.println("La primer pelicula es "+film1);
		
		//Modificar un elemento: name.set(index, newValue)
		String film3 = films.set(3, "Memento");
		String film3get = films.get(3);
		System.out.println(film3get);
		
		//Conocer el tamaño del ArrayList: name.size();
		int sizeFilms = films.size();
		System.out.println("El tamaño del ArrayList es de "+sizeFilms+" elementos");
		
		//Agregar un elemento y depues eliminarlo
		films.add("The fountain");
		System.out.println(films);
		
		films.remove(6);
		System.out.println(films);
		
		//Mostrando los elementos de ArrayList en Lista
		System.out.print("****Films en lista****");
		for (String film : films) {
			System.out.println(film);
		}
		
		//Agregar elementos
		matricula.add(1900025);
		matricula.add(1214100435);
		
	}

}
