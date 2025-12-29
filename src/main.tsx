import React from 'react'
import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.tsx'
import './index.css'

export const createApp = ViteSSG(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)