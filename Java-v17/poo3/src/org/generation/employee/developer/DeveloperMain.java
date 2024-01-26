package org.generation.employee.developer;

public class DeveloperMain {

	public static void main(String[] args) {
		Developer Baruch = new Developer("Baruch", 418005, 18632, "Programador", "Java");
		
		System.out.println(Baruch);
	
		Baruch.calSalario();//Metodo del super clase
		Baruch.codear();//Metodo de la sub clase
	}

}
