import { saveAs } from "file-saver";
import "./ImageListItem.css";

export function ImageListItem({ img }) {
  async function downLoadImage(){
    const resp = await fetch(img.download_url);
    const blob = await resp.blob();
    saveAs(blob, img.author+"_"+img.id);
  }
  return (
    <div className="card">
      <a href={img.url}>
        <img src={img.download_url} className="img" alt="Image" />
      </a>
      <div className="card_banner">
        <img src={img.download_url} className="card_thumb" alt="Image" />
        <div className="card_text">
          <h3 className="card_title">
            {img.author}
          </h3>
          <div className="card_status">
            Original size : {img.height} x {img.width}
          </div>
          <button onClick={downLoadImage}>Download</button>
        </div>
      </div>
    </div>
  );
}
