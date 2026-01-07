<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Encontro Carioca de Alimentação Coletiva</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <link rel="website icon" type="png" href="../assets/img/logo.png">
  <link rel="stylesheet" href="../assets/css/home.css">
</head>
<body>
  <header>
    <div class="header-content">
      <a href="./index.php">
        <h1>Encontro Carioca de Alimentação Coletiva</h1>
      </a>
      <div class="header-buttons">
        <a href="./login.php"><button class="btn-login">Login</button></a>
        <a href="./cadastro.php"><button class="btn-cadastro">Cadastro</button></a>
      </div>
    </div>
  </header>
  <div class="layout">
    <div class="sidebar">
      <div style="background:#f1eada;padding:25px;text-align:center;border-bottom:1px solid #ccc;">
        <div class="logo"><img src="../assets/img/icon planta.png" alt=""></div>
        <strong>E.C.A.C</strong><br>
      </div>
      <a href="./index.php">
        <div class="sidebar-item active"><i class="fa fa-home"></i> Início</div>
      </a>
      <a href="./eventos.php">
        <div class="sidebar-item"><i class="fa fa-calendar-check"></i> Evento</div>
      </a>
      <a href="./programacao.php">
        <div class="sidebar-item"><i class="fa fa-calendar"></i> Programação</div>
      </a>
      <a href="./normas.php">
        <div class="sidebar-item"><i class="fa fa-shield"></i> Normas</div>
      </a>
      <a href="./submissao.php">
        <div class="sidebar-item"><i class="fa fa-upload"></i> Submissão</div>
      </a>
      <a href="./inscricao.php">
        <div class="sidebar-item"><i class="fa fa-id-card"></i> Inscrição</div>
      </a>
      <a href="./arquivos.php">
        <div class="sidebar-item"><i class="fa fa-download"></i> Arquivos</div>
      </a>
      <a href="./palestrantes.php">
        <div class="sidebar-item"><i class="fa fa-person"></i> Palestrantes</div>
      </a>
    </div>
    <div class="content-area">
      <div class="banner">
        <!-- LOGO (lado esquerdo) -->
        <div class="banner-logo">
          <img src="../assets/img/Logo Comunidade Carioca Melhorada.png" alt="Logo ECAC">
        </div>
        <!-- TEXTO (lado direito) -->
        <div class="banner-text">
          <p style="font-size:16px;">
            Uma experiência única para profissionais de nutrição e gastronomia!
          </p>
          <h2>
            Encontro Carioca<br>
            de Alimentação Coletiva
          </h2>
          <p>10 a 12 de Janeiro | Rio de Janeiro</p>
          <button class="btn">GARANTA SUA VAGA</button>
        </div>
      </div>
      <section class="section">
        <h1>Sobre o evento</h1>
        <div class="section-divider"></div>
        <p>
          O Encontro Carioca de Alimentação Coletiva reúne profissionais de nutrição,
          pesquisa e gestão para discutir práticas, políticas e inovação na alimentação
          institucional. <br>
          Com palestras, workshops e apresentação de trabalhos,
          o evento promove conexão e atualização técnica.
        </p>
      </section>
      <div class="slider">
        <div class="slides">
          <div class="slide active" style="background-image: url('../assets/img/ecac\ 18.jpeg');">
          </div>
          <div class="slide" style="background-image: url('../assets/img/ecac\ 13.jpeg');">
          </div>
          <div class="slide" style="background-image: url('../assets/img/ecac\ 7.jpeg');">
          </div>
          <div class="slide" style="background-image: url('../assets/img/ecac7.jpeg');">
          </div>
        </div>
        <!-- BOTÕES -->
        <button class="nav prev">&#10094;</button>
        <button class="nav next">&#10095;</button>
        <!-- INDICADORES -->
        <div class="dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
      <section class="section">
        <h1>Um evento que vai te impressionar</h1>
        <div class="section-divider"></div>
        <p class="subtitle">Para melhorar seu ambiente profissional</p>
        <br><br>
        <div class="cards">
          <div class="card-img"><img src="../assets/img/Conhecimento.png" alt=""></div>
          <div class="card-img"><img src="../assets/img/Certificados.png" alt=""></div>
          <div class="card-img"><img src="../assets/img/Networking.png" alt=""></div>
        </div>
      </section>
    </div>
  </div>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-col footer-left">
        <strong>E.C.A.C</strong>
        <ul>
          <li><a href="./index.php">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Programação</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Politicas de Privacidade</a></li>
        </ul>
      </div>
      <div class="footer-col footer-center">
        <img src="../assets/img/logo com fundo.png" alt="Logo ECAC" class="logo-rodape">
      </div>
      <div class="footer-col footer-right">
        <h3>Fale Conosco</h3>
        <div class="social">
          <a href="https://www.instagram.com/ecac.alimentacaocoletiva/" target="_blank">
            <img src="../assets/img/instagram.png" alt="Instagram" class="img-rodape">
          </a>
          <a href="#">
            <img src="../assets/img/x.png" alt="X" class="img-rodape">
          </a>
          <a href="#">
            <img src="../assets/img/telefone.png" alt="Telefone" class="img-rodape">
          </a>
        </div>
        <p>(21) 99999-9999</p>
      </div>
    </div>
    <div class="footer-bottom">
      © 2025 Encontro Carioca de Alimentação Coletiva | Política de Privacidade
    </div>
  </footer>
  <script src="../assets/js/index.js"></script>
</body>
</html>