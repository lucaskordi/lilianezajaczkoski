# Configuração do Vercel KV

Para que o sistema de edição funcione no Vercel, você precisa configurar o Vercel KV (Redis).

## Passos para configurar:

1. **No dashboard do Vercel:**
   - Acesse seu projeto no Vercel
   - Vá em "Storage" no menu lateral
   - Clique em "Create Database"
   - Selecione "KV" (Redis)
   - Crie o banco de dados

2. **Variáveis de ambiente:**
   O Vercel KV automaticamente adiciona as variáveis de ambiente necessárias:
   - `KV_URL`
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
   - `KV_REST_API_READ_ONLY_TOKEN`

3. **Puxar variáveis de ambiente localmente:**
   
   **IMPORTANTE:** Este comando é executado no seu terminal local (não no dashboard do Vercel).
   
   Abra o terminal na pasta do projeto e execute:
   ```bash
   vercel env pull .env.development.local
   ```
   
   Se você não tiver a CLI do Vercel instalada, instale primeiro:
   ```bash
   npm i -g vercel
   ```
   
   Depois faça login (se necessário):
   ```bash
   vercel login
   ```
   
   Isso criará um arquivo `.env.development.local` com as variáveis de ambiente do Vercel.

4. **Instalar dependências:**
   ```bash
   npm install
   ```

5. **Testar localmente:**
   ```bash
   npm run dev
   ```

6. **Deploy:**
   Faça o deploy normalmente. O Vercel KV já estará configurado automaticamente em produção.

## Nota:
- O arquivo `.env.development.local` está no `.gitignore` e não será commitado
- As variáveis de ambiente são automaticamente disponibilizadas em produção no Vercel
- Você pode testar o sistema de edição localmente após puxar as variáveis de ambiente

