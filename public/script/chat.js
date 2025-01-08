// import OpenAI from "openai";

// const openAi = new OpenAI({
//   apiKey:
//     "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",
//   dangerouslyAllowBrowser: true,
// });

// async function chatbot(userMessage) {
//   const messages = [
//     {
//       role: "system",
//       content: "you are a helpful asssistant",
//     },
//     {
//       role: "user",
//       content: "hei, how are you",
//     },
//   ];

//   const response = await openAi.chat.completions.create({
//     model: "gpt-4",
//     messages: messages,
//   });
//   console.log("Response:", response.choices[0].message.content);
// }

//skrive så det ikke kan skrive flere meldinger
async function chatbot(event) {
  event.preventDefault();
  const messageDisplay = document.getElementById("messageList");
  const myMessage = event.target.userInput.value;
  event.target.userInput.value = "";
  messageDisplay.innerHTML += `<li class="userMessage"> ${myMessage}</li>`;
  console.log(messageDisplay);
  const messages = [
    //endre content
    { role: "system", content: "welcoming" },
    { role: "user", content: myMessage },
  ];

  try {
    messageDisplay.innerHTML += `<li class="chatMessage">...</li>`;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `My Key`,
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
    console.log(messegeFromChat);
    messageDisplay.lastElementChild.innerHTML = `<li class="chatMessage"> ${messegeFromChat}</li>`;
    console.log(data);
  } catch {
    errorHandling.style.display = "block";
  }
}

// // når man skal bruke open ai må man først sende en model og en open array of messages
// // a large language model is an algorithm that uses training data to recognize patterns and make predictions or decisions.
// // - gpt 4 is what we need eller (gpt3.5-turbo)
// // messages array
// // {system} i dette objectet forteller vi den hva vi vil ha, hvordan vi vil at den skal oppføre seg.
// // {user} dette er hva brukeren sier. ta dette arrayet og sende det til @openAI, den kommer tilbake med {assistant} object, som er output fra ai

// // husk å ikke commit your api ket to version control systems, så git.
// // dette skal copy pastes:
// // import OpenAI from 'openai'
// // const openai = new OpenAI({
// //     apiKey: 'your-api-key-here',
// //     dangerouslyAllowBrowser: true
// // });
// // const messages = [
// //     {
// //         role: 'system',
// //         contenct: 'you are a helpful assistant'
// //     }{
// //         role: 'user',
// //         contenct: 'what is my name?'
// //     }

// // ]
// // const response = await openai.chat.completions.create({
// //     model: 'gpt-4'
// //     messages: messages
// // })

// // chat completions Api for chatbot

// // hvis vi skal bruke polygon api i oppgaven så ligger det i notater:
// // hvis vi skal ha det som en funksjon som vi mest sannsynlig skal så skriver man bare dette inne i en try catch i en async function
// // i tillegg til det burde man ha en renderreport som henter det stedet det skal bli vist.

// // burde kanskje max_tokens så man ikke bruker alt for mye, for det koster, sett det høyere en du tror. kanskje 200
// // i tillegg kan man sette ganske lav temperatur tror jeg er bra. kanskje 1?
// // Providing examples within the prompt helps the model understand the desired output format and context. This is particularly useful for complex tasks or when the model needs to follow a specific pattern. men kan også skape at det er bruker mer tokens og er mer expencive
// // ### er seperators, be den devide between the seperators og det skriver man bare for system.
// // man kan også bestemme at den skal stoppe etter 3. hvis den lister opp det
// // skriv stop: ['3.'] i response. da stopper den å produsere etter 2 bøker ['/n'] går også da stopper den når det skal bli en ny linje

// // frequency_penalty
// // - number from -2 to 2
// // defaults to 0
// // at higher numbers it decreases the model's likelihood of repeatung the exact same phrases.
// // low = bruker samme ord flere ganger gjennom hele

// // presence_penalty
// // same number and default
// // higher numbers increase a models likelihood of talking about new topics

// // Considerations for Fine-tuning
// // Data quality: The quality of your fine-tuned model depends heavily on the quality and relevance of your training data.
// // Model size: Smaller models are faster to fine-tune and cheaper to use, but may not perform as well as larger models.
// // Ethical considerations: Be mindful of biases in your training data, as these will be reflected in your fine-tuned model.
// // Cost: Fine-tuning and using custom models can be more expensive than using pre-trained models.
// // Privacy: Ensure that your training data does not contain sensitive or personal information as your data may be stored and used by the model provider. Check the privacy policy of the model provider for more information.

// // Fine-tuning AI Models
// // Fine-tuning is a process where you take a pre-trained model and further train it on a specific dataset to make it more specialized for your particular use case. This can lead to improved performance and more relevant outputs for your specific domain.

// // Why Fine-tune?
// // While pre-trained models like GPT-3 are incredibly powerful, they are generalists. Fine-tuning allows you to:

// // Improve performance on domain-specific tasks
// // Create more consistent outputs
// // Potentially reduce API usage costs by using older, smaller models tailored to your needs

// // fine tuning is a last resort so i might not need this
