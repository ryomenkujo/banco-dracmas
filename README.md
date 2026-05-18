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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
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
    textarea.form-input{resize:vertical;min-height:80px;}
    .input-wrap{position:relative;}
    .input-wrap .form-input{padding-right:44px;}
    .toggle-pw{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted);line-height:1;}
    select.form-input{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px;}
    .btn-primary{width:100%;padding:14px;font-size:15px;font-weight:700;font-family:'Lato',sans-serif;background:var(--purple);color:var(--gold);border:none;border-radius:var(--radius-sm);cursor:pointer;transition:opacity .15s;}
    .btn-primary:active{opacity:.82;}
    .btn-primary.danger{background:#7a1a1a;color:#fff;}
    .btn-primary.success{background:#2d6a4f;color:#fff;}
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
    /* TRANSACTIONS */
    .tx-list{padding:0 1.25rem;}
    .tx-item{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--border);}
    .tx-icon{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0;}
    .tx-info{flex:1;min-width:0;}
    .tx-desc{font-size:14px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600;}
    .tx-sub{font-size:12px;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
    .tx-date{font-size:11px;color:var(--text-muted);}
    .tx-right{text-align:right;flex-shrink:0;}
    .tx-amount{font-size:15px;font-weight:700;}
    .tx-amount.in{color:#2d6a4f;}
    .tx-amount.out{color:#a33030;}
    /* CATEGORIES */
    .cat-culto{background:#e8f4fd;color:#1565c0;}
    .cat-missao{background:#fce4ec;color:#880e4f;}
    .cat-evento{background:#f3e5f5;color:#6a1b9a;}
    .cat-estudo{background:#e8f5e9;color:#1b5e20;}
    .cat-presente{background:#fff8e1;color:#e65100;}
    .cat-conquista{background:#fff9c4;color:#f57f17;}
    .cat-penalidade{background:#fdecea;color:#a33030;}
    .cat-transferencia{background:#ede0f5;color:#2e1a47;}
    .cat-outros{background:#f5f5f5;color:#424242;}
    /* MEMBERS */
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
    .btn-sm.pause{background:#e65100;color:#fff;}
    .btn-sm.unpause{background:#1565c0;color:#fff;}
    .btn-sm.reset{background:#4a2d6e;color:#fff;}
    .badge-count{display:inline-block;background:#a33030;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;margin-left:6px;}
    .tag-admin{font-size:10px;background:var(--gold);color:var(--purple);padding:2px 8px;border-radius:10px;font-weight:700;margin-left:6px;vertical-align:middle;}
    .tag-paused{font-size:10px;background:#e65100;color:#fff;padding:2px 8px;border-radius:10px;font-weight:700;margin-left:4px;}
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
    /* MURAL */
    .aviso-card{background:var(--card-bg);border-radius:var(--radius-sm);border:1.5px solid var(--border);padding:1rem;margin-bottom:.75rem;}
    .aviso-titulo{font-size:14px;font-weight:700;color:var(--purple);}
    .aviso-texto{font-size:13px;color:var(--text);margin-top:4px;line-height:1.5;}
    .aviso-data{font-size:11px;color:var(--text-muted);margin-top:6px;}
    /* CONFIRM MODAL */
    .modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:200;align-items:flex-end;justify-content:center;}
    .modal-overlay.active{display:flex;}
    .modal{background:var(--card-bg);border-radius:20px 20px 0 0;padding:1.75rem 1.5rem;width:100%;max-width:420px;}
    .modal-title{font-family:'Cinzel',serif;font-size:17px;color:var(--purple);margin-bottom:.5rem;}
    .modal-body{font-size:14px;color:var(--text-muted);line-height:1.6;margin-bottom:1.25rem;}
    .modal-actions{display:flex;gap:10px;}
    .modal-actions .btn-primary{flex:1;padding:12px;}
    .modal-actions .btn-secondary{flex:1;padding:12px;margin:0;}
    /* NOTIF */
    .notif-dot{width:10px;height:10px;background:#a33030;border-radius:50%;display:inline-block;margin-left:6px;vertical-align:middle;}
    .notif-item{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);}
    .notif-icon{font-size:20px;flex-shrink:0;margin-top:2px;}
    .notif-text{font-size:13px;color:var(--text);flex:1;line-height:1.5;}
    .notif-date{font-size:11px;color:var(--text-muted);margin-top:3px;}
    .notif-unread{background:#f8f0ff;}
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
      <input class="form-input" id="reg-user" type="text" placeholder="Ex: joao.silva" />
      <div class="form-hint">só letras minúsculas, números e ponto. sem espaços.</div>
    </div>
    <div class="form-group">
      <label class="form-label">senha</label>
      <div class="input-wrap">
        <input class="form-input" id="reg-pw" type="password" placeholder="mínimo 6 caracteres" oninput="checkStrength(this.value,'pw-strength-bar','pw-strength-label')" autocomplete="new-password" />
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
    <p style="font-size:12px;color:var(--text-muted);margin-bottom:1rem;line-height:1.6">⏳ Sua conta ficará <strong>pendente</strong> até o administrador aprovar.</p>
    <div class="error-msg" id="reg-error"></div>
    <button class="btn-primary" id="reg-btn" onclick="doRegister()">solicitar acesso</button>
  </div>
</div>

<!-- HOME -->
<div id="screen-home" class="screen">
  <div class="topbar">
    <div class="topbar-logo">₯</div>
    <span class="topbar-title" id="home-greeting">olá!</span>
    <button class="topbar-icon" onclick="goTo('screen-notifs')" title="notificações"><span id="notif-bell">🔔</span></button>
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
    <div class="quick-actions">
      <div class="action-btn" onclick="goTo('screen-mural-admin')">
        <div class="action-icon">📢</div><div class="action-label">mural</div>
      </div>
      <div class="action-btn" onclick="gerarPDF()">
        <div class="action-icon">📄</div><div class="action-label">relatório PDF</div>
      </div>
    </div>
  </div>
  <!-- MURAL PREVIEW -->
  <div class="section-header">📢 mural de avisos</div>
  <div style="padding:0 1.25rem" id="home-mural"><div class="empty">sem avisos</div></div>
  <div class="section-header">últimas transações</div>
  <div class="tx-list" id="home-txs"><div class="empty">carregando...</div></div>
</div>

<!-- NOTIFICAÇÕES -->
<div id="screen-notifs" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">←</button>
    <span class="topbar-title">notificações</span>
  </div>
  <div style="padding:0 1.25rem" id="notifs-list"><div class="empty">carregando...</div></div>
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
    <div class="menu-item" onclick="goTo('screen-mural')">
      <div class="menu-icon">📢</div>
      <div class="menu-label">mural de avisos</div>
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
        <input class="form-input" id="cpw-new" type="password" placeholder="mínimo 6 caracteres" oninput="checkStrength(this.value,'pw-strength-bar2','pw-strength-label2')" />
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

<!-- MURAL (leitura) -->
<div id="screen-mural" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">←</button>
    <span class="topbar-title">mural de avisos</span>
  </div>
  <div style="padding:1rem 1.25rem" id="mural-list"><div class="empty">carregando...</div></div>
</div>

<!-- MURAL ADMIN -->
<div id="screen-mural-admin" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">←</button>
    <span class="topbar-title">gerenciar mural <span class="tag-admin">admin</span></span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">título do aviso</label>
      <input class="form-input" id="aviso-titulo" type="text" placeholder="Ex: Culto especial sábado!" />
    </div>
    <div class="form-group">
      <label class="form-label">texto</label>
      <textarea class="form-input" id="aviso-texto" placeholder="Detalhes do aviso..."></textarea>
    </div>
    <div class="error-msg" id="aviso-error"></div>
    <button class="btn-primary" id="aviso-btn" onclick="publicarAviso()">publicar aviso 📢</button>
  </div>
  <div class="section-header">avisos publicados</div>
  <div style="padding:0 1.25rem" id="mural-admin-list"><div class="empty">carregando...</div></div>
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
    <button class="btn-primary" id="transfer-btn" onclick="confirmarTransfer()">transferir</button>
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
  <!-- DAR -->
  <div class="form-section" id="admin-give-form">
    <div class="form-group">
      <label class="form-label">membro</label>
      <select class="form-input" id="admin-member-give"></select>
    </div>
    <div class="form-group">
      <label class="form-label">categoria</label>
      <select class="form-input" id="admin-cat-give">
        <option value="culto">⛪ Culto</option>
        <option value="missao">🙏 Missão</option>
        <option value="evento">🎉 Evento</option>
        <option value="estudo">📖 Estudo / Célula</option>
        <option value="conquista">🏆 Conquista</option>
        <option value="presente">🎁 Presente</option>
        <option value="outros">📝 Outros</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">quantidade (₯)</label>
      <input class="form-input" id="admin-amount-give" type="number" min="1" placeholder="0" inputmode="numeric" />
    </div>
    <div class="form-group">
      <label class="form-label">observação (opcional)</label>
      <input class="form-input" id="admin-reason-give" type="text" placeholder="ex: presença no culto de domingo" />
    </div>
    <div class="error-msg" id="admin-error-give"></div>
    <button class="btn-primary" id="admin-btn-give" onclick="doDistribute()">dar dracmas ✓</button>
  </div>
  <!-- RETIRAR -->
  <div class="form-section" id="admin-take-form" style="display:none">
    <div class="form-group">
      <label class="form-label">membro</label>
      <select class="form-input" id="admin-member-take"></select>
    </div>
    <div class="form-group">
      <label class="form-label">categoria</label>
      <select class="form-input" id="admin-cat-take">
        <option value="penalidade">⚠️ Penalidade</option>
        <option value="outros">📝 Outros</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">quantidade (₯)</label>
      <input class="form-input" id="admin-amount-take" type="number" min="1" placeholder="0" inputmode="numeric" />
    </div>
    <div class="form-group">
      <label class="form-label">observação (opcional)</label>
      <input class="form-input" id="admin-reason-take" type="text" placeholder="ex: motivo da penalidade" />
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

<!-- MODAL CONFIRMAÇÃO -->
<div class="modal-overlay" id="modal-confirm">
  <div class="modal">
    <div class="modal-title" id="modal-title">confirmar</div>
    <div class="modal-body" id="modal-body"></div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">cancelar</button>
      <button class="btn-primary" id="modal-confirm-btn">confirmar</button>
    </div>
  </div>
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

  // ── CATEGORIAS ──
  const CATS = {
    culto:        { icon:'⛪', cls:'cat-culto',        label:'Culto' },
    missao:       { icon:'🙏', cls:'cat-missao',       label:'Missão' },
    evento:       { icon:'🎉', cls:'cat-evento',       label:'Evento' },
    estudo:       { icon:'📖', cls:'cat-estudo',       label:'Estudo' },
    conquista:    { icon:'🏆', cls:'cat-conquista',    label:'Conquista' },
    presente:     { icon:'🎁', cls:'cat-presente',     label:'Presente' },
    penalidade:   { icon:'⚠️', cls:'cat-penalidade',   label:'Penalidade' },
    transferencia:{ icon:'↔️', cls:'cat-transferencia',label:'Transferência' },
    outros:       { icon:'📝', cls:'cat-outros',       label:'Outros' },
  };

  // ── UTILS ──
  const initials = n => n.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
  const fmtDate = ts => { if(!ts) return ''; const d=ts.toDate?ts.toDate():new Date(ts); return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'2-digit'}); };
  const fmtDateFull = ts => { if(!ts) return ''; const d=ts.toDate?ts.toDate():new Date(ts); return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}); };

  function showToast(msg) {
    const t=document.getElementById('toast'); t.textContent=msg; t.style.display='block';
    clearTimeout(window._tt); window._tt=setTimeout(()=>t.style.display='none',2500);
  }
  function showErr(id,msg) {
    const el=document.getElementById(id); if(!el) return;
    el.textContent=msg; el.style.display='block';
    setTimeout(()=>el.style.display='none',4000);
  }
  function showSuccess(id,msg) {
    const el=document.getElementById(id); if(!el) return;
    el.textContent=msg; el.style.display='block';
    setTimeout(()=>el.style.display='none',4000);
  }
  function setLoading(btnId,loading) {
    const btn=document.getElementById(btnId); if(!btn) return;
    btn.disabled=loading;
    if(loading){btn.dataset.orig=btn.innerHTML;btn.innerHTML='<span class="spinner"></span>aguarde...';}
    else{btn.innerHTML=btn.dataset.orig||btn.innerHTML;}
  }

  // ── MODAL ──
  window.openModal = function(title, body, onConfirm, danger=false) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').textContent = body;
    const btn = document.getElementById('modal-confirm-btn');
    btn.className = danger ? 'btn-primary danger' : 'btn-primary';
    btn.onclick = () => { closeModal(); onConfirm(); };
    document.getElementById('modal-confirm').classList.add('active');
  };
  window.closeModal = () => document.getElementById('modal-confirm').classList.remove('active');

  // ── TOGGLE PW ──
  window.togglePw = function(id,btn) {
    const inp=document.getElementById(id);
    const show=inp.type==='password';
    inp.type=show?'text':'password';
    btn.textContent=show?'🙈':'👁';
  };

  // ── PASSWORD STRENGTH ──
  window.checkStrength = function(pw,barId,lblId) {
    const bar=document.getElementById(barId), lbl=document.getElementById(lblId);
    if(!pw){bar.className='pw-strength';lbl.textContent='';return;}
    let score=0;
    if(pw.length>=6)score++;if(pw.length>=10)score++;
    if(/[A-Z]/.test(pw))score++;if(/[0-9]/.test(pw))score++;if(/[^A-Za-z0-9]/.test(pw))score++;
    const s=score<=1?{c:'weak',l:'fraca'}:score<=3?{c:'medium',l:'média'}:{c:'strong',l:'forte'};
    bar.className='pw-strength '+s.c;
    lbl.textContent='senha '+s.l;
    lbl.style.color=s.c==='weak'?'#a33030':s.c==='medium'?'#a07830':'#2d6a4f';
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
    if(id==='screen-notifs') loadNotifs();
    if(id==='screen-mural') loadMural('mural-list',false);
    if(id==='screen-mural-admin'){loadMural('mural-admin-list',true);}
    if(id==='screen-member-history'){}
    if(id==='screen-change-pw'){
      ['cpw-current','cpw-new','cpw-new2'].forEach(i=>document.getElementById(i).value='');
      ['pw-strength-bar2','pw-strength-label2'].forEach(i=>{const el=document.getElementById(i);el.className=el.tagName==='DIV'?'pw-strength':'';el.textContent='';});
    }
  };
  window.goBack = ()=>goTo(prevScreen);

  // ── TX HTML ──
  function txHtml(tx, uid) {
    const isIn = tx.to === uid;
    const cat = CATS[tx.category] || (isIn ? CATS.outros : CATS.transferencia);
    const sign = isIn ? '+' : '-';
    const obs = tx.obs ? `<div class="tx-sub">💬 ${tx.obs}</div>` : '';
    return `<div class="tx-item">
      <div class="tx-icon ${cat.cls}">${cat.icon}</div>
      <div class="tx-info">
        <div class="tx-desc">${cat.label}</div>
        <div class="tx-sub">${tx.desc||''}</div>
        ${obs}
        <div class="tx-date">${fmtDate(tx.createdAt)}</div>
      </div>
      <div class="tx-right">
        <div class="tx-amount ${isIn?'in':'out'}">${sign}${tx.amount} ₯</div>
      </div>
    </div>`;
  }

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
      if(data.status==='pending'){showErr('login-error','conta aguardando aprovação ⏳');return;}
      if(data.status==='paused'){showErr('login-error','conta pausada. fale com o admin');return;}
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
    if(pw.length<6){showErr('reg-error','senha mínimo 6 caracteres');return;}
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
    const cur=document.getElementById('cpw-current').value;
    const nw=document.getElementById('cpw-new').value;
    const nw2=document.getElementById('cpw-new2').value;
    if(!cur||!nw||!nw2){showErr('cpw-error','preencha todos os campos');return;}
    if(cur!==currentUser.password){showErr('cpw-error','senha atual incorreta');return;}
    if(nw.length<6){showErr('cpw-error','nova senha mínimo 6 caracteres');return;}
    if(nw!==nw2){showErr('cpw-error','as senhas não coincidem');return;}
    if(nw===cur){showErr('cpw-error','a nova senha deve ser diferente da atual');return;}
    setLoading('cpw-btn',true);
    try {
      await updateDoc(doc(db,'users',currentUser.id),{password:nw});
      currentUser.password=nw;
      showSuccess('cpw-success','senha alterada com sucesso! ✓');
      ['cpw-current','cpw-new','cpw-new2'].forEach(i=>document.getElementById(i).value='');
    } catch(e){showErr('cpw-error','erro ao salvar');}
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
    loadHomeMural();
    loadNotifBell();
    if(u.admin) loadPendingBadge();
  }

  async function loadPendingBadge() {
    try {
      const snap=await getDocs(query(collection(db,'users'),where('status','==','pending')));
      const b=document.getElementById('pending-badge');
      snap.size>0?(b.textContent=snap.size,b.style.display='inline-block'):b.style.display='none';
    } catch(e){}
  }

  async function loadNotifBell() {
    try {
      const snap=await getDocs(query(collection(db,'notifications'),where('to','==',currentUser.id),where('read','==',false)));
      document.getElementById('notif-bell').textContent=snap.size>0?'🔔🔴':'🔔';
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

  async function loadHomeMural() {
    const el=document.getElementById('home-mural');
    try {
      const q=query(collection(db,'mural'),orderBy('createdAt','desc'),limit(2));
      const snap=await getDocs(q);
      if(snap.empty){el.innerHTML='<div class="empty">sem avisos</div>';return;}
      el.innerHTML=snap.docs.map(d=>{
        const data=d.data();
        return `<div class="aviso-card">
          <div class="aviso-titulo">📢 ${data.titulo}</div>
          <div class="aviso-texto">${data.texto}</div>
          <div class="aviso-data">${fmtDate(data.createdAt)}</div>
        </div>`;
      }).join('');
    } catch(e){el.innerHTML='';}
  }

  // ── HISTORY ──
  async function loadHistory(uid,elId) {
    const el=document.getElementById(elId);
    el.innerHTML='<div class="empty">carregando...</div>';
    try {
      const q=query(collection(db,'transactions'),where('participants','array-contains',uid),orderBy('createdAt','desc'),limit(100));
      const snap=await getDocs(q);
      el.innerHTML=snap.empty?'<div class="empty">nenhuma transação</div>':snap.docs.map(d=>txHtml(d.data(),uid)).join('');
    } catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
  }

  // ── NOTIFICAÇÕES ──
  async function loadNotifs() {
    const el=document.getElementById('notifs-list');
    el.innerHTML='<div class="empty">carregando...</div>';
    try {
      const q=query(collection(db,'notifications'),where('to','==',currentUser.id),orderBy('createdAt','desc'),limit(30));
      const snap=await getDocs(q);
      if(snap.empty){el.innerHTML='<div class="empty">nenhuma notificação</div>';return;}
      el.innerHTML=snap.docs.map(d=>{
        const n=d.data();
        return `<div class="notif-item ${n.read?'':'notif-unread'}" onclick="marcarLida('${d.id}',this)">
          <div class="notif-icon">${n.icon||'🔔'}</div>
          <div>
            <div class="notif-text">${n.text}</div>
            <div class="notif-date">${fmtDateFull(n.createdAt)}</div>
          </div>
        </div>`;
      }).join('');
      // marcar todas como lidas
      snap.docs.forEach(d=>{ if(!d.data().read) updateDoc(doc(db,'notifications',d.id),{read:true}); });
      document.getElementById('notif-bell').textContent='🔔';
    } catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
  }

  window.marcarLida = async function(id,el) {
    el.classList.remove('notif-unread');
    try { await updateDoc(doc(db,'notifications',id),{read:true}); } catch(e){}
  };

  async function criarNotif(toId, text, icon='🔔') {
    try {
      await addDoc(collection(db,'notifications'),{to:toId,text,icon,read:false,createdAt:serverTimestamp()});
    } catch(e){}
  }

  // ── TRANSFER ──
  async function loadTransferMembers() {
    const sel=document.getElementById('transfer-to');
    sel.innerHTML='<option>carregando...</option>';
    try {
      const snap=await getDocs(collection(db,'users'));
      allMembers=[];
      snap.forEach(d=>{const data=d.data();if(d.id!==currentUser.id&&!data.admin&&data.status==='approved')allMembers.push({id:d.id,...data});});
      sel.innerHTML=allMembers.length?allMembers.map(m=>`<option value="${m.id}">${m.name}</option>`).join(''):'<option disabled>nenhum membro</option>';
    } catch(e){sel.innerHTML='<option>erro</option>';}
  }

  window.confirmarTransfer = function() {
    const toId=document.getElementById('transfer-to').value;
    const amt=parseInt(document.getElementById('transfer-amount').value);
    const msg=document.getElementById('transfer-msg').value.trim()||'transferência';
    if(!toId){showErr('transfer-error','selecione um membro');return;}
    if(!amt||amt<=0){showErr('transfer-error','valor inválido');return;}
    if(amt>currentUser.balance){showErr('transfer-error','saldo insuficiente');return;}
    const toName=allMembers.find(m=>m.id===toId)?.name||toId;
    openModal(
      'confirmar transferência',
      `Enviar ${amt} ₯ para ${toName}?\n\n"${msg}"`,
      ()=>doTransfer(toId,amt,msg,toName)
    );
  };

  async function doTransfer(toId,amt,msg,toName) {
    setLoading('transfer-btn',true);
    try {
      const fromRef=doc(db,'users',currentUser.id),toRef=doc(db,'users',toId);
      await runTransaction(db,async t=>{
        const fSnap=await t.get(fromRef),tSnap=await t.get(toRef);
        if(fSnap.data().balance<amt) throw new Error('saldo insuficiente');
        if(fSnap.data().balance-amt<0) throw new Error('saldo não pode ficar negativo');
        t.update(fromRef,{balance:fSnap.data().balance-amt});
        t.update(toRef,{balance:tSnap.data().balance+amt});
      });
      await addDoc(collection(db,'transactions'),{
        from:currentUser.id,to:toId,participants:[currentUser.id,toId],
        amount:amt,category:'transferencia',
        desc:`${currentUser.name} → ${toName}`,
        obs:msg!=='transferência'?msg:'',
        createdAt:serverTimestamp()
      });
      await criarNotif(toId,`${currentUser.name} te enviou ${amt} ₯${msg!=='transferência'?' — "'+msg+'"':''}!`,'💸');
      currentUser.balance-=amt;
      document.getElementById('home-balance').textContent=currentUser.balance;
      document.getElementById('transfer-amount').value='';
      document.getElementById('transfer-msg').value='';
      showToast('transferência realizada! ₯');
      setTimeout(()=>goTo('screen-home'),1000);
    } catch(e){showErr('transfer-error',e.message||'erro');}
    finally{setLoading('transfer-btn',false);}
  }

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
    const html=opts.join('')||'<option disabled>nenhum membro</option>';
    document.getElementById('admin-member-give').innerHTML=html;
    document.getElementById('admin-member-take').innerHTML=html;
  }

  async function loadAdminMembersList() {
    const el=document.getElementById('admin-members-list');
    el.innerHTML='<div class="empty">carregando...</div>';
    try {
      const snap=await getDocs(collection(db,'users'));
      const members=[];
      snap.forEach(d=>{const data=d.data();if(!data.admin&&(data.status==='approved'||data.status==='paused'))members.push({id:d.id,...data});});
      members.sort((a,b)=>b.balance-a.balance);
      el.innerHTML=members.map(m=>`
        <div class="member-item">
          <div class="member-avatar">${initials(m.name)}</div>
          <div style="flex:1;min-width:0">
            <div class="member-name">${m.name}${m.status==='paused'?'<span class="tag-paused">pausado</span>':''}</div>
            <div class="member-sub">${m.balance} ₯ · @${m.id}</div>
          </div>
          <div class="member-actions">
            <button class="btn-sm view" onclick="viewMemberHistory('${m.id}','${m.name}')">extrato</button>
            <button class="btn-sm reset" onclick="resetSenha('${m.id}','${m.name}')">🔑</button>
            <button class="btn-sm ${m.status==='paused'?'unpause':'pause'}" onclick="${m.status==='paused'?'unpauseMember':'pauseMember'}('${m.id}','${m.name}')">${m.status==='paused'?'▶':'⏸'}</button>
            <button class="btn-sm del" onclick="deleteMember('${m.id}','${m.name}')">✕</button>
          </div>
        </div>`).join('')||'<div class="empty">nenhum membro</div>';
    } catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
  }

  window.doDistribute = async function() {
    const toId=document.getElementById('admin-member-give').value;
    const cat=document.getElementById('admin-cat-give').value;
    const amt=parseInt(document.getElementById('admin-amount-give').value);
    const obs=document.getElementById('admin-reason-give').value.trim();
    if(!toId){showErr('admin-error-give','selecione membro');return;}
    if(!amt||amt<=0){showErr('admin-error-give','valor inválido');return;}
    setLoading('admin-btn-give',true);
    try {
      const ref=doc(db,'users',toId);
      const snap=await getDoc(ref);
      await updateDoc(ref,{balance:snap.data().balance+amt});
      const name=snap.data().name;
      const catInfo=CATS[cat]||CATS.outros;
      await addDoc(collection(db,'transactions'),{
        from:'admin',to:toId,participants:['admin',toId],
        amount:amt,category:cat,
        desc:`${catInfo.icon} ${catInfo.label} — admin → ${name}`,
        obs,createdAt:serverTimestamp()
      });
      await criarNotif(toId,`Você recebeu ${amt} ₯ — ${catInfo.icon} ${catInfo.label}${obs?' ('+obs+')':''}!`,'💰');
      document.getElementById('admin-amount-give').value='';
      document.getElementById('admin-reason-give').value='';
      showToast(`+${amt} ₯ para ${name}!`);
      loadAdminMembersList();loadAdminSelects();
    } catch(e){showErr('admin-error-give','erro ao distribuir');}
    finally{setLoading('admin-btn-give',false);}
  };

  window.doDeduct = async function() {
    const toId=document.getElementById('admin-member-take').value;
    const cat=document.getElementById('admin-cat-take').value;
    const amt=parseInt(document.getElementById('admin-amount-take').value);
    const obs=document.getElementById('admin-reason-take').value.trim();
    if(!toId){showErr('admin-error-take','selecione membro');return;}
    if(!amt||amt<=0){showErr('admin-error-take','valor inválido');return;}
    setLoading('admin-btn-take',true);
    try {
      const ref=doc(db,'users',toId);
      const snap=await getDoc(ref);
      const cur=snap.data().balance;
      const newBal=Math.max(0,cur-amt);
      await updateDoc(ref,{balance:newBal});
      const name=snap.data().name;
      const catInfo=CATS[cat]||CATS.penalidade;
      await addDoc(collection(db,'transactions'),{
        from:toId,to:'admin',participants:['admin',toId],
        amount:cur-newBal,category:cat,
        desc:`${catInfo.icon} ${catInfo.label} — admin retirou de ${name}`,
        obs,createdAt:serverTimestamp()
      });
      await criarNotif(toId,`${cur-newBal} ₯ foram retirados da sua conta — ${catInfo.icon} ${catInfo.label}${obs?' ('+obs+')':''}!`,'⚠️');
      document.getElementById('admin-amount-take').value='';
      document.getElementById('admin-reason-take').value='';
      showToast(`-${cur-newBal} ₯ retirados de ${name}`);
      loadAdminMembersList();loadAdminSelects();
    } catch(e){showErr('admin-error-take','erro ao retirar');}
    finally{setLoading('admin-btn-take',false);}
  };

  window.viewMemberHistory = function(uid,name) {
    document.getElementById('member-history-title').textContent=name;
    goTo('screen-member-history');
    loadHistory(uid,'member-history-txs');
  };

  // ── RESET SENHA (admin) ──
  window.resetSenha = function(uid,name) {
    openModal('resetar senha',`Resetar a senha de ${name} para "dracmas123"? Avise a pessoa para trocar depois.`,async()=>{
      try {
        await updateDoc(doc(db,'users',uid),{password:'dracmas123'});
        showToast(`Senha de ${name} resetada para: dracmas123`);
      } catch(e){showToast('erro ao resetar');}
    });
  };

  // ── PAUSAR / RETOMAR ──
  window.pauseMember = function(uid,name) {
    openModal('pausar conta',`Pausar a conta de ${name}? Ela não conseguirá entrar até você reativar.`,async()=>{
      try {
        await updateDoc(doc(db,'users',uid),{status:'paused'});
        await criarNotif(uid,'Sua conta foi pausada temporariamente. Fale com o administrador.','⏸');
        showToast(`Conta de ${name} pausada`);
        loadAdminMembersList();
      } catch(e){showToast('erro');}
    },true);
  };

  window.unpauseMember = function(uid,name) {
    openModal('reativar conta',`Reativar a conta de ${name}?`,async()=>{
      try {
        await updateDoc(doc(db,'users',uid),{status:'approved'});
        await criarNotif(uid,'Sua conta foi reativada! Você já pode entrar normalmente.','✅');
        showToast(`Conta de ${name} reativada`);
        loadAdminMembersList();
      } catch(e){showToast('erro');}
    });
  };

  window.deleteMember = function(uid,name) {
    openModal('deletar conta',`Deletar permanentemente a conta de ${name}? Isso não pode ser desfeito.`,async()=>{
      try {
        await deleteDoc(doc(db,'users',uid));
        showToast(`Conta de ${name} deletada`);
        loadAdminMembersList();loadAdminSelects();
      } catch(e){showToast('erro ao deletar');}
    },true);
  };

  // ── PENDENTES ──
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
            <button class="btn-sm approve" onclick="approveUser('${d.id}','${data.name}')">✓</button>
            <button class="btn-sm reject" onclick="rejectUser('${d.id}','${data.name}')">✕</button>
          </div>
        </div>`;
      }).join('');
    } catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
  }

  window.approveUser = async function(uid,name) {
    try {
      await updateDoc(doc(db,'users',uid),{status:'approved'});
      await criarNotif(uid,'Sua conta foi aprovada! Bem-vindo ao Banco de Dracmas ADC 🎉','✅');
      showToast('conta aprovada! ✓');loadPending();loadPendingBadge();
    } catch(e){showToast('erro ao aprovar');}
  };

  window.rejectUser = function(uid,name) {
    openModal('recusar conta',`Recusar e deletar a solicitação de ${name}?`,async()=>{
      try {
        await deleteDoc(doc(db,'users',uid));
        showToast(`solicitação de ${name} recusada`);loadPending();loadPendingBadge();
      } catch(e){showToast('erro');}
    },true);
  };

  // ── MURAL ──
  async function loadMural(elId, isAdmin) {
    const el=document.getElementById(elId);
    el.innerHTML='<div class="empty">carregando...</div>';
    try {
      const q=query(collection(db,'mural'),orderBy('createdAt','desc'),limit(20));
      const snap=await getDocs(q);
      if(snap.empty){el.innerHTML='<div class="empty">nenhum aviso publicado</div>';return;}
      el.innerHTML=snap.docs.map(d=>{
        const data=d.data();
        const delBtn=isAdmin?`<button class="btn-sm del" style="margin-top:8px" onclick="deletarAviso('${d.id}')">remover</button>`:'';
        return `<div class="aviso-card">
          <div class="aviso-titulo">📢 ${data.titulo}</div>
          <div class="aviso-texto">${data.texto}</div>
          <div class="aviso-data">${fmtDateFull(data.createdAt)}</div>
          ${delBtn}
        </div>`;
      }).join('');
    } catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
  }

  window.publicarAviso = async function() {
    const titulo=document.getElementById('aviso-titulo').value.trim();
    const texto=document.getElementById('aviso-texto').value.trim();
    if(!titulo||!texto){showErr('aviso-error','preencha título e texto');return;}
    setLoading('aviso-btn',true);
    try {
      await addDoc(collection(db,'mural'),{titulo,texto,autor:currentUser.name,createdAt:serverTimestamp()});
      document.getElementById('aviso-titulo').value='';
      document.getElementById('aviso-texto').value='';
      showToast('aviso publicado! 📢');
      loadMural('mural-admin-list',true);
    } catch(e){showErr('aviso-error','erro ao publicar');}
    finally{setLoading('aviso-btn',false);}
  };

  window.deletarAviso = function(id) {
    openModal('remover aviso','Remover este aviso do mural?',async()=>{
      try{await deleteDoc(doc(db,'mural',id));showToast('aviso removido');loadMural('mural-admin-list',true);}
      catch(e){showToast('erro');}
    },true);
  };

  // ── RELATÓRIO PDF ──
  window.gerarPDF = async function() {
    showToast('gerando relatório...');
    try {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF();
      const agora = new Date();
      const mes = agora.toLocaleDateString('pt-BR',{month:'long',year:'numeric'});

      pdf.setFont('helvetica','bold');
      pdf.setFontSize(18);
      pdf.text('Banco de Dracmas ADC',105,20,{align:'center'});
      pdf.setFontSize(12);
      pdf.setFont('helvetica','normal');
      pdf.text(`Relatório — ${mes}`,105,28,{align:'center'});
      pdf.line(15,32,195,32);

      // membros
      const usersSnap=await getDocs(collection(db,'users'));
      const members=[];
      let totalDracmas=0;
      usersSnap.forEach(d=>{
        const data=d.data();
        if(!data.admin&&data.status==='approved'){
          members.push({name:data.name,balance:data.balance});
          totalDracmas+=data.balance;
        }
      });
      members.sort((a,b)=>b.balance-a.balance);

      pdf.setFont('helvetica','bold');
      pdf.setFontSize(13);
      pdf.text('Membros e Saldos',15,42);
      pdf.setFont('helvetica','normal');
      pdf.setFontSize(11);

      let y=50;
      members.forEach((m,i)=>{
        pdf.text(`${i+1}. ${m.name}`,20,y);
        pdf.text(`${m.balance} dracmas`,160,y,{align:'right'});
        y+=8;
        if(y>270){pdf.addPage();y=20;}
      });

      pdf.line(15,y,195,y); y+=8;
      pdf.setFont('helvetica','bold');
      pdf.text('Total em circulação:',20,y);
      pdf.text(`${totalDracmas} dracmas`,160,y,{align:'right'});
      y+=14;

      // transações do mês
      const inicioMes=new Date(agora.getFullYear(),agora.getMonth(),1);
      const txSnap=await getDocs(query(collection(db,'transactions'),orderBy('createdAt','desc'),limit(200)));
      const txMes=txSnap.docs.filter(d=>{
        const ts=d.data().createdAt;
        if(!ts) return false;
        return ts.toDate()>=inicioMes;
      });

      pdf.setFont('helvetica','bold');
      pdf.setFontSize(13);
      pdf.text(`Transações do mês (${txMes.length})`,15,y); y+=10;
      pdf.setFont('helvetica','normal');
      pdf.setFontSize(10);

      txMes.forEach(d=>{
        const tx=d.data();
        const cat=CATS[tx.category]||CATS.outros;
        const linha=`${fmtDate(tx.createdAt)} | ${cat.label} | ${tx.desc||''} | ${tx.amount} ₯`;
        pdf.text(linha,20,y,{maxWidth:170});
        y+=7;
        if(y>270){pdf.addPage();y=20;}
      });

      pdf.setFontSize(9);
      pdf.setTextColor(150);
      pdf.text(`Gerado em ${agora.toLocaleString('pt-BR')} por ${currentUser.name}`,105,285,{align:'center'});

      pdf.save(`dracmas-adc-${agora.getMonth()+1}-${agora.getFullYear()}.pdf`);
      showToast('PDF gerado com sucesso!');
    } catch(e){showToast('erro ao gerar PDF: '+e.message);}
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
