package br.com.system.services;

import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.system.dto.ClientDTO;
import br.com.system.exceptions.ResourceNotFoundException;
import br.com.system.model.Client;
import br.com.system.repository.ClientRepository;

@Service
public class ClientServices {

	private Logger logger = Logger.getLogger(ClientServices.class.getName());
	
	@Autowired
	ClientRepository repository;
	
	//Listar Todos os Clientes
    public List<ClientDTO> findAll() {
        logger.info("Finding All Clients");
        return repository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
	
	// Listar Cliente por Razao Social
    public List<ClientDTO> findByRazaoSocial(String razaoSocial) {
        logger.info("Finding clients by Razao Social");
        List<ClientDTO> clients = repository.findByRazaoSocial(razaoSocial).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        if (clients.isEmpty()) {
            throw new ResourceNotFoundException("No records found for this Razao Social!");
        }
        return clients;
    }
    
    // Listar Cliente por CNPJ
    public ClientDTO findByCnpj(String cnpj) {
        logger.info("Finding client by CNPJ");
        return repository.findByCnpj(cnpj)
                .map(this::convertToDTO)
                .orElseThrow(() -> new ResourceNotFoundException("No records found for this CNPJ!"));
    }
	
	//Criar Cliente
    public ClientDTO create(Client client) throws Exception {
        logger.info("Creating one Client");
        client.formartarCnpj();

        if (client.getCnpj() == null || client.getCnpj().length() != 14) {
            throw new Exception("O CNPJ deve ter exatamente 14 caracteres.");
        }

        if (repository.findByCnpj(client.getCnpj()).isPresent()) {
            throw new Exception("CNPJ já existe.");
        }

        String status = client.getStatus().toUpperCase();
        if (!status.equals("ATIVO") && !status.equals("INATIVO")) {
            throw new Exception("Status deve ser 'ATIVO' ou 'INATIVO'.");
        }

        if (repository.findByUsuario(client.getUsuario()).isPresent()) {
            throw new Exception("Usuário já existe.");
        }

        client.setStatus(status);
        Client savedClient = repository.save(client);
        return convertToDTO(savedClient);
    }
    
    
	//Editar Cliente
    public ClientDTO update(Client client) {
        logger.info("Updating one Client");
        client.formartarCnpj();
        var entity = repository.findById(client.getId())
                .orElseThrow(() -> new ResourceNotFoundException("No records found for this ID!"));

        entity.setCnpj(client.getCnpj());
        entity.setRazaoSocial(client.getRazaoSocial());
        entity.setStatus(client.getStatus());

        Client updatedClient = repository.save(entity);
        return convertToDTO(updatedClient);
    }
	
	//Excluir Clientes
    public void delete(Long id) {
        logger.info("Deleting one Person");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No records found for this ID!"));
        repository.delete(entity);
    }

	//Login
    public Client login(String usuario, String senha) {
        return repository.findByUsuarioAndSenha(usuario, senha);
    }
    
    //Converte a model para DTO
    private ClientDTO convertToDTO(Client client) {
        ClientDTO dto = new ClientDTO();
        dto.setId(client.getId());
        dto.setCnpj(client.getCnpj());
        dto.setRazaoSocial(client.getRazaoSocial());
        dto.setStatus(client.getStatus());
        dto.setUsuario(client.getUsuario());
        return dto;
    }
}
