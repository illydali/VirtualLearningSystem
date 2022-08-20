package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.User;
import com.demo.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")

public class UserController {

	@Autowired
	private UserRepository userRepository;
	
//	@GetMapping("/login/{email}/{password}")
//	public User getUser(@RequestBody(value = "email")
//		String email, (value="password") String password) {
//		User checkUser = userRepository.findByEmail(email);
//		
//		return "done";
//	}
	
	@PostMapping("/login/{login_id}")
	public User getUser(@RequestBody(value="login_id") String user) {
		User existingUser = userRepository.findByUser(user);
		System.err.println("Successfully found" + user);
		
		return existingUser;
	}
}
