 padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verda/* Configurações Gerais e Reset */
* {
    margin: 0;
   na, sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: #fcf8f7;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
}

/* Cabeçalho */
header {
    background-color: #8b0000; /* Vermelho Escuro */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

header .logo {
    font-size: 24px;
    font-weight: bold;
}

header .logo span {
    color: #ff4d4d; /* Vermelho mais claro */
}

header nav ul {
    display: flex;
    list-style: none;
}

header nav ul li {
    margin-left: 20px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}

header nav ul li a:hover {
    color: #ff4d4d;
}

/* Seção Hero */
.hero {
    background: linear-gradient(rgba(139, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), 
                url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1920') no-repeat center center/cover;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    padding: 0 20px;
}

.hero-content h1 {
    font-size: 48px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
    font-size: 20px;
    max-width: 600px;
    margin: 0 auto 30px auto;
}

.btn-principal {
    background-color: #d92b2b; /* Vermelho Vivo */
    color: #fff;
    padding: 12px 30px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s;
    display: inline-block;
}

.btn-principal:hover {
    background-color: #b31e1e;
    transform: translateY(-2px);
}

/* Títulos de Seção */
.titulo-secao {
    text-align: center;
    font-size: 32px;
    color: #8b0000;
    margin-bottom: 40px;
    position: relative;
}

.titulo-secao::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #d92b2b;
    margin: 10px auto 0 auto;
}

/* Grid de Pilares (Cards) */
.grid-pilares {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.card-body {
    padding: 25px;
}

.card-body h3 {
    color: #8b0000;
    margin-bottom: 15px;
}

/* Seção de Sustentabilidade (Abas Dinâmicas) */
.sustentabilidade-secao {
    background-color: #f2e6e4; /* Fundo suave levemente avermelhado/terroso */
}

.subtitulo {
    text-align: center;
    margin-bottom: 30px;
    color: #555;
}

.botoes-abas {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
}

.btn-aba {
    background-color: #fff;
    color: #8b0000;
    border: 2px solid #8b0000;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s;
}

.btn-aba.ativo, .btn-aba:hover {
    background-color: #8b0000;
    color: #fff;
}

.conteudo-aba {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    text-align: center;
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Rodapé */
footer {
    background-color: #2b0000; /* Vermelho quase preto */
    color: #ccc;
    text-align: center;
    padding: 25px 20px;
    font-size: 14px;
}
