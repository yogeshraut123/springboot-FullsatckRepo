package com.neosoft.main.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neosoft.main.Model.Employee;
import com.neosoft.main.Repository.HomeRepository;
import com.neosoft.main.Service.HomeService;

@Service
public class HomeServiceImpl implements HomeService {
	@Autowired
	HomeRepository hr;

	@Override
	public void saveEmployee(Employee e) {
		hr.save(e);

	}

	@Override
	public List<Employee> getAllEmployee() {

		List<Employee> list = (List<Employee>) hr.findAll();

		return list;
	}

	@Override
	public void deleteEmployee(Integer eid) {
		hr.deleteById(eid);

	}

	@Override
	public Employee updatedata(Employee e) {
		return hr.save(e);

	}

	@Override
	public Optional<Employee> getDataById(int eid) {

		return hr.findById(eid);
	}

}
