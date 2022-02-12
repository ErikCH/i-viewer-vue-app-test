<script lang="ts" setup>
import { ref, inject } from "vue";

const props = defineProps<{
  customImg?: string;
}>();

const img = inject("specialUploadImage") as string;

const imgVal = props.customImg ?? img;
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
    <h1>File Uploader</h1>
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
  background-color: eggshell;
  margin: 0 auto;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
