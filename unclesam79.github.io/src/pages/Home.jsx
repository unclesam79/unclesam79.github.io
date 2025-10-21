export default function Home() {
  return (
    <div className="pdf-container">
      <object
        data={`${import.meta.env.BASE_URL}Samir_Mahmood.pdf`}
        type="application/pdf"
        className="pdf-view"
      >
        <p>Your browser does not support PDFs.
          <a href={`${import.meta.env.BASE_URL}Samir_Mahmood.pdf`} target="_blank">Download the PDF</a>.
        </p>
      </object>
    </div>
  );
}
