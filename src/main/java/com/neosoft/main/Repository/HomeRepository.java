package com.neosoft.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.neosoft.main.Model.Employee;



public interface HomeRepository extends JpaRepository<Employee, Integer>
{

}
