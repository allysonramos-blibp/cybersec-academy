const commands = {
  help: {
    description: "Lista todos os comandos disponíveis",
    response: `Comandos disponíveis:
  help          → exibe esta mensagem de ajuda
  attacks       → lista os vetores de ataque cadastrados
  scan [nome]   → exibe informacoes tecnicas do ataque
  attack [nome] → executa simulacao do vetor de ataque
  clear         → limpa o historico do terminal
  about         → informacoes sobre o sistema`
  },
  attacks: {
    description: "Lista os vetores de ataque",
    response: `Vetores de ataque disponiveis:
  → phishing
  → ransomware
  → ddos
  → sqlinjection
  → mitm
  → engenharia-social
  
  Uso: scan [nome] ou attack [nome]`
  },
  about: {
    description: "Sobre o sistema",
    response: `CyberSec Academy - Terminal v1.0
  Disciplina : Linguagem de Programacao para Internet
  Curso      : Grande Area de Computacao - UNIUBE
  Tecnologia : React + JavaScript + Vite
  Objetivo   : fins exclusivamente educacionais`
  }
}

export const attackScripts = {
  phishing: [
    { text: '[INIT] Vetor selecionado: Phishing', type: 'info' },
    { text: '[PROC] Identificando alvo e coletando dados publicos...', type: 'info' },
    { text: '[PROC] Replicando interface do Internet Banking alvo...', type: 'info' },
    { text: '[PROC] Configurando dominio similar: bradesc0.com.br...', type: 'info' },
    { text: '[PROC] Disparando campanha de e-mails maliciosos...', type: 'info' },
    { text: '[WARN] 47 usuarios acessaram o dominio falso', type: 'warning' },
    { text: '[WARN] Formulario de login submetido por 12 usuarios', type: 'warning' },
    { text: '[DATA] usuario: joao.silva@email.com | senha: ******', type: 'success' },
    { text: '[DATA] usuario: maria.souza@email.com | senha: ******', type: 'success' },
    { text: '------------------------------------------------', type: 'info' },
    { text: '[!] AVISO: simulacao realizada para fins educacionais.', type: 'alert' },
    { text: '[!] A pratica deste ataque e crime previsto na Lei 12.737/2012.', type: 'alert' },
  ],
  ransomware: [
    { text: '[INIT] Vetor selecionado: Ransomware', type: 'info' },
    { text: '[PROC] Payload entregue via anexo de e-mail...', type: 'info' },
    { text: '[PROC] Executando processo em segundo plano...', type: 'info' },
    { text: '[PROC] Varrendo sistema de arquivos do host...', type: 'info' },
    { text: '[PROC] Aplicando criptografia AES-256 em /documentos...', type: 'info' },
    { text: '[PROC] Aplicando criptografia AES-256 em /imagens...', type: 'info' },
    { text: '[PROC] Aplicando criptografia AES-256 em /desktop...', type: 'info' },
    { text: '[WARN] 100% dos arquivos do usuario foram criptografados', type: 'warning' },
    { text: '[WARN] Exigencia de resgate: 0.5 BTC (~R$ 150.000,00)', type: 'warning' },
    { text: '------------------------------------------------', type: 'info' },
    { text: '[!] AVISO: simulacao realizada para fins educacionais.', type: 'alert' },
    { text: '[!] A pratica deste ataque e crime previsto na Lei 12.737/2012.', type: 'alert' },
  ],
  ddos: [
    { text: '[INIT] Vetor selecionado: DDoS', type: 'info' },
    { text: '[PROC] Ativando botnet distribuida: 50.000 hosts...', type: 'info' },
    { text: '[PROC] Alvo identificado: servidor 192.168.0.1', type: 'info' },
    { text: '[PROC] Iniciando flood de requisicoes HTTP...', type: 'info' },
    { text: '[PROC] Taxa atual: 1.200.000 requisicoes/segundo', type: 'info' },
    { text: '[WARN] Uso de CPU do servidor: 45% > 78% > 97% > 100%', type: 'warning' },
    { text: '[WARN] Servidor nao esta respondendo novas requisicoes', type: 'warning' },
    { text: '[DATA] Servico indisponivel. Tempo de inatividade: em curso', type: 'success' },
    { text: '------------------------------------------------', type: 'info' },
    { text: '[!] AVISO: simulacao realizada para fins educacionais.', type: 'alert' },
    { text: '[!] A pratica deste ataque e crime previsto na Lei 12.737/2012.', type: 'alert' },
  ],
  sqlinjection: [
    { text: '[INIT] Vetor selecionado: SQL Injection', type: 'info' },
    { text: "[PROC] Testando entrada: ' OR '1'='1' --", type: 'info' },
    { text: '[PROC] Servidor retornou resposta inesperada...', type: 'info' },
    { text: '[PROC] Vulnerabilidade confirmada: entrada nao sanitizada', type: 'info' },
    { text: "[PROC] Injetando: ' UNION SELECT login, senha FROM usuarios --", type: 'info' },
    { text: '[WARN] Consulta executada com sucesso no banco de dados', type: 'warning' },
    { text: '[DATA] admin : 5f4dcc3b5aa765d61d8327deb882cf99 (md5)', type: 'success' },
    { text: '[DATA] suporte: e10adc3949ba59abbe56e057f20f883e (md5)', type: 'success' },
    { text: '[WARN] Total de registros expostos: 15.482', type: 'warning' },
    { text: '------------------------------------------------', type: 'info' },
    { text: '[!] AVISO: simulacao realizada para fins educacionais.', type: 'alert' },
    { text: '[!] A pratica deste ataque e crime previsto na Lei 12.737/2012.', type: 'alert' },
  ],
  mitm: [
    { text: '[INIT] Vetor selecionado: Man in the Middle', type: 'info' },
    { text: '[PROC] Conectando a rede Wi-Fi publica: "AeroFree_GRU"', type: 'info' },
    { text: '[PROC] Executando ARP Spoofing na sub-rede local...', type: 'info' },
    { text: '[PROC] Redirecionando trafego da vitima para o atacante...', type: 'info' },
    { text: '[PROC] Interceptando pacotes HTTP nao criptografados...', type: 'info' },
    { text: '[WARN] Requisicao POST capturada: /sistema/login', type: 'warning' },
    { text: '[DATA] login: carlos.lima@empresa.com.br', type: 'success' },
    { text: '[DATA] senha: Ti@2024uniube', type: 'success' },
    { text: '------------------------------------------------', type: 'info' },
    { text: '[!] AVISO: simulacao realizada para fins educacionais.', type: 'alert' },
    { text: '[!] A pratica deste ataque e crime previsto na Lei 12.737/2012.', type: 'alert' },
  ],
  'engenharia-social': [
    { text: '[INIT] Vetor selecionado: Engenharia Social', type: 'info' },
    { text: '[PROC] Coletando dados publicos do alvo via OSINT...', type: 'info' },
    { text: '[PROC] Identificando nome, cargo e empresa via LinkedIn...', type: 'info' },
    { text: '[PROC] Simulando ligacao de suporte tecnico interno...', type: 'info' },
    { text: '[PROC] "Bom dia, sou do setor de TI. Preciso validar seu acesso."', type: 'info' },
    { text: '[WARN] Usuario forneceu credenciais sem verificar identidade', type: 'warning' },
    { text: '[DATA] Acesso ao sistema obtido sem exploracao tecnica', type: 'success' },
    { text: '[NOTE] Nenhuma linha de codigo foi necessaria neste ataque', type: 'info' },
    { text: '------------------------------------------------', type: 'info' },
    { text: '[!] AVISO: simulacao realizada para fins educacionais.', type: 'alert' },
    { text: '[!] A pratica deste ataque e crime previsto na Lei 12.737/2012.', type: 'alert' },
  ],
}

export default commands