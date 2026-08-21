// DoorFlow — общий слой для «editorial» дизайна.
// Иконки — инлайн SVG (без CDN, работает офлайн), сайдбар/шапка, рендер-хелперы.

const ICON = {
  dashboard:'<rect width="7" height="9" x="3" y="3" rx="1.5"/><rect width="7" height="5" x="14" y="3" rx="1.5"/><rect width="7" height="9" x="14" y="12" rx="1.5"/><rect width="7" height="5" x="3" y="16" rx="1.5"/>',
  people:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
  access:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  doors:'<path d="M11 20H2"/><path d="M11 4.56v16.16a1 1 0 0 0 1.24.97L19 20V5.56a2 2 0 0 0-1.52-1.94l-4-1A2 2 0 0 0 11 4.56z"/><path d="M11 4H8a2 2 0 0 0-2 2v14"/><path d="M14 12h.01"/><path d="M22 20h-3"/>',
  elevator:'<path d="M12 2v20"/><path d="m8 18 4 4 4-4"/><path d="m8 6 4-4 4 4"/>',
  intercom:'<path d="M13.83 16.57a1 1 0 0 0 1.21-.31l.36-.46a2 2 0 0 1 1.6-.8h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.38"/>',
  visitors:'<path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>',
  delivery:'<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 9 5.15"/>',
  cameras:'<path d="m16 13 5.22 3.48a.5.5 0 0 0 .78-.42V7.87a.5.5 0 0 0-.75-.43L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  devices:'<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
  liveEvents:'<path d="M16.25 7.76a6 6 0 0 1 0 8.48"/><path d="M19.08 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 19.07a10 10 0 0 1 0-14.14"/><path d="M7.75 16.24a6 6 0 0 1 0-8.48"/><circle cx="12" cy="12" r="2"/>',
  reports:'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.7.71l3.59 3.58a2.4 2.4 0 0 1 .71 1.7V20a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 18v-2"/><path d="M12 18v-4"/><path d="M16 18v-6"/>',
  system:'<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  settings:'<path d="M9.67 4.14a2.34 2.34 0 0 1 4.66 0 2.34 2.34 0 0 0 3.32 1.91 2.34 2.34 0 0 1 2.33 4.04 2.34 2.34 0 0 0 0 3.83 2.34 2.34 0 0 1-2.33 4.03 2.34 2.34 0 0 0-3.32 1.92 2.34 2.34 0 0 1-4.66 0 2.34 2.34 0 0 0-3.32-1.92 2.34 2.34 0 0 1-2.33-4.03 2.34 2.34 0 0 0 0-3.83A2.34 2.34 0 0 1 6.35 6.05a2.34 2.34 0 0 0 3.32-1.91"/><circle cx="12" cy="12" r="3"/>',
  help:'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  bell:'<path d="M10.27 21a2 2 0 0 0 3.46 0"/><path d="M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8a6 6 0 0 0-12 0c0 4.5-1.41 5.96-2.74 7.33"/>',
  wifi:'<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.86a10 10 0 0 1 14 0"/><path d="M8.5 16.43a5 5 0 0 1 7 0"/>',
  arrowRight:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowUpRight:'<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  circleCheck:'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  scanFace:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/>',
  activity:'<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  shieldAlert:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
  logOut:'<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',
  userPlus:'<path d="M2 21a8 8 0 0 1 13.29-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/>',
  doorOpen2:'<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.56v15.87a1 1 0 0 1-1.24.97L5 19.11V5.89a1 1 0 0 1 .76-.97l5-1.25A1 1 0 0 1 13 4.56"/>',
  pulse:'<path d="M2 12h2.5l1.5-6 3 14 2-8.5 2 3 1.5-3H22"/>',
  penLine:'<path d="M12 20h9"/><path d="M16.38 3.62a1 1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  close:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
  trash:'<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  lock:'<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  unlock:'<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
  phone:'<path d="M13.83 16.57a1 1 0 0 0 1.21-.31l.36-.46a2 2 0 0 1 1.6-.8h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.38"/>',
  phoneOff:'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1-1a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 17.72"/><path d="M15.53 15.53a13 13 0 0 0 3.9 3.9"/><path d="M2 2l20 20"/><path d="M4.4 4.4A2 2 0 0 0 2 6.18 15.9 15.9 0 0 0 9.5 15.5"/>',
  camera:'<path d="m16 13 5.22 3.48a.5.5 0 0 0 .78-.42V7.87a.5.5 0 0 0-.75-.43L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  package:'<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 9 5.15"/>',
  scanBarcode:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M17 7v10"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  fileText:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  refresh:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M8 16H3v5"/>',
  shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  server:'<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
  upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>',
  clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  key:'<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l1.3-1.3a1 1 0 0 0 0-1.4L18.2 5"/><path d="m21.9 6.1-9.4 9.4"/><circle cx="6" cy="18" r="4"/>',
  logoMark:'<path d="M4 3v18"/><path d="M4 3 15.5 6.2v11.6L4 21"/><path d="M9.5 12h7"/><path d="M19 9l3 3-3 3"/>',
  printer:'<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5"/><rect x="6" y="14" width="12" height="8"/>',
};

