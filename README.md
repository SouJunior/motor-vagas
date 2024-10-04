

<a id="Motor de vagas da SouJunior"></a>

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=2088f2&style=for-the-badge)

# <h1 align="center"> [![Typing SVG](<https://readme-typing-svg.herokuapp.com/?color=ffffff&size=35&center=true&vCenter=true&width=1000&lines=Esse+é+o+nosso+webscrapper+de+vagas!>)](https://git.io/typing-svg) </h1>

<img width=150% src="https://capsule-render.vercel.app/api?type=waving&width=150%&color=2088f2&fontColor=ffffff&height=300&section=header&text=Sou%20Junior&fontSize=90&animation=fadeIn&fontAlignY=38&desc=Webscrapper%20opensource%20para%20disponibilizar%20vagas%20para%20os%20usuários%20do%20Portal%20de%20Vagas!&descAlignY=61&descAlign=52" />

## <p align="center"> Visitantes: <img alingn="center"  src="https://profile-counter.glitch.me/SouJunior/count.svg" /></p>

---

## Menu

### [Ambiente de Desenvolvimento](#ambiente_de_desenvolvimento)

### [Como Instalar o git bash](#como_instalar_o_git_bash)

### [Abrir e rodar o projeto](#abrir_e_rodar_o_projeto)

### [Acesso ao projeto](#acesso_ao_projeto)

### [Instalando o Docker](#instalando_o_docker)

### [Rodando Localmente](#rodando_localmente)

### [Documentação/Como utilizar](#documentacao)

### [Stack Utilizada](#stack_utilizada)

### [Equipe Back-end](#equipe_do_backend)

---

## Ambiente de Desenvolvimento {#ambiente_de_desenvolvimento}

Este projeto foi desenvolvido e testado nas seguintes versões de software e ferramentas. Para garantir compatibilidade e funcionamento adequado, utilize as versões listadas ou superiores, exceto quando especificado.

### Node.js

- **Versão Suportada**: `v20.11.x` ou superior

### TypeScript

- **Versão Suportada**: `v4.5.x`

### VSCode

- **Versão Suportada**: `v1.93.x` ou superior

### Plugins Recomendados (VSCode)

1. **ESLint**  
   - Versão: `v3.0.x`
   - Descrição: Ajuda a manter o código consistente, identificando problemas de estilo e erros.
2. **Prettier - Code Formatter**  
   - Versão: `v11.0.x`
   - Descrição: Ferramenta para formatação automática do código, seguindo padrões estabelecidos.
3. **Error Lens**  
   - Versão: `v3.20.x`
   - Descrição: Destaca erros, warnings, e outras mensagens diretamente no código, tornando a correção mais rápida e visual.
4. **GitLens - Git supercharged**  
   - Versão: `v15.5.x`
   - Descrição: Melhora a visualização do histórico de commits e a colaboração em projetos Git.

### Outras Dependências Importantes

- **NPM**: `v10.2.x` ou superior
- **Yarn**: `v1.22.x` ou superior (opcional)
- **Git Bash**: `v5.2.x` ou superior
- **Docker**: `v24.0.x` ou superior

## Como instalar o Git Bash <img align="center" width="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /> {#como_instalar_o_git_bash}  

O Git Bash faz parte do pacote Git for Windows, que é oferecido no próprio site oficial do Git, em: https://git-scm.com/download/win

---

## 🛠️ Abrir e rodar o projeto {#abrir_e_rodar_o_projeto}

1. Instalar o Git Bash em sua máquina. <br>
2. Criar uma pasta do projeto em seu computador. <br>
3. Clique com o botão direito do mouse na pasta e selecione o Git bash.
4. Após abrir a janela, vamos dar início no clone do projeto.<br>

## ❗ Atenção, esse procedimento deve ser feito somente após o git Bash estar instalado em sua máquina

1 - Faça um fork do projeto no seu Github

2 - Clone o projeto na janela que abriu com o seguinte comando:

```bash
  git clone https://github.com/seuNomeDeUsuario/motor-vagas.git
```

Após isso pode fechar a janela!

---

## 📁 Acesso ao projeto {#acesso_ao_projeto}

Entre na pasta do projeto pelo Visual Studio, Abra o terminal do visual Studio e
vá para o diretório do projeto com o comando:

```bash
  cd motor-vagas
```

Instale as dependências

```bash
  npm i
```

Feito a instalação dos pacotes basta copiar o arquivo `.env.example`, renomear a cópia para `.env` e preencher com as informações do banco de dados - o PostgreSQL.

Caso precise das informações para preencher o .env, pergunte a alguém da equipe de backend.

Arquivo .env

```bash
# BASIC_ENVs
PORT= # Porta em que a API irá rodar (ex.: 3000, 8080)

# TYPEORM_CONNECTION
DATABASE_HOST= # Host name do seu banco (ex.: localhost, 127.0.0.1)
DATABASE_USER= # Seu usuario do banco postgres (ex.: postgres)
DATABASE_PASS= # Sua senha do banco postgres (ex.: postgres)
DATABASE_NAME= # Sua database do banco de dados  (ex.: motordb)
```

---
  
## 🐳  Instalando o Docker {#instalando_o_docker}

