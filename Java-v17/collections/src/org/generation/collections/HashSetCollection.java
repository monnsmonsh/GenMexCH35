package org.generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		HashSet<String> animals = new HashSet<String>();
		
		animals.add("Buho");
		animals.add("Ornitorrinco");
		animals.add("Capibara");
		animals.add("Mapache");
		animals.add("Hamster");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		
		//imprimir el HashSet
		System.out.println(animals);
		
		//conocer si un elemento se entro dentro del Set: contains();
		System.out.println(animals.contains("Capibara"));
		
		//eliminar un elemento: remove();
		animals.remove("Ornitorrinco");
		System.out.println(animals);//imprimo el set sin el elemento eliminado
		
		//agregando elemento en una sola linea
		animals.addAll(Arrays.asList("ajolore","Tepezcuintle","Oso","Ardilla"));
		System.out.println(animals);
		
		/**
		 * La clase HashSet no va a garantizar que los elementos segun el orden establecido ya que busca eficientizar la busqueda y recuperacion de los elementos.
		 * Utiliza tablas hash para almacenar los elemento y mostrar al usuario
		 */
		
		//Limpiar el HashSet: .clear();
		animals.clear();
		System.out.println(animals);
	}

}
