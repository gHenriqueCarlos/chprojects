/*
 * CONTEÚDO DO SITE
 * Projetos e contatos ficam aqui. Para adicionar um projeto, copie um bloco { ... }
 * e troque os dados.
 *
 * Campos de cada projeto:
 *   id          identificador único, sem espaços
 *   title       nome
 *   kind        "app", "jogo", "web" ou "unity-asset" (usado nos filtros)
 *   platforms   ex: ["Android", "Windows"]
 *   status      ex: "Na Play Store", "Em desenvolvimento"
 *   summary     texto curto do card
 *   description texto que aparece ao abrir o projeto (linha em branco = novo parágrafo)
 *   tags        palavras-chave
 *   image       (opcional) capa do card, de preferência 16:9
 *   cover       (opcional) "phones" mostra 3 prints de celular lado a lado (usa a galeria)
 *   logo        (opcional) ícone pequeno ao lado do nome
 *   gallery     (opcional) lista de { src, alt } com as prints
 *   colors      (opcional) duas cores para o fundo da capa
 *   links       lista de { label, url }
 *   featured    (opcional) true deixa o card com o dobro da largura
 */
const IMG = "assets/img/projects/";

window.SITE_DATA = {
  projects: [
    {
      id: "terra-marcada-mobile",
      title: "Terra Marcada Mobile",
      kind: "app",
      platforms: ["Android"],
      status: "Na Play Store",
      summary:
        "App de campo para medir áreas com GPS ou receptor RTK, fotografar com coordenada e gerar planta e memorial pelo celular.",
      description:
        "Fiz o Terra Marcada para o trabalho de campo da Rural Plan. Com ele dá para desenhar pontos, linhas e polígonos sobre o satélite e ver área e perímetro na hora. Também conecta em receptores GNSS/RTK por Bluetooth, com correção NTRIP.\n\n" +
        "Ele ainda tem locação de pontos com aviso por voz, câmera que grava a coordenada na foto, gravação de trajeto, consulta ao acervo do INCRA, mapas offline e várias calculadoras para o agro. A planta, o croqui, o memorial descritivo e as cartas de anuência saem em PDF. Importa e exporta KML, DXF, XLS, CSV e TXT.\n\n" +
        "É gratuito e roda no Android 7 ou superior.",
      tags: ["GPS / RTK", "Funciona offline", "Georreferenciamento"],
      logo: IMG + "terra-marcada/logo-terra-marcada.png",
      cover: "phones",
      colors: ["#163a2a", "#0b1a14"],
      gallery: [
        { src: IMG + "terra-marcada/app-mapa.jpg", alt: "Mapa com áreas desenhadas sobre satélite" },
        { src: IMG + "terra-marcada/app-inicio.jpg", alt: "Tela inicial" },
        { src: IMG + "terra-marcada/app-rtk.jpg", alt: "Receptor RTK conectado, com solução fixa e trajeto" },
        { src: IMG + "terra-marcada/app-ferramentas.jpg", alt: "Ferramentas da área: locar ponto, gerar documentos, dividir" },
        { src: IMG + "terra-marcada/app-incra.jpg", alt: "Busca no acervo do INCRA" },
        { src: IMG + "terra-marcada/app-geocamera.jpg", alt: "Foto com coordenadas gravadas" },
      ],
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.chprojects.terramarcada" },
        { label: "Página do app", url: "https://ruralplanpb.com/terra-marcada.html" },
      ],
    },
    {
      id: "terra-marcada-desktop",
      title: "Terra Marcada Desktop",
      kind: "app",
      platforms: ["Windows"],
      status: "Em desenvolvimento",
      summary:
        "CAD rural para Windows. Recebe o que foi coletado no app e gera prancha, planilha SIGEF e memorial.",
      description:
        "É a versão de escritório do Terra Marcada. A equipe da Rural Plan já usa internamente, mas ainda não está aberta ao público.\n\n" +
        "Abre o levantamento que veio do celular e permite desenhar sobre satélite com malha UTM. Importa DXF/DWG, Shapefile, KML e parcelas do INCRA. Daí sai a prancha de impressão com selo e tabela de coordenadas, a planilha SIGEF, o memorial e as anuências.\n\n" +
        "Também gera curvas de nível, modelo 3D do terreno e cálculo de corte e aterro.",
      tags: ["CAD", "SIGEF", "Curvas de nível"],
      logo: IMG + "terra-marcada/logo-terra-marcada.png",
      image: IMG + "terra-marcada/desktop-satelite.jpg",
      gallery: [
        { src: IMG + "terra-marcada/desktop-satelite.jpg", alt: "Polígono sobre imagem de satélite" },
        { src: IMG + "terra-marcada/desktop-prancha.jpg", alt: "Prancha de impressão" },
        { src: IMG + "terra-marcada/desktop-3d.jpg", alt: "Terreno colorido por altitude" },
        { src: IMG + "terra-marcada/desktop-volumes.jpg", alt: "Cálculo de volumes" },
      ],
      links: [
        { label: "Página do app", url: "https://ruralplanpb.com/terra-marcada.html" },
      ],
    },
    {
      id: "legacy",
      title: "Legacy: Ano 25",
      kind: "jogo",
      platforms: ["PC", "Android"],
      status: "Em desenvolvimento",
      summary:
        "Jogo de sobrevivência multiplayer numa ilha brasileira, 25 anos depois do fim do mundo.",
      description:
        "O mapa é gerado por semente e tem lugares bem brasileiros: posto de beira de estrada, pátio do Detran, fazenda, ferro-velho, pousada na serra. Cada servidor tem o seu mundo.\n\n" +
        "Você constrói sua base em madeira, pedra e metal, marca território e precisa manter a base para ela não se desgastar. O tiro tem queda de bala e recuo, e o servidor é quem decide os acertos. Também é preciso lidar com fome, sede, frio, radiação e o clima, que inclui chuva, tempestade de areia e nevasca.\n\n" +
        "PC e Android jogam no mesmo servidor, com chat de voz por proximidade. Qualquer um pode hospedar um servidor.",
      tags: ["Sobrevivência", "Multiplayer", "PC + Android"],
      image: IMG + "legacy/capa.webp",
      gallery: [
        { src: IMG + "legacy/01-oasis.webp", alt: "Oásis no deserto" },
        { src: IMG + "legacy/02-base-neve.webp", alt: "Base militar na neve" },
        { src: IMG + "legacy/03-patio.webp", alt: "Pátio murado" },
        { src: IMG + "legacy/04-pantano.webp", alt: "Pântano" },
        { src: IMG + "legacy/05-lago.webp", alt: "Lago" },
        { src: IMG + "legacy/06-lago-congelado.webp", alt: "Lago congelado" },
        { src: IMG + "legacy/07-infectado.webp", alt: "Infectado na zona de radiação" },
        { src: IMG + "legacy/08-javali.webp", alt: "Javali no campo" },
        { src: IMG + "legacy/09-marco.webp", alt: "Marco de território" },
      ],
      links: [
        { label: "Site do jogo", url: "https://legacy.ruralplanpb.com/" },
      ],
    },
    {
      id: "projeto-mutante",
      title: "Projeto Mutante",
      kind: "jogo",
      platforms: ["Android"],
      status: "Na Play Store",
      summary:
        "Jogo de ação cooperativo para celular: você e outros jogadores segurando ondas de mutantes pelo maior tempo possível.",
      description:
        "As partidas são cooperativas, com matchmaking automático ou sala privada para jogar com amigos. As ondas ficam mais fortes com o tempo e de vez em quando aparece um chefe.\n\n" +
        "Pelo mapa tem caixas com granada, molotov, mina, kit médico, adrenalina e holograma para despistar os inimigos. A cada nível você escolhe uma melhoria, como mais dano, roubo de vida ou um pente maior, então uma partida não fica igual à outra.\n\n" +
        "O controle é twin-stick, com um analógico para andar e outro para mirar. O progresso fica salvo na nuvem pelo Google Play Games.",
      tags: ["Co-op", "Hordas", "Roguelite"],
      logo: IMG + "projeto-mutante/icone.jpg",
      image: IMG + "projeto-mutante/01.webp",
      gallery: [
        { src: IMG + "projeto-mutante/01.webp", alt: "Partida contra um chefe" },
        { src: IMG + "projeto-mutante/02.webp", alt: "Captura do jogo" },
        { src: IMG + "projeto-mutante/03.webp", alt: "Captura do jogo" },
        { src: IMG + "projeto-mutante/04.webp", alt: "Captura do jogo" },
        { src: IMG + "projeto-mutante/05.webp", alt: "Captura do jogo" },
      ],
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.chprojects.com.projetomutante" },
      ],
    },
    {
      id: "rural-plan",
      title: "Site da Rural Plan",
      kind: "web",
      platforms: ["Web"],
      status: "No ar",
      summary:
        "Site da Rural Plan, empresa de topografia e regularização rural em Goiás e no DF.",
      description:
        "Site institucional da Rural Plan. Os serviços aparecem organizados pela situação do cliente, por exemplo regularizar a propriedade, resolver uma herança, dividir terra ou pedir outorga de água. Também tem fotos de campo, perguntas frequentes e a página do Terra Marcada.",
      tags: ["Site institucional", "Responsivo"],
      logo: IMG + "rural-plan/logo.png",
      image: IMG + "rural-plan/site-home.jpg",
      links: [
        { label: "ruralplanpb.com", url: "https://ruralplanpb.com/" },
      ],
    },
    {
      id: "unity-addons",
      title: "Addons para Unity",
      kind: "unity-asset",
      platforms: ["Unity Editor"],
      status: "Asset Store",
      summary: "Ferramentas de editor que publico na Unity Asset Store.",
      description:
        "Em breve coloco aqui a lista dos addons com os links da Asset Store.",
      tags: ["Unity", "C#", "Editor"],
      colors: ["#16304d", "#0b192b"],
      links: [],
    },
  ],

  /*
   * Contatos. type pode ser: "email", "whatsapp", "phone", "googleplay", "github",
   * "linkedin", "instagram", "youtube", "discord", "itch", "unity" ou "link".
   */
  contacts: [
    { type: "email",      label: "carloshenriquebr92@gmail.com", url: "mailto:carloshenriquebr92@gmail.com" },
    { type: "whatsapp",   label: "(61) 99947-8329",              url: "https://wa.me/5561999478329" },
    { type: "googleplay", label: "Meus apps no Google Play",     url: "https://play.google.com/store/apps/developer?id=Carlos+Henrique+Gon%C3%A7alves" },
  ],
};
