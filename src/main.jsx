import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context.jsx'
import { Provider } from "react-redux";
import store from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  /* React strict mode is commented due to react-beautiful-dnd library incompatibility. 
  With it, kanban's drag and drop doesn't work. */
  // <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
      <Provider store={store}>
        <App />
      </Provider>
      </AuthProviderWrapper>
    </Router>
  // </React.StrictMode>,
)
