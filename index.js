// Step 1: Obtain an OpenAI API key from https://platform.openai.com/account/api-keys
// Step 2: Obtain a SERP API key from https://serpapi.com/
// Step 3: Run npm init -y to create a package.json file
// Run touch index.js .env to create an index.js file and a .env file
// Step 4: Ensure Node.js version is at least 18 by running node -v
// If the version is below 18, upgrade to the latest Node.js version
// Step 5: Install langchain and HNSWLib with npm install langchain hnswlib
// Step 6: Import necessary modules

import { AutoGPT } from "langchain/experimental/autogpt"; // Import the experimental AutoGPT implementation
import { ReadFileTool, WriteFileTool, SerpAPI } from "langchain/tools"; // Import various tools for file operations and SERP API
import { NodeFileStore } from "langchain/stores/file/node"; // Import NodeFileStore for file storage in Node.js
import { HNSWLib } from "langchain/vectorstores/hnswlib"; // Import HNSWLib for efficient similarity search
import { OpenAIEmbeddings } from "langchain/embeddings/openai"; // Import pre-trained OpenAI embeddings
import { ChatOpenAI } from "langchain/chat_models/openai"; // Import the ChatOpenAI class
import dotenv from "dotenv"; // Import dotenv for managing environment variables

// Step 7: Configure dotenv
dotenv.config();

// Step 8: Instantiate NodeFileStore
const store = new NodeFileStore();

// Step 9: Create tools for file operations and SERP API
const tools = [
  new ReadFileTool({ store }),
  new WriteFileTool({ store }),
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    engine: "google",
    hl: "en",
    gl: "us",
  }),
];

// Step 10: Set up HNSWLib with OpenAI embeddings
const vectorStore = new HNSWLib(new OpenAIEmbeddings(), {
  space: "cosine",
  numDimensions: 1536,
});

// Step 11: Create AutoGPT instance with ChatOpenAI model, tools, and memory
const autogpt = AutoGPT.fromLLMAndTools(
  new ChatOpenAI({ temperature: 0 }),
  tools,
  {
    memory: vectorStore.asRetriever(),
    aiName: "Developer Digest Assistant",
    aiRole: "Assistant",
  }
);

// Step 12: Use AutoGPT to create an index.html file with a working stock chart of Apple's stock price
await autogpt.run([
  "Create an index.html file with a working stock chart of Apple's stock price using Chart.js and with stock data from google finance",
]);
