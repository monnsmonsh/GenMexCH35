package loops;

public class forLoop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		for (int numero = 0; numero <=10; numero++) {
			System.out.println("Numero es igual a "+numero);
		}
		
		//
		int contador;
		for (contador = 1; contador <=5; contador++) {
			System.out.println("La cuenta es "+contador);
		}
			
		//
		//
		int filas = 5;
		for(int i = 0; i < filas; i++) {
			//
			for (int j = 0; j <= i; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
		
	}

}
