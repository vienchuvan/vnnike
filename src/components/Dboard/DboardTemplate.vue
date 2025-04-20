<template>
    <div>
        <h1>Danh sách thư mục trong Template</h1>
        <ul>
            <li
                v-for="folder in folders"
                :key="folder"
                @click="selectFolder(folder)"
                :class="{ selected: folder === selectedFolder }"
            >
                {{ folder }}
            </li>
        </ul>
        <button @click="pushToFolder" :disabled="!selectedFolder || selectedFiles.length === 0">
            Đẩy vào thư mục
        </button>

        <h2>Hoặc chọn thư mục từ máy tính</h2>
        <input type="file" webkitdirectory @change="handleFolderSelect" />
    </div>
</template>

<script>
export default {
    name: "DboardTemplate",
    data() {
        return {
            folders: ["quanly", "shop"], // Danh sách thư mục thực tế
            selectedFolder: null, // Thư mục được chọn
            selectedFiles: [], // Danh sách file từ thư mục được chọn
        };
    },
    methods: {
        selectFolder(folder) {
            // Lưu thư mục được chọn
            this.selectedFolder = folder;
        },
        async pushToFolder() {
            if (this.selectedFolder && this.selectedFiles.length > 0) {
                try {
                    // Gửi danh sách file và thư mục được chọn đến server
                    const response = await fetch("/api/upload", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            targetFolder: this.selectedFolder,
                            files: this.selectedFiles,
                        }),
                    });

                    if (response.ok) {
                        alert(`Đã đẩy file vào thư mục: ${this.selectedFolder}`);
                    } else {
                        alert("Có lỗi xảy ra khi đẩy file vào thư mục.");
                    }
                } catch (error) {
                    console.error("Lỗi khi đẩy file:", error);
                    alert("Không thể đẩy file vào thư mục.");
                }
            }
        },
        handleFolderSelect(event) {
            // Lấy danh sách file từ thư mục được chọn
            const files = Array.from(event.target.files);
            this.selectedFiles = files.map(file => ({
                name: file.name,
                path: file.webkitRelativePath,
            }));
            alert(`Đã chọn thư mục với ${files.length} tệp.`);
            console.log("Danh sách file:", this.selectedFiles);
        },
    },
};
</script>

<style scoped>
h1 {
    font-size: 24px;
    margin-bottom: 16px;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
li {
    padding: 8px 0;
    font-size: 18px;
    cursor: pointer;
}
li.selected {
    font-weight: bold;
    color: blue;
}
button {
    margin-top: 16px;
    padding: 10px 20px;
    cursor: pointer;
}
button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>