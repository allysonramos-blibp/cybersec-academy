# 🛡️ CyberSec Academy

## 👥 Integrantes
| Nome | RA |
|------|----|
| Allyson Ramos | 5167927 |
| Amanda Rezende | 5164912 |
| Clériston Lima | 5166604 |
| Débora Nascimento | 5161829 |

## 📋 Descrição
Portal educacional sobre cibersegurança desenvolvido como trabalho final da disciplina Linguagem de Programação para Internet — UNIUBE.

## 🎯 Tema
Cibersegurança — exploração de ameaças digitais, como funcionam e como se proteger.

## 🚀 Tecnologias utilizadas
- React 18
- JavaScript
- Vite
- React Router DOM
- CSS Modules

## ⚙️ Principais funcionalidades
- Catálogo de ameaças cibernéticas com filtro por categoria
- Página de detalhes de cada ataque
- Terminal interativo com comandos temáticos
- Navegação SPA com React Router DOM

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/cybersec-academy.git

# Entre na pasta
cd cybersec-academy

# Instale as dependências
npm install
```

## ▶️ Execução

```bash
npm run dev
```

Acesse: http://localhost:5173

## 🔗 Repositório
https://github.com/SEU_USUARIO/cybersec-academy

## 🎨 Componente Criativo — Terminal Interativo

O componente criativo é um **terminal simulado** localizado na página `/terminal`.

Ele permite que o usuário digite comandos temáticos de cibersegurança e receba respostas interativas, simulando a experiência de um terminal real.

**Comandos disponíveis:**
- `help` — lista todos os comandos
- `attacks` — lista os ataques cadastrados
- `scan [nome]` — exibe detalhes de um ataque específico
- `clear` — limpa o terminal

**Tecnicamente utiliza:**
- `useState` para gerenciar input, histórico e estado de loading
- `useEffect` + `useRef` para scroll automático
- Renderização condicional para o estado de loading
- CSS Modules para o visual dark com fonte monospace