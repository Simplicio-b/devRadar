# devRadar 

Este Projeto foi criado durante a [semana Oministack]('https://rocketseat.com.br/week-10/inscricao') evento 100% online da [Rocketseat]('https://rocketseat.com.br/') o objetivo do app é achar outros devs que estejam proximo baseado em suas geolocalização que gostam de tecnologias em comum, o projeto é dividido em 3 pastas backend construido em [nodejs]('https://nodejs.org/en/') e [mongodb]('https://www.mongodb.com/'), front-end web construido com [react]('https://reactjs.org') e mobile com [react-native]('https://facebook.github.io/react-native/').

##### Requisitos 

  * NODE js
  * NPM ou Yarn
  * BD utilizamos um cluster do [AtlasDB]('https://www.mongodb.com/cloud/atlas')

### Como rodar o projeto
  
  * Baixe o Projeto
  * Va até as pastas do mesmo (backend) (web) (mobile)
  * Execute o comando abaixo

```sh
    npm install
```
ou caso prefira use o yarn

```sh
    yarn install
```
### O Backend

O backend é baseado em API a base api que eu estou utilizando é http://localhost:9100/ 
##### Tendo as rotas

**get**  '/devs'
Esta rota retorna todos os devs na base de dados.

**post** '/devs'
Esta rota serve para adicionar um novo dev na base de dados o que a rota exige é

**github_username:**  user do github,
**techs:** tecnilogias de interesse do dev  ,
**latitude:** latitude da localização, 
**longitude:** longitude da localizaçã

caso esteja usando a plataforma web não precisa setar a latitude nem longitude pois a api pega automaticamente.

**get**  '/search'

Esta rota retorna devs baseado em sua localização e tecnologias de interesse é tipo um match  os parametros são:

**latitude:** latitude
**longitude:** longitude
**techs:** tecnologias de interesse podendo ser mais de uma 

**exemplo:** http://localhost:9100/search?latitude=%20-9.66625&longitude=-35.7351&techs=React,%20Vue,%20React-Native

##### Tecnologias e pacotes utilizados (backend) 
&nbsp;
```sh
    axios: 0.19.1
    cors: ^2.8.5,
    express: ^4.17.1,
    mongoose: ^5.8.7
    nodemon: ^2.0.2
```
Também usei o [insominia]('https://insomnia.rest/download/') para testar as rotas.

### O Front-end

![Front-end Image]('https://github.com/Simplicio-b/devRadar/blob/master/readmeimg/web.png)

O front-end foi construido bascimamente com React utilizando a nova api fazendo a utilização de hooks, componentização e a api do navegador para pegar a geolocalização de quem faz uso do app.

##### Tecnologias e pacotes utilizados (front-end) 
&nbsp;
```sh
    axios: 0.19.1
```

#### Mobile em construção ...
