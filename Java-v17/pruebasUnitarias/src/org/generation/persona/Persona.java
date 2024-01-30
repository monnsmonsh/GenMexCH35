package org.generation.persona;



public class Persona {
	
	private String name;
	private String lastName;
	private int edad;
	private String email;
	

	public Persona(String name, String lastName, int edad, String email) {
		super();
		this.name = name;
		this.lastName = lastName;
		this.edad = edad;
		this.email = email;
	}

	//Get and SeT
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	

	//Crear ub objeto Persona con los atributos: nombre, apellido, email, edad
	/*
	public String nombre (String name, String lastName) {
		return name + lastName;
	}
	
	public int edad (int edad) {
		return edad;
	}
	
	public boolean validarEmail (String email) {
		email = ".*@gmail.com";
		return email.matches(email);
	}
	public String email (String email) {
		return email;
	}
	*/
	
	public String nombre () {
		return name + lastName;
	}
	
	public int edad () {
		return edad;
	}
	
	public boolean validarEmail () {
		email = ".*@gmail.com";
		return email.matches(email);
	}
	public String email () {
		return email;
	}
}
