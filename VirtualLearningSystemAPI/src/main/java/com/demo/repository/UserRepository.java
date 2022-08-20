package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.entity.User;

public interface UserRepository extends JpaRepository<User, String> {

//	User findByIdPassword(String login_Id, String password);
	User findByUser(String userName);
}
