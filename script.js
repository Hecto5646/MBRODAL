'use strict';
const D = DATA, C = D.config, $ = (s, e = document) => e.querySelector(s), app = $('#app'), nav = $('#nav'), P = new URLSearchParams(location.search);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const sha = async t => [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode('RODAL' + t)))].map(b => b.toString(16).padStart(2, '0')).join('');
const LS = { get: (k, d) => { try { return JSON.parse(localStorage.getItem('rodal_' + k)) ?? d } catch (e) { return d } }, set: (k, v) => { try { localStorage.setItem('rodal_' + k, JSON.stringify(v)) } catch (e) {} } };
const FB = C.firebase, fb = (p, m, b) => FB ? fetch(`${FB}/rodal/${p}.json`, { method: m || 'GET', body: b === undefined ? undefined : JSON.stringify(b) }) : Promise.resolve();
const bc = 'BroadcastChannel' in window ? new BroadcastChannel('rodal') : null;
const sfx = a => `assets/audio/sfx/${a.nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.mp3`;

/* ---------- nieve ---------- */
(() => { const c = $('#snow'), x = c.getContext('2d'); let w, h; const f = [], r = () => { w = c.width = innerWidth; h = c.height = innerHeight }; r(); addEventListener('resize', r);
  for (let i = 0; i < 90; i++) f.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 2.4 + .6, v: Math.random() * .8 + .3, d: Math.random() * 6 });
  (function t() { x.clearRect(0, 0, w, h); x.fillStyle = 'rgba(150,185,225,.85)'; f.forEach(s => { s.y += s.v; s.x += Math.sin((s.y + s.d) / 40) * .4; if (s.y > h) { s.y = -5; s.x = Math.random() * w } x.beginPath(); x.arc(s.x, s.y, s.r, 0, 7); x.fill() }); requestAnimationFrame(t) })() })();

/* ---------- audio ---------- */
function beep(sec) { try { const a = new AudioContext(), o = a.createOscillator(), g = a.createGain(); o.frequency.value = 880; o.connect(g); g.connect(a.destination); g.gain.setValueAtTime(1, a.currentTime); g.gain.exponentialRampToValueAtTime(.001, a.currentTime + sec); o.start(); o.stop(a.currentTime + sec) } catch (e) {} }
function sonido(src, vol, sec) { const au = new Audio(src); au.volume = vol; au.onerror = () => beep(sec || 1); au.play().catch(() => {}); if (sec) setTimeout(() => au.pause(), sec * 1000); return au }

/* ---------- componentes ---------- */
const gorro = '<svg class="gorro" viewBox="0 0 120 90" aria-hidden="true"><path d="M14 74C20 30 52 6 98 14c-26 6-22 34-30 60z" fill="#c8282f"/><path d="M8 70h96a8 8 0 0 1 0 16H8a8 8 0 0 1 0-16z" fill="#fff" stroke="#e6ddd0"/><circle cx="100" cy="14" r="10" fill="#fff" stroke="#e6ddd0"/></svg>';
function keypad(len, cb) {
  const w = document.createElement('div'); let v = '';
  w.innerHTML = `<div class="dig"></div><div class="err"></div><div class="pad">${[1, 2, 3, 4, 5, 6, 7, 8, 9, '←', 0, 'OK'].map(k => `<button data-k="${k}">${k}</button>`).join('')}</div>`;
  const dg = $('.dig', w), er = $('.err', w), draw = () => dg.innerHTML = Array.from({ length: len }, (_, i) => `<i class="${i === v.length ? 'on' : ''}">${v[i] || ''}</i>`).join(''); draw();
  w.onclick = async e => { const k = e.target.dataset && e.target.dataset.k; if (k === undefined) return; er.textContent = '';
    if (k === '←') v = v.slice(0, -1); else if (k === 'OK') { if (v.length < len) er.textContent = `Faltan ${len - v.length} dígitos`; else if (!(await cb(v))) { er.textContent = 'Código incorrecto'; v = '' } } else if (v.length < len) v += k; draw() };
  return w;
}
const S = { u: LS.get('u', null), lib: LS.get('lib', {}), done: LS.get('done', false), v: 'inicio', n: 1, sel: null };
S.v = S.u ? 'exp' : 'inicio';
const guardar = () => { LS.set('u', S.u); LS.set('lib', S.lib); LS.set('done', S.done) };
const go = (v, n) => { S.v = v; if (n) S.n = n; draw(); scrollTo(0, 0) };
const carpeta = (a, abierta) => `<${abierta ? 'div' : 'button'} class="carpeta ${abierta ? 'open' : ''}" ${abierta ? '' : `data-c="${a.id}"`}><i class="tab">Agente</i><span class="sello">CONFIDENCIAL</span><b>${a.nombre}</b><small>${a.rango}</small></${abierta ? 'div' : 'button'}>`;

