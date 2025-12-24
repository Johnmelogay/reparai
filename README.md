# Reparaí v0.3

Bem-vindo ao repositório do **Reparaí**!

## 🚨 Como corrigir os "Erros" no Editor (VS Code)

Se você está vendo linhas vermelhas nos arquivos `.tsx` ou `.ts` (como "Cannot find module 'react'"), é porque **as dependências ainda não foram baixadas no seu computador**.

Para corrigir isso localmente:
1. Instale o [Node.js](https://nodejs.org/) (versão 18 ou superior).
2. Abra o terminal na pasta do projeto.
3. Rode o comando:
   ```bash
   npm install
   ```
4. Reinicie o VS Code (ou aperte `Cmd+Shift+P` > `Megazord: Reload Window`).

## 🚀 Como visualizar o Projeto Online

Este projeto está configurado para deploy automático na Vercel.
Sempre que você der `git push`, uma nova versão será publicada.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Estilização**: TailwindCSS
- **Backend/Auth**: Firebase
- **IA**: Gemma 3 (via API)
