//@ts-nocheck
import PocketBase from "pocketbase";
import { env } from "$env/dynamic/private";

export async function handle({ event, resolve }) {
  event.locals.pb = new PocketBase(env.API_URL);

  // load the store data from the request cookie string
  event.locals.pb.authStore.loadFromCookie(
    event.request.headers.get("cookie") || ""
  );

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    event.locals.pb.authStore.isValid &&
      (await event.locals.pb.collection("users").authRefresh());

    if (event.locals.pb.authStore.isValid) {
      // if the auth store is valid, set the user object to the store's user record
      event.locals.user = event.locals.pb.authStore.user;
    }
  } catch (_) {
    // clear the auth store on failed refresh
    event.locals.pb.authStore.clear();
  }

  const response = await resolve(event);

  // send back the default 'pb_auth' cookie to the client with the latest store state
  response.headers.append(
    "set-cookie",
    event.locals.pb.authStore.exportToCookie()
  );

  return response;
}
