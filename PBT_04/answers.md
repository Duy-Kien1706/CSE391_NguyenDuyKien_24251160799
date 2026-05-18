# PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

## Câu A1 (10đ) — 5 Loại Positioning

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|---|---|---|---|---|
| static | Có | Theo flow mặc định của trang | Có | Layout thông thường |
| relative | Có | So với vị trí ban đầu của chính nó | Có | Dịch chuyển nhẹ phần tử mà vẫn giữ chỗ cũ |
| absolute | Không | So với nearest positioned ancestor | Có | Overlay, icon, badge, popup nhỏ |
| fixed | Không | So với viewport (màn hình trình duyệt) | Không | Menu cố định, nút back-to-top |
| sticky | Có | Theo container cha và viewport | Ban đầu có, tới ngưỡng thì dính lại | Thanh menu dính khi cuộn |

---





`absolute` sẽ tham chiếu `body` (hoặc viewport) khi KHÔNG có ancestor nào có:

nearest positioned ancestor = phần tử tổ tiên gần nhất có position khác static.

nearest positioned ancestor = phần tử tổ tiên gần nhất có `position` khác `static`.


## Câu A2  
# Câu A2 — Flexbox vs Grid

## Trường hợp 1

```css
.container { display: flex; }
.item { flex: 1; }
```

- Có 4 item.
- `flex: 1` → các item chia đều chiều ngang container.

### Bố cục:

![Th1](./screenshots/TH1_A2.png)

→ 1 hàng, 4 cột bằng nhau.

---

## Trường hợp 2

```css
.container {
    display: flex;
    flex-wrap: wrap;
}

.item {
    width: 45%;
    margin: 2.5%;
}
```

- Mỗi item chiếm:
  - width = 45%
  - margin trái + phải = 5%
- Tổng = 50%

→ Mỗi hàng chứa được 2 item.

Có 6 item nên:

- 3 hàng
- 2 cột

### Bố cục:

![Th2](./screenshots/TH2_A2.png)

---

## Trường hợp 3

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

- `justify-content: space-between`
  → item đầu sát trái, item cuối sát phải, item giữa nằm giữa.
- `align-items: center`
  → các item căn giữa theo chiều dọc.

Có 3 item:

### Bố cục:

![Th3](./screenshots/TH3_A2.png)

→ 1 hàng ngang, khoảng cách đều nhau.

---

## Trường hợp 4

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    gap: 20px;
}
```

- Grid có 3 cột:
  - Cột 1 = 200px
  - Cột 2 = chiếm phần còn lại (`1fr`)
  - Cột 3 = 200px
- `gap: 20px` → khoảng cách giữa các cột.

Có 3 item nên mỗi item nằm trên 1 cột.

### Bố cục:

![Th4](./screenshots/TH4_A2.png)

→ 1 hàng, 3 cột.

---

## Trường hợp 5

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
```

- `repeat(3, 1fr)` → tạo 3 cột bằng nhau.
- Có 7 item.

Cách sắp xếp:

- Hàng 1: item 1 2 3
- Hàng 2: item 4 5 6
- Hàng 3: item 7

### Bố cục:

![Th5](./screenshots/TH5_A2.png)

→ Tổng cộng:
- 3 hàng
- 3 cột
- Item 7 nằm ở hàng cuối, cột đầu tiên.
