package org.generation.employee.manager;

import org.generation.employee.Employee;

/*
 * La clase Manager sirve como subclase (clase hija), por lo tanto, debe extender (heredar) desde la superclase (clase Employee) para poder acceder a los atributos y métodos de la superclase 
 */

public class Manager extends Employee{
	//1.- Atributos
	private int antiguedad;
	private double incremento;
	
	
	//2.- Constructor 
	//NOTA:No podemos definir el incremento, porque no conocemos cual es el incremento de cada obj es decir, cada obj tendra su incremento con base en un metodo llamado calcularIncremetno();
	public Manager(String nombreCompleto, int id, double salario, String puesto, int antiguedad) {
		super(nombreCompleto, id, salario, puesto);
		this.antiguedad = antiguedad;
	}
	
	//3.- Get an Set
	public int getAntiguedad() {
		return antiguedad;
	}

	public void setAntiguedad(int antiguedad) {
		this.antiguedad = antiguedad;
	}

	public double getIncremento() {
		return incremento;
	}

	public void setIncremento(double incremento) {
		this.incremento = incremento;
	}

	public double getSalarioBase() {
		return salarioBase;
	}

	public void setSalarioBase(double salarioBase) {
		this.salarioBase = salarioBase;
	}
		

	//4.- Metodos del Usuario
	public void orgReunion() {
		System.out.println("El manager" + this.getNombreCompleto()+ " convoca a una reunion");
	}
	
	//Invovar el metodo de la super clase que guarda el salario en cualquier Employee
	double salarioBase = super.getSalario();
	
	//Overriding (anulación de métodos)
	/* 
	 * En la empresa los Managers reciben un incremento salarial de $1000 al cumplir su primer año de antigüedad.
	 * Después de recibir su primer incremento, cada año reciben un incremento de $500
	 */
	
	
	/*
	 * Verificar la antiguedad. Si es mayor o igual a 1 es true, si no, es false
	 * Crear método para verificar la antigüedad y calcular el incremento salarial 
	 */
	public void calcularIncremento() {
		if (this.antiguedad >= 1) {
			//Operación matemática para determinar el incremento con base en la antigüedad
			double incrementoTotal = 1000 + (this.antiguedad - 1) * 500;
			this.setIncremento(incrementoTotal);
		} else {
			this.setIncremento(0);
			System.out.println("No hay incremento");
		}
	}
	//Metodo para caldular el salario con incremento(Siempre que se cumpla la condicion)
	public void calcularSalario() {
		//llamamos el calculo de calcularIncremento()
		calcularIncremento();
		
		double salarioManager = salarioBase +this.getIncremento();//
		
		this.setSalario(salarioManager);
		
		System.out.println("El salario del MAnager "+this.getNombreCompleto()+ "es de $"+salarioManager);
	}

	
	
	//5.toString. 
	//Para generar el toString y mandar a llamar los atributos de la superclase, debo seleccionar los getters de los atributos heredados. Después, puedo modificar el return según mi conveniencia
	@Override
	public String toString() {
		return "Manager [antiguedad=" + antiguedad + ", incremento=" + incremento + ", nombre="
				+ getNombreCompleto() + ", id=" + getId() + ", salario=" + getSalario() + ", puesto="
				+ getPuesto() + "]";
	}
	
}
