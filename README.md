# Meu Site Portfólio (eduardoriva.com)

Este repositório contém o código-fonte do meu portfólio pessoal, `eduardoriva.com`.

É uma Single Page Application (SPA) construída com **React** e **Vite**.

## O Papel DevSecOps (Projeto 1)

Mais do que apenas um site, este repositório serve como o **"Projeto 1: O Pipeline Guardião"** do meu portfólio DevSecOps. O seu objetivo é demonstrar a integração de segurança diretamente no ciclo de desenvolvimento (CI/CD).

### 1. Integração Contínua (CI) & Segurança

Este projeto é protegido por um pipeline de CI/CD usando **GitHub Actions** que executa dois trabalhos principais de segurança a cada `push` ou `pull request`:

* **SAST (Static Analysis):** O `CodeQL` (nativo do GitHub) escaneia o código-fonte em busca de vulnerabilidades, como XSS ou falhas de injeção.
* **SCA (Software Composition Analysis):** O `Snyk` (ferramenta externa) escaneia as dependências (`node_modules`) em busca de bibliotecas vulneráveis conhecidas.

➡️ **[Clique aqui para ver os workflows do pipeline rodando](./actions)**

### 2. Implantação Contínua (CD)

Os arquivos estáticos deste projeto (gerados com `npm run build`) são o "artefato" de deploy para o meu **Projeto 2: A Fortaleza Automatizada**.

Um playbook Ansible separado é responsável por:
1.  Fazer o `build` desta aplicação.
2.  Copiar os arquivos da pasta `dist/` para a VPS.
3.  Garantir que o Nginx esteja servindo o conteúdo corretamente.

➡️ **[Veja o playbook de deploy aqui](https://github.com/rivaed/devsecops-ansible-hardening)**

---

## Como Rodar Localmente

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/rivaed/portfolio-react-spa.git](https://github.com/rivaed/portfolio-react-spa.git)
    ```
2.  Entre na pasta e instale as dependências:
    ```bash
    cd portfolio-react-spa
    npm install
    ```
3.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
