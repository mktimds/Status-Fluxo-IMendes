# Status & Fluxo IMendes — Power-Up para Trello

Status personalizados e **sem limite de quantidade** nos cards do Trello.

## O que ele faz

- **Selo colorido** na frente do card com o status atual
- **Botão "Status"** dentro do card, com busca (útil quando há muitos status)
- **Registro** de quem mudou o status e quando
- **Botão "Status" no topo do quadro:**
  - *Visão por status*: todos os cards agrupados por status, com contagem, filtro por nome e clique para abrir o card
  - *Configurar status*: criar, renomear, escolher cor, reordenar e excluir
- Os status valem **por quadro**. Cada quadro pode ter o seu próprio fluxo.

Status padrão (editáveis): Backlog · Briefing · Em produção · Em design · Revisão interna · Aguardando cliente · Ajustes · Aprovado · Publicado · Pausado.

> **Limites do Trello:** são 10 cores disponíveis para os selos, então cores podem se repetir. O espaço de dados comporta de 50 a 70 status, dependendo do tamanho dos nomes (a tela de configurações mostra o % usado). O filtro nativo do Trello não enxerga esses status; para filtrar, use a "Visão por status".

---

## Como publicar (grátis, uns 15 minutos)

### 1. Hospedar os arquivos no GitHub Pages

1. Crie uma conta em [github.com](https://github.com), se ainda não tiver.
2. Clique em **New repository** e dê um nome, por exemplo `trello-status`. Marque como **Public** e crie.
3. Clique em **uploading an existing file** e arraste **todos os arquivos desta pasta** (sem a pasta em si). Depois clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Branch*, escolha `main` e `/ (root)` e clique em **Save**.
5. Depois de 1 ou 2 minutos, o endereço vai aparecer, algo como:
   `https://SEU-USUARIO.github.io/trello-status/`
   Para testar, abra `https://SEU-USUARIO.github.io/trello-status/icon.svg` no navegador. O ícone precisa aparecer.

### 2. Cadastrar o Power-Up no Trello

1. Acesse [trello.com/power-ups/admin](https://trello.com/power-ups/admin). Você precisa ser **admin do workspace**.
2. Clique em **New** e preencha:
   - **Nome:** Status & Fluxo IMendes
   - **Workspace:** o workspace da IMendes
   - **Iframe connector URL:** `https://SEU-USUARIO.github.io/trello-status/index.html`
   - Preencha e-mail e contato de suporte com os seus dados.
3. Salve e abra a aba **Capabilities**. Ative:
   - `board-buttons`
   - `card-badges`
   - `card-buttons`
   - `card-detail-badges`
   - `show-settings`

### 3. Ativar no quadro

1. Abra o quadro e vá em **Power-Ups → Adicionar Power-Ups**.
2. No menu da esquerda, clique em **Personalizados** (Custom), encontre o **Status & Fluxo IMendes** e clique em **Adicionar**.
3. Clique no botão **Status** no topo do quadro e depois em **Configurar status** para montar o seu fluxo.

---

## Migrando do Statuses & Workflow

Os dois Power-Ups guardam dados separados, então os status atuais **não são importados**. Uma sugestão de migração:

1. Crie aqui os mesmos status que você já usa.
2. Deixe os dois Power-Ups ativos por alguns dias e vá marcando os cards no novo.
3. Quando terminar, desative o antigo.

## Atualizando depois

Para mudar algo no código, edite o arquivo no GitHub (ícone de lápis) e clique em **Commit**. O Trello carrega a versão nova em poucos minutos. Se não aparecer, recarregue a página com Ctrl+F5.
