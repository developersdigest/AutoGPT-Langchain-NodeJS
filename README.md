# AutoGPT with Langchain in Node.js

This repository contains a Node.js boilerplate for getting started with AutoGPT using Langchain. The project demonstrates how to set up and use the experimental AutoGPT implementation in a Node.js environment. It provides a foundation for building applications that leverage the power of generative language models and external APIs to create dynamic and interactive content.

- link to your video : https://www.youtube.com/watch?v=lwx6ShL-V38


## Prerequisites

- Node.js version 18 or higher
- OpenAI API key (obtain from https://platform.openai.com/account/api-keys)
- SERP API key (obtain from https://serpapi.com/)

## Getting Started

1. Clone the repository:
   
   git clone [https://github.com/your-username/autogpt-langchain-nodejs.git](https://github.com/developersdigest/AutoGPT-Langchain-NodeJS.git)
   cd AutoGPT-Langchain-NodeJS
 

2. Install dependencies:
 
   npm install // dependances already in package.json
 

3. Create a `.env` file in the root directory and add your API keys:
 
   OPENAI_API_KEY=your_openai_api_key
   SERPAPI_API_KEY=your_serp_api_key


4. Run the `index.js` script to see AutoGPT in action:

   node index.js
  

## How It Works

The `index.js` script performs the following steps:

- Imports necessary modules from Langchain, including AutoGPT, ReadFileTool, WriteFileTool, SerpAPI, NodeFileStore, HNSWLib, OpenAIEmbeddings, and ChatOpenAI.
- Configures dotenv to manage environment variables.
- Instantiates NodeFileStore, tools for file operations and SERP API, and HNSWLib with OpenAI embeddings.
- Creates an AutoGPT instance with the ChatOpenAI model, tools, and memory.
- Demonstrates how to use AutoGPT to perform tasks and generate content.

## Customization

This boilerplate provides a starting point for your own projects. You can customize the code to create a wide range of applications, such as generating dynamic web content, creating interactive chatbots, and more. Feel free to experiment and explore the capabilities of AutoGPT and Langchain!
