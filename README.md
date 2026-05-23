<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Preview Layout - Dracmas ADC</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cinzel:wght@400;600&display=swap" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --p:#2e1a47;--p2:#3d2260;--p3:#4a2d6e;
  --gold:#d4a853;--gd:#a07830;--pl:#b89fd4;
  --bg:#0f0a1a;--card:#1a1028;--card2:#221538;
  --text:#f0eaf8;--muted:#8b7aa8;
  --border:rgba(180,150,255,.12);
  --green:#22c55e;--red:#ef4444;
  --r:20px;--rs:14px;
}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);max-width:420px;margin:0 auto;min-height:100vh;overflow-x:hidden}

/* NAV BAR TOP */
.nav{
  position:sticky;top:0;z-index:10;
  background:rgba(15,10,26,.85);
  backdrop-filter:blur(20px);
  border-bottom:1px solid var(--border);
  padding:.85rem 1.25rem;
  display:flex;align-items:center;gap:12px;
}
.nav-logo{
  width:34px;height:34px;border-radius:10px;
  background:linear-gradient(135deg,var(--gold),var(--gd));
  color:var(--p);display:flex;align-items:center;justify-content:center;
  font-family:'Cinzel',serif;font-size:16px;font-weight:600;flex-shrink:0;
}
.nav-title{font-size:15px;font-weight:700;flex:1;color:var(--text)}
.nav-icon{background:rgba(180,150,255,.1);border:none;border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:17px;color:var(--text);flex-shrink:0}

/* SCREEN SWITCHER */
.screen{display:none;padding-bottom:100px}
.screen.active{display:block}

