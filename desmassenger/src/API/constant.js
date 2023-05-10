export const GRAPHQL_API = "https://desmessenger.nightly.troweb.app/api/v1/graphql";
export const API_TOKEN = "Bearer ZDVhMDhiZmItMjZhMS00NjAwLWIxODAtNDIzZTlhYWFjNjA3";



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

export function SEND_MESSAGE(Message){
  return `
  mutation {
    createUserData(items:{
      title : "MohammadCh",
      message : "${Message}",
      parentId :"000000000000000000000000"
    }){
      title
      message
    }
  }
`
}
export function SEARCH(){
  return `
  query search($query: JSON!) {
    search(limit: 50, offset: 0, query: $query) {
        items{
        title
        _id
        parentId
        ... on UserData{
          message
        }
      }
    }
  }
  `
}