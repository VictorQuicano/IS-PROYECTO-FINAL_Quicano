<script>
  import { enhance } from "$app/forms";
  let loading = false;

  const submitLogin = () => {
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

<div class="login-container">
  <h1>Login</h1>
  <form action="?/login" method="POST" use:enhance={submitLogin}>
    <div class="input-group">
      <label for="username">Usuario</label>
      <input type="text" id="username" name="username" placeholder="Ingrese su usuario" disabled={loading} />
    </div>
    <div class="input-group">
      <label for="password">Contraseña</label>
      <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" disabled={loading} />
    </div>
    <button type="submit" disabled={loading}>Iniciar sesión</button>
  </form>
</div>

<style>
  .login-container {
    width: 400px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #333;
    font-size: 32px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .input-group {
    margin-bottom: 20px;
  }

  label {
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    box-sizing: border-box; /* Añadir esta propiedad para que el padding no aumente el ancho del input */
  }

  button {
    background-color: #195c29;
    color: #fff;
    padding: 15px;
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
