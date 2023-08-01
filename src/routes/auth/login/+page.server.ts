import { redirect } from "@sveltejs/kit";
export const actions = {
  // @ts-ignore
  login: async ({ request, locals }) => {
    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);
    console.log("username:", data.username);
    try {
      const { token, record } = await locals.pb
        .collection("users")
        .authWithPassword(data.username, data.password);
    } catch (err) {
      console.log("Error:", err);
      return {
        error: true,
        //@ts-ignore
        message: err.message,
      };
    }
    throw redirect(303, "/");
  },
};
