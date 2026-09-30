/* Status & Fluxo IMendes — connector principal */
/* global TrelloPowerUp, sfGetStatuses, sfFind */

var BASE = window.location.href.replace(/[^/]*$/, '');
var ICON_DARK = BASE + 'icon.svg';
var ICON_LIGHT = BASE + 'icon-white.svg';

function openStatusPicker(t) {
  return t.popup({ title: 'Status do card', url: './set-status.html', height: 320 });
}

function openSettings(t) {
  return t.popup({ title: 'Configurar status', url: './settings.html', height: 520 });
}

function openOverview(t) {
  return t.modal({ title: 'Visão por status', url: './overview.html', fullscreen: false, height: 620 });
}

function getCardStatus(t) {
  return TrelloPowerUp.Promise.all([
    sfGetStatuses(t),
    t.get('card', 'shared', 'status')
  ]).then(function (r) {
    var data = r[1];
    if (!data || !data.id) return null;
    var st = sfFind(r[0], data.id);
    return st ? { status: st, data: data } : null;
  });
}

TrelloPowerUp.initialize({
  // Badge na frente do card
  'card-badges': function (t) {
    return getCardStatus(t).then(function (res) {
      if (!res) return [];
      return [{ text: res.status.name, color: res.status.color }];
    });
  },

  // Badge dentro do card (clicável)
  'card-detail-badges': function (t) {
    return getCardStatus(t).then(function (res) {
      if (!res) {
        return [{ title: 'Status', text: 'Definir status', callback: openStatusPicker }];
      }
      return [{
        title: 'Status',
        text: res.status.name,
        color: res.status.color,
        callback: openStatusPicker
      }];
    });
  },

  // Botão no verso do card
  'card-buttons': function () {
    return [{ icon: ICON_DARK, text: 'Status', callback: openStatusPicker }];
  },

  // Botão no topo do quadro
  'board-buttons': function () {
    return [{
      icon: { dark: ICON_LIGHT, light: ICON_DARK },
      text: 'Status',
      callback: function (t) {
        return t.popup({
          title: 'Status & Fluxo',
          items: [
            { text: 'Visão por status', callback: openOverview },
            { text: 'Configurar status', callback: openSettings }
          ]
        });
      }
    }];
  },

  // Engrenagem em Power-Ups > Status & Fluxo > Configurações
  'show-settings': openSettings
});
