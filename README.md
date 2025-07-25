# Toughts 💭

> **Coloque seus pensamentos e divida-os com seus amigos!**

Um projeto desenvolvido em Node.js que permite aos usuários compartilhar seus pensamentos e ideias de forma simples e intuitiva.

## 📝 Sobre o Projeto

Toughts é uma aplicação web que funciona como uma plataforma social minimalista onde os usuários podem:
- Criar e compartilhar seus pensamentos
- Interagir com pensamentos de outros usuários
- Construir uma comunidade baseada em ideias e reflexões

Este projeto foi desenvolvido como parte de um curso de Node.js, demonstrando conceitos fundamentais de desenvolvimento web backend.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web para Node.js
- **EJS** - Template engine para renderização de páginas
- **MySQL/Sequelize** - Banco de dados e ORM
- **bcrypt** - Criptografia de senhas
- **express-session** - Gerenciamento de sessões
- **connect-flash** - Mensagens flash
- **CSS3** - Estilização da interface

## ✨ Funcionalidades

### Autenticação
- [x] Cadastro de usuários
- [x] Login e logout
- [x] Gerenciamento de sessões
- [x] Proteção de rotas

### Pensamentos
- [x] Criar novos pensamentos
- [x] Visualizar pensamentos de todos os usuários
- [x] Editar pensamentos próprios
- [x] Excluir pensamentos próprios
- [x] Buscar pensamentos

### Interface
- [x] Design responsivo
- [x] Interface intuitiva e limpa
- [x] Mensagens de feedback ao usuário
- [x] Navegação fluida entre páginas

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MySQL
- npm ou yarn

### Passos para executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/KledsonV/Toughts.git
   cd Toughts
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados**
   - Crie um banco MySQL
   - Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=toughts_db
   SESSION_SECRET=sua_chave_secreta
   ```

4. **Execute as migrations**
   ```bash
   npm run migrate
   ```

5. **Inicie o servidor**
   ```bash
   npm start
   ```

6. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

## 📂 Estrutura do Projeto

```
Toughts/
├── controllers/        # Controladores da aplicação
├── models/            # Modelos do banco de dados
├── routes/            # Definição das rotas
├── views/             # Templates EJS
├── public/            # Arquivos estáticos (CSS, JS, imagens)
├── helpers/           # Funções auxiliares
├── config/            # Configurações da aplicação
├── package.json       # Dependências e scripts
└── app.js            # Arquivo principal
```

## 🗃️ Modelo de Dados

### Usuario
- id
- name
- email
- password
- createdAt
- updatedAt

### Tought (Pensamento)
- id
- title
- content
- UserId (FK)
- createdAt
- updatedAt

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📋 Próximas Funcionalidades

- [ ] Sistema de likes/curtidas
- [ ] Comentários em pensamentos
- [ ] Seguir outros usuários
- [ ] Feed personalizado
- [ ] Categorias de pensamentos
- [ ] API REST completa

## 👨‍💻 Autor

**Kledson Vinícius**

- GitHub: [@KledsonV](https://github.com/KledsonV)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!

*Projeto desenvolvido durante curso de Node.js*
