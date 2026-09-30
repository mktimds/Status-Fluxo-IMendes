/* Status & Fluxo IMendes — funções compartilhadas */
/* global TrelloPowerUp */

// Cores aceitas pelo Trello em badges (não aceita hex)
var SF_COLORS = {
  'light-gray': { label: 'Cinza',    hex: '#b3bac5' },
  'sky':        { label: 'Céu',      hex: '#00c2e0' },
  'blue':       { label: 'Azul',     hex: '#0079bf' },
  'purple':     { label: 'Roxo',     hex: '#c377e0' },
  'pink':       { label: 'Rosa',     hex: '#ff78cb' },
  'red':        { label: 'Vermelho', hex: '#eb5a46' },
  'orange':     { label: 'Laranja',  hex: '#ff9f1a' },
  'yellow':     { label: 'Amarelo',  hex: '#f2d600' },
  'lime':       { label: 'Lima',     hex: '#51e898' },
  'green':      { label: 'Verde',    hex: '#61bd4f' }
};

// Status padrão (usados até você salvar os seus nas configurações)
var SF_DEFAULT_STATUSES = [
  { id: 'backlog',   name: 'Backlog',            color: 'light-gray' },
  { id: 'briefing',  name: 'Briefing',           color: 'sky' },
  { id: 'producao',  name: 'Em produção',        color: 'blue' },
  { id: 'design',    name: 'Em design',          color: 'purple' },
  { id: 'revisao',   name: 'Revisão interna',    color: 'yellow' },
  { id: 'cliente',   name: 'Aguardando cliente', color: 'orange' },
  { id: 'ajustes',   name: 'Ajustes',            color: 'pink' },
  { id: 'aprovado',  name: 'Aprovado',           color: 'lime' },
  { id: 'publicado', name: 'Publicado',          color: 'green' },
  { id: 'pausado',   name: 'Pausado',            color: 'red' }
];

// O Trello limita cada bloco de dados a 4096 caracteres
var SF_MAX_CHARS = 4000;

function sfGetStatuses(t) {
  return t.get('board', 'shared', 'statuses').then(function (list) {
    return (Array.isArray(list) && list.length) ? list : SF_DEFAULT_STATUSES;
  });
}

function sfFind(list, id) {
  for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
  return null;
}

function sfUid() {
  return 's' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function sfEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function sfHex(color) {
  return (SF_COLORS[color] || SF_COLORS['light-gray']).hex;
}

function sfDate(ts) {
  if (!ts) return '';
  var d = new Date(ts);
  return d.toLocaleDateString('pt-BR') + ' ' +
    d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}
