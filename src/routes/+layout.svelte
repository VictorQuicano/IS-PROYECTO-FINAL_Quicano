<script>
  export let data;
  // console.log(data);
</script>

<head>
  <title>Eventos - CS</title>
</head>
<body>
  <header>
    <h1>Sistema de Publicación de Eventos de Computación</h1>
    <div>
      {#if !data.user}
        <a href="/auth/login"> Login </a>
        <a href="/auth/register"> Register </a>
      {:else}
        <form action="/auth/logout" method="POST">
          <button style="color: red; font-size: 16px;">Logout</button>
        </form>
      {/if}

      <a href="/">Home</a>
    </div>
    <div />
  </header>
  <slot />
</body>

<style>
  header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
    font-size: large;
  }
  a:hover {
    color: #ccc;
  }
</style>
