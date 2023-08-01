import { error, redirect } from "@sveltejs/kit";
// import { registerUserSchema } from '$lib/schemas';
// import { generateUsername, validateData } from '$lib/utils';

export const actions = {
  //@ts-ignore
  register: async ({ locals, request }) => {
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
      console.log("Error: ", err);
      throw error(500, "Something went wrong");
    }

    throw redirect(303, "auth/login");
  },
};
