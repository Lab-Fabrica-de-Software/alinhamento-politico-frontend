# 🚀  Alinhamento Político
Uma plataforma digital que conecta eleitores e políticos, permitindo o posicionamento em temas relevantes e destacando o nível de alinhamento entre ambos.

## 📖 Visão Geral
- **Problema e Objetivo:** A falta de transparência e conexão entre eleitores e políticos dificulta o entendimento das prioridades sociais. O objetivo é criar uma plataforma que permita interação direta, posicionamento em temas e análise de alinhamento político.

- **Público-Alvo e Benefícios:** Voltada para eleitores, políticos e organizações, oferece maior transparência, engajamento e insights estratégicos sobre as preferências da sociedade.

## 📋 Funcionalidades Principais
- ✅ **Cadastro e Autenticação:** Registro de eleitores e políticos com verificação de identidade.
- ✅ **Levantamento e Agrupamento de Temas:** Eleitores sugerem temas organizados por categorias (economia, saúde, segurança, educação, diversidade etc.).
- ✅ **Posicionamento Público:** Eleitores e políticos podem se posicionar a favor ou contra os temas levantados.
- ✅ **Análise de Alinhamento:** Algoritmos calculam o grau de alinhamento entre eleitores e políticos.
- ✅ **Visualização de Dados:** Dashboards interativos mostram temas mais relevantes por região e categoria.

## 🛠️ Tecnologias Utilizadas
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)


## 📦 Bibliotecas Principais  
- [ng-bootstrap](https://ng-bootstrap.github.io/) → Biblioteca de componentes UI baseada em Bootstrap para Angular.

## 📂 Estrutura do Projeto
```bash
.
├── .storybook/           # Configuração do Storybook
├── .vscode/              # Configurações do VS Code
├── docs/                 # Documentação do projeto
├── public/               # Recursos estáticos (favicon, imagens)
├── src/                  # Código fonte da aplicação
│   ├── app/              # Aplicação Angular principal
│   │   ├── core/         # Funcionalidades centrais (singleton)
│   │   │   ├── models/   # Interfaces e modelos de dados
│   │   │   └── shared/formatters # Classes que convertem dados entre diferentes formatos
│   │   ├── shared/       # Módulos, componentes e utilitários compartilhados
│   │   │   ├── components/   # Componentes reutilizáveis
│   │   │   └── shared.module.ts # Módulo compartilhado
│   │   ├── modules/      # Módulos funcionais da aplicação
│   │   │   └── debate/   # Módulo de debates
│   │   │       ├── components/  # Componentes do módulo
│   │   │       ├── pages/       # Páginas do módulo
│   │   │       ├── debate.module.ts # Módulo de debate
│   │   │       └── debate-routing.module.ts # Rotas do módulo
│   │   ├── app.component.*      # Componente raiz
│   │   ├── app.module.ts        # Módulo principal
│   │   └── app-routing.module.ts # Configuração de rotas principais
│   ├── index.html        # Página HTML principal
│   ├── main.ts          # Ponto de entrada da aplicação
│   └── styles.css       # Estilos globais
├── angular.json         # Configuração do Angular CLI
├── package.json         # Dependências e scripts do projeto
├── tsconfig.json        # Configuração do TypeScript
└── README.md           # Este arquivo
```

## ⚙️ Instalação e Uso

### 1. Clone o repositório
```bash

git clone https://github.com/Lab-Fabrica-de-Software/alinhamento-politico-frontend.git

```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto
**Development server**
```bash
ng serve
```
> O servidor será iniciado em: [http://localhost:4200/](http://localhost:4200/)

**Storybook**
```bash
ng run alinhamento_front:storybook
```


> O storybook será iniciado em: [http://localhost:6006/](http://localhost:6006/)

Lab-Fábrica de Software • 2025