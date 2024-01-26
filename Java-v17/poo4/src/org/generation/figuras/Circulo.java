package org.generation.figuras;

/******* Clase Circulo *******/
public class Circulo extends Figura {
	//Atributos que se define para un Circulo
	private double radio;

	//Constructor
	public Circulo(double radio) {
		super();
		this.radio = radio;
	}
	
	//Implementando el metodo abstracto de Figura.
	@Override
	public double calcularArea() {
		return Math.PI * radio * radio;
	}
}