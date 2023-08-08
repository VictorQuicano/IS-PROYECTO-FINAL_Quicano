<script>
  export let data;
  // console.log(data);
</script>

<head>
  <title>Eventos - CS</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <h1>Sistema de Publicación de Eventos de Computación</h1>
    <nav>
      {#if !data.user}
        <a href="/auth/login">Login</a>
        <a href="/auth/register">Register</a>
      {:else}
        <form action="/auth/logout" method="POST">
          <button>Logout</button>
        </form>
      {/if}
      <a href="/">Home</a>
    </nav>
  </header>
  <slot />
</body>

<style>
  /* Estilos generales */
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  /* Estilos del encabezado */
  header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  /* Estilos de la navegación */
  nav {
    margin-top: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1.5rem;
    font-size: 18px;
    letter-spacing: 1px;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #ccc;
  }

  /* Estilos del botón */
  button {
    background-color: #cc0000;
    color: #fff;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    letter-spacing: 1px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #ff0000;
  }

  /* Estilos para el contenido principal (slot) */
  slot {
    display: block;
    padding: 20px;
    font-size: 16px;
    line-height: 1.6;
  }
</style>

