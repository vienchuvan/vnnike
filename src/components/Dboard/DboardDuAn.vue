<template>
  <main>
    <div class="table-data">
      <div class="todo">
        <div class="head">
          <h3>Danh sách Dự án</h3>
        </div>
        <ul class="todo-list">
          <li
            v-for="(duAn, index) in duAnList"
            :key="index"
            style="background: aliceblue"
            @click="showEditModal(duAn)"
          >
            <img
              :src="duAn.imgDuAn"
              alt="Ảnh sản phẩm"
              style="width: 50px; height: 50px"
            />
            <strong>{{ duAn.tenDuAn }}</strong>
            <span @click.stop="deleteDuAn(duAn.id)">
              <i class="fa fa-times-circle" style="color: red" aria-hidden="true"></i>
            </span>
          </li>
        </ul>
      </div>

      <div class="order">
        <div class="head">
          <h3>{{ isEditing ? "Sửa" : "Thêm" }} Dự án</h3>
        </div>
        <div class="form-group input-group d-flex" style="flex-direction: column">
          <span class="has-float-label col-12 p-1">
            <input
              class="form-control mt-2"
              v-model="formData.tenDuAn"
              placeholder="Tên dự án"
            />
          </span>
          <span class="has-float-label col-12 p-1">
            <input
              class="form-control mt-2"
              v-model="formData.diaChiDuAn"
              placeholder="Địa chỉ dự án"
            />
          </span>
          <span class="has-float-label col-12 p-1">
            <input
              class="form-control mt-2"
              v-model="formData.imgDuAn"
              placeholder="URL hình ảnh"
            />
          </span>
          <div class="d-flex mt-4">
            <button
              class="btn btn-primary w-50"
              @click="isEditing ? updateDuAn() : addDuAn()"
            >
              {{ isEditing ? "Cập nhật" : "Thêm mới" }}
            </button>
            <button class="btn btn-secondary w-50 ml-2" @click="resetForm">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { apiDuAn, apiGetDuAn } from "@/assets/js/api";
import axios from "axios";

export default {
  data() {
    return {
      duAnList: [],
      showModal: false,
      isEditing: false,
      formData: {
        id: null,
        user: "0979951954",
        tenDuAn: "",
        diaChiDuAn: "",
        imgDuAn: "",
      },
    };
  },
  methods: {
    async fetchDuAn() {
      try {
        const response = await axios.get(apiGetDuAn);
        this.duAnList = response.data.response;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách dự án:", error);
      }
    },
    showAddModal() {
      this.isEditing = false;
      this.formData = {
        id: null,
        user: "",
        tenDuAn: "",
        diaChiDuAn: "",
        imgDuAn: "",
      };
      this.showModal = true;
    },
    showEditModal(duAn) {
      this.isEditing = true;
      this.formData = { ...duAn };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    resetForm() {
      this.isEditing = false;
      this.formData = {
        id: null,
        user: "0979951954",
        tenDuAn: "",
        diaChiDuAn: "",
        imgDuAn: "",
      };
    },
    async addDuAn() {
  const { tenDuAn, diaChiDuAn, imgDuAn } = this.formData;
  if (!tenDuAn || !diaChiDuAn || !imgDuAn) {
    alert("❌ Vui lòng điền đầy đủ thông tin dự án!");
    return;
  }

  try {
    // eslint-disable-next-line no-unused-vars
    const res = await axios.post(apiDuAn + `/addDuAn`, this.formData);
    alert("✅ Thêm dự án thành công!" );
    this.fetchDuAn();
    this.closeModal();
  } catch (error) {
    console.error("Lỗi khi thêm dự án:", error);
    alert("❌ Lỗi khi thêm dự án.");
  }
},
async updateDuAn() {
  const { tenDuAn, diaChiDuAn, imgDuAn } = this.formData;
  if (!tenDuAn || !diaChiDuAn || !imgDuAn) {
    alert("❌ Vui lòng điền đầy đủ thông tin để cập nhật!");
    return;
  }

  try {
    // eslint-disable-next-line no-unused-vars
    const res = await axios.put(apiDuAn + `/updateDuAn/${this.formData.id}`, this.formData);
    alert("✅ Cập nhật dự án thành công!");
    this.fetchDuAn();
    this.closeModal();
  } catch (error) {
    console.error("Lỗi khi cập nhật dự án:", error);
    alert("❌ Lỗi khi cập nhật dự án.");
  }
},
async deleteDuAn(id) {
  const confirmDelete = confirm("⚠️ Bạn có chắc muốn xóa dự án này?");
  if (!confirmDelete) return;

  try {
    await axios.delete(apiDuAn + `/deleteDuAn/${id}`);
    alert("✅ Xóa dự án thành công!");
    this.fetchDuAn();
  } catch (error) {
    console.error("Lỗi khi xóa dự án:", error);
    alert("❌ Lỗi khi xóa dự án.");
  }
}
  },
  mounted() {
    this.fetchDuAn();
  },
};
</script>

<style>
.bg-dboard {
  position: relative;
  height: 100vh;
}
.bg-dboard::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://fancyhouse-design.com/wp-content/uploads/2024/04/Light-and-shadow-interplay-create-dramatic-effects-accentuating-the-architectural-details-of-modern-homes.jpg)
    no-repeat center center fixed;
  background-size: cover;
  filter: blur(10px); /* Làm mờ background */
  z-index: -1;
}
</style>
