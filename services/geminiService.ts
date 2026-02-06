
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getExamTips = async (userConcern: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User concern about Moroccan driving exam: ${userConcern}. Give a short, encouraging 2-sentence tip in Moroccan Darija (Arabic script).`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text || "بالتوفيق في الامتحان ديالك! ركز على القواعد الأساسية.";
  } catch (error) {
    console.error("AI Error:", error);
    return "بالتوفيق! مع هاد الدورة غادي تنجح إن شاء الله.";
  }
};
