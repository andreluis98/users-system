# Sistema de Gerenciamento de Clientes

Este projeto é uma aplicação web para gerenciamento de clientes, desenvolvido com Java Spring Boot para o backend e Angular para o frontend. A aplicação permite realizar operações CRUD (Criar, Ler, Atualizar e Excluir) em uma tabela de clientes, além de incluir funcionalidades de login e busca de clientes pelo CNPJ.

## Funcionalidades

- **Cadastro de Clientes**: Permite o cadastro de novos clientes com CNPJ, razão social, usuário, senha e status (ativo/inativo).
- **Busca de Clientes**: Possibilita buscar clientes pelo CNPJ ou razão social.
- **Atualização de Clientes**: Permite editar os dados de um cliente existente.
- **Exclusão de Clientes**: Facilita a remoção de um cliente do sistema.
- **Login de Usuário**: Implementa a funcionalidade de autenticação de usuários.

## Tecnologias Utilizadas

- **Backend**: Java, Spring Boot, JPA, PostgreSQL
- **Frontend**: Angular
- **Gerenciamento de Pacotes**: Maven (para o backend) e npm (para o frontend)
- **Containerização**: Docker

## Estrutura do Projeto

```
users-system/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

## Como Executar a Aplicação

### Pré-requisitos

- JDK 21 ou superior
- Node.js (para o frontend)
- Docker e Docker Compose (opcional, mas recomendado)

### Executando com Docker

1. Clone este repositório:
   ```bash
   git clone <URL-do-repositório>
   cd users-system
   ```

2. Construa e inicie os containers:
   ```bash
   docker-compose up --build
   ```

### Executando Localmente

#### Backend

1. Navegue até o diretório do backend:
   ```bash
   cd backend
   ```

2. Execute o Maven para iniciar o servidor:
   ```bash
   mvn spring-boot:run
   ```

#### Frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a aplicação Angular:
   ```bash
   ng serve --host 0.0.0.0
   ```

### Acessando a Aplicação

Após iniciar o backend e o frontend, você pode acessar a aplicação em [http://localhost:4200](http://localhost:4200).

## Endpoints da API

| Método  | Endpoint                     | Descrição                                  |
|---------|------------------------------|--------------------------------------------|
| POST    | /api/clientes               | Cria um novo cliente                        |
| GET     | /api/clientes               | Lista todos os clientes                    |
| GET     | /api/clientes/{cnpj}        | Busca um cliente pelo CNPJ                 |
| PUT     | /api/clientes               | Atualiza um cliente existente               |
| DELETE  | /api/clientes/{id}          | Exclui um cliente pelo ID                  |
| POST    | /api/login                  | Realiza o login do usuário                 |

