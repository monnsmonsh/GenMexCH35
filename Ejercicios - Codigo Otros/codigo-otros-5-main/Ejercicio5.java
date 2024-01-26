//Importamos el scaner
import java.util.Scanner;

public class Codigo5 {

    //creamos la clase public main
    public static void main(String[] args) {
        //mod scanner
	    Scanner s = new Scanner(System.in);
	    System.out.print("Introduzca un número: ");//Comillas 
	    int ni = s.nextInt();//scaner para numero

        int afo = 0;
        int noAfo = 0;
	    
        // Se agregó la comprobación para evitar un bucle infinito
        while (ni > 0) {
            int digito = ni % 10;
            if (digito == 3 || digito == 7 || digito == 8 || digito == 9) {
                afo++;
            } else {
                noAfo++;
            }
            
            ni /= 10;  // Se movió fuera del bloque if para que se realice en cada iteración
        }

        if (afo > noAfo) {
            System.out.println("El " + ni + " es un número afortunado.");
        } else {
            System.out.println("El " + ni + " no es un número afortunado.");
        }

        s.close();  // cerramos  el scanner
    }
}