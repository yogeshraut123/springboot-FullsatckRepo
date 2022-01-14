package com.neosoft.main.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neosoft.main.Model.Employee;
import com.neosoft.main.Service.HomeService;

@CrossOrigin("*")
@RestController
public class HomeController {
	@Autowired
	HomeService hs;

	@PostMapping("/saveEmployee")
	public String savedata(@RequestBody Employee e) {
		hs.saveEmployee(e);

		return "Employee data saved";

	}
	// ...................................................................................

	@GetMapping("/getAllEmployee")
	public List<Employee> login() {
		List<Employee> list = hs.getAllEmployee();
		return list;
	}

	// ..................................................................................
	@DeleteMapping("/delete/{eid}")
	public String delete(@PathVariable("eid") Integer eid) {
		hs.deleteEmployee(eid);
		return "Employee deleted";
	}

	// ..................................................................................
	@GetMapping("/editdata/{eid}")
	public Optional<Employee> editdata(@PathVariable("eid") int eid) {
		Optional<Employee> list = hs.getDataById(eid);
		return list;
	}

	// ..................................................................................
	@PutMapping("/employee/{eid}")
	public String updatedata(@RequestBody Employee e) {

		hs.updatedata(e);
		return "update data successfully";

	}
}
