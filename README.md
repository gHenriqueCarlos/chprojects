# chProjects — Carlos Henrique Projetos

Site estático (HTML + CSS + JS puro, sem build) com portfólio de projetos e contatos,
pronto para o GitHub Pages.

## Estrutura

```
index.html            página única (início, projetos, sobre, contato)
assets/css/style.css  estilos
assets/js/data.js     ← CONTEÚDO: projetos e contatos (edite aqui)
assets/js/main.js     lógica (cards, filtros, modal, menu mobile)
assets/img/           favicon e imagens dos projetos
.nojekyll             faz o GitHub Pages servir os arquivos como estão
```

## Editar conteúdo

- **Projetos e contatos:** abra `assets/js/data.js`. Cada projeto é um bloco `{ ... }`;
  copie um bloco para criar outro. Os comentários no topo explicam cada campo.
- **Imagens:** coloque em `assets/img/projects/` e preencha o campo `image`
  (ex.: `"assets/img/projects/legacy.jpg"`). Proporção ideal: 16:9.
- **Textos do topo e do "Sobre":** direto no `index.html`.

## Rodar localmente

```powershell
python -m http.server 8080
```

Depois abra http://localhost:8080.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `chprojects`) e envie o código:
   ```powershell
   git remote add origin https://github.com/SEU-USUARIO/chprojects.git
   git push -u origin main
   ```
2. No repositório: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / pasta **/ (root)** → Save
3. Em ~1 minuto o site fica em `https://SEU-USUARIO.github.io/chprojects/`.

> Dica: se o repositório se chamar `SEU-USUARIO.github.io`, o site fica na raiz
> (`https://SEU-USUARIO.github.io/`). Para um domínio próprio (ex.: `chprojects.com.br`),
> configure em **Settings → Pages → Custom domain**.
