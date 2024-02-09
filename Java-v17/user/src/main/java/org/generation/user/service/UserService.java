package org.generation.user.service;

import java.util.ArrayList;
import java.util.List;

import org.generation.user.model.User;
import org.springframework.stereotype.Service;

/*
 * En service definimos los servicios de la BD(enmulamos un BD utilizando ArrayList)
 *Para ejecutar las operacion CRUD
 * 
 * Para def nuestra clase JAVA como un service, utilizamos la anotacion @Service
 * */

@Service
public class UserService {
	//Crear el ArrayList en donde van a vivir todos los usuarios que quiera agregar
	
	public final List<User> usuario = new ArrayList<User>();
	
	//Instancias los obj User
	public UserService() {
		usuario.add(new User (1L, "Daniel", "Maldonado", "daniel@gmail.com", "patito123"));
		usuario.add(new User (2L, "Braulio", "Santiago", "braulio@gmail.com", "braulito"));
		usuario.add(new User (3L, "Rey David", "Martinez", "elrey@gmail.com", "lasmañanitas"));
		usuario.add(new User (4L, "Eveida", "Palos", "eve.p@gmail.com", "candycrush3000"));
		usuario.add(new User (5L, "Rodrigo", "Macedo", "rodri.m@gmail.com", "contraseña"));
		usuario.add(new User (6L, "Lizbeth", "Ceron", "lizbeth.c@gmail.com", "generationmx"));
		usuario.add(new User (7L, "Fernanda", "Carmona", "fer.car@gmail.com", "zorritonaranja"));
		usuario.add(new User (8L, "Ruben", "Aleman", "r.aleman@gmail.com", "patito55555"));
		usuario.add(new User (9L, "Gonzalo", "Piña", "gon.pinha@gmail.com", "mentasboutique"));
		usuario.add(new User (10L, "Eunice", "Ceja", "eun.ceja@gmail.com", "4_perritos"));
	}
	
	//Crear metodo de tipo GEt para traer a todos los usuarios
	public List<User> allUsers(){
		return usuario;
	}
	
}