/* HERO CARD */
.hero{
  margin:1rem;
  background:linear-gradient(135deg,#2e1a47,#4a2d6e,#6b3fa0);
  border-radius:24px;padding:1.5rem;
  position:relative;overflow:hidden;
  box-shadow:0 8px 32px rgba(106,63,160,.35);
}
.hero::before{
  content:'';position:absolute;
  top:-40px;right:-40px;width:160px;height:160px;
  border-radius:50%;background:rgba(212,168,83,.08);
}
.hero::after{
  content:'';position:absolute;
  bottom:-30px;left:-30px;width:120px;height:120px;
  border-radius:50%;background:rgba(255,255,255,.04);
}
.hero-greeting{font-size:13px;color:rgba(212,168,83,.7);font-weight:600;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px}
.hero-name{font-size:20px;font-weight:800;color:#fff;margin-bottom:1.25rem}
.hero-bal-label{font-size:11px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.1em}
.hero-bal{font-size:44px;font-weight:900;color:var(--gold);line-height:1;font-family:'Cinzel',serif}
.hero-unit{font-size:16px;color:rgba(212,168,83,.6);margin-left:4px}
.hero-sub{font-size:12px;color:rgba(255,255,255,.4);margin-top:6px}

/* QUICK ACTIONS */
.actions-row{display:flex;gap:10px;padding:0 1rem;margin-top:1rem}
.act-btn{
  flex:1;background:var(--card);border:1px solid var(--border);
  border-radius:var(--r);padding:.9rem .5rem;
  text-align:center;cursor:pointer;
  transition:transform .15s,background .15s;
}
.act-btn:active{transform:scale(.94);background:var(--card2)}
.act-icon{font-size:22px;margin-bottom:5px}
.act-label{font-size:11px;font-weight:700;color:var(--muted);letter-spacing:.02em}

/* SECTION */
.sec-title{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);padding:.9rem 1rem .4rem}

/* TX ITEMS */
.tx-list{padding:0 1rem}
.tx-item{
  display:flex;align-items:center;gap:12px;
  padding:12px;margin-bottom:8px;
  background:var(--card);border-radius:16px;
  border:1px solid var(--border);
}
.tx-icon-wrap{
  width:44px;height:44px;border-radius:14px;
  display:flex;align-items:center;justify-content:center;
  font-size:20px;flex-shrink:0;
}
.tx-info{flex:1;min-width:0}
.tx-cat{font-size:14px;font-weight:700;color:var(--text)}
.tx-sub{font-size:12px;color:var(--muted);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tx-amt{font-size:15px;font-weight:800;flex-shrink:0}
.tx-amt.in{color:var(--green)}
.tx-amt.out{color:var(--red)}

/* CAT COLORS */
.cc{background:rgba(29,78,216,.2);color:#93c5fd}
.cm{background:rgba(157,23,77,.2);color:#f9a8d4}
.ce{background:rgba(109,40,217,.2);color:#c4b5fd}
.cs{background:rgba(6,95,70,.2);color:#6ee7b7}
.ct{background:rgba(212,168,83,.15);color:#d4a853}
.co{background:rgba(107,114,128,.2);color:#d1d5db}

/* BOTTOM NAV */
.bottom-nav{
  position:fixed;bottom:0;left:50%;transform:translateX(-50%);
  width:100%;max-width:420px;
  background:rgba(15,10,26,.92);
  backdrop-filter:blur(20px);
  border-top:1px solid var(--border);
  display:flex;padding:.6rem 0 .8rem;z-index:20;
}
.bn-item{
  flex:1;display:flex;flex-direction:column;
  align-items:center;gap:3px;cursor:pointer;
  padding:.3rem 0;transition:opacity .15s;
}
.bn-item:active{opacity:.6}
.bn-icon{font-size:22px;line-height:1}
.bn-label{font-size:10px;font-weight:600;color:var(--muted);letter-spacing:.04em}
.bn-item.active .bn-icon{filter:drop-shadow(0 0 6px rgba(212,168,83,.6))}
.bn-item.active .bn-label{color:var(--gold)}

/* QR SCREEN */
.qr-hero{
  background:linear-gradient(135deg,#1a0e2e,#2e1a47);
  padding:2rem 1.5rem;text-align:center;
  border-radius:0 0 28px 28px;margin-bottom:1rem;
}
.qr-title{font-size:18px;font-weight:800;color:var(--gold);margin-bottom:.25rem}
.qr-sub{font-size:13px;color:var(--muted)}
.qr-box{
  background:#fff;border-radius:20px;padding:20px;
  margin:0 auto;width:fit-content;
  box-shadow:0 8px 32px rgba(0,0,0,.4);
}
.qr-tabs{display:flex;gap:8px;padding:0 1rem 1rem}
.qr-tab{
  flex:1;padding:10px;text-align:center;
  border-radius:var(--rs);border:1.5px solid var(--border);
  background:var(--card);cursor:pointer;
  font-size:13px;font-weight:700;color:var(--muted);
  transition:all .15s;
}
.qr-tab.active{background:linear-gradient(135deg,var(--p),var(--p3));color:var(--gold);border-color:var(--p)}
.scan-area{
  margin:0 1rem;background:var(--card);border-radius:20px;
  border:2px dashed var(--border);
  padding:2rem;text-align:center;
  display:flex;flex-direction:column;align-items:center;gap:12px;
}
.scan-icon{font-size:56px;line-height:1}
.scan-txt{font-size:14px;color:var(--muted);line-height:1.5}
.scan-btn{
  background:linear-gradient(135deg,var(--p),var(--p3));
  color:var(--gold);border:none;border-radius:var(--rs);
  padding:12px 28px;font-size:14px;font-weight:700;
  cursor:pointer;font-family:'Inter',sans-serif;
  box-shadow:0 4px 14px rgba(46,26,71,.35);
  margin-top:.5rem;
}

/* TRANSFER SCREEN */
.transfer-header{padding:1.25rem 1rem .5rem;font-size:20px;font-weight:800;color:var(--text)}
.member-select{padding:0 1rem;margin-bottom:1rem}
.member-chips{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.member-chips::-webkit-scrollbar{display:none}
.mchip{
  display:flex;flex-direction:column;align-items:center;gap:5px;
  cursor:pointer;flex-shrink:0;padding:8px 12px;
  border-radius:14px;border:2px solid var(--border);
  background:var(--card);transition:all .15s;
}
.mchip.sel{border-color:var(--gold);background:rgba(212,168,83,.1)}
.mchip-av{
  width:42px;height:42px;border-radius:50%;
  background:linear-gradient(135deg,#ede0f5,#c4b5fd);
  color:var(--p);display:flex;align-items:center;justify-content:center;
  font-size:14px;font-weight:800;
}
.mchip-name{font-size:11px;font-weight:600;color:var(--text);white-space:nowrap}
.amount-card{
  margin:0 1rem 1rem;background:var(--card);
  border-radius:20px;border:1px solid var(--border);
  padding:1.25rem;
}
.amount-label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-bottom:.5rem}
.amount-display{font-size:48px;font-weight:900;color:var(--text);font-family:'Cinzel',serif;letter-spacing:-.02em}
.amount-unit{font-size:18px;color:var(--muted);margin-left:6px}
.numpad{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 1rem}
.numpad-btn{
  background:var(--card);border:1px solid var(--border);
  border-radius:var(--rs);padding:16px;
  font-size:20px;font-weight:700;color:var(--text);
  cursor:pointer;text-align:center;
  transition:background .1s,transform .1s;
  font-family:'Inter',sans-serif;
}
.numpad-btn:active{background:var(--card2);transform:scale(.93)}
.numpad-btn.del{color:var(--red)}
.numpad-btn.ok{background:linear-gradient(135deg,var(--p),var(--p3));color:var(--gold);border-color:transparent}

/* PERFIL SCREEN */
.perfil-bg{
  background:linear-gradient(160deg,#1a0e2e,#2e1a47,#3d2260);
  padding:2rem 1.5rem 1.5rem;text-align:center;
  border-radius:0 0 32px 32px;
  position:relative;overflow:hidden;
}
.perfil-bg::before{content:'';position:absolute;top:-40px;right:-40px;width:150px;height:150px;border-radius:50%;background:rgba(212,168,83,.06)}
.p-avatar{
  width:88px;height:88px;border-radius:50%;
  background:linear-gradient(135deg,#c4b5fd,#a78bfa);
  color:#1a0e2e;display:flex;align-items:center;justify-content:center;
  font-size:32px;font-weight:800;
  margin:0 auto 1rem;border:3px solid var(--gold);
  box-shadow:0 4px 20px rgba(167,139,250,.3);
}
.p-name{font-size:20px;font-weight:800;color:var(--text)}
.p-user{font-size:13px;color:var(--muted);margin-top:3px}
.p-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:1rem}
.stat{background:var(--card);border-radius:16px;border:1px solid var(--border);padding:.9rem .5rem;text-align:center}
.stat-n{font-size:22px;font-weight:800;color:var(--gold);font-family:'Cinzel',serif}
.stat-l{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-top:3px}
.info-list{padding:0 1rem}
.info-row{display:flex;justify-content:space-between;align-items:center;padding:13px 0;border-bottom:1px solid var(--border)}
.info-key{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}
.info-val{font-size:14px;font-weight:600;color:var(--text)}

/* LOJA SCREEN */
.loja-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 1rem}
.loja-card{background:var(--card);border-radius:20px;border:1px solid var(--border);overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,.2)}
.loja-img-wrap{height:130px;background:linear-gradient(135deg,#2e1a47,#4a2d6e);display:flex;align-items:center;justify-content:center;font-size:40px}
.loja-body{padding:.75rem}
.loja-nome{font-size:13px;font-weight:700;color:var(--text)}
.loja-preco{font-size:13px;font-weight:800;color:var(--gold);margin-top:3px}

/* MSG INPUT */
.msg-wrap{margin:0 1rem 1rem;position:relative}
.msg-input{
  width:100%;padding:12px 14px;font-size:14px;
  font-family:'Inter',sans-serif;
  background:var(--card);border:1px solid var(--border);
  border-radius:var(--rs);color:var(--text);outline:none;
}
.msg-input::placeholder{color:var(--muted)}
.msg-input:focus{border-color:rgba(212,168,83,.4)}

/* SWITCH PREVIEW */
.preview-bar{
  background:#1a1028;border-bottom:1px solid var(--border);
  padding:.6rem 1rem;display:flex;gap:6px;overflow-x:auto;
  scrollbar-width:none;position:sticky;top:0;z-index:30;
}
.preview-bar::-webkit-scrollbar{display:none}
.prev-chip{
  padding:5px 12px;border-radius:20px;font-size:11px;font-weight:700;
  border:1px solid var(--border);background:var(--card);
  color:var(--muted);cursor:pointer;white-space:nowrap;flex-shrink:0;
}
.prev-chip.active{background:var(--gold);color:var(--p);border-color:var(--gold)}
</style>
</head>
<body>

<div class="preview-bar">
  <div class="prev-chip active" onclick="showScreen('home',this)">🏠 Home</div>
  <div class="prev-chip" onclick="showScreen('transfer',this)">↗ Transferir</div>
  <div class="prev-chip" onclick="showScreen('qr',this)">📷 QR Code</div>
  <div class="prev-chip" onclick="showScreen('perfil',this)">👤 Perfil</div>
  <div class="prev-chip" onclick="showScreen('loja',this)">🛍️ Lojinha</div>
</div>

<!-- HOME -->
<div id="s-home" class="screen active">
  <div class="nav">
    <div class="nav-logo">D</div>
    <span class="nav-title">Dracmas ADC</span>
    <button class="nav-icon">🔔</button>
    <button class="nav-icon">⚙</button>
  </div>

  <div class="hero">
    <div class="hero-greeting">Boa tarde</div>
    <div class="hero-name">João Silva 👋</div>
    <div class="hero-bal-label">seu saldo</div>
    <div>
      <span class="hero-bal">247</span>
      <span class="hero-unit">₯</span>
    </div>
    <div class="hero-sub">membro desde 12/01/2025</div>
  </div>

  <div class="actions-row">
    <div class="act-btn" onclick="showScreen('transfer',document.querySelectorAll('.prev-chip')[1])">
      <div class="act-icon">↗</div>
      <div class="act-label">transferir</div>
    </div>
    <div class="act-btn" onclick="showScreen('qr',document.querySelectorAll('.prev-chip')[2])">
      <div class="act-icon">📷</div>
      <div class="act-label">QR code</div>
    </div>
    <div class="act-btn">
      <div class="act-icon">📋</div>
      <div class="act-label">extrato</div>
    </div>
    <div class="act-btn" onclick="showScreen('loja',document.querySelectorAll('.prev-chip')[4])">
      <div class="act-icon">🛍️</div>
      <div class="act-label">lojinha</div>
    </div>
  </div>

  <div class="sec-title">últimas transações</div>
  <div class="tx-list">
    <div class="tx-item">
      <div class="tx-icon-wrap cs">⛪</div>
      <div class="tx-info">
        <div class="tx-cat">Culto</div>
        <div class="tx-sub">presença no culto de domingo</div>
      </div>
      <div class="tx-amt in">+50 ₯</div>
    </div>
    <div class="tx-item">
      <div class="tx-icon-wrap ct">↔️</div>
      <div class="tx-info">
        <div class="tx-cat">Transferência</div>
        <div class="tx-sub">João → Maria · "obrigado!"</div>
      </div>
      <div class="tx-amt out">-20 ₯</div>
    </div>
    <div class="tx-item">
      <div class="tx-icon-wrap ce">🎉</div>
      <div class="tx-info">
        <div class="tx-cat">Evento</div>
        <div class="tx-sub">participação no retiro</div>
      </div>
      <div class="tx-amt in">+30 ₯</div>
    </div>
    <div class="tx-item">
      <div class="tx-icon-wrap cm">🏆</div>
      <div class="tx-info">
        <div class="tx-cat">Conquista</div>
        <div class="tx-sub">100 dracmas acumulados!</div>
      </div>
      <div class="tx-amt in">+10 ₯</div>
    </div>
  </div>
</div>

<!-- TRANSFER -->
<div id="s-transfer" class="screen">
  <div class="nav">
    <button class="nav-icon" onclick="showScreen('home',document.querySelectorAll('.prev-chip')[0])">←</button>
    <span class="nav-title">Transferir</span>
  </div>

  <div class="transfer-header">Para quem? 👥</div>
  <div class="member-select">
    <div class="member-chips">
      <div class="mchip sel">
        <div class="mchip-av">MS</div>
        <div class="mchip-name">Maria</div>
      </div>
      <div class="mchip">
        <div class="mchip-av">PO</div>
        <div class="mchip-name">Pedro</div>
      </div>
      <div class="mchip">
        <div class="mchip-av">AL</div>
        <div class="mchip-name">Ana</div>
      </div>
      <div class="mchip">
        <div class="mchip-av">LC</div>
        <div class="mchip-name">Lucas</div>
      </div>
      <div class="mchip">
        <div class="mchip-av">JS</div>
        <div class="mchip-name">Julia</div>
      </div>
    </div>
  </div>

  <div class="amount-card">
    <div class="amount-label">quanto enviar?</div>
    <div>
      <span class="amount-display" id="amount-display">0</span>
      <span class="amount-unit">₯</span>
    </div>
  </div>

  <div class="numpad">
    <div class="numpad-btn" onclick="numpad('1')">1</div>
    <div class="numpad-btn" onclick="numpad('2')">2</div>
    <div class="numpad-btn" onclick="numpad('3')">3</div>
    <div class="numpad-btn" onclick="numpad('4')">4</div>
    <div class="numpad-btn" onclick="numpad('5')">5</div>
    <div class="numpad-btn" onclick="numpad('6')">6</div>
    <div class="numpad-btn" onclick="numpad('7')">7</div>
    <div class="numpad-btn" onclick="numpad('8')">8</div>
    <div class="numpad-btn" onclick="numpad('9')">9</div>
    <div class="numpad-btn del" onclick="numpad('del')">⌫</div>
    <div class="numpad-btn" onclick="numpad('0')">0</div>
    <div class="numpad-btn ok" onclick="alert('Transferência confirmada! 🎉')">✓</div>
  </div>
  <div style="height:.75rem"></div>
  <div class="msg-wrap">
    <input class="msg-input" type="text" placeholder="💬 mensagem opcional..."/>
  </div>
</div>

<!-- QR CODE -->
<div id="s-qr" class="screen">
  <div class="nav">
    <button class="nav-icon" onclick="showScreen('home',document.querySelectorAll('.prev-chip')[0])">←</button>
    <span class="nav-title">QR Code</span>
  </div>

  <div class="qr-hero">
    <div class="qr-title">Pagamentos por QR</div>
    <div class="qr-sub">mostre ou escaneie para transferir dracmas</div>
  </div>

  <div class="qr-tabs">
    <div class="qr-tab active" id="tab-meu" onclick="switchQR('meu')">Meu QR</div>
    <div class="qr-tab" id="tab-scan" onclick="switchQR('scan')">Escanear</div>
  </div>

  <div id="panel-meu" style="text-align:center;padding:0 1rem 1rem">
    <p style="font-size:13px;color:var(--muted);margin-bottom:1rem">Mostre este QR para receber dracmas</p>
    <div class="qr-box" id="qr-canvas"></div>
    <p style="font-size:13px;color:var(--muted);margin-top:1rem">João Silva · @joao.silva</p>
    <div style="margin-top:1rem;display:flex;gap:8px">
      <div style="flex:1;background:var(--card);border:1px solid var(--border);border-radius:var(--rs);padding:10px;text-align:center;cursor:pointer">
        <div style="font-size:11px;font-weight:700;color:var(--muted)">valor livre</div>
      </div>
      <div style="flex:1;background:linear-gradient(135deg,var(--p),var(--p3));border-radius:var(--rs);padding:10px;text-align:center;cursor:pointer">
        <div style="font-size:11px;font-weight:700;color:var(--gold)">definir valor</div>
      </div>
    </div>
  </div>

  <div id="panel-scan" style="display:none">
    <div class="scan-area">
      <div class="scan-icon">📷</div>
      <div class="scan-txt">Aponte a câmera para o QR code de outro membro para transferir dracmas</div>
      <button class="scan-btn">Abrir câmera</button>
    </div>
    <div style="padding:1rem;text-align:center;color:var(--muted);font-size:13px">ou</div>
    <div style="padding:0 1rem">
      <input class="msg-input" type="text" placeholder="colar link do QR..."/>
    </div>
  </div>
</div>

<!-- PERFIL -->
<div id="s-perfil" class="screen">
  <div class="nav">
    <button class="nav-icon" onclick="showScreen('home',document.querySelectorAll('.prev-chip')[0])">←</button>
    <span class="nav-title">Perfil</span>
  </div>

  <div class="perfil-bg">
    <div class="p-avatar">JS</div>
    <div class="p-name">João Silva</div>
    <div class="p-user">@joao.silva · membro</div>
  </div>

  <div class="p-stats">
    <div class="stat">
      <div class="stat-n">247</div>
      <div class="stat-l">saldo</div>
    </div>
    <div class="stat">
      <div class="stat-n">390</div>
      <div class="stat-l">recebidos</div>
    </div>
    <div class="stat">
      <div class="stat-n">143</div>
      <div class="stat-l">enviados</div>
    </div>
  </div>

  <div class="info-list" style="margin-top:.5rem">
    <div class="info-row">
      <span class="info-key">usuário</span>
      <span class="info-value">@joao.silva</span>
    </div>
    <div class="info-row">
      <span class="info-key">membro desde</span>
      <span class="info-value">12 de jan. de 2025</span>
    </div>
    <div class="info-row">
      <span class="info-key">status</span>
      <span class="info-value">✅ Membro</span>
    </div>
  </div>

  <div style="padding:1rem">
    <button style="width:100%;padding:13px;font-size:14px;font-weight:700;font-family:'Inter',sans-serif;background:linear-gradient(135deg,var(--p),var(--p3));color:var(--gold);border:none;border-radius:var(--rs);cursor:pointer;margin-bottom:10px">mudar senha 🔑</button>
    <button style="width:100%;padding:13px;font-size:14px;font-weight:700;font-family:'Inter',sans-serif;background:transparent;color:#ef4444;border:1.5px solid rgba(239,68,68,.3);border-radius:var(--rs);cursor:pointer">sair da conta</button>
  </div>
</div>

<!-- LOJA -->
<div id="s-loja" class="screen">
  <div class="nav">
    <button class="nav-icon" onclick="showScreen('home',document.querySelectorAll('.prev-chip')[0])">←</button>
    <span class="nav-title">🛍️ Lojinha</span>
  </div>

  <p style="font-size:12px;color:var(--muted);padding:.75rem 1rem;line-height:1.6">Veja os itens e seus preços. Compre presencialmente na feirinha!</p>

  <div class="loja-grid">
    <div class="loja-card">
      <div class="loja-img-wrap">🍫</div>
      <div class="loja-body">
        <div class="loja-nome">Brigadeiro</div>
        <div class="loja-preco">5 ₯</div>
      </div>
    </div>
    <div class="loja-card">
      <div class="loja-img-wrap">🧃</div>
      <div class="loja-body">
        <div class="loja-nome">Suco</div>
        <div class="loja-preco">8 ₯</div>
      </div>
    </div>
    <div class="loja-card">
      <div class="loja-img-wrap">🍪</div>
      <div class="loja-body">
        <div class="loja-nome">Biscoito</div>
        <div class="loja-preco">3 ₯</div>
      </div>
    </div>
    <div class="loja-card">
      <div class="loja-img-wrap">☕</div>
      <div class="loja-body">
        <div class="loja-nome">Café</div>
        <div class="loja-preco">4 ₯</div>
      </div>
    </div>
  </div>
</div>

<div class="bottom-nav">
  <div class="bn-item active" id="bn-home" onclick="showScreen('home',document.querySelectorAll('.prev-chip')[0]);setNav('bn-home')">
    <div class="bn-icon">🏠</div>
    <div class="bn-label">início</div>
  </div>
  <div class="bn-item" id="bn-transfer" onclick="showScreen('transfer',document.querySelectorAll('.prev-chip')[1]);setNav('bn-transfer')">
    <div class="bn-icon">↗</div>
    <div class="bn-label">enviar</div>
  </div>
  <div class="bn-item" id="bn-qr" onclick="showScreen('qr',document.querySelectorAll('.prev-chip')[2]);setNav('bn-qr')">
    <div class="bn-icon">📷</div>
    <div class="bn-label">QR</div>
  </div>
  <div class="bn-item" id="bn-perfil" onclick="showScreen('perfil',document.querySelectorAll('.prev-chip')[3]);setNav('bn-perfil')">
    <div class="bn-icon">👤</div>
    <div class="bn-label">perfil</div>
  </div>
  <div class="bn-item" id="bn-loja" onclick="showScreen('loja',document.querySelectorAll('.prev-chip')[4]);setNav('bn-loja')">
    <div class="bn-icon">🛍️</div>
    <div class="bn-label">loja</div>
  </div>
</div>

<script>
// SCREEN
function showScreen(id, chip) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('s-' + id).classList.add('active');
  document.querySelectorAll('.prev-chip').forEach(c => c.classList.remove('active'));
  if (chip) chip.classList.add('active');
  window.scrollTo(0, 0);
}

// BOTTOM NAV
function setNav(id) {
  document.querySelectorAll('.bn-item').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// NUMPAD
let amtVal = '';
function numpad(v) {
  if (v === 'del') { amtVal = amtVal.slice(0, -1); }
  else if (amtVal.length < 5) { amtVal += v; }
  document.getElementById('amount-display').textContent = amtVal || '0';
}

// QR TABS
function switchQR(tab) {
  document.getElementById('tab-meu').classList.toggle('active', tab === 'meu');
  document.getElementById('tab-scan').classList.toggle('active', tab === 'scan');
  document.getElementById('panel-meu').style.display = tab === 'meu' ? 'block' : 'none';
  document.getElementById('panel-scan').style.display = tab === 'scan' ? 'block' : 'none';
}

// MEMBER CHIPS
document.querySelectorAll('.mchip').forEach(c => {
  c.onclick = () => {
    document.querySelectorAll('.mchip').forEach(x => x.classList.remove('sel'));
    c.classList.add('sel');
  };
});

// GENERATE QR
window.onload = () => {
  new QRCode(document.getElementById('qr-canvas'), {
    text: 'dracmas-adc://pay?to=joao.silva',
    width: 200, height: 200,
    colorDark: '#2e1a47', colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
};
</script>
</body>
</html>
