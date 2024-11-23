import { OpenAI } from "openai";

// Configuração do OpenAI com a sua chave de API
const openai = new OpenAI({
  //  apiKey: ,   INSIRA SUA API KEY AQUI...  
  dangerouslyAllowBrowser: true, 
});

export const fetchChatbotResponse = async (message) => {
  try {
    

    const response = await openai.chat.completions.create({
      model: "gpt-4o", 
      messages: [{ role: "user", content: message }], 
    });

    
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Erro ao acessar a API da OpenAI:", error);
    throw new Error("Erro ao acessar o chatbot");
  }
};

export default fetchChatbotResponse;