/* ---------- vistas ---------- */
const V = {
  inicio: () => `<header class="cab">${gorro}<p class="peq">Archivo secreto de agentes</p><h1>Agencia <span class="rojo">El Rodal</span></h1><p class="sub">${C.caso}</p></header>
    <p class="peq" style="text-align:center">Toca tu carpeta</p><div class="carpetas">${D.agentes.map(a => carpeta(a)).join('')}</div>`,
  login: () => { const a = D.agentes.find(x => x.id === (S.sel || P.get('a')));
    return `<section class="abierta"><button class="sec" id="atras">‹ Carpetas</button>${carpeta(a, true)}<p class="peq">Introduce tu código secreto de 4 dígitos</p><div id="kp"></div></section>` },
  exp: () => { const a = D.agentes.find(x => x.id === S.u); return `<span class="sello">CONFIDENCIAL</span><h2>Expediente · Agente ${a.nombre}</h2><p class="rojo">${a.rango}</p>
    <div class="glass enun">${D.historia}</div><div class="glass"><h3>Sospechosos</h3>${D.sospechosos.map(s => `<div class="ficha"><div><b>${s.n}</b><br><span class="peq">${s.q}</span><br>${s.d}</div></div>`).join('')}</div>
    <div class="glass"><p>Tu primera pista está en <b>${D.salas[0].nombre}</b>. Busca la tarjeta con tu nombre y escanea su código. Apunta cada código que consigas en tu medio folio.</p></div>` },
  sala: () => { const n = S.n, s = D.salas[n - 1], a = D.acertijos[`${S.u}-${n}`];
    if (n > 1 && !S.lib[n - 1]) return `<div class="glass"><h2>Aún no</h2><p>Primero resuelve la sala anterior: <b>${D.salas[n - 2].nombre}</b>.</p></div>`;
    return `<p class="peq">Sala ${n} · ${s.nombre}</p><h2>${a.tipo}</h2><div class="glass enun">${a.enun}</div>
      <div id="ops">${a.opc.map((o, i) => `<button class="opc" data-i="${i}">${o.t}<b>${o.c}</b></button>`).join('')}</div><div id="res"></div>` },
  lib: () => { const c = D.salas.map(s => S.lib[s.n] || '····'); return `<h2>Libreta del detective</h2><div class="glass">${D.salas.map((s, i) => `<div class="ficha"><span class="peq">Código ${i + 1}</span><b style="margin-left:auto;font:700 1.5rem ui-monospace">${c[i]}</b></div>`).join('')}</div>
    <p class="enun">Apunta estos códigos en tu medio folio con el boli.</p>` },
  acusar: () => S.done ? `<div class="glass hero"><h2>¡Caso resuelto!</h2><p class="enun">${D.desenlace}</p><p>Ve a la tele: tu llegada ya está registrada.</p></div>` :
    D.salas.every(s => S.lib[s.n]) ? `<section class="hero"><h2>Acusación formal</h2><p class="peq">Introduce los ${D.salas.length * 4} dígitos</p><div id="kp"></div></section>` : `<div class="glass"><h2>Acusación</h2><p>Todavía te faltan códigos por conseguir.</p></div>`
};
function draw() {
  app.innerHTML = V[S.v](); nav.hidden = !S.u || ['inicio', 'login'].includes(S.v);
  nav.innerHTML = [['exp', 'Expediente'], ['lib', 'Libreta'], ['acusar', 'Acusar']].map(([k, t]) => `<button data-v="${k}" class="${S.v === k ? 'on' : ''}">${t}</button>`).join('');
  document.querySelectorAll('[data-c]').forEach(b => b.onclick = () => { S.sel = b.dataset.c; go('login') });
  const at = $('#atras'); if (at) at.onclick = () => { S.sel = null; go('inicio') };
  const kp = $('#kp'); if (kp && S.v === 'login') kp.append(keypad(4, async v => { const a = D.agentes.find(x => x.id === (S.sel || P.get('a')));
    if (a && await sha(`${a.id}-A-${v}`) === a.h) { if (S.u !== a.id) { S.lib = {}; S.done = false } S.u = a.id; S.sel = null; guardar(); go(P.get('s') ? 'sala' : 'exp', +P.get('s') || 1); return true } return false }));
  if (kp && S.v === 'acusar') kp.append(keypad(16, async v => { if (await sha(`${S.u}-F-${v}`) !== D.final[S.u]) return false; S.done = true; guardar(); await registrar(S.u); go('acusar'); return true }));
  document.querySelectorAll('.opc[data-i]').forEach(b => b.onclick = async () => { const n = S.n, a = D.acertijos[`${S.u}-${n}`], o = a.opc[+b.dataset.i];
    if (await sha(`${S.u}-${n}-${o.c}`) === a.ok) { S.lib[n] = o.c; guardar(); b.classList.add('bien'); document.querySelectorAll('.opc').forEach(x => x.disabled = true);
      $('#res').innerHTML = `<div class="glass"><p class="msg">${D.salas[n - 1].msg}</p><p>Apunta tu código: <b class="rojo" style="font-size:1.6rem">${o.c}</b></p></div>` } else { b.classList.add('mal'); b.disabled = true; $('#res').innerHTML = '<p class="err">Esa no es. Piénsalo otra vez.</p>' } });
}
nav.onclick = e => { const v = e.target.dataset.v; if (v) go(v) };
async function registrar(id) { const t = LS.get('t_' + id, 0) || Date.now(); LS.set('t_' + id, t);
  if (FB) { try { const r = await fb('fin/' + id, 'PUT', { t }); if (!r.ok) throw 0; LS.set('pend', false); return true } catch (e) { LS.set('pend', id); return false } }
  const f = LS.get('fin', {}); f[id] = { t }; LS.set('fin', f); bc && bc.postMessage('fin'); return true }
