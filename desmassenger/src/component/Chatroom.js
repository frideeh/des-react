import '../style/Chatroom.css';



// If fetching works correctly you must see this comment ;)


function chatRoom() {
  return (
    <div className='chatRoom'>
        <div className='MainContainer'>
          <div className='chatArea'>

          </div>
          <input className='MessageBox' type='text' placeholder="Enter your Message here ..." />
          <button className='sendButton' type='submit'>Send</button>
        </div>
    </div>
  );
}

export default chatRoom;