1.Install Docker Desktop on [Mac](https://docs.docker.com/desktop/install/mac-install/)

2.Install Docker Desktop on [Windows](https://docs.docker.com/desktop/install/windows-install/)

3.Install Docker Desktop on [Linux](https://docs.docker.com/desktop/install/linux-install/)

Agora você pode instalar tudo o que precisa para executar o Windows Subsystem for Linux (WSL) inserindo este comando em um PowerShell administrador ou Windows Command Prompt e, em seguida, reiniciando sua máquina.

```bash
  wsl --install
```
  
---

## 🌐 Rodando localmente {#rodando_localmente}

Para rodar localmente de forma correta, é preciso que uma instância do banco de dados esteja rodando. Iremos iniciar essa instância utilizando Docker. Dentro da pasta principal do projeto, navegue até a pasta `local` e inicie o banco de dados utilizando os seguintes comandos:

```bash
  cd local/
  docker-compose up -d
```

Após o banco de dados ser iniciado corretamente, utilize o seguinte comando para iniciar o servidor local:

```bash
  npm run dev
```

>Caso você deseje executar SQL nesse banco de dados instanciado com docker, você pode rodar o seguinte comando para acessar o terminal do container (Sendo `postgresdb` o nome do container):
>
>```bash
>  docker exec -it postgresdb bash
>```
>
>E o seguinte comando para se conectar ao banco de dados (Sendo `postgres` o nome de usuário e `motordb` o nome do banco de dados):
>
>```bash
>  psql -U postgres -d motordb
>```

---

## 💻 Como utilizar {#documentacao}

Este webscrapper está em forma de api, portanto faz sua função através de requisições. As mesmas deverão ser feitas temporariamente localmente, pois o webscrapper dentro de container docker não funciona nos sites de hospedagens back-end gratuítos que encontramos, entretanto hospedamos essa api no render para que possamos nos conectar a ele e ao banco de dados e fazer a integração para outros serviços. (como o próprio portal de vagas):

Link da api no render: https://motor-vagas.onrender.com/

## 📚 Documentação da API

A documentação interativa com Swagger está disponível em produção na URL:

`https://motor-vagas.onrender.com/docs`

ou em desenvolvimento(caso você esteja rodando o projeto em sua máquina) na URL:

`http://localhost:3333/docs`

### *Vagas (Job)*

#### Retorna todas as vagas salvas

```http
  GET /job
```

##### Query Params

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `filter` | `string` | **Opcional**. Filtro de vagas por título/nome/descrição/empresa |
| `sort` | `string` | **Opcional**. ASC/DESC, Ordena os resultados |

#### Inicia Webscrapper e salva vagas

```http
  POST /job
```

##### Body

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `locations` | `Array<string>` | **Obrigatório**. Array de localizações a serem buscadas. Ex: ["Brazil"] |
| `keyword` | `string` | **Obrigatório**. Palavra chave a ser utlizada para encontrar vagas |
| `description` | `boolean` | **Obrigatório**. Define se irá ou não salvar a descrição da vaga |

#### Exclui vaga pelo ID

```http
  DELETE /job/{id}
```

##### Path params

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. ID de vaga a ser excluída |

#### Retorna o total de vagas salvas

```http
  GET /job/counter
```

### *Empresas (Company)*

#### Seleciona empresas do site [relocateMe](https://relocate.me/companies) e salva

```http
  POST /company/relocateMe
```

#### Seleciona empresas do site [siaExplains](https://siaexplains.github.io/visa-sponsorship-companies/) e salva

```http
  POST /company/siaExplains
```

#### Seleciona as empresas dinamicamente em site baseado no path param e salva

```http
  POST /company/{name}/scrapp
```

##### Path params

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. relocateMe/siaExplains - Nome do site a ser buscado |

## ⚙ Stack utilizada {#stack_utilizada}

**Linguagens:**
<img align="center" alt="TypeScript" src="https://img.shields.io/badge/-Typescript-blue?style=for-the-badge&logo=typescript&message=TypeScript&color=blue&logoColor=white">

**Frameworks:**
<img align="center" alt="Node" src="https://img.shields.io/badge/Node-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img align="center" alt="Express" src="https://img.shields.io/badge/-Express-pink?style=for-the-badge&logo=express&message=Express&color=rgb(238,%2058,%2084)"> <img align="center" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">

**Ferramentas:**
<img align="center" src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"> <img align="center" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="Visual Studio"> <img align="center" src="https://img.shields.io/badge/-Docker-blue?style=for-the-badge&logo=docker&logoColor=white" alt="docker">

---

## Contribuintes {#equipe_do_backend}

### Head 🙎🏻‍♂️
| [<img src="https://avatars.githubusercontent.com/wolwerr" width=115><br><sub>Ricardo Machado</sub>](https://github.com/wolwerr) |
| :----------------------------------------:|

### Devs 👨‍💻👨‍💻

| [<img src="https://avatars.githubusercontent.com/PatrickOtero" width=115><br><sub>Patrick Otero</sub>](https://github.com/PatrickOtero) | [<img src="https://avatars.githubusercontent.com/MikaelMelo1" width=115><br><sub>Mikael Melo</sub>](https://github.com/MikaelMelo1)
:----------------------------------------:|:----------------------------------------:|


### Mentores 🙎🏻‍♂️

| [<img src="https://avatars.githubusercontent.com/rigonlucas" width=115><br><sub>Lucas Rigon</sub>](https://github.com/rigonlucas)
| :----------------------------------------:|

### Idealizador do projeto 🙎🏻‍♂️

| [<img src="https://avatars.githubusercontent.com/u/287287?v=4" width=115><br><sub>Wouerner</sub>](https://github.com/wouerner) |
| :----------------------------------------:|

---

## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio do nosso [Discord](https://discord.com/invite/soujunior-community-759176734460346423). Ou fazendo uma [contribuição](#contribuição).

## Contribuição

Contribuições são sempre bem-vindas!

## Usado por

Esse projeto é usado pela [SouJunior](https://github.com/SouJunior).
