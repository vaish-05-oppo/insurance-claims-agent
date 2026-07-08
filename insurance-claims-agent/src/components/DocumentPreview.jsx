import React from 'react'

function DocumentPreview({ documentText }) {
  return (
    <div className='card'>
      <h2>Document Preview</h2>
      <textarea rows={15} value={documentText} readOnly></textarea>
    </div>
  )
}

export default DocumentPreview
