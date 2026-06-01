const attacks = [
  {
    id: "phishing",
    name: "Phishing",
    category: "Engenharia Social",
    difficulty: "Fácil",
    description: "Técnica que engana usuários para roubar credenciais através de e-mails ou sites falsos.",
    howItWorks: "O atacante cria uma cópia falsa de um site legítimo e envia links por e-mail. A vítima insere seus dados sem perceber que está em um site falso.",
    howToProtect: "Sempre verifique o endereço do site antes de inserir dados. Desconfie de e-mails urgentes pedindo login.",
    realExample: "Em 2020, hackers enviaram e-mails falsos do Bradesco para milhares de brasileiros.",
    icon: "🎣"
  },
  {
    id: "ransomware",
    name: "Ransomware",
    category: "Malware",
    difficulty: "Alto",
    description: "Vírus que criptografa os arquivos da vítima e exige pagamento para liberá-los.",
    howItWorks: "O malware entra no sistema via e-mail ou download, criptografa todos os arquivos e exibe uma mensagem exigindo resgate em criptomoeda.",
    howToProtect: "Mantenha backups atualizados, não abra anexos suspeitos e mantenha o antivírus atualizado.",
    realExample: "O ataque WannaCry em 2017 afetou mais de 200 mil computadores em 150 países.",
    icon: "🔒"
  },
  {
    id: "ddos",
    name: "DDoS",
    category: "Rede",
    difficulty: "Médio",
    description: "Ataque que sobrecarrega um servidor com milhares de requisições até derrubá-lo.",
    howItWorks: "O atacante controla milhares de computadores infectados (botnet) e os usa para enviar requisições simultâneas ao alvo, esgotando seus recursos.",
    howToProtect: "Usar serviços de proteção como Cloudflare, firewalls e limitação de requisições por IP.",
    realExample: "Em 2016, o ataque à Dyn derrubou Twitter, Netflix e Spotify por horas.",
    icon: "💥"
  },
  {
    id: "sqlinjection",
    name: "SQL Injection",
    category: "Aplicação Web",
    difficulty: "Médio",
    description: "Inserção de código SQL malicioso em campos de formulário para manipular o banco de dados.",
    howItWorks: "O atacante digita comandos SQL em campos de login ou busca. Se o sistema não validar a entrada, o banco de dados executa o comando malicioso.",
    howToProtect: "Usar prepared statements, validar e sanitizar todas as entradas do usuário.",
    realExample: "Em 2008, o ataque ao Heartland Payment Systems expôs 130 milhões de cartões de crédito.",
    icon: "💉"
  },
  {
    id: "mitm",
    name: "Man in the Middle",
    category: "Rede",
    difficulty: "Alto",
    description: "O atacante se posiciona entre duas partes para interceptar e alterar a comunicação.",
    howItWorks: "Em redes Wi-Fi públicas, o atacante pode interceptar o tráfego entre você e o servidor, lendo ou modificando os dados transmitidos.",
    howToProtect: "Use sempre HTTPS, evite Wi-Fi públicos para dados sensíveis e use VPN.",
    realExample: "Ataques MITM são comuns em redes de aeroportos e cafeterias.",
    icon: "👤"
  },
  {
    id: "engenharia-social",
    name: "Engenharia Social",
    category: "Engenharia Social",
    difficulty: "Fácil",
    description: "Manipulação psicológica de pessoas para obter informações confidenciais.",
    howItWorks: "O atacante se passa por técnico de TI, banco ou autoridade e convence a vítima a revelar senhas ou dados pessoais por telefone ou chat.",
    howToProtect: "Nunca forneça senhas por telefone. Empresas legítimas nunca pedem sua senha.",
    realExample: "O hacker Kevin Mitnick ficou famoso por invadir sistemas apenas usando ligações telefônicas.",
    icon: "🎭"
  }
]

export default attacks