import React from 'react'

function ExtractedFields({ fields }) {
    return (
        <div className="card">
            <h2>Extracted Fields</h2>
            <table>
                <tbody>
                    {Object.keys(fields).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{fields[key]}</td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}

export default ExtractedFields;