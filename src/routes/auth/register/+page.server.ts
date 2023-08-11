import { error, redirect } from "@sveltejs/kit";
import { serialize } from "object-to-formdata";
// import { registerUserSchema } from '$lib/schemas';
// import { generateUsername, validateData } from '$lib/utils';

export const actions = {
  register: async ({ locals, request }) => {
    //TODO: Agregar validacion por zod los formularios
    // const { formData, errors } = await validateData(await request.formData(), registerUserSchema);
    // const { formData, errors } = await request.formData();
    const formData = Object.fromEntries([...(await request.formData())]);
    console.log("formData:", formData);
    const errors = undefined;

    if (errors) {
      //   return invalid(400, {
      //     data: formData,
      //     //@ts-ignore
      //     errors: errors.fieldErrors,
      //   });
    }

    try {
      await locals.pb
        .collection("users")
        .create({ ...formData, emailVisibility: true });
      //   await locals.pb.collection("users").requestVerification(formData.email);
    } catch (err) {
      console.log("formData:", formData);

      console.log("Error: ", err);
      throw error(500, "Something went wrong");
    }

    throw redirect(303, "login");
  },
};
  //@ts-ignore
  /*
  register: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData()) as{
      username: string;
      email: string;
      emailVisibility:true;
      password: string;
      passwordConfirm:string;
      nombre: string;
      apellidos: string;
      tipoDeUsuario: string;

    };

    try{

      const user = await locals.pb.collection("users").getOne(data.username);
      const email = await locals.pb.collection("users").getOne(data.email);
      if(user || email){
        alert ("El usuario ya existe");
        return;
      }else if(data.password !== data.passwordConfirm){
        alert("Las contraseñas no coinciden");
        return;
      }
      await locals.pb.collection("users").create(data);
      console.log("formData:");
      //throw redirect(303, "/");
      
      throw redirect("/", {status: 303});
    }catch(err){
      console.log("Error: ", err);
      throw error(err.status, err.message);
    }
  }
};*/