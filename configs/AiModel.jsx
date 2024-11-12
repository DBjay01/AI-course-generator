const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level:Basic, Duration: 1 hours, NoOf Chapters:5, in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming Fundamentals\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering essential concepts and techniques for beginners. You will learn the basics of syntax, data types, variables, operators, control flow, functions, and modules. By the end of this course, you'll be able to write basic Python programs and solve simple programming problems.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter introduces the Python programming language, its history, applications, and basic concepts like variables, data types, and operators.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Control Flow and Conditional Statements\",\n        \"about\": \"This chapter covers essential control flow constructs in Python, such as conditional statements (if-else) and loops (for and while).\",\n        \"duration\": \"25 minutes\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"This chapter explains how to define and use functions in Python, improving code organization and reusability. It also introduces Python modules and their benefits.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Data Structures: Lists and Dictionaries\",\n        \"about\": \"This chapter introduces fundamental data structures in Python, including lists for ordered collections and dictionaries for key-value pairs.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Input, Output, and File Handling\",\n        \"about\": \"This chapter covers how to get input from the user, display output, and work with files in Python.\",\n        \"duration\": \"15 minutes\"\n      }\n    ]\n  },\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"noOfChapters\": 5\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
  
