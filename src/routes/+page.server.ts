import { serializeNonPOJOs } from "$lib/utils";

//@ts-nocheck
export function load({ fetch, locals }) {
  const getEventos = async () => {
    try {
      const res = serializeNonPOJOs(
        await locals.pb.collection("eventos").getFullList({
          sort: "-created",
        })
      );
      // console.log("res:", res);
      return res;
    } catch (err) {
      // console.log("Error: ", err);
      return [];
    }
  };
  return { eventos: getEventos() };
}

