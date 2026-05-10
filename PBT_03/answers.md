# PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

## Câu A1: 3 Cách nhúng CSS vào HTML

### 1. Inline CSS (CSS trực tiếp trong thẻ)
Phương pháp này sử dụng thuộc tính `style` ngay bên trong thẻ HTML.

* **Ví dụ:**
    ```html
    <h2 style="color: red; font-size: 24px;">Đây là tiêu đề màu đỏ</h2>
    ```
* **Ưu điểm:** * Có độ ưu tiên cao nhất.
    * Tiện lợi khi muốn thay đổi nhanh một phần tử duy nhất.
* **Nhược điểm:** * Làm code HTML trở nên cồng kềnh, khó đọc.
    * Khó bảo trì vì phải tìm từng thẻ để sửa.
    * Không thể tái sử dụng định dạng cho các phần tử khác.
* **Khi nào nên dùng:** Khi cần áp dụng style riêng biệt cho một phần tử duy nhất hoặc test nhanh giao diện.

### 2. Internal CSS (CSS nội bộ)
Sử dụng thẻ `<style>` đặt bên trong thẻ `<head>` của trang HTML.

* **Ví dụ:**
    ```html
    <head>
        <style>
            body { background-color: #f4f4f4; }
            p { color: blue; line-height: 1.6; }
        </style>
    </head>
    ```
* **Ưu điểm:** * Quản lý tập trung toàn bộ style của một trang web trong một file duy nhất.
    * Có thể sử dụng các bộ chọn (class, id) để định dạng nhiều phần tử cùng lúc.
* **Nhược điểm:** * Chỉ có tác dụng trên một file HTML duy nhất. 
    * Nếu website có nhiều trang, việc lặp lại code sẽ gây lãng phí và khó cập nhật.
* **Khi nào nên dùng:** Khi làm một trang web đơn lẻ (Landing Page) hoặc khi trang đó có những định dạng hoàn toàn khác biệt với phần còn lại của website.

### 3. External CSS (CSS bên ngoài)
Viết CSS trong một file riêng biệt (đuôi `.css`) và liên kết vào HTML bằng thẻ `<link>`.

* **Ví dụ:**
    * *File `style.css`:*
        ```css
        h1 { color: darkgreen; text-align: center; }
        ```
    * *File `index.html`:*
        ```html
        <head>
            <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        ```
* **Ưu điểm:** * Tách biệt hoàn toàn nội dung (HTML) và định dạng (CSS).
    * Một file CSS có thể dùng cho nhiều trang khác nhau, dễ bảo trì và nâng cấp.
    * Giúp trang web load nhanh hơn nhờ cơ chế bộ nhớ đệm (cache) của trình duyệt.
* **Nhược điểm:** Phải thực hiện thêm một yêu cầu gửi đến server để tải file CSS.
* **Khi nào nên dùng:** Đây là cách **phổ biến và tối ưu nhất** cho mọi dự án thực tế.

---

## Độ ưu tiên trong CSS

**Câu hỏi:** Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách nào "thắng"?

**Trả lời:** Cách **Inline CSS** sẽ "thắng" (có độ ưu tiên cao nhất).

**Giải thích:**
Trình duyệt quy định độ ưu tiên (Specificity) theo thứ tự giảm dần như sau:
1.  **Inline CSS** (Style trực tiếp trên thẻ) - Điểm ưu tiên cao nhất.
2.  **Internal CSS** và **External CSS** (Độ ưu tiên ngang nhau).
3.  **Mặc định của trình duyệt.**

*Lưu ý:* Nếu giữa **Internal** và **External** có xung đột, quy tắc nào được trình duyệt đọc **sau cùng** (nằm thấp hơn trong code HTML) sẽ được áp dụng. Tuy nhiên, cả hai đều sẽ bị **Inline CSS** ghi đè lên. Nếu muốn phá vỡ quy tắc này,  dùng từ khóa `!important`.  

## Câu A2: 
h1 → Chọn: Thẻ ```<h1>``` có nội dung "ShopTLU"  

