package br.com.system.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.system.model.Client;
import br.com.system.services.ClientServices;


@RestController
@RequestMapping("/clients")
public class ClientsController {
	
	@Autowired
	private ClientServices service;

	//Listar Todos os Clientes
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Client> findByAll(){
		return service.findAll();
	}
	
	//Listar Cliente por Razao Social	
	@GetMapping(value = "/razaoSocial/{razaoSocial}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Client findByRazaoSocial(@PathVariable(value="razaoSocial") String razaoSocial) throws Exception {
		return service.findByRazaoSocial(razaoSocial);
	}
	
	//Listar Cliente por CNPJ
	@GetMapping(value = "/{cnpj}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Client findByCnpj(@PathVariable(value="cnpj") String cnpj) throws Exception {
		return service.findByCnpj(cnpj);
	}
	
	//Criar Cliente
	@PostMapping(
			consumes= MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public Client create(@RequestBody Client client) throws Exception {
		return service.create(client);
	}
	
	//Editar Cliente
	@PutMapping( 
			consumes= MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public Client update(@RequestBody Client client) throws Exception {
		return service.update(client);
	}
	
	//Excluir Clientes
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> delete(@PathVariable(value="id") Long id) throws Exception {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	//Login
	@PostMapping(
			value = "/login",
			consumes= MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Client> login(@RequestBody Client cliente) {
        Client loggedInCliente = service.login(cliente.getUsuario(), cliente.getSenha());
        if (loggedInCliente != null) {
            return ResponseEntity.ok(loggedInCliente);
        } else {
            return ResponseEntity.status(401).build();
        }
    }
	
	

}
