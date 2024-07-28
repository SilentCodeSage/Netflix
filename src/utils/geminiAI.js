import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);



const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function Run(inputPromt) {
    console.log(inputPromt)
    const prompt = "give 20 results for : "+inputPromt+"seperated by commas and nothing else other than the results";
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text);
    const searchResultsArray = text.split(",")
    return searchResultsArray;
  }

export default Run;