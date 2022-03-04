let chatBox = document.querySelector('#chat-box');
let sendButton = document.querySelector('#send-message-button');


function sendMessage() {
  let textInput = document.getElementById('chat-input');
  let messageDiv = document.createElement('div');
  let message = document.createTextNode(textInput.value)
  messageDiv.appendChild(message);
  chatBox.appendChild(messageDiv);
  textInput.value = "";
} 

sendButton.addEventListener('click', function() {
  sendMessage()
});
