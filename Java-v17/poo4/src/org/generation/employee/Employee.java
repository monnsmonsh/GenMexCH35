package org.generation.employee;

/*
 * Abstracción. Permite identificar aspectos esenciales de un objeto y ocultar los detalles irrelevantes o complejos.
 * Permite que los métodos tomen diferentes formas al ser heredadas, usando una plantilla base.
 * Interface es una tipo de "clase" que define un conjunto de métodos que pueden ser implementados por diversas clases 
 * 
 */
public class Employee implements Trabajador{
	private String nombreCompleto;
	private int id;
	private double salario;
	private String puesto;
	
	public Employee(String nombreCompleto, int id, double salario, String puesto) {
		super();//no afecta
		this.nombreCompleto = nombreCompleto;
		this.id = id;
		this.salario = salario;
		this.puesto = puesto;
	}
	
	//Utlizando la anotacion "override indicamos que el metodo se puede sobreescribir al se extendido en otras sub clases
	public void trabajar() {
		System.out.println("Trabajando");
	}
	
	public void calSalario() {
		System.out.println("El salario de "+this.nombreCompleto+" base es de: $"+this.salario);
	}
	
	public void capacitarse() {
		System.out.println("El trabajador  "+this.nombreCompleto+" tiene el puesto "+this.salario);
	}
	public void infGen() {
		System.out.println("id:"+this.id+" Nombre: "+this.nombreCompleto + " puesto: "+this.puesto);
	}
	
	
	//
	////Get and Set
	public String getNombreCompleto() {
		return nombreCompleto;
	}

	public void setNombreCompleto(String nombreCompleto) {
		this.nombreCompleto = nombreCompleto;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}

	@Override
	public String toString() {
		return "Employee [nombreCompleto=" + nombreCompleto + ", id=" + id + ", salario=" + salario + ", puesto="
				+ puesto + "]";
	}
	
	
	
}
