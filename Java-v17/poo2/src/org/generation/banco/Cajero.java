package org.generation.banco;

/*
 *En Cajero se instancia el obj del tipo CuentaBancaria
 *Aqui se establece try-catch excepcion
 *Los Resultados se muestran en consola 
 */

public class Cajero {
	public static void main(String[] args) {
		CuentaBancaria cuentaMartin = new CuentaBancaria(6989);//num cuenta
		
		//Simulamos tener un Scaner y el cliente introduce dinero
		System.out.println("Depositando $500");
		cuentaMartin.depositar(500);
		
		//Revisar si se actualiza
		System.out.println("El nuevo saldo es de $"+cuentaMartin.getSaldo());
		
		//
		try {
			//Simulando
			System.out.println("Retirando $300");
			cuentaMartin.retirar(300);
			System.out.println("El nuevo saldo es de $"+cuentaMartin.getSaldo());
			
			System.out.println("Retirando $200");
			cuentaMartin.retirar(200);
			System.out.println("El nuevo saldo es de $"+cuentaMartin.getSaldo());
		
			System.out.println("Retirando $300");
			cuentaMartin.retirar(300);
			
		} catch (FondosInsuficientesException e) {
			System.out.println("\u001B[31mLo siento, te faltan $\u001B[31m" + e.getMonto());
			e.printStackTrace(); //Método de excepciones que imprime el seguimiento del flujo de la excepción
		}
	
	}
	
		
}
