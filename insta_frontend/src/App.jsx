import Sidebar from "./components/sidebar/Sidebar"
import './App.css'
import Links from "./routes/Links"

function App() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="contents">
            <Links/>
        </div>
      </div>
    </>
  )
}

export default App
