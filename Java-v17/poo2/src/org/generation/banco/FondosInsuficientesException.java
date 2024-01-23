package org.generation.banco;

//En esta clase se definen los métodos que arrojan Excepciones, siempre que en la clase Cajero se dispare dicha e 
/*
*	Requerimientos:
*		1. Trabajar bajo el paradigma POO 
* 		2. Indicar que la clase es una Exception mediante herencia (extends)
* 		3. Crear variables y métodos para instanciar objetos
* 		4. Encapsular
*/
public class FondosInsuficientesException extends Exception {
	/*
	 * */
	private static final long serialVersionUID =1L;//No necesario, pero es buena practica asignarla
	//atributos
	private double monto;
	
	//Constructor
	public FondosInsuficientesException(double monto) {
		this.monto = monto;
	}

	//Getter y Setter
	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}
	
}
