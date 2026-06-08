# Academia Randori / UniGuairacá — Site Institucional

Site institucional estático (HTML + CSS + JavaScript puro), pronto para publicar
no **GitHub Pages**. Não usa backend, banco de dados nem servidor — funciona em
qualquer hospedagem de arquivos estáticos.

---

## 📁 Estrutura do projeto

```
randori/
├── index.html              → Página inicial (Home)
├── conquistas.html         → Página de conquistas
├── projetos-sociais.html   → Página de projetos sociais
├── galeria.html            → Galeria de fotos (com filtros e lightbox)
├── contato.html            → Contato + mapa + como chegar
├── .nojekyll               → Faz o GitHub Pages servir os arquivos sem processar
├── robots.txt              → Orientação para buscadores
├── sitemap.xml             → Mapa do site (SEO)
└── assets/
    ├── css/
    │   └── style.css       → Todo o estilo (cores, layout, animações)
    ├── js/
    │   ├── main.js         → Navegação, animações, contadores, lightbox
    │   └── galeria-config.js → ✏️ Onde você cadastra as fotos da galeria
    ├── img/                → Imagens do site (placeholders SVG — troque pelas reais)
    └── galeria/            → Pastas das fotos da galeria, por categoria
        ├── treinos/
        ├── competicoes/
        ├── eventos/
        ├── faixas/
        └── projetos-sociais/
```

---

## 🚀 Como publicar no GitHub Pages

1. **Crie um repositório** no GitHub (ex.: `randori`).
2. **Envie todos os arquivos** desta pasta para o repositório. Pelo site do GitHub:
   *Add file → Upload files* → arraste tudo → *Commit changes*.
   (Ou via Git: `git init`, `git add .`, `git commit -m "site"`, `git push`.)
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch **main** e a pasta **/ (root)**. Salve.
5. Aguarde 1–2 minutos. O site ficará no ar em:
   `https://SEU-USUARIO.github.io/randori/`

> 💡 Dica: se quiser publicar na raiz (`https://SEU-USUARIO.github.io/`), nomeie o
> repositório como `SEU-USUARIO.github.io` e envie os arquivos para lá.

Depois de publicar, atualize o endereço real nos arquivos `robots.txt`,
`sitemap.xml` e nas tags `canonical`/`og:url` (procure por `SEU-USUARIO`).

---

## ✏️ Como atualizar o conteúdo

### Adicionar fotos na galeria (passo a passo)
1. Coloque a foto na pasta da categoria, ex.: `assets/galeria/treinos/treino-01.jpg`
2. Abra `assets/js/galeria-config.js` e adicione uma linha na categoria:
   ```js
   { arquivo: "treino-01.jpg", legenda: "Treino de sábado" },
   ```
3. Salve. A foto aparece automaticamente na galeria. ✅

### Trocar as imagens (hero, sensei, modalidades…)
As imagens ficam em `assets/img/` como placeholders `.svg`. Para usar fotos reais,
substitua o arquivo mantendo o mesmo nome (ex.: troque `hero.svg` por uma foto e
ajuste o caminho no HTML, ou simplesmente salve sua foto como `hero.jpg` e atualize
a referência). Os pontos de troca estão comentados no código.

### WhatsApp
O número usado é **5542999711664**. Para alterar, procure por `5542999711664` em
todos os arquivos `.html` e substitua. A mensagem automática também está nos links
(`?text=...`).

### Instagram
Procure por `instagram.com/academiarandori` e troque pela URL do perfil oficial.

### Textos, conquistas, horários
Todo o conteúdo está direto no HTML, com comentários indicando cada seção.
Abra o arquivo correspondente e edite o texto.

> ⚠️ O cabeçalho (menu) e o rodapé se repetem em todas as páginas. Se mudar um link
> do menu, lembre-se de aplicar a mesma mudança nas demais páginas `.html`.

---

## 🎨 Identidade visual

As cores ficam centralizadas no topo de `assets/css/style.css`, no bloco `:root`.
Para reajustar a paleta, edite ali (azul marinho, azul institucional, dourado etc.).

- Fontes: **Fraunces** (títulos) e **Manrope** (texto), via Google Fonts.
- Paleta: azul marinho, azul institucional, branco, cinza claro e dourado suave.

---

## 👀 Testar localmente

Basta abrir o `index.html` no navegador. Para a galeria e o mapa funcionarem 100%,
o ideal é rodar um servidor local simples:

```bash
# dentro da pasta do projeto
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

---

Feito com HTML, CSS e JavaScript — leve, rápido e fácil de manter.
