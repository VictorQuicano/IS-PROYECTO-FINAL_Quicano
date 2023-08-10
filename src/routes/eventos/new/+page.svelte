<script>
</script>

<section>
  <h2>Publicar un Evento</h2>
  <form id="event-form" action="?/new" method="POST">
    <label for="event-title">Título del Evento:</label>
    <input type="text" id="event-title" name="titulo" required />

    <label for="event-description">Descripción:</label>
    <textarea id="event-description" rows="4" name="descripcion" required />

    <label for="event-date">Fecha del Evento:</label>
    <input type="date" id="event-date" name="fecha" required />

    <button type="submit">Publicar Evento</button>
  </form>
</section>

<style>
  form label,
  form input,
  form textarea,
  form button {
    display: block;
    margin-bottom: 1rem;
    width: 100%;
  }

  form input,
  form textarea {
    padding: 0.5rem;
  }

  form button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 0.75rem 1rem;
    cursor: pointer;
  }
</style>