function svg(name, cls) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="${cls||''}">${ICON[name]||''}</svg>`;
}

const NAV = [
  { key:'dashboard', label:'Дашборд', href:'index.html', icon:'dashboard' },
  { key:'people', label:'Люди', href:'people.html', icon:'people' },
  { key:'access', label:'Доступ', href:'access.html', icon:'access' },
  { key:'doors', label:'Двери', href:'doors.html', icon:'doors' },
  { key:'elevator', label:'Лифты', href:'elevator.html', icon:'elevator' },
  { key:'intercom', label:'Домофон', href:'intercom.html', icon:'intercom' },
  { key:'visitors', label:'Посетители', href:'visitors.html', icon:'visitors' },
  { key:'delivery', label:'Посылки', href:'delivery.html', icon:'delivery' },
  { key:'cameras', label:'Камеры', href:'cameras.html', icon:'cameras' },
  { key:'devices', label:'Устройства', href:'devices.html', icon:'devices' },
  { key:'live-events', label:'События live', href:'live-events.html', icon:'liveEvents' },
  { key:'reports', label:'Отчёты', href:'reports.html', icon:'reports' },
  { key:'system', label:'Система', href:'system.html', icon:'system' },
];

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}
function initialsOf(name) {
  return (name || '').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || '—';
}

/* ---------- wizard engine (full-page multi-step flows) ---------- */
function wizardSteps(items, activeIndex) {
  return `<div class="wsteps">${items.map((label, i) => {
    const state = i < activeIndex ? 'done' : (i === activeIndex ? 'active' : 'todo');
    return `<div class="wstep ${state}"><span class="num">${state === 'done' ? svg('circleCheck') : i + 1}</span>${i + 1} ${label}</div>`;
  }).join('')}</div>`;
}
function wizardPage(opts) {
  return `<div class="wizardhead">
    <div><h1>${opts.title}</h1><p>${opts.sub}</p></div>
    <a class="wcancel" href="${opts.cancelHref}">Отмена</a>
  </div>
  ${opts.stepsHTML}
  <div class="wizardcard">
    <div class="wizardcard-head">${opts.cardTitle}</div>
    <div class="wizardcard-body">${opts.bodyHTML}</div>
    <div class="wizardcard-foot">${opts.footHTML}</div>
  </div>`;
}
function miniSteps(items, activeIndex) {
  return `<div class="msteps">${items.map((label, i) => {
    const state = i < activeIndex ? 'done' : (i === activeIndex ? 'active' : 'todo');
    return `${i > 0 ? '<span class="msep">/</span>' : ''}<span class="mstep ${state}"><span class="dot">${state === 'done' ? svg('circleCheck') : i + 1}</span>${label}</span>`;
  }).join('')}</div>`;
}

/* ---------- detail-page tab bar ---------- */
function tabsBar(items, active, onClickFn) {
  return `<div class="tabsbar">${items.map(t =>
    `<button class="tabitem ${t === active ? 'active' : ''}" onclick="${onClickFn}('${t}')">${t}</button>`
  ).join('')}</div>`;
}

/* ---------- notifications ---------- */
function notifIcon(level) {
  if (level === 'bad') return 'shieldAlert';
  if (level === 'warn') return 'shieldAlert';
  if (level === 'ok') return 'circleCheck';
  return 'devices';
}
function notifItem(n, compact) {
  return `<div class="nitem">
    <span class="ndot ${n.level}"></span>
    <div class="ntx"><b>${n.title}</b><p>${n.body}</p></div>
    ${compact ? `<span class="ntime">${n.time}</span>` : `<span class="ntime">${n.time}</span>`}
  </div>`;
}
function toggleNotifDrop() {
  const el = document.getElementById('notif-drop');
  if (!el) return;
  const willOpen = el.style.display === 'none' || !el.style.display;
  el.style.display = willOpen ? 'block' : 'none';
}
function markAllRead() {
  const list = window.VDX_DB && window.VDX_DB.notifications;
  if (list) list.forEach(n => n.read = true);
  const badge = document.getElementById('notif-badge');
  if (badge) badge.style.display = 'none';
  toast('Все уведомления отмечены как прочитанные');
  if (typeof renderNotifPage === 'function') renderNotifPage();
  renderNotifDrop();
}
function renderNotifDrop() {
  const list = (window.VDX_DB && window.VDX_DB.notifications) || [];
  const el = document.getElementById('notif-drop');
  if (!el) return;
  el.innerHTML = `
    <div class="nd-head"><b>Уведомления</b><a href="notifications.html">Все</a></div>
    <div class="nd-list">${list.slice(0, 6).map(n => notifItem(n, true)).join('') || emptyState('Уведомлений нет.')}</div>`;
}

function renderShell(activeKey, contentHTML) {
  const sideLinks = NAV.map(n => {
    const active = n.key === activeKey;
    return `<a class="${active?'active':''}" href="${n.href}">${svg(n.icon)}${n.label}</a>`;
  }).join('');

  const tabLinks = NAV.map(n => {
    const active = n.key === activeKey;
    return `<a class="${active?'active':''}" href="${n.href}">${n.label}</a>`;
  }).join('');

  document.body.innerHTML = `
