//Importamos el scaner
import java.util.Scanner;

public class codigo6 {
	  //creamos la clase public main
      public static void main(String[] args) {
	    int[] n = new int[20];

        for (int i = 0; i < 20; i++) {//corejimos i++
            n[i] = (int)(Math.random() * 381) + 20;
            System.out.print(n[i] + " ");
        }
	    
	    System.out.println("\n¿Qué números quiere resaltar?");
        System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
	    //CAmabiamos el metodo de insertar
        //int opcion = Integer.parseInt(System.console().readLine();

	    Scanner scanner = new Scanner(System.in);
        int opcion = scanner.nextInt();

        int multiplo = (opcion == 1) ? 5 : 7;

        //cambiamos de un ciclo foreach a un for
        for (int e : n) {
            if (e % multiplo == 0) {
                System.out.print("[" + e + "] ");
            } else {
                System.out.print(e + " ");
            }
        }

        // Cerrar el scanner al final
        scanner.close();
    }
}