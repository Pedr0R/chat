let chatBox = document.querySelector('#chat-box');
let sendButton = document.querySelector('#send-message-button');
let usernameDiv = document.getElementById('username-input');

function sendMessage() {
  let textInput = document.getElementById('chat-input');
  let messageDiv = document.createElement('p');
  let message = document.createTextNode(`${usernameDiv.value}: ${textInput.value}`)
  
  if(usernameDiv.value == '') {
    alert('You must have a username to send messages')
  } else{
    messageDiv.appendChild(message);
    chatBox.appendChild(messageDiv);
    textInput.value = "";
  }
  messageDiv.style.textAlign = 'justify';
} 

sendButton.addEventListener('click', function() {
  sendMessage()
});