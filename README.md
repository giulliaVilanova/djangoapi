Documentação da API
1. Visão Geral
Esta API, baseada em Django, permite o gerenciamento de dados de usuários, incluindo nome, idade, CPF, endereço, status, senha e data de criação.

2. Aplicação
2.1. Configuração da Aplicação
Arquivo: apps.py
Classe: ApiConfig
Define o nome da aplicação como api.
Configura o campo default_auto_field como django.db.models.BigAutoField.
2.2. Modelos
2.2.1. Modelo User
Arquivo: models.py
Campos:
name: Nome do usuário (máximo de 100 caracteres).
age: Idade do usuário (inteiro).
cpf: CPF do usuário (máximo de 14 caracteres).
address: Endereço do usuário (máximo de 100 caracteres).
status: Status do usuário (booleano).
creation_date: Data de criação do registro (definida automaticamente).
password: Senha do usuário (máximo de 128 caracteres). A senha é armazenada de forma criptografada utilizando make_password antes de ser salva no banco de dados.
2.3. Serializadores
2.3.1. UserSerializer
Arquivo: serializers.py
Descrição: Serializa o modelo User, incluindo todos os campos.
2.4. URLs
Arquivo: urls.py
Rotas:
users/: Rota para listar e criar usuários. (Classe UserListCreate)
users/<int:pk>/: Rota para recuperar, atualizar ou deletar um usuário específico. (Classe UserRetrieveUpdateDestroy)
2.5. Views
2.5.1. UserListCreate
Classe: UserListCreate
Funções:
queryset: Retorna todos os usuários.
serializer_class: Define o serializador como UserSerializer.
perform_create: Salva um novo usuário.
delete: Remove todos os usuários.
2.5.2. UserRetrieveUpdateDestroy
Classe: UserRetrieveUpdateDestroy
Funções:
queryset: Retorna todos os usuários.
serializer_class: Define o serializador como UserSerializer.
lookup_field: Campo de busca definido como pk (chave primária).
2.5.3. UserList
Classe: UserList
Funções:
get: Retorna uma lista de usuários filtrados pelo nome (parâmetro opcional) ou todos os usuários se nenhum nome for especificado.
3. Configurações do Projeto
3.1. Configuração Geral
Arquivo: settings.py

Banco de Dados: PostgreSQL

NAME: postgres
USER: postgres
PASSWORD: postgres
HOST: localhost
PORT: 5432
Aplicativos Instalados:

django.contrib.admin
django.contrib.auth
django.contrib.contenttypes
django.contrib.sessions
django.contrib.messages
django.contrib.staticfiles
api
rest_framework
corsheaders
3.2. Configurações de Middleware
Middleware:
corsheaders.middleware.CorsMiddleware
django.middleware.security.SecurityMiddleware
django.middleware.common.CommonMiddleware
django.middleware.csrf.CsrfViewMiddleware
django.contrib.auth.middleware.AuthenticationMiddleware
django.contrib.messages.middleware.MessageMiddleware
django.middleware.clickjacking.XFrameOptionsMiddleware
3.3. URLs do Projeto
Arquivo: urls.py
Rota Principal: Inclui as URLs da aplicação api.
4. Deploy e Configurações Adicionais
ASGI: Configurado em asgi.py.
WSGI: Configurado em wsgi.py.