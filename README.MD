<br>
<br>
<h1 align="center" >Multilind Servidor de Arquivos</h1>
<br>
<p align="center"><img width="200"src="src/assets/img/multilind.jpg"> </p>
<p align="center"> Servidor para administrar a criação de arquvos de mídia para o aplicativo <strong>Multilind</strong>.</p>
<br>

# Índice

- [Rode o Servidor com Docker](#rode-o-servidor-com-docker)
  - [Dependências](#dependências)
  - [Inicialização do Projeto](#inicialização-do-projeto)

## Rode o Servidor com Docker

### Dependências

Inicialmente, instale localmente as seguintes dependências:

1. Instale o [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/);
2. Instale o [Docker Compose](https://docs.docker.com/compose/install/).

### Inicialização do Projeto

1. Na pasta principal do projeto, construa e inicialize a aplicação com o comando:

```bash
make build
```

ou 

```bash
sudo docker-compose up --build
```

2. O backend estará disponível em: `http://localhost:5000/api/files`.


