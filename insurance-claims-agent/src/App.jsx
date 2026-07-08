import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Upload from './components/Upload'
import DocumentPreview from './components/DocumentPreview'
import ExtractedFields from './components/ExtractedFields'
import ValidationPanel from './components/ValidationPanel'
import RoutePanel from './components/RoutePanel'
import JsonOutput from './components/JsonOutput'
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import Footer from "./components/Footer";
function App() {
  const [documentText, setDocumentText] = useState("");
  const [fields, setFields] = useState({});
  const [missingFields, setMissingFields] = useState([]);
  const [inconsistencies, setInconsistencies] = useState([]);
  const [route, setRoute] = useState("");
  const [reasoning, setReasoning] = useState("");

  return (

    <div className="layout">

    <Sidebar />

    <div className="content">

        <Header />

        <Upload
            setDocumentText={setDocumentText}
            setFields={setFields}
            setMissingFields={setMissingFields}
            setInconsistencies={setInconsistencies}
            setRoute={setRoute}
            setReasoning={setReasoning}
        />

        <DocumentPreview documentText={documentText} />

        <DashboardCards
            fields={fields}
            missing={missingFields}
            route={route}
        />

        <ExtractedFields fields={fields} />

        <ValidationPanel
            missingFields={missingFields}
            inconsistencies={inconsistencies}
        />

        <RoutePanel
            route={route}
            reasoning={reasoning}
        />

        <JsonOutput
            fields={fields}
            missingFields={missingFields}
            route={route}
            reasoning={reasoning}
        />

        <Footer />

    </div>

</div>
  )
}

export default App
