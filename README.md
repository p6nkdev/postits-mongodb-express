# Projeto Feira Profissões

Este projeto é uma aplicação web para gerenciamento de post-its em uma feira de profissões. Usuários podem criar, visualizar e administrar post-its com sugestões, perguntas ou comentários relacionados ao evento.

## Funcionalidades
- Cadastro de post-its via formulário
- Visualização de todos os post-its
- Área administrativa para gerenciamento
- Interface amigável e responsiva

## Tecnologias Utilizadas
- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- CSS e JavaScript puro para frontend
- Estrutura MVC (Model-View-Controller)

## Estrutura do Projeto
```
index.js                # Arquivo principal do servidor
package.json            # Dependências e scripts do projeto
config/
  database.js           # Configuração do banco de dados
controllers/
  postitController.js   # Lógica dos post-its
models/
  Postit.js             # Modelo de dados dos post-its
public/
  css/                  # Estilos CSS
  js/                   # Scripts JavaScript
routes/
  postitsRoutes.js      # Rotas relacionadas aos post-its
views/
  *.ejs                 # Templates das páginas
```

## Como Executar
1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure o banco de dados:**
   - Edite o arquivo `config/database.js` conforme necessário.
4. **Inicie a aplicação:**
   ```bash
   node index.js
   ```
5. **Acesse no navegador:**
   - [http://localhost:3000](http://localhost:3000)

## Contribuição
Pull requests são bem-vindos! Para grandes mudanças, abra uma issue primeiro para discutir o que você gostaria de modificar.

## Licença
Veja o arquivo `license.md` para mais informações.
