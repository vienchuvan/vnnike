<template>
  <main>
    <div class="table-data">
      <!-- Danh sách sản phẩm -->
      <div class="todo">
        <div class="head">
          <h3>Sản phẩm</h3>
        </div>
        <ul class="todo-list" style="height: 700px; overflow: auto">
          <li
            v-for="(itemSanPham, index) in products"
            :key="index"
            class="completed"
            style="background: aliceblue"
            @click="editProduct(itemSanPham)"
          >
            <img
              :src="itemSanPham.imgSP"
              alt="Ảnh sản phẩm"
              style="width: 50px; height: 50px"
            />
            <strong>{{ itemSanPham.tenSP }}</strong>
            <span
              class="ml-lg-2 cursor-pointer"
              @click.stop="deleteProduct(itemSanPham.id)"
              style="cursor: pointer"
            >
              <i class="fa fa-times-circle" style="color: red" aria-hidden="true"></i>
            </span>
          </li>
        </ul>
      </div>

      <!-- Chi tiết sản phẩm -->
      <div class="order">
        <div class="head">
          <h3>Chi tiết</h3>
        </div>

        <div class="form-group input-group d-flex" style="flex-direction: column">
          <span class="has-float-label d-none">
            <input class="form-control" type="text" v-model="form.id" placeholder=" " />
          </span>
          <div class="container">
            <div class="row">
              <!-- Tên sản phẩm -->
              <span class="has-float-label col-12 col-md-6 p-1">
                <input
                  class="form-control"
                  :class="{ 'is-invalid': errors.tenSP }"
                  type="text"
                  v-model="form.tenSP"
                  placeholder=" "
                />
                <label>Tên sản phẩm</label>
                <small v-if="errors.tenSP" class="text-danger">{{ errors.tenSP }}</small>
              </span>
              <!-- URL ảnh hiển thị -->
              <span class="has-float-label col-12 col-md-6 p-1">
                <input
                  class="form-control"
                  :class="{ 'is-invalid': errors.maSP }"
                  type="text"
                  v-model="form.maSP"
                  placeholder=" "
                />
                <label>Mã sản phẩm</label>
                <small v-if="errors.maSP" class="text-danger">{{ errors.maSP }}</small>
              </span>
            </div>
          </div>
          <!-- URL ảnh hiển thị -->
          <span class="has-float-label mt-3 p-1">
            <input class="form-control" type="text" v-model="form.mota" placeholder=" " />
            <label>Chi tiết</label>
          </span>
          <!-- URL ảnh hiển thị -->
          <span class="has-float-label mt-3 p-1">
            <input
              class="form-control"
              type="text"
              v-model="form.imgSP"
                  :class="{ 'is-invalid': errors.imgSP }"
              placeholder=" "
            />
            <label>URL Ảnh hiển thị</label>
            <small v-if="errors.imgSP" class="text-danger">{{ errors.imgSP }}</small>
          </span>

          <!-- Danh mục sản phẩm -->
          <span class="has-float-label mt-3 p-1">
            <select
              class="form-control"
              :class="{ 'is-invalid': errors.idDanhMuc }"
              v-model="form.idDanhMuc"
              @change="onCategoryChange"
            >
              <option value="" disabled>Chọn danh mục</option>
              <option value="1">Sơn nội thất</option>
              <option value="2">Sơn ngoại thất</option>
              <option value="3">Sơn lót</option>
              <option value="4">Sơn chống thấm</option>
              <option value="5">Sơn bột bả - sơn nhũ</option>
            </select>
            <label>Danh mục sản phẩm</label>
            <small v-if="errors.idDanhMuc" class="text-danger">{{
              errors.idDanhMuc
            }}</small>
          </span>
        </div>
        <div class="container">
          <div class="row mt-4" v-for="(item, index) in quyCach" :key="item.id || index">
            <!-- Quy cách -->
            <span class="has-float-label col-12 col-md-4 p-1">
              <input
                class="form-control"
                type="text"
                v-model="item.quyCach"
                placeholder=" "
              />
              <label>Quy cách</label>
            </span>

            <!-- Giá bán -->
            <span class="has-float-label col-12 col-md-4 p-1">
              <input
                class="form-control"
                type="number"
                v-model="item.giaBan"
                placeholder=" "
              />
              <label>Giá bán</label>
            </span>

            <!-- Định mức + nút xoá -->
            <span class="has-float-label col-12 col-md-4 p-1 d-flex">
              <input
                class="form-control"
                type="text"
                v-model="item.dinhMuc"
                placeholder=" "
              />
              <label>Định mức <i>(m2/thùng)</i></label>
              <button
                class="ml-2"
                style="
                  cursor: pointer;
                  background-color: beige;
                  border: none;
                  border-radius: 10px;
                  height: 38px;
                  width: 38px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
                @click="removeQuyCach(index)"
              >
                <i class="fa fa-times-circle" style="color: red" aria-hidden="true"></i>
              </button>
            </span>
          </div>

          <!-- Nút thêm mới 1 dòng quy cách -->
          <button class="btn btn-add mt-3 m-auto" @click="addQuyCach">
            Thêm mục mới
          </button>
        </div>

        <!-- Nút hành động -->
        <div class="d-flex">
          <button class="w-25 btn btn-primary" @click="saveProduct" style="height: 50px">
            {{ form.id ? "Cập nhật sản phẩm" : "Thêm sản phẩm" }}
          </button>
          <button
            class="w-25 btn btn-secondary ml-2"
            @click="resetForm"
            style="height: 50px"
          >
            Hủy
          </button>
        </div>

        <!-- Upload ảnh -->
        <!-- <div class="mt-5">
          <input
            type="file"
            @change="onFileChange"
            accept="image/*"
            class="form-control"
          />
          <div v-if="previewImage" class="mt-3 d-flex flex-column align-items-center">
            <img
              :src="previewImage"
              alt="Preview"
              style="max-width: 50%; height: auto"
            />
            <input :value="urlImage" type="text" class="form-control mt-2" /> 
          </div>
          <button
            class="btn btn-success mt-3"
            @click="uploadImage"
            :disabled="!selectedFile"
          >
            Tải lên ảnh
          </button>
        </div>

        <div v-for="(img, index) in uploadedImages" :key="index" c>
  <img :src="img" style="max-width: 100px; margin: 10px;" />
