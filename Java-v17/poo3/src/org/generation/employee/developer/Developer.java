package org.generation.employee.developer;

import org.generation.employee.Employee;

public class Developer extends Employee{

	public String lenguajeProgramacion;

	public Developer(String nombreCompleto, int id, double salario, String puesto, String lenguajeProgramacion) {
		super(nombreCompleto, id, salario, puesto);
		this.lenguajeProgramacion = lenguajeProgramacion;
	}

	//get set
	public String getLenguajeProgramacion() {
		return lenguajeProgramacion;
	}

	public void setLenguajeProgramacion(String lenguajeProgramacion) {
		this.lenguajeProgramacion = lenguajeProgramacion;
	}
	
	//Metodo
	public void codear() {
		System.out.println("El programador " + this.getNombreCompleto() + " utiliza " + this.lenguajeProgramacion);
	}

	//toString
	@Override
	public String toString() {
		return "Developer [Id=" + getId() + ", NombreCompleto=" + getNombreCompleto() + ", Puesto=" + getPuesto() + ", Salario="	+ getSalario() + ", lenguajeProgramacion=" + lenguajeProgramacion + "]";
	}
	
	
	
}