<div class="layout">
  <aside class="sidebar">
    <div class="brand">
      <span class="mark">${svg('logoMark')}</span>
      <div>
        <span class="word">DoorFlow</span>
        <span class="sub">Контроль доступа</span>
      </div>
    </div>
    <nav class="nav">${sideLinks}</nav>
    <div class="sidefoot">
      <a href="settings.html">${svg('settings')}Настройки</a>
      <a href="help.html">${svg('help')}Справка</a>
      <div class="account">
        <span class="av">ДА</span>
        <div>
          <div class="name">Демо-аккаунт</div>
          <div class="role">Демо</div>
        </div>
      </div>
    </div>
  </aside>
  <main>
    <header class="top">
      <div class="search">${svg('search')}<input placeholder="Поиск людей, дверей, устройств..."></div>
      <div class="hright">
        <span class="pill ok">${svg('circleCheck')}Все системы в норме</span>
        <span class="pill local">${svg('wifi')}Локальный режим</span>
        <div style="position:relative">
          <button class="iconbtn" aria-label="Уведомления" onclick="event.stopPropagation();toggleNotifDrop()">${svg('bell')}<span class="ping" id="notif-badge"></span></button>
          <div class="notif-drop" id="notif-drop" style="display:none"></div>
        </div>
        <a class="iconbtn" href="help.html" aria-label="Справка">${svg('help')}</a>
        <a class="avatar-btn" href="settings.html">ВР</a>
      </div>
    </header>
    <nav class="mobiletabs">${tabLinks}</nav>
    <div class="content">${contentHTML}</div>
  </main>
