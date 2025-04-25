<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Thư viện ảnh</h2>
    <div class="mt-5">
      <input type="file" @change="onFileChange" accept="image/*" class="form-control" />
      <div v-if="previewImage" class="mt-3 d-flex flex-column align-items-center">
        <img :src="previewImage" alt="Preview" style="max-width: 200px; height: auto" />
        <input :value="urlImage" type="text" class="form-control mt-2" />
      </div>
      <button class="btn btn-success mt-3" @click="uploadImage" :disabled="!selectedFile">
        Tải lên ảnh
      </button>
    </div>
    <input
      type="text" 
      v-model="selectedImage"
      placeholder="URL ảnh sẽ hiện ở đây khi bạn bấm vào"
      readonly
      class="image-input"
    />
    <div v-if="loading" class="text-gray-500">Đang tải ảnh...</div>

    
    <div v-else class="image-grid">
  <div
    v-for="(image, index) in images"
    :key="index"
    class="image-item"
  >
    <button class="delete-btn" @click.stop="deleteImage(getFileName(image))">✕</button>
    <img :src="image" alt="uploaded" @click="selectImage(image)" />
  </div>
</div>
  </div>
</template>

<script>
import { apiDeleImg, apiGetImg, apiUploadImg } from "@/assets/js/api";
import axios from "axios";

export default {
  name: "ImageGallery",
  data() {
    return {
      images: [],
      loading: true,
      urlImage: "",
      selectedFile: null,
      previewImage: null,
      uploadedImages: [],
        selectedImage: ''
    };
  },
  methods: {
    getFileName(url) {
    return url.split('/').pop();
  },
    async fetchImages() {
      try {
        const res = await axios.get(apiGetImg);
        this.images = res.data.images;
      } catch (error) {
        console.error("Lỗi khi tải ảnh:", error);
      } finally {
        this.loading = false;
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.selectedFile = file;
      this.previewImage = URL.createObjectURL(file);
    },
    selectImage(imageUrl) {
      this.selectedImage = imageUrl
    },
    async deleteImage(imageName) {
    try {
      const res = await axios.delete(apiDeleImg + `${imageName}`);
      alert("Đã xoá ảnh ! ", res);
      this.fetchImages(); // Gọi lại API load ảnh để cập nhật UI
    } catch (err) {
      console.error("Lỗi khi xoá ảnh:", err);
    }
  },
    async uploadImage() {
      if (!this.selectedFile) return;

      const formData = new FormData();
      formData.append("image", this.selectedFile); // Giống như key trong Postman

      try {
        const response = await axios.post(apiUploadImg, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("✅ Tải lên thành công:", response.data);
        this.selectedImage = response.data.imageUrl; // Cập nhật đường dẫn ảnh vào form sản phẩm
        this.fetchImages(); 
      } catch (error) {
        console.error("❌ Lỗi tải ảnh:", error);
      }
    },
  },
  mounted() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.gallery-wrapper {
  padding: 20px;
  max-width: 1000px;
  margin: auto;
}

.gallery-wrapper h2 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.image-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.loading {
  text-align: center;
  color: #888;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

.image-item {
  position: relative; /* để nút xóa nằm đúng vị trí */
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
  transition: transform 0.2s ease;
}

.image-item img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: transform 0.2s ease;
}

.image-item img:hover {
  transform: scale(1.05);
}

.delete-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: opacity 0.2s ease;
}

/* Nếu bạn chỉ muốn hiển thị nút xóa khi hover */
.image-item .delete-btn {
  opacity: 0;
}
.image-item:hover .delete-btn {
  opacity: 1;
}
</style>