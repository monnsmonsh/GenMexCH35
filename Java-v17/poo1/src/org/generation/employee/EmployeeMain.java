package org.generation.employee;

public class EmployeeMain {
	public static void main(String[] args) {
		//Instaciar los obj
		Employee Daniel = new Employee("Daniel", "Maladonado", 7836, 8596.75, "Instructor");
		Employee Abigail = new Employee("Abigail", "Martinez", 5274, 19754.20, "DevFront");
		Employee Arturo = new Employee("Arturo", "Avila", 4403, 17999.65, "DevBack");
		
		System.out.println(Daniel);
		System.out.println(Abigail);
		System.out.println(Arturo);
		
		//
		Daniel.infoGeneral();
		Arturo.calcularSalario();
		Abigail.capacitarse();
		
		//
		System.out.println(Daniel.getNombre()+" "+Daniel.getApellido()+" ocupa el puesto "+Daniel.getPuesto());
		System.out.println(Abigail.getPuesto()+" gana $"+Abigail.getSalario()+" pesos");
		
		
		//Actualizar inf
		Arturo.setSalario(24598.11);
		Arturo.calcularSalario();
	}

}
