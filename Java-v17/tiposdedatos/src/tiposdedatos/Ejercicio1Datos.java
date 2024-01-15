package tiposdedatos;

public class Ejercicio1Datos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Hola Mundo");
		
		byte edad =15; // sirve para representar un numero entero 8bits (-128 al 127)
		
		System.out.println("Edad del participante "+edad);
		
		short userNew = 200; // sirve para representar un numero entero 16bits (-23768 al 32767)
		System.out.println("Usuarios nuevos " +userNew);
		
		int numTol = 200; // sirve para representar un numero entero 32bits (-2147483648 al 2147483647)
		System.out.println("Usuarios totales " +numTol);
		
		long userPre = 200; // sirve para representar un numero entero con valores mucho mayore
		System.out.println("Usuarios premium " +userPre);
		
		
		//Tipos de datos con num decimal
		
		float altura = 1.68f;
		System.out.println("Altura del usuario " +altura);
		
		double peso = 91.860;
		System.out.println("Peso del usuario " +peso);
		
		String nameUser = "Monse";
		System.out.println("Usuario " +nameUser);
		
		String zonBoleto= "Zona VIP";
		System.out.println("Zona de preferencia " +zonBoleto);
		
		String costoBoleto = "500";//Es una clase para tener cadenas de texto
		System.out.println("Usuarix "+costoBoleto);
		
		String zonaBoleto = "52";
		System.out.println("Zona a la que pertenece "+zonaBoleto);
		
		char seccion = 'f';
		System.out.println("Seccion "+seccion);
		
		boolean clieFre = true;
		System.out.println("Es un cliente frecuente "+clieFre);
		
		
		//Conversion de tipos
		//Casteo a entero
		
		int pesoCambio = (int) peso;
		
		//casteo entero
		long pesoCambio1 = (long) peso;
		
		System.out.println("double "+peso);
		System.out.println("int " +pesoCambio);
		System.out.println("long "+pesoCambio1);
		
		int nameCambio = Integer.parseInt(costoBoleto);
		double zonCambio = Double.parseDouble(zonaBoleto);
		
		System.out.println("Zona de user segun voleto "+(nameCambio + zonCambio));		
		
		/*Operadores aritmeticos 
		+ suma
		- resta
		* multiplicacion
		/ division
		 % Residuo*/
		
		
		/*Operadores de compararcion 
		 == compara si un opernado es igual a otro 
		 != compara si es diferente 
		 <  mayor que 
		 >  menor que 
		 <= mayor o igual que 
		 >= menor o igual que */
		
		double priceBoleto = 75.50;
		double pricePop = 89.70;
		double priceBebi = 35.50;
		int capTotal= 500;
		
		int perDentro =342;
		if (perDentro > capTotal) {
			System.out.println("Ya no quedan lugares");
		}
		
		double totalTaquila = perDentro * priceBoleto;
		double totalPop = perDentro * pricePop;
		double totalBebi = perDentro * priceBebi;
		
		System.out.println("Precio del voleto: $"+priceBoleto);
		System.out.println("Precio de las palomitas: $"+pricePop);
		System.out.println("Precio de las bebidas: $"+pricePop);

		
	}

}