</div>`;

  renderNotifDrop();
  const unread = ((window.VDX_DB && window.VDX_DB.notifications) || []).filter(n => !n.read).length;
  const badge = document.getElementById('notif-badge');
  if (badge) badge.style.display = unread ? 'block' : 'none';
  document.addEventListener('click', (e) => {
    const drop = document.getElementById('notif-drop');
    if (drop && drop.style.display === 'block' && !drop.contains(e.target)) drop.style.display = 'none';
  });
}

function tagClass(status) {
  const s = (status || '').toLowerCase();
  if (['онлайн','активен','разрешено','доступен','успешно','online','ok','completed','picked up','picked_up','picked-up','получен','выдан'].includes(s)) return 'ok';
  if (['офлайн','отказано','заблокирован','взлом двери','не опознан','offline','error','denied','истёк','просрочен'].includes(s)) return 'bad';
  return 'warn';
}

/* ---------- modal engine ---------- */
function ensureModalRoot() {
  let root = document.getElementById('modal-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'modal-root';
    document.body.appendChild(root);
  }
  return root;
}

function openModal(title, bodyHTML, opts) {
  opts = opts || {};
  const root = ensureModalRoot();
  root.innerHTML = `
<div class="modal-overlay" onclick="if(event.target===this) closeModal()">
  <div class="modal ${opts.wide ? 'modal-wide' : ''}">
    <div class="modal-head">
      <h3>${title}</h3>
      <button class="modal-x" onclick="closeModal()">${svg('close')}</button>
    </div>
    <div class="modal-body">${bodyHTML}</div>
  </div>
</div>`;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const root = document.getElementById('modal-root');
  if (root) root.innerHTML = '';
  document.body.style.overflow = '';
}

function modalFooter(html) {
  return `<div class="modal-foot">${html}</div>`;
}

/* form field helpers for popups */
function fField(label, inputHTML, opts) {
  opts = opts || {};
  return `<label class="field ${opts.full ? 'field-full' : ''}"><span>${label}</span>${inputHTML}</label>`;
}
function fInput(id, value, placeholder) {
  return `<input id="${id}" value="${value !== undefined && value !== null ? value : ''}" placeholder="${placeholder || ''}">`;
}
function fSelect(id, options, selected) {
  return `<select id="${id}">${options.map(o => `<option ${o === selected ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
}
function fSelectOnChange(id, options, selected, fnName) {
  return `<select id="${id}" onchange="${fnName}(this.value)">${options.map(o => `<option ${o === selected ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
}
function fTextarea(id, value, placeholder) {
  return `<textarea id="${id}" placeholder="${placeholder || ''}">${value || ''}</textarea>`;
}

/* ---------- generic list page (header + filter tabs + stat row) ---------- */
function pageHead(eyebrow, title, sub, actionHTML) {
  return `<div class="pagehead">
    <div>
      ${eyebrow ? `<div class="eyebrow">${eyebrow}</div>` : ''}
      <h1>${title}</h1>
      <p>${sub}</p>
    </div>
    ${actionHTML || ''}
  </div>`;
}

function statRow(items) {
  return `<div class="stats stats-${items.length}">${items.map(s => `
    <div class="stat">
      <span class="ic ${s.bad ? 'bad' : ''}">${svg(s.icon)}</span>
      <div class="eyebrow">${s.label}</div>
      <strong>${s.value}</strong>
    </div>`).join('')}</div>`;
}

function filterTabs(name, options, active, onClick) {
  return `<div class="filtertabs" data-filter="${name}">${options.map(o => `
    <button class="ftab ${o === active ? 'active' : ''}" onclick="${onClick}('${o}')">${o}</button>`).join('')}</div>`;
}

function toolbar(leftHTML, rightHTML) {
  return `<div class="toolbar"><div class="tb-left">${leftHTML || ''}</div><div class="tb-right">${rightHTML || ''}</div></div>`;
}

function emptyState(text) {
  return `<div class="empty">${text}</div>`;
}

function toast(text) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2200);
}
