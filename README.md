# Laravel + VueJS + Axios

Exemplo de Full Stack APP utilizando Laravel no Backend, VueJS no Frontend e Axios para fazer as requisições Rest.

Ao clonar o repositório:

**1. Duplicar o arquivo .env.example com o nome .env**

**2. No arquivo .env configurar um banco de dados de sua preferência, exemplo para PostgreSQL:**
+ DB_CONNECTION=pgsql
+ DB_HOST=127.0.0.1
+ DB_PORT=5432
+ DB_DATABASE=meu_banco
+ DB_USERNAME=postgres
+ DB_PASSWORD=minha_senha

**3. Utilizando o terminal executar os seguintes comandos para instalar as dependências:**
```
composer install
```
```
npm install
```
**4. Para criar a estrutura do banco de dados, executar o seguinte comando:**
```
php artisan migrate
```
**5. Para popular a tabela do banco com dados fake, executar o seguinte comando:**
```
php artisan db:seed
```
**6. Para compilar a aplicação, executar o seguinte comando:**
```
npm run dev
```
**7. Para servir a aplicação, executar o seguinte comando:**
```
php artisan serve
```
**8. A aplicação estará disponível em:**
```
http://localhost:8000
```
