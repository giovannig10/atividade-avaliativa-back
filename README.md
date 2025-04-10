### Como instalar e executar o projeto

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/atividade-avaliativa-back.git
    cd atividade-avaliativa-back
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configure o ambiente**:
    Crie um arquivo `.env` na raiz do projeto e adicione a variável `DATABASE_URL` apontando para o banco de dados.

4. **Execute as migrações**:
    ```bash
    npx prisma migrate dev
    ```

5. **Inicie o servidor**:
    ```bash
    npm start
    ```

O servidor estará disponível em `http://localhost:4000`.

---

### Exemplos de requisições para cada endpoint

#### **Criar um produto**
**POST** `/jogos`
```json
{
  "titulo": "Nome do Jogo",
  "preco": "preço do jogo",
    "anoLancamento": "Ano de lançamento",
    "empresaDesenvolvedora": "desenvolvedora do jogo",
    "generos": "genero do jogo",
    "plataformasDisponiveis": "plataforma disponivel",
    "image": "imagem do jogo",
  
}
```

#### **Listar todos os produtos**
**GET** `/jogos`

#### **Atualizar um produto**
**PUT** `/jogos/:id`
```json
{
  "titulo": "Novo Nome do Jogo",
  "preco": 49.99,
  "anoLancamento": 2000,
  "empresaDesenvolvedora": "Nova empresa",
  "generos": "Novo genero",
    "plataformasDisponiveis": "Nova plataforma",  
    "image": "Nova imagem",
}
```

#### **Deletar um produto**
**DELETE** `/jogos/:id`

---

### Decisões de design e arquitetura tomadas

- **Prisma ORM**: Escolhido para facilitar a interação com o banco de dados e gerenciar migrações.
- **Estrutura de pastas**: Organizada para separar responsabilidades, com pastas para rotas, controladores e modelos.
- **REST API**: Implementada para garantir simplicidade e compatibilidade com diversos clientes.
- **Variáveis de ambiente**: Utilizadas para configurar o banco de dados de forma segura.

---

### Tecnologias utilizadas

- **Node.js**: Plataforma para execução do JavaScript no servidor.
- **Express**: Framework para criação de APIs REST.
- **Prisma**: ORM para gerenciamento do banco de dados.
- **SQLite**: Banco de dados utilizado para desenvolvimento.
- **dotenv**: Para gerenciar variáveis de ambiente.
- **Nodemon**: Para reiniciar automaticamente o servidor durante o desenvolvimento.