<template>
  <main>
    <div class="table-data">
      <!-- Danh sách sản phẩm -->
      <div class="todo">
        <div class="head">
          <h3>Sản phẩm</h3>
        </div>
        <ul class="todo-list" style="height: 800px; overflow: auto">
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
              <i
                class="fa fa-times-circle"
                style="color: red"
                aria-hidden="true"
              ></i>
            </span>
          </li>
        </ul>
      </div>

      <!-- Chi tiết sản phẩm -->
      <div class="order">
        <div class="head">
          <h3>Chi tiết</h3>
        </div>

        <div
          class="form-group input-group d-flex"
          style="flex-direction: column"
        >
          <span class="has-float-label d-none">
            <input
              class="form-control"
              type="text"
              v-model="form.id"
              placeholder=" "
            />
          </span>
          <!-- Tên sản phẩm -->
          <span class="has-float-label">
            <input
              class="form-control"
              type="text"
              v-model="form.tenSP"
              placeholder=" "
            />
            <label>Tên sản phẩm</label>
          </span>

          <!-- URL ảnh hiển thị -->
          <span class="has-float-label mt-5">
            <input
              class="form-control"
              type="text"
              v-model="form.imgSP"
              placeholder=" "
            />
            <label>URL Ảnh hiển thị</label>
          </span>

          <!-- Danh mục sản phẩm -->
          <span class="has-float-label mt-5">
            <select
              class="form-control"
              v-model="form.idDanhMuc"
              @change="onCategoryChange"
            >
              <option value="" disabled>Chọn danh mục</option>
              <option value="1">Sơn nội thất</option>
              <option value="2">Sơn ngoại thất</option>
              <option value="3">Sơn lót</option>
              <option value="4">Sơn chống thấm</option>
              <option value="5">Sơn chống nóng</option>
            </select>
            <label>Danh mục sản phẩm</label>
          </span>
        </div>

        <!-- Nút hành động -->
        <div class="d-flex">
          <button
            class="w-25 btn btn-primary"
            @click="saveProduct"
            style="height: 50px"
          >
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
        <div class="mt-5">
            <input
                type="file"
                @change="onFileChange"
                accept="image/*"
                class="form-control"
            />
            <div v-if="previewImage" class="mt-3">
                <img :src="previewImage" alt="Preview" style="max-width: 100%; height: auto;" />
            </div>
            <button
                class="btn btn-success mt-3"
                @click="uploadImage"
                :disabled="!selectedFile"
            >
                Tải lên ảnh
            </button>
        </div>

      </div>
    </div>
  </main>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      form: {
        id: null,
        name: "",
        imgSP: "",
        category: "",
      },
    };
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    // Lấy danh sách sản phẩm từ API
    getProducts() {
      axios
        .get("https://sonvnnike.com.vn/api/sanpham/services/getSanPham")
        .then((res) => {
          this.products = res.data.response;
          console.log("Products fetched:", this.products);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },

    // Lưu sản phẩm (thêm mới hoặc cập nhật)
    saveProduct() {
      if (this.form.id) {
        // Cập nhật sản phẩm
        const index = this.products.findIndex(
          (product) => product.id === this.form.id
        );
        if (index !== -1) {
          this.products[index] = { ...this.form };
        }
      } else {
        // Thêm sản phẩm mới
        const newProduct = {
          ...this.form,
          id: Date.now(),
        };
        this.products.push(newProduct);
      }
      this.resetForm();
    },

    // Chỉnh sửa sản phẩm
    editProduct(product) {
      this.form = { ...product };
    },

    // Xóa sản phẩm
    deleteProduct(id) {
      this.products = this.products.filter((product) => product.id !== id);
    },

    // Reset form
    resetForm() {
      this.form = {
        id: null,
        name: "",
        imgSP: "",
        category: "",
      };
    },

    // Xử lý khi thay đổi danh mục
    onCategoryChange() {
      console.log("Danh mục đã thay đổi:", this.form.category);
    },
  },
};
</script>
  
  <style scoped>
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
  margin-top: 20px;
}

button {
  cursor: pointer;
}
</style>