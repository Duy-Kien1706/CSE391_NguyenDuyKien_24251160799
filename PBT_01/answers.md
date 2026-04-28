# Phần A
## Câu A1: 
### Câu 1: Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter, hãy liệt kê đúng thứ tự ít nhất 5 bước xảy ra (từ DNS lookup đến render).'
# Dựa trên hành trình "0.3 giây xuyên đại dương" và mô hình Client-Server, các bước diễn ra như sau:
1. Bước 1: DNS Lookup: Trình duyệt hỏi DNS server để chuyển đổi "shopee.vn" thành địa chỉ IP của server.
2. Bước 2: Thiết lập kết nối (TCP + TLS) : Trình duyệt tạo kết nối với server
3. Bước 3: Gửi HTTP Request: Trình duyệt gửi request kiểu GET / đến server Shopee
4. Bước 4: Server xử lí: Server nhận request sau đó xử lí logic và chuẩn bị dữ liệu
5. Bước 5: Server trả về HTTP Response: Trả về HTML chính 
6. Bước 6: Trình duyệt chuyển đổi HTML sau đó render ra giao diện
7. Bước 7: Người dùng thấy giao diện shopee
### Câu 2: Trong DevTools của Chrome, tab Network cho thấy thông tin gì?
# Dựa vào file 01_introduction_html_universe.md phần 4.3
Tab NetWork: xem request/ reponses  
Ví dụ: Thời gian load từng file, Dung lượng file, loại tài nguyên   
Công dụng: Website tải chậm - file nào nặng nhất có thể dùng để biết web chậm vì cái gì  
![ảnh chụp màn hình tab network](./screenshots/Cau2_A1.png)  

## Câu A2:
```html
<div class="header">
    <div class="logo">ShopTLU</div>
    <div class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </div>
</div>
<div class="main">
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image"><img src="iphone.jpg"></div>
    </div>
</div>
<div class="footer">© 2026 ShopTLU</div>
```
Đoạn HTML này nhìn vẫn chạy được, nhưng với Google thì nó “khó hiểu” vì thiếu semantic (ý nghĩa cấu trúc)  
Lỗi semantic:  
Lỗi 1: dùng div thay vì header(sửa `<div class="header">` thành `<header>`)  
Lỗi 2: dùng div thay vì dùng nav(sửa `<div class = menu>` thành `<nav>`)  
Lỗi 3: dùng div thay vì dùng main sẽ (sửa `<div class = main>` thành `<main>`)  
Lỗi 4: dùng div thay vì dùng footer sẽ (sửa `<div class = footer>` thành `<footer>`)  
## Câu A3:

```html
<div>Hộp 1</div>
<span>Text A</span>
<span>Text B</span>
<div>Hộp 2</div>
<span>Text C</span>
<strong>Text D</strong>
<div>Hộp 3</div>
```

Hộp 1  
Text A Text B  
Hộp 2  
Text C Text D  
Hộp 3  
Giải thích: bởi vì thẻ ```<div>``` là thẻ block nên luôn chiếm hết dòng thẻ ```<span>``` và thẻ ```<strong> là thẻ inline nên sẽ nằm cùng một dòng

## Câu A4:

```<thead>```:  phần tiêu đề của bảng
```<tbody>```:  Dữ liệu chính của bảng
```<tfoot>```:  Chứa phần cuối của bảng(Thường dùng để tổng kết ví dụ như tính tổng hóa đơn)  
Không nên dùng table cho layout vì
1. Không senmatic -> SEO kém
2. Khó reponsive trên mobile
3. Code phức tạp, khó bảo trì
4. Hiệu năng kém hơn

