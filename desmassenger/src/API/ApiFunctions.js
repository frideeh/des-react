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


// Add message function using API


export async function sendMessage(Message){

  const queryRes = await axios.post(
      Constant.GRAPHQL_API,
      {
        query: Constant.SEND_MESSAGE(Message),
      },
      {
        headers: {
          authorization: Constant.API_TOKEN,
        },
      }
    );
}


// Search form data 

export async function SEARCH(){
  const queryRes = await axios.post(
    Constant.GRAPHQL_API,
    {
      query: Constant.SEARCH(),
    },
    {
      headers: {
        authorization: Constant.API_TOKEN,
      },
    }
  );
}