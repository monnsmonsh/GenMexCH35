//
/// Arturo 4

package Live.Coding4.Main;

import java.util.Scanner;

public class MangosNaranjas {
	
	//Declaramos Variables
	private int mangos;
	private int naranjas;

    // Constructor
    public MangosNaranjas(int mangos, int naranjas) {
        this.mangos = mangos;
        this.naranjas = naranjas;
    }

    // Método
    public void imprimir() {
        // Calcular el máximo común divisor para determinar el número de cajas
        int mcd = calcularMCD(mangos, naranjas);

        // Calcular el número de cajas y el número de mangos/naranjas por caja
        int cajas = mangos / mcd;
        int mangosXCaja = mangos / cajas;
        int naranjasXCaja = naranjas / cajas;

        // Imprimimos
        System.out.println("El número de cajas es: " + cajas);
        System.out.println("El número de mangos en una caja es: " + mangosXCaja);
        System.out.println("El número de naranjas en una caja es: " + naranjasXCaja);
    }

    // Método para calcular el máximo común divisor
    private int calcularMCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static void main(String[] args) {
        // Solicitamos  el número de mangos y naranjas
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese el número de mangos: ");
        int numMangos = scanner.nextInt();
        System.out.print("Ingrese el número de naranjas: ");
        int numNaranjas = scanner.nextInt();

        // Creamos un objeto de la clase MangosNaranjas y mandamos llamar a imprimir 
        MangosNaranjas mangosNaranjas = new MangosNaranjas(numMangos, numNaranjas);
        mangosNaranjas.imprimir();


        scanner.close();
    }
    
}
