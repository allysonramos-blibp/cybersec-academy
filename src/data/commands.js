
const commands = {
  help: {
    description: "Lista todos os comandos disponíveis",
    response: `Comandos disponíveis:
  help          → mostra esta mensagem
  attacks       → lista todos os ataques cadastrados
  scan [nome]   → exibe detalhes de um ataque
  clear         → limpa o terminal
  about         → sobre o CyberSec Academy`
  },
  attacks: {
    description: "Lista todos os ataques",
    response: `Ataques cadastrados:
  → phishing
  → ransomware
  → ddos
  → sqlinjection
  → mitm
  → engenharia-social`
  },
  about: {
    description: "Sobre o projeto",
    response: `CyberSec Academy v1.0
  Plataforma educacional sobre cibersegurança.
  Desenvolvido com React + Vite.
  Digite 'help' para ver os comandos.`
  }
}

export default commands