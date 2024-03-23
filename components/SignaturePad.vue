<!-- components/SignaturePad.vue -->
<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";

export default {
  mounted() {
    // Get canvas element
    const canvas = this.$refs.canvas;

    // Set canvas width and height
    canvas.width = this.width;
    canvas.height = this.height;

    // Create SignaturePad instance
    this.signaturePad = new SignaturePad(canvas, {
      // Set pen color
      // penColor: this.penColor,
      //  backgroundColor: "#f5f5fa",
      backgroundColor: "rgba(0,0,0,0)",
    });
  },
  props: {
    width: {
      type: Number,
      default: 600, // Default width
    },
    height: {
      type: Number,
      default: 100, // Default height
    },
  },
  methods: {
    updateColor(newColor) {
      if (this.signaturePad) {
        this.signaturePad.penColor = newColor;
      }
    },
    clear() {
      this.signaturePad.clear();
    },
    getAllStrokes() {
      return this.signaturePad.toDataURL();
    },
  },
};
</script>
