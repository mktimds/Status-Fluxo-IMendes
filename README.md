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
- **Movimentação automática:** cada status pode ter uma lista de destino (a coluna do responsável). Quando o status muda, o card vai para essa lista, no topo ou no final, conforme a configuração.

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

### 2b. Liberar a movimentação automática (API key)

1. Ainda em [trello.com/power-ups/admin](https://trello.com/power-ups/admin), abra o seu Power-Up e vá na aba **API key** (ou *Trello Auth*). Clique em **Generate a new API key**.
   Use a key gerada **para este Power-Up**. Uma key antiga, da sua conta, também funciona, mas a do Power-Up é a recomendada.
2. Na mesma tela, em **Allowed origins**, adicione o endereço do GitHub Pages, **sem** o nome do repositório no final:
   `https://SEU-USUARIO.github.io`
3. No GitHub, abra o arquivo **common.js**, clique no lápis e troque
   `var SF_APP_KEY = 'COLE_SUA_API_KEY_AQUI';` pela sua key. Depois clique em **Commit**.

> ⚠ **Nunca coloque o TOKEN no código.** O repositório é público, e o token dá acesso total à sua conta do Trello. O Power-Up não precisa dele: cada pessoa da equipe clica em **Autorizar** uma única vez, e o Trello gera e guarda um token próprio para ela, que só aquela pessoa vê. A **API key** pode ficar no código, porque ela sozinha não dá acesso a nada.

### 3. Ativar no quadro

1. Abra o quadro e vá em **Power-Ups → Adicionar Power-Ups**.
2. No menu da esquerda, clique em **Personalizados** (Custom), encontre o **Status & Fluxo IMendes** e clique em **Adicionar**.
3. Clique no botão **Status** no topo do quadro e depois em **Configurar status** para montar o seu fluxo.
4. Em cada status, escolha em **→** a lista de destino, ou deixe "Não mover".
5. No final da tela de configurações, clique em **Autorizar agora**. Cada pessoa da equipe faz isso uma vez; quem ainda não autorizou vai receber o pedido na primeira vez que mudar um status.

### Se a autorização não funcionar

- **Pop-up bloqueado:** libere pop-ups para trello.com no navegador.
- **Erro de origem ("invalid return_url" ou similar):** confira o item *Allowed origins* do passo 2b.
- **No Chrome, a autorização "some" depois de recarregar:** o Power-Up guarda uma cópia do token no armazenamento privado da própria pessoa para contornar isso. Se ainda assim falhar, o Trello recomenda desativar a opção `chrome://flags/#third-party-storage-partitioning`.
- **Mudar status sem mover:** o status é sempre salvo, mesmo que a movimentação falhe. Nesse caso aparece uma mensagem explicando o motivo.

---

## Migrando do Statuses & Workflow

Os dois Power-Ups guardam dados separados, então os status atuais **não são importados**. Uma sugestão de migração:

1. Crie aqui os mesmos status que você já usa.
2. Deixe os dois Power-Ups ativos por alguns dias e vá marcando os cards no novo.
3. Quando terminar, desative o antigo.

## Atualizando depois

Para mudar algo no código, edite o arquivo no GitHub (ícone de lápis) e clique em **Commit**. O Trello carrega a versão nova em poucos minutos. Se não aparecer, recarregue a página com Ctrl+F5.
