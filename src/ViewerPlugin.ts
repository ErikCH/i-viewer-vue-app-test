import { defineCustomElement } from "vue";
import VueSpecialUploader from "./components/special-uploader.ce.vue";

export const SpecialUploader = defineCustomElement(VueSpecialUploader);

// Optional: Provide an easy way to register the custom element.
export function register(tagName = "special-uploader") {
  customElements.define(tagName, SpecialUploader);
}
