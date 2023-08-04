<script lang="ts">
  interface IEvento {
    id: string;
    titulo: string;
    descripcion: string;
    fecha: string;
  }

  export let data;
  let search_text = "";
  let eventos: IEvento[] = data.eventos;
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
      <div id="event-list">
        {#each eventos as evento}
          <a href={`/eventos/${evento.id}`} class="event-card">
            <h3>
              {evento.titulo}
            </h3>
            <p>
              {evento.descripcion}
            </p>
          </a>
        {/each}
      </div>
    </section>

    <a href="/eventos/new" class="new-event">Crear Evento</a>
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

  .event-card {
    display: block;
    text-decoration: none;
    color: black;
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
