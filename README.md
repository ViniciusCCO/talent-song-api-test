# ST IT Cloud -  Talent Song API Test

## Caso

Você é um desenvolvedor backend, e precisa construir uma feature nova para o serviço de streaming de música. Essa nova feature é para guardar as músicas favoritas dos usuários e facilitar o acesso.

Para isso, o sistema precisa de uma feature de autenticação também, pois os usuários precisam realizar o login para **cadastrar** as suas músicas. O usuário tem permissão de **visualizar** apenas as músicas que ele **cadastrou** como favorita. Esse usuário pode realizar a **alteração** ou a **deleção** da música, de sua lista de favoritos.

## Objetivo

Esse teste deve avaliar a qualidade técnica de construção de API's, manipulação com base de dados, otimização de performance, organização e tratamento de erros.

**obs**: Afim de reduzir a complexidade deste teste, a modelagem não necessita de uma listagem de todas as músicas, o usuário vai adicionar a música pelo nome na lista de favoritos.

## :computer: Principais Bibliotecas Utilizadas

<ul>
  <li><b>Express:</b> Responsável por lidar com as rotas.</li>
  <li><b>Jsonwebtoken:</b> Utilizado para criar o token JTW e realizar a autenticação do usuário.</li>
  <li><b>Nodemon:</b> Reinicia a aplicação quando ocorre alguma alteração.</li>
  <li><b>Prisma:</b> Baseado nos ORMs, lida com o banco de dados.</li>
  <li><b>Dotenv:</b> Permite o acesso as variáveis ambiente.</li>
</ul>

## :rocket: Como Executar o Projeto

<p>O projeto possui dois diretórios principais:</p>
<ul>
  <li><b>src:</b> Contém todo o código da aplicação.</li>
  <li><b>prisma:</b> É onde ficam as configurações do banco de dados.</li>
</ul>

<p>💡A porta da aplicação está configurada como http://localhost:3333</p>

### Pré-requisitos

<p>Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
<a href="https://git-scm.com">Git</a>, <a href="https://nodejs.org/">Node.js</a>, <a href="https://docs.docker.com/get-docker/">Docker</a> e o <a href="https://yarnpkg.com/">Yarn</a>.
Além disto é bom ter um editor para trabalhar com o código como o <a href="https://code.visualstudio.com/">VSCode</a>.</p>

### 🎲 Rodando a Aplicação

```bash
# Clone este repositório
$ git clone https://github.com/ViniciusCCO/talent-song-api-test.git

# Acesse a pasta do projeto no terminal/cmd
$ cd talent-song-api-test

# Instale as dependências
$ yarn install
```

### 💻 Configurando Variáveis Ambientes

<p>É preciso informar duas variáveis ambientes para que a aplicação funcione: A String de conexão para o banco de dados, e o segredo utilizado para tornar a autenticação da aplicação única.</p>
<p>Crie um arquivo chamado ".env" na raiz do projeto, e coloque as seguintes informações:</p>

```
DATABASE_URL="postgresql://root:postgres@localhost:5432/postgres"

JWT_SECRET=b82cb6c68b0892c336efc8b927739bb0
```

### 💻 Continuando Com a Execução

```bash
# Suba o banco de dados PostgreSQL com o Docker
$ docker-compose -f ./docker-compose-postgres.yml up -d

# Crie as tabelas no banco de dados
$ yarn prisma migrate dev

# Execute a aplicação (O servidor inciará na porta:3333)
$ yarn dev

# Execute o comando abaixo para gerenciar o banco de dados pelo Prisma Studio
$ yarn prisma studio
```
