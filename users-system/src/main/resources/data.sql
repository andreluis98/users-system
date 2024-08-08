CREATE UNIQUE INDEX IF NOT EXISTS unique_cnpj ON clientes(cnpj);

INSERT INTO clientes (cnpj, razao_social, usuario, senha, status) VALUES
('12345678000177', 'Grupo SC', 'admin', 'admin', 'ATIVO')
ON CONFLICT (cnpj) DO NOTHING;

INSERT INTO clientes (cnpj, razao_social, usuario, senha, status) VALUES
('98765432000188', 'Grupo Santa Cruz', 'root', 'root', 'INATIVO')
ON CONFLICT (cnpj) DO NOTHING;
