# 🎨 EzyPlatform Starter Development

## 📋 Yêu cầu hệ thống

Để bắt đầu, bạn cần cài đặt trước các công cụ sau:

- [JDK 8](https://adoptopenjdk.net/)
- [Node.js](https://nodejs.org/) (sử dụng [pnpm](https://pnpm.io/) làm trình quản lý gói)
- [Apache Maven](https://maven.apache.org/)
- [EzyPlatform](https://github.com/youngmonkeys/ezyplatform)
- [EzyPlatform SDK](https://github.com/youngmonkeys/ezyplatform-sdk)

> **Lưu ý:** Hãy chắc chắn đã cài đặt EzyPlatform SDK và thiết lập biến môi trường `EZYPLATFORM_SDK`:

```bash
export EZYPLATFORM_SDK=/path/to/ezyplatform-sdk
export EZYPLATFORM_HOME=/path/to/ezyplatform
export PATH=$EZYPLATFORM_SDK/bin:$PATH
```

## 🚀 Bắt đầu nhanh

1. **Clone dự án về máy**

```bash
git clone <đường_dẫn_repo>
cd <tên_thư_mục_dự_án>
```

2. **Mở bằng VSCode**

```bash
code .
```

3. **Cài đặt và build backend**

Tại thư mục gốc của dự án, chạy:

```bash
mvn clean install
```

4. **Debug với VSCode**

- Mở tab **Run and Debug** trong VSCode.
- Chọn một trong hai cấu hình sau:
  - `Dev-Theme`: dành cho lập trình phần giao diện người dùng (theme).
  - `Dev-Admin`: dành cho lập trình phần giao diện quản trị (admin).
  - `Dev-All`: dành cho lập trình phần (admin) và (theme).
- Nhấn nút `Play` để bắt đầu chạy ứng dụng.

## 🌐 Truy cập giao diện

- Giao diện **theme**: mở trình duyệt và truy cập [http://localhost:3003](http://localhost:3003)
- Giao diện **admin**: mở trình duyệt và truy cập [http://localhost:3005](http://localhost:3005)

- Mỗi khi bạn **save** , giao diện sẽ **tự động reload**.
- Mỗi khi bạn run **./export.sh** , thì cần **reload** lại vscode.

---

🎉 **Happy coding!**
