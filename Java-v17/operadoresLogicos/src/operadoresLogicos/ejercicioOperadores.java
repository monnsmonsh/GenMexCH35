package operadoresLogicos;

public class ejercicioOperadores {
	
	public static void main(String[] args) {

		/*&& operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa */
		
		int anios = 5;
		boolean esInfante = true; 
		boolean costoInfante = anios <= 12 && esInfante;
		System.out.println("Es peque " + costoInfante);
		
		
		// or
		
		String cliente = "itsktyu1495";
		String credenciales ="monsh1495";
		
		boolean credCorrecta = cliente.equals("itsktyu1495") && credenciales.equals("monsh1495");
		System.out.println("Las credenciales son validads "+credCorrecta);
		
		
		double costPasaje =380.5;
		int edad = 50;
		boolean credINAPAM = false;
		
		boolean desAdlMayor = edad >= 60 || credINAPAM;
		
		System.out.println("Tienes descuento " +costPasaje);
		
		boolean astDisponibles = true;
		boolean libres = true;
		boolean astConDesc =!libres;
		System.out.println("Tenemos asiento con descuento "+astConDesc);
		/*
		 * Autobús a oaxaca
			costo boleo 350
			boleto*
			62 asientos
			4 destinados a adultxs mayores
			6 a estudiantes
			descuento a inapam es de 35%
			a estudiantes 30%
		 * */
		int priceBol = 350;
		int tolBol = 62;
		int asiAdul = 4;
		int asiEst= 6;
		boolean INAPAM = false;
		boolean Est = true;
		
		
		System.out.println("Precio del Voleto: $"+priceBol);
		System.out.println("Total de Voletos "+tolBol);
		boolean Desc = (INAPAM = true) && (Est = true);
		System.out.println("Tenemos asientos con descueto diponible "+Desc);
		
		boolean disAsINA = asiAdul <= 4;
		System.out.println("Tenemos asiento para adutos disponibles"+disAsINA);
		boolean disAsEst = asiEst <= 6;
		System.out.println("Tenemos asiento para estudiante disponibles"+disAsEst);
		
		
		
		
	}
}
