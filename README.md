<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <title>Dracmas ADC ₯</title>
  <meta name="theme-color" content="#2e1a47" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="Dracmas ADC" />
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --purple: #2e1a47;
      --purple-mid: #4a2d6e;
      --purple-light: #b89fd4;
      --gold: #d4a853;
      --gold-dark: #a07830;
      --text: #1c1c1c;
      --text-muted: #6b7280;
      --border: rgba(0,0,0,0.1);
      --card-bg: #ffffff;
      --page-bg: #f3f0f8;
      --radius: 14px;
      --radius-sm: 8px;
    }
    body { font-family:'Lato',sans-serif; background:var(--page-bg); color:var(--text); min-height:100vh; max-width:420px; margin:0 auto; overflow-x:hidden; }
    h1 { font-family:'Cinzel',serif; }
    .screen { display:none; min-height:100vh; padding-bottom:2.5rem; }
    .screen.active { display:block; }
    #screen-loader { flex-direction:column; align-items:center; justify-content:center; min-height:100vh; background:var(--purple); }
    #screen-loader.active { display:flex; }
    .loader-coin { width:80px;height:80px;border-radius:50%;background:var(--gold);color:var(--purple);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:42px;font-weight:600;border:4px solid var(--gold-dark);animation:pulse 1.5s ease-in-out infinite; }
    @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
    .loader-text{color:var(--gold);font-family:'Cinzel',serif;font-size:13px;letter-spacing:.15em;margin-top:1.25rem;}
    #screen-login{background:var(--page-bg);}
    .login-hero{background:var(--purple);padding:3rem 1.5rem 2.5rem;text-align:center;border-radius:0 0 28px 28px;margin-bottom:2rem;}
    .login-coin{width:80px;height:80px;border-radius:50%;background:var(--gold);color:var(--purple);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:42px;font-weight:600;border:4px solid var(--gold-dark);margin:0 auto 1.25rem;}
    .login-title{color:var(--gold);font-size:22px;letter-spacing:.05em;}
    .login-sub{color:var(--purple-light);font-size:13px;margin-top:5px;letter-spacing:.08em;}
    .form-wrap{padding:0 1.5rem;}
    .form-section{padding:0 1.25rem;}
    .form-group{margin-bottom:1.1rem;}
    .form-label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);display:block;margin-bottom:6px;}
    .form-hint{font-size:11px;color:var(--text-muted);margin-top:4px;}
    .form-input{width:100%;padding:12px 14px;font-size:15px;font-family:'Lato',sans-serif;border:1.5px solid var(--border);border-radius:var(--radius-sm);background:var(--card-bg);color:var(--text);outline:none;transition:border-color .2s;}
    .form-input:focus{border-color:var(--purple);}
    .input-wrap{position:relative;}
    .input-wrap .form-input{padding-right:44px;}
    .toggle-pw{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted);line-height:1;}
    select.form-input{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px;}
    .btn-primary{width:100%;padding:14px;font-size:15px;font-weight:700;font-family:'Lato',sans-serif;background:var(--purple);color:var(--gold);border:none;border-radius:var(--radius-sm);cursor:pointer;transition:opacity .15s;}
    .btn-primary:active{opacity:.82;}
    .btn-primary.danger{background:#7a1a1a;color:#fff;}
    .btn-secondary{width:100%;padding:12px;font-size:14px;font-weight:700;font-family:'Lato',sans-serif;background:transparent;color:var(--purple);border:1.5px solid var(--purple);border-radius:var(--radius-sm);cursor:pointer;margin-top:10px;}
    .topbar{background:var(--purple);padding:1rem 1.25rem;display:flex;align-items:center;gap:12px;position:sticky;top:0;z-index:10;}
    .topbar-logo{width:34px;height:34px;border-radius:50%;background:var(--gold);color:var(--purple);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:18px;font-weight:600;border:2px solid var(--gold-dark);flex-shrink:0;}
    .topbar-title{color:var(--gold);font-family:'Cinzel',serif;font-size:15px;letter-spacing:.05em;flex:1;}
    .topbar-back,.topbar-icon{background:none;border:none;color:var(--gold);font-size:22px;cursor:pointer;padding:4px;line-height:1;}
    .balance-card{margin:1.25rem 1.25rem 0;background:var(--purple);border-radius:var(--radius);padding:1.4rem 1.5rem;position:relative;overflow:hidden;}
    .balance-card::before{content:'₯';position:absolute;right:-10px;top:-10px;font-family:'Cinzel',serif;font-size:90px;color:rgba(212,168,83,.08);line-height:1;pointer-events:none;}
    .balance-label{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--purple-light);margin-bottom:4px;}
    .balance-amount{font-size:40px;font-weight:700;color:var(--gold);font-family:'Cinzel',serif;line-height:1.1;}
    .balance-unit{font-size:18px;color:var(--purple-light);margin-left:6px;}
    .balance-user{font-size:12px;color:var(--purple-light);margin-top:8px;}
    .quick-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:1.25rem 1.25rem 0;}
    .action-btn{padding:1rem;border-radius:var(--radius-sm);border:1.5px solid var(--border);background:var(--card-bg);cursor:pointer;text-align:center;}
    .action-btn:active{background:#ede0f5;}
    .action-icon{font-size:24px;margin-bottom:6px;}
    .action-label{font-size:13px;font-weight:700;color:var(--text);}
    .section-header{padding:1.4rem 1.25rem 0.6rem;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text-muted);}
    .tx-list{padding:0 1.25rem;}
    .tx-item{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--border);}
    .tx-icon{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0;}
    .tx-icon.in{background:#e6f4ec;color:#2d6a4f;}
    .tx-icon.out{background:#fdecea;color:#a33030;}
    .tx-info{flex:1;min-width:0;}
    .tx-desc{font-size:14px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
    .tx-date{font-size:12px;color:var(--text-muted);}
    .tx-amount{font-size:15px;font-weight:700;flex-shrink:0;}
    .tx-amount.in{color:#2d6a4f;}
    .tx-amount.out{color:#a33030;}
    .member-list{padding:0 1.25rem;}
    .member-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);}
    .member-avatar{width:40px;height:40px;border-radius:50%;background:#ede0f5;color:var(--purple);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0;}
    .member-name{font-size:14px;font-weight:700;color:var(--text);}
    .member-sub{font-size:12px;color:var(--text-muted);}
    .member-actions{display:flex;gap:6px;margin-left:auto;flex-shrink:0;}
    .btn-sm{padding:5px 10px;font-size:12px;font-weight:700;font-family:'Lato',sans-serif;border:none;border-radius:6px;cursor:pointer;}
    .btn-sm.approve{background:#2d6a4f;color:#fff;}
    .btn-sm.reject,.btn-sm.del{background:#7a1a1a;color:#fff;}
    .btn-sm.view{background:var(--purple);color:var(--gold);}
    .badge-count{display:inline-block;background:#a33030;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;margin-left:6px;}
    .tag-admin{font-size:10px;background:var(--gold);color:var(--purple);padding:2px 8px;border-radius:10px;font-weight:700;margin-left:6px;vertical-align:middle;}
    .toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--purple);color:var(--gold);padding:10px 22px;border-radius:22px;font-size:14px;font-weight:700;display:none;z-index:999;white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,.2);}
    .error-msg{color:#a33030;font-size:13px;margin-top:8px;display:none;}
    .success-msg{color:#2d6a4f;font-size:13px;margin-top:8px;display:none;}
    .empty{padding:1.5rem 0;text-align:center;font-size:14px;color:var(--text-muted);}
    .spinner{display:inline-block;width:18px;height:18px;border:2px solid var(--gold);border-top-color:transparent;border-radius:50%;animation:spin .7s linear infinite;vertical-align:middle;margin-right:8px;}
    @keyframes spin{to{transform:rotate(360deg)}}
    .tabs{display:flex;border-bottom:2px solid var(--border);margin:0 1.25rem 1rem;}
    .tab{flex:1;padding:10px;text-align:center;font-size:13px;font-weight:700;cursor:pointer;color:var(--text-muted);border-bottom:2px solid transparent;margin-bottom:-2px;}
    .tab.active{color:var(--purple);border-bottom-color:var(--purple);}
    .pw-strength{height:4px;border-radius:2px;margin-top:6px;transition:width .3s,background .3s;width:0;}
    .pw-strength.weak{width:33%;background:#a33030;}
    .pw-strength.medium{width:66%;background:#d4a853;}
    .pw-strength.strong{width:100%;background:#2d6a4f;}
    .pw-strength-label{font-size:11px;margin-top:3px;}
    .menu-item{display:flex;align-items:center;gap:14px;padding:14px 1.25rem;border-bottom:1px solid var(--border);cursor:pointer;}
    .menu-item:active{background:#ede0f5;}
    .menu-icon{font-size:20px;width:32px;text-align:center;}
    .menu-label{font-size:15px;color:var(--text);}
    .menu-arrow{margin-left:auto;color:var(--text-muted);font-size:18px;}
  </style>
</head>
<body>

<!-- LOADER -->
<div id="screen-loader" class="screen active">
  <div class="loader-coin">₯</div>
  <div class="loader-text">carregando...</div>
</div>

<!-- LOGIN -->
<div id="screen-login" class="screen">
  <div class="login-hero">
    <div class="login-coin">₯</div>
    <h1 class="login-title">Dracmas ADC</h1>
    <div class="login-sub">Igreja ADC</div>
  </div>
  <div class="form-wrap">
    <div class="form-group">
      <label class="form-label">nome de usuário</label>
      <input class="form-input" id="login-user" type="text" placeholder="Ex: joao.silva" autocomplete="username" />
    </div>
    <div class="form-group">
      <label class="form-label">senha</label>
      <div class="input-wrap">
        <input class="form-input" id="login-pw" type="password" placeholder="sua senha" autocomplete="current-password" />
        <button class="toggle-pw" type="button" onclick="togglePw('login-pw',this)">👁</button>
      </div>
    </div>
    <div class="error-msg" id="login-error"></div>
    <button class="btn-primary" id="login-btn" onclick="doLogin()">entrar</button>
    <button class="btn-secondary" onclick="goTo('screen-register')">criar conta</button>
  </div>
</div>

<!-- REGISTER -->
<div id="screen-register" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goTo('screen-login')">←</button>
    <span class="topbar-title">criar conta</span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">nome completo</label>
      <input class="form-input" id="reg-name" type="text" placeholder="Ex: João Silva" />
    </div>
    <div class="form-group">
      <label class="form-label">nome de usuário</label>
      <input class="form-input" id="reg-user" type="text" placeholder="Ex: joao.silva (sem espaço)" />
      <div class="form-hint">só letras, números e ponto. sem espaços.</div>
    </div>
    <div class="form-group">
      <label class="form-label">senha</label>
      <div class="input-wrap">
        <input class="form-input" id="reg-pw" type="password" placeholder="mínimo 6 caracteres" oninput="checkStrength(this.value)" autocomplete="new-password" />
        <button class="toggle-pw" type="button" onclick="togglePw('reg-pw',this)">👁</button>
      </div>
      <div class="pw-strength" id="pw-strength-bar"></div>
      <div class="pw-strength-label" id="pw-strength-label"></div>
    </div>
    <div class="form-group">
      <label class="form-label">confirmar senha</label>
      <div class="input-wrap">
        <input class="form-input" id="reg-pw2" type="password" placeholder="repita a senha" autocomplete="new-password" />
        <button class="toggle-pw" type="button" onclick="togglePw('reg-pw2',this)">👁</button>
      </div>
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-bottom:1rem;line-height:1.6">
      ⏳ Sua conta ficará <strong>pendente</strong> até o administrador aprovar o seu acesso.
    </p>
    <div class="error-msg" id="reg-error"></div>
    <button class="btn-primary" id="reg-btn" onclick="doRegister()">solicitar acesso</button>
  </div>
</div>

<!-- HOME -->
<div id="screen-home" class="screen">
  <div class="topbar">
    <div class="topbar-logo">₯</div>
    <span class="topbar-title" id="home-greeting">olá!</span>
    <button class="topbar-icon" onclick="goTo('screen-settings')" title="configurações">⚙</button>
  </div>
  <div class="balance-card">
    <div class="balance-label">saldo atual</div>
    <div><span class="balance-amount" id="home-balance">0</span><span class="balance-unit">₯</span></div>
    <div class="balance-user" id="home-user"></div>
  </div>
  <div class="quick-actions">
    <div class="action-btn" onclick="goTo('screen-transfer')">
      <div class="action-icon">↗</div><div class="action-label">transferir</div>
    </div>
    <div class="action-btn" onclick="goTo('screen-history')">
      <div class="action-icon">📋</div><div class="action-label">extrato</div>
    </div>
  </div>
  <div id="admin-btns" style="display:none">
    <div class="quick-actions">
      <div class="action-btn" onclick="goTo('screen-admin')">
        <div class="action-icon">👑</div><div class="action-label">gerenciar</div>
      </div>
      <div class="action-btn" onclick="goTo('screen-pending')">
        <div class="action-icon">⏳</div>
        <div class="action-label">aprovar <span id="pending-badge" class="badge-count" style="display:none">0</span></div>
      </div>
    </div>
  </div>
  <div class="section-header">últimas transações</div>
  <div class="tx-list" id="home-txs"><div class="empty">carregando...</div></div>
</div>

<!-- CONFIGURAÇÕES -->
<div id="screen-settings" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">←</button>
    <span class="topbar-title">configurações</span>
  </div>
  <div style="padding-top:.5rem">
    <div class="menu-item" onclick="goTo('screen-change-pw')">
      <div class="menu-icon">🔑</div>
      <div class="menu-label">mudar senha</div>
      <div class="menu-arrow">›</div>
    </div>
    <div class="menu-item" onclick="doLogout()">
      <div class="menu-icon">⎋</div>
      <div class="menu-label" style="color:#a33030">sair da conta</div>
      <div class="menu-arrow">›</div>
    </div>
  </div>
</div>

<!-- MUDAR SENHA -->
<div id="screen-change-pw" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">←</button>
    <span class="topbar-title">mudar senha</span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">senha atual</label>
      <div class="input-wrap">
        <input class="form-input" id="cpw-current" type="password" placeholder="sua senha atual" />
        <button class="toggle-pw" type="button" onclick="togglePw('cpw-current',this)">👁</button>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">nova senha</label>
      <div class="input-wrap">
        <input class="form-input" id="cpw-new" type="password" placeholder="mínimo 6 caracteres" oninput="checkStrength2(this.value)" />
        <button class="toggle-pw" type="button" onclick="togglePw('cpw-new',this)">👁</button>
      </div>
      <div class="pw-strength" id="pw-strength-bar2"></div>
      <div class="pw-strength-label" id="pw-strength-label2"></div>
    </div>
    <div class="form-group">
      <label class="form-label">confirmar nova senha</label>
      <div class="input-wrap">
        <input class="form-input" id="cpw-new2" type="password" placeholder="repita a nova senha" />
        <button class="toggle-pw" type="button" onclick="togglePw('cpw-new2',this)">👁</button>
      </div>
    </div>
    <div class="error-msg" id="cpw-error"></div>
    <div class="success-msg" id="cpw-success">senha alterada com sucesso! ✓</div>
    <button class="btn-primary" id="cpw-btn" onclick="doChangePassword()">salvar nova senha</button>
  </div>
</div>

<!-- EXTRATO PRÓPRIO -->
<div id="screen-history" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">←</button>
    <span class="topbar-title">extrato completo</span>
  </div>
  <div class="tx-list" id="history-txs"><div class="empty">carregando...</div></div>
</div>

<!-- TRANSFERIR -->
<div id="screen-transfer" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">←</button>
    <span class="topbar-title">transferir dracmas</span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">para quem</label>
      <select class="form-input" id="transfer-to"></select>
    </div>
    <div class="form-group">
      <label class="form-label">quantidade (₯)</label>
      <input class="form-input" id="transfer-amount" type="number" min="1" placeholder="0" inputmode="numeric" />
    </div>
    <div class="form-group">
      <label class="form-label">mensagem (opcional)</label>
      <input class="form-input" id="transfer-msg" type="text" placeholder="ex: obrigado pela ajuda!" />
    </div>
    <div class="error-msg" id="transfer-error"></div>
    <button class="btn-primary" id="transfer-btn" onclick="doTransfer()">confirmar transferência</button>
  </div>
</div>

<!-- ADMIN -->
<div id="screen-admin" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">←</button>
    <span class="topbar-title">gerenciar <span class="tag-admin">admin</span></span>
  </div>
  <div class="tabs">
    <div class="tab active" id="tab-give" onclick="switchAdminTab('give')">➕ dar</div>
    <div class="tab" id="tab-take" onclick="switchAdminTab('take')">➖ retirar</div>
  </div>
  <div class="form-section" id="admin-give-form">
    <div class="form-group">
      <label class="form-label">membro</label>
      <select class="form-input" id="admin-member-give"></select>
    </div>
    <div class="form-group">
      <label class="form-label">quantidade (₯)</label>
      <input class="form-input" id="admin-amount-give" type="number" min="1" placeholder="0" inputmode="numeric" />
    </div>
    <div class="form-group">
      <label class="form-label">motivo</label>
      <input class="form-input" id="admin-reason-give" type="text" placeholder="ex: participação no culto" />
    </div>
    <div class="error-msg" id="admin-error-give"></div>
    <button class="btn-primary" id="admin-btn-give" onclick="doDistribute()">dar dracmas ✓</button>
  </div>
  <div class="form-section" id="admin-take-form" style="display:none">
    <div class="form-group">
      <label class="form-label">membro</label>
      <select class="form-input" id="admin-member-take"></select>
    </div>
    <div class="form-group">
      <label class="form-label">quantidade (₯)</label>
      <input class="form-input" id="admin-amount-take" type="number" min="1" placeholder="0" inputmode="numeric" />
    </div>
    <div class="form-group">
      <label class="form-label">motivo</label>
      <input class="form-input" id="admin-reason-take" type="text" placeholder="ex: penalidade" />
    </div>
    <div class="error-msg" id="admin-error-take"></div>
    <button class="btn-primary danger" id="admin-btn-take" onclick="doDeduct()">retirar dracmas ✗</button>
  </div>
  <div class="section-header">membros ativos</div>
  <div class="member-list" id="admin-members-list"><div class="empty">carregando...</div></div>
</div>

<!-- PENDENTES -->
<div id="screen-pending" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">←</button>
    <span class="topbar-title">aprovação de contas</span>
  </div>
  <div class="member-list" id="pending-list"><div class="empty">carregando...</div></div>
</div>

<!-- EXTRATO DE MEMBRO (admin) -->
<div id="screen-member-history" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">←</button>
    <span class="topbar-title" id="member-history-title">extrato</span>
  </div>
  <div class="tx-list" id="member-history-txs"><div class="empty">carregando...</div></div>
</div>

<div id="toast" class="toast"></div>

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import {
    getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc,
    collection, getDocs, addDoc, query, where, orderBy, limit,
    serverTimestamp, runTransaction
  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA-t2k2EVpfv-xqtQxtq4bt043tOqTtTDw",
    authDomain: "banco-dracmas.firebaseapp.com",
    projectId: "banco-dracmas",
    storageBucket: "banco-dracmas.firebasestorage.app",
    messagingSenderId: "755685605861",
    appId: "1:755685605861:web:651fd974ad8a784af7af0c"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  let currentUser = null, prevScreen = "screen-home", allMembers = [];

  const initials = n => n.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
  const fmtDate = ts => { if(!ts) return ''; const d=ts.toDate?ts.toDate():new Date(ts); return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'}); };

  // ── UTILS ──
  function showToast(msg) {
    const t=document.getElementById('toast'); t.textContent=msg; t.style.display='block';
    clearTimeout(window._tt); window._tt=setTimeout(()=>t.style.display='none',2500);
  }
  function showErr(id,msg) {
    const el=document.getElementById(id); el.textContent=msg; el.style.display='block';
    setTimeout(()=>el.style.display='none',4000);
  }
  function showSuccess(id,msg) {
    const el=document.getElementById(id); el.textContent=msg; el.style.display='block';
    setTimeout(()=>el.style.display='none',4000);
  }
  function setLoading(btnId,loading) {
    const btn=document.getElementById(btnId); if(!btn) return;
    btn.disabled=loading;
    if(loading){btn.dataset.orig=btn.innerHTML;btn.innerHTML='<span class="spinner"></span>aguarde...';}
    else{btn.innerHTML=btn.dataset.orig||btn.innerHTML;}
  }

  // ── TOGGLE PASSWORD VISIBILITY ──
  window.togglePw = function(inputId, btn) {
    const inp=document.getElementById(inputId);
    const show=inp.type==='password';
    inp.type=show?'text':'password';
    btn.textContent=show?'🙈':'👁';
  };

  // ── PASSWORD STRENGTH ──
  function calcStrength(pw) {
    let score=0;
    if(pw.length>=6) score++;
    if(pw.length>=10) score++;
    if(/[A-Z]/.test(pw)) score++;
    if(/[0-9]/.test(pw)) score++;
    if(/[^A-Za-z0-9]/.test(pw)) score++;
    if(score<=1) return{cls:'weak',label:'fraca'};
    if(score<=3) return{cls:'medium',label:'média'};
    return{cls:'strong',label:'forte'};
  }
  window.checkStrength = function(pw) {
    const bar=document.getElementById('pw-strength-bar');
    const lbl=document.getElementById('pw-strength-label');
    if(!pw){bar.className='pw-strength';lbl.textContent='';return;}
    const s=calcStrength(pw);
    bar.className='pw-strength '+s.cls;
    lbl.textContent='senha '+s.label;
    lbl.style.color=s.cls==='weak'?'#a33030':s.cls==='medium'?'#a07830':'#2d6a4f';
  };
  window.checkStrength2 = function(pw) {
    const bar=document.getElementById('pw-strength-bar2');
    const lbl=document.getElementById('pw-strength-label2');
    if(!pw){bar.className='pw-strength';lbl.textContent='';return;}
    const s=calcStrength(pw);
    bar.className='pw-strength '+s.cls;
    lbl.textContent='senha '+s.label;
    lbl.style.color=s.cls==='weak'?'#a33030':s.cls==='medium'?'#a07830':'#2d6a4f';
  };

  // ── NAVIGATION ──
  window.goTo = function(id) {
    prevScreen=document.querySelector('.screen.active')?.id||'screen-home';
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0,0);
    if(id==='screen-transfer') loadTransferMembers();
    if(id==='screen-history') loadHistory(currentUser.id,'history-txs');
    if(id==='screen-admin'){loadAdminSelects();loadAdminMembersList();}
    if(id==='screen-pending') loadPending();
    if(id==='screen-change-pw'){
      document.getElementById('cpw-current').value='';
      document.getElementById('cpw-new').value='';
      document.getElementById('cpw-new2').value='';
      document.getElementById('pw-strength-bar2').className='pw-strength';
      document.getElementById('pw-strength-label2').textContent='';
    }
  };
  window.goBack = ()=>goTo(prevScreen);

  // ── LOGIN ──
  window.doLogin = async function() {
    const username=document.getElementById('login-user').value.trim().toLowerCase();
    const pw=document.getElementById('login-pw').value;
    if(!username||!pw){showErr('login-error','preencha todos os campos');return;}
    setLoading('login-btn',true);
    try {
      const snap=await getDoc(doc(db,'users',username));
      if(!snap.exists()){showErr('login-error','usuário não encontrado');return;}
      const data=snap.data();
      if(data.password!==pw){showErr('login-error','senha incorreta');return;}
      if(data.status==='pending'){showErr('login-error','conta aguardando aprovação do admin ⏳');return;}
      currentUser={id:username,...data};
      renderHome(); goTo('screen-home');
    } catch(e){showErr('login-error','erro de conexão');}
    finally{setLoading('login-btn',false);}
  };

  // ── REGISTER ──
  window.doRegister = async function() {
    const name=document.getElementById('reg-name').value.trim();
    const username=document.getElementById('reg-user').value.trim().toLowerCase().replace(/\s+/g,'');
    const pw=document.getElementById('reg-pw').value;
    const pw2=document.getElementById('reg-pw2').value;
    if(!name||!username||!pw||!pw2){showErr('reg-error','preencha todos os campos');return;}
    if(pw.length<6){showErr('reg-error','senha deve ter no mínimo 6 caracteres');return;}
    if(pw!==pw2){showErr('reg-error','as senhas não coincidem');return;}
    if(!/^[a-z0-9._]+$/.test(username)){showErr('reg-error','usuário: só letras minúsculas, números, ponto');return;}
    setLoading('reg-btn',true);
    try {
      const ref=doc(db,'users',username);
      if((await getDoc(ref)).exists()){showErr('reg-error','usuário já existe');return;}
      await setDoc(ref,{name,password:pw,balance:0,admin:false,status:'pending',createdAt:serverTimestamp()});
      showToast('solicitação enviada! aguarde aprovação.');
      goTo('screen-login');
      document.getElementById('login-user').value=username;
    } catch(e){showErr('reg-error','erro ao criar conta');}
    finally{setLoading('reg-btn',false);}
  };

  // ── CHANGE PASSWORD ──
  window.doChangePassword = async function() {
    const current=document.getElementById('cpw-current').value;
    const newPw=document.getElementById('cpw-new').value;
    const newPw2=document.getElementById('cpw-new2').value;
    if(!current||!newPw||!newPw2){showErr('cpw-error','preencha todos os campos');return;}
    if(current!==currentUser.password){showErr('cpw-error','senha atual incorreta');return;}
    if(newPw.length<6){showErr('cpw-error','nova senha deve ter no mínimo 6 caracteres');return;}
    if(newPw!==newPw2){showErr('cpw-error','as senhas não coincidem');return;}
    if(newPw===current){showErr('cpw-error','a nova senha deve ser diferente da atual');return;}
    setLoading('cpw-btn',true);
    try {
      await updateDoc(doc(db,'users',currentUser.id),{password:newPw});
      currentUser.password=newPw;
      showSuccess('cpw-success','senha alterada com sucesso! ✓');
      document.getElementById('cpw-current').value='';
      document.getElementById('cpw-new').value='';
      document.getElementById('cpw-new2').value='';
      document.getElementById('pw-strength-bar2').className='pw-strength';
      document.getElementById('pw-strength-label2').textContent='';
    } catch(e){showErr('cpw-error','erro ao salvar. tente novamente.');}
    finally{setLoading('cpw-btn',false);}
  };

  // ── LOGOUT ──
  window.doLogout = function() {
    currentUser=null; allMembers=[];
    document.getElementById('login-user').value='';
    document.getElementById('login-pw').value='';
    goTo('screen-login');
  };

  // ── HOME ──
  function renderHome() {
    const u=currentUser;
    document.getElementById('home-greeting').textContent='olá, '+u.name.split(' ')[0]+'!';
    document.getElementById('home-balance').textContent=u.balance;
    document.getElementById('home-user').textContent=u.name+(u.admin?' — administrador':'');
    document.getElementById('admin-btns').style.display=u.admin?'block':'none';
    loadHomeTransactions();
    if(u.admin) loadPendingBadge();
  }

  async function loadPendingBadge() {
    try {
      const snap=await getDocs(query(collection(db,'users'),where('status','==','pending')));
      const b=document.getElementById('pending-badge');
      if(snap.size>0){b.textContent=snap.size;b.style.display='inline-block';}
      else b.style.display='none';
    } catch(e){}
  }

  async function loadHomeTransactions() {
    const el=document.getElementById('home-txs');
    el.innerHTML='<div class="empty">carregando...</div>';
    try {
      const q=query(collection(db,'transactions'),where('participants','array-contains',currentUser.id),orderBy('createdAt','desc'),limit(5));
      const snap=await getDocs(q);
      el.innerHTML=snap.empty?'<div class="empty">nenhuma transação ainda</div>':snap.docs.map(d=>txHtml(d.data(),currentUser.id)).join('');
    } catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
  }

  async function loadHistory(uid,elId) {
    const el=document.getElementById(elId);
    el.innerHTML='<div class="empty">carregando...</div>';
    try {
      const q=query(collection(db,'transactions'),where('participants','array-contains',uid),orderBy('createdAt','desc'),limit(100));
      const snap=await getDocs(q);
      el.innerHTML=snap.empty?'<div class="empty">nenhuma transação</div>':snap.docs.map(d=>txHtml(d.data(),uid)).join('');
    } catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
  }

  function txHtml(tx,uid) {
    const isIn=tx.to===uid,cls=isIn?'in':'out';
    return `<div class="tx-item">
      <div class="tx-icon ${cls}">${isIn?'↙':'↗'}</div>
      <div class="tx-info"><div class="tx-desc">${tx.desc||'transação'}</div><div class="tx-date">${fmtDate(tx.createdAt)}</div></div>
      <div class="tx-amount ${cls}">${isIn?'+':'-'}${tx.amount} ₯</div>
    </div>`;
  }

  // ── TRANSFER ──
  async function loadTransferMembers() {
    const sel=document.getElementById('transfer-to');
    sel.innerHTML='<option>carregando...</option>';
    try {
      const snap=await getDocs(collection(db,'users'));
      allMembers=[];
      snap.forEach(d=>{const data=d.data();if(d.id!==currentUser.id&&!data.admin&&data.status==='approved')allMembers.push({id:d.id,...data});});
      sel.innerHTML=allMembers.length?allMembers.map(m=>`<option value="${m.id}">${m.name}</option>`).join(''):'<option disabled>nenhum membro disponível</option>';
    } catch(e){sel.innerHTML='<option>erro</option>';}
  }

  window.doTransfer = async function() {
    const toId=document.getElementById('transfer-to').value;
    const amt=parseInt(document.getElementById('transfer-amount').value);
    const msg=document.getElementById('transfer-msg').value.trim()||'transferência';
    if(!toId){showErr('transfer-error','selecione um membro');return;}
    if(!amt||amt<=0){showErr('transfer-error','valor inválido');return;}
    if(amt>currentUser.balance){showErr('transfer-error','saldo insuficiente');return;}
    setLoading('transfer-btn',true);
    try {
      const fromRef=doc(db,'users',currentUser.id),toRef=doc(db,'users',toId);
      await runTransaction(db,async t=>{
        const fSnap=await t.get(fromRef),tSnap=await t.get(toRef);
        if(fSnap.data().balance<amt) throw new Error('saldo insuficiente');
        t.update(fromRef,{balance:fSnap.data().balance-amt});
        t.update(toRef,{balance:tSnap.data().balance+amt});
      });
      const toName=allMembers.find(m=>m.id===toId)?.name||toId;
      await addDoc(collection(db,'transactions'),{from:currentUser.id,to:toId,participants:[currentUser.id,toId],amount:amt,desc:`${msg} (${currentUser.name} → ${toName})`,createdAt:serverTimestamp()});
      currentUser.balance-=amt;
      document.getElementById('home-balance').textContent=currentUser.balance;
      document.getElementById('transfer-amount').value='';
      document.getElementById('transfer-msg').value='';
      showToast('transferência realizada! ₯');
      setTimeout(()=>goTo('screen-home'),1000);
    } catch(e){showErr('transfer-error',e.message||'erro');}
    finally{setLoading('transfer-btn',false);}
  };

  // ── ADMIN TABS ──
  window.switchAdminTab = function(tab) {
    document.getElementById('tab-give').classList.toggle('active',tab==='give');
    document.getElementById('tab-take').classList.toggle('active',tab==='take');
    document.getElementById('admin-give-form').style.display=tab==='give'?'block':'none';
    document.getElementById('admin-take-form').style.display=tab==='take'?'block':'none';
  };

  async function loadAdminSelects() {
    const snap=await getDocs(collection(db,'users'));
    const opts=[];
    snap.forEach(d=>{const data=d.data();if(!data.admin&&data.status==='approved')opts.push(`<option value="${d.id}">${data.name}</option>`);});
    document.getElementById('admin-member-give').innerHTML=opts.join('')||'<option disabled>nenhum membro</option>';
    document.getElementById('admin-member-take').innerHTML=opts.join('')||'<option disabled>nenhum membro</option>';
  }

  async function loadAdminMembersList() {
    const el=document.getElementById('admin-members-list');
    el.innerHTML='<div class="empty">carregando...</div>';
    try {
      const snap=await getDocs(collection(db,'users'));
      const members=[];
      snap.forEach(d=>{const data=d.data();if(!data.admin&&data.status==='approved')members.push({id:d.id,...data});});
      members.sort((a,b)=>b.balance-a.balance);
      el.innerHTML=members.map(m=>`
        <div class="member-item">
          <div class="member-avatar">${initials(m.name)}</div>
          <div style="flex:1;min-width:0"><div class="member-name">${m.name}</div><div class="member-sub">${m.balance} ₯</div></div>
          <div class="member-actions">
            <button class="btn-sm view" onclick="viewMemberHistory('${m.id}','${m.name}')">extrato</button>
            <button class="btn-sm del" onclick="deleteMember('${m.id}','${m.name}')">✕</button>
          </div>
        </div>`).join('')||'<div class="empty">nenhum membro</div>';
    } catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
  }

  window.doDistribute = async function() {
    const toId=document.getElementById('admin-member-give').value;
    const amt=parseInt(document.getElementById('admin-amount-give').value);
    const reason=document.getElementById('admin-reason-give').value.trim()||'distribuição admin';
    if(!toId){showErr('admin-error-give','selecione membro');return;}
    if(!amt||amt<=0){showErr('admin-error-give','valor inválido');return;}
    setLoading('admin-btn-give',true);
    try {
      const ref=doc(db,'users',toId);
      const snap=await getDoc(ref);
      await updateDoc(ref,{balance:snap.data().balance+amt});
      const name=snap.data().name;
      await addDoc(collection(db,'transactions'),{from:'admin',to:toId,participants:['admin',toId],amount:amt,desc:`${reason} (admin → ${name})`,createdAt:serverTimestamp()});
      document.getElementById('admin-amount-give').value='';
      document.getElementById('admin-reason-give').value='';
      showToast(`+${amt} ₯ para ${name}!`);
      loadAdminMembersList(); loadAdminSelects();
    } catch(e){showErr('admin-error-give','erro ao distribuir');}
    finally{setLoading('admin-btn-give',false);}
  };

  window.doDeduct = async function() {
    const toId=document.getElementById('admin-member-take').value;
    const amt=parseInt(document.getElementById('admin-amount-take').value);
    const reason=document.getElementById('admin-reason-take').value.trim()||'retirada admin';
    if(!toId){showErr('admin-error-take','selecione membro');return;}
    if(!amt||amt<=0){showErr('admin-error-take','valor inválido');return;}
    setLoading('admin-btn-take',true);
    try {
      const ref=doc(db,'users',toId);
      const snap=await getDoc(ref);
      const cur=snap.data().balance;
      if(cur<amt){showErr('admin-error-take',`saldo insuficiente (${cur} ₯)`);return;}
      await updateDoc(ref,{balance:cur-amt});
      const name=snap.data().name;
      await addDoc(collection(db,'transactions'),{from:toId,to:'admin',participants:['admin',toId],amount:amt,desc:`${reason} (admin retirou de ${name})`,createdAt:serverTimestamp()});
      document.getElementById('admin-amount-take').value='';
      document.getElementById('admin-reason-take').value='';
      showToast(`-${amt} ₯ retirados de ${name}`);
      loadAdminMembersList(); loadAdminSelects();
    } catch(e){showErr('admin-error-take','erro ao retirar');}
    finally{setLoading('admin-btn-take',false);}
  };

  window.viewMemberHistory = function(uid,name) {
    document.getElementById('member-history-title').textContent=name;
    goTo('screen-member-history');
    loadHistory(uid,'member-history-txs');
  };

  window.deleteMember = async function(uid,name) {
    if(!confirm(`Deletar a conta de ${name}? Isso não pode ser desfeito.`)) return;
    try {
      await deleteDoc(doc(db,'users',uid));
      showToast(`Conta de ${name} deletada`);
      loadAdminMembersList(); loadAdminSelects();
    } catch(e){showToast('erro ao deletar');}
  };

  // ── PENDING ──
  async function loadPending() {
    const el=document.getElementById('pending-list');
    el.innerHTML='<div class="empty">carregando...</div>';
    try {
      const snap=await getDocs(query(collection(db,'users'),where('status','==','pending')));
      if(snap.empty){el.innerHTML='<div class="empty">nenhuma conta pendente 🎉</div>';return;}
      el.innerHTML=snap.docs.map(d=>{
        const data=d.data();
        return `<div class="member-item">
          <div class="member-avatar">${initials(data.name)}</div>
          <div style="flex:1;min-width:0"><div class="member-name">${data.name}</div><div class="member-sub">@${d.id}</div></div>
          <div class="member-actions">
            <button class="btn-sm approve" onclick="approveUser('${d.id}')">✓</button>
            <button class="btn-sm reject" onclick="rejectUser('${d.id}','${data.name}')">✕</button>
          </div>
        </div>`;
      }).join('');
    } catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
  }

  window.approveUser = async function(uid) {
    try {
      await updateDoc(doc(db,'users',uid),{status:'approved'});
      showToast('conta aprovada! ✓'); loadPending(); loadPendingBadge();
    } catch(e){showToast('erro ao aprovar');}
  };

  window.rejectUser = async function(uid,name) {
    if(!confirm(`Recusar e deletar a solicitação de ${name}?`)) return;
    try {
      await deleteDoc(doc(db,'users',uid));
      showToast(`solicitação de ${name} recusada`); loadPending(); loadPendingBadge();
    } catch(e){showToast('erro');}
  };

  // ── ENTER KEYS ──
  document.getElementById('login-pw').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
  document.getElementById('reg-pw2').addEventListener('keydown',e=>{if(e.key==='Enter')doRegister();});
  document.getElementById('cpw-new2').addEventListener('keydown',e=>{if(e.key==='Enter')doChangePassword();});

  // ── INIT ──
  async function init() {
    try {
      const ref=doc(db,'users','admin');
      if(!(await getDoc(ref)).exists()) {
        await setDoc(ref,{name:'Administrador',password:'admin123',balance:0,admin:true,status:'approved',createdAt:serverTimestamp()});
      }
    } catch(e){}
    goTo('screen-login');
  }
  init();
</script>
</body>
</html>
