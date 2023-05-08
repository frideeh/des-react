import axios from "axios";
import * as Constant from './constant';




// Create Room function using API


export async function createRoom(Username){

    const queryRes = await axios.post(
        Constant.GRAPHQL_API,
        {
          query: Constant.CREATE_CHAT_ROOM(Username),
        },
        {
          headers: {
            authorization: Constant.API_TOKEN,
          },
        }
      );
}