package org.generation.collections;

import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {

	public static void main(String[] args) {
		// El metodo .sort permite ordenar los elementos de un ArrayList
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();

		points.add(5);
		points.add(7);
		points.add(8);
		points.add(6);
		points.add(9);
		points.add(7);
		
		System.out.println(points);//solo se muestra como se agregaron
		
		//Ordenamiento de menor a mayor utilizando sort
		Collections.sort(points);
		System.out.println(points);//ordenandos de mayor a menor
		
		names.add("Daniel");
		names.add("Maara");
		names.add("Angel");
		names.add("eveida");
		names.add("arturo");
		
		System.out.println(names);
		//ordenamiento de menor a mayor
		Collections.sort(names);
		System.out.print(names);//tomo en cuenta el ordenamiento ASCII
	}

}
