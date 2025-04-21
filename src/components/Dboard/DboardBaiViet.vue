<template>
  <main>
    <div class="table-data">
      <div class="todo">
        <div class="head">
          <h3>Bài viết</h3>
        </div>
        <ul class="todo-list">
          <li
            v-for="(itemBaiViet, index) in listBaiViet"
            :key="index"
            class="completed"
            @click="getChiTietBaiViet(itemBaiViet)"
          >
            <strong>{{ decodeBase64(itemBaiViet.title) }}</strong>
            <span class="ml-lg-2 cursor-pointer">
              <i class="fa fa-times-circle" style="color: red" aria-hidden="true"></i>
            </span>
          </li>
        </ul>
      </div>
      <div class="order">
        <div class="head">
          <h3>Chi tiết</h3>
        </div>

        <div class="form-group input-group d-flex" style="flex-direction: column">
          <span class="has-float-label">
            <input
              class="form-control"
              type="text"
              v-model="titleBaiViet"
              @focus="moveLabelUp"
              @blur="moveLabelDown"
            />
            <label style="font-size: 16px; font-weight: 600">Tiêu đề</label>
          </span>

    
          <span class="has-float-label mt-4">
            <input
              class="form-control"
              style="height: 100px"
              type="text"
              v-model="shortContent"
            />
            <label style="font-size: 16px; font-weight: 600">Nội dung tóm tắt</label>
          </span>
          
          <span class="has-float-label mt-4">
           
            <textarea id="editor1"></textarea>
          </span>
          <span class="has-float-label mt-4">
            <input
              class="form-control"
              type="text"
              v-model="urlImage"
            />
            <label style="font-size: 16px; font-weight: 600">url Ảnh hiển thị</label>
          </span>

          <span class="has-float-label mt-4">
            <input
              class="form-control"
              type="text"
              v-model="urlBaiViet"
            />
            <label style="font-size: 16px; font-weight: 600">Link bài viết  <i style="font-weight: 200; font-size: 14px;">(* VD: son-trong-tham)</i></label> 
          </span>
        </div>
        <div class="d-flex">
          <button
            class="w-25"
            @click="suaBaiViet()"
            style="height: 50px; color: white"
            v-if="updateBaiViet"
          >
            Sửa bài viết
          </button>
          <button class="w-25"  @click="themBaiVietMoi()" style="height: 50px; color: white" v-if="themBaiViet">
            Thêm bài viết
          </button>
        </div>
      </div>

   
    </div>
  </main>
</template>

<script>
import { getBaiViet, postUpdateBaiViet } from "@/assets/js/snapService";

export default {
  name: "CkEditor",
  data() {
    return {
      listBaiViet: [],
      titleBaiViet: "",
      shortContent: "",
      urlBaiViet: "",
      urlImage: "",
      contentBaiViet: "",
      ckEditor: null,
      themBaiViet: true,
      updateBaiViet: false,
      idBaiViet: "",
    };
  },
  async mounted() {
    await this.getListBaiViet();

    if (window.CKEDITOR) {
      this.ckEditor = window.CKEDITOR.replace("editor1");

      // Khi nội dung CKEditor thay đổi, cập nhật contentBaiViet
      this.ckEditor.on("change", () => {
        this.contentBaiViet = this.ckEditor.getData();
      });
    } else {
      console.error("CKEditor chưa được load. Hãy kiểm tra lại việc import CKEditor.");
    }
  },
  methods: {
    async getListBaiViet() {
      try {
        const resBaiViet = await getBaiViet();
        this.listBaiViet = resBaiViet.response;
        console.log("listBaiViet:", this.listBaiViet);
      } catch (err) {
        console.log(err);
      }
    },

    decodeBase64(encodedString) {
      try {
        return decodeURIComponent(escape(atob(encodedString)));
      } catch (error) {
        console.error("Lỗi giải mã Base64:", error);
        return encodedString;
      }
    },
    getChiTietBaiViet(itemBaiViet) {
      this.themBaiViet = false;
      this.updateBaiViet = true;
      this.titleBaiViet = this.decodeBase64(itemBaiViet.title);
      this.contentBaiViet = this.decodeBase64(itemBaiViet.content);
      this.shortContent = this.decodeBase64(itemBaiViet.shortContent);
      this.urlImage = this.decodeBase64(itemBaiViet.urlImgBaiViet);
      this.urlBaiViet = this.decodeBase64(itemBaiViet.shortURL);
      this.idBaiViet = itemBaiViet.id;
      // Cập nhật nội dung vào CKEditor
      if (this.ckEditor) {
        this.ckEditor.setData(this.contentBaiViet);
      } else {
        console.error("CKEditor chưa được khởi tạo.");
      }
    },

    async suaBaiViet() {
      try {
        const resBaiViet = await postUpdateBaiViet(
          5,
          "0979951954",
          this.titleBaiViet,
          this.shortContent,
          this.contentBaiViet,
          this.urlImage,
          this.urlBaiViet,
          this.idBaiViet
        );
        console.log(" resBaiViet ", resBaiViet);
        if (resBaiViet.status === 200) {
          alert(resBaiViet.data.message);
          window.location.reload();
        } else {
          alert("Có lỗi xảy ra, vui lòng thử lại sau !");
        }
      } catch (err) {
        console.log(err);
      }
    },

    async themBaiVietMoi() {
      try {
        const resBaiViet = await postUpdateBaiViet(
          6,
          "0979951954",
          this.titleBaiViet,
          this.shortContent,
          this.contentBaiViet,
          this.urlImage,
          this.urlBaiViet,
          this.idBaiViet
        );
        console.log(" resBaiViet ", resBaiViet);
        if (resBaiViet.status === 200) {
          alert(resBaiViet.data.message);
          window.location.reload();
        } else {
          alert("Có lỗi xảy ra, vui lòng thử lại sau !");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.ck-editor__editable {
  min-height: 300px !important;
  width: 100% !important;
  max-width: 100% !important;
}
.has-float-label {
  position: relative;
}

.has-float-label input {
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
.has-float-label input:not(:placeholder-shown) + label {
  top: -10px;
  font-size: 12px;
  color: #333;
}

.has-float-label input::placeholder {
  color: #ccc;
  opacity: 1; /* Đảm bảo placeholder luôn hiển thị */
}

</style>
