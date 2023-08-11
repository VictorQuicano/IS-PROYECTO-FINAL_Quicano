import { serializeNonPOJOs } from "$lib/utils";
import { error } from '@sveltejs/kit';

export const load =({locals, params}) => {
    const getEvent = async (eventoID) => {
        try{
            const evento = serializeNonPOJOs(await locals.pb.collection('eventos').getOne(eventoID));
            return evento;
        } catch (err) {
            console.log("Error: ",err);
            throw error(err.status, err.message);
        }
    };
    return{
        event: getEvent(params.eventId)
    }
}