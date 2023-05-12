import React from 'react';
import jsPDF from 'jspdf';
import "./Certificate.css"

const Certificate = () => {

  const storedName = JSON.parse(localStorage.getItem("naaame"));
  // const handlePdfDownload = () => {
  //   const doc = new jsPDF({
  //     orientation: 'portrait',
  //     unit: 'mm',
  //     format: 'a4',
  //     compress: true
  //   });
  
  //   const outerDiv = document.querySelector('.outer');
  //   const content = outerDiv.innerText;
  
  //   // Adjust font size to fit content on a single page
  //   const fontSize = 20;
  //   const lineHeight = 1.2;
  //   const pageHeight = doc.internal.pageSize.height - 20;
  //   const textWidth = doc.getTextWidth(content);
  //   const textLines = doc.splitTextToSize(content, doc.internal.pageSize.width - 20);
  
  //   // Calculate the required font size to fit the text on a single page
  //   let requiredFontSize = fontSize;
  //   while (doc.getTextDimensions(textLines, { fontSize: requiredFontSize }).h > pageHeight) {
  //     requiredFontSize -= 0.5;
  //   }
  
  //   // Set font size and print the content on the PDF
  //   doc.setFontSize(requiredFontSize);
  //   doc.text(10, 10, textLines);
  
  //   // Save the PDF
  //   doc.save('certificate.pdf');
  // };

  return (
    <div className='c-container'>
      <div className='c-wrapper'>
        <div className='outer'>
          
            <div className='c-h11'>
              <h1 className='c-h1'> Certification of Sucsess</h1>
            </div>
            <div className='c-content'>
              <p className='c-cong'>
                Congratulations! This is to certify that <span className='c-name'>{storedName}</span> has successfully completed the HTML Quiz. <br /> During this quiz he/she demonstrated a high level of knowledge, skill, and competence.
              </p>
            </div>
        </div>
        {/* <button className='pdf-button' >Download certificate </button> */}
      </div>
    </div>
  );
};

export default Certificate;