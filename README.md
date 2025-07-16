# 📝 MemoApp with OpenAI Summarization

A smart memo application that lets users create, update, delete, and summarize memos using **OpenAI’s GPT-3.5 API**.  
You can also sort memos by **date** or **name** — all built with **React**, **Redux**, and **Tailwind CSS**.

👉 [LIVE DEMO](https://ai-memo-app-vert.vercel.app/)


---

## 🖊️ Features

- **Add Memos**: Create new memos with a title and detailed content.
- **Summarize Memos**: Generate a short summary using OpenAI.
- **Update Memos**: Edit your existing memos easily.
- **Delete Memos**: Remove memos you no longer need.
- **Sort Memos**: Sort the memos by **date** or **name**.

---

## 🛠 Tech Stack

### Frontend
- **React** – Component-based UI
- **Redux** – Global state management
- **React Router DOM** – Routing and navigation
- **Tailwind CSS** – Utility-first styling
- **Vite** – Lightning-fast development tooling

### AI Integration
- **OpenAI GPT-3.5 API** – For summarizing memo content

---

## 🧪 Getting Started Locally

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
