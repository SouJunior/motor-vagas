

<a id="Motor de vagas da SouJunior"></a>

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=2088f2&style=for-the-badge)

# <h1 align="center"> [![Typing SVG](<https://readme-typing-svg.herokuapp.com/?color=ffffff&size=35&center=true&vCenter=true&width=1000&lines=Esse+é+o+nosso+webscrapper+de+vagas!>)](https://git.io/typing-svg) </h1>

<img width=150% src="https://capsule-render.vercel.app/api?type=waving&width=150%&color=2088f2&fontColor=ffffff&height=300&section=header&text=Sou%20Junior&fontSize=90&animation=fadeIn&fontAlignY=38&desc=Webscrapper%20opensource%20para%20disponibilizar%20vagas%20para%20os%20usuários%20do%20Portal%20de%20Vagas!&descAlignY=61&descAlign=52" />

## <p align="center"> Visitantes: <img alingn="center"  src="https://profile-counter.glitch.me/SouJunior/count.svg" /></p>

---

## Menu

### [Como Instalar o git bash](#como_instalar_o_git_bash)

### [Abrir e rodar o projeto](#abrir_e_rodar_o_projeto)

### [Acesso ao projeto](#acesso_ao_projeto)

### [Rodando Localmente](#rodando_localmente)

### [Rodando com Docker](#instalando_o_docker)

### [Instalando o Insomnia](#instalando_o_insomnia)

### [Stack Utilizada](#stack_utilizada)

### [Equipe Back-end](#equipe_do_backend)

---

<a id="como_instalar_o_git_bash"></a>

## Como instalar o Git Bash <img align="center" width="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

O Git Bash faz parte do pacote Git for Windows, que é oferecido no próprio site oficial do Git, em: https://git-scm.com/download/win

---

<a id="abrir_e_rodar_o_projeto"></a>

## 🛠️ Abrir e rodar o projeto

1. Instalar o Git Bash em sua máquina. <br>
2. Criar uma pasta do projeto em seu computador. <br>
3. Clique com o botão direito do mouse na pasta e selecione o Git bash. <br>
4. Após abrir a janela, vamos dar início no clone do projeto.<br>

## ❗ Atenção, esse procedimento deve ser feito somente após o git Bash estar instalado em sua máquina!

1 - Faça um fork do projeto no seu Github

2 - Clone o projeto na janela que abriu com o seguinte comando:

```bash
  git clone https://github.com/seuNomeDeUsuario/motor-vagas.git
```

Após isso pode fechar a janela!

---

## 🐳 Como instalar o PostgreSQL no Windows

1.Para começar a instalação do PostgreSQL faremos o download diretamente do site oficial, a partir desse link.

Link: https://www.postgresql.org/download/windows/


