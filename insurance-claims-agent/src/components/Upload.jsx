import React from 'react'
import { FaUpload } from "react-icons/fa";
import { extractFields } from "../utils/parser";
import { validateFields, checkInconsistency } from "../utils/validator";
import { decideRoute } from "../utils/router";

function Upload({ setDocumentText, setFields, setMissingFields, setInconsistencies, setRoute, setReasoning }) {
    function readFile(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            setDocumentText(text);
            const data = extractFields(text);
            setFields(data);
            const missing = validateFields(data);
            setMissingFields(missing);
            const issues = checkInconsistency(data);
            setInconsistencies(issues);
            const result = decideRoute(data, missing);
            setRoute(result.recommendedRoute);
            setReasoning(result.reasoning);
        };
        reader.readAsText(file);
    }
    return (
        <div className="card">
            <h2>Upload FNOL Document</h2>
            <div className="upload-box">
                <FaUpload size={15} />
                <p>Select a TXT File</p>
                <input type="file" accept=".txt" onChange={readFile} />
            </div>
        </div>
    );
}

export default Upload;
