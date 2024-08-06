package br.com.system.model;

import java.io.Serializable;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "clientes")
public class Client implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Column(nullable = false, length = 80)
	private String cnpj;
	
	@Column(name = "razao_social", nullable = false)
	private String razaoSocial;
	
	@Column(nullable = false)
	private String usuario;
	
	@Column(nullable = false)
	private String senha;
	
    @Column(nullable = false)
    private String status; 
	
	public Client() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getRazaoSocial() {
		return razaoSocial;
	}

	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public int hashCode() {
		return Objects.hash(cnpj, id, razaoSocial, senha, status, usuario);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Client other = (Client) obj;
		return Objects.equals(cnpj, other.cnpj) && Objects.equals(id, other.id)
				&& Objects.equals(razaoSocial, other.razaoSocial) && Objects.equals(senha, other.senha)
				&& Objects.equals(status, other.status) && Objects.equals(usuario, other.usuario);
	}
	
	public void formartarCnpj() {
        this.cnpj = this.cnpj.replaceAll("\\D", "");
    }
	
}
