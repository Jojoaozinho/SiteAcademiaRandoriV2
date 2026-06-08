/* =============================================================
   CONFIGURAÇÃO DA GALERIA  (fotos e vídeos)
   -------------------------------------------------------------
   COMO TROCAR / ADICIONAR UMA FOTO (simples):
   1. Coloque o arquivo dentro da pasta da categoria, ex.:
         assets/galeria/treinos/treino-99.jpg
   2. Adicione (ou troque) uma linha na lista da categoria:
         { arquivo: "treino-99.jpg", legenda: "Sua legenda" },
   3. Salve. A foto aparece sozinha na galeria.

   DICA: para SUBSTITUIR uma foto existente sem mexer no código,
   basta salvar a nova imagem com o MESMO nome de arquivo
   (ex.: treino-01.jpg) dentro da pasta. Pronto.

   VÍDEOS: veja a lista VIDEOS lá embaixo. Para trocar, coloque
   o arquivo .mp4 em assets/videos/ e ajuste o nome na lista.
   ============================================================= */

const GALERIA = {
  base: "assets/galeria/",
  categorias: {
    treinos: {
      nome: "Treinos",
      fotos: [
        { arquivo: "treino-01.jpg", legenda: "Orientacao a beira do tatame" },
        { arquivo: "treino-02.jpg", legenda: "Treinao coletivo na academia" },
        { arquivo: "treino-03.jpg", legenda: "Saudacao antes do treino" },
        { arquivo: "treino-04.jpg", legenda: "Turma da base atenta a explicacao" },
        { arquivo: "treino-05.jpg", legenda: "Treino de imobilizacao (ne-waza)" },
        { arquivo: "treino-06.jpg", legenda: "Pequenos atletas no solo" },
        { arquivo: "treino-07.jpg", legenda: "Randori entre os pequenos" },
        { arquivo: "treino-08.jpg", legenda: "Disputa no chao durante o treino" },
        { arquivo: "treino-09.jpg", legenda: "Cumprimento entre atletas" },
        { arquivo: "treino-10.jpg", legenda: "Concentracao antes da pratica" },
        { arquivo: "treino-11.jpg", legenda: "Turma reunida no tatame" },
        { arquivo: "treino-12.jpg", legenda: "Alongamento e foco" },
        { arquivo: "treino-13.jpg", legenda: "Roda de treino" },
        { arquivo: "treino-14.jpg", legenda: "Momento de incentivo do professor" },
        { arquivo: "treino-15.jpg", legenda: "Sensei orientando aluno" },
        { arquivo: "treino-16.jpg", legenda: "Ajuste do kimono antes da luta" },
      ],
    },
    competicoes: {
      nome: "Competições",
      fotos: [
        { arquivo: "competicao-01.jpg", legenda: "Torcida da garotada na arquibancada do tatame" },
        { arquivo: "competicao-02.jpg", legenda: "Saudacao antes do combate" },
        { arquivo: "competicao-03.jpg", legenda: "Disputa adulta em pe" },
        { arquivo: "competicao-04.jpg", legenda: "Combate feminino" },
        { arquivo: "competicao-05.jpg", legenda: "Pronto para entrar no tatame" },
        { arquivo: "competicao-06.jpg", legenda: "Atleta e treinador na area de competicao" },
        { arquivo: "competicao-07.jpg", legenda: "Campeonato Brasileiro - Regiao V" },
        { arquivo: "competicao-08.jpg", legenda: "Delegacao do Parana em formacao" },
        { arquivo: "competicao-09.jpg", legenda: "Premio da Delegacia Centro-Sul de Judo" },
        { arquivo: "competicao-10.jpg", legenda: "Reconhecimento a academia" },
        { arquivo: "competicao-11.jpg", legenda: "Trofeu da Delegacia Centro-Sul" },
        { arquivo: "competicao-12.jpg", legenda: "Homenagem no torneio regional" },
        { arquivo: "competicao-13.jpg", legenda: "Premiacao Delegacia Centro-Sul de Judo" },
      ],
    },
    eventos: {
      nome: "Eventos",
      fotos: [
        { arquivo: "evento-01.jpg", legenda: "Entrega de placas e homenagens" },
        { arquivo: "evento-02.jpg", legenda: "Atletas da equipe" },
        { arquivo: "evento-03.jpg", legenda: "Jovens campeoes da Randori" },
        { arquivo: "evento-04.jpg", legenda: "Sensei F. Santos no tatame" },
        { arquivo: "evento-05.jpg", legenda: "Conversa tecnica a beira do tatame" },
        { arquivo: "evento-06.jpg", legenda: "Sensei Fernando Santos" },
        { arquivo: "evento-07.jpg", legenda: "Atletas representando a academia" },
        { arquivo: "evento-08.jpg", legenda: "Workshop com mestre convidado" },
        { arquivo: "evento-09.jpg", legenda: "Demonstracao tecnica no workshop" },
        { arquivo: "evento-10.jpg", legenda: "Faixas-pretas reunidos" },
        { arquivo: "evento-11.jpg", legenda: "Troca de experiencias entre mestres" },
        { arquivo: "evento-12.jpg", legenda: "Mestres no evento" },
        { arquivo: "evento-13.jpg", legenda: "Atletas perfilados" },
        { arquivo: "evento-14.jpg", legenda: "Cerimonia de abertura" },
        { arquivo: "evento-15.jpg", legenda: "Saudacao coletiva (rei)" },
        { arquivo: "evento-16.jpg", legenda: "Sensei conduzindo a cerimonia" },
        { arquivo: "evento-17.jpg", legenda: "Abertura do evento" },
        { arquivo: "evento-18.jpg", legenda: "Atletas e professores perfilados" },
        { arquivo: "evento-19.jpg", legenda: "Equipe tecnica na cerimonia" },
        { arquivo: "evento-20.jpg", legenda: "Mesa de honra - UniGuairaca" },
        { arquivo: "evento-21.jpg", legenda: "Autoridades e parceiros" },
        { arquivo: "evento-22.jpg", legenda: "Homenagem a Jigoro Kano" },
        { arquivo: "evento-23.jpg", legenda: "Jovens atletas em formacao" },
        { arquivo: "evento-24.jpg", legenda: "Perfilados para a abertura" },
        { arquivo: "evento-25.jpg", legenda: "Execucao do hino" },
        { arquivo: "evento-26.jpg", legenda: "Autoridades presentes" },
        { arquivo: "evento-27.jpg", legenda: "Registro com a atleta" },
        { arquivo: "evento-28.jpg", legenda: "Entrega de lembranca" },
        { arquivo: "evento-29.jpg", legenda: "Foto com apoiadores" },
        { arquivo: "evento-30.jpg", legenda: "Sensei e atleta faixa-preta" },
        { arquivo: "evento-31.jpg", legenda: "Sensei entre amigos do judo" },
        { arquivo: "evento-32.jpg", legenda: "Torcida da mesa de honra" },
      ],
    },
    faixas: {
      nome: "Exames de Faixa",
      fotos: [
        { arquivo: "faixa-01.jpg", legenda: "Fileira da turma infantil" },
        { arquivo: "faixa-02.jpg", legenda: "Faixa-amarela em concentracao" },
      ],
    },
    "projetos-sociais": {
      nome: "Projetos Sociais",
      fotos: [
        { arquivo: "projeto-social-01.jpg", legenda: "Mencao Honrosa ao Sensei Fernando Santos" },
        { arquivo: "projeto-social-02.jpg", legenda: "Reconhecimento pelo trabalho social" },
        { arquivo: "projeto-social-03.jpg", legenda: "Homenagem da Assembleia Legislativa do Parana" },
        { arquivo: "projeto-social-04.jpg", legenda: "Emocao no reconhecimento" },
        { arquivo: "projeto-social-05.jpg", legenda: "Gratidao e afeto da comunidade" },
        { arquivo: "projeto-social-06.jpg", legenda: "Atleta ensinando os mais novos" },
      ],
    },
  },
};

/* =============================================================
   VÍDEOS  (aparecem na seção "Vídeos" da página Galeria)
   Para trocar: salve o .mp4 em assets/videos/ e ajuste abaixo.
   "poster" é a imagem de capa (opcional) em assets/videos/.
   ============================================================= */
const VIDEOS = {
  base: "assets/videos/",
  lista: [
    { arquivo: "torneio-regional-13-04.mp4", poster: "torneio-regional-13-04.jpg", legenda: "Torneio Regional Centro-Sul de Judô — 13/04" },
    { arquivo: "alana-e-murilo.mp4", poster: "alana-e-murilo.jpg", legenda: "Alana e Murilo — atletas da Randori" },
  ],
};
