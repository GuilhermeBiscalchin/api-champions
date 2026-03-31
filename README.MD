
---

# ⚽ API Champions

API REST desenvolvida com **Node.js, Express e TypeScript** para gerenciamento de dados relacionados à Champions League.

O projeto foi estruturado seguindo boas práticas de organização de código, separando responsabilidades entre **controllers, services e rotas**, além de utilizar ferramentas modernas para desenvolvimento e build.

---

# 🚀 Tecnologias Utilizadas

* **Node.js**
* **Express 5**
* **TypeScript**
* **TSX** – execução rápida de TypeScript no desenvolvimento
* **TSUP** – build e empacotamento da aplicação
* **CORS**

---

# 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-champions.git
```

Entre na pasta do projeto:

```bash
cd api-champions
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando o Projeto

### Ambiente de desenvolvimento

```bash
npm run start:dev
```

Executa a aplicação utilizando **TSX** com suporte a variáveis de ambiente.

---

### Modo desenvolvimento com watch

```bash
npm run start:watch
```

Reinicia automaticamente o servidor ao detectar alterações nos arquivos.

---

### Build da aplicação

```bash
npm run dist
```

Compila o projeto TypeScript para JavaScript utilizando **TSUP**.

---

### Executar versão compilada (produção)

```bash
npm run start:dist
```

Executa o projeto compilado na pasta `dist`.

---

# 📂 Estrutura do Projeto

Exemplo de organização da aplicação:

```
src
 ├── controllers
 ├── routes
 ├── services
 ├── models
 └── server.ts
```

Descrição:

* **controllers** → recebem as requisições HTTP
* **services** → regras de negócio da aplicação
* **routes** → definição das rotas da API
* **models** → estrutura de dados
* **server.ts** → inicialização do servidor

---

# 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto.

Exemplo:

```
PORT=3000
```

---

# 📡 Exemplo de Endpoint

Exemplo de requisição:

```
GET /teams
```

Resposta esperada:

```json
[
  {
    "id": 1,
    "name": "Real Madrid"
  }
]
```

---

# 📚 Objetivo do Projeto

Este projeto foi desenvolvido com foco em **prática de desenvolvimento backend utilizando Node.js e TypeScript**, explorando:

* criação de APIs REST
* organização de código em camadas
* tipagem com TypeScript
* estruturação de projetos backend

---

# 📄 Licença

Este projeto está sob a licença **ISC**.

---

