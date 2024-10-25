# Projeto Ionic Angular - Extrato Financeiro
Este projeto foi desenvolvido com o objetivo de criar uma aplicação em Ionic Angular para consulta de extrato financeiro. Ele exibe detalhes como número de documento, data de vencimento, descrição e valor de coparticipação dos lançamentos. O projeto utiliza componentes standalone do Angular, simplificando a estrutura e melhorando a performance.

# Tecnologias Utilizadas
Ionic Framework: Fornece ferramentas para o desenvolvimento de aplicações híbridas.
Angular Standalone Components: Componentes independentes, que simplificam a estrutura do projeto.
TypeScript: Linguagem utilizada para adicionar tipagem ao JavaScript.
Ionicons: Ícones utilizados na interface do usuário.
RxJS: Utilizado para manipulação de streams de dados, especialmente na comunicação com a API.

# Pré-requisitos
Node.js (recomendado: versão 14 ou superior)
Ionic CLI: Para instalar, execute: npm install -g @ionic/cli

# Instalação
Clone o repositório e navegue até a pasta do projeto.
Instale as dependências do projeto: npm install

# Executando o Projeto
1. Rodando no Navegador
Para rodar o projeto no navegador (modo desenvolvimento):

ionic serve
O projeto estará disponível em http://localhost:8100.

2. Rodando em Dispositivo Físico (Android/iOS)
Android
Conecte um dispositivo Android via USB e ative o modo de depuração USB. Em seguida, execute:

ionic capacitor add android
ionic capacitor open android
Isso abrirá o Android Studio, onde você poderá executar o projeto no dispositivo conectado ou em um emulador Android.

iOS
Para rodar no iOS (apenas em macOS), execute:

ionic capacitor add ios
ionic capacitor open ios
Isso abrirá o Xcode, onde você poderá executar o projeto em um dispositivo iOS conectado ou em um simulador.

Rodando os Testes
O projeto utiliza Jasmine e Karma para testes unitários em Angular.

Para rodar os testes unitários:

ng test
Os testes unitários serão executados no navegador, e você poderá verificar o status dos testes diretamente na interface de relatórios.