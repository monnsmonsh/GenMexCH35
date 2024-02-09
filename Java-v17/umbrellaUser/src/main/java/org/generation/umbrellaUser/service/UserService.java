package org.generation.umbrellaUser.service;


import java.util.List;

import org.generation.umbrellaUser.model.User;
import org.generation.umbrellaUser.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	private final UserRepository repository;
	
	//Contructor permite la inyeccion de dependencias
	@Autowired
	public UserService(UserRepository repository) {
		this.repository = repository;
	}
	
	//Crear metodo de tipo GEt para traer a todos los usuarios
	public List<User> allUsers(){
		return repository.findAll();
	}
	
}
