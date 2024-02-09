package org.generation.umbrellaUser.repository;

import org.generation.umbrellaUser.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
 //JPQL
}
