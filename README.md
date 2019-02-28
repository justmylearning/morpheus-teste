#### Testando Backend
Instalando as dependencias do projeto
```sh
npm install --dev
```
Para executar os testes unitários é preciso ter o MOCHA instalado caso contrário executar:
```sh
npm install -g mocha
```
Após instalar, executar na pasta raiz do projeto:
```sh
mocha
```

#### Subindo aplicação backend em produção
Instalando as dependencias do projeto:
```sh
npm install --production
```
Iniciando aplicação
```sh
npm start
```
O servidor estará disponível em http://localhost:3000


#### Subindo aplicação frontend (dev)
Instalando as dependencias do projeto:
```sh
npm install
```
Para executar a aplicação é necessário ter o Angular6+ instalado, caso contrario executar:
```sh
npm install -g @angular/cli
```
Iniciando aplicação
```sh
ng serve
```
A aplicação estará disponível em http://localhost:4200