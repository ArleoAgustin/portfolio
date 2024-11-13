import style from './ButtonDownload.module.css';

function DownloadButton() {
  const downloadFile = () => {
    
    const fileUrl = '../../../public/CV - Agustin Arleo.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV - Agustin Arleo'; // Nombre del archivo en la descarga
    link.click();
  };

  return (
    <button className={style.button} onClick={downloadFile}>
      Descargar CV
    </button>
  );
}

export default DownloadButton;
