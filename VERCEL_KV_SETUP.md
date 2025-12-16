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

3. **Instalar dependências:**
   ```bash
   npm install
   ```

4. **Deploy:**
   Faça o deploy normalmente. O Vercel KV já estará configurado automaticamente.

## Nota:
Se você estiver testando localmente, o Vercel KV também funciona. As variáveis de ambiente serão carregadas automaticamente do seu projeto Vercel.

