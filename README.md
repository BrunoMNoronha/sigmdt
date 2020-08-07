# Matthaios
Este é um Sistema de Gestão Open Source.

### Recusos

- Financeiro
	- Fluxo de caixa
- Tickets
	- Cadastro de tickets
- Produtos
	- Cadastro de produtos
	- Controle de serial
- Clientes
	- Cadastro de clientes

### Tecnologias
- Node.js
- Javascript
- HTML
- CSS

### Dependências
- express
- fast-csv
- knex
- multer
- nunjucks
- sqlite3

### Instalação 
```bash
# Clonar o repositório
$ git clone https://github.com/BrunoMNoronha/matthaios.git

# Entrar no repositório
$ cd matthaios

# Instalar as dependências
$ npm install

# Atualizar o banco de dados
$ npx knex migrate:latest

# Alimentar o banco de dados
$ npx knex seed:run

# Iniciar o servidor
$ npm run start

# Rodando na porta 3131
`http://localhost:3131`
```

### Como contribuir
- Faça um Fork;
- Crie um branch com seu recurso: git checkout -b my-feature;
- Confirmar alterações: git commit -m 'feat: Meu novo recurso';
- Faça um push para o seu branch: git push origin my-feature.

### 📝 Licença
Este é um projeto de código aberto

Desenvolvido com ♥ by Bruno Menezes Noronha 👋 [Get in touch!](https://www.linkedin.com/in/brunomnoronha/)
