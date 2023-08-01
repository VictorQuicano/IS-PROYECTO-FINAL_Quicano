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

<div class="container">
  <h1>Login</h1>
  <form action="?/login" method="POST" use:enhance={submitLogin}>
    <input
      type="text"
      name="username"
      placeholder="Usuario"
      disabled={loading}
    />
    <input
      type="password"
      name="password"
      placeholder="Contraseña"
      disabled={loading}
    />
    <button type="submit" disabled={loading}>Login</button>
  </form>
</div>

<style>
  .container {
    width: 300px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
  }

  form {
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
  }

  button {
    background-color: #000;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
</style>
