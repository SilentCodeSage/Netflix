import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC400d8qYlHirGZgFglNbL_ZaqXTAR_6Jc";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run(inputPromt) {
    const prompt = "list the result seperated by a coma.only 10 movies needed only provide the moovie list nothing else only movie name dont include other details"+inputPromt;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text);
    const searchResultsArray = text.split(",")
    //console.log(searchResultsArray)
    return searchResultsArray;
  }

export default run;