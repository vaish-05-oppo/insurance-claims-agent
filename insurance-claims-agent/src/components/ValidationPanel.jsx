import React from 'react'

function ValidationPanel({ missingFields, inconsistencies }) {
    return (
        <div className="card">
            <h2>Validation</h2>
            <h3>Missing Fields</h3>
            <ul>
                {missingFields.length === 0 ?
                    <li>None</li> : missingFields.map((field, index) =>
                        <li key={index}>{field}</li>
                    )}
            </ul>
            <h3>Inconsistencies</h3>
            <ul>
                {inconsistencies.length === 0 ?
                    <li>None</li> : inconsistencies.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
            </ul>
        </div>
    )
}

export default ValidationPanel;
