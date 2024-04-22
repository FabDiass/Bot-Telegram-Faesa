# BOT Telegram Atendimento

1. Clone este repositório:
   
   git clone <URL_DO_REPOSITORIO>
   
2. Navegue até o diretório do projeto:
 
   cd BOT_TELEGRAM

3. Instale as dependências:
  
   npm install
  
4. Configure as variáveis de ambiente:

   - Crie um arquivo `.env` na raiz do projeto

   - Adicione as seguintes variáveis ao arquivo `.env`e logo após coloque sua URL DO DATABASE
   
     TOKEN=TOKEN_AQUI
     DATABASE_URL=URL_DATABASE_URL

   Substitua `TOKEN_AQUI` pelo token do seu BOT no Telegram 

Para iniciar o BOT, execute o seguinte comando:
npm run build 

e logo depois 

npm start