</div>
      </div> -->
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { apiGetImg, apiSanPham, apiUploadImg } from "@/assets/js/api"; // hoặc bạn thay bằng đường dẫn cố định

export default {
  data() {
    return {
      products: [],
      form: {
        id: null,
        tenSP: "",
        imgSP: "",
        idDanhMuc: "",
        maSP: "",
        mota: "",
      },
      quyCach: [],
      errors: {}, 
      urlImage: "",
      selectedFile: null,
      previewImage: null,
      uploadedImages: [],
    };
  },

  mounted() {
    this.getProducts();
    this.fetchUploadedImages(); // Lấy danh sách ảnh đã tải lên
  },

  methods: {
    // 🟢 Lấy danh sách sản phẩm
    getProducts() {
      axios
        .get("https://sonvnnike.com.vn/api/sanpham/services/getSanPham")
        .then((res) => {
          this.products = res.data.response;
        })
        .catch((error) => {
          console.error("Lỗi lấy sản phẩm:", error);
        });
    },

    // 🟢 Lưu sản phẩm (thêm mới hoặc cập nhật)
    async saveProduct() {
      // Reset lỗi
      this.errors = {};

      // Kiểm tra các trường bắt buộc
      if (!this.form.tenSP) this.errors.tenSP = "Tên sản phẩm không được để trống";
      if (!this.form.maSP) this.errors.maSP = "Mã sản phẩm không được để trống";
      if (!this.form.idDanhMuc) this.errors.idDanhMuc = "Danh mục không được để trống";
      if (!this.form.imgSP) this.errors.imgSP = "Link ảnh không được để trống";

      // Nếu có lỗi, dừng lại
      if (Object.keys(this.errors).length > 0) {
        alert("Vui lòng kiểm tra lại các trường bắt buộc");
        return;
      }

      const isUpdate = !!this.form.id;
      const funcId = isUpdate ? 9 : 10;

      const payload = {
        funcId,
        ...this.form,
        quyCach: this.quyCach,
      };

      try {
        const response = await axios.post(apiSanPham, payload);
        alert(response.data.message || "Thao tác thành công");

        this.getProducts(); // Làm mới danh sách
        this.resetForm(); // Reset lại form
      } catch (err) {
        console.error("Lỗi thao tác:", err);
        alert("Có lỗi xảy ra khi lưu sản phẩm");
      }
    },

    // 🟢 Xóa sản phẩm
    async deleteProduct(id) {
      if (!confirm("Bạn có chắc muốn xóa sản phẩm này?")) return;

      try {
        const response = await axios.post(apiSanPham, {
          funcId: 11,
          id,
          type: 1, // 1 là xóa sản phẩm
        });
        alert(response.data.message || "Đã xóa");

        this.getProducts(); // Làm mới danh sách
        if (this.form.id === id) this.resetForm();
      } catch (err) {
        console.error("Lỗi xóa sản phẩm:", err);
        alert("Xóa thất bại");
      }
    },

    // 🟢 Chỉnh sửa sản phẩm
    async editProduct(product) {
      this.form = { ...product };
      await this.fetchProductDetal(product.id);
    },

    // 🟢 Lấy quy cách theo id sản phẩm
    async fetchProductDetal(id) {
      try {
        const response = await axios.post(apiSanPham, {
          funcId: 13,
          idSanPham: id,
        });
        this.quyCach = response.data.result || [];
      } catch (error) {
        console.error("Lỗi lấy quy cách:", error);
      }
    },

    // 🟢 Thêm dòng quy cách
    addQuyCach() {
      this.quyCach.push({
        id: null,
        idSanPham: this.form.id || null,
        quyCach: "",
        giaBan: "",
        dinhMuc: "",
      });
    },

    // 🟢 Xoá dòng quy cách
    removeQuyCach(index) {
      this.quyCach.splice(index, 1);
    },

    // 🟢 Reset form
    resetForm() {
      this.form = {
        id: null,
        tenSP: "",
        imgSP: "",
        idDanhMuc: "",
        maSP: "",
        mota: "",
      };
      this.quyCach = [];
    },

    onFileChange(e) {
      const file = e.target.files[0];
      this.selectedFile = file;
      this.previewImage = URL.createObjectURL(file);
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
        this.form.imgSP = response.data.imageUrl; // Cập nhật đường dẫn ảnh vào form sản phẩm
      } catch (error) {
        console.error("❌ Lỗi tải ảnh:", error);
      }
    },
    async fetchUploadedImages() {
      try {
        const res = await axios.get(apiGetImg);
        this.uploadedImages = res.data.images;
        console.log("Danh sách ảnh:", this.uploadedImages);
      } catch (error) {
        console.error("Lỗi lấy danh sách ảnh:", error);
      }
    },
  },
};
</script>

<style scoped>
.btn-add {
  color: #fff;
  background-color: #14a1ec;
  border-color: #28a745;
}
.container {
  margin-top: 20px;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  margin-bottom: 10px;
}

.has-float-label {
  position: relative;
}

.has-float-label input,
.has-float-label select {
  width: 100%;
  padding: 10px 10px 10px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.has-float-label label {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  transition: all 0.2s ease-in-out;
  color: #aaa;
  pointer-events: none;
}

.has-float-label input:focus + label,
.has-float-label input:not(:placeholder-shown) + label,
.has-float-label select:focus + label,
.has-float-label select:not([value=""]) + label {
  top: -10px;
  font-size: 12px;
  color: #333;
}

.has-float-label input::placeholder {
  color: #ccc;
  opacity: 1;
}

.d-flex {
  display: flex;
  justify-content: space-between;
  /* margin-top: 20px; */
}
.is-invalid {
  border-color: red;
}
.text-danger {
  color: red;
  font-size: 12px;
}
button {
  cursor: pointer;
}
</style>
