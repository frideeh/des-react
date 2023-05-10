import { useEffect, useState } from 'react';
import '../style/Chatroom.css';
import * as API from '../API/ApiFunctions'
import * as Constant from '../API/constant';
import axios from "axios";



// If fetching works correctly you must see this comment ;)


function ChatRoom() {

  const [Message , setMessage] = useState('')
  const [userData, setuserData] = useState({ Data: [] });




  function sendMessage(Message){
    API.sendMessage(Message)
  }

  useEffect(() => {

    const SearchItem = async () => {
      var data = JSON.stringify({
        query: Constant.SEARCH(),
        variables: { query: { bool: { must: [{ match: { parentId: "000000000000000000000000" } }] } } },
      });
      var config = {
        method: "post",
        url: Constant.GRAPHQL_API,
        headers: {
          Authorization: Constant.API_TOKEN,
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          setuserData({ Data: response.data.data.search.items });
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    
    setTimeout(() => {
      SearchItem();
    }, 1000);
  }, [userData]);



  return (
    <div className='chatRoom'>
        <div className='MainContainer'>
        <div class = "name-bar">
          <i class="fas fa-chevron-left"></i>
          best friend
        </div>
          <div className='chatArea'>
            <ul className="UserMessage">
              {userData.Data.map((item) => (
                <li key={item._id}>
                  {item.message}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <input 
            className='MessageBox' 
            type='text' 
            placeholder="Enter your Message here ..."
            onChange={(e) => setMessage(e.target.value)}
            />
            <button 
            className='sendButton' 
            type='submit'
            onClick={() => {sendMessage(Message)}}
            >Send</button>
          </div>
        </div>
    </div>
  );
}

export default ChatRoom;
