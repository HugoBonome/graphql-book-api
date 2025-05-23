Biblioteca GraphQL API
Descrição
Esta é uma API simples para uma biblioteca, construída com Express.js e GraphQL. A API permite consultar informações sobre livros e autores de forma flexível, retornando apenas os dados requisitados pelo cliente.

O projeto foi desenvolvido como parte de uma atividade acadêmica para aprendizado e prática com APIs GraphQL em Node.js.
Funcionalidades
    • Consultar livro por ID, incluindo detalhes do autor.
    • Listar todos os livros disponíveis.
    • Listar todos os autores disponíveis.
Tecnologias usadas
    • Node.js
    • Express.js
    • GraphQL
    • npm (gerenciador de pacotes)
Estrutura do projeto

/src
  ├── server.js         # Configuração do servidor e schema GraphQL
  ├── data              # Dados estáticos (ex.: livros e autores)
  ├── resolvers.js      # Funções que resolvem as queries GraphQL
  └── schema.graphql    # Definição do schema GraphQL
package.json            # Configuração do projeto e dependências
README.md               # Documentação do projeto

Como executar o projeto
    1. Clone o repositório:

    git clone <URL-do-repositório>
    cd graphql-book-api
    2. Instale as dependências:

    npm install
    3. Inicie o servidor:

    node src/server.js
    4. Acesse a interface de testes (GraphiQL) em:

    http://localhost:4000/graphql
Exemplo de consulta GraphQL
query {
  bookById(id: "book-1") {
    id
    name
    pageCount
    author {
      firstName
      lastName
    }
  }
}
Funcionalidades Futuras para Implementação
    • Mutations GraphQL
Adicionar operações para criar, atualizar e deletar livros e autores, permitindo gerenciamento dinâmico dos dados.
    • Autenticação e Autorização
Implementar autenticação de usuários (por exemplo, via JWT) para controlar quem pode acessar ou modificar dados.
    • Persistência em Banco de Dados
Substituir os dados estáticos por um banco de dados real (ex: MongoDB, PostgreSQL), usando ORMs como Prisma ou Mongoose.
    • Paginação e Filtros
Suportar consultas com paginação e filtros, permitindo buscar livros por autor, faixa de páginas, ou outros critérios.
    • Testes Automatizados
Implementar testes unitários e de integração para garantir a qualidade e estabilidade da API.
    • Documentação Automática
Gerar documentação interativa (ex: GraphQL Playground ou GraphiQL customizado) para facilitar o uso da API.
    • Deploy e CI/CD
Automatizar o deploy da aplicação em serviços como Heroku, Vercel ou AWS, e configurar pipelines de integração contínua.
Contato
Desenvolvido para atividade acadêmica.
Para dúvidas ou sugestões, entre em contato.
