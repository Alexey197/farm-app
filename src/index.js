import React from 'react'
import ReactDom from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'

const element = <h1>Hello World</h1>

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(element)
