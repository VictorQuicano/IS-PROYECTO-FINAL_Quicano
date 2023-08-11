<script>
    import { getURLImagen } from '$lib/utils';
    export let data;
    let goBack = () => {
      window.history.back();
    };
  </script>
  
  <main>
    <section class="event-details">
      <div class="event-image">
        <img src={data.event?.imagen? getURLImagen(data.event.collectionId, data.event.id, data.event.imagen, '80x80')
					: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${data.event.titulo}`} alt="Imagen del Evento" />
      </div>
      <div class="event-info">
        <h2>{data.event.titulo}</h2>
        <p style="text-align: justify;">{data.event.descripcion}</p>
        <p>Fecha del evento: {data.event.fecha}</p>
      </div>
      <div class="Button">
        <h3></h3>
        <button class="back-button" on:click={goBack}>Volver a la lista de eventos</button>
      </div>
    </section>
    

  </main>
  
  <style>
    .back-button {
    display: block;
    margin-bottom: 1rem;
    width: 100%;
    }
    .back-button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 13px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    }
    .back-button:hover {
    background-color: #195c29;
    }

    .event-details {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f7f7f7;
      flex-direction: column;
    }
  
    .event-image {
      width: 300px;
      height: 300px;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .event-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .event-info {
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      width: 90%;
      max-width: 600px;
      text-align: center;
      margin-top: 20px;
    }
  
  </style>
  
