import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProviderWrapper } from "./context/theme.context";
import { AuthProviderWrapper } from './context/auth.context.jsx'
import { Provider } from "react-redux";
// import { DragDropContext } from 'react-beautiful-dnd';
import store from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProviderWrapper>
      <AuthProviderWrapper>
      {/* <DragDropContext> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </DragDropContext> */}
      </AuthProviderWrapper>
      </ThemeProviderWrapper>
    </Router>
  </React.StrictMode>,
)
