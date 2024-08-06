package br.com.system.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.system.model.Client;


public interface ClientRepository  extends JpaRepository<Client, Long> {
	Optional<Client> findByCnpj(String cnpj);
	Optional<Client> findByRazaoSocial(String razaoSocial);
	Optional<Client> findByUsuario(String usuario); 
	Client findByUsuarioAndSenha(String usuario, String senha);
}
