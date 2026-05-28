<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/>
<title>Dracmas ADC</title>
<meta name="theme-color" content="#2e1a47"/>
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-title" content="Dracmas ADC"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet"/>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script defer src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js"></script>
<style>
/* ── RESET ── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

/* ── THEME VARS ── */
:root{
  --p:#1a0e2e;--p2:#2e1a47;--p3:#3d2260;--p4:#4a2d6e;
  --gold:#d4a853;--gd:#a07830;
  --silver:#a8b8c8;--silver2:#7a9ab0;
  --ev:#5b21b6;--ev2:#4c1d95;--ev3:#7c3aed;
  --bg:#f4f1f9;--card:#fff;--card2:#ede8f5;--card3:#e4ddf0;
  --text:#1a0e2e;--muted:#6b5a88;--muted2:#9b8aaa;
  --border:rgba(46,26,71,.1);--border2:rgba(212,168,83,.2);
  --green:#16a34a;--red:#dc2626;
  --r:20px;--rs:14px;
  --sh:0 4px 16px rgba(46,26,71,.08);
  --sh2:0 8px 32px rgba(46,26,71,.15);
}
[data-theme="dark"]{
  --bg:#0f0a1a;--card:#1a1028;--card2:#221538;--card3:#2a1a40;
  --text:#f0eaf8;--muted:#8b7aa8;--muted2:#6b5a88;
  --border:rgba(180,150,255,.1);--border2:rgba(212,168,83,.15);
  --green:#22c55e;--red:#ef4444;
  --sh:0 4px 20px rgba(0,0,0,.35);
  --sh2:0 8px 32px rgba(0,0,0,.5);
}

/* ── BASE ── */
body{font-family:"Inter",sans-serif;background:var(--bg);color:var(--text);min-height:100vh;max-width:420px;margin:0 auto;overflow-x:hidden}

/* ── SCREENS ── */
.screen{display:none;min-height:100vh;padding-bottom:90px;content-visibility:auto}
.screen.active{display:block}
#s-loader{display:none;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:var(--p);padding-bottom:0}
#s-loader.active{display:flex}
#s-login{display:none;flex-direction:column;min-height:100vh;padding-bottom:0}
#s-login.active{display:flex}

/* ── LOADER ── */
.loader-coin{width:80px;height:80px;border-radius:24px;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);display:flex;align-items:center;justify-content:center;font-family:"Cinzel",serif;font-size:38px;font-weight:600;animation:pulse 1.5s ease-in-out infinite;box-shadow:0 0 32px rgba(212,168,83,.4)}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
.loader-text{color:var(--gold);font-family:"Cinzel",serif;font-size:13px;letter-spacing:.15em;margin-top:1.25rem}

/* ── LOGIN ── */
#s-login{background:linear-gradient(160deg,var(--p),var(--p4))}
.login-top{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem 1.5rem 2rem;text-align:center}
.login-coin{width:90px;height:90px;border-radius:26px;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);display:flex;align-items:center;justify-content:center;font-family:"Cinzel",serif;font-size:42px;font-weight:600;margin:0 auto 1.25rem;box-shadow:0 8px 28px rgba(212,168,83,.4);animation:pulse 2.5s ease-in-out infinite}
.login-title{color:var(--gold);font-size:26px;font-family:"Cinzel",serif;letter-spacing:.04em}
.login-sub{color:rgba(180,150,255,.65);font-size:13px;margin-top:6px}
.login-card{background:rgba(255,255,255,.07);backdrop-filter:blur(20px);border-radius:28px 28px 0 0;padding:2rem 1.5rem 2.5rem;border-top:1px solid rgba(255,255,255,.12)}
.login-card .form-label{color:rgba(180,150,255,.7)}
.login-card .form-input{background:rgba(255,255,255,.09);border:1.5px solid rgba(255,255,255,.12);color:#fff}
.login-card .form-input::placeholder{color:rgba(255,255,255,.25)}
.login-card .form-input:focus{border-color:rgba(212,168,83,.55);background:rgba(255,255,255,.13)}
.login-card .toggle-pw{color:rgba(255,255,255,.35)}
.login-card .err{color:#fca5a5}
.btn-login{width:100%;padding:14px;font-size:15px;font-weight:700;font-family:"Inter",sans-serif;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);border:none;border-radius:var(--rs);cursor:pointer;box-shadow:0 4px 20px rgba(212,168,83,.35)}
.btn-register{width:100%;padding:13px;font-size:15px;font-weight:700;font-family:"Inter",sans-serif;background:transparent;color:rgba(212,168,83,.85);border:1.5px solid rgba(212,168,83,.25);border-radius:var(--rs);cursor:pointer;margin-top:10px}

/* ── TOPBAR ── */
.topbar{background:var(--card);padding:.9rem 1rem;display:flex;align-items:center;gap:10px;position:sticky;top:0;z-index:10;border-bottom:1px solid var(--border)}
@supports(backdrop-filter:blur(1px)){.topbar{backdrop-filter:blur(12px)}}
.topbar.dark{background:rgba(15,10,26,.95);border-color:rgba(255,255,255,.07)}
.topbar.gold-bar{background:linear-gradient(90deg,var(--p),var(--p3));border-color:rgba(212,168,83,.15)}
.topbar.ev-bar{background:linear-gradient(90deg,var(--ev2),var(--ev));border-color:rgba(139,92,246,.2)}
.topbar-logo{width:32px;height:32px;border-radius:10px;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);display:flex;align-items:center;justify-content:center;font-family:"Cinzel",serif;font-size:16px;font-weight:600;flex-shrink:0}
.topbar-title{font-size:15px;font-weight:700;flex:1;color:var(--text)}
.topbar.dark .topbar-title,.topbar.gold-bar .topbar-title,.topbar.ev-bar .topbar-title{color:var(--gold)}
.topbar-back,.topbar-icon{background:var(--card2);border:none;border-radius:10px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:17px;color:var(--text);flex-shrink:0;font-family:"Inter",sans-serif}
.topbar.dark .topbar-back,.topbar.dark .topbar-icon,.topbar.gold-bar .topbar-back,.topbar.gold-bar .topbar-icon,.topbar.ev-bar .topbar-back,.topbar.ev-bar .topbar-icon{background:rgba(255,255,255,.1);color:var(--gold)}

