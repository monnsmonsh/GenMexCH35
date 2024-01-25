package org.generation.employee.manager;

public class ManagerMain {
	public static void main(String[] args) {
		Manager Fernanda = new Manager("Fernanda Ramos", 136, 45365.28d, "Manager",2);
		System.out.println(Fernanda);
		
		//Metdo calcular salario
		//Fernanda.calcularSalario();
		
		double salarioFer = Fernanda.getSalarioBase();
		System.out.println("El salario de " +Fernanda.getNombreCompleto()+" con puesto "+ Fernanda.getPuesto()+" con atiguedad de "+Fernanda.getAntiguedad()+" años tiene un salario de "+ salarioFer);
	}
	
}
