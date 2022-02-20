<script lang="ts" setup>
import { ref } from "vue";
import MyCustomText from "./my-custom-text.vue";

const props = defineProps<{
  customImg?: string;
}>();

const imgVal = props.customImg ?? "";
const imgSRC = ref(imgVal);
function fileUpload(event: Event) {
  const target = event.target as HTMLInputElement;
  console.log(target.files);

  const file = target.files[0];
  console.log("file", file);
  fileProcess(file);
}

function fileProcess(file: File) {
  imgSRC.value = URL.createObjectURL(file);
  console.log("got the file", file);
  console.log(imgSRC.value);
}
</script>

<template>
  <div class="image-uploader">
    <my-custom-text :customText="'File Uploader'"></my-custom-text>
    <input
      @change="fileUpload"
      type="file"
      id="file-upload"
      name="fileUpload"
      accept="image/*"
    />
    <div class="your-file">
      <img :src="imgSRC" alt="" srcset="" />
    </div>
    img source:{{ imgSRC }}
  </div>
</template>
<style>
.image-uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  width: 55%;
  background-color: seashell;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
h3 {
  font-size: 3rem;
  color: green;
}

.your-file {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

img {
  width: 25%;
}
</style>
