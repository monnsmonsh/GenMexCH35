package loops;

public class continueLoop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		for (int cliente = 1; cliente <=20; cliente++) {
			if(cliente ==5) {
				System.out.println("Cliente numero " +cliente+ " ?Ganaste");
				continue;
			 } System.out.println("Eres el cliente número " + cliente);
			
		}
	}

}
