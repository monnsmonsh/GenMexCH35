package org.generation.figuras;

/******* Clase Rectangulo *******/
public class Rectangulo extends Figura{
	//Atributos que se define para Rectangulo
	private double base;
	private double altura;
	
	//Constructor
	public Rectangulo(double base, double altura) {

		this.base = base;
		this.altura = altura;
	}
	
	//Implementando el metodo abstracto de Figura.
	@Override
	public double calcularArea() {
		return base * altura;
	}
	
	
	//Instanciando un objeto de tipo Rectangulo
	public static void main(String[] args) {
		Rectangulo rectangulo = new Rectangulo(5, 3);
		System.out.println("El área del rectángulo es " + rectangulo.calcularArea() + " metros cuadrados");
		
		rectangulo.infoFigura();
	}
}