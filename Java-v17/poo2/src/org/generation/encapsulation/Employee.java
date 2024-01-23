package org.generation.encapsulation;

public class Employee {
	//1. Encapsular Atributos 
	protected String nombre;
	protected String apellido;
	private int id;
	private double salario;
	private String puesto;
		
	//2.Encapsular el Metodo constructor de tipo publico
	public Employee(String nombre, String apellido, int id, double salario, String puesto){
		this.nombre = nombre;
		this.apellido = apellido;
		this.id = id;
		this.salario = salario;
		this.puesto = puesto;
	}
		
	//3.-Encapsular Metodos de comportamiento de tipo publix
	public void trabajar() {
		System.out.println("Estoy trabajando");
		
	}
		
	public void calcularSalario() {
		System.out.println("El salario del empleado es de "+ this.salario + "pesos");
	}
		
	public void capacitarse() {
		System.out.println("El trabajador del puesto "+ this.puesto + "se capacita");
	}
	
	public void infoGeneral() {
		System.out.println("Id: "+ this.id + " Nombre: " + this.nombre+" Apellido: "+ this.apellido);
	}
		
		//4. Getters y Setters. Son métodos que nos permiten obtener o enviar información que está protegida por modificadores de acceso y de esta manera interactuar con nuestros objetos. Los getters nos permiten obtener la info y los setters nos permiten enviar la info.
		/*
		 * Estructura de Getter:
		 * 		public tipoDato getNombreVariable () {
		 * 			return nombreVariable;
		 * 		}
		 * 		p.e.
		 * 			public String getNombre () {
		 * 				return nombre;	
		 * 			}
		 * Estructura de Setter:
		 * 		public void setNombreVariable (variable) {
		 * 			this.variable = variable;
		 * 		}
		 * 		p.e.
		 * 			public void setNombre (String nombre) {
		 * 				this.nombre = nombre;	
		 * 			}
		 * Podemos inicializar Getters y Setter dando click derecho > Source > Generate Getters y Setters > Select All > Generate
		 */

		public String getNombre() {
			return nombre;
		}

		public void setNombre(String nombre) {
			this.nombre = nombre;
		}

		public String getApellido() {
			return apellido;
		}

		public void setApellido(String apellido) {
			this.apellido = apellido;
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
		
		//5. Método toString. Es un "Override" que se refiere a la capacidad de proporcionar información específica de una clase en forma de cadena de caracteres. Nos permite imprimir nuestros objetos en formato String.
		//Podemos inicializar toString dar click derecho > Source > Generate toString > Fields > Generate
		//-> https://es.stackoverflow.com/questions/156432/para-que-sirve-la-l%C3%ADnea-override-en-java
		//----- @Override
		
		public String tostring() {
			return "Employee [nombre="+nombre+
					"apellido = "+apellido+
					"id = "+id+
					"Salario = " +salario+
					"Puesto = "+puesto+
					"]";
					
					
		}
		
		
		
		

}
