<script lang="ts">
  type IEvento = {
    titulo: string;
    descripcion: string;
    fecha: string;
  };

  export let data;
  let search_text = "";
  let eventos = data.eventos;
  console.log(eventos);
  // eventos?.filter(function (evento: IEvento) {
  //   evento.titulo = evento.titulo.toLowerCase();
  //   return evento.titulo === search_text;
  // });

  const searchBooks = () => {
    // @ts-ignore
    return (filteredEvents = eventos.filter((evento) => {
      let bookTitle = evento.titulo.toLowerCase();
      return bookTitle.includes(search_text.toLowerCase());
    }));
  };
  console.log(search_text);
</script>

<body>
  <main>
    <section>
      <h2>Eventos Próximos</h2>
      <form id="search-form">
        <label for="search-input">Buscar por nombre:</label>
        <input type="text" bind:value={search_text} on:input={searchBooks} />
        <button type="submit">Buscar</button>
      </form>
      <ul id="event-list">
        {#each eventos as evento}
          <li class="event-card">
            <h3>
              {evento.titulo}
            </h3>
            <p>
              {evento.descripcion}
            </p>
          </li>
        {/each}
      </ul>
    </section>

    <section>
      <h2>Publicar un Evento</h2>
      <form id="event-form">
        <label for="event-title">Título del Evento:</label>
        <input type="text" id="event-title" required />

        <label for="event-date">Fecha del Evento:</label>
        <input type="date" id="event-date" required />

        <label for="event-description">Descripción:</label>
        <textarea id="event-description" rows="4" required />

        <button type="submit">Publicar Evento</button>
      </form>
    </section>
  </main>
</body>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  main {
    padding: 2rem;
  }

  h2 {
    border-bottom: 2px solid #333;
    padding-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  .event-card {
    border: 1px solid #333;
    border-radius: 10px;
    padding: 10px;
  }

  .event-card:hover {
    background-color: beige;
  }

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
