import React from "react"
import Posts from "./posts"
import { Routes, Route, Link } from "react-router-dom";

export default function App() {

    return <div className="App">
        <h1>Welcome to One Feed!</h1>
        <Routes>
        <Route path="/" element={<Posts />} />
        {/* <Route path="about" element={<Posts />} /> */}
        </Routes>
    </div>
}