if (!P.has('tv')) setInterval(() => { const id = LS.get('pend', false); if (id) registrar(id) }, 4000);

/* ---------- MODO TELE (index.html?tv) ---------- */
function tele() {
  document.body.classList.add('tv');
  app.innerHTML = `<div id="reloj">${C.minutos}:00</div><div id="rank"></div><div id="anuncio"></div><div id="cinta">Investigación en curso…</div>
    <div id="ctl"><button id="bi">Iniciar</button><button id="bp">Pausar</button><button id="bf">Finalizar</button><button id="br">Registrar a mano</button></div><div id="modal"></div>`;
  const T = LS.get('tv', { start: 0, ms: 0, t0: 0, run: false, fin: false });
  let st = {}, shown = LS.get('shown', []), seen = new Set(shown), queue = [], busy = false, first = true, music, sig = '';
  const salvar = () => LS.set('tv', T), elapsed = () => T.ms + (T.run ? Date.now() - T.t0 : 0);
  const orden = () => Object.entries(st.fin || {}).filter(([, v]) => v && v.t >= T.start - 2000).sort((a, b) => a[1].t - b[1].t).map(x => x[0]);
  const nombre = id => D.agentes.find(x => x.id === id).nombre;
  const musica = () => { if (!music) { music = sonido(C.musica, C.volMusica); music.loop = true } else music.play().catch(() => {}) };
  function pintar() {
    const mini = shown.length > 0; $('#reloj').classList.toggle('mini', mini); $('#rank').classList.toggle('mini', mini);
    const s = shown.join(); if (s === sig) return; const prev = sig ? sig.split(',') : []; sig = s;
    const fila = (id, i, n) => `<div class="fila${n ? ' nueva' : ''}"><em>${i + 1}º</em>${nombre(id)}<span>${D.agentes.find(x => x.id === id).rango}</span></div>`, R = $('#rank');
    if (shown.length > prev.length && prev.every((x, i) => x === shown[i])) R.insertAdjacentHTML('beforeend', shown.slice(prev.length).map((id, k) => fila(id, prev.length + k, true)).join(''));
    else R.innerHTML = shown.map((id, i) => fila(id, i, false)).join('');
    $('#cinta').textContent = shown.length ? `Va ganando: ${nombre(shown[0])}${shown.length > 1 ? ' · Les siguen: ' + shown.slice(1).map(nombre).join(', ') : ''}` : 'Investigación en curso…';
  }
  async function cola() { if (busy) return; busy = true; while (queue.length) { const id = queue.shift(), a = D.agentes.find(x => x.id === id), pos = shown.length + 1;
      sonido(C.timbre, 1, C.segTimbre); await sleep(C.segTimbre * 1000);
      const cons = C.consigna === 'PUESTO' ? pos : a.capsula; $('#anuncio').innerHTML = `<div><p class="peq">Agencia El Rodal</p><h1>${pos === 1 ? a.nombre.toUpperCase() + ' HA GANADO' : a.nombre + ' ha quedado nº ' + pos}</h1><p>Tu consigna: <b class="oro">${cons}</b></p></div>`;
      $('#anuncio').classList.add('on'); if (music) music.volume = .06; sonido(sfx(a), 1, C.segAnuncio); await sleep(C.segAnuncio * 1000); $('#anuncio').classList.remove('on'); if (music) music.volume = C.volMusica;
      shown.push(id); LS.set('shown', shown); pintar() } busy = false }
  function sync() { if (!T.start || T.fin) return; for (const id of orden()) if (!seen.has(id)) { seen.add(id); if (first) { shown.push(id); LS.set('shown', shown) } else queue.push(id) } first = false; pintar(); cola() }
  const apply = ev => { const { path, data } = JSON.parse(ev.data); if (path === '/') st = data || {}; else { const p = path.split('/').filter(Boolean); let o = st; p.slice(0, -1).forEach(k => o = o[k] = o[k] || {}); o[p[p.length - 1]] = data } sync() };
  if (FB) { const es = new EventSource(`${FB}/rodal.json`); es.addEventListener('put', apply); es.addEventListener('patch', apply) } else { const rd = () => { st = { fin: LS.get('fin', {}) }; sync() }; setInterval(rd, 1000); bc && (bc.onmessage = rd) }
  function estado() { $('#bi').disabled = T.run; $('#bi').textContent = T.start && !T.run && !T.fin ? 'Reanudar' : 'Iniciar'; $('#bp').disabled = !T.run; $('#bf').disabled = !T.start || T.fin; $('#br').disabled = !T.start || T.fin;
    $('#reloj').classList.toggle('pausa', !!T.start && !T.run && !T.fin) }
  function reloj() { const r = Math.max(0, C.minutos * 60 - Math.floor(elapsed() / 1000)); $('#reloj').textContent = T.start && !r ? 'FIN' : `${Math.floor(r / 60)}:${String(r % 60).padStart(2, '0')}` } setInterval(reloj, 250);
  $('#bi').onclick = async () => {
    if (!T.start || T.fin) { Object.assign(T, { start: Date.now(), ms: 0, t0: Date.now(), run: true, fin: false }); shown = []; seen = new Set(); LS.set('shown', []); first = false; st = {}; sig = '#'; pintar(); $('#anuncio').classList.remove('on');
      if (music) { music.currentTime = 0; music.play().catch(() => {}) } else musica(); if (FB) { await fb('fin', 'PUT', null); await fb('start', 'PUT', T.start) } else LS.set('fin', {}) }
    else { T.t0 = Date.now(); T.run = true; musica() } salvar(); estado() };
  $('#bp').onclick = () => { T.ms = elapsed(); T.run = false; music && music.pause(); salvar(); estado() };
  $('#bf').onclick = () => { if (!confirm('¿Finalizar la investigación y mostrar resultados?')) return; T.ms = elapsed(); T.run = false; T.fin = true; music && music.pause(); salvar(); estado(); final() };
  function final() { const f = shown.map((id, i) => { const a = D.agentes.find(x => x.id === id); return `<div class="fila"><em>${i + 1}º</em>${a.nombre}<span>Consigna ${C.consigna === 'PUESTO' ? i + 1 : a.capsula}</span></div>` }).join('');
    $('#anuncio').innerHTML = `<div class="fin"><h1>CASO CERRADO</h1><div>${f}</div><p>${D.desenlace}</p><button id="cf">Cerrar</button></div>`; $('#anuncio').classList.add('on'); $('#cf').onclick = () => $('#anuncio').classList.remove('on') }
  $('#br').onclick = () => { const hecho = new Set([...shown, ...queue, ...Object.keys(st.fin || {})]);
    $('#modal').innerHTML = `<div class="caja"><h2>¿A quién registro?</h2><div class="elige">${D.agentes.map(a => `<button data-id="${a.id}" ${hecho.has(a.id) ? 'disabled' : ''}>${a.nombre}</button>`).join('')}</div><button class="sec" id="mc">Cancelar</button></div>`; $('#modal').classList.add('on');
    $('#mc').onclick = () => $('#modal').classList.remove('on'); $('#modal').querySelectorAll('[data-id]').forEach(b => b.onclick = async () => { $('#modal').classList.remove('on'); await registrar(b.dataset.id) }) };
  document.addEventListener('click', () => { if (T.run && !music) musica() }, { once: true });
  estado(); reloj(); pintar(); if (T.fin) final();
}
if (P.has('tv')) tele(); else { const qa = P.get('a');
  if (qa && D.agentes.some(a => a.id === qa) && qa !== S.u) { S.sel = qa; S.v = 'login' } else if (S.u && P.get('s')) { S.v = 'sala'; S.n = +P.get('s') }
  draw() }