.price → Chọn: 2 thẻ ```<p>``` có nội dung "25.990.000đ" và "45.990.000đ"  

#app header → Chọn: Toàn bộ khối thẻ``` <header>``` (bao gồm cả ```<h1>``` "ShopTLU" và thẻ ```<nav>``` chứa các menu Home, Products, About).  

nav a:first-child → Chọn: Thẻ ```<a>``` đầu tiên nằm trong ```<nav>```, có nội dung "Home"  

.product.featured h2 → Chọn: Thẻ ```<h2>``` nằm trong phần tử có đồng thời class product và featured, có nội dung "MacBook Pro"  

article > p → Chọn: Cả 4 thẻ ```<p>``` là con trực tiếp của thẻ ```<article>```, bao gồm: "25.990.000đ", "Mô tả sản phẩm..." (của iPhone) và "45.990.000đ", "Mô tả sản phẩm..." (của MacBook).  

a[href="/"] → Chọn: Thẻ ```<a>``` có chính xác thuộc tính href="/", nội dung "Home"  

.top-bar.dark h1 → Chọn: Thẻ ```<h1>``` nằm trong phần tử có đồng thời class top-bar và dark, có nội dung "ShopTLU"  

## Câu A3  
**Trường hợp 1: content-box (mặc định)**  
.box-1 {  
    width: 400px;  
    padding: 20px;  
    border: 5px solid black;  
    margin: 10px;  
}
1. Chiều rộng hiển thị = content + padding trái/phải + border trái/phải = 400 + 20*2 + 5*2
= 400 + 40 + 10
= 450px
2. Không gian chiếm trang = chiều rộng hiển thị + margin trái/phải = 450+10*2 = 470px

**Trường hợp 2: border-box**  
.box-2 {  
    box-sizing: border-box;  
    width: 400px;  
    padding: 20px;  
    border: 5px solid black;  
    margin: 10px;  
}
1. Chiều rộng hiển thị = 400px
2. Kích thước content = 400 - padding trái/phải - border trái/phải = 400 - 20*2 - 10*2 =  350px
3. Không gian chiếm trang = width + margin trái/phải = 400 + 10*2 = 420px

**Trường hợp 3: Margin collapse**
.box-a { margin-bottom: 25px; }  
.box-b { margin-top: 40px; }  
Khoảng cách box-a - box-b = 40px
Không phải 65px (25+40) bởi vì Browser sẽ lấy margin lớn hơn (Chúng collapse) thành một margin duy nhất  
Nhưng khi  
.box-a { margin-bottom: -10px; }  
.box-b { margin-top: 40px; }  
Khoảng cách giữa box-a với box-b là 30px bởi vì có margin âm  
## Câu 4:  
1. **Tính specificity score**
Specificity thường viết dạng: (a, b, c)  
Trong đó:  
a = số lượng ID  
b = số lượng class / pseudo-class / attribute  
c = số lượng tag  


Rule A  
p { color: black; }  
ID: 0  
class: 0  
tag p: 1  
Specificity:  
(0, 0, 1)  


Rule B  
.price { color: blue; }  
ID: 0  
class .price: 1  
tag: 0  
Specificity:  
(0, 1, 0)


Rule C  
#main-price { color: red; }  
ID: 1  
class: 0  
tag: 0  
Specificity:  
(1, 0, 0)


Rule D  
p.price { color: green; }  
ID: 0  
class .price: 1  
tag p: 1  
Specificity:  
(0, 1, 1)  

2. **Element sẽ có màu gì?**

| Rule | Score   |
| ---- | ------- |
| A    | (0,0,1) |
| B    | (0,1,0) |
| C    | (1,0,0) |
| D    | (0,1,1) |

CSS ưu  tiên: ID > class > tag  
Rule mạnh nhất là: #main-price { color: red; } vì (1,0,0)  
=> element có màu: **red**  

3. Nếu thêm ```<p class="price" id="main-price" style="color: orange;">```   
element sẽ có màu: **orange** vì inline style > ID selector

4. Nếu rule A thêm important    
element sẽ có màu: **black** vì !important > inline style thường > ID > class > tag
