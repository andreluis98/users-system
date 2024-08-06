package br.com.system.services;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.system.exceptions.ResourceNotFoundException;
import br.com.system.model.Client;
import br.com.system.repository.ClientRepository;

@Service
public class ClientServices {

	private Logger logger = Logger.getLogger(ClientServices.class.getName());
	
	@Autowired
	ClientRepository repository;
	
	//Listar Todos os Clientes
	public List<Client> findAll(){
		logger.info("Finding All Clients");
		List<Client> client = new ArrayList<>();
		
		return repository.findAll();
	}
	
	//Listar Cliente por Razao Social
	public Client findByRazaoSocial(String razaoSocial) {
		logger.info("Finding one Client by Razao Social");
		Client client = new Client();
		return repository.findByRazaoSocial(razaoSocial).orElseThrow(() -> new ResourceNotFoundException("No records found for this Razao Social!"));
	}
	
	//Listar Cliente por CNPJ
	public Client findByCnpj(String cnpj) {
		logger.info("Finding one Client by CNPJ");
		Client client = new Client();
		return repository.findByCnpj(cnpj).orElseThrow(() -> new ResourceNotFoundException("No records found for this CNPJ!"));
	}
	
	//Criar Cliente
	public Client create(Client client) throws Exception {
		logger.info("Creating one Client");
		
		String status = client.getStatus().toUpperCase();
	    if (!status.equals("ATIVO") && !status.equals("INATIVO")) {
	        throw new Exception("Status deve ser 'ATIVO' ou 'INATIVO'.");
	    }
		
		if (repository.findByUsuario(client.getUsuario()).isPresent()) {
	            throw new Exception("Usuário já existe.");
	        }
		
		 client.setStatus(status);
		return repository.save(client);
	}
	
	//Editar Cliente
	public Client update(Client client) {
		logger.info("Updating one Client");
		
		var entity = repository.findById(client.getId()).orElseThrow(() -> new ResourceNotFoundException("No records found for this ID!"));
		
		entity.setCnpj(client.getCnpj());
		entity.setRazaoSocial(client.getRazaoSocial());
		entity.setStatus(client.getStatus());
		
		return repository.save(entity);
	}
	
	//Excluir Clientes
	public void delete(Long id) {
		logger.info("Deleting one Person");
		var entity = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No records found for this ID!"));
		repository.delete(entity);
	}

	//Login
    public Client login(String usuario, String senha) {
        return repository.findByUsuarioAndSenha(usuario, senha);
    }
}
