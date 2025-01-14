// i have used the scrimba videos in the module 6 integrating AI with web application as a source, and i have also used the OpenAI API documentation:
// OpenAi. (n.d.). OpenAI API documentation. OpenAI. Retrived Desember, 2024. from:
// https://platform.openai.com/docs/api-reference/introduction

//I could not get the "from openai import OpenAI" to work. I have imported the OpenAI librabry,
//but it cannot find the module, so further changes needs to be done to make it work.
// so instead i am using a direct API call to "https://api.openai.com/v1/chat/completions" instead.
// This fetch request sends a POST request for chat compleitions to the OpenAI API

//this function recives the messegeList from the chat.html file. it then adds a new element to the list which is the messege from the messege form in the html file
// it then generates a messege from the system while a ... is showing. When the messege is ready it adds the new messega as the first element of the list.

async function chatbot(event) {
  event.preventDefault();
  const messageDisplay = document.getElementById("messageList");
  const myMessage = event.target.userInputChat.value;
  event.target.userInputChat.value = "";
  messageDisplay.innerHTML =
    `<li class="userMessage"> ${myMessage}</li>` + messageDisplay.innerHTML;
  const sendButton = document.getElementById("sendButtonChat");
  const sendButtonClose = document.getElementById("sendButtonChatClose");
  const messages = [
    {
      role: "system",
      content:
        "You are a helpful assistant for customer service, that answers questions about the service and partnering farms",
    },
    { role: "user", content: myMessage },
  ];

  try {
    messageDisplay.innerHTML =
      `<li class="chatMessage"> <span class="botName">Fram</span><p>...</p></li>` +
      messageDisplay.innerHTML;
    sendButton.style.display = "none";
    sendButtonClose.style.display = "block";
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer YOUR_API_KEY`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages,
        max_tokens: 100,
      }),
    });
    const error = document.getElementById("errorHandling");
    if (response.status != 200) {
      errorHandling.style.display = "block";
      return;
    } else {
      errorHandling.style.display = "none";
    }
    const data = await response.json();
    const messegeFromChat = data.choices[0].message.content;
    messageDisplay.firstElementChild.innerHTML = `<span class="botName">Fram</span><p> ${messegeFromChat} </p>`;
    sendButton.style.display = "block";
    sendButtonClose.style.display = "none";
  } catch {
    errorHandling.style.display = "block";
  }
}
