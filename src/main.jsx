import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://2ed017767b91e2ae32bf3d0976e884a0@o4507757147979776.ingest.de.sentry.io/4507757151584336",
  integrations: [
    Sentry.browserTracingIntegration(),
  
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,

    }),
    Sentry.replayIntegration(),
  ],
  
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
