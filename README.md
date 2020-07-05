# SisGPUP - Sistema de Gerencimento Group UP
Este é um Sistema de Gerenciamento Opensource.

### Recusos

- Controle de Caixa
- Cadastro de Ordens de Serviço
- Cadastro de Produtos
	- Controle de Serial
	- Importação de CSV

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
# Clonar este repositório
$ git clone https://github.com/BrunoMNoronha/sisgpup.git

# Entre no repositório
$ cd nlw-booster-serve

# Instalar dependências
$ npm install

# Run Migrates
$ npx knex:migrate

# Run Seeds
$ ppx knex:seed

# Start server
$ npm run start

# running on port 3131
`http://localhost:3131`
```

### Como contribuir
- Faça um Fork;
- Crie um branch com seu recurso: git checkout -b my-feature;
- Confirmar alterações: git commit -m 'feat: Meu novo recurso';
- Faça um push para o seu branch: git push origin my-feature.

### 📝 Licença
This project is under the MIT license. See the [LICENSE](https://github.com/DanielObara/NLW-1.0/blob/master/LICENSE) for details.

Made with ♥ by Bruno Menezes Noronha 👋 [Get in touch!](https://www.linkedin.com/in/brunomnoronha/)