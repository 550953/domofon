const I=n=>`<i class="ti ti-${n}"></i>`;
const d=JSON.parse(document.getElementById("data").textContent);

const tabs=[["layout-dashboard","Дашборд"],["users","Люди"],["key","Доступ"],["door","Двери"],["camera","Камеры"],["cpu","Устройства"],["report","Отчёты"]];

document.querySelector("#app").innerHTML=`
<div class="topbar">
  <div class="tb-brand">${I("shield-lock")} ${d.brand}</div>
  <div class="tb-tabs">${tabs.map((x,i)=>`<a class="${i?"":"active"}">${I(x[0])}${x[1]}</a>`).join("")}</div>
  <div class="tb-right">
    <span class="tb-status">${I("point-filled")} онлайн</span>
    <b class="tb-avatar">${d.initials}</b>
  </div>
</div>

<div class="wrap">
  <div class="ticker">
    ${d.stats.map(s=>`<div>${I(s.icon)}<small>${s.label}</small><b class="mono">${s.value}</b><em>${s.trend}</em></div>`).join("")}
  </div>

  <div class="title-row">
    <div><h1>${d.building}</h1><span>Живой мониторинг · обновляется автоматически</span></div>
    <button>${I("player-play")} Открыть живой поток</button>
  </div>

  <div class="split">
    <div class="timeline-card">
      <h2>${I("activity-heartbeat")} Лента событий</h2>
      <div class="tl">
        ${d.events.map(e=>`
          <div class="tl-item ${e.kind}">
            <span class="tl-dot"></span>
            <div class="tl-row"><b>${e.name}</b><time class="mono">${e.time}</time></div>
            <div class="tl-meta">${e.meta}</div>
            <span class="tl-tag">${e.status}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="tiles-card">
      <h2>${I("cpu")} Устройства</h2>
      <div class="tiles">
        ${d.devices.map(x=>`
          <div class="tile ${x.kind}">
            <div class="tile-top"><span class="tile-led"></span>${I("router")}</div>
            <div class="tile-name">${x.name}</div>
            <div class="tile-ip mono">${x.ip}</div>
            <div class="tile-status">${x.status}</div>
          </div>
        `).join("")}
      </div>
    </div>
  </div>
</div>`;
