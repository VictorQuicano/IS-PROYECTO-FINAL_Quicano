<script>
  import { enhance } from "$app/forms";
  let loading = false;

  const submitRegister = () => {
    loading = true;
    //@ts-ignore
    return async ({ result, update }) => {
      switch (result.type) {
        case "success":
          await update();
          break;
        case "invalid":
          // toast.error('Invalid credentials');
          console.log("Invalid credentials");
          await update();
          break;
        case "error":
          // toast.error(result.error.message);
          console.log(result.error.message);
          break;
        default:
          await update();
      }
      loading = false;
    };
  };
</script>

<div class="container">
  <h1>Registro de Usuarios</h1>
  <form action="?/register" method="POST" use:enhance={submitRegister}>
    <div class="form-group">
      <label for="username">Username</label>
      <input name="username" placeholder="Username" />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input name="email" placeholder="Email" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input name="password" placeholder="Password" type="password" />
    </div>
    <div class="form-group">
      <label for="passwordConfirm">Confirm password</label>
      <input name="passwordConfirm" placeholder="Confirm password" type="password" />
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <input name="name" placeholder="Name" />
    </div>
    <button type="submit" disabled={loading}>Register</button>
  </form>
</div>

<style>
  /* Estilos generales */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  /* Estilos del contenedor */
  .container {
    width: 400px;
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
    margin-bottom: 20px;
  }

  label {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
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

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  button:hover {
    background-color: #226b34;
  }
</style>
