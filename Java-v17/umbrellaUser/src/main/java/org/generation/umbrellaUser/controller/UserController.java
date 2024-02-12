package org.generation.umbrellaUser.controller;

import java.util.List;

import org.generation.umbrellaUser.model.User;
import org.generation.umbrellaUser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController //Indica que esta clase es una API de tipo REST
@RequestMapping("admin") //Contruimos la ruta de nuesta API, def endpoints (localhost:8080/admin/users)
public class UserController {
	
	private UserService userService;


	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	
	@GetMapping
	public List<User> getUsers(){
		return userService.allUsers();
	}
	
	//path variable, ya que buscamos por id y los id son diferentes, entonces necesito definir el endpoint entre llaves y dentro del método debo crear una anotación @PathVariable
	@GetMapping("{id}") 
	public User getOne(@PathVariable (name ="id")Long id) {
		return userService.getOne(id);
	}
	
	
	//Delete, de tipo void y define un path variable
	@DeleteMapping("{id}")
	public void deleteUser(@PathVariable (name ="id")Long id) {
		userService.deleteUser(id);
	}
	
	//Post, crear un nuevo usuario
	@PostMapping("users")
	//@PostMapping()
	public User newUser(@RequestBody User newUser) {
		return userService.addUser(newUser);
	}
	
	
	//Put, Modificar/actualizar a un usuario exixtencia
	@PutMapping("user/{id}")
	//@PutMapping("{id}")
	public User replaceUser(@RequestBody User user, @PathVariable(name="id") Long id) {
		return userService.replaceUser(user, id);
		
	}
	
	
	/*
	 * -- ResponseEntity<> clase de SpringFramework que representa una respuesta HTTP personalizable. Permite controlar el body de la respuesta. Posee dos parámetros:
	 * 		1. Especifica el tipo de datos 
	 * 		2. Especifica el código de estado HTTP 'HttpStatus.method'
	 * -- @RequestParam anotación de springFramework que se utiliza para vincular parámetros de solicitud HTTP que se enviará a la respuesta. Es decir, permite controlar las llaves-valores dentro del parámetro  
	 * */
	
	//Metodo
	@GetMapping("/users/byEmail") 
	public ResponseEntity<User> getUserByEmail(@RequestParam(name="email") String email){
		User user = userService.getUserByEmail(email);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	

}
