<html lang="pt-BR">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/>
  <title>Dracmas ADC</title>
  <meta name="theme-color" content="#2e1a47"/>
  <meta name="mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-title" content="Dracmas ADC"/>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Inter:wght@400;500;600;700;800;900&family=Lato:wght@400;700&display=swap" rel="stylesheet"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
  <script src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js"></script>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --p:#1a0e2e;--p2:#2e1a47;--p3:#3d2260;--p4:#4a2d6e;
      --gold:#d4a853;--gd:#a07830;--gold-light:#e8c87a;--pl:#b89fd4;
      --bg:#0f0a1a;--card:#1a1028;--card2:#221538;--card3:#2a1a40;
      --text:#f0eaf8;--muted:#8b7aa8;--muted2:#6b5a88;
      --border:rgba(180,150,255,.1);--border2:rgba(212,168,83,.15);
      --green:#22c55e;--red:#ef4444;
      --r:20px;--rs:14px;
      --shadow:0 4px 20px rgba(0,0,0,.35);
      --shadow-gold:0 4px 20px rgba(212,168,83,.2);
    }
    body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;max-width:420px;margin:0 auto;overflow-x:hidden}
    h1{font-family:'Cinzel',serif}

    /* SCREEN */
    .screen{display:none;min-height:100vh;padding-bottom:90px}
    .screen.active{display:block}
    #screen-loader{flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:var(--p)}
    #screen-loader.active{display:flex}
    .loader-coin{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:36px;font-weight:600;border:4px solid var(--gd);animation:pulse 1.5s ease-in-out infinite;box-shadow:0 0 32px rgba(212,168,83,.4)}
    @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
    .loader-text{color:var(--gold);font-family:'Cinzel',serif;font-size:13px;letter-spacing:.15em;margin-top:1.25rem}

    /* LOGIN (mantido igual) */
    #screen-login{background:var(--p)}
    .login-hero{background:linear-gradient(160deg,var(--p),var(--p4));padding:3rem 1.5rem 2.5rem;text-align:center;border-radius:0 0 32px 32px;margin-bottom:2rem;box-shadow:0 4px 20px rgba(0,0,0,.4)}
    .login-coin{width:88px;height:88px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:38px;font-weight:600;border:4px solid var(--gd);margin:0 auto 1.25rem;box-shadow:0 4px 24px rgba(212,168,83,.4)}
    .login-title{color:var(--gold);font-size:22px;letter-spacing:.05em}
    .login-sub{color:var(--pl);font-size:13px;margin-top:5px}

    /* FORMS */
    .form-wrap{padding:0 1.5rem}
    .form-section{padding:0 1.25rem}
    .form-group{margin-bottom:1.1rem}
    .form-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);display:block;margin-bottom:6px}
    .form-hint{font-size:11px;color:var(--muted);margin-top:4px}
    .form-input{width:100%;padding:13px 14px;font-size:15px;font-family:'Inter',sans-serif;border:1.5px solid var(--border);border-radius:var(--rs);background:var(--card);color:var(--text);outline:none;transition:border-color .2s}
    .form-input:focus{border-color:rgba(212,168,83,.5);box-shadow:0 0 0 3px rgba(212,168,83,.08)}
    textarea.form-input{resize:vertical;min-height:80px}
    .input-wrap{position:relative}
    .input-wrap .form-input{padding-right:44px}
    .toggle-pw{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:16px;color:var(--muted);line-height:1}
    select.form-input{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238b7aa8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:38px}
    option{background:var(--card2);color:var(--text)}

    /* BUTTONS */
    .btn-p{width:100%;padding:14px;font-size:15px;font-weight:700;font-family:'Inter',sans-serif;background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border:none;border-radius:var(--rs);cursor:pointer;transition:opacity .15s,transform .1s;box-shadow:0 4px 16px rgba(0,0,0,.3);letter-spacing:.03em}
    .btn-p:active{opacity:.82;transform:scale(.98)}
    .btn-p.danger{background:linear-gradient(135deg,#7a1a1a,#a33030);color:#fff;box-shadow:0 4px 14px rgba(163,48,48,.3)}
    .btn-p.success{background:linear-gradient(135deg,#14532d,#166534);color:#fff}
    .btn-s{width:100%;padding:13px;font-size:14px;font-weight:700;font-family:'Inter',sans-serif;background:transparent;color:var(--pl);border:1.5px solid var(--border);border-radius:var(--rs);cursor:pointer;margin-top:10px;transition:background .15s}
    .btn-s:active{background:var(--card2)}

    /* TOPBAR — MEMBRO */
    .topbar{background:rgba(15,10,26,.92);backdrop-filter:blur(20px);padding:.9rem 1.25rem;display:flex;align-items:center;gap:10px;position:sticky;top:0;z-index:10;border-bottom:1px solid var(--border)}
    .topbar-logo{width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:17px;font-weight:600;flex-shrink:0}
    .topbar-title{color:var(--text);font-size:15px;font-weight:700;flex:1}
    .topbar-back,.topbar-icon{background:rgba(180,150,255,.08);border:none;border-radius:10px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:17px;color:var(--text);flex-shrink:0}

    /* TOPBAR — ADMIN */
    .topbar.admin-bar{background:rgba(10,6,18,.95);border-bottom:1px solid var(--border2)}
    .topbar.admin-bar .topbar-title{color:var(--gold);font-family:'Cinzel',serif;font-size:14px;letter-spacing:.08em}
    .topbar.admin-bar .topbar-icon{background:rgba(212,168,83,.08);color:var(--gold)}
    .topbar.admin-bar .topbar-back{background:rgba(212,168,83,.08);color:var(--gold)}

    /* HERO — MEMBRO */
    .balance-card{margin:1rem;background:linear-gradient(135deg,#1a0e2e,#2e1a47,#3d2260);border-radius:24px;padding:1.5rem 1.75rem;position:relative;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.4)}
    .balance-card::before{content:'';position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:rgba(212,168,83,.06);pointer-events:none}
    .balance-card::after{content:'';position:absolute;bottom:-30px;left:-30px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.03);pointer-events:none}
    .bal-label{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:rgba(212,168,83,.6);margin-bottom:4px}
    .bal-amount{font-size:44px;font-weight:900;color:var(--gold);font-family:'Cinzel',serif;line-height:1.1}
    .bal-unit{font-size:16px;color:rgba(212,168,83,.5);margin-left:6px}
    .bal-user{font-size:12px;color:rgba(255,255,255,.35);margin-top:8px}

    /* HERO — ADMIN */
    .balance-card.admin-card{background:linear-gradient(135deg,#0a0612,#1a0e2e,#2a1540);border:1px solid rgba(212,168,83,.12)}
    .balance-card.admin-card .bal-amount{color:var(--gold-light)}
    .balance-card.admin-card .bal-label{color:rgba(232,200,122,.5)}

    /* HOME QUICK ACTIONS — MEMBRO */
    .quick-actions{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:0 1rem}
    .action-btn{padding:.85rem .4rem;border-radius:16px;border:1px solid var(--border);background:var(--card);cursor:pointer;text-align:center;transition:transform .12s,background .12s}
    .action-btn:active{transform:scale(.93);background:var(--card2)}
    .action-icon{font-size:22px;margin-bottom:5px}
    .action-label{font-size:10px;font-weight:700;color:var(--muted);letter-spacing:.02em}

    /* SECTION HEADER */
    .sec-header{padding:1rem 1rem .4rem;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--muted2)}

    /* TRANSACTIONS */
    .tx-list{padding:0 1rem}
    .tx-item{display:flex;align-items:center;gap:12px;padding:11px 14px;margin-bottom:8px;background:var(--card);border-radius:16px;border:1px solid var(--border)}
    .tx-icon{width:42px;height:42px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
    .tx-info{flex:1;min-width:0}
    .tx-cat{font-size:13px;font-weight:700;color:var(--text)}
    .tx-desc{font-size:12px;color:var(--muted);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .tx-obs{font-size:12px;color:var(--pl);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .tx-date{font-size:11px;color:var(--muted2);margin-top:3px}
    .tx-right{text-align:right;flex-shrink:0}
    .tx-amt{font-size:15px;font-weight:800}
    .tx-amt.in{color:var(--green)}
    .tx-amt.out{color:var(--red)}

    /* CATEGORY COLORS */
    .cc{background:rgba(29,78,216,.25);color:#93c5fd}
    .cm{background:rgba(157,23,77,.25);color:#f9a8d4}
    .ce{background:rgba(109,40,217,.25);color:#c4b5fd}
    .cs{background:rgba(6,95,70,.25);color:#6ee7b7}
    .cp{background:rgba(180,83,9,.25);color:#fcd34d}
    .cq{background:rgba(161,98,7,.25);color:#fde68a}
    .cn{background:rgba(185,28,28,.25);color:#fca5a5}
    .ct{background:rgba(212,168,83,.15);color:#d4a853}
    .co{background:rgba(107,114,128,.2);color:#9ca3af}

    /* FILTER CHIPS */
    .filter-bar{display:flex;gap:8px;padding:8px 1rem 4px;overflow-x:auto;scrollbar-width:none}
    .filter-bar::-webkit-scrollbar{display:none}
    .chip{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;border:1px solid var(--border);background:var(--card);color:var(--muted);cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .15s}
    .chip.active{background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border-color:transparent;box-shadow:0 3px 10px rgba(0,0,0,.3)}

    /* MEMBERS */
    .member-list{padding:0 1rem}
    .member-item{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--border)}
    .member-av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--p3),var(--p4));color:var(--pl);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0;overflow:hidden}
    .member-name{font-size:14px;font-weight:700;color:var(--text)}
    .member-sub{font-size:12px;color:var(--muted)}
    .member-acts{display:flex;gap:5px;margin-left:auto;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end}
    .bsm{padding:5px 9px;font-size:11px;font-weight:700;font-family:'Inter',sans-serif;border:none;border-radius:8px;cursor:pointer;transition:opacity .15s}
    .bsm:active{opacity:.7}
    .bsm.approve{background:rgba(34,197,94,.15);color:#22c55e}
    .bsm.reject,.bsm.del{background:rgba(239,68,68,.15);color:#ef4444}
    .bsm.view{background:rgba(212,168,83,.15);color:var(--gold)}
    .bsm.pause{background:rgba(251,146,60,.15);color:#fb923c}
    .bsm.unpause{background:rgba(96,165,250,.15);color:#60a5fa}
    .bsm.reset{background:rgba(167,139,250,.15);color:#a78bfa}

    /* BADGES */
    .badge{display:inline-block;background:#dc2626;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;margin-left:6px}
    .tag-a{font-size:10px;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);padding:2px 9px;border-radius:10px;font-weight:700;margin-left:6px;vertical-align:middle}
    .tag-p{font-size:10px;background:#ea580c;color:#fff;padding:2px 8px;border-radius:10px;font-weight:700;margin-left:4px}

    /* TOAST */
    .toast{position:fixed;bottom:88px;left:50%;transform:translateX(-50%);background:var(--card3);color:var(--gold);padding:11px 24px;border-radius:24px;font-size:14px;font-weight:700;display:none;z-index:999;white-space:nowrap;box-shadow:0 6px 24px rgba(0,0,0,.5);border:1px solid var(--border2)}

    /* ERROR / SUCCESS */
    .err{color:#f87171;font-size:13px;margin-top:8px;display:none}
    .suc{color:#4ade80;font-size:13px;margin-top:8px;display:none}
    .empty{padding:2rem 0;text-align:center;font-size:14px;color:var(--muted)}
    .spin{display:inline-block;width:16px;height:16px;border:2px solid var(--gold);border-top-color:transparent;border-radius:50%;animation:sp .7s linear infinite;vertical-align:middle;margin-right:8px}
    @keyframes sp{to{transform:rotate(360deg)}}

    /* TABS */
    .tabs{display:flex;border-bottom:1px solid var(--border);margin:0 1rem 1rem}
    .tab{flex:1;padding:11px;text-align:center;font-size:13px;font-weight:700;cursor:pointer;color:var(--muted);border-bottom:2px solid transparent;margin-bottom:-1px;transition:color .15s}
    .tab.active{color:var(--gold);border-bottom-color:var(--gold)}

    /* PASSWORD */
    .pw-bar{height:4px;border-radius:2px;margin-top:6px;transition:width .3s,background .3s;width:0}
    .pw-bar.weak{width:33%;background:#ef4444}
    .pw-bar.medium{width:66%;background:#d4a853}
    .pw-bar.strong{width:100%;background:#22c55e}
    .pw-lbl{font-size:11px;margin-top:3px}

    /* MENU */
    .menu-item{display:flex;align-items:center;gap:14px;padding:15px 1.25rem;border-bottom:1px solid var(--border);cursor:pointer;transition:background .15s}
    .menu-item:active{background:var(--card2)}
    .menu-icon{font-size:20px;width:32px;text-align:center}
    .menu-label{font-size:15px;color:var(--text)}
    .menu-arrow{margin-left:auto;color:var(--muted);font-size:18px}

    /* CARDS */
    .card{background:var(--card);border-radius:16px;border:1px solid var(--border);padding:1rem;margin-bottom:.75rem}
    .card-title{font-size:14px;font-weight:700;color:var(--text)}
    .card-text{font-size:13px;color:var(--muted);margin-top:5px;line-height:1.6;white-space:pre-wrap}
    .card-date{font-size:11px;color:var(--muted2);margin-top:6px}
    .card-version{font-size:11px;font-weight:700;color:var(--gd);text-transform:uppercase;letter-spacing:.06em}

    /* RELATORIO */
    .rel-section{padding:.5rem 1rem}
    .rel-card{background:var(--card);border-radius:16px;border:1px solid var(--border);padding:1rem;margin-bottom:.75rem}
    .rel-card-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:.6rem}
    .rel-row{display:flex;justify-content:space-between;padding:6px 0;font-size:13px;border-bottom:1px solid var(--border);color:var(--text)}
    .rel-row:last-child{border-bottom:none}
    .rel-row.tx-row{flex-direction:column;gap:2px}
    .rel-total{display:flex;justify-content:space-between;padding:9px 0 0;font-size:14px;font-weight:700;color:var(--gold)}
    .mes-tabs{display:flex;gap:8px;padding:1rem 1rem .5rem}
    .mes-tab{flex:1;padding:10px;text-align:center;font-size:13px;font-weight:700;border-radius:var(--rs);border:1px solid var(--border);background:var(--card);cursor:pointer;color:var(--muted);transition:all .15s}
    .mes-tab.active{background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border-color:transparent;box-shadow:0 4px 14px rgba(0,0,0,.3)}

    /* MODAL */
    .modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:200;align-items:flex-end;justify-content:center;backdrop-filter:blur(4px)}
    .modal-overlay.active{display:flex}
    .modal{background:var(--card2);border-radius:24px 24px 0 0;padding:2rem 1.5rem;width:100%;max-width:420px;box-shadow:0 -8px 40px rgba(0,0,0,.5);border-top:1px solid var(--border)}
    .modal-title{font-family:'Cinzel',serif;font-size:17px;color:var(--gold);margin-bottom:.5rem}
    .modal-body{font-size:14px;color:var(--muted);line-height:1.6;margin-bottom:1.5rem;white-space:pre-wrap}
    .modal-acts{display:flex;gap:10px}
    .modal-acts .btn-p{flex:1;padding:13px}
    .modal-acts .btn-s{flex:1;padding:13px;margin:0}

    /* NOTIF */
    .notif-item{display:flex;align-items:flex-start;gap:12px;padding:12px;margin-bottom:8px;background:var(--card);border-radius:16px;border:1px solid var(--border)}
    .notif-icon{font-size:18px;flex-shrink:0;width:38px;height:38px;border-radius:12px;background:var(--card2);display:flex;align-items:center;justify-content:center}
    .notif-text{font-size:13px;color:var(--text);flex:1;line-height:1.5}
    .notif-date{font-size:11px;color:var(--muted2);margin-top:3px}
    .notif-unread{border-color:rgba(212,168,83,.3);background:var(--card3)}

    /* LOJA */
    .loja-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 1rem}
    .loja-item{background:var(--card);border-radius:20px;border:1px solid var(--border);overflow:hidden;box-shadow:var(--shadow)}
    .loja-img{width:100%;height:130px;background:var(--card2);display:flex;align-items:center;justify-content:center;font-size:36px}
    .loja-img img{width:100%;height:130px;object-fit:cover}
    .loja-info{padding:.75rem}
    .loja-nome{font-size:13px;font-weight:700;color:var(--text)}
    .loja-preco{font-size:13px;font-weight:800;color:var(--gold);margin-top:3px}
    .loja-del{width:100%;padding:7px;font-size:11px;font-weight:700;font-family:'Inter',sans-serif;background:rgba(239,68,68,.1);color:#f87171;border:none;cursor:pointer;border-top:1px solid var(--border)}
    .loja-edit-btn{width:100%;padding:7px;font-size:11px;font-weight:700;font-family:'Inter',sans-serif;background:rgba(212,168,83,.1);color:var(--gold);border:none;cursor:pointer;border-top:1px solid var(--border)}
    .foto-preview{width:100%;height:160px;border-radius:var(--rs);object-fit:cover;margin-bottom:.75rem;display:none;border:1px solid var(--border)}
    .foto-placeholder{width:100%;height:120px;border-radius:var(--rs);border:2px dashed var(--border);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px;cursor:pointer;margin-bottom:.75rem;background:var(--card);transition:border-color .15s}
    .foto-placeholder:active{border-color:var(--gold)}
    .foto-placeholder span{font-size:28px}
    .foto-placeholder p{font-size:12px;color:var(--muted)}

    /* PERFIL */
    .perfil-hero{background:linear-gradient(135deg,var(--p),var(--p2),var(--p3));padding:2rem 1.5rem;text-align:center;border-radius:0 0 28px 28px}
    .perfil-avatar{width:90px;height:90px;border-radius:50%;margin:0 auto 1rem;border:3px solid var(--gold);overflow:hidden;background:linear-gradient(135deg,var(--p3),var(--p4));display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:var(--pl);cursor:pointer;position:relative;box-shadow:0 4px 20px rgba(212,168,83,.25)}
    .perfil-avatar img{width:100%;height:100%;object-fit:cover}
    .perfil-avatar-edit{position:absolute;bottom:2px;right:2px;background:var(--gold);border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--p)}
    .perfil-name{color:var(--text);font-size:20px;font-weight:800}
    .perfil-user{color:var(--muted);font-size:13px;margin-top:4px}
    .perfil-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:1rem}
    .stat-card{background:var(--card);border-radius:16px;border:1px solid var(--border);padding:.85rem .5rem;text-align:center}
    .stat-num{font-size:22px;font-weight:900;color:var(--gold);font-family:'Cinzel',serif}
    .stat-label{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-top:3px}
    .perfil-info{padding:.5rem 1rem}
    .info-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)}
    .info-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}
    .info-value{font-size:14px;color:var(--text);font-weight:600}

    /* COMUNIDADE */
    .search-bar{padding:.85rem 1rem .25rem;position:relative}
    .search-input{width:100%;padding:11px 14px 11px 40px;font-size:14px;font-family:'Inter',sans-serif;border:1px solid var(--border);border-radius:24px;background:var(--card);color:var(--text);outline:none;transition:border-color .2s}
    .search-input:focus{border-color:rgba(212,168,83,.4)}
    .search-input::placeholder{color:var(--muted)}
    .search-icon{position:absolute;left:26px;top:50%;transform:translateY(-50%);font-size:16px;pointer-events:none;opacity:.4}
    .comunidade-list{padding:0 1rem}
    .comunidade-item{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--border);cursor:pointer}
    .comunidade-item:active{opacity:.7}
    .com-avatar{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,var(--p3),var(--p4));color:var(--pl);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;flex-shrink:0;overflow:hidden}
    .com-avatar img{width:100%;height:100%;object-fit:cover}
    .com-name{font-size:14px;font-weight:700;color:var(--text)}
    .com-sub{font-size:12px;color:var(--muted)}
    .com-saldo{margin-left:auto;font-size:13px;font-weight:800;color:var(--gold);flex-shrink:0}

    /* BOAS VINDAS */
    .bv-overlay{position:fixed;inset:0;background:linear-gradient(160deg,var(--p),var(--p4));z-index:500;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;text-align:center}
    .bv-coin{width:90px;height:90px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:40px;font-weight:600;border:4px solid var(--gd);margin:0 auto 1.5rem;box-shadow:0 0 40px rgba(212,168,83,.4);animation:pulse 2s ease-in-out infinite}
    .bv-titulo{font-family:'Cinzel',serif;font-size:22px;color:var(--gold);margin-bottom:.5rem}
    .bv-sub{font-size:14px;color:var(--pl);line-height:1.7;margin-bottom:2rem}
    .bv-btn{background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);border:none;border-radius:var(--rs);padding:14px 40px;font-size:15px;font-weight:700;font-family:'Inter',sans-serif;cursor:pointer;box-shadow:0 4px 16px rgba(212,168,83,.3)}

    /* EXTRATO SEARCH */
    .extrato-search{padding:.5rem 1rem .25rem;display:flex;gap:8px}
    .extrato-search input{flex:1;padding:9px 12px;font-size:13px;font-family:'Inter',sans-serif;border:1px solid var(--border);border-radius:var(--rs);background:var(--card);color:var(--text);outline:none}
    .extrato-search input::placeholder{color:var(--muted)}
    .extrato-search input:focus{border-color:rgba(212,168,83,.4)}

    /* MURAL LIDO */
    .lido-chip{display:inline-block;font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;margin-left:6px;vertical-align:middle}
    .lido-chip.sim{background:rgba(34,197,94,.15);color:#4ade80}
    .lido-chip.nao{background:rgba(239,68,68,.15);color:#f87171}

    /* EXPORTAR */
    .export-btns{display:flex;gap:10px;padding:0 1rem 1rem}
    .export-btns .btn-p{flex:1;padding:11px;font-size:13px}

    /* BOTTOM NAV */
    .bottom-nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:420px;background:rgba(10,6,18,.95);backdrop-filter:blur(20px);border-top:1px solid var(--border);display:none;padding:.55rem 0 .8rem;z-index:20}
    .bottom-nav.show{display:flex}
    .bn-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;padding:.3rem 0;transition:opacity .15s}
    .bn-item:active{opacity:.6}
    .bn-icon{font-size:22px;line-height:1}
    .bn-label{font-size:10px;font-weight:600;color:var(--muted);letter-spacing:.03em}
    .bn-item.active .bn-label{color:var(--gold)}

    /* ADMIN PANEL GRID */
    .admin-panel{background:linear-gradient(135deg,#0a0612,#1a0e2e);border-radius:20px;padding:1.25rem;margin:0 1rem 1rem;border:1px solid var(--border2);box-shadow:0 8px 32px rgba(0,0,0,.4)}
    .admin-panel-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.16em;color:rgba(212,168,83,.5);margin-bottom:1rem}
    .admin-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
    .admin-grid-btn{background:rgba(212,168,83,.06);border:1px solid rgba(212,168,83,.1);border-radius:14px;padding:.9rem .5rem;text-align:center;cursor:pointer;transition:background .15s}
    .admin-grid-btn:active{background:rgba(212,168,83,.14)}
    .admin-grid-icon{font-size:22px;margin-bottom:5px}
    .admin-grid-label{font-size:10px;font-weight:700;color:var(--gold);letter-spacing:.03em}

    /* ADMIN SECTION HEADER */
    .admin-section-header{padding:1rem 1rem .4rem;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--gd)}
    .admin-card{background:var(--card2);border-radius:16px;border:1px solid var(--border2);padding:1.25rem;margin:0 1rem 1rem}

    /* QR */
    .qr-box{background:#fff;border-radius:20px;padding:18px;margin:0 auto;width:fit-content;box-shadow:0 8px 32px rgba(0,0,0,.5)}
    .qr-tabs{display:flex;gap:8px;padding:0 1rem 1rem}
    .qr-tab{flex:1;padding:10px;text-align:center;border-radius:var(--rs);border:1px solid var(--border);background:var(--card);cursor:pointer;font-size:13px;font-weight:700;color:var(--muted);transition:all .15s}
    .qr-tab.active{background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border-color:transparent}
    .scan-area{margin:0 1rem;background:var(--card);border-radius:20px;border:2px dashed var(--border);padding:2rem;text-align:center;display:flex;flex-direction:column;align-items:center;gap:12px}
    .scan-btn{background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border:none;border-radius:var(--rs);padding:12px 28px;font-size:14px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.3);margin-top:.5rem}

    /* TRANSFER NUMPAD */
    .transfer-member-chips{display:flex;gap:8px;overflow-x:auto;padding:0 1rem .75rem;scrollbar-width:none}
    .transfer-member-chips::-webkit-scrollbar{display:none}
    .t-chip{display:flex;flex-direction:column;align-items:center;gap:5px;cursor:pointer;flex-shrink:0;padding:8px 10px;border-radius:14px;border:1.5px solid var(--border);background:var(--card);transition:all .15s;min-width:60px}
    .t-chip.sel{border-color:var(--gold);background:rgba(212,168,83,.08)}
    .t-chip-av{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--p3),var(--p4));color:var(--pl);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}
    .t-chip-name{font-size:10px;font-weight:700;color:var(--text);white-space:nowrap}
    .amount-card{margin:0 1rem .75rem;background:var(--card);border-radius:20px;border:1px solid var(--border);padding:1.25rem}
    .amount-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-bottom:.5rem}
    .amount-display{font-size:50px;font-weight:900;color:var(--text);font-family:'Cinzel',serif;letter-spacing:-.02em}
    .amount-unit{font-size:18px;color:var(--muted);margin-left:6px}
    .numpad{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 1rem}
    .numpad-btn{background:var(--card);border:1px solid var(--border);border-radius:var(--rs);padding:15px;font-size:20px;font-weight:700;color:var(--text);cursor:pointer;text-align:center;transition:background .1s,transform .1s;font-family:'Inter',sans-serif}
    .numpad-btn:active{background:var(--card2);transform:scale(.92)}
    .numpad-btn.del{color:var(--red)}
    .numpad-btn.ok{background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border-color:transparent;box-shadow:0 4px 14px rgba(0,0,0,.3)}
    .msg-wrap{margin:.75rem 1rem 0;position:relative}
    .msg-input{width:100%;padding:12px 14px;font-size:14px;font-family:'Inter',sans-serif;background:var(--card);border:1px solid var(--border);border-radius:var(--rs);color:var(--text);outline:none}
    .msg-input::placeholder{color:var(--muted)}
    .msg-input:focus{border-color:rgba(212,168,83,.4)}
    :root{--purple:#2e1a47;--pl:#b89fd4;--gold:#d4a853;--gd:#a07830;--text:#1c1c1c;--muted:#6b7280;--border:rgba(0,0,0,0.1);--bg:#ffffff;--page:#f3f0f8;--r:14px;--rs:8px}
    body{font-family:'Lato',sans-serif;background:var(--page);color:var(--text);min-height:100vh;max-width:420px;margin:0 auto;overflow-x:hidden}
    h1{font-family:'Cinzel',serif}
    .screen{display:none;min-height:100vh;padding-bottom:3rem}
    .screen.active{display:block}
    #screen-loader{flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:var(--purple)}
    #screen-loader.active{display:flex}
    .loader-coin{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--purple);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:36px;font-weight:600;border:4px solid var(--gd);animation:pulse 1.5s ease-in-out infinite;box-shadow:0 0 28px rgba(212,168,83,.45)}
    @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
    .loader-text{color:var(--gold);font-family:'Cinzel',serif;font-size:13px;letter-spacing:.15em;margin-top:1.25rem}
    .login-hero{background:linear-gradient(160deg,#2e1a47,#4a2d6e);padding:3rem 1.5rem 2.5rem;text-align:center;border-radius:0 0 32px 32px;margin-bottom:2rem;box-shadow:0 4px 20px rgba(46,26,71,.2)}
    .login-coin{width:88px;height:88px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--purple);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:38px;font-weight:600;border:4px solid var(--gd);margin:0 auto 1.25rem;box-shadow:0 4px 20px rgba(212,168,83,.35)}
    .login-title{color:var(--gold);font-size:22px;letter-spacing:.05em}
    .login-sub{color:var(--pl);font-size:13px;margin-top:5px}
    .form-wrap{padding:0 1.5rem}
    .form-section{padding:0 1.25rem}
    .form-group{margin-bottom:1.1rem}
    .form-label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);display:block;margin-bottom:6px}
    .form-hint{font-size:11px;color:var(--muted);margin-top:4px}
    .form-input{width:100%;padding:13px 14px;font-size:15px;font-family:'Lato',sans-serif;border:1.5px solid var(--border);border-radius:var(--rs);background:var(--bg);color:var(--text);outline:none;transition:border-color .2s;box-shadow:0 1px 3px rgba(0,0,0,.05)}
    .form-input:focus{border-color:var(--purple)}
    textarea.form-input{resize:vertical;min-height:80px}
    .input-wrap{position:relative}
    .input-wrap .form-input{padding-right:44px}
    .toggle-pw{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:18px;color:var(--muted);line-height:1}
    select.form-input{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px}
    .btn-p{width:100%;padding:14px;font-size:15px;font-weight:700;font-family:'Lato',sans-serif;background:linear-gradient(135deg,#2e1a47,#4a2d6e);color:var(--gold);border:none;border-radius:var(--rs);cursor:pointer;transition:opacity .15s;box-shadow:0 3px 10px rgba(46,26,71,.25);letter-spacing:.03em}
    .btn-p:active{opacity:.82}
    .btn-p.danger{background:#7a1a1a;color:#fff}
    .btn-p.success{background:#2d6a4f;color:#fff}
    .btn-s{width:100%;padding:12px;font-size:14px;font-weight:700;font-family:'Lato',sans-serif;background:transparent;color:var(--purple);border:1.5px solid var(--purple);border-radius:var(--rs);cursor:pointer;margin-top:10px}
    .topbar{background:linear-gradient(90deg,#2e1a47,#3d2260);padding:1rem 1.25rem;display:flex;align-items:center;gap:10px;position:sticky;top:0;z-index:10;box-shadow:0 2px 10px rgba(46,26,71,.3)}
    .topbar-logo{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--purple);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:18px;font-weight:600;border:2px solid var(--gd);flex-shrink:0;box-shadow:0 2px 8px rgba(212,168,83,.3)}
    .topbar-title{color:var(--gold);font-family:'Cinzel',serif;font-size:14px;letter-spacing:.05em;flex:1}
    .topbar-back,.topbar-icon{background:none;border:none;color:var(--gold);font-size:20px;cursor:pointer;padding:4px;line-height:1}
    .balance-card{margin:1.25rem;background:linear-gradient(135deg,#2e1a47,#4a2d6e);border-radius:var(--r);padding:1.5rem 1.75rem;position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(46,26,71,.25)}
    .balance-card::before{content:'dracmas';position:absolute;right:-5px;bottom:-5px;font-family:'Cinzel',serif;font-size:28px;color:rgba(212,168,83,.07);pointer-events:none;white-space:nowrap}
    .bal-label{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--pl);margin-bottom:4px}
    .bal-amount{font-size:40px;font-weight:700;color:var(--gold);font-family:'Cinzel',serif;line-height:1.1}
    .bal-unit{font-size:18px;color:var(--pl);margin-left:6px}
    .bal-user{font-size:12px;color:var(--pl);margin-top:8px}
    .quick-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 1.25rem 1rem}
    .action-btn{padding:1rem;border-radius:var(--rs);border:1.5px solid var(--border);background:var(--bg);cursor:pointer;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,.06);transition:transform .1s,box-shadow .1s}
    .action-btn:active{background:#ede0f5;transform:scale(.97);box-shadow:0 1px 2px rgba(0,0,0,.08)}
    .action-icon{font-size:24px;margin-bottom:6px}
    .action-label{font-size:12px;font-weight:700;color:var(--text)}
    .sec-header{padding:1rem 1.25rem .5rem;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted)}
    /* TX */
    .tx-list{padding:0 1.25rem}
    .tx-item{display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)}
    .tx-icon{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;margin-top:2px}
    .tx-info{flex:1;min-width:0}
    .tx-cat{font-size:13px;font-weight:700;color:var(--text)}
    .tx-desc{font-size:12px;color:var(--muted);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .tx-obs{font-size:12px;color:#4a2d6e;margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .tx-date{font-size:11px;color:var(--muted);margin-top:3px}
    .tx-right{text-align:right;flex-shrink:0}
    .tx-amt{font-size:15px;font-weight:700}
    .tx-amt.in{color:#2d6a4f}
    .tx-amt.out{color:#a33030}
    /* CAT */
    .cc{background:#e8f4fd;color:#1565c0}
    .cm{background:#fce4ec;color:#880e4f}
    .ce{background:#f3e5f5;color:#6a1b9a}
    .cs{background:#e8f5e9;color:#1b5e20}
    .cp{background:#fff8e1;color:#e65100}
    .cq{background:#fff9c4;color:#f57f17}
    .cn{background:#fdecea;color:#a33030}
    .ct{background:#ede0f5;color:#2e1a47}
    .co{background:#f5f5f5;color:#424242}
    /* FILTER */
    .filter-bar{display:flex;gap:6px;padding:8px 1.25rem;overflow-x:auto;scrollbar-width:none}
    .filter-bar::-webkit-scrollbar{display:none}
    .chip{padding:5px 12px;border-radius:20px;font-size:12px;font-weight:700;border:1.5px solid var(--border);background:var(--bg);color:var(--muted);cursor:pointer;white-space:nowrap;flex-shrink:0}
    .chip.active{background:var(--purple);color:var(--gold);border-color:var(--purple)}
    /* MEMBERS */
    .member-list{padding:0 1.25rem}
    .member-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)}
    .member-av{width:40px;height:40px;border-radius:50%;background:#ede0f5;color:var(--purple);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0}
    .member-name{font-size:14px;font-weight:700;color:var(--text)}
    .member-sub{font-size:12px;color:var(--muted)}
    .member-acts{display:flex;gap:5px;margin-left:auto;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end}
    .bsm{padding:5px 8px;font-size:11px;font-weight:700;font-family:'Lato',sans-serif;border:none;border-radius:6px;cursor:pointer}
    .bsm.approve{background:#2d6a4f;color:#fff}
    .bsm.reject,.bsm.del{background:#7a1a1a;color:#fff}
    .bsm.view{background:var(--purple);color:var(--gold)}
    .bsm.pause{background:#e65100;color:#fff}
    .bsm.unpause{background:#1565c0;color:#fff}
    .bsm.reset{background:#4a2d6e;color:#fff}
    .badge{display:inline-block;background:#a33030;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;margin-left:6px}
    .tag-a{font-size:10px;background:var(--gold);color:var(--purple);padding:2px 8px;border-radius:10px;font-weight:700;margin-left:6px;vertical-align:middle}
    .tag-p{font-size:10px;background:#e65100;color:#fff;padding:2px 8px;border-radius:10px;font-weight:700;margin-left:4px}
    .toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--purple);color:var(--gold);padding:10px 22px;border-radius:22px;font-size:14px;font-weight:700;display:none;z-index:999;white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,.2)}
    .err{color:#a33030;font-size:13px;margin-top:8px;display:none}
    .suc{color:#2d6a4f;font-size:13px;margin-top:8px;display:none}
    .empty{padding:1.5rem 0;text-align:center;font-size:14px;color:var(--muted)}
    .spin{display:inline-block;width:18px;height:18px;border:2px solid var(--gold);border-top-color:transparent;border-radius:50%;animation:sp .7s linear infinite;vertical-align:middle;margin-right:8px}
    @keyframes sp{to{transform:rotate(360deg)}}
    .tabs{display:flex;border-bottom:2px solid var(--border);margin:0 1.25rem 1rem}
    .tab{flex:1;padding:10px;text-align:center;font-size:13px;font-weight:700;cursor:pointer;color:var(--muted);border-bottom:2px solid transparent;margin-bottom:-2px}
    .tab.active{color:var(--purple);border-bottom-color:var(--purple)}
    .pw-bar{height:4px;border-radius:2px;margin-top:6px;transition:width .3s,background .3s;width:0}
    .pw-bar.weak{width:33%;background:#a33030}
    .pw-bar.medium{width:66%;background:#d4a853}
    .pw-bar.strong{width:100%;background:#2d6a4f}
    .pw-lbl{font-size:11px;margin-top:3px}
    .menu-item{display:flex;align-items:center;gap:14px;padding:14px 1.25rem;border-bottom:1px solid var(--border);cursor:pointer}
    .menu-item:active{background:#ede0f5}
    .menu-icon{font-size:20px;width:32px;text-align:center}
    .menu-label{font-size:15px;color:var(--text)}
    .menu-arrow{margin-left:auto;color:var(--muted);font-size:18px}
    /* CARDS */
    .card{background:var(--bg);border-radius:var(--rs);border:1.5px solid var(--border);padding:1rem;margin-bottom:.75rem;box-shadow:0 1px 4px rgba(0,0,0,.06)}
    .card-title{font-size:14px;font-weight:700;color:var(--purple)}
    .card-text{font-size:13px;color:var(--text);margin-top:4px;line-height:1.5;white-space:pre-wrap}
    .card-date{font-size:11px;color:var(--muted);margin-top:6px}
    .card-version{font-size:11px;font-weight:700;color:var(--gd);text-transform:uppercase;letter-spacing:.06em}
    /* RELATORIO */
    .rel-section{padding:.5rem 1.25rem}
    .rel-card{background:var(--bg);border-radius:var(--rs);border:1.5px solid var(--border);padding:1rem;margin-bottom:.75rem}
    .rel-card-title{font-size:13px;font-weight:700;color:var(--purple);margin-bottom:.5rem}
    .rel-row{display:flex;justify-content:space-between;padding:5px 0;font-size:13px;border-bottom:1px solid var(--border)}
    .rel-row:last-child{border-bottom:none}
    .rel-row.tx-row{flex-direction:column;gap:2px}
    .rel-total{display:flex;justify-content:space-between;padding:8px 0 0;font-size:14px;font-weight:700;color:var(--purple)}
    .mes-tabs{display:flex;gap:8px;padding:1rem 1.25rem .5rem}
    .mes-tab{flex:1;padding:10px;text-align:center;font-size:13px;font-weight:700;border-radius:var(--rs);border:1.5px solid var(--border);background:var(--bg);cursor:pointer;color:var(--muted)}
    .mes-tab.active{background:var(--purple);color:var(--gold);border-color:var(--purple)}
    /* MODAL */
    .modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:200;align-items:flex-end;justify-content:center}
    .modal-overlay.active{display:flex}
    .modal{background:var(--bg);border-radius:20px 20px 0 0;padding:1.75rem 1.5rem;width:100%;max-width:420px}
    .modal-title{font-family:'Cinzel',serif;font-size:17px;color:var(--purple);margin-bottom:.5rem}
    .modal-body{font-size:14px;color:var(--muted);line-height:1.6;margin-bottom:1.25rem;white-space:pre-wrap}
    .modal-acts{display:flex;gap:10px}
    .modal-acts .btn-p{flex:1;padding:12px}
    .modal-acts .btn-s{flex:1;padding:12px;margin:0}
    /* NOTIF */
    .notif-item{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)}
    .notif-icon{font-size:20px;flex-shrink:0;margin-top:2px}
    .notif-text{font-size:13px;color:var(--text);flex:1;line-height:1.5}
    .notif-date{font-size:11px;color:var(--muted);margin-top:3px}
    .notif-unread{background:#f8f0ff}

    /* LOJA */
    .loja-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 1.25rem}
    .loja-item{background:var(--bg);border-radius:var(--r);border:1.5px solid var(--border);overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.07)}
    .loja-img{width:100%;height:130px;object-fit:cover;background:#ede0f5;display:flex;align-items:center;justify-content:center;font-size:36px}
    .loja-img img{width:100%;height:130px;object-fit:cover}
    .loja-info{padding:.65rem .75rem}
    .loja-nome{font-size:13px;font-weight:700;color:var(--text)}
    .loja-preco{font-size:13px;font-weight:700;color:var(--gd);margin-top:2px}
    .loja-del{width:100%;padding:6px;font-size:11px;font-weight:700;font-family:'Lato',sans-serif;background:#fdecea;color:#a33030;border:none;cursor:pointer;border-top:1px solid var(--border)}
    .foto-preview{width:100%;height:160px;border-radius:var(--rs);object-fit:cover;margin-bottom:.75rem;display:none;border:1.5px solid var(--border)}
    .foto-placeholder{width:100%;height:120px;border-radius:var(--rs);border:1.5px dashed var(--border);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px;cursor:pointer;margin-bottom:.75rem;background:var(--bg)}
    .foto-placeholder span{font-size:28px}
    .foto-placeholder p{font-size:12px;color:var(--muted)}
    /* PERFIL */
    .perfil-hero{background:linear-gradient(135deg,#2e1a47,#4a2d6e);padding:2rem 1.5rem;text-align:center}
    .perfil-avatar{width:90px;height:90px;border-radius:50%;margin:0 auto 1rem;border:3px solid var(--gold);overflow:hidden;background:#ede0f5;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:700;color:var(--purple);font-family:'Cinzel',serif;cursor:pointer;position:relative}
    .perfil-avatar img{width:100%;height:100%;object-fit:cover}
    .perfil-avatar-edit{position:absolute;bottom:0;right:0;background:var(--gold);border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px}
    .perfil-name{color:var(--gold);font-family:'Cinzel',serif;font-size:18px}
    .perfil-user{color:var(--pl);font-size:13px;margin-top:4px}
    .perfil-info{padding:1.25rem}
    .info-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)}
    .info-label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)}
    .info-value{font-size:14px;color:var(--text);font-weight:600}

    /* COMUNIDADE */
    .search-bar{padding:.75rem 1.25rem .25rem;position:relative}
    .search-input{width:100%;padding:10px 14px 10px 38px;font-size:14px;font-family:'Lato',sans-serif;border:1.5px solid var(--border);border-radius:20px;background:var(--bg);color:var(--text);outline:none}
    .search-input:focus{border-color:var(--purple)}
    .search-icon{position:absolute;left:26px;top:50%;transform:translateY(-50%);font-size:16px;pointer-events:none}
    .comunidade-list{padding:0 1.25rem}
    .comunidade-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);cursor:pointer}
    .comunidade-item:active{background:#f8f0ff;margin:0 -1.25rem;padding:10px 1.25rem}
    .com-avatar{width:46px;height:46px;border-radius:50%;background:#ede0f5;color:var(--purple);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;flex-shrink:0;overflow:hidden;border:2px solid var(--border)}
    .com-avatar img{width:100%;height:100%;object-fit:cover}
    .com-name{font-size:14px;font-weight:700;color:var(--text)}
    .com-sub{font-size:12px;color:var(--muted)}
    .com-saldo{margin-left:auto;font-size:13px;font-weight:700;color:var(--gd);flex-shrink:0}
    /* PERFIL PUBLICO */
    .perfil-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding:1rem 1.25rem 0}
    .stat-card{background:var(--bg);border-radius:var(--rs);border:1.5px solid var(--border);padding:.75rem;text-align:center}
    .stat-num{font-size:18px;font-weight:700;color:var(--purple);font-family:'Cinzel',serif}
    .stat-label{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-top:3px}

    /* BOAS VINDAS */
    .bv-overlay{position:fixed;inset:0;background:linear-gradient(160deg,#2e1a47,#4a2d6e);z-index:500;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;text-align:center}
    .bv-coin{width:90px;height:90px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--purple);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:40px;font-weight:600;border:4px solid var(--gd);margin:0 auto 1.5rem;box-shadow:0 0 40px rgba(212,168,83,.4);animation:pulse 2s ease-in-out infinite}
    .bv-titulo{font-family:'Cinzel',serif;font-size:22px;color:var(--gold);margin-bottom:.5rem}
    .bv-sub{font-size:14px;color:var(--pl);line-height:1.7;margin-bottom:2rem}
    .bv-btn{background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--purple);border:none;border-radius:var(--rs);padding:14px 40px;font-size:15px;font-weight:700;font-family:'Lato',sans-serif;cursor:pointer;box-shadow:0 4px 16px rgba(212,168,83,.3)}

    /* BUSCA EXTRATO */
    .extrato-search{padding:.5rem 1.25rem .25rem;display:flex;gap:8px}
    .extrato-search input{flex:1;padding:9px 12px;font-size:13px;font-family:'Lato',sans-serif;border:1.5px solid var(--border);border-radius:var(--rs);background:var(--bg);color:var(--text);outline:none}
    .extrato-search input:focus{border-color:var(--purple)}

    /* MURAL LIDO */
    .lido-chip{display:inline-block;font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;margin-left:6px;vertical-align:middle}
    .lido-chip.sim{background:#d1fae5;color:#065f46}
    .lido-chip.nao{background:#fee2e2;color:#991b1b}

    /* EDITAR LOJA */
    .loja-edit-btn{width:100%;padding:7px;font-size:11px;font-weight:700;font-family:'Lato',sans-serif;background:#ede0f5;color:#2e1a47;border:none;cursor:pointer;border-top:1px solid var(--border)}

    /* EXPORTAR */
    .export-btns{display:flex;gap:10px;padding:0 1.25rem 1rem}
    .export-btns .btn-p{flex:1;padding:11px;font-size:13px}
  </style>
</head>
<body>


<div id="bv-overlay" class="bv-overlay" style="display:none">
  <div class="bv-coin">&#8367;</div>
  <div class="bv-titulo" id="bv-nome">Bem-vindo!</div>
  <div class="bv-sub">Você acaba de entrar no<br><strong style="color:var(--gold)">Banco de Dracmas ADC</strong>.<br><br>Aqui você gerencia suas dracmas,<br>transfere para outros membros<br>e acompanha seu saldo.</div>
  <button class="bv-btn" onclick="fecharBoasVindas()">Entrar &#8594;</button>
</div>

<div id="screen-loader" class="screen active">
  <div class="loader-coin">₯</div>
  <div class="loader-text">carregando...</div>
</div>

<div id="screen-login" class="screen">
  <div class="login-hero">
    <div class="login-coin">₯</div>
    <h1 class="login-title">Dracmas ADC</h1>
    <div class="login-sub">Igreja ADC</div>
  </div>
  <div class="form-wrap">
    <div class="form-group">
      <label class="form-label">nome de usuario</label>
      <input class="form-input" id="login-user" type="text" placeholder="Ex: joao.silva" autocomplete="username"/>
    </div>
    <div class="form-group">
      <label class="form-label">senha</label>
      <div class="input-wrap">
        <input class="form-input" id="login-pw" type="password" placeholder="sua senha" autocomplete="current-password"/>
        <button class="toggle-pw" type="button" onclick="togglePw('login-pw',this)">&#128065;</button>
      </div>
    </div>
    <div class="err" id="login-error"></div>
    <button class="btn-p" id="login-btn" onclick="doLogin()">entrar</button>
    <button class="btn-s" onclick="goTo('screen-register')">criar conta</button>
  </div>
</div>

<div id="screen-register" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">criar conta</span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">nome completo</label>
      <input class="form-input" id="reg-name" type="text" placeholder="Ex: Joao Silva"/>
    </div>
    <div class="form-group">
      <label class="form-label">nome de usuario</label>
      <input class="form-input" id="reg-user" type="text" placeholder="Ex: joao.silva"/>
      <div class="form-hint">so letras minusculas, numeros e ponto. sem espacos.</div>
    </div>
    <div class="form-group">
      <label class="form-label">senha</label>
      <div class="input-wrap">
        <input class="form-input" id="reg-pw" type="password" placeholder="minimo 6 caracteres" oninput="checkStr(this.value,'pw-bar1','pw-lbl1')" autocomplete="new-password"/>
        <button class="toggle-pw" type="button" onclick="togglePw('reg-pw',this)">&#128065;</button>
      </div>
      <div class="pw-bar" id="pw-bar1"></div>
      <div class="pw-lbl" id="pw-lbl1"></div>
    </div>
    <div class="form-group">
      <label class="form-label">confirmar senha</label>
      <div class="input-wrap">
        <input class="form-input" id="reg-pw2" type="password" placeholder="repita a senha" autocomplete="new-password"/>
        <button class="toggle-pw" type="button" onclick="togglePw('reg-pw2',this)">&#128065;</button>
      </div>
    </div>
    <p style="font-size:12px;color:var(--muted);margin-bottom:1rem;line-height:1.6">&#9203; Sua conta ficara <strong>pendente</strong> ate o administrador aprovar.</p>
    <div class="err" id="reg-error"></div>
    <button class="btn-p" id="reg-btn" onclick="doRegister()">solicitar acesso</button>
  </div>
</div>

<div id="screen-home" class="screen">
  <div class="topbar">
    <div class="topbar-logo">₯</div>
    <span class="topbar-title" id="home-greeting">ola!</span>
    
    <button class="topbar-icon" onclick="goTo('screen-notifs')"><span id="notif-bell">🔔</span></button>
    <button class="topbar-icon" onclick="goTo('screen-settings')">&#9881;</button>
  </div>
  <div class="balance-card">
    <div class="bal-label">saldo atual</div>
    <div><span class="bal-amount" id="home-balance">0</span><span class="bal-unit">dracmas</span></div>
    <div class="bal-user" id="home-user"></div>
  </div>
  <div id="member-actions" style="padding:.75rem 0 0">
    <div class="quick-actions" style="padding-bottom:.75rem">
      <div class="action-btn" onclick="goTo('screen-transfer')">
        <div class="action-icon">&#8599;</div><div class="action-label">enviar</div>
      </div>
      <div class="action-btn" onclick="goTo('screen-qr')">
        <div class="action-icon">&#128247;</div><div class="action-label">QR code</div>
      </div>
      <div class="action-btn" onclick="goTo('screen-history')">
        <div class="action-icon">&#128203;</div><div class="action-label">extrato</div>
      </div>
      <div class="action-btn" onclick="goTo('screen-loja')">
        <div class="action-icon">&#127978;</div><div class="action-label">lojinha</div>
      </div>
    </div>
    <div class="quick-actions" style="padding-bottom:.75rem">
      <div class="action-btn" onclick="goTo('screen-comunidade')">
        <div class="action-icon">&#128101;</div><div class="action-label">comunidade</div>
      </div>
      <div class="action-btn" onclick="goTo('screen-mural')">
        <div class="action-icon">&#128226;</div><div class="action-label">mural</div>
      </div>
      <div class="action-btn" onclick="goTo('screen-perfil')">
        <div class="action-icon">&#128100;</div><div class="action-label">perfil</div>
      </div>
    </div>
  </div>
  <div id="admin-btns" style="display:none">
      <div style="padding:.75rem 1.25rem .25rem">
        <div style="background:linear-gradient(135deg,#1a0e2e,#2e1a47);border-radius:18px;padding:1.25rem;box-shadow:0 6px 24px rgba(26,14,46,.35);border:1px solid rgba(212,168,83,.15)">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:rgba(212,168,83,.6);margin-bottom:1rem">painel administrativo</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div onclick="goTo('screen-admin')" style="background:rgba(255,255,255,.06);border-radius:14px;padding:1rem;text-align:center;cursor:pointer;border:1px solid rgba(212,168,83,.12);transition:background .15s" onmousedown="this.style.background='rgba(255,255,255,.12)'" onmouseup="this.style.background='rgba(255,255,255,.06)'" ontouchstart="this.style.background='rgba(255,255,255,.12)'" ontouchend="this.style.background='rgba(255,255,255,.06)'">
              <div style="font-size:24px;margin-bottom:6px">&#128081;</div>
              <div style="font-size:11px;font-weight:700;color:#d4a853;letter-spacing:.03em">gerenciar</div>
            </div>
            <div onclick="goTo('screen-pending')" style="background:rgba(255,255,255,.06);border-radius:14px;padding:1rem;text-align:center;cursor:pointer;border:1px solid rgba(212,168,83,.12)" onmousedown="this.style.background='rgba(255,255,255,.12)'" onmouseup="this.style.background='rgba(255,255,255,.06)'" ontouchstart="this.style.background='rgba(255,255,255,.12)'" ontouchend="this.style.background='rgba(255,255,255,.06)'">
              <div style="font-size:24px;margin-bottom:6px">&#9203;</div>
              <div style="font-size:11px;font-weight:700;color:#d4a853;letter-spacing:.03em">aprovar <span id="pending-badge" class="badge" style="display:none">0</span></div>
            </div>
            <div onclick="goTo('screen-relatorio')" style="background:rgba(255,255,255,.06);border-radius:14px;padding:1rem;text-align:center;cursor:pointer;border:1px solid rgba(212,168,83,.12)" onmousedown="this.style.background='rgba(255,255,255,.12)'" onmouseup="this.style.background='rgba(255,255,255,.06)'" ontouchstart="this.style.background='rgba(255,255,255,.12)'" ontouchend="this.style.background='rgba(255,255,255,.06)'">
              <div style="font-size:24px;margin-bottom:6px">&#128202;</div>
              <div style="font-size:11px;font-weight:700;color:#d4a853;letter-spacing:.03em">relatório</div>
            </div>
            <div onclick="goTo('screen-mural-admin')" style="background:rgba(255,255,255,.06);border-radius:14px;padding:1rem;text-align:center;cursor:pointer;border:1px solid rgba(212,168,83,.12)" onmousedown="this.style.background='rgba(255,255,255,.12)'" onmouseup="this.style.background='rgba(255,255,255,.06)'" ontouchstart="this.style.background='rgba(255,255,255,.12)'" ontouchend="this.style.background='rgba(255,255,255,.06)'">
              <div style="font-size:24px;margin-bottom:6px">&#128226;</div>
              <div style="font-size:11px;font-weight:700;color:#d4a853;letter-spacing:.03em">gerir mural</div>
            </div>
            <div onclick="goTo('screen-loja-admin')" style="background:rgba(255,255,255,.06);border-radius:14px;padding:1rem;text-align:center;cursor:pointer;border:1px solid rgba(212,168,83,.12)" onmousedown="this.style.background='rgba(255,255,255,.12)'" onmouseup="this.style.background='rgba(255,255,255,.06)'" ontouchstart="this.style.background='rgba(255,255,255,.12)'" ontouchend="this.style.background='rgba(255,255,255,.06)'">
              <div style="font-size:24px;margin-bottom:6px">&#127978;</div>
              <div style="font-size:11px;font-weight:700;color:#d4a853;letter-spacing:.03em">gerir loja</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sec-header">ultimas transacoes</div>
  <div class="tx-list" id="home-txs"><div class="empty">carregando...</div></div>
</div>

<div id="screen-history" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">extrato completo</span>
  </div>
  <div class="extrato-search">
    <input type="text" id="history-search" placeholder="buscar por descricao..." oninput="buscarExtrato('history',this.value)"/>
  </div>
  <div class="filter-bar" id="history-filters"></div>
  <div class="tx-list" id="history-txs"><div class="empty">carregando...</div></div>
</div>

<div id="screen-member-history" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title" id="member-history-title">extrato</span>
  </div>
  <div class="extrato-search">
    <input type="text" id="member-history-search" placeholder="buscar por descricao..." oninput="buscarExtrato('member-history',this.value)"/>
  </div>
  <div class="filter-bar" id="member-history-filters"></div>
  <div class="tx-list" id="member-history-txs"><div class="empty">carregando...</div></div>
</div>

<div id="screen-transfer" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">transferir dracmas</span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">para quem</label>
      <select class="form-input" id="transfer-to"></select>
    </div>
    <div class="form-group">
      <label class="form-label">quantidade</label>
      <input class="form-input" id="transfer-amount" type="number" min="1" placeholder="0" inputmode="numeric"/>
    </div>
    <div class="form-group">
      <label class="form-label">mensagem (opcional)</label>
      <input class="form-input" id="transfer-msg" type="text" placeholder="ex: obrigado pela ajuda!"/>
    </div>
    <div class="err" id="transfer-error"></div>
    <button class="btn-p" id="transfer-btn" onclick="confirmarTransfer()">transferir</button>
  </div>
</div>

<div id="screen-notifs" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">notificacoes</span>
  </div>
  <div style="padding:0 1.25rem" id="notifs-list"><div class="empty">carregando...</div></div>
</div>

<div id="screen-settings" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">configuracoes</span>
  </div>
  <div style="padding-top:.5rem">
    <div class="menu-item" onclick="goTo('screen-perfil')">
      <div class="menu-icon">&#128100;</div><div class="menu-label">meu perfil</div><div class="menu-arrow">&#8250;</div>
    </div>
    <div class="menu-item" onclick="goTo('screen-change-pw')">
      <div class="menu-icon">&#128273;</div><div class="menu-label">mudar senha</div><div class="menu-arrow">&#8250;</div>
    </div>

    <div class="menu-item" onclick="doLogout()">
      <div class="menu-icon">&#8619;</div><div class="menu-label" style="color:#a33030">sair da conta</div><div class="menu-arrow">&#8250;</div>
    </div>
  </div>
</div>

<div id="screen-change-pw" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">mudar senha</span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">senha atual</label>
      <div class="input-wrap">
        <input class="form-input" id="cpw-current" type="password" placeholder="sua senha atual"/>
        <button class="toggle-pw" type="button" onclick="togglePw('cpw-current',this)">&#128065;</button>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">nova senha</label>
      <div class="input-wrap">
        <input class="form-input" id="cpw-new" type="password" placeholder="minimo 6 caracteres" oninput="checkStr(this.value,'pw-bar2','pw-lbl2')"/>
        <button class="toggle-pw" type="button" onclick="togglePw('cpw-new',this)">&#128065;</button>
      </div>
      <div class="pw-bar" id="pw-bar2"></div>
      <div class="pw-lbl" id="pw-lbl2"></div>
    </div>
    <div class="form-group">
      <label class="form-label">confirmar nova senha</label>
      <div class="input-wrap">
        <input class="form-input" id="cpw-new2" type="password" placeholder="repita a nova senha"/>
        <button class="toggle-pw" type="button" onclick="togglePw('cpw-new2',this)">&#128065;</button>
      </div>
    </div>
    <div class="err" id="cpw-error"></div>
    <div class="suc" id="cpw-success">senha alterada com sucesso!</div>
    <button class="btn-p" id="cpw-btn" onclick="doChangePw()">salvar nova senha</button>
  </div>
</div>

<div id="screen-mural" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">mural de avisos</span>
  </div>
  <div style="padding:1rem 1.25rem" id="mural-list" data-track="true"><div class="empty">carregando...</div></div>
</div>

<div id="screen-mural-admin" class="screen">
  <div class="topbar admin-bar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">mural <span class="tag-a">admin</span></span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">titulo</label>
      <input class="form-input" id="aviso-titulo" type="text" placeholder="Ex: Culto especial sabado!"/>
    </div>
    <div class="form-group">
      <label class="form-label">texto</label>
      <textarea class="form-input" id="aviso-texto" placeholder="Detalhes do aviso..."></textarea>
    </div>
    <div class="err" id="aviso-error"></div>
    <button class="btn-p" id="aviso-btn" onclick="publicarAviso()">publicar aviso</button>
  </div>
  <div class="sec-header">avisos publicados</div>
  <div style="padding:0 1.25rem" id="mural-admin-list"><div class="empty">carregando...</div></div>
</div>

<div id="screen-changelog" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">novidades &#127381;</span>
  </div>
  <div style="padding:1rem 1.25rem" id="changelog-list"><div class="empty">carregando...</div></div>
</div>

<div id="screen-changelog-admin" class="screen">
  <div class="topbar admin-bar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">publicar novidade <span class="tag-a">admin</span></span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">versao (ex: 1.3)</label>
      <input class="form-input" id="cl-version" type="text" placeholder="Ex: 1.3"/>
    </div>
    <div class="form-group">
      <label class="form-label">titulo</label>
      <input class="form-input" id="cl-titulo" type="text" placeholder="Ex: Extrato com filtros"/>
    </div>
    <div class="form-group">
      <label class="form-label">o que mudou</label>
      <textarea class="form-input" id="cl-texto" placeholder="- Extrato com filtros&#10;- Relatorio por mes&#10;- Correcao de bugs..."></textarea>
    </div>
    <div class="err" id="cl-error"></div>
    <button class="btn-p" id="cl-btn" onclick="publicarChangelog()">publicar</button>
  </div>
  <div class="sec-header">publicacoes anteriores</div>
  <div style="padding:0 1.25rem" id="changelog-admin-list"><div class="empty">carregando...</div></div>
</div>

<div id="screen-relatorio" class="screen">
  <div class="topbar admin-bar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">relatorio <span class="tag-a">admin</span></span>
  </div>
  <div class="mes-tabs">
    <div class="mes-tab active" id="tab-mes-atual" onclick="switchMes('atual')">mes atual</div>
    <div class="mes-tab" id="tab-mes-ant" onclick="switchMes('anterior')">mes anterior</div>
  </div>
  <div id="relatorio-content"><div class="empty" style="padding:2rem">carregando...</div></div>
  <div style="padding:0 1.25rem 1rem">
    <button class="btn-p" id="pdf-btn" onclick="gerarPDF()">baixar PDF</button>
  </div>
</div>

<div id="screen-admin" class="screen">
  <div class="topbar admin-bar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">gerenciar <span class="tag-a">admin</span></span>
  </div>
  <div class="tabs">
    <div class="tab active" id="tab-give" onclick="switchAdminTab('give')">+ dar</div>
    <div class="tab" id="tab-take" onclick="switchAdminTab('take')">- retirar</div>
  </div>
  <div class="form-section" id="admin-give-form" style="padding-top:.75rem">
    <div class="form-group">
      <label class="form-label">membro</label>
      <select class="form-input" id="admin-member-give"></select>
    </div>
    <div class="form-group">
      <label class="form-label">categoria</label>
      <select class="form-input" id="admin-cat-give">
        <option value="culto">Culto</option>
        <option value="missao">Missao</option>
        <option value="evento">Evento</option>
        <option value="estudo">Estudo / Celula</option>
        <option value="conquista">Conquista</option>
        <option value="presente">Presente</option>
        <option value="outros">Outros</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">quantidade</label>
      <input class="form-input" id="admin-amount-give" type="number" min="1" placeholder="0" inputmode="numeric"/>
    </div>
    <div class="form-group">
      <label class="form-label">observacao (opcional)</label>
      <input class="form-input" id="admin-reason-give" type="text" placeholder="ex: presenca no culto de domingo"/>
    </div>
    <div class="err" id="admin-error-give"></div>
    <button class="btn-p" id="admin-btn-give" onclick="doDistribute()">dar dracmas</button>
  </div>
  <div class="form-section" id="admin-take-form" style="display:none;padding-top:.75rem">
    <div class="form-group">
      <label class="form-label">membro</label>
      <select class="form-input" id="admin-member-take"></select>
    </div>
    <div class="form-group">
      <label class="form-label">categoria</label>
      <select class="form-input" id="admin-cat-take">
        <option value="penalidade">Penalidade</option>
        <option value="outros">Outros</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">quantidade</label>
      <input class="form-input" id="admin-amount-take" type="number" min="1" placeholder="0" inputmode="numeric"/>
    </div>
    <div class="form-group">
      <label class="form-label">observacao (opcional)</label>
      <input class="form-input" id="admin-reason-take" type="text" placeholder="ex: motivo da penalidade"/>
    </div>
    <div class="err" id="admin-error-take"></div>
    <button class="btn-p danger" id="admin-btn-take" onclick="doDeduct()">retirar dracmas</button>
  </div>
  <div class="sec-header">membros ativos</div>
  <div class="export-btns">
    <button class="btn-p" onclick="exportarCSV()" style="font-size:13px;padding:11px">&#128196; exportar CSV</button>
    <button class="btn-p" onclick="exportarPDFMembros()" style="font-size:13px;padding:11px">&#128209; exportar PDF</button>
  </div>
  <div class="member-list" id="admin-members-list"><div class="empty">carregando...</div></div>
</div>

<div id="screen-pending" class="screen">
  <div class="topbar admin-bar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">aprovacao de contas</span>
  </div>
  <div class="member-list" id="pending-list"><div class="empty">carregando...</div></div>
</div>


<div id="screen-loja" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">&#127978; Lojinha de Dracmas</span>
  </div>
  <p style="font-size:12px;color:var(--muted);padding:.75rem 1.25rem;line-height:1.6">Veja os itens disponíveis e seus preços. Para comprar, apresente o item na feirinha e pague com seus dracmas!</p>
  <div class="loja-grid" id="loja-grid"><div class="empty" style="grid-column:1/-1">carregando...</div></div>
</div>

<div id="screen-loja-admin" class="screen">
  <div class="topbar admin-bar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">gerenciar lojinha <span class="tag-a">admin</span></span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">foto do item</label>
      <div class="foto-placeholder" id="loja-placeholder" onclick="document.getElementById('loja-foto-input').click()">
        <span>&#128247;</span>
        <p>toque para escolher foto</p>
      </div>
      <img class="foto-preview" id="loja-foto-preview" src="" alt="preview"/>
      <input type="file" id="loja-foto-input" accept="image/*" style="display:none" onchange="previewFoto(this,'loja-foto-preview','loja-placeholder')"/>
    </div>
    <div class="form-group">
      <label class="form-label">nome do item</label>
      <input class="form-input" id="loja-nome" type="text" placeholder="Ex: Brigadeiro"/>
    </div>
    <div class="form-group">
      <label class="form-label">preco em dracmas</label>
      <input class="form-input" id="loja-preco" type="number" min="1" placeholder="Ex: 10" inputmode="numeric"/>
    </div>
    <div class="err" id="loja-error"></div>
    <button class="btn-p" id="loja-btn" onclick="adicionarItem()">adicionar item</button>
  </div>
  <div class="sec-header">itens na loja</div>
  <div class="loja-grid" id="loja-admin-grid"><div class="empty" style="grid-column:1/-1">carregando...</div></div>
</div>

<div id="screen-perfil" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">meu perfil</span>
  </div>
  <div class="perfil-hero">
    <div class="perfil-avatar" id="perfil-avatar-el" onclick="document.getElementById('perfil-foto-input').click()">
      <span id="perfil-avatar-initials"></span>
      <img id="perfil-avatar-img" src="" alt="" style="display:none"/>
      <div class="perfil-avatar-edit">&#9998;</div>
    </div>
    <input type="file" id="perfil-foto-input" accept="image/*" style="display:none" onchange="salvarFotoPerfil(this)"/>
    <div class="perfil-name" id="perfil-name"></div>
    <div class="perfil-user" id="perfil-user"></div>
  </div>
  <div class="perfil-stats">
    <div class="stat-card">
      <div class="stat-num" id="perfil-saldo">0</div>
      <div class="stat-label">saldo</div>
    </div>
    <div class="stat-card">
      <div class="stat-num" id="perfil-recebidos">0</div>
      <div class="stat-label">recebidos</div>
    </div>
    <div class="stat-card">
      <div class="stat-num" id="perfil-enviados">0</div>
      <div class="stat-label">enviados</div>
    </div>
  </div>
  <div class="perfil-info" style="margin-top:.5rem">
    <div class="info-row">
      <span class="info-label">usuario</span>
      <span class="info-value" id="perfil-username"></span>
    </div>
    <div class="info-row">
      <span class="info-label">membro desde</span>
      <span class="info-value" id="perfil-data"></span>
    </div>
    <div class="info-row">
      <span class="info-label">status</span>
      <span class="info-value" id="perfil-status"></span>
    </div>
  </div>
  <div style="padding:0 1.25rem">
    <button class="btn-p" onclick="goTo('screen-change-pw')" style="margin-bottom:.75rem">mudar senha</button>
    <button class="btn-s" onclick="doLogout()">sair da conta</button>
  </div>
</div>


<div id="screen-comunidade" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">&#128101; comunidade</span>
  </div>
  <div class="search-bar">
    <span class="search-icon">&#128269;</span>
    <input class="search-input" id="com-search" type="text" placeholder="buscar membro..." oninput="filtrarComunidade(this.value)"/>
  </div>
  <div class="comunidade-list" id="comunidade-list"><div class="empty">carregando...</div></div>
</div>

<div id="screen-perfil-publico" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title" id="pp-topbar-title">perfil</span>
  </div>
  <div class="perfil-hero">
    <div class="perfil-avatar" style="cursor:default">
      <span id="pp-initials"></span>
      <img id="pp-avatar-img" src="" alt="" style="display:none"/>
    </div>
    <div class="perfil-name" id="pp-name"></div>
    <div class="perfil-user" id="pp-user"></div>
  </div>
  <div class="perfil-stats">
    <div class="stat-card">
      <div class="stat-num" id="pp-saldo">0</div>
      <div class="stat-label">saldo</div>
    </div>
    <div class="stat-card">
      <div class="stat-num" id="pp-recebidos">0</div>
      <div class="stat-label">recebidos</div>
    </div>
    <div class="stat-card">
      <div class="stat-num" id="pp-enviados">0</div>
      <div class="stat-label">enviados</div>
    </div>
  </div>
  <div class="perfil-info" style="margin-top:.5rem">
    <div class="info-row">
      <span class="info-label">membro desde</span>
      <span class="info-value" id="pp-data"></span>
    </div>
    <div class="info-row">
      <span class="info-label">status</span>
      <span class="info-value" id="pp-status"></span>
    </div>
  </div>
</div>


<div class="modal-overlay" id="modal-edit-loja">
  <div class="modal">
    <div class="modal-title">editar item</div>
    <input type="hidden" id="edit-loja-id"/>
    <div class="form-group" style="margin-bottom:1rem">
      <label class="form-label">nome do item</label>
      <input class="form-input" id="edit-loja-nome" type="text" placeholder="Ex: Brigadeiro"/>
    </div>
    <div class="form-group" style="margin-bottom:1rem">
      <label class="form-label">preco em dracmas</label>
      <input class="form-input" id="edit-loja-preco" type="number" min="1" placeholder="Ex: 10" inputmode="numeric"/>
    </div>
    <div class="err" id="edit-loja-error"></div>
    <div class="modal-acts">
      <button class="btn-s" onclick="closeEditLoja()">cancelar</button>
      <button class="btn-p" id="edit-loja-btn" onclick="salvarEdicaoLoja()">salvar</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-confirm">
  <div class="modal">
    <div class="modal-title" id="modal-title">confirmar</div>
    <div class="modal-body" id="modal-body"></div>
    <div class="modal-acts">
      <button class="btn-s" onclick="closeModal()">cancelar</button>
      <button class="btn-p" id="modal-confirm-btn">confirmar</button>
    </div>
  </div>
</div>

<div id="toast" class="toast"></div>

<script type="module">
import{initializeApp}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import{getFirestore,doc,getDoc,setDoc,updateDoc,deleteDoc,collection,getDocs,addDoc,query,where,orderBy,limit,serverTimestamp,runTransaction}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
const FC={apiKey:"AIzaSyA-t2k2EVpfv-xqtQxtq4bt043tOqTtTDw",authDomain:"banco-dracmas.firebaseapp.com",projectId:"banco-dracmas",storageBucket:"banco-dracmas.firebasestorage.app",messagingSenderId:"755685605861",appId:"1:755685605861:web:651fd974ad8a784af7af0c"};
const db=getFirestore(initializeApp(FC));
let CU=null,allMembers=[],relAtual=[],relAnt=[],relMode='atual',histAll=[],mHistAll=[];
const CATS={culto:{icon:'&#9962;',cls:'cc',label:'Culto'},missao:{icon:'&#128591;',cls:'cm',label:'Missao'},evento:{icon:'&#127881;',cls:'ce',label:'Evento'},estudo:{icon:'&#128218;',cls:'cs',label:'Estudo'},conquista:{icon:'&#127942;',cls:'cq',label:'Conquista'},presente:{icon:'&#127873;',cls:'cp',label:'Presente'},penalidade:{icon:'&#9888;',cls:'cn',label:'Penalidade'},transferencia:{icon:'&#8596;',cls:'ct',label:'Transferencia'},outros:{icon:'&#128221;',cls:'co',label:'Outros'}};
const initials=n=>n.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
const fmtDt=ts=>{if(!ts)return'';const d=ts.toDate?ts.toDate():new Date(ts);return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'2-digit'})+' '+d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});};
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.style.display='block';clearTimeout(window._tt);window._tt=setTimeout(()=>t.style.display='none',2500);}
function err(id,msg){const e=document.getElementById(id);if(!e)return;e.textContent=msg;e.style.display='block';setTimeout(()=>e.style.display='none',4000);}
function suc(id,msg){const e=document.getElementById(id);if(!e)return;e.textContent=msg;e.style.display='block';setTimeout(()=>e.style.display='none',4000);}
function setLoad(id,on){const b=document.getElementById(id);if(!b)return;b.disabled=on;if(on){b.dataset.o=b.innerHTML;b.innerHTML='<span class="spin"></span>aguarde...';}else b.innerHTML=b.dataset.o||b.innerHTML;}
window.openModal=function(title,body,fn,danger=false){document.getElementById('modal-title').textContent=title;document.getElementById('modal-body').textContent=body;const b=document.getElementById('modal-confirm-btn');b.className=danger?'btn-p danger':'btn-p';b.onclick=()=>{closeModal();fn();};document.getElementById('modal-confirm').classList.add('active');};
window.closeModal=()=>document.getElementById('modal-confirm').classList.remove('active');
window.togglePw=function(id,btn){const i=document.getElementById(id);i.type=i.type==='password'?'text':'password';btn.textContent=i.type==='text'?'hide':'show';};
window.checkStr=function(pw,barId,lblId){const bar=document.getElementById(barId),lbl=document.getElementById(lblId);if(!pw){bar.className='pw-bar';lbl.textContent='';return;}let s=0;if(pw.length>=6)s++;if(pw.length>=10)s++;if(/[A-Z]/.test(pw))s++;if(/[0-9]/.test(pw))s++;if(/[^A-Za-z0-9]/.test(pw))s++;const r=s<=1?{c:'weak',l:'fraca'}:s<=3?{c:'medium',l:'media'}:{c:'strong',l:'forte'};bar.className='pw-bar '+r.c;lbl.textContent='senha '+r.l;lbl.style.color=r.c==='weak'?'#a33030':r.c==='medium'?'#a07830':'#2d6a4f';};
// NAV
const navStack=[];
window.goTo=function(id,isBack=false){const cur=document.querySelector('.screen.active')?.id;if(!isBack&&cur&&cur!==id)navStack.push(cur);document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0);updateBottomNav(id);if(id==='screen-transfer')loadTransferMembers();if(id==='screen-history')loadHistoryScreen();if(id==='screen-admin'){loadAdminSelects();loadAdminList();}if(id==='screen-pending')loadPending();if(id==='screen-notifs')loadNotifs();if(id==='screen-mural')loadMuralComLeitura('mural-list',false);if(id==='screen-mural-admin')loadMuralComLeitura('mural-admin-list',true);if(id==='screen-changelog')loadCL('changelog-list',false);if(id==='screen-changelog-admin')loadCL('changelog-admin-list',true);if(id==='screen-relatorio'){relMode='atual';document.getElementById('tab-mes-atual').classList.add('active');document.getElementById('tab-mes-ant').classList.remove('active');loadRelatorio();}if(id==='screen-loja')loadLoja('loja-grid',false);
  if(id==='screen-qr'){switchQRTab('meu');gerarQR();}
  if(id==='screen-comunidade')loadComunidade();
  if(id==='screen-loja-admin')loadLoja('loja-admin-grid',true);
  if(id==='screen-perfil')renderPerfil();
  if(id==='screen-change-pw'){['cpw-current','cpw-new','cpw-new2'].forEach(i=>document.getElementById(i).value='');document.getElementById('pw-bar2').className='pw-bar';document.getElementById('pw-lbl2').textContent='';}};
window.goBack=function(){const cur=document.querySelector('.screen.active')?.id;while(navStack.length>0&&navStack[navStack.length-1]===cur)navStack.pop();goTo(navStack.length>0?navStack.pop():'screen-home',true);};
// TX HTML
function txHtml(tx,uid){const isIn=tx.to===uid;const cat=CATS[tx.category]||(isIn?CATS.outros:CATS.transferencia);return`<div class="tx-item"><div class="tx-icon ${cat.cls}">${cat.icon}</div><div class="tx-info"><div class="tx-cat">${cat.label}</div>${tx.desc?`<div class="tx-desc">${tx.desc}</div>`:''} ${tx.obs?`<div class="tx-obs">msg: ${tx.obs}</div>`:''}<div class="tx-date">${fmtDt(tx.createdAt)}</div></div><div class="tx-right"><div class="tx-amt ${isIn?'in':'out'}">${isIn?'+':'-'}${tx.amount}</div></div></div>`;}
// FILTERS
function buildFilters(containerId,txs){const el=document.getElementById(containerId);const cats=new Set(txs.map(t=>t.category).filter(Boolean));const chips=[{key:'all',label:'Todos'},...[...cats].map(k=>({key:k,label:(CATS[k]?.label||k)}))];el.innerHTML=chips.map(c=>`<div class="chip${c.key==='all'?' active':''}" data-key="${c.key}" onclick="applyFilter('${containerId}','${c.key}')">${c.label}</div>`).join('');}
window.applyFilter=function(cid,key){document.querySelectorAll(`#${cid} .chip`).forEach(c=>c.classList.toggle('active',c.dataset.key===key));const listId=cid==='history-filters'?'history-txs':'member-history-txs';const txs=cid==='history-filters'?histAll:mHistAll;const uid=cid==='history-filters'?CU.id:window._mhUid;const f=key==='all'?txs:txs.filter(t=>t.category===key);document.getElementById(listId).innerHTML=f.length?f.map(t=>txHtml(t,uid)).join(''):'<div class="empty">nenhuma transacao</div>';};
// LOGIN
window.doLogin=async function(){const u=document.getElementById('login-user').value.trim().toLowerCase();const p=document.getElementById('login-pw').value;if(!u||!p){err('login-error','preencha todos os campos');return;}setLoad('login-btn',true);try{const snap=await getDoc(doc(db,'users',u));if(!snap.exists()){err('login-error','usuario nao encontrado');return;}const data=snap.data();if(data.password!==p){err('login-error','senha incorreta');return;}if(data.status==='pending'){err('login-error','conta aguardando aprovacao');return;}if(data.status==='paused'){err('login-error','conta pausada. fale com o admin');return;}CU={id:u,...data};renderHome();goTo('screen-home');if(!CU.admin)document.getElementById('bottom-nav').classList.add('show');}catch(e){err('login-error','erro de conexao');}finally{setLoad('login-btn',false);}};
// REGISTER
window.doRegister=async function(){const name=document.getElementById('reg-name').value.trim();const u=document.getElementById('reg-user').value.trim().toLowerCase().replace(/\s+/g,'');const p=document.getElementById('reg-pw').value;const p2=document.getElementById('reg-pw2').value;if(!name||!u||!p||!p2){err('reg-error','preencha todos os campos');return;}if(p.length<6){err('reg-error','senha minimo 6 caracteres');return;}if(p!==p2){err('reg-error','as senhas nao coincidem');return;}if(!/^[a-z0-9._]+$/.test(u)){err('reg-error','usuario: so letras minusculas, numeros e ponto');return;}setLoad('reg-btn',true);try{const ref=doc(db,'users',u);if((await getDoc(ref)).exists()){err('reg-error','usuario ja existe');return;}await setDoc(ref,{name,password:p,balance:0,admin:false,status:'pending',createdAt:serverTimestamp()});toast('solicitacao enviada! aguarde aprovacao.');goTo('screen-login');document.getElementById('login-user').value=u;}catch(e){err('reg-error','erro ao criar conta');}finally{setLoad('reg-btn',false);}};
// CHANGE PW
window.doChangePw=async function(){const c=document.getElementById('cpw-current').value;const n=document.getElementById('cpw-new').value;const n2=document.getElementById('cpw-new2').value;if(!c||!n||!n2){err('cpw-error','preencha todos os campos');return;}if(c!==CU.password){err('cpw-error','senha atual incorreta');return;}if(n.length<6){err('cpw-error','nova senha minimo 6 caracteres');return;}if(n!==n2){err('cpw-error','as senhas nao coincidem');return;}if(n===c){err('cpw-error','a nova senha deve ser diferente da atual');return;}setLoad('cpw-btn',true);try{await updateDoc(doc(db,'users',CU.id),{password:n});CU.password=n;suc('cpw-success','senha alterada com sucesso!');['cpw-current','cpw-new','cpw-new2'].forEach(i=>document.getElementById(i).value='');}catch(e){err('cpw-error','erro ao salvar');}finally{setLoad('cpw-btn',false);}};
// LOGOUT
window.doLogout=function(){CU=null;allMembers=[];navStack.length=0;document.getElementById('bottom-nav').classList.remove('show');document.getElementById('login-user').value='';document.getElementById('login-pw').value='';goTo('screen-login');};
// HOME
function renderHome(){applyAdminStyle();document.getElementById('home-greeting').textContent='ola, '+CU.name.split(' ')[0]+'!';document.getElementById('home-balance').textContent=CU.balance;document.getElementById('home-user').textContent=CU.name+(CU.admin?' - administrador':'');document.getElementById('admin-btns').style.display=CU.admin?'block':'none';loadHomeTxs();loadNotifBell();if(CU.admin)loadPendingBadge();if(!CU.admin)checkBoasVindas();}
async function loadPendingBadge(){try{const s=await getDocs(query(collection(db,'users'),where('status','==','pending')));const b=document.getElementById('pending-badge');s.size>0?(b.textContent=s.size,b.style.display='inline-block'):b.style.display='none';}catch(e){}}
async function loadNotifBell(){try{const s=await getDocs(query(collection(db,'notifications'),where('to','==',CU.id),where('read','==',false)));document.getElementById('notif-bell').textContent=s.size>0?'🔔🔴':'🔔';}catch(e){}}
async function loadHomeTxs(){const el=document.getElementById('home-txs');el.innerHTML='<div class="empty">carregando...</div>';try{const q=query(collection(db,'transactions'),where('participants','array-contains',CU.id),orderBy('createdAt','desc'),limit(5));const s=await getDocs(q);el.innerHTML=s.empty?'<div class="empty">nenhuma transacao ainda</div>':s.docs.map(d=>txHtml(d.data(),CU.id)).join('');}catch(e){el.innerHTML=`<div class="empty">erro: ${e.message}</div>`;}}
async function loadHomeMural(){const el=document.getElementById('home-mural');try{const q=query(collection(db,'mural'),orderBy('createdAt','desc'),limit(2));const s=await getDocs(q);if(s.empty){el.innerHTML='<div class="empty">sem avisos</div>';return;}el.innerHTML=s.docs.map(d=>{const data=d.data();return`<div class="card"><div class="card-title">${data.titulo}</div><div class="card-text">${data.texto}</div><div class="card-date">${fmtDt(data.createdAt)}</div></div>`;}).join('');}catch(e){el.innerHTML='';}}
// HISTORY
async function loadHistoryScreen(){const el=document.getElementById('history-txs');el.innerHTML='<div class="empty">carregando...</div>';try{const q=query(collection(db,'transactions'),where('participants','array-contains',CU.id),orderBy('createdAt','desc'),limit(200));const s=await getDocs(q);histAll=s.docs.map(d=>d.data());buildFilters('history-filters',histAll);el.innerHTML=histAll.length?histAll.map(t=>txHtml(t,CU.id)).join(''):'<div class="empty">nenhuma transacao</div>';}catch(e){el.innerHTML=`<div class="empty">erro: ${e.message}</div>`;}}
async function loadMemberHistoryScreen(uid){const el=document.getElementById('member-history-txs');el.innerHTML='<div class="empty">carregando...</div>';window._mhUid=uid;try{const q=query(collection(db,'transactions'),where('participants','array-contains',uid),orderBy('createdAt','desc'),limit(200));const s=await getDocs(q);mHistAll=s.docs.map(d=>d.data());buildFilters('member-history-filters',mHistAll);el.innerHTML=mHistAll.length?mHistAll.map(t=>txHtml(t,uid)).join(''):'<div class="empty">nenhuma transacao</div>';}catch(e){el.innerHTML=`<div class="empty">erro: ${e.message}</div>`;}}
// NOTIFS
async function loadNotifs(){const el=document.getElementById('notifs-list');el.innerHTML='<div class="empty">carregando...</div>';try{const q=query(collection(db,'notifications'),where('to','==',CU.id),orderBy('createdAt','desc'),limit(30));const s=await getDocs(q);if(s.empty){el.innerHTML='<div class="empty">nenhuma notificacao</div>';return;}el.innerHTML=s.docs.map(d=>{const n=d.data();return`<div class="notif-item ${n.read?'':'notif-unread'}"><div class="notif-icon">${n.icon||'!'}</div><div><div class="notif-text">${n.text}</div><div class="notif-date">${fmtDt(n.createdAt)}</div></div></div>`;}).join('');s.docs.forEach(d=>{if(!d.data().read)updateDoc(doc(db,'notifications',d.id),{read:true});});document.getElementById('notif-bell').textContent='🔔';}catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}}
async function notif(toId,text,icon){try{await addDoc(collection(db,'notifications'),{to:toId,text,icon:icon||'!',read:false,createdAt:serverTimestamp()});}catch(e){}}
// TRANSFER
async function loadTransferMembers(){const sel=document.getElementById('transfer-to');sel.innerHTML='<option>carregando...</option>';try{const s=await getDocs(collection(db,'users'));allMembers=[];s.forEach(d=>{const data=d.data();if(d.id!==CU.id&&!data.admin&&data.status==='approved')allMembers.push({id:d.id,...data});});sel.innerHTML=allMembers.length?allMembers.map(m=>`<option value="${m.id}">${m.name}</option>`).join(''):'<option disabled>nenhum membro</option>';}catch(e){sel.innerHTML='<option>erro</option>';}}
window.confirmarTransfer=function(){const toId=document.getElementById('transfer-to').value;const amt=parseInt(document.getElementById('transfer-amount').value);const msg=document.getElementById('transfer-msg').value.trim()||'';if(!toId){err('transfer-error','selecione um membro');return;}if(!amt||amt<=0){err('transfer-error','valor invalido');return;}if(amt>CU.balance){err('transfer-error','saldo insuficiente');return;}const toName=allMembers.find(m=>m.id===toId)?.name||toId;openModal('confirmar transferencia',`Enviar ${amt} dracmas para ${toName}?${msg?'\n"'+msg+'"':''}`,()=>doTransfer(toId,amt,msg,toName));};
async function doTransfer(toId,amt,msg,toName){setLoad('transfer-btn',true);try{const fR=doc(db,'users',CU.id),tR=doc(db,'users',toId);await runTransaction(db,async t=>{const fS=await t.get(fR),tS=await t.get(tR);if(fS.data().balance<amt)throw new Error('saldo insuficiente');t.update(fR,{balance:fS.data().balance-amt});t.update(tR,{balance:tS.data().balance+amt});});await addDoc(collection(db,'transactions'),{from:CU.id,to:toId,participants:[CU.id,toId],amount:amt,category:'transferencia',desc:`${CU.name} para ${toName}`,obs:msg,createdAt:serverTimestamp()});await notif(toId,`${CU.name} te enviou ${amt} dracmas${msg?' - "'+msg+'"':''}!`,'$');CU.balance-=amt;document.getElementById('home-balance').textContent=CU.balance;document.getElementById('transfer-amount').value='';document.getElementById('transfer-msg').value='';toast('transferencia realizada!');setTimeout(()=>goTo('screen-home'),1000);}catch(e){err('transfer-error',e.message||'erro');}finally{setLoad('transfer-btn',false);}}
// ADMIN
window.switchAdminTab=function(tab){document.getElementById('tab-give').classList.toggle('active',tab==='give');document.getElementById('tab-take').classList.toggle('active',tab==='take');document.getElementById('admin-give-form').style.display=tab==='give'?'block':'none';document.getElementById('admin-take-form').style.display=tab==='take'?'block':'none';};
async function loadAdminSelects(){const s=await getDocs(collection(db,'users'));const opts=[];s.forEach(d=>{const data=d.data();if(!data.admin&&data.status==='approved')opts.push(`<option value="${d.id}">${data.name}</option>`);});const html=opts.join('')||'<option disabled>nenhum membro</option>';document.getElementById('admin-member-give').innerHTML=html;document.getElementById('admin-member-take').innerHTML=html;}
async function loadAdminList(){const el=document.getElementById('admin-members-list');el.innerHTML='<div class="empty">carregando...</div>';try{const s=await getDocs(collection(db,'users'));const members=[];s.forEach(d=>{const data=d.data();if(!data.admin&&(data.status==='approved'||data.status==='paused'))members.push({id:d.id,...data});});members.sort((a,b)=>b.balance-a.balance);el.innerHTML=members.map(m=>`<div class="member-item"><div class="member-av">${initials(m.name)}</div><div style="flex:1;min-width:0"><div class="member-name">${m.name}${m.status==='paused'?'<span class="tag-p">pausado</span>':''}</div><div class="member-sub">${m.balance} dracmas - @${m.id}</div></div><div class="member-acts"><button class="bsm view" onclick="viewMH('${m.id}','${m.name}')">extrato</button><button class="bsm reset" onclick="resetSenha('${m.id}','${m.name}')">reset</button><button class="bsm ${m.status==='paused'?'unpause':'pause'}" onclick="${m.status==='paused'?'unpauseM':'pauseM'}('${m.id}','${m.name}')">${m.status==='paused'?'ativar':'pausar'}</button><button class="bsm del" onclick="deleteMember('${m.id}','${m.name}')">X</button></div></div>`).join('')||'<div class="empty">nenhum membro</div>';}catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}}
window.doDistribute=async function(){const toId=document.getElementById('admin-member-give').value;const cat=document.getElementById('admin-cat-give').value;const amt=parseInt(document.getElementById('admin-amount-give').value);const obs=document.getElementById('admin-reason-give').value.trim();if(!toId){err('admin-error-give','selecione membro');return;}if(!amt||amt<=0){err('admin-error-give','valor invalido');return;}setLoad('admin-btn-give',true);try{const ref=doc(db,'users',toId);const snap=await getDoc(ref);await updateDoc(ref,{balance:snap.data().balance+amt});const name=snap.data().name;const ci=CATS[cat]||CATS.outros;await addDoc(collection(db,'transactions'),{from:'admin',to:toId,participants:['admin',toId],amount:amt,category:cat,desc:`${ci.label} - admin para ${name}`,obs,createdAt:serverTimestamp()});await notif(toId,`Voce recebeu ${amt} dracmas - ${ci.label}${obs?' ('+obs+')':''}!`,'$');document.getElementById('admin-amount-give').value='';document.getElementById('admin-reason-give').value='';toast(`+${amt} dracmas para ${name}!`);loadAdminList();loadAdminSelects();}catch(e){err('admin-error-give','erro ao distribuir');}finally{setLoad('admin-btn-give',false);}};
window.doDeduct=async function(){const toId=document.getElementById('admin-member-take').value;const cat=document.getElementById('admin-cat-take').value;const amt=parseInt(document.getElementById('admin-amount-take').value);const obs=document.getElementById('admin-reason-take').value.trim();if(!toId){err('admin-error-take','selecione membro');return;}if(!amt||amt<=0){err('admin-error-take','valor invalido');return;}setLoad('admin-btn-take',true);try{const ref=doc(db,'users',toId);const snap=await getDoc(ref);const cur=snap.data().balance;const nb=Math.max(0,cur-amt);await updateDoc(ref,{balance:nb});const name=snap.data().name;const ci=CATS[cat]||CATS.penalidade;const ret=cur-nb;await addDoc(collection(db,'transactions'),{from:toId,to:'admin',participants:['admin',toId],amount:ret,category:cat,desc:`${ci.label} - admin retirou de ${name}`,obs,createdAt:serverTimestamp()});await notif(toId,`${ret} dracmas foram retirados - ${ci.label}${obs?' ('+obs+')':''}!`,'!');document.getElementById('admin-amount-take').value='';document.getElementById('admin-reason-take').value='';toast(`-${ret} dracmas de ${name}`);loadAdminList();loadAdminSelects();}catch(e){err('admin-error-take','erro ao retirar');}finally{setLoad('admin-btn-take',false);}};
window.viewMH=function(uid,name){document.getElementById('member-history-title').textContent=name;goTo('screen-member-history');loadMemberHistoryScreen(uid);};
window.resetSenha=function(uid,name){openModal('resetar senha',`Resetar a senha de ${name} para "dracmas123"?`,async()=>{try{await updateDoc(doc(db,'users',uid),{password:'dracmas123'});toast(`Senha de ${name} resetada para: dracmas123`);}catch(e){toast('erro ao resetar');}});};
window.pauseM=function(uid,name){openModal('pausar conta',`Pausar a conta de ${name}?`,async()=>{try{await updateDoc(doc(db,'users',uid),{status:'paused'});await notif(uid,'Sua conta foi pausada. Fale com o administrador.','!');toast(`Conta de ${name} pausada`);loadAdminList();}catch(e){toast('erro');}},true);};
window.unpauseM=function(uid,name){openModal('reativar conta',`Reativar a conta de ${name}?`,async()=>{try{await updateDoc(doc(db,'users',uid),{status:'approved'});await notif(uid,'Sua conta foi reativada! Pode entrar normalmente.','ok');toast(`Conta de ${name} reativada`);loadAdminList();}catch(e){toast('erro');}});};
window.deleteMember=function(uid,name){openModal('deletar conta',`Deletar permanentemente a conta de ${name}?`,async()=>{try{await deleteDoc(doc(db,'users',uid));toast(`Conta de ${name} deletada`);loadAdminList();loadAdminSelects();}catch(e){toast('erro');}},true);};
// PENDENTES
async function loadPending(){const el=document.getElementById('pending-list');el.innerHTML='<div class="empty">carregando...</div>';try{const s=await getDocs(query(collection(db,'users'),where('status','==','pending')));if(s.empty){el.innerHTML='<div class="empty">nenhuma conta pendente</div>';return;}el.innerHTML=s.docs.map(d=>{const data=d.data();return`<div class="member-item"><div class="member-av">${initials(data.name)}</div><div style="flex:1;min-width:0"><div class="member-name">${data.name}</div><div class="member-sub">@${d.id}</div></div><div class="member-acts"><button class="bsm approve" onclick="approveUser('${d.id}','${data.name}')">aprovar</button><button class="bsm reject" onclick="rejectUser('${d.id}','${data.name}')">recusar</button></div></div>`;}).join('');}catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}}
window.approveUser=async function(uid,name){try{await updateDoc(doc(db,'users',uid),{status:'approved'});await notif(uid,'Sua conta foi aprovada! Bem-vindo ao Dracmas ADC!','ok');toast('conta aprovada!');loadPending();loadPendingBadge();}catch(e){toast('erro ao aprovar');}};
window.rejectUser=function(uid,name){openModal('recusar conta',`Recusar a solicitacao de ${name}?`,async()=>{try{await deleteDoc(doc(db,'users',uid));toast(`solicitacao de ${name} recusada`);loadPending();loadPendingBadge();}catch(e){toast('erro');}},true);};
// MURAL
async function loadMural(elId,isAdmin){const el=document.getElementById(elId);el.innerHTML='<div class="empty">carregando...</div>';try{const q=query(collection(db,'mural'),orderBy('createdAt','desc'),limit(20));const s=await getDocs(q);if(s.empty){el.innerHTML='<div class="empty">nenhum aviso</div>';return;}el.innerHTML=s.docs.map(d=>{const data=d.data();const del=isAdmin?`<button class="bsm del" style="margin-top:8px" onclick="deletarAviso('${d.id}')">remover</button>`:'';return`<div class="card"><div class="card-title">${data.titulo}</div><div class="card-text">${data.texto}</div><div class="card-date">${fmtDt(data.createdAt)}</div>${del}</div>`;}).join('');}catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}}
window.publicarAviso=async function(){const t=document.getElementById('aviso-titulo').value.trim();const tx=document.getElementById('aviso-texto').value.trim();if(!t||!tx){err('aviso-error','preencha titulo e texto');return;}setLoad('aviso-btn',true);try{await addDoc(collection(db,'mural'),{titulo:t,texto:tx,autor:CU.name,createdAt:serverTimestamp()});document.getElementById('aviso-titulo').value='';document.getElementById('aviso-texto').value='';toast('aviso publicado!');loadMuralComLeitura('mural-admin-list',true);}catch(e){err('aviso-error','erro ao publicar');}finally{setLoad('aviso-btn',false);}};
window.deletarAviso=function(id){openModal('remover aviso','Remover este aviso?',async()=>{try{await deleteDoc(doc(db,'mural',id));toast('aviso removido');loadMural('mural-admin-list',true);}catch(e){toast('erro');}},true);};
// CHANGELOG
async function loadCL(elId,isAdmin){const el=document.getElementById(elId);el.innerHTML='<div class="empty">carregando...</div>';try{const q=query(collection(db,'changelog'),orderBy('createdAt','desc'),limit(30));const s=await getDocs(q);if(s.empty){el.innerHTML='<div class="empty">nenhuma atualizacao publicada ainda</div>';return;}el.innerHTML=s.docs.map(d=>{const data=d.data();const del=isAdmin?`<button class="bsm del" style="margin-top:8px" onclick="deletarCL('${d.id}')">remover</button>`:'';return`<div class="card"><div class="card-version">versao ${data.version||'?'}</div><div class="card-title">${data.titulo}</div><div class="card-text">${data.texto}</div><div class="card-date">${fmtDt(data.createdAt)}</div>${del}</div>`;}).join('');}catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}}
window.publicarChangelog=async function(){const v=document.getElementById('cl-version').value.trim();const t=document.getElementById('cl-titulo').value.trim();const tx=document.getElementById('cl-texto').value.trim();if(!t||!tx){err('cl-error','preencha titulo e texto');return;}setLoad('cl-btn',true);try{await addDoc(collection(db,'changelog'),{version:v,titulo:t,texto:tx,autor:CU.name,createdAt:serverTimestamp()});['cl-version','cl-titulo','cl-texto'].forEach(i=>document.getElementById(i).value='');toast('novidade publicada!');loadCL('changelog-admin-list',true);}catch(e){err('cl-error','erro ao publicar');}finally{setLoad('cl-btn',false);}};
window.deletarCL=function(id){openModal('remover entrada','Remover esta entrada?',async()=>{try{await deleteDoc(doc(db,'changelog',id));toast('removido');loadCL('changelog-admin-list',true);}catch(e){toast('erro');}},true);};
// RELATORIO
window.switchMes=function(modo){relMode=modo;document.getElementById('tab-mes-atual').classList.toggle('active',modo==='atual');document.getElementById('tab-mes-ant').classList.toggle('active',modo==='anterior');renderRelatorio();};
async function loadRelatorio(){const el=document.getElementById('relatorio-content');el.innerHTML='<div class="empty" style="padding:2rem">carregando...</div>';try{const agora=new Date();const iA=new Date(agora.getFullYear(),agora.getMonth(),1);const iAnt=new Date(agora.getFullYear(),agora.getMonth()-1,1);const fAnt=new Date(agora.getFullYear(),agora.getMonth(),0,23,59,59);const uS=await getDocs(collection(db,'users'));const members=[];let tot=0;uS.forEach(d=>{const data=d.data();if(!data.admin&&data.status==='approved'){members.push({name:data.name,balance:data.balance});tot+=data.balance;}});members.sort((a,b)=>b.balance-a.balance);const tS=await getDocs(query(collection(db,'transactions'),orderBy('createdAt','desc'),limit(500)));relAtual=tS.docs.filter(d=>{const ts=d.data().createdAt;return ts&&ts.toDate()>=iA;}).map(d=>d.data());relAnt=tS.docs.filter(d=>{const ts=d.data().createdAt;return ts&&ts.toDate()>=iAnt&&ts.toDate()<=fAnt;}).map(d=>d.data());window._relM=members;window._relT=tot;renderRelatorio();}catch(e){el.innerHTML=`<div class="empty">erro: ${e.message}</div>`;}}
function renderRelatorio(){const el=document.getElementById('relatorio-content');const txs=relMode==='atual'?relAtual:relAnt;const members=window._relM||[];const tot=window._relT||0;const agora=new Date();const mesLabel=relMode==='atual'?agora.toLocaleDateString('pt-BR',{month:'long',year:'numeric'}):new Date(agora.getFullYear(),agora.getMonth()-1,1).toLocaleDateString('pt-BR',{month:'long',year:'numeric'});const catCount={};txs.forEach(tx=>{const c=tx.category||'outros';catCount[c]=(catCount[c]||0)+tx.amount;});el.innerHTML=`<div class="rel-section"><div class="rel-card"><div class="rel-card-title">Resumo - ${mesLabel}</div><div class="rel-row"><span>total em circulacao</span><span><strong>${tot} dracmas</strong></span></div><div class="rel-row"><span>transacoes no mes</span><span>${txs.length}</span></div></div><div class="rel-card"><div class="rel-card-title">Por categoria</div>${Object.entries(catCount).length?Object.entries(catCount).map(([k,v])=>{const c=CATS[k]||CATS.outros;return`<div class="rel-row"><span>${c.icon} ${c.label}</span><span>${v} dracmas</span></div>`;}).join(''):'<div style="font-size:13px;color:var(--muted);padding:4px 0">sem movimentacoes</div>'}</div><div class="rel-card"><div class="rel-card-title">Saldos dos membros</div>${members.map((m,i)=>`<div class="rel-row"><span>${i+1}. ${m.name}</span><span>${m.balance} dracmas</span></div>`).join('')}<div class="rel-total"><span>Total</span><span>${tot} dracmas</span></div></div><div class="rel-card"><div class="rel-card-title">Transacoes do mes (${txs.length})</div>${txs.length?txs.slice(0,100).map(tx=>{const c=CATS[tx.category]||CATS.outros;return`<div class="rel-row tx-row"><span style="font-weight:600">${c.icon} ${c.label} - ${tx.amount} dracmas</span><span style="font-size:11px;color:var(--muted)">${tx.desc||''} ${tx.obs?'| '+tx.obs:''} | ${fmtDt(tx.createdAt)}</span></div>`;}).join(''):'<div style="font-size:13px;color:var(--muted);padding:4px 0">sem transacoes</div>'}</div></div>`;}
// PDF
window.gerarPDF=async function(){toast('gerando PDF...');try{const{jsPDF}=window.jspdf;const pdf=new jsPDF({unit:'mm',format:'a4'});const W=210,M=15,CW=W-M*2;const agora=new Date();const txs=relMode==='atual'?relAtual:relAnt;const members=window._relM||[];const tot=window._relT||0;const mesLabel=relMode==='atual'?agora.toLocaleDateString('pt-BR',{month:'long',year:'numeric'}):new Date(agora.getFullYear(),agora.getMonth()-1,1).toLocaleDateString('pt-BR',{month:'long',year:'numeric'});let y=20;const L=(txt,x,sz,bold=false,rgb=[0,0,0])=>{pdf.setFontSize(sz);pdf.setFont('helvetica',bold?'bold':'normal');pdf.setTextColor(...rgb);const lines=pdf.splitTextToSize(String(txt),CW-(x-M));pdf.text(lines,x,y);y+=lines.length*(sz*0.4)+2;};const chk=()=>{if(y>270){pdf.addPage();y=20;}};const ln=()=>{pdf.setDrawColor(220,220,220);pdf.line(M,y,W-M,y);y+=5;};L('Dracmas ADC - Relatorio',M,16,true,[46,26,71]);L(`Periodo: ${mesLabel}`,M,11,false,[100,100,100]);y+=2;ln();L('Total em Circulacao',M,12,true);L(`${tot} dracmas`,M,11);y+=2;ln();L('Saldos dos Membros',M,12,true);members.forEach((m,i)=>{chk();pdf.setFontSize(10);pdf.setFont('helvetica','normal');pdf.setTextColor(0,0,0);const lines=pdf.splitTextToSize(`${i+1}. ${m.name}`,CW-20);pdf.text(lines,M,y);pdf.text(`${m.balance}`,W-M,y,{align:'right'});y+=lines.length*5+1;});y+=2;ln();L(`Transacoes do mes (${txs.length})`,M,12,true);txs.forEach(tx=>{chk();const c=CATS[tx.category]||CATS.outros;const la=pdf.splitTextToSize(`${c.label} - ${tx.amount} dracmas`,CW);const lb=pdf.splitTextToSize(`${tx.desc||''} ${tx.obs?'| '+tx.obs:''} | ${fmtDt(tx.createdAt)}`,CW);pdf.setFontSize(10);pdf.setFont('helvetica','bold');pdf.setTextColor(0,0,0);pdf.text(la,M,y);y+=la.length*5;pdf.setFont('helvetica','normal');pdf.setTextColor(120,120,120);pdf.text(lb,M,y);y+=lb.length*4+4;chk();});pdf.setFontSize(8);pdf.setTextColor(180,180,180);pdf.text(`Gerado em ${agora.toLocaleString('pt-BR')} por ${CU.name}`,W/2,288,{align:'center'});pdf.save(`dracmas-${mesLabel.replace(' ','-')}.pdf`);toast('PDF baixado!');}catch(e){toast('erro: '+e.message);}};
// ENTER
document.getElementById('login-pw').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
document.getElementById('reg-pw2').addEventListener('keydown',e=>{if(e.key==='Enter')doRegister();});
document.getElementById('cpw-new2').addEventListener('keydown',e=>{if(e.key==='Enter')doChangePw();});

// ── COMPRESSOR DE IMAGEM ──
function comprimirImagem(file, maxW, maxH, quality) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let w = img.width, h = img.height;
        if (w > maxW) { h = h * maxW / w; w = maxW; }
        if (h > maxH) { w = w * maxH / h; h = maxH; }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ── PREVIEW FOTO ──
window.previewFoto = async function(input, previewId, placeholderId) {
  const file = input.files[0];
  if (!file) return;
  const b64 = await comprimirImagem(file, 600, 600, 0.75);
  const prev = document.getElementById(previewId);
  prev.src = b64; prev.style.display = 'block';
  document.getElementById(placeholderId).style.display = 'none';
};


// ── COMUNIDADE ──
let todosMembrosCom = [];

async function loadComunidade() {
  const el = document.getElementById('comunidade-list');
  el.innerHTML = '<div class="empty">carregando...</div>';
  document.getElementById('com-search').value = '';
  try {
    const snap = await getDocs(collection(db,'users'));
    todosMembrosCom = [];
    snap.forEach(d => {
      const data = d.data();
      if (!data.admin && data.status === 'approved') {
        todosMembrosCom.push({ id: d.id, ...data });
      }
    });
    todosMembrosCom.sort((a,b) => b.balance - a.balance);
    renderComunidade(todosMembrosCom);
  } catch(e) { el.innerHTML = '<div class="empty">erro ao carregar</div>'; }
}

function renderComunidade(members) {
  const el = document.getElementById('comunidade-list');
  if (!members.length) { el.innerHTML = '<div class="empty">nenhum membro encontrado</div>'; return; }
  el.innerHTML = members.map((m, i) => {
    const ini = m.name.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
    const avatarInner = m.foto
      ? `<img src="${m.foto}" alt=""/>`
      : `<span>${ini}</span>`;
    const isMe = m.id === CU.id ? ' (voce)' : '';
    return `<div class="comunidade-item" onclick="verPerfilPublico('${m.id}')">
      <div class="com-avatar">${avatarInner}</div>
      <div>
        <div class="com-name">${m.name}${isMe}</div>
        <div class="com-sub">@${m.id}</div>
      </div>
      <div class="com-saldo">${m.balance} ₯</div>
    </div>`;
  }).join('');
}

window.filtrarComunidade = function(q) {
  const filtrado = q.trim()
    ? todosMembrosCom.filter(m =>
        m.name.toLowerCase().includes(q.toLowerCase()) ||
        m.id.toLowerCase().includes(q.toLowerCase()))
    : todosMembrosCom;
  renderComunidade(filtrado);
};

// ── PERFIL PÚBLICO ──
window.verPerfilPublico = async function(uid) {
  goTo('screen-perfil-publico');
  try {
    const snap = await getDoc(doc(db,'users',uid));
    if (!snap.exists()) { toast('membro nao encontrado'); return; }
    const data = snap.data();
    document.getElementById('pp-topbar-title').textContent = data.name.split(' ')[0];
    document.getElementById('pp-name').textContent = data.name;
    document.getElementById('pp-user').textContent = '@' + uid;
    document.getElementById('pp-saldo').textContent = data.balance;
    const ini = data.name.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
    document.getElementById('pp-initials').textContent = ini;
    const ppImg = document.getElementById('pp-avatar-img');
    if (data.foto) { ppImg.src = data.foto; ppImg.style.display = 'block'; document.getElementById('pp-initials').style.display = 'none'; }
    else { ppImg.style.display = 'none'; document.getElementById('pp-initials').style.display = 'block'; }
    const dataEntrada = data.createdAt ? (data.createdAt.toDate ? data.createdAt.toDate() : new Date(data.createdAt)) : null;
    document.getElementById('pp-data').textContent = dataEntrada
      ? dataEntrada.toLocaleDateString('pt-BR', {day:'2-digit',month:'long',year:'numeric'})
      : 'desconhecida';
    document.getElementById('pp-status').textContent = data.admin ? 'Administrador' : 'Membro';
    // calcular recebidos e enviados
    const txSnap = await getDocs(query(collection(db,'transactions'), where('participants','array-contains',uid), limit(200)));
    let recebidos = 0, enviados = 0;
    txSnap.forEach(d => {
      const tx = d.data();
      if (tx.to === uid) recebidos += tx.amount;
      else enviados += tx.amount;
    });
    document.getElementById('pp-recebidos').textContent = recebidos;
    document.getElementById('pp-enviados').textContent = enviados;
  } catch(e) { toast('erro ao carregar perfil'); }
};

// ── LOJA ──
async function loadLoja(elId, isAdmin) {
  const el = document.getElementById(elId);
  el.innerHTML = '<div class="empty" style="grid-column:1/-1">carregando...</div>';
  try {
    const snap = await getDocs(query(collection(db,'loja'), orderBy('createdAt','desc')));
    if (snap.empty) { el.innerHTML = '<div class="empty" style="grid-column:1/-1">nenhum item na loja ainda</div>'; return; }
    el.innerHTML = snap.docs.map(d => {
      const item = d.data();
      const imgHtml = item.foto
        ? `<img src="${item.foto}" style="width:100%;height:130px;object-fit:cover"/>`
        : `<div style="width:100%;height:130px;background:#ede0f5;display:flex;align-items:center;justify-content:center;font-size:36px">&#127978;</div>`;
      const delBtn = isAdmin ? `<button class="loja-del" onclick="removerItem('${d.id}')">remover</button>` : '';
      return `<div class="loja-item">
        ${imgHtml}
        <div class="loja-info">
          <div class="loja-nome">${item.nome}</div>
          <div class="loja-preco">${item.preco} dracmas</div>
        </div>
        ${delBtn}
      </div>`;
    }).join('');
  } catch(e) { el.innerHTML = `<div class="empty" style="grid-column:1/-1">erro: ${e.message}</div>`; }
}

window.adicionarItem = async function() {
  const nome = document.getElementById('loja-nome').value.trim();
  const preco = parseInt(document.getElementById('loja-preco').value);
  const prev = document.getElementById('loja-foto-preview');
  const foto = prev.style.display !== 'none' ? prev.src : '';
  if (!nome) { err('loja-error', 'informe o nome do item'); return; }
  if (!preco || preco <= 0) { err('loja-error', 'informe um preco valido'); return; }
  setLoad('loja-btn', true);
  try {
    await addDoc(collection(db,'loja'), { nome, preco, foto, createdAt: serverTimestamp() });
    document.getElementById('loja-nome').value = '';
    document.getElementById('loja-preco').value = '';
    prev.style.display = 'none'; prev.src = '';
    document.getElementById('loja-placeholder').style.display = 'flex';
    document.getElementById('loja-foto-input').value = '';
    toast('item adicionado!');
    loadLoja('loja-admin-grid', true);
  } catch(e) { err('loja-error', 'erro ao adicionar: ' + e.message); }
  finally { setLoad('loja-btn', false); }
};

window.removerItem = function(id) {
  openModal('remover item', 'Remover este item da lojinha?', async () => {
    try { await deleteDoc(doc(db,'loja',id)); toast('item removido'); loadLoja('loja-admin-grid', true); }
    catch(e) { toast('erro'); }
  }, true);
};

// ── PERFIL ──
async function renderPerfil() {
  document.getElementById('perfil-name').textContent = CU.name;
  document.getElementById('perfil-user').textContent = '@' + CU.id;
  document.getElementById('perfil-saldo').textContent = CU.balance;
  document.getElementById('perfil-username').textContent = '@' + CU.id;
  document.getElementById('perfil-status').textContent = CU.admin ? 'Administrador' : 'Membro';
  const ini = CU.name.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
  document.getElementById('perfil-avatar-initials').textContent = ini;
  const dataEntrada = CU.createdAt ? (CU.createdAt.toDate ? CU.createdAt.toDate() : new Date(CU.createdAt)) : null;
  document.getElementById('perfil-data').textContent = dataEntrada
    ? dataEntrada.toLocaleDateString('pt-BR', {day:'2-digit',month:'long',year:'numeric'})
    : 'desconhecida';
  if (CU.foto) {
    const img = document.getElementById('perfil-avatar-img');
    img.src = CU.foto; img.style.display = 'block';
    document.getElementById('perfil-avatar-initials').style.display = 'none';
  } else {
    document.getElementById('perfil-avatar-img').style.display = 'none';
    document.getElementById('perfil-avatar-initials').style.display = 'block';
  }
  // calcular recebidos e enviados
  try {
    const txSnap = await getDocs(query(collection(db,'transactions'), where('participants','array-contains',CU.id), limit(200)));
    let recebidos = 0, enviados = 0;
    txSnap.forEach(d => {
      const tx = d.data();
      if (tx.to === CU.id) recebidos += tx.amount;
      else enviados += tx.amount;
    });
    document.getElementById('perfil-recebidos').textContent = recebidos;
    document.getElementById('perfil-enviados').textContent = enviados;
  } catch(e) {}
}

window.salvarFotoPerfil = async function(input) {
  const file = input.files[0];
  if (!file) return;
  toast('comprimindo foto...');
  try {
    const b64 = await comprimirImagem(file, 300, 300, 0.8);
    await updateDoc(doc(db,'users',CU.id), { foto: b64 });
    CU.foto = b64;
    const img = document.getElementById('perfil-avatar-img');
    img.src = b64; img.style.display = 'block';
    document.getElementById('perfil-avatar-initials').style.display = 'none';
    toast('foto atualizada!');
  } catch(e) { toast('erro ao salvar foto: ' + e.message); }
};

// ── BOAS VINDAS ──
async function checkBoasVindas() {
  try {
    const ref = doc(db,'users',CU.id);
    const snap = await getDoc(ref);
    if (!snap.data().primeiroAcesso) {
      document.getElementById('bv-nome').textContent = 'Olá, ' + CU.name.split(' ')[0] + '!';
      document.getElementById('bv-overlay').style.display = 'flex';
      await updateDoc(ref, { primeiroAcesso: true });
    }
  } catch(e) {}
}

window.fecharBoasVindas = function() {
  document.getElementById('bv-overlay').style.display = 'none';
};

// ── BUSCA EXTRATO ──
window.buscarExtrato = function(prefix, q) {
  const txs = prefix === 'history' ? histAll : mHistAll;
  const uid = prefix === 'history' ? CU.id : window._mhUid;
  const txt = q.trim().toLowerCase();
  const filtrado = txt ? txs.filter(t =>
    (t.desc||'').toLowerCase().includes(txt) ||
    (t.obs||'').toLowerCase().includes(txt) ||
    (CATS[t.category]?.label||'').toLowerCase().includes(txt)
  ) : txs;
  // reset chip filter
  document.querySelectorAll(`#${prefix}-filters .chip`).forEach(c => c.classList.toggle('active', c.dataset.key==='all'));
  document.getElementById(`${prefix}-txs`).innerHTML = filtrado.length
    ? filtrado.map(t => txHtml(t, uid)).join('')
    : '<div class="empty">nenhuma transacao encontrada</div>';
};

// ── MURAL LEITURA ──
async function marcarMuralLido(avisoId) {
  try {
    const leituraRef = doc(db, 'mural_leituras', `${avisoId}_${CU.id}`);
    const snap = await getDoc(leituraRef);
    if (!snap.exists()) {
      await setDoc(leituraRef, { avisoId, userId: CU.id, userName: CU.name, lido: true, at: serverTimestamp() });
    }
  } catch(e) {}
}

// Override loadMural to track reads
const _origLoadMural = loadMural;
async function loadMuralComLeitura(elId, isAdmin) {
  const el = document.getElementById(elId);
  el.innerHTML = '<div class="empty">carregando...</div>';
  try {
    const q = query(collection(db,'mural'), orderBy('createdAt','desc'), limit(20));
    const snap = await getDocs(q);
    if (snap.empty) { el.innerHTML = '<div class="empty">nenhum aviso</div>'; return; }

    if (isAdmin) {
      // admin: mostrar quantos leram
      const items = await Promise.all(snap.docs.map(async d => {
        const data = d.data();
        const lSnap = await getDocs(query(collection(db,'mural_leituras'), where('avisoId','==',d.id)));
        const lidos = lSnap.size;
        const del = `<button class="loja-del" onclick="deletarAviso('${d.id}')">remover</button>`;
        return `<div class="card">
          <div class="card-title">${data.titulo} <span class="lido-chip sim">${lidos} leram</span></div>
          <div class="card-text">${data.texto}</div>
          <div class="card-date">${fmtDt(data.createdAt)}</div>
          ${del}
        </div>`;
      }));
      el.innerHTML = items.join('');
    } else {
      el.innerHTML = snap.docs.map(d => {
        const data = d.data();
        marcarMuralLido(d.id);
        return `<div class="card"><div class="card-title">${data.titulo}</div><div class="card-text">${data.texto}</div><div class="card-date">${fmtDt(data.createdAt)}</div></div>`;
      }).join('');
    }
  } catch(e) { el.innerHTML = '<div class="empty">erro ao carregar</div>'; }
}

// ── EDITAR LOJA ──
window.editarItem = function(id, nome, preco) {
  document.getElementById('edit-loja-id').value = id;
  document.getElementById('edit-loja-nome').value = nome;
  document.getElementById('edit-loja-preco').value = preco;
  document.getElementById('modal-edit-loja').classList.add('active');
};
window.closeEditLoja = () => document.getElementById('modal-edit-loja').classList.remove('active');

window.salvarEdicaoLoja = async function() {
  const id = document.getElementById('edit-loja-id').value;
  const nome = document.getElementById('edit-loja-nome').value.trim();
  const preco = parseInt(document.getElementById('edit-loja-preco').value);
  if (!nome) { err('edit-loja-error','informe o nome'); return; }
  if (!preco || preco <= 0) { err('edit-loja-error','preco invalido'); return; }
  const btn = document.getElementById('edit-loja-btn');
  btn.disabled = true;
  try {
    await updateDoc(doc(db,'loja',id), { nome, preco });
    closeEditLoja();
    toast('item atualizado!');
    loadLoja('loja-admin-grid', true);
  } catch(e) { err('edit-loja-error','erro ao salvar'); }
  finally { btn.disabled = false; }
};

// ── EXPORTAR CSV ──
window.exportarCSV = async function() {
  toast('gerando CSV...');
  try {
    const snap = await getDocs(collection(db,'users'));
    const members = [];
    snap.forEach(d => {
      const data = d.data();
      if (!data.admin && data.status === 'approved') {
        const dt = data.createdAt ? (data.createdAt.toDate ? data.createdAt.toDate() : new Date(data.createdAt)) : null;
        members.push({
          nome: data.name,
          usuario: d.id,
          saldo: data.balance,
          entrada: dt ? dt.toLocaleDateString('pt-BR') : 'desconhecida'
        });
      }
    });
    members.sort((a,b) => b.saldo - a.saldo);
    const header = 'Nome,Usuario,Saldo,Membro desde';
    const rows = members.map(m => `"${m.nome}","${m.usuario}","${m.saldo}","${m.entrada}"`);
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'membros-dracmas.csv'; a.click();
    URL.revokeObjectURL(url);
    toast('CSV baixado!');
  } catch(e) { toast('erro: ' + e.message); }
};

// ── EXPORTAR PDF MEMBROS ──
window.exportarPDFMembros = async function() {
  toast('gerando PDF...');
  try {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit:'mm', format:'a4' });
    const W = 210, M = 15, CW = W - M*2;
    const agora = new Date();
    let y = 20;

    pdf.setFontSize(16); pdf.setFont('helvetica','bold'); pdf.setTextColor(46,26,71);
    pdf.text('Dracmas ADC - Lista de Membros', M, y); y += 8;
    pdf.setFontSize(10); pdf.setFont('helvetica','normal'); pdf.setTextColor(107,114,128);
    pdf.text(`Gerado em ${agora.toLocaleString('pt-BR')}`, M, y); y += 8;
    pdf.setDrawColor(220,220,220); pdf.line(M, y, W-M, y); y += 8;

    const snap = await getDocs(collection(db,'users'));
    const members = [];
    snap.forEach(d => {
      const data = d.data();
      if (!data.admin && data.status === 'approved') {
        const dt = data.createdAt ? (data.createdAt.toDate ? data.createdAt.toDate() : new Date(data.createdAt)) : null;
        members.push({ nome: data.name, usuario: d.id, saldo: data.balance, entrada: dt ? dt.toLocaleDateString('pt-BR') : 'desconhecida' });
      }
    });
    members.sort((a,b) => b.saldo - a.saldo);

    // header row
    pdf.setFontSize(9); pdf.setFont('helvetica','bold'); pdf.setTextColor(46,26,71);
    pdf.text('Nome', M, y);
    pdf.text('Usuario', M+70, y);
    pdf.text('Saldo', M+120, y);
    pdf.text('Desde', M+150, y);
    y += 5; pdf.line(M, y, W-M, y); y += 5;

    pdf.setFont('helvetica','normal'); pdf.setTextColor(0,0,0);
    members.forEach((m, i) => {
      if (y > 270) { pdf.addPage(); y = 20; }
      if (i % 2 === 0) { pdf.setFillColor(248,244,255); pdf.rect(M-2, y-4, CW+4, 8, 'F'); }
      pdf.setFontSize(9);
      const nomeLines = pdf.splitTextToSize(m.nome, 65);
      pdf.text(nomeLines, M, y);
      pdf.text(m.usuario, M+70, y);
      pdf.text(String(m.saldo), M+120, y);
      pdf.text(m.entrada, M+150, y);
      y += Math.max(nomeLines.length * 5, 8);
    });

    y += 4; pdf.line(M, y, W-M, y); y += 6;
    pdf.setFont('helvetica','bold');
    pdf.text(`Total: ${members.length} membros`, M, y);

    pdf.save('membros-dracmas.pdf');
    toast('PDF baixado!');
  } catch(e) { toast('erro: ' + e.message); }
};


// ── BOTTOM NAV ──
const MEMBER_SCREENS = ['screen-home','screen-transfer','screen-qr','screen-comunidade','screen-perfil','screen-history','screen-loja','screen-mural','screen-notifs','screen-settings','screen-change-pw'];
window.setNav = function(id) {
  document.querySelectorAll('.bn-item').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById(id);
  if(el) el.classList.add('active');
};
function updateBottomNav(screenId) {
  const nav = document.getElementById('bottom-nav');
  const isAdmin = CU && CU.admin;
  const isMemberScreen = MEMBER_SCREENS.includes(screenId);
  nav.classList.toggle('show', !isAdmin && isMemberScreen);
}

// ── ADMIN HOME STYLING ──
function applyAdminStyle() {
  if (!CU) return;
  const balCard = document.querySelector('.balance-card');
  const topbar = document.getElementById('home-topbar');
  if (CU.admin) {
    if(balCard) balCard.classList.add('admin-card');
    if(topbar) topbar.classList.add('admin-bar');
  } else {
    if(balCard) balCard.classList.remove('admin-card');
    if(topbar) topbar.classList.remove('admin-bar');
  }
  // show/hide member actions vs admin panel
  const memberActs = document.getElementById('member-actions');
  const adminBtns = document.getElementById('admin-btns');
  if(memberActs) memberActs.style.display = CU.admin ? 'none' : 'block';
  if(adminBtns) adminBtns.style.display = CU.admin ? 'block' : 'none';
}

// ── QR CODE ──
let qrInstance = null, qrMode = 'livre', html5Scan = null;

window.switchQRTab = function(tab) {
  document.getElementById('qr-tab-meu').classList.toggle('active',tab==='meu');
  document.getElementById('qr-tab-scan').classList.toggle('active',tab==='scan');
  document.getElementById('qr-panel-meu').style.display=tab==='meu'?'block':'none';
  document.getElementById('qr-panel-scan').style.display=tab==='scan'?'block':'none';
  if(tab==='scan') pararScan();
};

window.setQRMode = function(mode) {
  qrMode = mode;
  document.getElementById('qr-livre-btn').style.background = mode==='livre'?'rgba(212,168,83,.15)':'var(--card)';
  document.getElementById('qr-valor-btn').style.background = mode==='valor'?'rgba(212,168,83,.15)':'var(--card)';
  document.getElementById('qr-livre-btn').querySelector('div').style.color = mode==='livre'?'var(--gold)':'var(--muted)';
  document.getElementById('qr-valor-btn').querySelector('div').style.color = mode==='valor'?'var(--gold)':'var(--muted)';
  document.getElementById('qr-valor-input').style.display = mode==='valor'?'block':'none';
  gerarQR();
};

window.gerarQR = function() {
  if (!CU) return;
  const canvas = document.getElementById('qr-canvas');
  canvas.innerHTML = '';
  const amt = qrMode==='valor' ? parseInt(document.getElementById('qr-amount-input').value)||0 : 0;
  const data = amt > 0
    ? `dracmas-adc://pay?to=${CU.id}&amount=${amt}`
    : `dracmas-adc://pay?to=${CU.id}`;
  try {
    new QRCode(canvas, { text: data, width: 200, height: 200, colorDark: '#1a0e2e', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.H });
    document.getElementById('qr-user-label').textContent = CU.name + ' · @' + CU.id + (amt>0?' · '+amt+' ₯':'');
  } catch(e) {}
};

window.iniciarScan = function() {
  document.getElementById('qr-reader-wrap').style.display='block';
  html5Scan = new Html5Qrcode('qr-reader');
  html5Scan.start(
    { facingMode: 'environment' },
    { fps: 10, qrbox: { width: 250, height: 250 } },
    async (decoded) => {
      await pararScan();
      // parse dracmas-adc://pay?to=user&amount=X
      try {
        const url = new URL(decoded);
        const to = url.searchParams.get('to');
        const amt = url.searchParams.get('amount');
        if (!to) { toast('QR invalido'); return; }
        // fill transfer screen
        document.getElementById('transfer-amount').value = amt || '';
        await loadTransferMembers();
        const sel = document.getElementById('transfer-to');
        for (let i=0; i<sel.options.length; i++) {
          if (sel.options[i].value === to) { sel.selectedIndex = i; break; }
        }
        goTo('screen-transfer');
        toast('QR lido! confirme a transferencia');
      } catch(e) { toast('QR invalido'); }
    },
    () => {}
  ).catch(e => { toast('erro ao abrir camera: ' + e); document.getElementById('qr-reader-wrap').style.display='none'; });
};

window.pararScan = async function() {
  if (html5Scan) {
    try { await html5Scan.stop(); } catch(e) {}
    html5Scan = null;
  }
  document.getElementById('qr-reader-wrap').style.display='none';
};

// INIT
async function init(){try{const ref=doc(db,'users','admin');if(!(await getDoc(ref)).exists()){await setDoc(ref,{name:'Administrador',password:'admin123',balance:0,admin:true,status:'approved',createdAt:serverTimestamp()});}}catch(e){}goTo('screen-login');}
init();
</script>

<div id="screen-qr" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">QR Code</span>
  </div>
  <div style="text-align:center;padding:1.5rem 1rem 1rem">
    <p style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:.25rem">Pagamentos por QR</p>
    <p style="font-size:13px;color:var(--muted)">mostre ou escaneie para transferir dracmas</p>
  </div>
  <div class="qr-tabs">
    <div class="qr-tab active" id="qr-tab-meu" onclick="switchQRTab('meu')">Meu QR</div>
    <div class="qr-tab" id="qr-tab-scan" onclick="switchQRTab('scan')">Escanear</div>
  </div>
  <div id="qr-panel-meu" style="text-align:center;padding:0 1rem 1rem">
    <p style="font-size:13px;color:var(--muted);margin-bottom:1rem">Mostre este QR para receber dracmas</p>
    <div class="qr-box" id="qr-canvas"></div>
    <p style="font-size:13px;color:var(--muted);margin-top:1rem" id="qr-user-label"></p>
    <div style="margin-top:1rem;display:flex;gap:8px">
      <div id="qr-livre-btn" onclick="setQRMode('livre')" style="flex:1;background:var(--card);border:1px solid var(--border);border-radius:var(--rs);padding:10px;text-align:center;cursor:pointer">
        <div style="font-size:11px;font-weight:700;color:var(--muted)">valor livre</div>
      </div>
      <div id="qr-valor-btn" onclick="setQRMode('valor')" style="flex:1;background:var(--card);border:1px solid var(--border);border-radius:var(--rs);padding:10px;text-align:center;cursor:pointer">
        <div style="font-size:11px;font-weight:700;color:var(--muted)">definir valor</div>
      </div>
    </div>
    <div id="qr-valor-input" style="display:none;margin-top:.75rem">
      <input class="form-input" id="qr-amount-input" type="number" min="1" placeholder="valor em dracmas" inputmode="numeric" oninput="gerarQR()"/>
    </div>
  </div>
  <div id="qr-panel-scan" style="display:none">
    <div class="scan-area">
      <div style="font-size:56px">&#128247;</div>
      <p style="font-size:14px;color:var(--muted);line-height:1.5">Aponte a câmera para o QR code de outro membro para transferir dracmas</p>
      <button class="scan-btn" onclick="iniciarScan()">Abrir câmera</button>
    </div>
    <div id="qr-reader-wrap" style="padding:1rem;display:none">
      <div id="qr-reader" style="width:100%;border-radius:16px;overflow:hidden"></div>
      <button class="btn-p danger" style="margin-top:.75rem" onclick="pararScan()">cancelar</button>
    </div>
  </div>
</div>


<div class="bottom-nav" id="bottom-nav">
  <div class="bn-item active" id="bn-home" onclick="goTo('screen-home');setNav('bn-home')">
    <div class="bn-icon">&#127968;</div>
    <div class="bn-label">início</div>
  </div>
  <div class="bn-item" id="bn-transfer" onclick="goTo('screen-transfer');setNav('bn-transfer')">
    <div class="bn-icon">&#8599;</div>
    <div class="bn-label">enviar</div>
  </div>
  <div class="bn-item" id="bn-qr" onclick="goTo('screen-qr');setNav('bn-qr')">
    <div class="bn-icon">&#128247;</div>
    <div class="bn-label">QR</div>
  </div>
  <div class="bn-item" id="bn-comunidade" onclick="goTo('screen-comunidade');setNav('bn-comunidade')">
    <div class="bn-icon">&#128101;</div>
    <div class="bn-label">turma</div>
  </div>
  <div class="bn-item" id="bn-perfil" onclick="goTo('screen-perfil');setNav('bn-perfil')">
    <div class="bn-icon">&#128100;</div>
    <div class="bn-label">perfil</div>
  </div>
</div>

</body>
</html>
