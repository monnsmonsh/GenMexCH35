package org.generation.calculadora;

public class CalculadoraMain {

	public static void main(String[] args) {
		//instanciamos
		Calculadora calculadora = new Calculadora();

		//Metodo
		System.out.println("El resultado de la suma "+calculadora.sumar(5, 8));
		System.out.println("El resultado de la resta "+calculadora.resta(5, 8));
		System.out.println("El resultado de la multiplicacion "+calculadora.multiplicacion(5, 8));
		System.out.println("El resultado de la division "+calculadora.division(5, 8));
	}

}
