<script>
</script>

<div class="container">
  <h1>NUEVO EVENTO</h1>
  <form id="event-form" action="?/new" method="POST">
    <div class="form-group">
      <label for="titulo">¿Cómo se llamará su evento?</label>
      <input name="titulo" placeholder="Nombre del evento" required/>
    </div>
    <div class="form-group">
      <label for="descripcion">Descripción</label>
      <textarea name="descripcion" rows="4" placeholder="¿Qué harán?¿Cómo se postula?" required/>
    </div>
    <div class="form-group">
      <label for="fecha">Fecha</label>
      <input type="date" id="event-date" name="fecha" required />
    </div>
    
    <button type="submit">Publicar Evento</button>
  </form>
</div>

<style>
  /* Estilos generales */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  .form-group label{
    padding-bottom: 5px;
    display: flex;
  }
  /* Estilos del contenedor */
  .container {
    width: 60%;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }

  /* Estilos del formulario */
  form {
    display: flex;
    flex-direction: column;
  }

  /* Estilos de los grupos de campos */
  .form-group {
    margin-bottom: 15px;
  }

  label {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,textarea {
    
    font-family: Arial, sans-serif;
    margin-top: 10px;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    box-sizing: border-box;
  }

  /* Estilos del botón */
  button {
    background-color: #195c29;
    color: #fff;
    padding: 12px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  form textarea {
    padding: 0.5rem;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  button:hover {
    background-color: #226b34;
  }
</style>