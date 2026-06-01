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
- Terminal interativo com simulação de ataques
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

O componente criativo desenvolvido pelo grupo é um terminal interativo localizado na rota `/terminal`.

O terminal simula um ambiente de linha de comando voltado à área de cibersegurança, permitindo que o usuário execute comandos temáticos e visualize respostas em tempo real.

**Comandos disponíveis:**
- `help` — lista todos os comandos do sistema
- `attacks` — exibe os vetores de ataque cadastrados
- `scan [nome]` — renderiza um card visual com informações técnicas do ataque
- `attack [nome]` — executa uma simulação linha por linha do vetor selecionado
- `clear` — limpa o histórico do terminal

**Destaques técnicos:**
- Utiliza `useState` para gerenciar input, histórico e estado de carregamento
- Utiliza `useEffect` + `useRef` para rolagem automática ao final do histórico
- O componente `AttackSimulation` utiliza `useState` e `useEffect` para exibir as linhas da simulação progressivamente, com intervalo de 600ms entre cada uma
- Renderização condicional por tipo de mensagem: `info`, `warning`, `success`, `alert` e `attack`
- Todo o visual é estilizado com CSS Modules em tema escuro


## 📐 Decisões Técnicas

### Padrão de prefixos no Terminal
As mensagens exibidas no terminal seguem o padrão de prefixos utilizado em logs de sistemas reais:

| Prefixo | Significado | Uso |
|---------|-------------|-----|
| `[INIT]` | Initialize | Início de um processo |
| `[PROC]` | Processing | Etapa em execução |
| `[WARN]` | Warning | Evento que requer atenção |
| `[DATA]` | Data | Dado coletado ou retornado |
| `[NOTE]` | Note | Observação complementar |
| `[!]` | Alerta crítico | Avisos legais ou erros graves |

Essa escolha foi feita para aproximar a simulação de um ambiente de linha de comando real, comum em ferramentas de segurança como Nmap, Metasploit e Wireshark.

### Renderização progressiva na simulação
O componente `AttackSimulation` utiliza `useState` e `useEffect` para exibir cada linha com intervalo de 600ms, simulando a execução real de um processo no terminal.

### Lift State Up no Catálogo
O estado do filtro de categorias foi elevado para o componente `Catalog`, permitindo que `FilterBar` e a lista de `AttackCard` compartilhem a mesma informação sem comunicação direta entre eles.