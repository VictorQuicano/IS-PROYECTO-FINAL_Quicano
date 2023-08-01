//@ts-nocheck
export async function load({ fetch }) {
  try {
    const res = await fetch(
      "https://eventos-cs.pockethost.io/api/collections/eventos/records"
    );

    const eventos = await res.json();
    return { eventos };
  } catch (error) {
    console.log(error);
  }
}
