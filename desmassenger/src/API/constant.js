export const GRAPHQL_API = "https://secretchat.nightly.troweb.app/api/v1/graphql";
export const API_TOKEN = "Bearer Y2JhNjZkMjItYTkxMS00NzBlLTgzZGItNTNlM2YxNDRlZTNm";



export function CREATE_CHAT_ROOM(Username){
    return `
    mutation {
        createChatRooms(items:{
          title: "${Username}",
          parentId :"000000000000000000000000"
        }){
          _id
        }
      }
`
}