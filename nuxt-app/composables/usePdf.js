// composables/usePdf.js
import { ref } from 'vue';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';

export function usePdf() {
    const pdfDocument = ref(null);

    async function loadPdf(url) {
        try {
            const loadingTask = pdfjsLib.getDocument(url);
            pdfDocument.value = await loadingTask.promise;
        } catch (error) {
            console.error("Error loading PDF: ", error);
        }
    }

    return { pdfDocument, loadPdf };
}
