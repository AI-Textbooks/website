import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div id="github-download" className="flex flex-wrap items-start justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-cyan-500/70 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-left lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl font-serif">
            Try our chrome extension for ChatGPT
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Expand your chats with relevant knowledge.
          </p>
          <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-cyan-500/70 rounded-md w-11 h-11 ">
              <svg xmlns="http://www.w3.org/2000/svg" role="img"
                width="24"
                height="24"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path></svg>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Add context to ChatGPT from other chats
              </h4>
              <p className="mt-1 text-gray-600 dark:text-gray-300">
                Include other chats to your current context for more relevant conversations
              </p>
            </div>
          </div>
          <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-cyan-500/70 rounded-md w-11 h-11 ">
            <svg xmlns="http://www.w3.org/2000/svg" role="img"
                width="24"
                height="24"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path></svg>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Create your own self-hosted knowledge graph database
              </h4>
              <p className="mt-1 text-gray-500 dark:text-gray-300">
                Synchronise your chats with a Neo4j database for better search
              </p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/AI-Textbooks"
            target="_blank"
            rel="noopener"
            className="flex py-3 mx-auto text-lg font-medium text-center text-black bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            <svg
              role="img"
              width="24"
              height="24"
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span> Coming soon</span>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;