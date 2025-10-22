import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'

       

function App() {
      
        const [chatMessages, setChatMessages]= useState([
          { message: 'hello chatbot', sender: 'user' },
          { message: 'Hello! How can I help you?', sender: 'robot' },
          { message: 'can you get me todays date?', sender: 'user' },
          { message: 'Today date is 16 October', sender: 'robot' }
        ])
        return (
          <div className="app-container">
            
            <ChatMessages chatMessages={chatMessages} />    
            <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} /> 
          </div>
        );
      }

export default App
