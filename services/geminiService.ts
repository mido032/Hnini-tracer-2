
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFoodRecommendations = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `بناءً على طلب المستخدم التالي: "${userInput}"، اقترح 3 أنواع من الأطعمة الشعبية في الجزائر (مثل الشخشوخة، الكسكس، المحاجب) مع وصف قصير لكل منها. أجب بتنسيق JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["name", "description"]
          }
        }
      }
    });

    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("AI recommendation error:", error);
    return [];
  }
};