/* ── FORMS ── */
.form-wrap,.form-section{padding:0 1.25rem}
.form-group{margin-bottom:1.1rem}
.form-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);display:block;margin-bottom:6px}
.form-hint{font-size:11px;color:var(--muted2);margin-top:4px}
.form-input{width:100%;padding:13px 14px;font-size:15px;font-family:"Inter",sans-serif;border:1.5px solid var(--border);border-radius:var(--rs);background:var(--card);color:var(--text);outline:none;transition:border-color .2s}
.form-input:focus{border-color:rgba(46,26,71,.4);box-shadow:0 0 0 3px rgba(46,26,71,.07)}
[data-theme="dark"] .form-input:focus{border-color:rgba(212,168,83,.4);box-shadow:0 0 0 3px rgba(212,168,83,.07)}
textarea.form-input{resize:vertical;min-height:80px}
.input-wrap{position:relative}
.input-wrap .form-input{padding-right:44px}
.toggle-pw{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:16px;color:var(--muted);line-height:1}
select.form-input{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b5a88' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:38px}

/* ── BUTTONS ── */
.btn-p{width:100%;padding:14px;font-size:15px;font-weight:700;font-family:"Inter",sans-serif;background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border:none;border-radius:var(--rs);cursor:pointer;transition:opacity .15s,transform .1s;box-shadow:var(--sh);letter-spacing:.03em}
.btn-p:active{opacity:.82;transform:scale(.98)}
.btn-p.danger{background:linear-gradient(135deg,#7a1a1a,#a33030);color:#fff}
.btn-p.ev{background:linear-gradient(135deg,var(--ev2),var(--ev3));color:#e9d5ff}
.btn-s{width:100%;padding:13px;font-size:14px;font-weight:700;font-family:"Inter",sans-serif;background:transparent;color:var(--muted);border:1.5px solid var(--border);border-radius:var(--rs);cursor:pointer;margin-top:10px}

/* ── BALANCE CARD ── */
.bal-card{margin:1rem;border-radius:22px;padding:1.4rem 1.6rem;position:relative;overflow:hidden;box-shadow:var(--sh2)}
.bal-card.member-card{background:linear-gradient(135deg,var(--p2),var(--p4))}
.bal-card.admin-card{background:linear-gradient(135deg,#0a0612,var(--p2));border:1px solid rgba(212,168,83,.12)}
.bal-card::before{content:"";position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:rgba(212,168,83,.06);pointer-events:none}
.bal-card::after{content:"";position:absolute;bottom:-20px;left:-20px;width:90px;height:90px;border-radius:50%;background:rgba(255,255,255,.03);pointer-events:none}
.bal-label{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:rgba(212,168,83,.55);margin-bottom:4px}
.bal-amount{font-size:42px;font-weight:900;color:var(--gold);font-family:"Cinzel",serif;line-height:1}
.bal-unit{font-size:15px;color:rgba(212,168,83,.45);margin-left:5px}
.bal-user{font-size:12px;color:rgba(255,255,255,.3);margin-top:8px}

/* ── HOME ACTIONS ── */
.actions-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:0 1rem .5rem}
.act-btn{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:.85rem .4rem;text-align:center;cursor:pointer;transition:transform .12s,background .12s;box-shadow:var(--sh)}
.act-btn:active{transform:scale(.92);background:var(--card2)}
.act-icon{font-size:22px;margin-bottom:5px}
.act-label{font-size:10px;font-weight:700;color:var(--muted);letter-spacing:.02em}

/* ── EVENT + PRATA BUTTONS ── */
.ev-home-btn{margin:.35rem 1rem;border-radius:16px;padding:.85rem 1rem;display:flex;align-items:center;gap:10px;cursor:pointer;border:1px solid;transition:opacity .15s}
.ev-home-btn:active{opacity:.8}
.ev-home-btn.ev-color{background:linear-gradient(135deg,rgba(91,33,182,.15),rgba(76,29,149,.2));border-color:rgba(139,92,246,.25)}
.ev-home-btn.silver-color{background:linear-gradient(135deg,rgba(13,31,45,.5),rgba(22,45,63,.5));border-color:rgba(168,184,200,.18)}
.ev-btn-icon{font-size:20px;flex-shrink:0}
.ev-btn-info{flex:1}
.ev-btn-name{font-size:13px;font-weight:700}
.ev-home-btn.ev-color .ev-btn-name{color:#c4b5fd}
.ev-home-btn.silver-color .ev-btn-name{color:var(--silver)}
.ev-btn-sub{font-size:11px;margin-top:1px}
.ev-home-btn.ev-color .ev-btn-sub{color:rgba(196,181,253,.45)}
.ev-home-btn.silver-color .ev-btn-sub{color:rgba(168,184,200,.4)}
.ev-btn-arr{color:rgba(255,255,255,.2);font-size:16px}
.live-dot{width:6px;height:6px;border-radius:50%;background:#4ade80;animation:blink 1.5s ease-in-out infinite;flex-shrink:0}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}

/* ── SECTION HEADER ── */
.sec-hd{padding:.85rem 1rem .4rem;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--muted2)}
.sec-hd.gold{color:rgba(212,168,83,.6)}

/* ── TX LIST ── */
.tx-list{padding:0 1rem}
.tx-item{display:flex;align-items:center;gap:12px;padding:11px 13px;margin-bottom:8px;background:var(--card);border-radius:16px;border:1px solid var(--border);box-shadow:var(--sh)}
.tx-icon{width:40px;height:40px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
.tx-info{flex:1;min-width:0}
.tx-cat{font-size:13px;font-weight:700;color:var(--text)}
.tx-desc{font-size:12px;color:var(--muted);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tx-obs{font-size:12px;color:var(--p3);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
[data-theme="dark"] .tx-obs{color:#b89fd4}
.tx-date{font-size:11px;color:var(--muted2);margin-top:2px}
.tx-amt{font-size:14px;font-weight:800;flex-shrink:0}
.tx-amt.in{color:var(--green)}
.tx-amt.out{color:var(--red)}

/* ── CATEGORY COLORS ── */
.cc{background:rgba(29,78,216,.15);color:#3b82f6}
.cm{background:rgba(157,23,77,.15);color:#ec4899}
.ce{background:rgba(109,40,217,.15);color:#8b5cf6}
.cs{background:rgba(6,95,70,.15);color:#10b981}
.cp{background:rgba(180,83,9,.15);color:#f59e0b}
.cq{background:rgba(161,98,7,.15);color:#eab308}
.cn{background:rgba(185,28,28,.15);color:#ef4444}
.ct{background:rgba(46,26,71,.12);color:var(--p3)}
.co{background:rgba(107,114,128,.12);color:#6b7280}
.cev{background:rgba(91,33,182,.15);color:#8b5cf6}
[data-theme="dark"] .ct{color:#b89fd4}

/* ── FILTER CHIPS ── */
.filter-bar{display:flex;gap:8px;padding:6px 1rem 2px;overflow-x:auto;scrollbar-width:none}
.filter-bar::-webkit-scrollbar{display:none}
.chip{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;border:1px solid var(--border);background:var(--card);color:var(--muted);cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .15s}
.chip.active{background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border-color:transparent}

/* ── MEMBERS ── */
.member-list{padding:0 1rem}
.member-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)}
.m-av{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--p3),var(--p4));color:rgba(180,150,255,.9);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;overflow:hidden}
.m-av img{width:100%;height:100%;object-fit:cover}
.m-name{font-size:14px;font-weight:700;color:var(--text)}
.m-sub{font-size:12px;color:var(--muted)}
.m-acts{display:flex;gap:5px;margin-left:auto;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end}
.bsm{padding:5px 9px;font-size:11px;font-weight:700;font-family:"Inter",sans-serif;border:none;border-radius:8px;cursor:pointer}
.bsm.view{background:rgba(46,26,71,.1);color:var(--p2)}
.bsm.approve{background:rgba(22,163,74,.12);color:var(--green)}
.bsm.del,.bsm.reject{background:rgba(220,38,38,.1);color:var(--red)}
.bsm.pause{background:rgba(234,88,12,.1);color:#ea580c}
.bsm.unpause{background:rgba(37,99,235,.1);color:#2563eb}
.bsm.reset{background:rgba(109,40,217,.1);color:var(--ev)}
[data-theme="dark"] .bsm.view{background:rgba(180,150,255,.1);color:#b89fd4}

/* ── BADGES / TAGS ── */
.badge{display:inline-block;background:#dc2626;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;margin-left:6px}
.tag-a{font-size:10px;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);padding:2px 9px;border-radius:10px;font-weight:700;margin-left:6px;vertical-align:middle}
.tag-p{font-size:10px;background:#ea580c;color:#fff;padding:2px 8px;border-radius:10px;font-weight:700;margin-left:4px}
.tag-ev{font-size:10px;background:linear-gradient(135deg,var(--ev2),var(--ev3));color:#e9d5ff;padding:2px 9px;border-radius:10px;font-weight:700;margin-left:6px;vertical-align:middle}

/* ── TOAST ── */
.toast{position:fixed;bottom:88px;left:50%;transform:translateX(-50%);background:var(--p2);color:var(--gold);padding:10px 22px;border-radius:22px;font-size:14px;font-weight:700;display:none;z-index:999;white-space:nowrap;box-shadow:var(--sh2);border:1px solid var(--border2)}

/* ── ERR / SUC ── */
.err{color:var(--red);font-size:13px;margin-top:8px;display:none}
.suc{color:var(--green);font-size:13px;margin-top:8px;display:none}
.empty{padding:2rem 0;text-align:center;font-size:14px;color:var(--muted)}
.spin{display:inline-block;width:16px;height:16px;border:2px solid var(--gold);border-top-color:transparent;border-radius:50%;animation:sp .7s linear infinite;vertical-align:middle;margin-right:8px}
@keyframes sp{to{transform:rotate(360deg)}}

/* ── TABS ── */
.tabs{display:flex;border-bottom:1px solid var(--border);margin:0 1rem 1rem}
.tab{flex:1;padding:11px;text-align:center;font-size:13px;font-weight:700;cursor:pointer;color:var(--muted);border-bottom:2px solid transparent;margin-bottom:-1px;transition:color .15s;background:none;border-left:none;border-right:none;border-top:none;font-family:"Inter",sans-serif}
.tab.active{color:var(--p2);border-bottom-color:var(--p2)}
[data-theme="dark"] .tab.active{color:var(--gold);border-bottom-color:var(--gold)}

/* ── PW STRENGTH ── */
.pw-bar{height:4px;border-radius:2px;margin-top:6px;transition:width .3s,background .3s;width:0}
.pw-bar.weak{width:33%;background:var(--red)}
.pw-bar.medium{width:66%;background:var(--gold)}
.pw-bar.strong{width:100%;background:var(--green)}
.pw-lbl{font-size:11px;margin-top:3px}

/* ── MENU ── */
.menu-item{display:flex;align-items:center;gap:14px;padding:15px 1.25rem;border-bottom:1px solid var(--border);cursor:pointer;transition:background .15s}
.menu-item:active{background:var(--card2)}
.menu-icon{font-size:20px;width:32px;text-align:center}
.menu-label{font-size:15px;color:var(--text)}
.menu-arr{margin-left:auto;color:var(--muted);font-size:18px}

/* ── CARDS ── */
.card{background:var(--card);border-radius:16px;border:1px solid var(--border);padding:1rem;margin-bottom:.75rem;box-shadow:var(--sh)}
.card-title{font-size:14px;font-weight:700;color:var(--text)}
.card-text{font-size:13px;color:var(--muted);margin-top:5px;line-height:1.6;white-space:pre-wrap}
.card-date{font-size:11px;color:var(--muted2);margin-top:6px}

/* ── MODAL ── */
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:200;align-items:flex-end;justify-content:center}
@supports(backdrop-filter:blur(1px)){.modal-overlay{backdrop-filter:blur(4px);background:rgba(0,0,0,.5)}}
.modal-overlay.active{display:flex}
.modal{background:var(--card);border-radius:24px 24px 0 0;padding:2rem 1.5rem;width:100%;max-width:420px;box-shadow:var(--sh2);border-top:1px solid var(--border)}
.modal-title{font-family:"Cinzel",serif;font-size:17px;color:var(--p2);margin-bottom:.5rem}
[data-theme="dark"] .modal-title{color:var(--gold)}
.modal-body{font-size:14px;color:var(--muted);line-height:1.6;margin-bottom:1.5rem;white-space:pre-wrap}
.modal-acts{display:flex;gap:10px}
.modal-acts .btn-p,.modal-acts .btn-s{flex:1;padding:13px;margin:0}

/* ── NOTIFS ── */
.notif-item{display:flex;align-items:flex-start;gap:12px;padding:11px 13px;margin-bottom:8px;background:var(--card);border-radius:16px;border:1px solid var(--border)}
.notif-icon{font-size:18px;flex-shrink:0;width:36px;height:36px;border-radius:11px;background:var(--card2);display:flex;align-items:center;justify-content:center}
.notif-text{font-size:13px;color:var(--text);flex:1;line-height:1.5}
.notif-date{font-size:11px;color:var(--muted2);margin-top:3px}
.notif-unread{border-color:rgba(46,26,71,.25);background:var(--card2)}
[data-theme="dark"] .notif-unread{border-color:rgba(212,168,83,.2);background:var(--card3)}

/* ── LOJA ── */
.loja-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 1rem}
.loja-card{background:var(--card);border-radius:18px;border:1px solid var(--border);overflow:hidden;box-shadow:var(--sh)}
.loja-img{width:100%;height:130px;background:var(--card2);display:flex;align-items:center;justify-content:center;font-size:36px}
.loja-img img{width:100%;height:130px;object-fit:cover}
.loja-body{padding:.75rem}
.loja-nome{font-size:13px;font-weight:700;color:var(--text)}
.loja-preco{font-size:13px;font-weight:800;color:var(--gd);margin-top:3px}
.loja-del{width:100%;padding:7px;font-size:11px;font-weight:700;font-family:"Inter",sans-serif;background:rgba(220,38,38,.08);color:var(--red);border:none;cursor:pointer;border-top:1px solid var(--border)}
.loja-edit{width:100%;padding:7px;font-size:11px;font-weight:700;font-family:"Inter",sans-serif;background:rgba(46,26,71,.06);color:var(--p2);border:none;cursor:pointer;border-top:1px solid var(--border)}
[data-theme="dark"] .loja-edit{background:rgba(212,168,83,.07);color:var(--gold)}
.foto-placeholder{width:100%;height:110px;border-radius:var(--rs);border:2px dashed var(--border);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px;cursor:pointer;margin-bottom:.75rem;background:var(--card);transition:border-color .15s}
.foto-placeholder:active{border-color:var(--p2)}
.foto-placeholder span{font-size:26px}
.foto-placeholder p{font-size:12px;color:var(--muted)}
.foto-preview{width:100%;height:140px;border-radius:var(--rs);object-fit:cover;margin-bottom:.75rem;display:none;border:1px solid var(--border)}

/* ── PERFIL ── */
.perfil-hero{background:linear-gradient(135deg,var(--p),var(--p3));padding:2rem 1.5rem;text-align:center;border-radius:0 0 26px 26px}
.perfil-avatar{width:88px;height:88px;border-radius:50%;margin:0 auto 1rem;border:3px solid var(--gold);overflow:hidden;background:linear-gradient(135deg,var(--p3),var(--p4));display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:800;color:rgba(180,150,255,.9);cursor:pointer;position:relative;box-shadow:0 4px 20px rgba(212,168,83,.25)}
.perfil-avatar img{width:100%;height:100%;object-fit:cover}
.perfil-av-edit{position:absolute;bottom:2px;right:2px;background:var(--gold);border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--p)}
.perfil-name{color:var(--gold);font-size:20px;font-weight:800}
.perfil-user{color:rgba(180,150,255,.55);font-size:13px;margin-top:4px}
.stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:1rem}
.stat{background:var(--card);border-radius:16px;border:1px solid var(--border);padding:.85rem .5rem;text-align:center;box-shadow:var(--sh)}
.stat-n{font-size:22px;font-weight:900;color:var(--p2);font-family:"Cinzel",serif}
[data-theme="dark"] .stat-n{color:var(--gold)}
.stat-l{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-top:3px}
.info-list{padding:.25rem 1rem}
.info-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)}
.info-key{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}
.info-val{font-size:14px;color:var(--text);font-weight:600}

/* ── COMUNIDADE ── */
.search-bar{padding:.75rem 1rem .25rem;position:relative}
.search-inp{width:100%;padding:11px 14px 11px 40px;font-size:14px;font-family:"Inter",sans-serif;border:1.5px solid var(--border);border-radius:24px;background:var(--card);color:var(--text);outline:none;transition:border-color .2s}
.search-inp:focus{border-color:rgba(46,26,71,.35)}
[data-theme="dark"] .search-inp:focus{border-color:rgba(212,168,83,.35)}
.search-inp::placeholder{color:var(--muted2)}
.search-icon{position:absolute;left:26px;top:50%;transform:translateY(-50%);font-size:16px;pointer-events:none;opacity:.4}
.com-item{display:flex;align-items:center;gap:12px;padding:11px 1rem;border-bottom:1px solid var(--border);cursor:pointer}
.com-item:active{background:var(--card2)}
.com-av{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--p3),var(--p4));color:rgba(180,150,255,.9);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0;overflow:hidden}
.com-av img{width:100%;height:100%;object-fit:cover}
.com-name{font-size:14px;font-weight:700;color:var(--text)}
.com-sub{font-size:12px;color:var(--muted)}
.com-saldo{margin-left:auto;font-size:13px;font-weight:800;color:var(--gd);flex-shrink:0}

/* ── RELATORIO ── */
.rel-card{background:var(--card);border-radius:16px;border:1px solid var(--border);padding:1rem;margin-bottom:.75rem;box-shadow:var(--sh)}
.rel-card-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:.5rem}
.rel-row{display:flex;justify-content:space-between;padding:6px 0;font-size:13px;border-bottom:1px solid var(--border);color:var(--text)}
.rel-row:last-child{border-bottom:none}
.rel-total{display:flex;justify-content:space-between;padding:9px 0 0;font-size:14px;font-weight:700;color:var(--p2)}
[data-theme="dark"] .rel-total{color:var(--gold)}
.mes-tabs{display:flex;gap:8px;padding:1rem 1rem .5rem}
.mes-tab{flex:1;padding:10px;text-align:center;font-size:13px;font-weight:700;border-radius:var(--rs);border:1px solid var(--border);background:var(--card);cursor:pointer;color:var(--muted);transition:all .15s}
.mes-tab.active{background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border-color:transparent}

/* ── QR ── */
.qr-box{background:#fff;border-radius:20px;padding:18px;margin:0 auto;width:fit-content;box-shadow:var(--sh2)}
.qr-tabs{display:flex;gap:8px;padding:0 1rem 1rem}
.qr-tab{flex:1;padding:10px;text-align:center;border-radius:var(--rs);border:1px solid var(--border);background:var(--card);cursor:pointer;font-size:13px;font-weight:700;color:var(--muted);transition:all .15s}
.qr-tab.active{background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border-color:transparent}
.scan-area{margin:0 1rem;background:var(--card2);border-radius:20px;border:2px dashed var(--border);padding:2rem;text-align:center;display:flex;flex-direction:column;align-items:center;gap:12px}
.scan-btn{background:linear-gradient(135deg,var(--p2),var(--p4));color:var(--gold);border:none;border-radius:var(--rs);padding:12px 28px;font-size:14px;font-weight:700;cursor:pointer;font-family:"Inter",sans-serif;margin-top:.5rem}

/* ── ADMIN PANEL ── */
.admin-panel{background:linear-gradient(135deg,#0a0612,var(--p));border-radius:18px;padding:1.25rem;margin:0 1rem .75rem;border:1px solid rgba(212,168,83,.12);box-shadow:0 8px 32px rgba(0,0,0,.3)}
.admin-panel-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.16em;color:rgba(212,168,83,.5);margin-bottom:1rem}
.admin-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.ag-btn{background:rgba(212,168,83,.06);border:1px solid rgba(212,168,83,.1);border-radius:14px;padding:.9rem .5rem;text-align:center;cursor:pointer;transition:background .15s}
.ag-btn:active{background:rgba(212,168,83,.14)}
.ag-icon{font-size:22px;margin-bottom:5px}
.ag-label{font-size:10px;font-weight:700;color:var(--gold);letter-spacing:.03em}

/* ── EVENT SCREEN ── */
.ev-header-card{background:linear-gradient(135deg,rgba(76,29,149,.4),rgba(91,33,182,.3));border:1px solid rgba(139,92,246,.25);border-radius:18px;padding:1.1rem;margin:0 1rem .75rem}
.ev-header-top{display:flex;align-items:center;gap:10px;margin-bottom:.75rem}
.ev-header-icon{font-size:24px}
.ev-header-name{font-size:16px;font-weight:800;color:#e9d5ff}
.ev-header-sub{font-size:11px;color:rgba(233,213,255,.4);margin-top:2px}
.ev-stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.ev-stat{background:rgba(255,255,255,.06);border-radius:12px;padding:.6rem;text-align:center}
.ev-stat-n{font-size:15px;font-weight:800;color:#c4b5fd}
.ev-stat-l{font-size:9px;color:rgba(196,181,253,.4);text-transform:uppercase;letter-spacing:.08em;margin-top:2px}

/* ── MY TEAM CARD ── */
.my-team-card{background:rgba(91,33,182,.12);border:1px solid rgba(139,92,246,.22);border-radius:16px;padding:.85rem 1rem;margin:0 1rem .75rem;display:flex;align-items:center;gap:10px}
.my-team-color{width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0}
.my-team-info{flex:1}
.my-team-name{font-size:13px;font-weight:700;color:#e9d5ff}
.my-team-sub{font-size:11px;color:rgba(233,213,255,.4);margin-top:1px}
.my-team-pts{font-size:18px;font-weight:900;color:#c4b5fd}

/* ── EV TABS ── */
.ev-tabs-row{display:flex;gap:0;background:rgba(139,92,246,.1);border-radius:12px;padding:3px;margin:0 1rem .75rem}
.ev-tab{flex:1;padding:7px 4px;text-align:center;font-size:11px;font-weight:700;color:rgba(196,181,253,.5);border-radius:10px;cursor:pointer;border:none;background:none;font-family:"Inter",sans-serif;transition:all .15s}
.ev-tab.active{background:rgba(139,92,246,.3);color:#e9d5ff}
.ev-content{display:none;padding:0 1rem}
.ev-content.active{display:block}

/* ── TEAM RANKING ── */
.team-row{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:14px;margin-bottom:8px;border:1px solid rgba(255,255,255,.06)}
.tr-1{background:rgba(250,204,21,.07);border-color:rgba(250,204,21,.18)}
.tr-2{background:rgba(180,180,180,.05);border-color:rgba(180,180,180,.12)}
.tr-3{background:rgba(176,103,50,.05);border-color:rgba(176,103,50,.12)}
.tr-4{background:rgba(255,255,255,.02)}
.t-pos{font-size:13px;font-weight:800;width:18px;text-align:center}
.tr-1 .t-pos{color:#facc15}
.tr-2 .t-pos{color:#d1d5db}
.tr-3 .t-pos{color:#b06732}
.tr-4 .t-pos{color:rgba(255,255,255,.25)}
.t-color-box{width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0}
.t-info-col{flex:1;min-width:0}
.t-name{font-size:12px;font-weight:700;color:#e9d5ff}
.t-bar-wrap{background:rgba(255,255,255,.08);border-radius:4px;height:3px;margin-top:3px;overflow:hidden}
.t-bar{height:3px;border-radius:4px}
.t-pts-col{font-size:13px;font-weight:800;color:#c4b5fd;flex-shrink:0}

/* ── PRATA WALLET ── */
.prata-wallet{background:linear-gradient(135deg,rgba(13,31,45,.8),rgba(22,45,63,.8));border:1px solid rgba(168,184,200,.15);border-radius:18px;padding:1.1rem;text-align:center;margin-bottom:.75rem}
.prata-label{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:rgba(168,184,200,.45);margin-bottom:4px}
.prata-amount{font-size:34px;font-weight:900;color:var(--silver)}
.prata-unit{font-size:15px;color:rgba(168,184,200,.35);margin-left:4px}
.prata-actions{display:flex;gap:8px;margin-top:.75rem}
.prata-act{flex:1;padding:9px;background:rgba(168,184,200,.1);border:1px solid rgba(168,184,200,.15);border-radius:12px;color:var(--silver);font-size:12px;font-weight:700;cursor:pointer;font-family:"Inter",sans-serif}

/* ── ADMIN EVENT PANEL ── */
.ev-admin-card{background:rgba(91,33,182,.1);border:1px solid rgba(139,92,246,.2);border-radius:16px;padding:1rem;margin-bottom:.75rem}
.ev-admin-title{font-size:12px;font-weight:700;color:#c4b5fd;margin-bottom:.75rem;text-transform:uppercase;letter-spacing:.08em}
.ev-admin-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.ev-ag-btn{background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.25);border-radius:12px;padding:.75rem;text-align:center;cursor:pointer}
.ev-ag-btn:active{background:rgba(139,92,246,.25)}
.ev-ag-icon{font-size:20px;margin-bottom:4px}
.ev-ag-label{font-size:11px;font-weight:700;color:#c4b5fd}
.ev-toggle-row{display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.04);border-radius:12px;padding:.75rem;margin-bottom:.75rem;border:1px solid rgba(255,255,255,.06)}
.ev-toggle-label{font-size:13px;font-weight:700;color:#e9d5ff}
.ev-toggle-sub{font-size:11px;color:rgba(233,213,255,.35);margin-top:1px}
.toggle-track{width:40px;height:22px;border-radius:11px;background:#4ade80;position:relative;cursor:pointer;flex-shrink:0;transition:background .2s}
.toggle-knob{width:18px;height:18px;border-radius:50%;background:#fff;position:absolute;top:2px;right:2px;transition:transform .2s}
.toggle-track.off{background:rgba(255,255,255,.15)}
.toggle-track.off .toggle-knob{transform:translateX(-18px)}
.nm-input-row{display:flex;gap:8px;margin-top:.5rem}
.nm-input{flex:1;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:8px 12px;font-size:13px;color:#e9d5ff;font-family:"Inter",sans-serif;outline:none}
.nm-save{background:rgba(139,92,246,.25);border:1px solid rgba(139,92,246,.3);border-radius:10px;padding:8px 14px;font-size:12px;font-weight:700;color:#c4b5fd;cursor:pointer;font-family:"Inter",sans-serif;white-space:nowrap}

/* ── MEMBER ROW IN EV ── */
.ev-member-row{display:flex;align-items:center;gap:8px;padding:8px 12px;background:rgba(255,255,255,.03);border-radius:12px;margin-bottom:6px;border:1px solid rgba(255,255,255,.05)}
.ev-m-av{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0}
.ev-m-name{font-size:12px;font-weight:700;color:#e9d5ff;flex:1}
.ev-m-pts{font-size:12px;font-weight:800;color:var(--silver)}

/* ── NOTICE ── */
.notice{background:rgba(91,33,182,.07);border:1px solid rgba(91,33,182,.18);border-radius:12px;padding:.65rem .85rem;margin-bottom:.75rem}
.notice p{font-size:11px;color:rgba(196,181,253,.65);line-height:1.5}

/* ── EXTRATO SEARCH ── */
.extrato-search{padding:.5rem 1rem .25rem}
.extrato-search input{width:100%;padding:9px 12px;font-size:13px;font-family:"Inter",sans-serif;border:1px solid var(--border);border-radius:var(--rs);background:var(--card);color:var(--text);outline:none}
.extrato-search input::placeholder{color:var(--muted2)}
.extrato-search input:focus{border-color:rgba(46,26,71,.35)}
[data-theme="dark"] .extrato-search input:focus{border-color:rgba(212,168,83,.35)}

/* ── EXPORT BTNS ── */
.export-btns{display:flex;gap:10px;padding:0 1rem .75rem}
.export-btns .btn-p{flex:1;padding:11px;font-size:13px}

/* ── BOAS VINDAS ── */
.bv-overlay{display:none;position:fixed;inset:0;background:linear-gradient(160deg,var(--p),var(--p4));z-index:500;flex-direction:column;align-items:center;justify-content:center;padding:2rem;text-align:center}
.bv-overlay.active{display:flex}
.bv-coin{width:90px;height:90px;border-radius:26px;background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);display:flex;align-items:center;justify-content:center;font-family:"Cinzel",serif;font-size:42px;font-weight:600;margin:0 auto 1.5rem;box-shadow:0 0 40px rgba(212,168,83,.4);animation:pulse 2s ease-in-out infinite}
.bv-title{font-family:"Cinzel",serif;font-size:22px;color:var(--gold);margin-bottom:.5rem}
.bv-sub{font-size:14px;color:rgba(180,150,255,.7);line-height:1.7;margin-bottom:2rem}
.bv-btn{background:linear-gradient(135deg,var(--gold),var(--gd));color:var(--p);border:none;border-radius:var(--rs);padding:14px 40px;font-size:15px;font-weight:700;font-family:"Inter",sans-serif;cursor:pointer}

/* ── BOTTOM NAV ── */
.bottom-nav{display:none;position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:420px;background:var(--card);border-top:1px solid var(--border);padding:.55rem 0 .85rem;z-index:20}
@supports(backdrop-filter:blur(1px)){.bottom-nav{backdrop-filter:blur(12px);background:rgba(255,255,255,.88)}[data-theme="dark"] .bottom-nav{background:rgba(26,16,40,.92)}}
.bottom-nav.show{display:flex}
.bn-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;padding:.3rem 0}
.bn-item:active{opacity:.6}
.bn-icon{font-size:22px;line-height:1}
.bn-label{font-size:10px;font-weight:600;color:var(--muted2);letter-spacing:.03em}
.bn-item.active .bn-label{color:var(--p2)}
[data-theme="dark"] .bn-item.active .bn-label{color:var(--gold)}

/* ── LIGHT MODE FIXES ── */
[data-theme="light"] .admin-panel{background:linear-gradient(135deg,var(--p),var(--p3))}
[data-theme="light"] .ev-header-card{background:linear-gradient(135deg,rgba(76,29,149,.12),rgba(91,33,182,.08));border-color:rgba(139,92,246,.2)}
[data-theme="light"] .ev-header-name{color:var(--ev2)}
[data-theme="light"] .ev-header-sub{color:rgba(91,33,182,.45)}
[data-theme="light"] .my-team-card{background:rgba(91,33,182,.06);border-color:rgba(139,92,246,.15)}
[data-theme="light"] .my-team-name{color:var(--ev)}
[data-theme="light"] .my-team-sub{color:rgba(91,33,182,.45)}
[data-theme="light"] .my-team-pts{color:var(--ev3)}
[data-theme="light"] .ev-tabs-row{background:rgba(139,92,246,.06)}
[data-theme="light"] .ev-tab{color:rgba(91,33,182,.45)}
[data-theme="light"] .ev-tab.active{background:rgba(139,92,246,.15);color:var(--ev)}
[data-theme="light"] .team-row{border-color:rgba(0,0,0,.08)}
[data-theme="light"] .t-name{color:var(--p2)}
[data-theme="light"] .t-pts-col{color:var(--ev)}
[data-theme="light"] .prata-wallet{background:linear-gradient(135deg,#e8f4fd,#d1e9f7);border-color:rgba(122,154,176,.3)}
[data-theme="light"] .prata-label{color:rgba(122,154,176,.8)}
[data-theme="light"] .prata-amount{color:#2c6e8a}
[data-theme="light"] .prata-act{background:rgba(122,154,176,.1);border-color:rgba(122,154,176,.2);color:#2c6e8a}
[data-theme="light"] .ev-admin-card{background:rgba(91,33,182,.05);border-color:rgba(139,92,246,.15)}
[data-theme="light"] .ev-admin-title{color:var(--ev)}
[data-theme="light"] .ev-ag-btn{background:rgba(139,92,246,.08);border-color:rgba(139,92,246,.15)}
[data-theme="light"] .ev-ag-label{color:var(--ev)}
[data-theme="light"] .ev-toggle-row{background:rgba(0,0,0,.03);border-color:rgba(0,0,0,.06)}
[data-theme="light"] .ev-toggle-label{color:var(--p2)}
[data-theme="light"] .ev-toggle-sub{color:var(--muted)}
[data-theme="light"] .nm-input{background:var(--card);border-color:var(--border);color:var(--text)}
[data-theme="light"] .nm-save{background:rgba(139,92,246,.1);border-color:rgba(139,92,246,.2);color:var(--ev)}
[data-theme="light"] .ev-member-row{background:rgba(139,92,246,.04);border-color:rgba(139,92,246,.1)}
[data-theme="light"] .ev-m-name{color:var(--p2)}
[data-theme="light"] .notice{background:rgba(91,33,182,.04);border-color:rgba(91,33,182,.12)}
[data-theme="light"] .notice p{color:rgba(91,33,182,.6)}
[data-theme="light"] .ev-home-btn.ev-color{background:linear-gradient(135deg,rgba(91,33,182,.08),rgba(76,29,149,.1));border-color:rgba(139,92,246,.2)}
[data-theme="light"] .ev-home-btn.ev-color .ev-btn-name{color:var(--ev)}
[data-theme="light"] .ev-home-btn.ev-color .ev-btn-sub{color:rgba(91,33,182,.4)}
[data-theme="light"] .ev-home-btn.silver-color{background:linear-gradient(135deg,#e8f4fd,#daeef9);border-color:rgba(122,154,176,.25)}
[data-theme="light"] .ev-home-btn.silver-color .ev-btn-name{color:#2c6e8a}
[data-theme="light"] .ev-home-btn.silver-color .ev-btn-sub{color:rgba(44,110,138,.4)}
[data-theme="light"] .bottom-nav{background:rgba(255,255,255,.95);border-color:rgba(46,26,71,.08)}
[data-theme="light"] .topbar{background:rgba(244,241,249,.95);border-color:rgba(46,26,71,.08)}
[data-theme="light"] .scan-area{background:var(--card2)}

/* ── MULTISELECT CUSTOMIZADO ── */
.ms-wrap{position:relative;width:100%}
.ms-trigger{width:100%;padding:11px 36px 11px 14px;font-size:13px;font-family:"Inter",sans-serif;border:1px solid rgba(167,139,250,.35);border-radius:12px;background:#1a0838;color:#e9d5ff;cursor:pointer;text-align:left;position:relative;user-select:none;min-height:42px}
.ms-trigger::after{content:"▾";position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:14px;color:rgba(196,181,253,.5);pointer-events:none}
.ms-trigger.open{border-color:rgba(167,139,250,.7);border-radius:12px 12px 0 0}
.ms-dropdown{display:none;position:absolute;top:100%;left:0;right:0;background:#1a0838;border:1px solid rgba(167,139,250,.35);border-top:none;border-radius:0 0 12px 12px;z-index:100;max-height:220px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(124,58,237,.4) transparent}
.ms-dropdown.open{display:block}
.ms-search{padding:8px 10px;border-bottom:1px solid rgba(167,139,250,.15)}
.ms-search input{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(167,139,250,.2);border-radius:8px;padding:6px 10px;font-size:12px;font-family:"Inter",sans-serif;color:#e9d5ff;outline:none}
.ms-search input::placeholder{color:rgba(196,181,253,.35)}
.ms-option{display:flex;align-items:center;gap:10px;padding:9px 12px;cursor:pointer;transition:background .12s;font-size:13px;color:rgba(196,181,253,.8)}
.ms-option:hover{background:rgba(124,58,237,.18)}
.ms-option.selected{background:rgba(124,58,237,.15);color:#e9d5ff}
.ms-option input[type=checkbox]{width:16px;height:16px;accent-color:#7c3aed;flex-shrink:0;cursor:pointer}
.ms-option-name{flex:1}
.ms-empty{padding:12px;text-align:center;font-size:12px;color:rgba(196,181,253,.35)}
/* versão light mode */
[data-theme="light"] .ms-trigger{background:var(--card);border-color:rgba(139,92,246,.3);color:var(--p2)}
[data-theme="light"] .ms-trigger::after{color:rgba(91,33,182,.4)}
[data-theme="light"] .ms-dropdown{background:var(--card);border-color:rgba(139,92,246,.2)}
[data-theme="light"] .ms-search input{background:var(--card2);border-color:rgba(139,92,246,.2);color:var(--p2)}
[data-theme="light"] .ms-option{color:var(--muted)}
[data-theme="light"] .ms-option:hover{background:rgba(139,92,246,.08)}
[data-theme="light"] .ms-option.selected{background:rgba(139,92,246,.12);color:var(--p2)}
/* versão inline (dentro dos cards de time — fundo escuro fixo) */
.ms-wrap.inline .ms-trigger{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);color:#e9d5ff;border-radius:8px;padding:7px 32px 7px 10px;font-size:12px}
.ms-wrap.inline .ms-trigger.open{border-radius:8px 8px 0 0}
.ms-wrap.inline .ms-dropdown{background:#1a0838;border-color:rgba(255,255,255,.12)}
</style>
</head>
<body>

<!-- BOAS VINDAS -->
<div id="bv-overlay" class="bv-overlay">
  <div class="bv-coin">&#8367;</div>
  <div class="bv-title" id="bv-nome">Bem-vindo!</div>
  <div class="bv-sub">Voce acaba de entrar no<br><strong style="color:var(--gold)">Banco de Dracmas ADC</strong>.<br><br>Aqui voce gerencia suas dracmas,<br>transfere para outros membros<br>e acompanha seu saldo.</div>
  <button class="bv-btn" onclick="fecharBV()">Entrar &#8594;</button>
</div>

<!-- LOADER -->
<div id="s-loader" class="screen active">
  <div class="loader-coin">&#8367;</div>
  <div class="loader-text">carregando...</div>
</div>

<!-- LOGIN -->
<div id="s-login" class="screen">
  <div class="login-top">
    <div class="login-coin">&#8367;</div>
    <h1 class="login-title">Dracmas ADC</h1>
    <div class="login-sub">Igreja ADC</div>
  </div>
  <div class="login-card">
    <div class="form-group">
      <label class="form-label">nome de usuario</label>
      <input class="form-input" id="l-user" type="text" placeholder="Ex: joao.silva" autocomplete="username"/>
    </div>
    <div class="form-group">
      <label class="form-label">senha</label>
      <div class="input-wrap">
        <input class="form-input" id="l-pw" type="password" placeholder="sua senha" autocomplete="current-password"/>
        <button class="toggle-pw" onclick="tglPw('l-pw',this)" type="button">&#128065;</button>
      </div>
    </div>
    <div class="err" id="l-err"></div>
    <button class="btn-login" id="l-btn" onclick="doLogin()">entrar</button>
    <button class="btn-register" onclick="goTo('s-register')">criar conta</button>
  </div>
</div>

<!-- REGISTER -->
<div id="s-register" class="screen">
  <div class="topbar">
    <button class="topbar-back" onclick="goBack()">&#8592;</button>
    <span class="topbar-title">criar conta</span>
  </div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">nome completo</label>
      <input class="form-input" id="r-name" type="text" placeholder="Ex: Joao Silva"/>
    </div>
    <div class="form-group">
      <label class="form-label">nome de usuario</label>
      <input class="form-input" id="r-user" type="text" placeholder="Ex: joao.silva"/>
      <div class="form-hint">letras minusculas, numeros e ponto. sem espacos.</div>
    </div>
    <div class="form-group">
      <label class="form-label">senha</label>
      <div class="input-wrap">
        <input class="form-input" id="r-pw" type="password" placeholder="minimo 6 caracteres" oninput="checkStr(this.value,'pw-b1','pw-l1')" autocomplete="new-password"/>
        <button class="toggle-pw" onclick="tglPw('r-pw',this)" type="button">&#128065;</button>
      </div>
      <div class="pw-bar" id="pw-b1"></div>
      <div class="pw-lbl" id="pw-l1"></div>
    </div>
    <div class="form-group">
      <label class="form-label">confirmar senha</label>
      <div class="input-wrap">
        <input class="form-input" id="r-pw2" type="password" placeholder="repita a senha" autocomplete="new-password"/>
        <button class="toggle-pw" onclick="tglPw('r-pw2',this)" type="button">&#128065;</button>
      </div>
    </div>
    <p style="font-size:12px;color:var(--muted);margin-bottom:1rem;line-height:1.6">&#9203; Conta ficara <strong>pendente</strong> ate o admin aprovar.</p>
    <div class="err" id="r-err"></div>
    <button class="btn-p" id="r-btn" onclick="doRegister()">solicitar acesso</button>
  </div>
</div>

<!-- HOME -->
<div id="s-home" class="screen">
  <div class="topbar" id="home-topbar">
    <div class="topbar-logo">&#8367;</div>
    <span class="topbar-title" id="home-greeting">ola!</span>
    <button class="topbar-icon" onclick="goTo('s-notifs')"><span id="notif-bell">&#128276;</span></button>
    <button class="topbar-icon" onclick="goTo('s-settings')">&#9881;</button>
  </div>
  <div class="bal-card member-card" id="home-bal-card">
    <div class="bal-label">saldo de dracmas</div>
    <div><span class="bal-amount" id="home-bal">0</span><span class="bal-unit">&#8367;</span></div>
    <div class="bal-user" id="home-user"></div>
  </div>
  <!-- MEMBER QUICK ACTIONS -->
  <div id="member-actions" style="display:none">
    <div class="actions-grid">
      <div class="act-btn" onclick="goTo('s-transfer')"><div class="act-icon">&#8599;</div><div class="act-label">enviar</div></div>
      <div class="act-btn" onclick="goTo('s-qr')"><div class="act-icon">&#128247;</div><div class="act-label">QR code</div></div>
      <div class="act-btn" onclick="goTo('s-history')"><div class="act-icon">&#128203;</div><div class="act-label">extrato</div></div>
      <div class="act-btn" onclick="goTo('s-loja')"><div class="act-icon">&#127978;</div><div class="act-label">lojinha</div></div>
    </div>
    <div id="ev-home-btns" style="display:none">
      <div class="ev-home-btn silver-color" onclick="goTo('s-ev-prata')">
        <div class="ev-btn-icon">&#11042;</div>
        <div class="ev-btn-info">
          <div class="ev-btn-name" id="ev-moeda-home-btn">Prata &middot; Evento</div>
          <div class="ev-btn-sub">seu saldo: <span id="ev-prata-home-bal">0</span> &#11042;</div>
        </div>
        <div class="ev-btn-arr">&#8250;</div>
      </div>
      <div class="ev-home-btn ev-color" onclick="goTo('s-evento')">
        <div class="ev-live"></div>
        <div class="ev-btn-icon">&#9876;</div>
        <div class="ev-btn-info">
          <div class="ev-btn-name" id="ev-home-name">Evento ADC</div>
          <div class="ev-btn-sub">gincana em andamento &middot; toque para ver</div>
        </div>
        <div class="ev-btn-arr">&#8250;</div>
      </div>
    </div>
  </div>
  <!-- ADMIN PANEL -->
  <div id="admin-actions" style="display:none">
    <div class="admin-panel">
      <div class="admin-panel-label">painel administrativo</div>
      <div class="admin-grid">
        <div class="ag-btn" onclick="goTo('s-admin')"><div class="ag-icon">&#128081;</div><div class="ag-label">gerenciar</div></div>
        <div class="ag-btn" onclick="goTo('s-pending')"><div class="ag-icon">&#9203;</div><div class="ag-label">aprovar <span id="pending-badge" class="badge" style="display:none">0</span></div></div>
        <div class="ag-btn" onclick="goTo('s-relatorio')"><div class="ag-icon">&#128202;</div><div class="ag-label">relatorio</div></div>
        <div class="ag-btn" onclick="goTo('s-mural-admin')"><div class="ag-icon">&#128226;</div><div class="ag-label">mural</div></div>
        <div class="ag-btn" onclick="goTo('s-loja-admin')"><div class="ag-icon">&#127978;</div><div class="ag-label">gerir loja</div></div>
        <div class="ag-btn" onclick="goTo('s-ev-admin-home')"><div class="ag-icon">&#9876;</div><div class="ag-label" id="admin-ev-label">evento</div></div>
      </div>
    </div>
    <div class="actions-grid">
      <div class="act-btn" onclick="goTo('s-transfer')"><div class="act-icon">&#8599;</div><div class="act-label">enviar</div></div>
      <div class="act-btn" onclick="goTo('s-qr')"><div class="act-icon">&#128247;</div><div class="act-label">QR code</div></div>
      <div class="act-btn" onclick="goTo('s-history')"><div class="act-icon">&#128203;</div><div class="act-label">extrato</div></div>
      <div class="act-btn" onclick="goTo('s-loja')"><div class="act-icon">&#127978;</div><div class="act-label">lojinha</div></div>
    </div>
    <div id="ev-home-btns-admin" style="display:none">
      <div class="ev-home-btn ev-color" onclick="goTo('s-evento')">
        <div class="ev-live"></div>
        <div class="ev-btn-icon">&#9876;</div>
        <div class="ev-btn-info">
          <div class="ev-btn-name" id="ev-home-name-admin">Evento ADC</div>
          <div class="ev-btn-sub">em andamento &middot; toque para gerenciar</div>
        </div>
        <div class="ev-btn-arr">&#8250;</div>
      </div>
    </div>
  </div>
  <div class="sec-hd">ultimas transacoes</div>
  <div class="tx-list" id="home-txs"><div class="empty">carregando...</div></div>
</div>

<!-- EXTRATO -->
<div id="s-history" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">extrato</span></div>
  <div class="extrato-search"><input type="text" id="h-search" placeholder="buscar..." oninput="buscarExtrato('history',this.value)"/></div>
  <div class="filter-bar" id="h-filters"></div>
  <div class="tx-list" id="h-txs"><div class="empty">carregando...</div></div>
</div>

<!-- EXTRATO MEMBRO (admin) -->
<div id="s-member-history" class="screen">
  <div class="topbar gold-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title" id="mh-title">extrato</span></div>
  <div class="extrato-search"><input type="text" id="mh-search" placeholder="buscar..." oninput="buscarExtrato('member-history',this.value)"/></div>
  <div class="filter-bar" id="mh-filters"></div>
  <div class="tx-list" id="mh-txs"><div class="empty">carregando...</div></div>
</div>

<!-- TRANSFERIR -->
<div id="s-transfer" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">transferir dracmas</span></div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group"><label class="form-label">para quem</label><select class="form-input" id="tr-to"></select></div>
    <div class="form-group"><label class="form-label">quantidade</label><input class="form-input" id="tr-amt" type="number" min="1" placeholder="0" inputmode="numeric"/></div>
    <div class="form-group"><label class="form-label">mensagem (opcional)</label><input class="form-input" id="tr-msg" type="text" placeholder="ex: obrigado pela ajuda!"/></div>
    <div class="err" id="tr-err"></div>
    <button class="btn-p" id="tr-btn" onclick="confirmarTransfer()">transferir</button>
  </div>
</div>

<!-- QR CODE -->
<div id="s-qr" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">QR Code</span></div>
  <div style="text-align:center;padding:1.5rem 1rem 1rem">
    <p style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:.25rem">Pagamentos por QR</p>
    <p style="font-size:13px;color:var(--muted)">mostre ou escaneie para transferir</p>
  </div>
  <div class="qr-tabs">
    <div class="qr-tab active" id="qr-tab-meu" onclick="switchQRTab('meu')">Meu QR</div>
    <div class="qr-tab" id="qr-tab-scan" onclick="switchQRTab('scan')">Escanear</div>
  </div>
  <div id="qr-panel-meu" style="text-align:center;padding:0 1rem 1rem">
    <p style="font-size:13px;color:var(--muted);margin-bottom:1rem">Mostre este QR para receber dracmas</p>
    <div class="qr-box" id="qr-canvas"></div>
    <p style="font-size:13px;color:var(--muted);margin-top:1rem" id="qr-label"></p>
    <div style="margin-top:1rem;display:flex;gap:8px">
      <div id="qr-livre-btn" onclick="setQRMode('livre')" style="flex:1;background:var(--card2);border:1px solid var(--border);border-radius:var(--rs);padding:10px;text-align:center;cursor:pointer"><div style="font-size:11px;font-weight:700;color:var(--muted)">valor livre</div></div>
      <div id="qr-valor-btn" onclick="setQRMode('valor')" style="flex:1;background:var(--card2);border:1px solid var(--border);border-radius:var(--rs);padding:10px;text-align:center;cursor:pointer"><div style="font-size:11px;font-weight:700;color:var(--muted)">definir valor</div></div>
    </div>
    <div id="qr-valor-input" style="display:none;margin-top:.75rem"><input class="form-input" id="qr-amt" type="number" min="1" placeholder="valor em dracmas" inputmode="numeric" oninput="gerarQR()"/></div>
  </div>
  <div id="qr-panel-scan" style="display:none">
    <div class="scan-area">
      <div style="font-size:52px">&#128247;</div>
      <p style="font-size:14px;color:var(--muted);line-height:1.5">Aponte a camera para o QR code de outro membro</p>
      <button class="scan-btn" onclick="iniciarScan()">Abrir camera</button>
    </div>
    <div id="qr-reader-wrap" style="padding:1rem;display:none">
      <div id="qr-reader" style="width:100%;border-radius:16px;overflow:hidden"></div>
      <button class="btn-p danger" style="margin-top:.75rem" onclick="pararScan()">cancelar</button>
    </div>
  </div>
</div>

<!-- NOTIFICACOES -->
<div id="s-notifs" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">notificacoes</span></div>
  <div style="padding:0 1rem" id="notifs-list"><div class="empty">carregando...</div></div>
</div>

<!-- CONFIGURACOES -->
<div id="s-settings" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">configuracoes</span></div>
  <div style="padding-top:.5rem">
    <div class="menu-item" onclick="goTo('s-perfil')"><div class="menu-icon">&#128100;</div><div class="menu-label">meu perfil</div><div class="menu-arr">&#8250;</div></div>
    <div class="menu-item" onclick="toggleTheme()">
      <div class="menu-icon" id="theme-icon">&#127774;</div>
      <div class="menu-label" id="theme-label">mudar para dark mode</div>
      <div style="margin-left:auto;background:var(--card2);border-radius:20px;padding:3px;display:flex">
        <div id="theme-knob" style="width:24px;height:24px;border-radius:18px;background:var(--p2);transition:transform .2s"></div>
      </div>
    </div>
    <div class="menu-item" onclick="goTo('s-change-pw')"><div class="menu-icon">&#128273;</div><div class="menu-label">mudar senha</div><div class="menu-arr">&#8250;</div></div>
    <div class="menu-item" onclick="doLogout()"><div class="menu-icon">&#8619;</div><div class="menu-label" style="color:var(--red)">sair</div><div class="menu-arr">&#8250;</div></div>
  </div>
</div>

<!-- MUDAR SENHA -->
<div id="s-change-pw" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">mudar senha</span></div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group"><label class="form-label">senha atual</label><div class="input-wrap"><input class="form-input" id="cp-cur" type="password" placeholder="senha atual"/><button class="toggle-pw" onclick="tglPw('cp-cur',this)" type="button">&#128065;</button></div></div>
    <div class="form-group"><label class="form-label">nova senha</label><div class="input-wrap"><input class="form-input" id="cp-new" type="password" placeholder="minimo 6 caracteres" oninput="checkStr(this.value,'pw-b2','pw-l2')"/><button class="toggle-pw" onclick="tglPw('cp-new',this)" type="button">&#128065;</button></div><div class="pw-bar" id="pw-b2"></div><div class="pw-lbl" id="pw-l2"></div></div>
    <div class="form-group"><label class="form-label">confirmar nova senha</label><div class="input-wrap"><input class="form-input" id="cp-new2" type="password" placeholder="repita"/><button class="toggle-pw" onclick="tglPw('cp-new2',this)" type="button">&#128065;</button></div></div>
    <div class="err" id="cp-err"></div><div class="suc" id="cp-suc">senha alterada!</div>
    <button class="btn-p" id="cp-btn" onclick="doChangePw()">salvar</button>
  </div>
</div>

<!-- MURAL -->
<div id="s-mural" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">mural de avisos</span></div>
  <div style="padding:1rem" id="mural-list"><div class="empty">carregando...</div></div>
</div>

<!-- MURAL ADMIN -->
<div id="s-mural-admin" class="screen">
  <div class="topbar gold-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">mural <span class="tag-a">admin</span></span></div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group"><label class="form-label">titulo</label><input class="form-input" id="av-titulo" type="text" placeholder="Ex: Culto especial!"/></div>
    <div class="form-group"><label class="form-label">texto</label><textarea class="form-input" id="av-texto" placeholder="Detalhes..."></textarea></div>
    <div class="err" id="av-err"></div>
    <button class="btn-p" id="av-btn" onclick="publicarAviso()">publicar aviso</button>
  </div>
  <div class="sec-hd gold">avisos publicados</div>
  <div style="padding:0 1rem" id="mural-admin-list"><div class="empty">carregando...</div></div>
</div>

<!-- LOJINHA MEMBROS -->
<div id="s-loja" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">&#127978; lojinha</span></div>
  <p style="font-size:12px;color:var(--muted);padding:.75rem 1rem;line-height:1.6">Veja os itens e seus precos. Compre presencialmente na feirinha!</p>
  <div class="loja-grid" id="loja-grid"><div class="empty" style="grid-column:1/-1">carregando...</div></div>
</div>

<!-- LOJINHA ADMIN -->
<div id="s-loja-admin" class="screen">
  <div class="topbar gold-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">gerir loja <span class="tag-a">admin</span></span></div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group">
      <label class="form-label">foto do item</label>
      <div class="foto-placeholder" id="loja-ph" onclick="document.getElementById('loja-foto-inp').click()"><span>&#128247;</span><p>toque para escolher foto</p></div>
      <img class="foto-preview" id="loja-foto-prev" src="" alt=""/>
      <input type="file" id="loja-foto-inp" accept="image/*" style="display:none" onchange="previewFoto(this,'loja-foto-prev','loja-ph')"/>
    </div>
    <div class="form-group"><label class="form-label">nome</label><input class="form-input" id="loja-nome" type="text" placeholder="Ex: Brigadeiro"/></div>
    <div class="form-group"><label class="form-label">preco em dracmas</label><input class="form-input" id="loja-preco" type="number" min="1" placeholder="Ex: 10" inputmode="numeric"/></div>
    <div class="err" id="loja-err"></div>
    <button class="btn-p" id="loja-btn" onclick="adicionarItem()">adicionar item</button>
  </div>
  <div class="sec-hd gold">itens na loja</div>
  <div class="loja-grid" id="loja-admin-grid"><div class="empty" style="grid-column:1/-1">carregando...</div></div>
</div>

<!-- PERFIL PROPRIO -->
<div id="s-perfil" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">meu perfil</span></div>
  <div class="perfil-hero">
    <div class="perfil-avatar" id="pf-avatar" onclick="document.getElementById('pf-foto-inp').click()">
      <span id="pf-initials"></span><img id="pf-img" src="" alt="" style="display:none"/>
      <div class="perfil-av-edit">&#9998;</div>
    </div>
    <input type="file" id="pf-foto-inp" accept="image/*" style="display:none" onchange="salvarFotoPerfil(this)"/>
    <div class="perfil-name" id="pf-name"></div>
    <div class="perfil-user" id="pf-user"></div>
  </div>
  <div class="stats-row">
    <div class="stat"><div class="stat-n" id="pf-saldo">0</div><div class="stat-l">saldo</div></div>
    <div class="stat"><div class="stat-n" id="pf-recv">0</div><div class="stat-l">recebidos</div></div>
    <div class="stat"><div class="stat-n" id="pf-sent">0</div><div class="stat-l">enviados</div></div>
  </div>
  <div class="info-list">
    <div class="info-row"><span class="info-key">usuario</span><span class="info-val" id="pf-username"></span></div>
    <div class="info-row"><span class="info-key">membro desde</span><span class="info-val" id="pf-data"></span></div>
    <div class="info-row"><span class="info-key">status</span><span class="info-val" id="pf-status"></span></div>
  </div>
  <div style="padding:.75rem 1rem">
    <button class="btn-p" onclick="goTo('s-change-pw')" style="margin-bottom:.75rem">mudar senha &#128273;</button>
    <button class="btn-s" onclick="doLogout()">sair da conta</button>
  </div>
</div>

<!-- PERFIL PUBLICO -->
<div id="s-perfil-pub" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title" id="pp-title">perfil</span></div>
  <div class="perfil-hero">
    <div class="perfil-avatar" style="cursor:default"><span id="pp-initials"></span><img id="pp-img" src="" alt="" style="display:none"/></div>
    <div class="perfil-name" id="pp-name"></div>
    <div class="perfil-user" id="pp-user"></div>
  </div>
  <div class="stats-row">
    <div class="stat"><div class="stat-n" id="pp-saldo">0</div><div class="stat-l">saldo</div></div>
    <div class="stat"><div class="stat-n" id="pp-recv">0</div><div class="stat-l">recebidos</div></div>
    <div class="stat"><div class="stat-n" id="pp-sent">0</div><div class="stat-l">enviados</div></div>
  </div>
  <div class="info-list">
    <div class="info-row"><span class="info-key">membro desde</span><span class="info-val" id="pp-data"></span></div>
    <div class="info-row"><span class="info-key">status</span><span class="info-val" id="pp-status"></span></div>
  </div>
</div>

<!-- COMUNIDADE -->
<div id="s-comunidade" class="screen">
  <div class="topbar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">&#128101; comunidade</span></div>
  <div class="search-bar"><span class="search-icon">&#128269;</span><input class="search-inp" id="com-search" type="text" placeholder="buscar membro..." oninput="filtrarCom(this.value)"/></div>
  <div id="com-list"><div class="empty">carregando...</div></div>
</div>

<!-- RELATORIO -->
<div id="s-relatorio" class="screen">
  <div class="topbar gold-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">relatorio <span class="tag-a">admin</span></span></div>
  <div class="mes-tabs">
    <div class="mes-tab active" id="tab-atual" onclick="switchMes('atual')">mes atual</div>
    <div class="mes-tab" id="tab-ant" onclick="switchMes('anterior')">mes anterior</div>
  </div>
  <div id="rel-content"><div class="empty" style="padding:2rem">carregando...</div></div>
  <div style="padding:0 1rem 1rem">
    <button class="btn-p" onclick="gerarPDF()">&#11015; baixar PDF</button>
  </div>
</div>

<!-- ADMIN GERENCIAR -->
<div id="s-admin" class="screen">
  <div class="topbar gold-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">gerenciar <span class="tag-a">admin</span></span></div>
  <div class="tabs">
    <button class="tab active" id="tab-give" onclick="switchAdminTab('give')">+ dar</button>
    <button class="tab" id="tab-take" onclick="switchAdminTab('take')">- retirar</button>
  </div>
  <div class="form-section" id="give-form" style="padding-top:.75rem">
    <div class="form-group"><label class="form-label">membro</label><select class="form-input" id="ag-member"></select></div>
    <div class="form-group"><label class="form-label">categoria</label><select class="form-input" id="ag-cat"><option value="culto">Culto</option><option value="missao">Missao</option><option value="evento">Evento</option><option value="estudo">Estudo / Celula</option><option value="conquista">Conquista</option><option value="presente">Presente</option><option value="outros">Outros</option></select></div>
    <div class="form-group"><label class="form-label">quantidade</label><input class="form-input" id="ag-amt" type="number" min="1" placeholder="0" inputmode="numeric"/></div>
    <div class="form-group"><label class="form-label">observacao (opcional)</label><input class="form-input" id="ag-obs" type="text" placeholder="ex: presenca no culto"/></div>
    <div class="err" id="ag-err"></div>
    <button class="btn-p" id="ag-btn" onclick="doDistribute()">dar dracmas</button>
  </div>
  <div class="form-section" id="take-form" style="display:none;padding-top:.75rem">
    <div class="form-group"><label class="form-label">membro</label><select class="form-input" id="at-member"></select></div>
    <div class="form-group"><label class="form-label">categoria</label><select class="form-input" id="at-cat"><option value="penalidade">Penalidade</option><option value="outros">Outros</option></select></div>
    <div class="form-group"><label class="form-label">quantidade</label><input class="form-input" id="at-amt" type="number" min="1" placeholder="0" inputmode="numeric"/></div>
    <div class="form-group"><label class="form-label">observacao (opcional)</label><input class="form-input" id="at-obs" type="text" placeholder="ex: motivo"/></div>
    <div class="err" id="at-err"></div>
    <button class="btn-p danger" id="at-btn" onclick="doDeduct()">retirar dracmas</button>
  </div>
  <div class="sec-hd gold">membros ativos</div>
  <div class="export-btns">
    <button class="btn-p" onclick="exportCSV()" style="font-size:13px;padding:11px">&#128196; CSV</button>
    <button class="btn-p" onclick="exportPDFMembers()" style="font-size:13px;padding:11px">&#128209; PDF</button>
  </div>
  <div class="member-list" id="admin-members"><div class="empty">carregando...</div></div>
</div>

<!-- PENDENTES -->
<div id="s-pending" class="screen">
  <div class="topbar gold-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">aprovacao de contas</span></div>
  <div class="member-list" id="pending-list"><div class="empty">carregando...</div></div>
</div>

<!-- EVENTO - TELA PRINCIPAL -->
<div id="s-evento" class="screen">
  <div class="topbar ev-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title" id="ev-topbar-title">Evento</span></div>
  <div class="ev-header-card">
    <div class="ev-header-top">
      <div class="ev-header-icon">&#9876;</div>
      <div>
        <div class="ev-header-name" id="ev-header-name">Evento ADC</div>
        <div class="ev-header-sub">Gincana em andamento</div>
      </div>
      <div class="ev-live" style="margin-left:auto"></div>
    </div>
    <div class="ev-stats-row">
      <div class="ev-stat"><div class="ev-stat-n" id="ev-stat-times">4</div><div class="ev-stat-l">times</div></div>
      <div class="ev-stat"><div class="ev-stat-n" id="ev-stat-membros">0</div><div class="ev-stat-l">membros</div></div>
      <div class="ev-stat"><div class="ev-stat-n" id="ev-stat-moeda">Prata</div><div class="ev-stat-l">moeda</div></div>
    </div>
  </div>
  <div class="my-team-card" id="my-team-card" style="display:none">
    <div class="my-team-color" id="my-team-color"></div>
    <div class="my-team-info">
      <div class="my-team-name" id="my-team-name">Sem time</div>
      <div class="my-team-sub" id="my-team-sub"></div>
    </div>
    <div class="my-team-pts" id="my-team-pts">0 &#11042;</div>
  </div>
  <div class="ev-tabs-row">
    <button class="ev-tab active" id="ev-tab-rank" onclick="switchEvTab('rank',this)">ranking</button>
    <button class="ev-tab" id="ev-tab-wallet" onclick="switchEvTab('wallet',this)">minha prata</button>
    <button class="ev-tab" id="ev-tab-admin" onclick="switchEvTab('adm',this)" style="display:none">admin &#128081;</button>
  </div>
  <!-- RANKING -->
  <div class="ev-content active" id="ev-rank" style="padding-bottom:.5rem">
    <div id="ev-ranking-list"><div class="empty">carregando...</div></div>
  </div>
  <!-- WALLET PRATA -->
  <div class="ev-content" id="ev-wallet">
    <div class="prata-wallet">
      <div class="prata-label" id="ev-prata-label">saldo de prata</div>
      <div><span class="prata-amount" id="ev-prata-bal">0</span><span class="prata-unit">&#11042;</span></div>
      <div class="prata-actions">
        <button class="prata-act" onclick="goTo('s-ev-transfer')">&#8599; enviar</button>
        <button class="prata-act" onclick="goTo('s-ev-qr')">&#128247; QR</button>
        <button class="prata-act" onclick="goTo('s-ev-history')">&#128203; extrato</button>
      </div>
    </div>
    <div class="notice"><p>&#9888;&#65039; Esta moeda e temporaria e exclusiva do evento. Ao encerrar, o saldo sera zerado.</p></div>
    <div class="sec-hd">historico de prata</div>
    <div class="tx-list" id="ev-wallet-txs" style="padding:0"><div class="empty">carregando...</div></div>
  </div>
  <!-- ADMIN EV -->
  <div class="ev-content" id="ev-adm">
    <div class="ev-toggle-row">
      <div><div class="ev-toggle-label">Evento ativo</div><div class="ev-toggle-sub" id="ev-toggle-sub">...</div></div>
      <div class="toggle-track" id="ev-toggle" onclick="toggleEvento()"><div class="toggle-knob"></div></div>
    </div>
    <div class="form-group" style="margin-bottom:.75rem">
      <label class="form-label" style="color:rgba(196,181,253,.6)">nome da moeda do evento</label>
      <div class="nm-input-row">
        <input class="nm-input" id="ev-moeda-nome-inp" type="text" placeholder="Ex: Prata, Cristal..."/>
        <button class="nm-save" onclick="salvarNomeMoeda()">salvar</button>
      </div>
    </div>
    <div class="ev-admin-card">
      <div class="ev-admin-title">acoes rapidas</div>
      <div class="ev-admin-grid">
        <div class="ev-ag-btn" onclick="goTo('s-ev-dar')"><div class="ev-ag-icon">&#11042;</div><div class="ev-ag-label">dar moeda</div></div>
        <div class="ev-ag-btn" onclick="goTo('s-ev-pts')"><div class="ev-ag-icon">&#9876;</div><div class="ev-ag-label">pts do time</div></div>
        <div class="ev-ag-btn" onclick="goTo('s-ev-times')"><div class="ev-ag-icon">&#128101;</div><div class="ev-ag-label">gerir times</div></div>
        <div class="ev-ag-btn" onclick="encerrarEvento()"><div class="ev-ag-icon">&#127942;</div><div class="ev-ag-label">encerrar</div></div>
        <div class="ev-ag-btn" onclick="deletarEvento()" style="border-color:rgba(239,68,68,.4);background:rgba(239,68,68,.15)"><div class="ev-ag-icon">&#128465;</div><div class="ev-ag-label" style="color:#fca5a5">deletar</div></div>
      </div>
    </div>
    <div class="sec-hd" style="padding-left:0;color:rgba(196,181,253,.5)">ranking individual</div>
    <div id="ev-ranking-individual"><div class="empty">carregando...</div></div>
  </div>
</div>

<!-- EV PRATA SCREEN (from home) -->
<div id="s-ev-prata" class="screen">
  <div class="topbar ev-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title" id="ev-prata-screen-title">Prata &middot; Evento</span></div>
  <div style="padding:1rem">
    <div class="prata-wallet">
      <div class="prata-label" id="ev-prata-label2">saldo de prata</div>
      <div><span class="prata-amount" id="ev-prata-bal2">0</span><span class="prata-unit">&#11042;</span></div>
      <div class="prata-actions">
        <button class="prata-act" onclick="goTo('s-ev-transfer')">&#8599; enviar</button>
        <button class="prata-act" onclick="goTo('s-ev-qr')">&#128247; QR</button>
        <button class="prata-act" onclick="goTo('s-ev-history')">&#128203; extrato</button>
      </div>
    </div>
    <div class="notice"><p>&#9888;&#65039; Esta moeda e temporaria. Ao fim do evento, o saldo sera zerado.</p></div>
    <div class="sec-hd" style="padding-left:0">historico</div>
    <div class="tx-list" id="ev-prata-txs" style="padding:0"><div class="empty">carregando...</div></div>
  </div>
</div>

<!-- EV TRANSFER -->
<div id="s-ev-transfer" class="screen">
  <div class="topbar ev-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title" id="ev-tr-title">enviar prata</span></div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group"><label class="form-label">para quem</label><select class="form-input" id="ev-tr-to"></select></div>
    <div class="form-group"><label class="form-label" id="ev-tr-qty-label">quantidade de prata</label><input class="form-input" id="ev-tr-amt" type="number" min="1" placeholder="0" inputmode="numeric"/></div>
    <div class="form-group"><label class="form-label">mensagem (opcional)</label><input class="form-input" id="ev-tr-msg" type="text" placeholder="ex: boa sorte!"/></div>
    <div class="err" id="ev-tr-err"></div>
    <button class="btn-p ev" id="ev-tr-btn" onclick="confirmarEvTransfer()">enviar</button>
  </div>
</div>

<!-- EV HISTORY -->
<div id="s-ev-history" class="screen">
  <div class="topbar ev-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title" id="ev-hist-title">extrato de prata</span></div>
  <div class="tx-list" id="ev-hist-txs"><div class="empty">carregando...</div></div>
</div>

<!-- EV DAR MOEDA (admin) -->
<div id="s-ev-dar" class="screen">
  <div class="topbar ev-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title" id="ev-dar-title">dar prata <span class="tag-ev">admin</span></span></div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group"><label class="form-label">membro</label><select class="form-input" id="ev-dar-member"></select></div>
    <div class="form-group"><label class="form-label" id="ev-dar-qty-label">quantidade de prata</label><input class="form-input" id="ev-dar-amt" type="number" min="1" placeholder="0" inputmode="numeric"/></div>
    <div class="form-group"><label class="form-label">motivo</label><input class="form-input" id="ev-dar-obs" type="text" placeholder="ex: missao cumprida!"/></div>
    <div class="err" id="ev-dar-err"></div>
    <button class="btn-p ev" id="ev-dar-btn" onclick="doEvDar()">dar moeda &#11042;</button>
  </div>
</div>

<!-- EV PTS TIME (admin) -->
<div id="s-ev-pts" class="screen">
  <div class="topbar ev-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">pontos do time <span class="tag-ev">admin</span></span></div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group"><label class="form-label">time</label><select class="form-input" id="ev-pts-team"></select></div>
    <div class="form-group"><label class="form-label">operacao</label><select class="form-input" id="ev-pts-op"><option value="add">adicionar pontos</option><option value="sub">remover pontos</option></select></div>
    <div class="form-group"><label class="form-label">quantidade</label><input class="form-input" id="ev-pts-amt" type="number" min="1" placeholder="0" inputmode="numeric"/></div>
    <div class="form-group"><label class="form-label">motivo</label><input class="form-input" id="ev-pts-obs" type="text" placeholder="ex: venceram o desafio!"/></div>
    <div class="err" id="ev-pts-err"></div>
    <button class="btn-p ev" id="ev-pts-btn" onclick="doEvPts()">confirmar</button>
  </div>
</div>

<!-- EV GERIR TIMES (admin) -->
<div id="s-ev-times" class="screen">
  <div class="topbar ev-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">gerir times <span class="tag-ev">admin</span></span></div>
  <div style="padding:1rem" id="ev-times-list"><div class="empty">carregando...</div></div>
  <div style="padding:0 1rem">
    <button class="btn-p ev" onclick="goTo('s-ev-criar-time')">+ criar time</button>
  </div>
</div>

<!-- EV CRIAR TIME (admin) -->
<div id="s-ev-criar-time" class="screen">
  <div class="topbar ev-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">criar time <span class="tag-ev">admin</span></span></div>
  <div class="form-section" style="padding-top:1.5rem">

    <!-- FOTO -->
    <div class="form-group">
      <label class="form-label">foto do time (opcional)</label>
      <div class="foto-placeholder" id="ct-foto-ph" style="background:#1e0d44;border-color:rgba(167,139,250,.3)" onclick="document.getElementById('ct-foto-inp').click()">
        <span>&#128247;</span>
        <p style="color:rgba(196,181,253,.5);font-size:12px">toque para escolher foto</p>
      </div>
      <img class="foto-preview" id="ct-foto-prev" src="" alt=""/>
      <input type="file" id="ct-foto-inp" accept="image/*" style="display:none" onchange="previewFoto(this,'ct-foto-prev','ct-foto-ph')"/>
    </div>

    <!-- NOME E COR -->
    <div class="form-group"><label class="form-label">nome do time</label><input class="form-input" id="ct-nome" type="text" placeholder="Ex: Time Roxo"/></div>
    <div class="form-group"><label class="form-label">cor do time</label><input class="form-input" id="ct-cor" type="color" value="#5b21b6" style="height:48px;padding:8px"/></div>

    <!-- MODO -->
    <div class="form-group">
      <label class="form-label">tipo de participacao</label>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px">
        <label style="display:flex;align-items:center;gap:10px;background:#1e0d44;border:1px solid rgba(167,139,250,.25);border-radius:12px;padding:12px;cursor:pointer">
          <input type="radio" name="ct-modo" value="unico" checked style="accent-color:#7c3aed;width:18px;height:18px"/>
          <div>
            <div style="font-size:13px;font-weight:700;color:#e9d5ff">1 time por membro</div>
            <div style="font-size:11px;color:rgba(196,181,253,.55);margin-top:2px">ao adicionar, remove automaticamente de outros times</div>
          </div>
        </label>
        <label style="display:flex;align-items:center;gap:10px;background:#1e0d44;border:1px solid rgba(167,139,250,.25);border-radius:12px;padding:12px;cursor:pointer">
          <input type="radio" name="ct-modo" value="multiplo" style="accent-color:#7c3aed;width:18px;height:18px"/>
          <div>
            <div style="font-size:13px;font-weight:700;color:#e9d5ff">varios times por membro</div>
            <div style="font-size:11px;color:rgba(196,181,253,.55);margin-top:2px">membro pode estar em mais de um time</div>
          </div>
        </label>
      </div>
    </div>

    <!-- MEMBROS -->
    <div class="form-group">
      <label class="form-label">adicionar membros agora (opcional)</label>
      <div class="ms-wrap" id="ct-ms-wrap">
        <div class="ms-trigger" id="ct-ms-trigger" onclick="toggleMS('ct')">nenhum selecionado</div>
        <div class="ms-dropdown" id="ct-ms-dropdown">
          <div class="ms-search"><input type="text" placeholder="buscar membro..." oninput="filterMS('ct',this.value)" id="ct-ms-search"/></div>
          <div id="ct-ms-list"><div class="ms-empty">carregando...</div></div>
        </div>
      </div>
    </div>

    <div class="err" id="ct-err"></div>
    <button class="btn-p ev" id="ct-btn" onclick="criarTime()">criar time</button>
  </div>
</div>

<!-- EV ADMIN HOME (acesso rapido do painel) -->
<div id="s-ev-admin-home" class="screen">
  <div class="topbar gold-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title" id="ev-admin-home-title">evento <span class="tag-a">admin</span></span></div>
  <div style="padding:1rem">
    <div class="ev-toggle-row">
      <div><div class="ev-toggle-label" id="ev-ah-status">Evento inativo</div><div class="ev-toggle-sub" id="ev-ah-name">nenhum evento ativo</div></div>
      <div class="toggle-track off" id="ev-ah-toggle" onclick="toggleEvento()"><div class="toggle-knob"></div></div>
    </div>
    <div class="ev-admin-card">
      <div class="ev-admin-title">gerenciar evento</div>
      <div class="ev-admin-grid">
        <div class="ev-ag-btn" onclick="goTo('s-ev-dar')"><div class="ev-ag-icon">&#11042;</div><div class="ev-ag-label">dar moeda</div></div>
        <div class="ev-ag-btn" onclick="goTo('s-ev-pts')"><div class="ev-ag-icon">&#9876;</div><div class="ev-ag-label">pts do time</div></div>
        <div class="ev-ag-btn" onclick="goTo('s-ev-times')"><div class="ev-ag-icon">&#128101;</div><div class="ev-ag-label">gerir times</div></div>
        <div class="ev-ag-btn" onclick="goTo('s-ev-criar-evento')"><div class="ev-ag-icon">&#43;</div><div class="ev-ag-label">novo evento</div></div>
      </div>
    </div>
    <div class="sec-hd gold">ranking atual</div>
    <div id="ev-ah-ranking"><div class="empty">sem evento ativo</div></div>
  </div>
</div>

<!-- EV CRIAR EVENTO (admin) -->
<div id="s-ev-criar-evento" class="screen">
  <div class="topbar gold-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title">novo evento <span class="tag-a">admin</span></span></div>
  <div class="form-section" style="padding-top:1.5rem">
    <div class="form-group"><label class="form-label">nome do evento</label><input class="form-input" id="ce-nome" type="text" placeholder="Ex: Retiro ADC 2025"/></div>
    <div class="form-group"><label class="form-label">nome da moeda</label><input class="form-input" id="ce-moeda" type="text" placeholder="Ex: Prata"/></div>
    <div class="form-group">
      <label class="form-label">regra de times</label>
      <label style="display:flex;align-items:flex-start;gap:12px;background:var(--card2);border:1.5px solid var(--border);border-radius:var(--rs);padding:13px;cursor:pointer;margin-top:4px">
        <input type="checkbox" id="ce-nao-repetir" checked style="width:18px;height:18px;margin-top:1px;accent-color:var(--ev3);flex-shrink:0"/>
        <div>
          <div style="font-size:14px;font-weight:700;color:var(--text)">nao repetir membro em times</div>
          <div style="font-size:12px;color:var(--muted);margin-top:3px;line-height:1.5">ao adicionar alguem a um time, ele sai automaticamente dos outros. desmarque para permitir membro em varios times.</div>
        </div>
      </label>
    </div>
    <div class="err" id="ce-err"></div>
    <button class="btn-p ev" id="ce-btn" onclick="criarEvento()">criar e ativar evento</button>
  </div>
</div>

<!-- EDIT LOJA MODAL -->

<!-- EV QR CODE -->
<div id="s-ev-qr" class="screen">
  <div class="topbar ev-bar"><button class="topbar-back" onclick="goBack()">&#8592;</button><span class="topbar-title" id="ev-qr-title">QR · Evento</span></div>
  <div style="text-align:center;padding:1.5rem 1rem 1rem">
    <p style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:.25rem">QR do Evento</p>
    <p style="font-size:13px;color:var(--muted)" id="ev-qr-sub">mostre para receber prata</p>
  </div>
  <div class="qr-tabs">
    <div class="qr-tab active" id="ev-qr-tab-meu" onclick="switchEvQRTab('meu')">Meu QR</div>
    <div class="qr-tab" id="ev-qr-tab-scan" onclick="switchEvQRTab('scan')">Escanear</div>
  </div>
  <div id="ev-qr-panel-meu" style="text-align:center;padding:0 1rem 1rem">
    <p style="font-size:13px;color:var(--muted);margin-bottom:1rem">Mostre este QR para receber a moeda do evento</p>
    <div class="qr-box" id="ev-qr-canvas"></div>
    <p style="font-size:13px;color:var(--muted);margin-top:1rem" id="ev-qr-label"></p>
    <div style="margin-top:1rem;display:flex;gap:8px">
      <div id="ev-qr-livre-btn" onclick="setEvQRMode('livre')" style="flex:1;background:var(--card2);border:1px solid var(--border);border-radius:var(--rs);padding:10px;text-align:center;cursor:pointer"><div style="font-size:11px;font-weight:700;color:var(--muted)">valor livre</div></div>
      <div id="ev-qr-valor-btn" onclick="setEvQRMode('valor')" style="flex:1;background:var(--card2);border:1px solid var(--border);border-radius:var(--rs);padding:10px;text-align:center;cursor:pointer"><div style="font-size:11px;font-weight:700;color:var(--muted)">definir valor</div></div>
    </div>
    <div id="ev-qr-valor-input" style="display:none;margin-top:.75rem"><input class="form-input" id="ev-qr-amt" type="number" min="1" placeholder="valor da moeda" inputmode="numeric" oninput="gerarEvQR()"/></div>
  </div>
  <div id="ev-qr-panel-scan" style="display:none">
    <div class="scan-area">
      <div style="font-size:52px">&#128247;</div>
      <p style="font-size:14px;color:var(--muted);line-height:1.5" id="ev-qr-scan-txt">Aponte a camera para o QR de outro membro para enviar a moeda do evento</p>
      <button class="scan-btn" style="background:linear-gradient(135deg,var(--ev2),var(--ev3));color:#e9d5ff" onclick="iniciarEvScan()">Abrir camera</button>
    </div>
    <div id="ev-qr-reader-wrap" style="padding:1rem;display:none">
      <div id="ev-qr-reader" style="width:100%;border-radius:16px;overflow:hidden"></div>
      <button class="btn-p danger" style="margin-top:.75rem" onclick="pararEvScan()">cancelar</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-loja-edit">
  <div class="modal">
    <div class="modal-title">editar item</div>
    <input type="hidden" id="loja-edit-id"/>
    <div class="form-group"><label class="form-label">nome</label><input class="form-input" id="loja-edit-nome" type="text"/></div>
    <div class="form-group"><label class="form-label">preco</label><input class="form-input" id="loja-edit-preco" type="number" min="1" inputmode="numeric"/></div>
    <div class="err" id="loja-edit-err"></div>
    <div class="modal-acts">
      <button class="btn-s" onclick="closeModal('modal-loja-edit')">cancelar</button>
      <button class="btn-p" id="loja-edit-btn" onclick="salvarEdicaoLoja()">salvar</button>
    </div>
  </div>
</div>

<!-- CONFIRM MODAL -->
<div class="modal-overlay" id="modal-confirm">
  <div class="modal">
    <div class="modal-title" id="modal-title">confirmar</div>
    <div class="modal-body" id="modal-body"></div>
    <div class="modal-acts">
      <button class="btn-s" onclick="closeModal('modal-confirm')">cancelar</button>
      <button class="btn-p" id="modal-ok-btn">confirmar</button>
    </div>
  </div>
</div>

<!-- BOTTOM NAV -->
<div class="bottom-nav" id="bottom-nav">
  <div class="bn-item active" id="bn-home" onclick="goTo('s-home');setNav('bn-home')">
    <div class="bn-icon">&#127968;</div><div class="bn-label">inicio</div>
  </div>
  <div class="bn-item" id="bn-transfer" onclick="goTo('s-transfer');setNav('bn-transfer')">
    <div class="bn-icon">&#8599;</div><div class="bn-label">enviar</div>
  </div>
  <div class="bn-item" id="bn-qr" onclick="goTo('s-qr');setNav('bn-qr')">
    <div class="bn-icon">&#128247;</div><div class="bn-label">QR</div>
  </div>
  <div class="bn-item" id="bn-comunidade" onclick="goTo('s-comunidade');setNav('bn-comunidade')">
    <div class="bn-icon">&#128101;</div><div class="bn-label">turma</div>
  </div>
  <div class="bn-item" id="bn-perfil" onclick="goTo('s-perfil');setNav('bn-perfil')">
    <div class="bn-icon">&#128100;</div><div class="bn-label">perfil</div>
  </div>
</div>

<div id="toast" class="toast"></div>

<script type="module">

import{initializeApp}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import{getFirestore,doc,getDoc,setDoc,updateDoc,deleteDoc,collection,getDocs,addDoc,query,where,orderBy,limit,serverTimestamp,runTransaction}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const FC={apiKey:"AIzaSyA-t2k2EVpfv-xqtQxtq4bt043tOqTtTDw",authDomain:"banco-dracmas.firebaseapp.com",projectId:"banco-dracmas",storageBucket:"banco-dracmas.firebasestorage.app",messagingSenderId:"755685605861",appId:"1:755685605861:web:651fd974ad8a784af7af0c"};
const db=getFirestore(initializeApp(FC));

// ── STATE ──
let CU=null,allMembers=[],histAll=[],mhistAll=[],evHistAll=[],relAtual=[],relAnt=[],relMode='atual',evData=null,myTeam=null,evMoeda='Prata';
const navStack=[];

// ── CACHE DE USUARIOS ──
// Evita buscar todos os usuarios do Firestore multiplas vezes
let _usersCache=null,_usersCacheTs=0;
const CACHE_TTL=60000; // 1 minuto
async function getUsers(forceRefresh=false){
  const now=Date.now();
  if(!forceRefresh&&_usersCache&&(now-_usersCacheTs)<CACHE_TTL)return _usersCache;
  const snap=await getDocs(collection(db,'users'));
  _usersCache=snap;
  _usersCacheTs=now;
  return snap;
}
function invalidateUsersCache(){_usersCache=null;_usersCacheTs=0;}

// ── CATS ──
const CATS={culto:{icon:'⛪',cls:'cc',label:'Culto'},missao:{icon:'🙏',cls:'cm',label:'Missao'},evento:{icon:'🎉',cls:'ce',label:'Evento'},estudo:{icon:'📖',cls:'cs',label:'Estudo'},conquista:{icon:'🏆',cls:'cq',label:'Conquista'},presente:{icon:'🎁',cls:'cp',label:'Presente'},penalidade:{icon:'⚠️',cls:'cn',label:'Penalidade'},transferencia:{icon:'↔️',cls:'ct',label:'Transferencia'},outros:{icon:'📝',cls:'co',label:'Outros'},evento_moeda:{icon:'⬡',cls:'cev',label:'Evento'}};

// ── UTILS ──
const inits=n=>n.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
const fmtDt=ts=>{if(!ts)return'';const d=ts.toDate?ts.toDate():new Date(ts);return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'2-digit'})+' '+d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});};
const fmtDtShort=ts=>{if(!ts)return'';const d=ts.toDate?ts.toDate():new Date(ts);return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'});};
const debounce=(fn,ms=250)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};};
window.filtrarCom=debounce(function(q){
  const f=q.trim()?comAll.filter(m=>m.name.toLowerCase().includes(q.toLowerCase())||m.id.toLowerCase().includes(q.toLowerCase())):comAll;
  renderCom(f);
},200);
window.buscarExtrato=debounce(function(prefix,q){
  const txs=prefix==='history'?histAll:mhistAll;
  const uid=prefix==='history'?CU.id:window._mhUid;
  const txt=q.trim().toLowerCase();
  const f=txt?txs.filter(t=>(t.desc||'').toLowerCase().includes(txt)||(t.obs||'').toLowerCase().includes(txt)||(CATS[t.category]?.label||'').toLowerCase().includes(txt)):txs;
  document.querySelectorAll(`#${prefix==='history'?'h':'mh'}-filters .chip`).forEach(c=>c.classList.toggle('active',c.dataset.key==='all'));
  document.getElementById(prefix==='history'?'h-txs':'mh-txs').innerHTML=f.length?f.map(t=>txHtml(t,uid)).join(''):'<div class="empty">nenhuma transacao</div>';
},200);

function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.style.display='block';clearTimeout(window._tt);window._tt=setTimeout(()=>t.style.display='none',2500);}
function showErr(id,msg){const el=document.getElementById(id);if(!el)return;el.textContent=msg;el.style.display='block';setTimeout(()=>el.style.display='none',4000);}
function showSuc(id,msg){const el=document.getElementById(id);if(!el)return;el.textContent=msg;el.style.display='block';setTimeout(()=>el.style.display='none',4000);}
function setLoad(id,on){const b=document.getElementById(id);if(!b)return;b.disabled=on;if(on){b.dataset.o=b.innerHTML;b.innerHTML='<span class="spin"></span>aguarde...';}else b.innerHTML=b.dataset.o||b.innerHTML;}

// ── MODAL ──
window.openModal=function(title,body,fn,danger=false){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-body').textContent=body;
  const btn=document.getElementById('modal-ok-btn');
  btn.className=danger?'btn-p danger':'btn-p';
  btn.onclick=()=>{closeModal('modal-confirm');fn();};
  document.getElementById('modal-confirm').classList.add('active');
};
window.closeModal=id=>document.getElementById(id).classList.remove('active');

// ── THEME ──
function applyTheme(t){
  document.documentElement.setAttribute('data-theme',t);
  localStorage.setItem('dracmas-theme',t);
  const dark=t==='dark';
  const ic=document.getElementById('theme-icon');
  const lb=document.getElementById('theme-label');
  const kn=document.getElementById('theme-knob');
  if(ic)ic.textContent=dark?'☀️':'🌙';
  if(lb)lb.textContent=dark?'mudar para light mode':'mudar para dark mode';
  if(kn)kn.style.transform=dark?'translateX(24px)':'translateX(0)';
}
window.toggleTheme=()=>applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark');
function initTheme(){applyTheme(localStorage.getItem('dracmas-theme')||'light');}

// ── PW TOGGLE ──
window.tglPw=function(id,btn){const i=document.getElementById(id);i.type=i.type==='password'?'text':'password';btn.textContent=i.type==='text'?'🙈':'👁';};

// ── PW STRENGTH ──
window.checkStr=function(pw,barId,lblId){
  const bar=document.getElementById(barId),lbl=document.getElementById(lblId);
  if(!pw){bar.className='pw-bar';lbl.textContent='';return;}
  let s=0;if(pw.length>=6)s++;if(pw.length>=10)s++;if(/[A-Z]/.test(pw))s++;if(/[0-9]/.test(pw))s++;if(/[^A-Za-z0-9]/.test(pw))s++;
  const r=s<=1?{c:'weak',l:'fraca'}:s<=3?{c:'medium',l:'media'}:{c:'strong',l:'forte'};
  bar.className='pw-bar '+r.c;lbl.textContent='senha '+r.l;lbl.style.color=r.c==='weak'?'var(--red)':r.c==='medium'?'var(--gold)':'var(--green)';
};

// ── NAVIGATION ──
const NAV_SCREENS=['s-home','s-transfer','s-qr','s-comunidade','s-perfil','s-history','s-loja','s-mural','s-notifs','s-settings','s-change-pw','s-ev-prata','s-evento','s-ev-history','s-ev-transfer','s-perfil-pub'];
window.goTo=function(id,isBack=false){
  const cur=document.querySelector('.screen.active')?.id;
  if(!isBack&&cur&&cur!==id)navStack.push(cur);
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById(id);
  if(!el){console.warn('Screen not found:',id);return;}
  el.classList.add('active');
  window.scrollTo(0,0);
  updateNav(id);
  onScreenLoad(id);
};
window.goBack=function(){
  const cur=document.querySelector('.screen.active')?.id;
  while(navStack.length>0&&navStack[navStack.length-1]===cur)navStack.pop();
  goTo(navStack.length>0?navStack.pop():'s-home',true);
};

function updateNav(id){
  const nav=document.getElementById('bottom-nav');
  nav.classList.toggle('show',NAV_SCREENS.includes(id));
}
window.setNav=function(id){document.querySelectorAll('.bn-item').forEach(b=>b.classList.remove('active'));const el=document.getElementById(id);if(el)el.classList.add('active');};

function onScreenLoad(id){
  if(id==='s-transfer')loadTransferMembers();
  if(id==='s-history')loadHistory();
  if(id==='s-admin'){loadAdminSelects();loadAdminMembers();}
  if(id==='s-pending')loadPending();
  if(id==='s-notifs')loadNotifs();
  if(id==='s-mural')loadMural('mural-list',false);
  if(id==='s-mural-admin')loadMural('mural-admin-list',true);
  if(id==='s-loja')loadLoja('loja-grid',false);
  if(id==='s-loja-admin')loadLoja('loja-admin-grid',true);
  if(id==='s-perfil')loadPerfil();
  if(id==='s-comunidade')loadComunidade();
  if(id==='s-relatorio'){relMode='atual';document.getElementById('tab-atual').classList.add('active');document.getElementById('tab-ant').classList.remove('active');loadRelatorio();}
  if(id==='s-qr'){switchQRTab('meu');if(CU)gerarQR();}
  if(id==='s-evento')loadEvento();
  if(id==='s-ev-prata')loadEvPrata();
  if(id==='s-ev-history')loadEvHistory();
  if(id==='s-ev-dar')loadEvDarSelects();
  if(id==='s-ev-pts')loadEvPtsSelects();
  if(id==='s-ev-times')loadEvTimes();
  if(id==='s-ev-admin-home')loadEvAdminHome();
  if(id==='s-ev-transfer')loadEvTransferMembers();
  if(id==='s-ev-qr'){switchEvQRTab('meu');updateEvLabels();if(CU)gerarEvQR();const t=document.getElementById('ev-qr-title');if(t)t.textContent='QR · '+evMoeda;const s=document.getElementById('ev-qr-sub');if(s)s.textContent='mostre para receber '+evMoeda.toLowerCase();}
  if(id==='s-change-pw'){['cp-cur','cp-new','cp-new2'].forEach(i=>{const el=document.getElementById(i);if(el)el.value='';});['pw-b2','pw-l2'].forEach(i=>{const el=document.getElementById(i);if(el){el.className='pw-bar';el.textContent='';}});}
}

// ── TX HTML ──
function txHtml(tx,uid){
  const isIn=tx.to===uid;
  const cat=CATS[tx.category]||(isIn?CATS.outros:CATS.transferencia);
  return`<div class="tx-item">
    <div class="tx-icon ${cat.cls}">${cat.icon}</div>
    <div class="tx-info">
      <div class="tx-cat">${cat.label}</div>
      ${tx.desc?`<div class="tx-desc">${tx.desc}</div>`:''}
      ${tx.obs?`<div class="tx-obs">💬 ${tx.obs}</div>`:''}
      <div class="tx-date">${fmtDt(tx.createdAt)}</div>
    </div>
    <div class="tx-amt ${isIn?'in':'out'}">${isIn?'+':'-'}${tx.amount} ${tx.currency==='ev'?'⬡':'₯'}</div>
  </div>`;
}

// ── FILTERS ──
function buildFilters(cid,txs,uid){
  const el=document.getElementById(cid);if(!el)return;
  const cats=new Set(txs.map(t=>t.category).filter(Boolean));
  const chips=[{k:'all',l:'Todos'},...[...cats].map(k=>({k,l:(CATS[k]?.label||k)}))];
  el.innerHTML=chips.map(c=>`<div class="chip${c.k==='all'?' active':''}" data-key="${c.k}" onclick="applyFilter('${cid}','${c.k}')">${c.l}</div>`).join('');
}
window.applyFilter=function(cid,key){
  document.querySelectorAll(`#${cid} .chip`).forEach(c=>c.classList.toggle('active',c.dataset.key===key));
  const listId=cid==='h-filters'?'h-txs':'mh-txs';
  const txs=cid==='h-filters'?histAll:mhistAll;
  const uid=cid==='h-filters'?CU.id:window._mhUid;
  const f=key==='all'?txs:txs.filter(t=>t.category===key);
  document.getElementById(listId).innerHTML=f.length?f.map(t=>txHtml(t,uid)).join(''):'<div class="empty">nenhuma transacao</div>';
};
window.buscarExtrato=window.buscarExtrato; // definido com debounce acima

// ── LOGIN ──
window.doLogin=async function(){
  const u=document.getElementById('l-user').value.trim().toLowerCase();
  const p=document.getElementById('l-pw').value;
  if(!u||!p){showErr('l-err','preencha todos os campos');return;}
  setLoad('l-btn',true);
  try{
    const snap=await getDoc(doc(db,'users',u));
    if(!snap.exists()){showErr('l-err','usuario nao encontrado');return;}
    const data=snap.data();
    if(data.password!==p){showErr('l-err','senha incorreta');return;}
    if(data.status==='pending'){showErr('l-err','conta aguardando aprovacao ⏳');return;}
    if(data.status==='paused'){showErr('l-err','conta pausada. fale com o admin');return;}
    CU={id:u,...data};
    renderHome();
    goTo('s-home');
    document.getElementById('bottom-nav').classList.add('show');
    if(!CU.admin)checkBV();
  }catch(e){showErr('l-err','erro de conexao: '+e.message);}
  finally{setLoad('l-btn',false);}
};

// ── REGISTER ──
window.doRegister=async function(){
  const name=document.getElementById('r-name').value.trim();
  const u=document.getElementById('r-user').value.trim().toLowerCase().replace(/\s+/g,'');
  const p=document.getElementById('r-pw').value;
  const p2=document.getElementById('r-pw2').value;
  if(!name||!u||!p||!p2){showErr('r-err','preencha todos os campos');return;}
  if(p.length<6){showErr('r-err','senha minimo 6 caracteres');return;}
  if(p!==p2){showErr('r-err','as senhas nao coincidem');return;}
  if(!/^[a-z0-9._]+$/.test(u)){showErr('r-err','usuario: letras minusculas, numeros e ponto');return;}
  setLoad('r-btn',true);
  try{
    const ref=doc(db,'users',u);
    if((await getDoc(ref)).exists()){showErr('r-err','usuario ja existe');return;}
    await setDoc(ref,{name,password:p,balance:0,evBalance:0,admin:false,status:'pending',createdAt:serverTimestamp()});
    toast('solicitacao enviada! aguarde aprovacao.');
    goTo('s-login');
    document.getElementById('l-user').value=u;
  }catch(e){showErr('r-err','erro: '+e.message);}
  finally{setLoad('r-btn',false);}
};

// ── CHANGE PW ──
window.doChangePw=async function(){
  const cur=document.getElementById('cp-cur').value;
  const nw=document.getElementById('cp-new').value;
  const nw2=document.getElementById('cp-new2').value;
  if(!cur||!nw||!nw2){showErr('cp-err','preencha todos os campos');return;}
  if(cur!==CU.password){showErr('cp-err','senha atual incorreta');return;}
  if(nw.length<6){showErr('cp-err','minimo 6 caracteres');return;}
  if(nw!==nw2){showErr('cp-err','as senhas nao coincidem');return;}
  if(nw===cur){showErr('cp-err','use uma senha diferente');return;}
  setLoad('cp-btn',true);
  try{await updateDoc(doc(db,'users',CU.id),{password:nw});CU.password=nw;showSuc('cp-suc','senha alterada!');}
  catch(e){showErr('cp-err','erro: '+e.message);}
  finally{setLoad('cp-btn',false);}
};

// ── LOGOUT ──
window.doLogout=function(){
  CU=null;allMembers=[];navStack.length=0;evData=null;myTeam=null;
  invalidateUsersCache();
  document.getElementById('l-user').value='';
  document.getElementById('l-pw').value='';
  document.getElementById('bottom-nav').classList.remove('show');
  goTo('s-login');
};

// ── BOAS VINDAS ──
async function checkBV(){
  try{
    const ref=doc(db,'users',CU.id);
    const snap=await getDoc(ref);
    if(!snap.data().primeiroAcesso){
      document.getElementById('bv-nome').textContent='Ola, '+CU.name.split(' ')[0]+'!';
      document.getElementById('bv-overlay').classList.add('active');
      await updateDoc(ref,{primeiroAcesso:true});
    }
  }catch(e){}
}
window.fecharBV=()=>document.getElementById('bv-overlay').classList.remove('active');

// ── RENDER HOME ──
function renderHome(){
  document.getElementById('home-greeting').textContent='ola, '+CU.name.split(' ')[0]+'!';
  document.getElementById('home-bal').textContent=CU.balance;
  document.getElementById('home-user').textContent=CU.name+(CU.admin?' — administrador':'');
  const balCard=document.getElementById('home-bal-card');
  const topbar=document.getElementById('home-topbar');
  if(CU.admin){balCard.className='bal-card admin-card';topbar.className='topbar gold-bar';}
  else{balCard.className='bal-card member-card';topbar.className='topbar';}
  document.getElementById('member-actions').style.display=CU.admin?'none':'block';
  document.getElementById('admin-actions').style.display=CU.admin?'block':'none';
  loadHomeTxs();
  loadNotifBell();
  if(CU.admin)loadPendingBadge();
  loadEvStatus();
}

async function loadHomeTxs(){
  const el=document.getElementById('home-txs');
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const q=query(collection(db,'transactions'),where('participants','array-contains',CU.id),orderBy('createdAt','desc'),limit(5));
    const snap=await getDocs(q);
    el.innerHTML=snap.empty?'<div class="empty">nenhuma transacao ainda</div>':snap.docs.map(d=>txHtml(d.data(),CU.id)).join('');
  }catch(e){el.innerHTML=`<div class="empty">erro: ${e.message}</div>`;}
}

async function loadNotifBell(){
  try{
    const snap=await getDocs(query(collection(db,'notifications'),where('to','==',CU.id),where('read','==',false)));
    document.getElementById('notif-bell').textContent=snap.size>0?'🔔🔴':'🔔';
  }catch(e){}
}

async function loadPendingBadge(){
  try{
    const snap=await getDocs(query(collection(db,'users'),where('status','==','pending')));
    const b=document.getElementById('pending-badge');
    snap.size>0?(b.textContent=snap.size,b.style.display='inline-block'):b.style.display='none';
  }catch(e){}
}

async function loadEvStatus(){
  try{
    const evBtns=document.getElementById('ev-home-btns');
    const evBtnsAdmin=document.getElementById('ev-home-btns-admin');
    const adminEvLabel=document.getElementById('admin-ev-label');
    // busca qualquer evento (ativo OU pausado) — so some se admin deletar
    const snap=await getDocs(query(collection(db,'eventos'),orderBy('criadoEm','desc'),limit(1)));
    if(snap.empty){
      evData=null;
      if(evBtns)evBtns.style.display='none';
      if(evBtnsAdmin)evBtnsAdmin.style.display='none';
      if(adminEvLabel)adminEvLabel.textContent='evento';
      return;
    }
    evData=snap.docs[0].data();evData.id=snap.docs[0].id;
    evMoeda=evData.moeda||'Prata';
    // mostra botoes sempre que existe evento (mesmo pausado)
    if(evBtns)evBtns.style.display='block';
    if(evBtnsAdmin)evBtnsAdmin.style.display='block';
    const hn=document.getElementById('ev-home-name');
    const hna=document.getElementById('ev-home-name-admin');
    const hmb=document.getElementById('ev-moeda-home-btn');
    const evSubEl=document.querySelector('#ev-home-btns .ev-home-btn.ev-color .ev-btn-sub');
    if(hn)hn.textContent=evData.nome;
    if(hna)hna.textContent=evData.nome;
    if(hmb)hmb.textContent=evMoeda+' · Evento';
    if(evSubEl)evSubEl.textContent=evData.ativo?'gincana em andamento · toque para ver':'evento pausado · toque para ver';
    const liveDot=document.querySelector('#ev-home-btns .ev-live');
    if(liveDot)liveDot.style.background=evData.ativo?'#4ade80':'#f97316';
    if(adminEvLabel)adminEvLabel.textContent=evData.nome.slice(0,8);
    const evBal=CU.evBalance||0;
    const hb=document.getElementById('ev-prata-home-bal');
    if(hb)hb.textContent=evBal;
  }catch(e){console.log('loadEvStatus error:',e);}
}

// ── HISTORY ──
async function loadHistory(){
  const el=document.getElementById('h-txs');
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const q=query(collection(db,'transactions'),where('participants','array-contains',CU.id),orderBy('createdAt','desc'),limit(200));
    const snap=await getDocs(q);
    histAll=snap.docs.map(d=>d.data());
    buildFilters('h-filters',histAll,CU.id);
    el.innerHTML=histAll.length?histAll.map(t=>txHtml(t,CU.id)).join(''):'<div class="empty">nenhuma transacao</div>';
  }catch(e){el.innerHTML=`<div class="empty">erro: ${e.message}</div>`;}
}

async function loadMemberHistory(uid,name){
  document.getElementById('mh-title').textContent=name;
  window._mhUid=uid;
  goTo('s-member-history');
  const el=document.getElementById('mh-txs');
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const q=query(collection(db,'transactions'),where('participants','array-contains',uid),orderBy('createdAt','desc'),limit(200));
    const snap=await getDocs(q);
    mhistAll=snap.docs.map(d=>d.data());
    buildFilters('mh-filters',mhistAll,uid);
    el.innerHTML=mhistAll.length?mhistAll.map(t=>txHtml(t,uid)).join(''):'<div class="empty">nenhuma transacao</div>';
  }catch(e){el.innerHTML=`<div class="empty">erro: ${e.message}</div>`;}
}

// ── NOTIFS ──
async function loadNotifs(){
  const el=document.getElementById('notifs-list');
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const q=query(collection(db,'notifications'),where('to','==',CU.id),orderBy('createdAt','desc'),limit(30));
    const snap=await getDocs(q);
    if(snap.empty){el.innerHTML='<div class="empty">nenhuma notificacao</div>';return;}
    el.innerHTML=snap.docs.map(d=>{
      const n=d.data();
      return`<div class="notif-item ${n.read?'':'notif-unread'}">
        <div class="notif-icon">${n.icon||'🔔'}</div>
        <div><div class="notif-text">${n.text}</div><div class="notif-date">${fmtDt(n.createdAt)}</div></div>
      </div>`;
    }).join('');
    snap.docs.forEach(d=>{if(!d.data().read)updateDoc(doc(db,'notifications',d.id),{read:true});});
    document.getElementById('notif-bell').textContent='🔔';
  }catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
}

async function notif(toId,text,icon='🔔'){
  try{await addDoc(collection(db,'notifications'),{to:toId,text,icon,read:false,createdAt:serverTimestamp()});}catch(e){}
}

// ── TRANSFER ──
async function loadTransferMembers(){
  const sel=document.getElementById('tr-to');
  if(allMembers.length){sel.innerHTML=allMembers.map(m=>`<option value="${m.id}">${m.name}${m.admin?' (admin)':''}</option>`).join('');return;}
  sel.innerHTML='<option>carregando...</option>';
  try{
    const snap=await getUsers();
    allMembers=[];
    snap.forEach(d=>{const data=d.data();if(d.id!==CU.id&&data.status==='approved')allMembers.push({id:d.id,...data});});
    sel.innerHTML=allMembers.length?allMembers.map(m=>`<option value="${m.id}">${m.name}${m.admin?' (admin)':''}</option>`).join(''):'<option disabled>nenhum membro</option>';
  }catch(e){sel.innerHTML='<option>erro</option>';}
}

window.confirmarTransfer=function(){
  const toId=document.getElementById('tr-to').value;
  const amt=parseInt(document.getElementById('tr-amt').value);
  const msg=document.getElementById('tr-msg').value.trim();
  if(!toId){showErr('tr-err','selecione um membro');return;}
  if(!amt||amt<=0){showErr('tr-err','valor invalido');return;}
  if(amt>CU.balance){showErr('tr-err','saldo insuficiente');return;}
  const toName=allMembers.find(m=>m.id===toId)?.name||toId;
  openModal('confirmar transferencia',`Enviar ${amt} dracmas para ${toName}?${msg?'\n"'+msg+'"':''}`,()=>doTransfer(toId,amt,msg,toName));
};

async function doTransfer(toId,amt,msg,toName){
  setLoad('tr-btn',true);
  try{
    const fR=doc(db,'users',CU.id),tR=doc(db,'users',toId);
    await runTransaction(db,async t=>{
      const fS=await t.get(fR),tS=await t.get(tR);
      if(fS.data().balance<amt)throw new Error('saldo insuficiente');
      t.update(fR,{balance:fS.data().balance-amt});
      t.update(tR,{balance:tS.data().balance+amt});
    });
    await addDoc(collection(db,'transactions'),{from:CU.id,to:toId,participants:[CU.id,toId],amount:amt,category:'transferencia',currency:'dr',desc:`${CU.name} para ${toName}`,obs:msg,createdAt:serverTimestamp()});
    await notif(toId,`${CU.name} te enviou ${amt} dracmas${msg?' — "'+msg+'"':''}!`,'💸');
    CU.balance-=amt;
    document.getElementById('home-bal').textContent=CU.balance;
    document.getElementById('tr-amt').value='';
    document.getElementById('tr-msg').value='';
    toast('transferencia realizada! ₯');
    setTimeout(()=>goTo('s-home'),1000);
  }catch(e){showErr('tr-err',e.message||'erro');}
  finally{setLoad('tr-btn',false);}
}

// ── QR ──
let qrMode='livre',html5Scan=null;
window.switchQRTab=function(tab){
  document.getElementById('qr-tab-meu').classList.toggle('active',tab==='meu');
  document.getElementById('qr-tab-scan').classList.toggle('active',tab==='scan');
  document.getElementById('qr-panel-meu').style.display=tab==='meu'?'block':'none';
  document.getElementById('qr-panel-scan').style.display=tab==='scan'?'block':'none';
  if(tab==='scan')pararScan();
};
window.setQRMode=function(mode){
  qrMode=mode;
  document.getElementById('qr-livre-btn').style.background=mode==='livre'?'var(--card3)':'var(--card2)';
  document.getElementById('qr-valor-btn').style.background=mode==='valor'?'var(--card3)':'var(--card2)';
  document.getElementById('qr-valor-input').style.display=mode==='valor'?'block':'none';
  gerarQR();
};
window.gerarQR=function(){
  if(!CU)return;
  const canvas=document.getElementById('qr-canvas');
  canvas.innerHTML='';
  const amt=qrMode==='valor'?parseInt(document.getElementById('qr-amt').value)||0:0;
  const data=amt>0?`dracmas-adc://pay?to=${CU.id}&amount=${amt}`:`dracmas-adc://pay?to=${CU.id}`;
  try{new QRCode(canvas,{text:data,width:200,height:200,colorDark:'#1a0e2e',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.H});}catch(e){}
  const lbl=document.getElementById('qr-label');
  if(lbl)lbl.textContent=CU.name+' · @'+CU.id+(amt>0?' · '+amt+' ₯':'');
};
window.iniciarScan=function(){
  document.getElementById('qr-reader-wrap').style.display='block';
  html5Scan=new Html5Qrcode('qr-reader');
  html5Scan.start({facingMode:'environment'},{fps:10,qrbox:{width:250,height:250}},async decoded=>{
    await pararScan();
    try{
      const url=new URL(decoded);
      const to=url.searchParams.get('to');
      const amt=url.searchParams.get('amount');
      if(!to){toast('QR invalido');return;}
      await loadTransferMembers();
      const sel=document.getElementById('tr-to');
      for(let i=0;i<sel.options.length;i++){if(sel.options[i].value===to){sel.selectedIndex=i;break;}}
      if(amt)document.getElementById('tr-amt').value=amt;
      goTo('s-transfer');
      toast('QR lido! confirme a transferencia');
    }catch(e){toast('QR invalido');}
  },()=>{}).catch(e=>{toast('erro camera: '+e);document.getElementById('qr-reader-wrap').style.display='none';});
};
window.pararScan=async function(){
  if(html5Scan){try{await html5Scan.stop();}catch(e){}html5Scan=null;}
  document.getElementById('qr-reader-wrap').style.display='none';
};

// ── MURAL ──
async function loadMural(elId,isAdmin){
  const el=document.getElementById(elId);
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const q=query(collection(db,'mural'),orderBy('createdAt','desc'),limit(20));
    const snap=await getDocs(q);
    if(snap.empty){el.innerHTML='<div class="empty">nenhum aviso</div>';return;}
    if(isAdmin){
      const items=await Promise.all(snap.docs.map(async d=>{
        const data=d.data();
        const lSnap=await getDocs(query(collection(db,'mural_leituras'),where('avisoId','==',d.id)));
        return`<div class="card"><div class="card-title">${data.titulo} <span style="font-size:11px;background:rgba(22,163,74,.1);color:var(--green);padding:2px 8px;border-radius:10px;font-weight:700">${lSnap.size} leram</span></div><div class="card-text">${data.texto}</div><div class="card-date">${fmtDt(data.createdAt)}</div><button class="loja-del" style="margin-top:8px;width:auto;padding:5px 12px;border-radius:8px" onclick="deletarAviso('${d.id}')">remover</button></div>`;
      }));
      el.innerHTML=items.join('');
    }else{
      el.innerHTML=snap.docs.map(d=>{
        const data=d.data();
        marcarMuralLido(d.id);
        return`<div class="card"><div class="card-title">📢 ${data.titulo}</div><div class="card-text">${data.texto}</div><div class="card-date">${fmtDt(data.createdAt)}</div></div>`;
      }).join('');
    }
  }catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
}

async function marcarMuralLido(id){
  try{const ref=doc(db,'mural_leituras',`${id}_${CU.id}`);if(!(await getDoc(ref)).exists())await setDoc(ref,{avisoId:id,userId:CU.id,userName:CU.name,lido:true,at:serverTimestamp()});}catch(e){}
}

window.publicarAviso=async function(){
  const titulo=document.getElementById('av-titulo').value.trim();
  const texto=document.getElementById('av-texto').value.trim();
  if(!titulo||!texto){showErr('av-err','preencha titulo e texto');return;}
  setLoad('av-btn',true);
  try{
    await addDoc(collection(db,'mural'),{titulo,texto,autor:CU.name,createdAt:serverTimestamp()});
    document.getElementById('av-titulo').value='';
    document.getElementById('av-texto').value='';
    toast('aviso publicado!');
    loadMural('mural-admin-list',true);
  }catch(e){showErr('av-err','erro: '+e.message);}
  finally{setLoad('av-btn',false);}
};

window.deletarAviso=function(id){
  openModal('remover aviso','Remover este aviso?',async()=>{
    try{await deleteDoc(doc(db,'mural',id));toast('aviso removido');loadMural('mural-admin-list',true);}
    catch(e){toast('erro');}
  },true);
};

// ── LOJA ──
async function loadLoja(elId,isAdmin){
  const el=document.getElementById(elId);
  el.innerHTML='<div class="empty" style="grid-column:1/-1">carregando...</div>';
  try{
    const snap=await getDocs(query(collection(db,'loja'),orderBy('createdAt','desc')));
    if(snap.empty){el.innerHTML='<div class="empty" style="grid-column:1/-1">nenhum item</div>';return;}
    el.innerHTML=snap.docs.map(d=>{
      const item=d.data();
      const imgHtml=item.foto?`<img src="${item.foto}" style="width:100%;height:130px;object-fit:cover"/>`:`<div class="loja-img">🛍️</div>`;
      const adminBtns=isAdmin?`<button class="loja-edit" onclick="editarItem('${d.id}','${item.nome.replace(/'/g,"\\'")}',${item.preco})">editar</button><button class="loja-del" onclick="removerItem('${d.id}')">remover</button>`:'';
      return`<div class="loja-card">${imgHtml}<div class="loja-body"><div class="loja-nome">${item.nome}</div><div class="loja-preco">${item.preco} ₯</div></div>${adminBtns}</div>`;
    }).join('');
  }catch(e){el.innerHTML=`<div class="empty" style="grid-column:1/-1">erro: ${e.message}</div>`;}
}

window.adicionarItem=async function(){
  const nome=document.getElementById('loja-nome').value.trim();
  const preco=parseInt(document.getElementById('loja-preco').value);
  const prev=document.getElementById('loja-foto-prev');
  const foto=prev.style.display!=='none'?prev.src:'';
  if(!nome){showErr('loja-err','informe o nome');return;}
  if(!preco||preco<=0){showErr('loja-err','preco invalido');return;}
  setLoad('loja-btn',true);
  try{
    await addDoc(collection(db,'loja'),{nome,preco,foto,createdAt:serverTimestamp()});
    document.getElementById('loja-nome').value='';
    document.getElementById('loja-preco').value='';
    prev.style.display='none';prev.src='';
    document.getElementById('loja-ph').style.display='flex';
    document.getElementById('loja-foto-inp').value='';
    toast('item adicionado!');
    loadLoja('loja-admin-grid',true);
  }catch(e){showErr('loja-err','erro: '+e.message);}
  finally{setLoad('loja-btn',false);}
};

window.editarItem=function(id,nome,preco){
  document.getElementById('loja-edit-id').value=id;
  document.getElementById('loja-edit-nome').value=nome;
  document.getElementById('loja-edit-preco').value=preco;
  document.getElementById('modal-loja-edit').classList.add('active');
};

window.salvarEdicaoLoja=async function(){
  const id=document.getElementById('loja-edit-id').value;
  const nome=document.getElementById('loja-edit-nome').value.trim();
  const preco=parseInt(document.getElementById('loja-edit-preco').value);
  if(!nome){showErr('loja-edit-err','informe o nome');return;}
  if(!preco||preco<=0){showErr('loja-edit-err','preco invalido');return;}
  setLoad('loja-edit-btn',true);
  try{
    await updateDoc(doc(db,'loja',id),{nome,preco});
    closeModal('modal-loja-edit');
    toast('item atualizado!');
    loadLoja('loja-admin-grid',true);
  }catch(e){showErr('loja-edit-err','erro: '+e.message);}
  finally{setLoad('loja-edit-btn',false);}
};

window.removerItem=function(id){
  openModal('remover item','Remover este item da lojinha?',async()=>{
    try{await deleteDoc(doc(db,'loja',id));toast('item removido');loadLoja('loja-admin-grid',true);}
    catch(e){toast('erro');}
  },true);
};

// ── FOTO ──
function comprimirImg(file,mW,mH,q){
  return new Promise(res=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const img=new Image();
      img.onload=()=>{
        const canvas=document.createElement('canvas');
        let w=img.width,h=img.height;
        if(w>mW){h=h*mW/w;w=mW;}if(h>mH){w=w*mH/h;h=mH;}
        canvas.width=w;canvas.height=h;
        canvas.getContext('2d').drawImage(img,0,0,w,h);
        res(canvas.toDataURL('image/jpeg',q));
      };
      img.src=e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

window.previewFoto=async function(input,prevId,phId){
  const file=input.files[0];if(!file)return;
  const b64=await comprimirImg(file,600,600,0.75);
  const prev=document.getElementById(prevId);
  prev.src=b64;prev.style.display='block';
  document.getElementById(phId).style.display='none';
};

// ── PERFIL ──
async function loadPerfil(){
  const u=CU;
  document.getElementById('pf-name').textContent=u.name;
  document.getElementById('pf-user').textContent='@'+u.id;
  document.getElementById('pf-username').textContent='@'+u.id;
  document.getElementById('pf-status').textContent=u.admin?'Administrador':'Membro';
  document.getElementById('pf-initials').textContent=inits(u.name);
  const dt=u.createdAt?fmtDtShort(u.createdAt):'desconhecida';
  document.getElementById('pf-data').textContent=dt;
  document.getElementById('pf-saldo').textContent=u.balance;
  if(u.foto){const img=document.getElementById('pf-img');img.src=u.foto;img.style.display='block';document.getElementById('pf-initials').style.display='none';}
  else{document.getElementById('pf-img').style.display='none';document.getElementById('pf-initials').style.display='block';}
  try{
    const q=query(collection(db,'transactions'),where('participants','array-contains',CU.id),limit(200));
    const snap=await getDocs(q);
    let recv=0,sent=0;
    snap.forEach(d=>{const tx=d.data();if(tx.to===CU.id)recv+=tx.amount;else sent+=tx.amount;});
    document.getElementById('pf-recv').textContent=recv;
    document.getElementById('pf-sent').textContent=sent;
  }catch(e){}
}

window.salvarFotoPerfil=async function(input){
  const file=input.files[0];if(!file)return;
  toast('comprimindo foto...');
  try{
    const b64=await comprimirImg(file,300,300,0.8);
    await updateDoc(doc(db,'users',CU.id),{foto:b64});
    CU.foto=b64;
    const img=document.getElementById('pf-img');
    img.src=b64;img.style.display='block';
    document.getElementById('pf-initials').style.display='none';
    toast('foto atualizada!');
  }catch(e){toast('erro: '+e.message);}
};

// ── PERFIL PUBLICO ──
window.verPerfil=async function(uid){
  goTo('s-perfil-pub');
  try{
    const snap=await getDoc(doc(db,'users',uid));
    if(!snap.exists()){toast('membro nao encontrado');return;}
    const data=snap.data();
    document.getElementById('pp-title').textContent=data.name.split(' ')[0];
    document.getElementById('pp-name').textContent=data.name;
    document.getElementById('pp-user').textContent='@'+uid;
    document.getElementById('pp-initials').textContent=inits(data.name);
    document.getElementById('pp-status').textContent=data.admin?'Administrador':'Membro';
    document.getElementById('pp-data').textContent=data.createdAt?fmtDtShort(data.createdAt):'desconhecida';
    document.getElementById('pp-saldo').textContent=data.balance;
    const ppImg=document.getElementById('pp-img');
    if(data.foto){ppImg.src=data.foto;ppImg.style.display='block';document.getElementById('pp-initials').style.display='none';}
    else{ppImg.style.display='none';document.getElementById('pp-initials').style.display='block';}
    const q=query(collection(db,'transactions'),where('participants','array-contains',uid),limit(200));
    const txSnap=await getDocs(q);
    let recv=0,sent=0;
    txSnap.forEach(d=>{const tx=d.data();if(tx.to===uid)recv+=tx.amount;else sent+=tx.amount;});
    document.getElementById('pp-recv').textContent=recv;
    document.getElementById('pp-sent').textContent=sent;
  }catch(e){toast('erro: '+e.message);}
};

// ── COMUNIDADE ──
let comAll=[];
async function loadComunidade(){
  const el=document.getElementById('com-list');
  el.innerHTML='<div class="empty">carregando...</div>';
  document.getElementById('com-search').value='';
  try{
    const snap=await getUsers();
    comAll=[];
    snap.forEach(d=>{const data=d.data();if(!data.admin&&data.status==='approved')comAll.push({id:d.id,...data});});
    comAll.sort((a,b)=>b.balance-a.balance);
    renderCom(comAll);
  }catch(e){el.innerHTML='<div class="empty">erro ao carregar</div>';}
}

function renderCom(members){
  const el=document.getElementById('com-list');
  if(!members.length){el.innerHTML='<div class="empty">nenhum membro</div>';return;}
  el.innerHTML=members.map(m=>{
    const ini=inits(m.name);
    const av=m.foto?`<img src="${m.foto}" alt=""/>`:`<span>${ini}</span>`;
    const isMe=m.id===CU.id?' (voce)':'';
    return`<div class="com-item" onclick="verPerfil('${m.id}')">
      <div class="com-av">${av}</div>
      <div><div class="com-name">${m.name}${isMe}</div><div class="com-sub">@${m.id}</div></div>
      <div class="com-saldo">${m.balance} ₯</div>
    </div>`;
  }).join('');
}

// ── ADMIN GERENCIAR ──
window.switchAdminTab=function(tab){
  document.getElementById('tab-give').classList.toggle('active',tab==='give');
  document.getElementById('tab-take').classList.toggle('active',tab==='take');
  document.getElementById('give-form').style.display=tab==='give'?'block':'none';
  document.getElementById('take-form').style.display=tab==='take'?'block':'none';
};


async function loadAdminSelects(){
  try{
    const snap=await getUsers();
    const opts=[];
    snap.forEach(d=>{const data=d.data();if(data.status==='approved')opts.push(`<option value="${d.id}">${data.name}${data.admin?' (admin)':''}</option>`);});
    const html=opts.join('')||'<option disabled>nenhum membro</option>';
    document.getElementById('ag-member').innerHTML=html;
    document.getElementById('at-member').innerHTML=html;
  }catch(e){}
}

async function loadAdminMembers(){
  const el=document.getElementById('admin-members');
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const snap=await getUsers(true); // força refresh para ter dados atualizados
    const members=[];
    snap.forEach(d=>{const data=d.data();if(!data.admin&&(data.status==='approved'||data.status==='paused'))members.push({id:d.id,...data});});
    members.sort((a,b)=>b.balance-a.balance);
    el.innerHTML=members.map(m=>`
      <div class="member-item">
        <div class="m-av">${m.foto?`<img src="${m.foto}" alt=""/>`:`<span>${inits(m.name)}</span>`}</div>
        <div style="flex:1;min-width:0"><div class="m-name">${m.name}${m.status==='paused'?'<span class="tag-p">pausado</span>':''}</div><div class="m-sub">${m.balance} ₯ · @${m.id}</div></div>
        <div class="m-acts">
          <button class="bsm view" onclick="loadMemberHistory('${m.id}','${m.name.replace(/'/g,"\\'")}')">extrato</button>
          <button class="bsm reset" onclick="resetSenha('${m.id}','${m.name.replace(/'/g,"\\'")}')">🔑</button>
          <button class="bsm ${m.status==='paused'?'unpause':'pause'}" onclick="${m.status==='paused'?'unpauseM':'pauseM'}('${m.id}','${m.name.replace(/'/g,"\\'")}')"> ${m.status==='paused'?'▶':'⏸'}</button>
          <button class="bsm del" onclick="deleteMember('${m.id}','${m.name.replace(/'/g,"\\'")}')">✕</button>
        </div>
      </div>`).join('')||'<div class="empty">nenhum membro</div>';
  }catch(e){el.innerHTML='<div class="empty">erro</div>';}
}

window.doDistribute=async function(){
  const toId=document.getElementById('ag-member').value;
  const cat=document.getElementById('ag-cat').value;
  const amt=parseInt(document.getElementById('ag-amt').value);
  const obs=document.getElementById('ag-obs').value.trim();
  if(!toId){showErr('ag-err','selecione membro');return;}
  if(!amt||amt<=0){showErr('ag-err','valor invalido');return;}
  setLoad('ag-btn',true);
  try{
    const ref=doc(db,'users',toId);
    const snap=await getDoc(ref);
    await updateDoc(ref,{balance:snap.data().balance+amt});
    const name=snap.data().name;
    const ci=CATS[cat]||CATS.outros;
    await addDoc(collection(db,'transactions'),{from:'admin',to:toId,participants:['admin',toId],amount:amt,category:cat,currency:'dr',desc:`${ci.icon} ${ci.label} — admin para ${name}`,obs,createdAt:serverTimestamp()});
    await notif(toId,`Voce recebeu ${amt} dracmas — ${ci.icon} ${ci.label}${obs?' ('+obs+')':''}!`,'💰');
    document.getElementById('ag-amt').value='';
    document.getElementById('ag-obs').value='';
    toast(`+${amt} ₯ para ${name}!`);
    loadAdminMembers();loadAdminSelects();
  }catch(e){showErr('ag-err','erro: '+e.message);}
  finally{setLoad('ag-btn',false);}
};

window.doDeduct=async function(){
  const toId=document.getElementById('at-member').value;
  const cat=document.getElementById('at-cat').value;
  const amt=parseInt(document.getElementById('at-amt').value);
  const obs=document.getElementById('at-obs').value.trim();
  if(!toId){showErr('at-err','selecione membro');return;}
  if(!amt||amt<=0){showErr('at-err','valor invalido');return;}
  setLoad('at-btn',true);
  try{
    const ref=doc(db,'users',toId);
    const snap=await getDoc(ref);
    const cur=snap.data().balance;
    const nb=Math.max(0,cur-amt);
    await updateDoc(ref,{balance:nb});
    const name=snap.data().name;
    const ci=CATS[cat]||CATS.penalidade;
    const ret=cur-nb;
    await addDoc(collection(db,'transactions'),{from:toId,to:'admin',participants:['admin',toId],amount:ret,category:cat,currency:'dr',desc:`${ci.icon} ${ci.label} — admin retirou de ${name}`,obs,createdAt:serverTimestamp()});
    await notif(toId,`${ret} dracmas foram retirados — ${ci.icon} ${ci.label}${obs?' ('+obs+')':''}!`,'⚠️');
    document.getElementById('at-amt').value='';
    document.getElementById('at-obs').value='';
    toast(`-${ret} ₯ de ${name}`);
    loadAdminMembers();loadAdminSelects();
  }catch(e){showErr('at-err','erro: '+e.message);}
  finally{setLoad('at-btn',false);}
};

window.resetSenha=function(uid,name){
  openModal('resetar senha',`Resetar a senha de ${name} para "dracmas123"?`,async()=>{
    try{await updateDoc(doc(db,'users',uid),{password:'dracmas123'});toast(`Senha de ${name} → dracmas123`);}
    catch(e){toast('erro');}
  });
};

window.pauseM=function(uid,name){
  openModal('pausar conta',`Pausar a conta de ${name}?`,async()=>{
    try{await updateDoc(doc(db,'users',uid),{status:'paused'});await notif(uid,'Sua conta foi pausada.','⏸');invalidateUsersCache();toast('conta pausada');loadAdminMembers();}
    catch(e){toast('erro');}
  },true);
};

window.unpauseM=function(uid,name){
  openModal('reativar conta',`Reativar a conta de ${name}?`,async()=>{
    try{await updateDoc(doc(db,'users',uid),{status:'approved'});await notif(uid,'Sua conta foi reativada!','✅');invalidateUsersCache();toast('conta reativada');loadAdminMembers();}
    catch(e){toast('erro');}
  });
};

window.deleteMember=function(uid,name){
  openModal('deletar conta',`Deletar a conta de ${name}? Irreversivel.`,async()=>{
    try{await deleteDoc(doc(db,'users',uid));invalidateUsersCache();toast('conta deletada');loadAdminMembers();loadAdminSelects();}
    catch(e){toast('erro');}
  },true);
};

// ── PENDENTES ──
async function loadPending(){
  const el=document.getElementById('pending-list');
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const snap=await getDocs(query(collection(db,'users'),where('status','==','pending')));
    if(snap.empty){el.innerHTML='<div class="empty">nenhuma conta pendente 🎉</div>';return;}
    el.innerHTML=snap.docs.map(d=>{
      const data=d.data();
      return`<div class="member-item">
        <div class="m-av"><span>${inits(data.name)}</span></div>
        <div style="flex:1;min-width:0"><div class="m-name">${data.name}</div><div class="m-sub">@${d.id}</div></div>
        <div class="m-acts">
          <button class="bsm approve" onclick="aprovarUser('${d.id}','${data.name.replace(/'/g,"\\'")}')">✓ aprovar</button>
          <button class="bsm reject" onclick="recusarUser('${d.id}','${data.name.replace(/'/g,"\\'")}')">✕</button>
        </div>
      </div>`;
    }).join('');
  }catch(e){el.innerHTML='<div class="empty">erro</div>';}
}

window.aprovarUser=async function(uid,name){
  try{
    await updateDoc(doc(db,'users',uid),{status:'approved'});
    await notif(uid,'Sua conta foi aprovada! Bem-vindo ao Dracmas ADC 🎉','✅');
    invalidateUsersCache();
    toast('conta aprovada!');loadPending();loadPendingBadge();
  }catch(e){toast('erro');}
};

window.recusarUser=function(uid,name){
  openModal('recusar conta',`Recusar a solicitacao de ${name}?`,async()=>{
    try{await deleteDoc(doc(db,'users',uid));invalidateUsersCache();toast('recusado');loadPending();loadPendingBadge();}
    catch(e){toast('erro');}
  },true);
};

// ── RELATORIO ──
window.switchMes=function(modo){
  relMode=modo;
  document.getElementById('tab-atual').classList.toggle('active',modo==='atual');
  document.getElementById('tab-ant').classList.toggle('active',modo==='anterior');
  renderRelatorio();
};

async function loadRelatorio(){
  const el=document.getElementById('rel-content');
  el.innerHTML='<div class="empty" style="padding:2rem">carregando...</div>';
  try{
    const agora=new Date();
    const iA=new Date(agora.getFullYear(),agora.getMonth(),1);
    const iAnt=new Date(agora.getFullYear(),agora.getMonth()-1,1);
    const fAnt=new Date(agora.getFullYear(),agora.getMonth(),0,23,59,59);
    const uS=await getUsers();
    const members=[];let tot=0;
    uS.forEach(d=>{const data=d.data();if(!data.admin&&data.status==='approved'){members.push({name:data.name,balance:data.balance});tot+=data.balance;}});
    members.sort((a,b)=>b.balance-a.balance);
    const tS=await getDocs(query(collection(db,'transactions'),orderBy('createdAt','desc'),limit(500)));
    relAtual=tS.docs.filter(d=>{const ts=d.data().createdAt;return ts&&ts.toDate()>=iA;}).map(d=>d.data());
    relAnt=tS.docs.filter(d=>{const ts=d.data().createdAt;return ts&&ts.toDate()>=iAnt&&ts.toDate()<=fAnt;}).map(d=>d.data());
    window._relM=members;window._relT=tot;
    renderRelatorio();
  }catch(e){el.innerHTML=`<div class="empty">erro: ${e.message}</div>`;}
}

function renderRelatorio(){
  const el=document.getElementById('rel-content');
  const txs=relMode==='atual'?relAtual:relAnt;
  const members=window._relM||[];
  const tot=window._relT||0;
  const agora=new Date();
  const mesLabel=relMode==='atual'?agora.toLocaleDateString('pt-BR',{month:'long',year:'numeric'}):new Date(agora.getFullYear(),agora.getMonth()-1,1).toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
  const catCount={};txs.forEach(tx=>{const c=tx.category||'outros';catCount[c]=(catCount[c]||0)+tx.amount;});
  el.innerHTML=`<div style="padding:.5rem 1rem">
    <div class="rel-card"><div class="rel-card-title">Resumo — ${mesLabel}</div>
      <div class="rel-row"><span>total em circulacao</span><span><strong>${tot} ₯</strong></span></div>
      <div class="rel-row"><span>transacoes no mes</span><span>${txs.length}</span></div>
    </div>
    <div class="rel-card"><div class="rel-card-title">Por categoria</div>
      ${Object.entries(catCount).length?Object.entries(catCount).map(([k,v])=>{const c=CATS[k]||CATS.outros;return`<div class="rel-row"><span>${c.icon} ${c.label}</span><span>${v} ₯</span></div>`;}).join(''):'<div style="font-size:13px;color:var(--muted);padding:4px 0">sem movimentacoes</div>'}
    </div>
    <div class="rel-card"><div class="rel-card-title">Saldos dos membros</div>
      ${members.map((m,i)=>`<div class="rel-row"><span>${i+1}. ${m.name}</span><span>${m.balance} ₯</span></div>`).join('')}
      <div class="rel-total"><span>Total</span><span>${tot} ₯</span></div>
    </div>
    <div class="rel-card"><div class="rel-card-title">Transacoes (${txs.length})</div>
      ${txs.length?txs.slice(0,100).map(tx=>{const c=CATS[tx.category]||CATS.outros;return`<div class="rel-row" style="flex-direction:column;gap:2px"><span style="font-weight:600">${c.icon} ${c.label} — ${tx.amount} ₯</span><span style="font-size:11px;color:var(--muted)">${tx.desc||''} ${tx.obs?'· '+tx.obs:''} · ${fmtDt(tx.createdAt)}</span></div>`;}).join(''):'<div style="font-size:13px;color:var(--muted);padding:4px 0">sem transacoes</div>'}
    </div>
  </div>`;
}

window.gerarPDF=async function(){
  toast('gerando PDF...');
  try{
    const{jsPDF}=window.jspdf;
    const pdf=new jsPDF({unit:'mm',format:'a4'});
    const W=210,M=15,CW=W-M*2;
    const agora=new Date();
    const txs=relMode==='atual'?relAtual:relAnt;
    const members=window._relM||[];
    const tot=window._relT||0;
    const mesLabel=relMode==='atual'?agora.toLocaleDateString('pt-BR',{month:'long',year:'numeric'}):new Date(agora.getFullYear(),agora.getMonth()-1,1).toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
    let y=20;
    const L=(txt,x,sz,bold=false,rgb=[0,0,0])=>{pdf.setFontSize(sz);pdf.setFont('helvetica',bold?'bold':'normal');pdf.setTextColor(...rgb);const lines=pdf.splitTextToSize(String(txt),CW-(x-M));pdf.text(lines,x,y);y+=lines.length*(sz*0.4)+2;};
    const chk=()=>{if(y>270){pdf.addPage();y=20;}};
    const ln=()=>{pdf.setDrawColor(220,220,220);pdf.line(M,y,W-M,y);y+=5;};
    L('Dracmas ADC — Relatorio',M,16,true,[46,26,71]);L(`Periodo: ${mesLabel}`,M,11,false,[100,100,100]);y+=2;ln();
    L('Total em Circulacao',M,12,true);L(`${tot} dracmas`,M,11);y+=2;ln();
    L('Saldos dos Membros',M,12,true);
    members.forEach((m,i)=>{chk();pdf.setFontSize(10);pdf.setFont('helvetica','normal');pdf.setTextColor(0,0,0);const lines=pdf.splitTextToSize(`${i+1}. ${m.name}`,CW-20);pdf.text(lines,M,y);pdf.text(String(m.balance),W-M,y,{align:'right'});y+=lines.length*5+1;});
    y+=2;ln();
    L(`Transacoes (${txs.length})`,M,12,true);
    txs.forEach(tx=>{chk();const c=CATS[tx.category]||CATS.outros;const la=pdf.splitTextToSize(`${c.label} — ${tx.amount} ₯`,CW);const lb=pdf.splitTextToSize(`${tx.desc||''} ${tx.obs?'· '+tx.obs:''} · ${fmtDt(tx.createdAt)}`,CW);pdf.setFontSize(10);pdf.setFont('helvetica','bold');pdf.setTextColor(0,0,0);pdf.text(la,M,y);y+=la.length*5;pdf.setFont('helvetica','normal');pdf.setTextColor(120,120,120);pdf.text(lb,M,y);y+=lb.length*4+4;chk();});
    pdf.setFontSize(8);pdf.setTextColor(180,180,180);pdf.text(`Gerado em ${agora.toLocaleString('pt-BR')} por ${CU.name}`,W/2,288,{align:'center'});
    pdf.save(`dracmas-${mesLabel.replace(' ','-')}.pdf`);
    toast('PDF baixado!');
  }catch(e){toast('erro: '+e.message);}
};

window.exportCSV=async function(){
  toast('gerando CSV...');
  try{
    const snap=await getUsers(true); // dados frescos para exportação
    const members=[];
    snap.forEach(d=>{const data=d.data();if(!data.admin&&data.status==='approved'){const dt=data.createdAt?(data.createdAt.toDate?data.createdAt.toDate():new Date(data.createdAt)).toLocaleDateString('pt-BR'):'desconhecida';members.push({nome:data.name,usuario:d.id,saldo:data.balance,entrada:dt});}});
    members.sort((a,b)=>b.saldo-a.saldo);
    const csv=['Nome,Usuario,Saldo,Membro desde',...members.map(m=>`"${m.nome}","${m.usuario}","${m.saldo}","${m.entrada}"`)].join('\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download='membros-dracmas.csv';a.click();
    URL.revokeObjectURL(url);
    toast('CSV baixado!');
  }catch(e){toast('erro: '+e.message);}
};

window.exportPDFMembers=async function(){
  toast('gerando PDF...');
  try{
    const{jsPDF}=window.jspdf;
    const pdf=new jsPDF({unit:'mm',format:'a4'});
    const W=210,M=15;let y=20;
    pdf.setFontSize(16);pdf.setFont('helvetica','bold');pdf.setTextColor(46,26,71);
    pdf.text('Dracmas ADC — Lista de Membros',M,y);y+=10;
    pdf.setFontSize(10);pdf.setFont('helvetica','normal');pdf.setTextColor(107,114,128);
    pdf.text(`Gerado em ${new Date().toLocaleString('pt-BR')}`,M,y);y+=8;
    pdf.setDrawColor(220,220,220);pdf.line(M,y,W-M,y);y+=8;
    const snap=await getUsers(true);
    const members=[];
    snap.forEach(d=>{const data=d.data();if(!data.admin&&data.status==='approved'){const dt=data.createdAt?(data.createdAt.toDate?data.createdAt.toDate():new Date(data.createdAt)).toLocaleDateString('pt-BR'):'desconhecida';members.push({name:data.name,id:d.id,balance:data.balance,dt});}});
    members.sort((a,b)=>b.balance-a.balance);
    pdf.setFontSize(9);pdf.setFont('helvetica','bold');pdf.setTextColor(46,26,71);
    pdf.text('Nome',M,y);pdf.text('Usuario',M+70,y);pdf.text('Saldo',M+120,y);pdf.text('Desde',M+150,y);
    y+=5;pdf.line(M,y,W-M,y);y+=5;
    pdf.setFont('helvetica','normal');pdf.setTextColor(0,0,0);
    members.forEach((m,i)=>{
      if(y>270){pdf.addPage();y=20;}
      if(i%2===0){pdf.setFillColor(248,244,255);pdf.rect(M-2,y-4,W-M*2+4,8,'F');}
      pdf.setFontSize(9);
      const nLines=pdf.splitTextToSize(m.name,65);pdf.text(nLines,M,y);
      pdf.text(m.id,M+70,y);pdf.text(String(m.balance),M+120,y);pdf.text(m.dt,M+150,y);
      y+=Math.max(nLines.length*5,8);
    });
    y+=4;pdf.line(M,y,W-M,y);y+=6;
    pdf.setFont('helvetica','bold');pdf.text(`Total: ${members.length} membros`,M,y);
    pdf.save('membros-dracmas.pdf');
    toast('PDF baixado!');
  }catch(e){toast('erro: '+e.message);}
};

// ═══════════════════════════════════════════════
// ── EVENTO ──
// ═══════════════════════════════════════════════

async function loadEvento(){
  if(!evData)await loadEvStatus();
  if(!evData)return;
  evMoeda=evData.moeda||'Prata';
  document.getElementById('ev-topbar-title').textContent=evData.nome;
  document.getElementById('ev-header-name').textContent=evData.nome;
  // show admin tab if admin
  const adminTab=document.getElementById('ev-tab-admin');
  if(adminTab)adminTab.style.display=CU.admin?'block':'none';
  // stats
  const membersSnap=await getUsers();
  let totalMembros=0;membersSnap.forEach(d=>{if(!d.data().admin&&d.data().status==='approved')totalMembros++;});
  const timesSnap=await getDocs(query(collection(db,'times'),where('eventoId','==',evData.id)));
  document.getElementById('ev-stat-times').textContent=timesSnap.size;
  document.getElementById('ev-stat-membros').textContent=totalMembros;
  document.getElementById('ev-stat-moeda').textContent=evMoeda;
  // update labels
  updateEvLabels();
  // my team
  myTeam=null;
  timesSnap.forEach(d=>{const data=d.data();if(data.membros&&data.membros.includes(CU.id)){myTeam={id:d.id,...data};}});
  const myTeamCard=document.getElementById('my-team-card');
  if(myTeam){
    myTeamCard.style.display='flex';
    const tcEl=document.getElementById('my-team-color');
    if(myTeam.foto){
      tcEl.innerHTML=`<img src="${myTeam.foto}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"/>`;
      tcEl.style.background='transparent';
    }else{
      tcEl.textContent=myTeam.nome.slice(0,2);
      tcEl.innerHTML=myTeam.nome.slice(0,2);
      tcEl.style.background=myTeam.cor||'#5b21b6';
      tcEl.style.color='#fff';
    }
    document.getElementById('my-team-name').textContent=myTeam.nome+' · seu time';
    const pos=getTeamPos(timesSnap,myTeam.id);
    document.getElementById('my-team-sub').textContent=`${myTeam.membros?.length||0} membros · ${pos}° lugar`;
    document.getElementById('my-team-pts').textContent=`${myTeam.pontos||0} ⬡`;
  }else{myTeamCard.style.display='none';}
  // ev balance
  const evBal=CU.evBalance||0;
  document.getElementById('ev-prata-bal').textContent=evBal;
  // admin toggle
  const tog=document.getElementById('ev-toggle');
  const sub=document.getElementById('ev-toggle-sub');
  if(tog)tog.classList.toggle('off',!evData.ativo);
  if(sub)sub.textContent=evData.nome;
  if(document.getElementById('ev-moeda-nome-inp'))document.getElementById('ev-moeda-nome-inp').value=evMoeda;
  // ranking
  loadEvRanking(timesSnap);
  // admin ranking individual
  if(CU.admin)loadEvRankingIndividual();
  // wallet txs
  loadEvWalletTxs();
}

function updateEvLabels(){
  const labels=['ev-prata-label','ev-prata-label2','ev-prata-screen-title','ev-tr-title','ev-dar-title','ev-hist-title','ev-tr-qty-label','ev-dar-qty-label'];
  const vals=[`saldo de ${evMoeda.toLowerCase()}`,`saldo de ${evMoeda.toLowerCase()}`,`${evMoeda} · Evento`,`enviar ${evMoeda.toLowerCase()}`,`dar ${evMoeda.toLowerCase()} <span class="tag-ev">admin</span>`,`extrato de ${evMoeda.toLowerCase()}`,`quantidade de ${evMoeda.toLowerCase()}`,`quantidade de ${evMoeda.toLowerCase()}`];
  labels.forEach((id,i)=>{const el=document.getElementById(id);if(el)el.innerHTML=vals[i];});
}

function getTeamPos(snap,teamId){
  const teams=[];
  snap.forEach(d=>teams.push({id:d.id,...d.data()}));
  teams.sort((a,b)=>(b.pontos||0)-(a.pontos||0));
  return(teams.findIndex(t=>t.id===teamId)+1)||'-';
}

function loadEvRanking(snap){
  const el=document.getElementById('ev-ranking-list');
  const teams=[];
  snap.forEach(d=>teams.push({id:d.id,...d.data()}));
  teams.sort((a,b)=>(b.pontos||0)-(a.pontos||0));
  if(!teams.length){el.innerHTML='<div class="empty">nenhum time criado</div>';return;}
  const maxPts=teams[0].pontos||1;
  const medals=['🥇','🥈','🥉'];
  const rowCls=['tr-1','tr-2','tr-3','tr-4'];
  el.innerHTML=teams.map((t,i)=>{
    const avatarBox=t.foto
      ?`<img src="${t.foto}" style="width:36px;height:36px;border-radius:10px;object-fit:cover;border:2px solid ${t.cor||'#5b21b6'};flex-shrink:0"/>`
      :`<div class="t-color-box" style="background:${t.cor||'#5b21b6'};color:#fff">${t.nome.slice(0,2)}</div>`;
    return`<div class="team-row ${rowCls[i]||'tr-4'}">
      <div class="t-pos">${medals[i]||i+1}</div>
      ${avatarBox}
      <div class="t-info-col">
        <div class="t-name">${t.nome}</div>
        <div class="t-bar-wrap"><div class="t-bar" style="width:${Math.round(((t.pontos||0)/maxPts)*100)}%;background:${t.cor||'#7c3aed'}"></div></div>
      </div>
      <div class="t-pts-col">${t.pontos||0}</div>
    </div>`;
  }).join('');
}

async function loadEvRankingIndividual(){
  const el=document.getElementById('ev-ranking-individual');
  if(!el)return;
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const snap=await getUsers();
    const members=[];
    snap.forEach(d=>{const data=d.data();if(!data.admin&&data.status==='approved')members.push({id:d.id,name:data.name,evBal:data.evBalance||0,foto:data.foto});});;
    members.sort((a,b)=>b.evBal-a.evBal);
    // get teams for member
    const timesSnap=await getDocs(query(collection(db,'times'),where('eventoId','==',evData.id)));
    const memberTeam={};
    timesSnap.forEach(d=>{const data=d.data();(data.membros||[]).forEach(mid=>memberTeam[mid]={nome:data.nome,cor:data.cor||'#5b21b6'});});
    el.innerHTML=members.slice(0,20).map(m=>{
      const team=memberTeam[m.id];
      const av=m.foto?`<img src="${m.foto}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"/>`:`${inits(m.name)}`;
      return`<div class="ev-member-row">
        <div class="ev-m-av" style="background:${team?.cor||'#5b21b6'};color:#fff">${av}</div>
        <div class="ev-m-name">${m.name}${team?` · ${team.nome}`:''}</div>
        <div class="ev-m-pts">${m.evBal} ⬡</div>
      </div>`;
    }).join('')||'<div class="empty">nenhum dado</div>';
  }catch(e){el.innerHTML='<div class="empty">erro</div>';}
}

async function loadEvWalletTxs(){
  const el=document.getElementById('ev-wallet-txs');
  if(!el)return;
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const q=query(collection(db,'ev_transactions'),where('participants','array-contains',CU.id),orderBy('createdAt','desc'),limit(30));
    const snap=await getDocs(q);
    el.innerHTML=snap.empty?'<div class="empty">nenhuma transacao</div>':snap.docs.map(d=>{
      const tx=d.data();const isIn=tx.to===CU.id;
      return`<div class="tx-item">
        <div class="tx-icon cev">⬡</div>
        <div class="tx-info"><div class="tx-cat">${tx.desc||'Evento'}</div>${tx.obs?`<div class="tx-obs">💬 ${tx.obs}</div>`:''}<div class="tx-date">${fmtDt(tx.createdAt)}</div></div>
        <div class="tx-amt ${isIn?'in':'out'}">${isIn?'+':'-'}${tx.amount} ⬡</div>
      </div>`;
    }).join('');
  }catch(e){el.innerHTML='<div class="empty">erro</div>';}
}

// ── EV PRATA HOME ──
async function loadEvPrata(){
  if(!evData)await loadEvStatus();
  updateEvLabels();
  const evBal=CU.evBalance||0;
  document.getElementById('ev-prata-bal2').textContent=evBal;
  const el=document.getElementById('ev-prata-txs');
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const q=query(collection(db,'ev_transactions'),where('participants','array-contains',CU.id),orderBy('createdAt','desc'),limit(30));
    const snap=await getDocs(q);
    el.innerHTML=snap.empty?'<div class="empty">nenhuma transacao</div>':snap.docs.map(d=>{
      const tx=d.data();const isIn=tx.to===CU.id;
      return`<div class="tx-item"><div class="tx-icon cev">⬡</div><div class="tx-info"><div class="tx-cat">${tx.desc||'Evento'}</div>${tx.obs?`<div class="tx-obs">💬 ${tx.obs}</div>`:''}<div class="tx-date">${fmtDt(tx.createdAt)}</div></div><div class="tx-amt ${isIn?'in':'out'}">${isIn?'+':'-'}${tx.amount} ⬡</div></div>`;
    }).join('');
  }catch(e){el.innerHTML='<div class="empty">erro</div>';}
}

async function loadEvHistory(){
  const el=document.getElementById('ev-hist-txs');
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const q=query(collection(db,'ev_transactions'),where('participants','array-contains',CU.id),orderBy('createdAt','desc'),limit(100));
    const snap=await getDocs(q);
    el.innerHTML=snap.empty?'<div class="empty">nenhuma transacao</div>':snap.docs.map(d=>{
      const tx=d.data();const isIn=tx.to===CU.id;
      return`<div class="tx-item"><div class="tx-icon cev">⬡</div><div class="tx-info"><div class="tx-cat">${tx.desc||'Evento'}</div>${tx.obs?`<div class="tx-obs">💬 ${tx.obs}</div>`:''}<div class="tx-date">${fmtDt(tx.createdAt)}</div></div><div class="tx-amt ${isIn?'in':'out'}">${isIn?'+':'-'}${tx.amount} ⬡</div></div>`;
    }).join('');
  }catch(e){el.innerHTML='<div class="empty">erro</div>';}
}

// ── EV TRANSFER ──
async function loadEvTransferMembers(){
  if(!evData)await loadEvStatus();
  const sel=document.getElementById('ev-tr-to');
  sel.innerHTML='<option>carregando...</option>';
  try{
    const snap=await getUsers();
    const opts=[];
    snap.forEach(d=>{const data=d.data();if(d.id!==CU.id&&data.status==='approved')opts.push(`<option value="${d.id}">${data.name}${data.admin?' (admin)':''}</option>`);});
    sel.innerHTML=opts.join('')||'<option disabled>nenhum membro</option>';
  }catch(e){sel.innerHTML='<option>erro</option>';}
}

window.confirmarEvTransfer=function(){
  const toId=document.getElementById('ev-tr-to').value;
  const amt=parseInt(document.getElementById('ev-tr-amt').value);
  const msg=document.getElementById('ev-tr-msg').value.trim();
  if(!toId){showErr('ev-tr-err','selecione um membro');return;}
  if(!amt||amt<=0){showErr('ev-tr-err','valor invalido');return;}
  if(amt>(CU.evBalance||0)){showErr('ev-tr-err','saldo de '+evMoeda+' insuficiente');return;}
  const toName=document.getElementById('ev-tr-to').options[document.getElementById('ev-tr-to').selectedIndex]?.text||toId;
  openModal('confirmar envio',`Enviar ${amt} ${evMoeda} para ${toName}?${msg?'\n"'+msg+'"':''}`,()=>doEvTransfer(toId,amt,msg,toName));
};

async function doEvTransfer(toId,amt,msg,toName){
  setLoad('ev-tr-btn',true);
  try{
    const fR=doc(db,'users',CU.id),tR=doc(db,'users',toId);
    await runTransaction(db,async t=>{
      const fS=await t.get(fR),tS=await t.get(tR);
      if((fS.data().evBalance||0)<amt)throw new Error('saldo insuficiente');
      t.update(fR,{evBalance:(fS.data().evBalance||0)-amt});
      t.update(tR,{evBalance:(tS.data().evBalance||0)+amt});
    });
    await addDoc(collection(db,'ev_transactions'),{from:CU.id,to:toId,participants:[CU.id,toId],amount:amt,desc:`${CU.name} enviou para ${toName}`,obs:msg,createdAt:serverTimestamp()});
    await notif(toId,`${CU.name} te enviou ${amt} ${evMoeda}${msg?' — "'+msg+'"':''}! ⬡`,'⬡');
    CU.evBalance=(CU.evBalance||0)-amt;
    document.getElementById('ev-tr-amt').value='';
    document.getElementById('ev-tr-msg').value='';
    toast(`${amt} ${evMoeda} enviados!`);
    setTimeout(()=>goBack(),1000);
  }catch(e){showErr('ev-tr-err',e.message||'erro');}
  finally{setLoad('ev-tr-btn',false);}
}

// ── EV DAR (admin) ──
async function loadEvDarSelects(){
  if(!evData)await loadEvStatus();
  updateEvLabels();
  const sel=document.getElementById('ev-dar-member');
  sel.innerHTML='<option>carregando...</option>';
  try{
    const snap=await getUsers();
    const opts=[];
    snap.forEach(d=>{const data=d.data();if(data.status==='approved')opts.push(`<option value="${d.id}">${data.name}</option>`);});
    sel.innerHTML=opts.join('')||'<option disabled>nenhum membro</option>';
  }catch(e){}
}

window.doEvDar=async function(){
  const toId=document.getElementById('ev-dar-member').value;
  const amt=parseInt(document.getElementById('ev-dar-amt').value);
  const obs=document.getElementById('ev-dar-obs').value.trim();
  if(!toId){showErr('ev-dar-err','selecione membro');return;}
  if(!amt||amt<=0){showErr('ev-dar-err','valor invalido');return;}
  setLoad('ev-dar-btn',true);
  try{
    const ref=doc(db,'users',toId);
    const snap=await getDoc(ref);
    await updateDoc(ref,{evBalance:(snap.data().evBalance||0)+amt});
    const name=snap.data().name;
    await addDoc(collection(db,'ev_transactions'),{from:'admin',to:toId,participants:['admin',toId],amount:amt,desc:obs||`${evMoeda} distribuida pelo admin`,obs:'',createdAt:serverTimestamp()});
    await notif(toId,`Voce recebeu ${amt} ${evMoeda} do admin${obs?' — "'+obs+'"':''}! ⬡`,'⬡');
    if(toId===CU.id)CU.evBalance=(CU.evBalance||0)+amt;
    invalidateUsersCache(); // invalida cache pois saldo mudou
    // update team points (sum of members)
    if(evData){
      const timesSnap=await getDocs(query(collection(db,'times'),where('eventoId','==',evData.id)));
      timesSnap.forEach(async d=>{
        const data=d.data();
        if(data.membros&&data.membros.includes(toId)){
          // recalc team points usando getDocs fresco para precisão
          let total=0;
          const membersSnap=await getDocs(collection(db,'users'));
          membersSnap.forEach(md=>{if(data.membros.includes(md.id))total+=(md.data().evBalance||0);});
          await updateDoc(doc(db,'times',d.id),{pontos:total+(data.extraPontos||0)});
        }
      });
    }
    document.getElementById('ev-dar-amt').value='';
    document.getElementById('ev-dar-obs').value='';
    toast(`+${amt} ${evMoeda} para ${name}!`);
  }catch(e){showErr('ev-dar-err','erro: '+e.message);}
  finally{setLoad('ev-dar-btn',false);}
};

// ── EV PTS TIMES (admin) ──
async function loadEvPtsSelects(){
  if(!evData)await loadEvStatus();
  const sel=document.getElementById('ev-pts-team');
  sel.innerHTML='<option>carregando...</option>';
  try{
    const snap=await getDocs(query(collection(db,'times'),where('eventoId','==',evData.id)));
    sel.innerHTML=snap.docs.map(d=>`<option value="${d.id}">${d.data().nome}</option>`).join('')||'<option disabled>nenhum time</option>';
  }catch(e){}
}

window.doEvPts=async function(){
  const teamId=document.getElementById('ev-pts-team').value;
  const op=document.getElementById('ev-pts-op').value;
  const amt=parseInt(document.getElementById('ev-pts-amt').value);
  const obs=document.getElementById('ev-pts-obs').value.trim();
  if(!teamId){showErr('ev-pts-err','selecione um time');return;}
  if(!amt||amt<=0){showErr('ev-pts-err','valor invalido');return;}
  setLoad('ev-pts-btn',true);
  try{
    const ref=doc(db,'times',teamId);
    const snap=await getDoc(ref);
    const data=snap.data();
    const curExtra=data.extraPontos||0;
    const newExtra=op==='add'?curExtra+amt:Math.max(0,curExtra-amt);
    // recalc member sum
    let memberSum=0;
    const usersSnap=await getDocs(collection(db,'users'));
    usersSnap.forEach(d=>{if((data.membros||[]).includes(d.id))memberSum+=(d.data().evBalance||0);});
    await updateDoc(ref,{extraPontos:newExtra,pontos:memberSum+newExtra});
    const teamName=data.nome;
    document.getElementById('ev-pts-amt').value='';
    document.getElementById('ev-pts-obs').value='';
    toast(`${op==='add'?'+':'-'}${amt} pts para ${teamName}!`);
    loadEvPtsSelects();
  }catch(e){showErr('ev-pts-err','erro: '+e.message);}
  finally{setLoad('ev-pts-btn',false);}
};

// ── EV TIMES ──
async function loadEvTimes(){
  if(!evData)await loadEvStatus();
  const el=document.getElementById('ev-times-list');
  el.innerHTML='<div class="empty">carregando...</div>';
  try{
    const snap=await getDocs(query(collection(db,'times'),where('eventoId','==',evData.id)));
    if(snap.empty){el.innerHTML='<div class="empty">nenhum time criado ainda</div>';return;}
    const usersSnap=await getUsers();
    const userMap={};
    usersSnap.forEach(d=>userMap[d.id]={name:d.data().name,status:d.data().status});
    el.innerHTML=snap.docs.map(d=>{
      const t=d.data();
      const membrosHtml=(t.membros||[]).filter(m=>userMap[m]).map(m=>`<div style="font-size:12px;color:rgba(233,213,255,.6);padding:3px 0;border-bottom:1px solid rgba(255,255,255,.05)">${userMap[m]?.name||m} <button onclick="removerDoTime('${d.id}','${m}')" style="float:right;background:rgba(239,68,68,.15);color:#f87171;border:none;border-radius:6px;padding:2px 6px;font-size:10px;cursor:pointer">remover</button></div>`).join('');
      return`<div class="ev-admin-card" style="margin-bottom:.75rem">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:.75rem">
          <div style="width:32px;height:32px;border-radius:10px;background:${t.cor||'#5b21b6'};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px">${t.nome.slice(0,2)}</div>
          <div style="flex:1"><div style="font-size:14px;font-weight:700;color:#e9d5ff">${t.nome}</div><div style="font-size:11px;color:rgba(233,213,255,.4)">${(t.membros||[]).length} membros · ${t.pontos||0} pts</div></div>
          <button onclick="deletarTime('${d.id}','${t.nome}')" style="background:rgba(239,68,68,.15);color:#f87171;border:none;border-radius:8px;padding:5px 8px;font-size:11px;cursor:pointer">deletar</button>
        </div>
        <div style="margin-bottom:.5rem">${membrosHtml||'<div style="font-size:12px;color:rgba(233,213,255,.4)">nenhum membro ainda</div>'}</div>
        <div style="display:flex;gap:6px;margin-top:.5rem;align-items:center">
          <div class="ms-wrap inline" id="ms-wrap-${d.id}" style="flex:1">
            <div class="ms-trigger" id="ms-trg-${d.id}" onclick="toggleMS('${d.id}')">selecionar membro</div>
            <div class="ms-dropdown" id="ms-dd-${d.id}">
              <div class="ms-search"><input type="text" placeholder="buscar..." oninput="filterMS('${d.id}',this.value)" id="ms-srch-${d.id}"/></div>
              <div id="ms-list-${d.id}">
                ${usersSnap.docs.filter(u=>!u.data().admin&&u.data().status==='approved'&&!(t.membros||[]).includes(u.id)).map(u=>`<div class="ms-option" data-id="${u.id}" data-name="${u.data().name}" onclick="toggleMSOption(this,'${d.id}')"><input type="checkbox" onclick="event.stopPropagation()"/><span class="ms-option-name">${u.data().name}</span></div>`).join('')||'<div class="ms-empty">nenhum disponível</div>'}
              </div>
            </div>
          </div>
          <button onclick="adicionarAoTime('${d.id}')" style="background:rgba(139,92,246,.25);border:1px solid rgba(139,92,246,.3);border-radius:8px;padding:7px 12px;font-size:12px;font-weight:700;color:#c4b5fd;cursor:pointer;font-family:Inter,sans-serif;white-space:nowrap;flex-shrink:0">+ add</button>
        </div>
      </div>`;
    }).join('');
    // registra items no _msData para cada time
    snap.docs.forEach(d=>{
      const t=d.data();
      const items=usersSnap.docs.filter(u=>!u.data().admin&&u.data().status==='approved'&&!(t.membros||[]).includes(u.id)).map(u=>({id:u.id,name:u.data().name}));
      items.sort((a,b)=>a.name.localeCompare(b.name));
      _msData[d.id]={items,selected:new Set()};
    });
  }catch(e){el.innerHTML='<div class="empty">erro: '+e.message+'</div>';}
}

window.adicionarAoTime=async function(teamId){
  const selecionados=getMSSelected(teamId);
  if(!selecionados.length){toast('selecione ao menos um membro');return;}
  try{
    const ref=doc(db,'times',teamId);
    const snap=await getDoc(ref);
    const data=snap.data();
    const membros=data.membros||[];
    const modo=data.modo||'unico';
    const novos=selecionados.filter(m=>!membros.includes(m));
    if(!novos.length){toast('membros ja estao no time');return;}
    // se modo unico, remove esses membros de outros times
    if(modo==='unico'){
      const timesSnap=await getDocs(query(collection(db,'times'),where('eventoId','==',evData.id)));
      await Promise.all(timesSnap.docs.filter(d=>d.id!==teamId).map(async d=>{
        const td=d.data();
        const filtered=(td.membros||[]).filter(m=>!novos.includes(m));
        if(filtered.length!==(td.membros||[]).length)
          await updateDoc(doc(db,'times',d.id),{membros:filtered});
      }));
    }
    await updateDoc(ref,{membros:[...membros,...novos]});
    toast(`${novos.length} membro(s) adicionado(s)!`);
    if(_msData[teamId])_msData[teamId].selected=new Set();
    loadEvTimes();
  }catch(e){toast('erro: '+e.message);}
};


// ── EDITAR FOTO DO TIME ──
window.editarFotoTime=async function(teamId){
  const input=document.createElement('input');
  input.type='file';input.accept='image/*';
  input.onchange=async function(){
    const file=input.files[0];if(!file)return;
    toast('comprimindo foto...');
    try{
      const b64=await comprimirImg(file,300,300,0.8);
      await updateDoc(doc(db,'times',teamId),{foto:b64});
      toast('foto do time atualizada!');
      loadEvTimes();
    }catch(e){toast('erro: '+e.message);}
  };
  input.click();
};


window.toggleMembrosTime=function(tid){
  const el=document.getElementById('membros-'+tid);
  const arrow=document.getElementById('arrow-'+tid);
  if(!el)return;
  const open=el.style.display==='none';
  el.style.display=open?'block':'none';
  if(arrow)arrow.textContent=open?'▲':'▼';
};

window.removerDoTime=async function(teamId,memberId){
  try{
    const ref=doc(db,'times',teamId);
    const snap=await getDoc(ref);
    const membros=(snap.data().membros||[]).filter(m=>m!==memberId);
    await updateDoc(ref,{membros});
    toast('membro removido');
    loadEvTimes();
  }catch(e){toast('erro');}
};

window.deletarTime=function(teamId,name){
  openModal('deletar time',`Deletar o ${name}? Irreversivel.`,async()=>{
    try{await deleteDoc(doc(db,'times',teamId));toast('time deletado');loadEvTimes();}
    catch(e){toast('erro');}
  },true);
};

window.criarTime=async function(){
  const nome=document.getElementById('ct-nome').value.trim();
  const cor=document.getElementById('ct-cor').value;
  const prev=document.getElementById('ct-foto-prev');
  const foto=prev&&prev.style.display!=='none'?prev.src:'';
  const modo=document.querySelector('input[name="ct-modo"]:checked')?.value||'unico';
  // membros selecionados no multiselect customizado
  const membros=getMSSelected('ct');
  if(!nome){showErr('ct-err','informe o nome do time');return;}
  if(!evData){showErr('ct-err','nenhum evento ativo');return;}
  setLoad('ct-btn',true);
  try{
    // se modo unico, remover esses membros de outros times primeiro
    if(modo==='unico'&&membros.length>0){
      const timesSnap=await getDocs(query(collection(db,'times'),where('eventoId','==',evData.id)));
      await Promise.all(timesSnap.docs.map(async d=>{
        const data=d.data();
        const novosMembros=(data.membros||[]).filter(m=>!membros.includes(m));
        if(novosMembros.length!==(data.membros||[]).length)
          await updateDoc(doc(db,'times',d.id),{membros:novosMembros});
      }));
    }
    await addDoc(collection(db,'times'),{nome,cor,foto,modo,eventoId:evData.id,membros,pontos:0,extraPontos:0,createdAt:serverTimestamp()});
    document.getElementById('ct-nome').value='';
    if(prev){prev.style.display='none';prev.src='';}
    const ph=document.getElementById('ct-foto-ph');if(ph)ph.style.display='flex';
    const inp=document.getElementById('ct-foto-inp');if(inp)inp.value='';
    toast('time criado com '+(membros.length)+' membro(s)!');
    goBack();
  }catch(e){showErr('ct-err','erro: '+e.message);}
  finally{setLoad('ct-btn',false);}
};

// ── EV TOGGLE ──
window.toggleEvento=async function(){
  if(!evData){toast('nenhum evento ativo');return;}
  try{
    const newAtivo=!evData.ativo;
    await updateDoc(doc(db,'eventos',evData.id),{ativo:newAtivo});
    evData.ativo=newAtivo;
    const tog1=document.getElementById('ev-toggle');
    const tog2=document.getElementById('ev-ah-toggle');
    if(tog1)tog1.classList.toggle('off',!newAtivo);
    if(tog2)tog2.classList.toggle('off',!newAtivo);
    toast(newAtivo?'evento ativado!':'evento pausado');
    loadEvStatus();
  }catch(e){toast('erro: '+e.message);}
};


window.deletarEvento=function(){
  if(!evData)return;
  openModal('deletar evento',`Deletar "${evData.nome}" permanentemente? Os saldos de ${evMoeda} serao zerados e o evento removido.`,async()=>{
    try{
      // zerar ev balances
      const snap=await getDocs(collection(db,'users'));
      await Promise.all(snap.docs.filter(d=>(d.data().evBalance||0)>0).map(d=>updateDoc(doc(db,'users',d.id),{evBalance:0})));
      // deletar times do evento
      const timesSnap=await getDocs(query(collection(db,'times'),where('eventoId','==',evData.id)));
      await Promise.all(timesSnap.docs.map(d=>deleteDoc(doc(db,'times',d.id))));
      // deletar evento
      await deleteDoc(doc(db,'eventos',evData.id));
      evData=null;myTeam=null;evMoeda='Prata';
      toast('evento deletado!');
      goTo('s-home');
      await loadEvStatus();
    }catch(e){toast('erro: '+e.message);}
  },true);
};

window.encerrarEvento=function(){
  openModal('encerrar evento',`Encerrar o evento "${evData?.nome}"? Os saldos de ${evMoeda} serao zerados.`,async()=>{
    try{
      await updateDoc(doc(db,'eventos',evData.id),{ativo:false,encerradoEm:serverTimestamp()});
      // zerar ev balances
      const snap=await getDocs(collection(db,'users'));
      const batch=[];
      snap.forEach(d=>{if((d.data().evBalance||0)>0)batch.push(updateDoc(doc(db,'users',d.id),{evBalance:0}));});
      await Promise.all(batch);
      evData=null;myTeam=null;
      toast('evento encerrado!');
      goTo('s-home');
      loadEvStatus();
    }catch(e){toast('erro: '+e.message);}
  },true);
};

window.salvarNomeMoeda=async function(){
  const nome=document.getElementById('ev-moeda-nome-inp').value.trim()||'Prata';
  if(!evData)return;
  try{
    await updateDoc(doc(db,'eventos',evData.id),{moeda:nome});
    evMoeda=nome;
    updateEvLabels();
    const hb=document.getElementById('ev-moeda-home-btn');
    if(hb)hb.textContent=nome+' · Evento';
    toast('nome atualizado para "'+nome+'"!');
  }catch(e){toast('erro: '+e.message);}
};

// ── EV ADMIN HOME ──
async function loadEvAdminHome(){
  await loadEvStatus();
  const statusEl=document.getElementById('ev-ah-status');
  const nameEl=document.getElementById('ev-ah-name');
  const tog=document.getElementById('ev-ah-toggle');
  const title=document.getElementById('ev-admin-home-title');
  if(evData){
    if(statusEl)statusEl.textContent=evData.ativo?'Evento ativo':'Evento pausado';
    if(nameEl)nameEl.textContent=evData.nome;
    if(tog)tog.classList.toggle('off',!evData.ativo);
    if(title)title.innerHTML=evData.nome.slice(0,12)+' <span class="tag-a">admin</span>';
    // load ranking
    const timesSnap=await getDocs(query(collection(db,'times'),where('eventoId','==',evData.id)));
    const el=document.getElementById('ev-ah-ranking');
    if(el){
      const teams=[];timesSnap.forEach(d=>teams.push({id:d.id,...d.data()}));
      teams.sort((a,b)=>(b.pontos||0)-(a.pontos||0));
      el.innerHTML=teams.map((t,i)=>`<div class="ev-member-row"><div class="ev-m-av" style="background:${t.cor||'#5b21b6'};color:#fff">${i+1}</div><div class="ev-m-name">${t.nome}</div><div class="ev-m-pts">${t.pontos||0} pts</div></div>`).join('')||'<div class="empty">sem times</div>';
    }
  }else{
    if(statusEl)statusEl.textContent='Nenhum evento ativo';
    if(nameEl)nameEl.textContent='crie um novo evento abaixo';
    if(tog)tog.classList.add('off');
    const el=document.getElementById('ev-ah-ranking');
    if(el)el.innerHTML='<div class="empty">sem evento ativo</div>';
  }
}

// ── CRIAR EVENTO ──
window.criarEvento=async function(){
  const nome=document.getElementById('ce-nome').value.trim();
  const moeda=document.getElementById('ce-moeda').value.trim()||'Prata';
  const naoRepetir=document.getElementById('ce-nao-repetir')?.checked!==false;
  if(!nome){showErr('ce-err','informe o nome do evento');return;}
  setLoad('ce-btn',true);
  try{
    const ativos=await getDocs(query(collection(db,'eventos'),where('ativo','==',true)));
    await Promise.all(ativos.docs.map(d=>updateDoc(doc(db,'eventos',d.id),{ativo:false})));
    await addDoc(collection(db,'eventos'),{nome,moeda,naoRepetir,ativo:true,criadoEm:serverTimestamp()});
    document.getElementById('ce-nome').value='';
    document.getElementById('ce-moeda').value='';
    toast('evento criado e ativado!');
    await loadEvStatus();
    goBack();
  }catch(e){showErr('ce-err','erro: '+e.message);}
  finally{setLoad('ce-btn',false);}
};



// ── MULTISELECT CUSTOMIZADO ──
// _msData: { [msId]: { items:[{id,name}], selected:Set } }
const _msData={};

window.toggleMS=function(msId){
  const dd=document.getElementById(`${msId==='ct'?'ct-ms-':'ms-dd-'}${msId==='ct'?'dropdown':msId}`);
  const trg=document.getElementById(`${msId==='ct'?'ct-ms-trigger':`ms-trg-${msId}`}`);
  if(!dd||!trg)return;
  const isOpen=dd.classList.contains('open');
  // fecha todos abertos
  document.querySelectorAll('.ms-dropdown.open').forEach(el=>{el.classList.remove('open');el.previousElementSibling?.classList.remove('open');});
  if(!isOpen){dd.classList.add('open');trg.classList.add('open');}
};

window.toggleMSOption=function(el,msId){
  const id=el.dataset.id;
  const name=el.dataset.name;
  if(!_msData[msId])_msData[msId]={items:[],selected:new Set()};
  const sel=_msData[msId].selected;
  const cb=el.querySelector('input[type=checkbox]');
  if(sel.has(id)){sel.delete(id);el.classList.remove('selected');if(cb)cb.checked=false;}
  else{sel.add(id);el.classList.add('selected');if(cb)cb.checked=true;}
  updateMSTrigger(msId);
};

function updateMSTrigger(msId){
  const trg=document.getElementById(msId==='ct'?'ct-ms-trigger':`ms-trg-${msId}`);
  if(!trg)return;
  const sel=_msData[msId]?.selected;
  if(!sel||sel.size===0){trg.childNodes[0]&&(trg.childNodes[0].textContent='selecionar membro');trg.innerHTML=msId==='ct'?'nenhum selecionado':'selecionar membro';}
  else{const names=_msData[msId].items.filter(i=>sel.has(i.id)).map(i=>i.name.split(' ')[0]);trg.innerHTML=`<span style="color:#c4b5fd;font-weight:700">${sel.size} selecionado${sel.size>1?'s':''}</span><span style="color:rgba(196,181,253,.5);font-size:11px;margin-left:6px">${names.slice(0,3).join(', ')}${names.length>3?'...':''}</span>`;}
}

function getMSSelected(msId){
  return _msData[msId]?[..._msData[msId].selected]:[];
}

function populateMS(msId,items){
  const listEl=document.getElementById(msId==='ct'?'ct-ms-list':`ms-list-${msId}`);
  if(!listEl)return;
  if(!_msData[msId])_msData[msId]={items:[],selected:new Set()};
  _msData[msId].items=items;
  if(!items.length){listEl.innerHTML='<div class="ms-empty">nenhum membro disponível</div>';return;}
  listEl.innerHTML=items.map(m=>`<div class="ms-option${_msData[msId].selected.has(m.id)?' selected':''}" data-id="${m.id}" data-name="${m.name}" onclick="toggleMSOption(this,'${msId}')"><input type="checkbox" ${_msData[msId].selected.has(m.id)?'checked':''} onclick="event.stopPropagation()"/><span class="ms-option-name">${m.name}</span></div>`).join('');
  updateMSTrigger(msId);
}

window.filterMS=function(msId,q){
  if(!_msData[msId])return;
  const txt=q.trim().toLowerCase();
  const filtered=txt?_msData[msId].items.filter(m=>m.name.toLowerCase().includes(txt)):_msData[msId].items;
  const listEl=document.getElementById(msId==='ct'?'ct-ms-list':`ms-list-${msId}`);
  if(!listEl)return;
  if(!filtered.length){listEl.innerHTML='<div class="ms-empty">nenhum resultado</div>';return;}
  listEl.innerHTML=filtered.map(m=>`<div class="ms-option${_msData[msId].selected.has(m.id)?' selected':''}" data-id="${m.id}" data-name="${m.name}" onclick="toggleMSOption(this,'${msId}')"><input type="checkbox" ${_msData[msId].selected.has(m.id)?'checked':''} onclick="event.stopPropagation()"/><span class="ms-option-name">${m.name}</span></div>`).join('');
};

// fechar dropdown ao clicar fora
document.addEventListener('click',e=>{
  if(!e.target.closest('.ms-wrap')){
    document.querySelectorAll('.ms-dropdown.open').forEach(el=>{el.classList.remove('open');el.previousElementSibling?.classList.remove('open');});
  }
});

// ── LOAD MEMBROS PARA CRIAR TIME ──
async function loadCriarTimeMembers(){
  const listEl=document.getElementById('ct-ms-list');
  if(!listEl)return;
  listEl.innerHTML='<div class="ms-empty">carregando...</div>';
  // reseta seleção ao abrir a tela
  if(_msData['ct'])_msData['ct'].selected=new Set();
  updateMSTrigger('ct');
  try{
    const snap=await getUsers();
    const items=[];
    snap.forEach(d=>{const data=d.data();if(!data.admin&&data.status==='approved')items.push({id:d.id,name:data.name});});
    items.sort((a,b)=>a.name.localeCompare(b.name));
    populateMS('ct',items);
  }catch(e){listEl.innerHTML='<div class="ms-empty">erro ao carregar</div>';}
}

// ── EV QR ──
let evQRMode='livre', evHtml5Scan=null;

window.switchEvQRTab=function(tab){
  document.getElementById('ev-qr-tab-meu').classList.toggle('active',tab==='meu');
  document.getElementById('ev-qr-tab-scan').classList.toggle('active',tab==='scan');
  document.getElementById('ev-qr-panel-meu').style.display=tab==='meu'?'block':'none';
  document.getElementById('ev-qr-panel-scan').style.display=tab==='scan'?'block':'none';
  if(tab==='scan')pararEvScan();
};

window.setEvQRMode=function(mode){
  evQRMode=mode;
  document.getElementById('ev-qr-livre-btn').style.background=mode==='livre'?'var(--card3)':'var(--card2)';
  document.getElementById('ev-qr-valor-btn').style.background=mode==='valor'?'var(--card3)':'var(--card2)';
  document.getElementById('ev-qr-valor-input').style.display=mode==='valor'?'block':'none';
  gerarEvQR();
};

window.gerarEvQR=function(){
  if(!CU)return;
  const canvas=document.getElementById('ev-qr-canvas');
  canvas.innerHTML='';
  const amt=evQRMode==='valor'?parseInt(document.getElementById('ev-qr-amt').value)||0:0;
  const data=amt>0
    ?`dracmas-adc://ev-pay?to=${CU.id}&amount=${amt}`
    :`dracmas-adc://ev-pay?to=${CU.id}`;
  try{
    new QRCode(canvas,{text:data,width:200,height:200,colorDark:'#4c1d95',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.H});
  }catch(e){}
  const lbl=document.getElementById('ev-qr-label');
  if(lbl)lbl.textContent=CU.name+' · @'+CU.id+(amt>0?' · '+amt+' '+evMoeda:'');
};

window.iniciarEvScan=function(){
  document.getElementById('ev-qr-reader-wrap').style.display='block';
  evHtml5Scan=new Html5Qrcode('ev-qr-reader');
  evHtml5Scan.start({facingMode:'environment'},{fps:10,qrbox:{width:250,height:250}},async decoded=>{
    await pararEvScan();
    try{
      const url=new URL(decoded);
      if(url.protocol!=='dracmas-adc:'){toast('QR invalido para evento');return;}
      const to=url.searchParams.get('to');
      const amt=url.searchParams.get('amount');
      if(!to){toast('QR invalido');return;}
      // prefill ev transfer
      await loadEvTransferMembers();
      const sel=document.getElementById('ev-tr-to');
      for(let i=0;i<sel.options.length;i++){if(sel.options[i].value===to){sel.selectedIndex=i;break;}}
      if(amt)document.getElementById('ev-tr-amt').value=amt;
      goTo('s-ev-transfer');
      toast('QR lido! confirme o envio');
    }catch(e){toast('QR invalido');}
  },()=>{}).catch(e=>{toast('erro camera: '+e);document.getElementById('ev-qr-reader-wrap').style.display='none';});
};

window.pararEvScan=async function(){
  if(evHtml5Scan){try{await evHtml5Scan.stop();}catch(e){}evHtml5Scan=null;}
  document.getElementById('ev-qr-reader-wrap').style.display='none';
};

// ── ENTER KEYS ──
document.getElementById('l-pw')?.addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
document.getElementById('r-pw2')?.addEventListener('keydown',e=>{if(e.key==='Enter')doRegister();});
document.getElementById('cp-new2')?.addEventListener('keydown',e=>{if(e.key==='Enter')doChangePw();});

// ── INIT ──
async function init(){
  initTheme();
  try{
    const ref=doc(db,'users','admin');
    if(!(await getDoc(ref)).exists()){
      await setDoc(ref,{name:'Administrador',password:'admin123',balance:0,evBalance:0,admin:true,status:'approved',createdAt:serverTimestamp()});
    }
  }catch(e){}
  goTo('s-login');
}
init();

</script>
</body>
</html>
