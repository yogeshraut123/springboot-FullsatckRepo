package com.neosoft.main.Service;

import java.util.List;
import java.util.Optional;

import com.neosoft.main.Model.Employee;

public interface HomeService {

	public void saveEmployee(Employee e);

	public List<Employee> getAllEmployee();

	public void deleteEmployee(Integer eid);

	public Employee updatedata(Employee e);

	public Optional<Employee> getDataById(int eid);

}
