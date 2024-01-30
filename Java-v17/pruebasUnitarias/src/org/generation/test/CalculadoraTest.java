package org.generation.test;

import static org.junit.Assert.assertEquals;

import org.generation.calculadora.Calculadora;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CalculadoraTest {
	//1. Mandar a llamar un objeto de tipo Calculadora como variable
	private Calculadora calculadoraTest;
	
	//1.1. Crear un método llamado setUp para instanciar mi calculadoraTest como nuevo objeto de tipo Calculadora y le debo indicar que se ejecute antes de todos los test con la anotación @BeforeEach
	@BeforeEach
	public void setUp() {
		calculadoraTest = new Calculadora();
	}
	
	//2. Comenzar a crear métodos de prueba (test) que no retornan (void)
	@Test
	public void sumarTest() {
		//assertEquals(resultado esperado, variable+método(parámetros a evaluar));
		assertEquals(15, calculadoraTest.sumar(7, 8));
	}
	
	//3. Revisar el archivo `module-info.java` y eliminar los módulos que se importaron
	//4. Importar `Assert.assertEquals`	
	
	@Test
	public void restaTest() {
		assertEquals(-1, calculadoraTest.resta(17, 18));
	}
	
	@Test
	public void multiplicacionTest() {
		assertEquals(8, calculadoraTest.multiplicacion(1, 8));
	}
	
	@Test
	public void divisionTest() {
		assertEquals(1, calculadoraTest.division(7, 7));
	}
	
	
}