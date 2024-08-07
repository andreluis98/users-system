ALTER TABLE clientes ADD CONSTRAINT unique_cnpj UNIQUE (cnpj);

INSERT INTO clientes (cnpj, razao_social, usuario, senha, status) VALUES
('12345678000195', 'Empresa A', 'usuarioA', 'senhaA', 'ATIVO')
ON CONFLICT (cnpj) DO NOTHING;

INSERT INTO clientes (cnpj, razao_social, usuario, senha, status) VALUES
('98765432000196', 'Empresa B', 'usuarioB', 'senhaB', 'INATIVO')
ON CONFLICT (cnpj) DO NOTHING;
