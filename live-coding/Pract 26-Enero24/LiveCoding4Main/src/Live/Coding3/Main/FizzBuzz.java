package Live.Coding3.Main;

public class FizzBuzz {
	
	public void imprFizzBuzz() {
		//Creamos el Cliclo que corra del 1 al 100
        for (int i = 1; i <= 100; i++) {
        	
        	//Si el num es múltiplo de 3 y de 5 imprimir FizzBuzz en lugar del número
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println(" FizzBuzz");
            } else if (i % 3 == 0) {
            	//Si el num sea múltiplo de 3 imprimir Fizz en lugar del número.
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
            	//Si el num es múltiplo de 5 imprimir Buzz en lugar del número.
                System.out.println("Buzz");
            } else {
            	//Imprime numero
                System.out.println(i);
            }
        }
    }
}
