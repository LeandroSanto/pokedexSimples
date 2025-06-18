# 📱 Pokédex Ionic + Angular

Este projeto é uma **Pokédex interativa** desenvolvida com [Ionic Framework](https://ionicframework.com/) e [Angular](https://angular.io/), que consome dados da [PokéAPI](https://pokeapi.co/).

## ✨ Funcionalidades

- 🔍 Listagem dos 151 primeiros Pokémons
- 📋 Visualização detalhada de cada Pokémon
  - Nome
  - Altura
  - Peso
  - Tipos
  - ID
- 📱 Interface responsiva com Ionic Components
- 🚀 Navegação entre telas com Angular Router

## 🧰 Tecnologias Utilizadas

- Ionic Framework (standalone components)
- Angular 17+
- TypeScript
- PokéAPI
- RxJS (para requisições HTTP)
- SCSS

## 🖼️ Demonstração

![pokedex-demo](https://user-images.githubusercontent.com/seu-usuario/demo.gif)

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/pokedex-ionic-angular.git
cd pokedex-ionic-angular
``` 
### 2. Instale as dependências
   
```bash   
npm install
``` 
### 3. Execute a aplicação

```bash
ionic serve
```

 ## 📂 Estrutura do Projeto 
 ```
src/ 
├── app/
│ ├── pages/
│ │ ├── pokemon-list/
│ │ │ ├── pokemon-list.page.ts
│ │ │ ├── pokemon-list.page.html
│ │ │ └── pokemon-list.page.scss
│ │ └── pokemon-detail/
│ │ ├── pokemon-detail.page.ts
│ │ ├── pokemon-detail.page.html
│ │ └── pokemon-detail.page.scss
│ ├── services/
│ │ └── pokeapi.service.ts
│ └── app.routes.ts
├── assets/
├── environments/
│ ├── environment.ts
│ └── environment.prod.ts
├── index.html
├── main.ts
└── styles.scss
```
  
##💡 Ideias Futuras

    Filtro por tipo (ex: água, fogo, planta)

    Paginação ou scroll infinito

    Tela de favoritos

    Versão PWA (Progressive Web App)

##📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Feito com 💖 por Leandro Santo
