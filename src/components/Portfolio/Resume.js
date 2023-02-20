import React from 'react'
import Res from '../../assets/Resume.pdf'

function Resume() {
  return (
    <div className="res">
        <object
            data={Res}
            type="application/pdf"
            width="100%"
            height="100%"
        >
            <p>
                Your browser does not support PDFs.
                <a href="https://example.com/test.pdf">Download the PDF</a>
                .
            </p>
        </object>
    </div>
  )
}

export default Resume