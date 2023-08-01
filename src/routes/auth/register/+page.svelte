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
    <label for="username">Username</label>
    <input name="username" placeholder="Username" />
    <label for="email">Email</label>
    <input name="email" placeholder="Email" />
    <label for="password">Password</label>
    <input name="password" placeholder="Password" type="password" />
    <label for="passwordConfirm">Confirm password</label>
    <input
      name="passwordConfirm"
      placeholder="Confirm password"
      type="password"
    />
    <label for="name">Name</label>
    <input name="name" placeholder="Name" />
    <button type="submit" disabled={loading}>Register</button>
  </form>
</div>

<style>
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
