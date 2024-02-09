package org.generation.user.controller;

import java.util.List;

import org.generation.user.model.User;
import org.generation.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * Controla las peticiones de tipo HTTP (Get, Post, Put, Delete, Patch)
 * Para definir una clase como Controller, se utiliza la anotación @RestController 
 * Aquí definimos el endpoint de nuestra URI, así como los endpoints de cada petición.
 * 		- Para definir la ruta (endpoint) de nuestra API, utilizamos la anotación @RequestMapping
 * 		- Para definir la ruta (endpoint) de cada petición, utilizamos path o paréntesis
 * Aquí se lleva a cabo la inyección de dependencias en el constructor, utilizando anotación @Autowired
 * Definimos el método correspondiente a la petición HTTP con las anotaciones @GetMapping @PostMapping @PutMapping @DeleteMapping
 */

@RestController //Indica que esta clase es una API de tipo REST
@RequestMapping ("admin/users") //Contruimos la ruta de nuesta API, def endpoints (localhost:8080/admin/users)
//@RequestMapping
public class UserController {
	//Intacicar desde UserService mediante un nuevo tipo de UserService userService
	private UserService userService;

	//Generar el constructor y asignar anotacion @Autowired que indica que aqui a cabo la inyeccion de dependencias
	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	
	//Necesitamos decirle a controller que tiene que traer la informacion de UserService usando el metodo definido.
	//Para traer la inf (READ) necesitamos el tipo de peticion (GET) mediante la anotacion @GetMapping
	@GetMapping
	public List<User> getUsers(){
		return userService.allUsers();
	}
	
	
	

}
