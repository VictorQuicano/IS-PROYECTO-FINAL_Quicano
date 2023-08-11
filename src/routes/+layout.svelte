<script>
  import { getURLImagen } from '$lib/utils';
  export let data;
  // console.log(data);
  function inicialesUsuario(nombre, apellido) {
  return nombre.substring(0, 1)+apellido.substring(0, 1); }

</script>

<head>
  <title>Eventos - CS</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <div>
    <header>
      <div id="contenedorC">
      <div id = "cabezeraHome">
        <h1>Sistema de Publicación de Eventos de Computación</h1>
      </div>
      <div id="botones">
        <nav style="text-align:right ;">
          {#if !data.user}
            <a id="loginBoton" href="/auth/login">Login</a>
            <a id="registroBoton" href="/auth/register">Register</a>
          {:else}
          <div id="infoUsuario">
            <div>
              <div id="saludo">
                <p>Hola <b>{data.user.nombre}!</b></p>
                <form action="/auth/logout" method="POST">
                  <button>Logout</button>
                </form>
              </div>
              
            </div>
            <img id="avatarUsuario" src={data.user?.avatar? getURLImagen(data.user.collectionId, data.user.id, data.user.avatar, '30x30')
					: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${inicialesUsuario(data.user.nombre, data.user.apellidos)}`} alt="Imagen del Usuario" />
          </div>
            
          {/if}
        </nav>
      </div>
      </div>
      <a href="/" style="position: center;">Home</a>
    </header>
  </div>
  
  <slot />
</body>

<style>
  /* Estilos generales */
  p{
    margin-top: 10px;
    margin-bottom: 10px;
  }
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
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  #cabezeraHome{
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
    width: 40%;
  }
  #botones{
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
    width: 40%;
    justify-content: space-between;
    margin-right: 3%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
  /* Estilos de la navegación */
  
  #contenedorC{
    display: flex;
    justify-content: space-between;
  }
  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1.5rem;
    font-size: 18px;
    letter-spacing: 1px;
    transition: color 0.3s ease;
  }
  #registroBoton{
    border: 2px solid #f44336;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    padding: 0.5rem 1rem 0.5rem 1rem;
    
  }
  #registroBoton:hover{
    background-color: #f44336;
  }
  #loginBoton{
    border: 2px solid #4CAF50;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
  #loginBoton:hover{
    background-color: #4ba24e;
  }
  a:hover {
    color: #ccc;
  }

  /* Estilos del botón */
  button {
    background-color: #cc0000;
    color: #fff;
    padding: 10px 10px;
    border: none;
    cursor: pointer;
    font-size: 14px;
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
  #saludo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  #infoUsuario{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #avatarUsuario{
    padding-left: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(255, 0, 0, 0.1);
    object-fit: cover;
  }
</style>

