# CRUD de Produtos

Neste projeto, foi desenvolvido uma aplicação de CRUD (Create, Read, Update, Delete) de produtos, utilizando uma arquitetura desacoplada entre o frontend e o backend. O frontend foi desenvolvido em **Angular**, utilizando **TypeScript** como linguagem de programação, enquanto o backend foi desenvolvido em **PHP Laravel**. O banco de dados utilizado foi o **PostgreSQL**.

## Pré-requisitos

Antes de começar, certifique-se de ter atendido aos seguintes requisitos:

- **Node.js e npm:** Certifique-se de ter o Node.js e o npm (normalmente instalados com o Node.js) instalados no seu sistema. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

- **Angular CLI:** O Angular CLI é necessário para desenvolver e construir o frontend da aplicação. Você pode instalá-lo globalmente usando o seguinte comando:

```bash
npm install -g @angular/cli
```

- **Composer:** O Composer é um gerenciador de dependências para o PHP. Certifique-se de tê-lo instalado no seu sistema. Você pode obtê-lo em [getcomposer.org](https://getcomposer.org/download/).

- **PHP:** Certifique-se de ter o PHP instalado no seu sistema.

- **Laravel:** Você precisará do Laravel instalado globalmente para o backend da aplicação. Você pode instalá-lo usando o Composer:

```bash
composer global require laravel/installer
```

- **PostgreSQL:** Você deve ter um servidor PostgreSQL configurado e em execução. Você pode instalá-lo em [postgresql.org](https://www.postgresql.org/download/).

## Configuração
Siga estas etapas para configurar o projeto:

### Passo 1: 
- **Clone o repositório:** Clone este repositório para o seu ambiente de desenvolvimento local e entre no diretótio.

```bash
git clone https://github.com/luclopesr/crudProdutos.git
cd seu-projeto
```

### Passo 2:
- **Instale as dependências do frontend:** Navegue até o diretório do frontend e instale as dependências do Angular.

```bash
cd frontend
npm install
```

### Passo 3:
- **Instale as dependências do backend:** Navegue até o diretório do backend (Laravel) e instale as dependências do Composer.

```bash
cd backend
composer install
```

### Passo 4:
- **Criação do Banco de Dados:** Crie um banco de dados vazio chamado `inventario`. Você pode criar usando uma ferramenta de gerenciamento de banco de dados, como o pgAdmin, ou por meio da linha de comando. Para criar o banco de dados usando a linha de comando, siga os passos abaixo:
    - Abra um terminal ou prompt de comando.
    - Use o utilitário createdb ou createdb.exe (dependendo do seu sistema operacional) para criar o banco de dados. O comando pode ser semelhante a este:

```bash
createdb inventario
```

Isso criará um banco de dados vazio chamado `inventario`.

- **Configurações do banco de dados:** Configure as informações de conexão com o PostgreSQL no arquivo .env no diretório do backend.

```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=inventario
DB_USERNAME=seu-usuario    # Altere este valor (padrão: "postgres")
DB_PASSWORD=sua-senha      # Altere este valor
```

Substitua `seu_usuario` e `sua_senha` pelas informações corretas de acesso ao PostgreSQL.

### Passo 5:
- **Executar migrações do banco de dados:** Ainda dentro do diretótio `backend`, execute as migrações do Laravel para criar as tabelas no PostgreSQL.

```bash
php artisan migrate
```

### Passo 6:
- **Iniciar o servidor backend:** Inicie o servidor Laravel.

```bash
php artisan serve
```

## Rodando a Aplicação
Após a configuração, você pode iniciar a aplicação com os seguintes comandos:

- **Inicie o servidor de desenvolvimento Angular:** No diretório do frontend (`cd ../frontend`), execute o seguinte comando:

```bash
ng serve
```
ou
```bash
npm start
```
Isso iniciará o servidor de desenvolvimento Angular. Acesse a aplicação em [http://localhost:4200/](http://localhost:4200/) no seu navegador.

- **Acesso à API:** Acesse a API Laravel em [http://localhost:8000/](http://localhost:8000/). Certifique-se de usar os endpoints corretos em suas solicitações HTTP para interagir com a API.

