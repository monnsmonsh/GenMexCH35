package org.generation.exercises;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Productos {
	/*
	 * Crear un programa que le permita al usuario agregar un id de producto y el nombre del producto. Mostrar la lista de productos.
	 * */
	public static void main(String[] args) {
		//Inicializar un ArrayList para guardar a los los datos
		Map<String, String> Products = new HashMap<String, String>();
		//Scaner para el usuario
		Scanner scanner = new Scanner(System.in);
		
		//Loop para permitir agregar Producto
		String skudProduct;
		String nameProduct;//incializando de manera global
		String salir;
		System.out.println("---------------------");
		System.out.println("Tiendida 'LA ESQUINA'");
		System.out.println("---------------------");
		do {
			System.out.println("Ingresa el sku del producto.");
			skudProduct = scanner.nextLine();//Invocando de manera local
			System.out.println("Ingresa el nombre del Producto.");
			nameProduct = scanner.nextLine();//Invocando de manera local
			Products.put(skudProduct, nameProduct);
			
			System.out.println("Deseas terminar de registrar productos (Y/N)");
			salir = scanner.nextLine();
			if (salir.equals("Y") && salir.equals("y")) {
				salir ="y";
			}
			//
		
		}while(!salir.equals("y") || !salir.equals("y")  );
	
		for(Map.Entry<String, String> entry: Products.entrySet()) {
			//Mostrar la clave y el valor de manera individual para su manipulacion
			//Si no quiero que se muestre la palabra 'Salir voy agregar una condicial
			if(!skudProduct.equals("Salir")&& !skudProduct.equals("salir")) {
				System.out.println("|SKU| " +entry.getKey()+" |Producto| "+ entry.getValue());
			}
			
		}
		
		scanner.close();
	}
}
