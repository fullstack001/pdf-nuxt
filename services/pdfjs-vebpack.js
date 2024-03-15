import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerPort = new Worker(
  new URL("pdfjs-dist/build/pdf.worker.js", import.meta.url)
);

export default pdfjsLib;
