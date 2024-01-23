package org.generation.overloading;

import java.math.BigDecimal;

public class SumaMain {
	public static void main(String[]args) {
		//
		int suma1 =Suma.sumar(8, 5);
		double suma2 = Suma.sumar(4.3, 6.26);
		
		//Para BigDecimal
		BigDecimal num1 =new BigDecimal("4.3");//Primer objeto instanciado
		BigDecimal num2 =new BigDecimal("6.26");//Primer objeto instanciado
		//Mando a llamar los obj intanciados de BigDecial como los parametros del metetodo
		BigDecimal suma3 = Suma.sumar(num1, num2);
		
		System.out.println("La suma de enteros ne da "+suma1);
		System.out.println("La suma de decimales ne da "+suma2);
		System.out.println("El resultado exacto de la suma de decimales es: "+suma3);
	}
}
