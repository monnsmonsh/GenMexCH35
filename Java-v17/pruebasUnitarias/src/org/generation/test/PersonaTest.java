package org.generation.test;

import static org.junit.Assert.assertEquals;

import org.generation.persona.Persona;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class PersonaTest {
	/*Requerimientos:
	 * 	1. Instanciar 4 objetos con los parámetros establecidos en el constructor
	 * 	2. Crear métodos (4) para probar cada objeto instanciado con los valores de los atributos (getters)
	 * 	3. Crear un método de validación de email, donde el email debe cumplir con la condición de dominio @gmail.com ... si cumple con la condición, el test se evalúa correcto, si no, se evalúa como falla (método de test booleano, regex)
	 * */
	

	private Persona personaTest;
	
	@BeforeEach
	public void setUp() {
		personaTest = new Persona("Martin","rodriguez", 15,"gmail.com");
	}
		
	//2. Comenzar a crear métodos de prueba (test) que no retornan (void)
	@Test
	public void fullName() {
		//assertEquals(resultado esperado, variable+método(parámetros a evaluar));
		assertEquals("martin","rodriguez", personaTest.nombre("martin","rodriguez"));
	}
	
	public void email() {
		//assertEquals(resultado esperado, variable+método(parámetros a evaluar));
		assertEquals(false, personaTest.validarEmail("ejemplo@gmail.com"));
	}

	
}
