 # BOT de Atendimento para Telegram

Este é um BOT de atendimento desenvolvido para responder mensagens no Telegram. O BOT foi criado como parte do projeto da disciplina de Desenvolvimento Web II.

## Funcionalidades

- **Horário Comercial:** Durante o horário comercial (09:00 às 18:00), o BOT responde com um link para o site da empresa.
- **Fora do Horário Comercial:** Fora do horário comercial, o BOT solicita o email do usuário para que a empresa possa entrar em contato posteriormente.

## Configuração

Para executar este BOT localmente, siga as instruções abaixo:

1. Instale as dependências:
   npm install

2. Crie um arquivo `.env` na raiz do projeto e adicione seu token do BOT do Telegram:
   TOKEN=seu_token_aqui

3. Execute o BOT:
   node index.js

4. Interaja com o BOT no Telegram.
Lembre-se de substituir `seu_token_aqui` pelo token do seu BOT do Telegram.
Esse README fornece informações básicas sobre como configurar e executar o projeto localmente e inclui uma nota sobre os arquivos ignorados. Você pode adicionar mais informações ou detalhes conforme necessário para o seu projeto específico.