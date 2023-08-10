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
  // console.log(eventos);

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
    color: #333;
    font-size: 24px;
    margin-bottom: 1.5rem;
  }

  .event-card {
    display: block;
    text-decoration: none;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 1rem;
    transition: background-color 0.3s ease;
  }

  .event-card:hover {
    background-color: #f9f9f9;
  }

  form label,
  form input,
  form button {
    display: block;
    margin-bottom: 1rem;
    width: 100%;
  }

  form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  form button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 12px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  form button:hover {
    background-color: #195c29;
  }

  .new-event {
    display: inline-block;
    background-color: #195c29;
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
  }

  .new-event:hover {
    background-color: #226b34;
  }
  .new-event {
    display: block;
    margin-top: 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    padding: 0.75rem 1rem;
    cursor: pointer;
    text-decoration: none;
    border-radius: 10px;
    width: 100%;
    text-align: center;
  }
  .new-event:hover {
    background-color: #000;
  }
</style>