2.Feito o download, em seguida abra o instalador e verá a seguinte tela:
![image](https://user-images.githubusercontent.com/95653155/191254605-8d8ef061-6f28-48a7-912b-7e7b5586d27a.png)

Clique em “Next” e na tela seguinte escolha o local onde a instalação será feita:

3.Atenção! Se você escolher um local diferente do padrão será preciso criar uma pasta e selecioná-la, pois a instalação deve ser feita em uma pasta vazia.

![image](https://user-images.githubusercontent.com/95653155/191254739-a78bcc9b-2e5e-486b-98ba-ccfb009ab638.png)

Feito isso, basta clicar em “Next” e então na tela seguinte faremos a seleção de componentes. Recomendo deixar tudo marcado mesmo, sem problemas aqui.

![image](https://user-images.githubusercontent.com/95653155/191254964-43073f6c-25b8-4dff-a070-b1b3a714338a.png)

Em seguida, iremos para a tela de seleção da pasta onde os bancos de dados ficarão armazenados. É uma pasta diferente da pasta de instalação. Você pode colocar dentro da pasta de instalação, mas em outra pasta separada lá dentro, como é feito por padrão.

Após clicar em “Next”, veremos a tela de seleção de senha do superuser do banco. Lembre-se de anotar essa senha para não perder ou esquecer!

![image](https://user-images.githubusercontent.com/95653155/191255081-197c3561-49e7-4c6c-adae-5fecdc2e244d.png)

Após clicar em “Next”, na próxima tela você vai decidir qual porta padrão o servidor do banco vai usar. Você pode usar a porta padrão, mas pode escolher outra, desde que não entre em conflito com outras portas que estejam sendo usadas na sua máquina.

![image](https://user-images.githubusercontent.com/95653155/191255191-f60810ff-d24f-4c62-9799-f127f9c9a283.png)

Após clicar em “Next”, você será perguntado sobre o cluster do banco. Se você não sabe exatamente o que isso significa, fique tranquilo, basta deixar no default e clicar em “Next”.

![image](https://user-images.githubusercontent.com/95653155/191255244-8b2bed49-fa27-4267-b869-554b03eb8b3f.png)

Nessa tela e na próxima, teremos apenas um resumo das configurações feitas até aqui. Basta clicar em “Next” e prosseguir com a instalação.

Ao concluir a instalação, vai aparecer a opção para abrir o Stack Builder, para baixar quaisquer conteúdos adicionais. Por enquanto isso não é necessário, então eu desmarquei a opção.

![image](https://user-images.githubusercontent.com/95653155/191255468-fceb0d98-026e-471e-887f-52794a010b0c.png)

Pronto, instalação do PostgreSQL finalizada com sucesso!


<a id="instalando_o_insomnia"></a>

## 🛠️ Instalando o insomnia

Link para baixar: https://insomnia.rest/download

1. Agora basta importar o arquivo `Documentação_Sou_Junior.json` que está na raiz do projeto que você terá acesso a todos as rotas.

![image](https://user-images.githubusercontent.com/81826043/190295195-7b4ced82-7677-49f3-a789-c3f6a6f7e108.png)


2. Após fazer a importação, colar o link do navegador no local mostrado:

3. Agora basta navegar entre as pastas com as rotas do nossa API

![image](https://user-images.githubusercontent.com/81826043/190295785-4318101f-b890-444c-a007-526cdc55aa95.png)

4. Para editar a porta da url basta seguir os passos abaixo

![image](https://user-images.githubusercontent.com/81826043/190295982-87514dd1-3ad2-4496-a077-d35b413bf310.png)

## ❗ Atenção, é valido lembrar que a porta do link vai se basear no computador e na porta que o navegador está usando!

---

<a id="acesso_ao_projeto"></a>

## 📁 Acesso ao projeto

Entre na pasta do projeto pelo Visual Studio, Abra o terminal do visual Studio e
vá para o diretório do projeto com o comando:

```bash
  cd motor-vagas
```

Instale as dependências

```bash
  npm i
```

Feito a instalação dos pacotes basta renomear o arquivo `.env.example` para `.env` e preencher com as suas informações do banco de dados, no caso estamos usando o PostgreSQL

Caso precise das informações para preencher o .env, pergunte a alguém da equipe de backend.

Arquivo .env

```bash
# TYPEORM_CONNECTION
DATABASE_HOST= #Host name do seu banco
DATABASE_PORT=5432 #A porta geralmente é 5432, se no seu caso for outra porta basta alterar
DATABASE_USER= # Seu usuario do banco postgress
DATABASE_PASS= # Sua senha do banco postgress
DATABASE_NAME= # Sua database do banco de dados.
```

---

<a id="rodando_localmente"></a>

## 🌐 Rodando localmente

Inicie o servidor

```bash
  npm run dev
```

---
  
  <a id="instalando_o_docker"></a>

## 🐳  Instalando o Docker

1.Install Docker Desktop on Mac: https://docs.docker.com/desktop/install/mac-install/

2.Install Docker Desktop on Windows: https://docs.docker.com/desktop/install/windows-install/

3.Install Docker Desktop on Linux: https://docs.docker.com/desktop/install/linux-install/

Agora você pode instalar tudo o que precisa para executar o Windows Subsystem for Linux (WSL) inserindo este comando em um PowerShell administrador ou Windows Command Prompt e, em seguida, reiniciando sua máquina.
  
`wsl --install`

Após a instalação do Wsl, vamos até a pasta do projeto e rodar o comando

`docker-compose up -d`


O projeto estará rodando em:

`localhost:3333`
  
---

<a id="stack_utilizada"></a>

## Como utilizar

Este webscrapper está em forma de api, portanto faz sua função através de requisições. As mesmas deverão ser feitas temporariamente localmente, pois o webscrapper dentro de container docker não funciona nos sites de hospedagens back-end gratuítos que encontramos, entretanto hospedamos essa api no render para que possamos nos conectar a ele e ao banco de dados e fazer a integração para outros serviços. (como o próprio portal de vagas):

Link da api no render: https://motor-vagas.onrender.com/

<h3> Coletar vagas (POST): <h3/>

	 URL: http://host:port/job
	 BODY:
	  [
	  "locations": Array de strings (aceita um único item no array),
	  "keyword": String
	  ]
OBS: Se for procurar por vagas brasileiras no item "locations", insira "brazil", pois é a única forma que a url do linkedin (fonte de onde pegamos as vagas) reconhece como vagas daqui.

<h3> Exemplo: <h3/>

	 URL: http://host:port/job
	 BODY:
	  [
	  "locations": ["brazil"],
	  "keyword": python
	  ]
	  return: "Jobs saved successfully"

 <h3> Listar vagas (GET): <h3/>

	 URL: http://host:port/job

	 	  return:
	  [
		{
	  		"id": "123",
			"title": "desenvolvedor android java jr",
			"company": "Nome da compania",
			"location": "Belo Horizonte, Minas Gerais, Brazil",
			"time": "6 hours ago",
			"link": "link para a vaga",
			"jobName": "desenvolvedor-android-java-jr-at",
			"created_date": "data de criaçao",
			"visa": false,
			"description": "",
			"source": "Linkedin"
		},
	  ]
 
 <h3> Deletar vagas (DELETE): <h3/>
 
    URL: http://host:port/job
 ---
 
( OPCIONAIS )
<h3> Coletar nomes de empresas do site relocate.me (POST): <h3/>

	 URL: http://host:port/company/relocateMe

 <h3> Coletar nomes de empresas do site siaExplains (POST): <h3/>

	 URL: http://host:port/company/siaExplains

---

## Stack utilizada ⚙

**Linguagens:**
<img align="center" alt="TypeScript" src="https://img.shields.io/badge/-Typescript-blue?style=for-the-badge&logo=typescript&message=TypeScript&color=blue&logoColor=white">

**Frameworks:**
<img align="center" alt="Node" src="https://img.shields.io/badge/Node-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img align="center" alt="Express" src="https://img.shields.io/badge/-Express-pink?style=for-the-badge&logo=express&message=Express&color=rgb(238,%2058,%2084)"> <img align="center" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">

**Ferramentas:**
<img align="center" src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
<img align="center" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="Visual Studio">
<img align="center" src="https://img.shields.io/badge/-Docker-blue?style=for-the-badge&logo=docker&logoColor=white" alt="docker">

---

<a id="equipe_do_backend"></a>

## Head 🙎🏻‍♂️
| [<img src="https://avatars.githubusercontent.com/wolwerr" width=115><br><sub>Ricardo Machado</sub>](https://github.com/wolwerr) |
| :----------------------------------------------------------------------------------------------------------------------------: |

## Devs 👨‍💻👨‍💻

| [<img src="https://avatars.githubusercontent.com/PatrickOtero" width=115><br><sub>Patrick Otero</sub>](https://github.com/PatrickOtero) | [<img src="https://avatars.githubusercontent.com/MikaelMelo1" width=115><br><sub>Mikael Melo</sub>](https://github.com/MikaelMelo1)
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------:

## Mentores 🙎🏻‍♂️

| [<img src="https://avatars.githubusercontent.com/rigonlucas" width=115><br><sub>Lucas Rigon</sub>](https://github.com/rigonlucas) | 
| :-----------------------------------------------------------------------------------------------------------------------------: |
## Idealizador do projeto 🙎🏻‍♂️

| [<img src="https://avatars.githubusercontent.com/u/287287?v=4" width=115><br><sub>Wouerner</sub>](https://github.com/wouerner) |
| :----------------------------------------------------------------------------------------------------------------------------: |

---

## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio do nosso [Discord](https://discord.com/invite/soujunior-community-759176734460346423). Ou fazendo uma [contribuição](#contribuição).

## Contribuição

Contribuições são sempre bem-vindas!

## Usado por

Esse projeto é usado pela [SouJunior](https://github.com/SouJunior).
