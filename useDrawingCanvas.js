import { ref } from '@nuxtjs/composition-api';

export default function useDrawingCanvas(canvasRef, initialWidth, initialHeight, initialLineColor, initialLineWidth) {
    const canvasWidth = ref(initialWidth);
    const canvasHeight = ref(initialHeight);
    const lineColor = ref(initialLineColor);
    const lineWidth = ref(initialLineWidth);

    const clearCanvas = () => {
        const canvas = canvasRef.value;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    return {
        canvasWidth,
        canvasHeight,
        lineColor,
        lineWidth,
        clearCanvas
    };
}
