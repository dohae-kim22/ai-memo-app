# MemoApp with OpenAI Summarization

## Overview

This is a simple web application where users can add, update, delete, and view their memos. The application also integrates OpenAI's API to provide a summarization feature. Users can input text in their memo, and the app will generate a concise summary for it.

The app also includes functionality to sort memos either by **date** or **name**.

The app is built using **React**, **Redux**, **react-router-dom**, **Tailwind CSS**, **Vite**, and utilizes **OpenAI API** for text summarization.

---

## Demo

You can view the demo of the application here:  
[Demo URL (Vercel)](https://ai-memo-app-vert.vercel.app/)

---

## Features

- **Add Memos**: Users can create new memos with a title and content.
- **Summarize Memos**: Users can get a summarized version of the content using OpenAI's API.
- **Update Memos**: Users can edit their existing memos.
- **Delete Memos**: Users can delete their memos.
- **Sort Memos**: Users can sort the memos by **date** or **name**.

---

## Tech Stack

- **Frontend**:

  - **React**: JavaScript library for building user interfaces.
  - **Redux**: State management for React apps.
  - **React Router DOM**: For navigation between pages.
  - **Tailwind CSS**: Utility-first CSS framework for custom styling.
  - **Vite**: A fast build tool and development server for React apps.

- **API**:
  - **OpenAI API**: For generating summaries of memo content.

---

## Installation

To run the project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/dohae-kim22/ai-memo-app
   ```

2. Navigate to the project folder:

   ```bash
   cd ai-memo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

---

## Configuration

Before running the app locally, you will need to set up your OpenAI API key:

1. Create a `.env` file in the root of your project.
2. Add your OpenAI API key to the `.env` file:

   ```bash
   VITE_APIKEY=your-openai-api-key-here
   ```

3. Ensure that your API key is properly loaded in the environment and can be accessed in the app.
