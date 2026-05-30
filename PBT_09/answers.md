# PHẦN A — KIỂM TRA ĐỌC HIỂU (15 điểm)

## Câu A1 (5đ) — DOM Tree

### 1. Sơ đồ DOM Tree

```text
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
```

### Query Selector

```javascript
document.querySelector("h1");
document.querySelector("#todoForm input");
document.querySelectorAll(".todo-item");
document.querySelector("a.active");
document.querySelector("#todoList li:first-child");
document.querySelectorAll("nav a");
```

## Câu A2 (5đ) — innerHTML vs textContent

| innerHTML | textContent |
|------------|------------|
| Đọc/ghi HTML | Đọc/ghi văn bản |
| Render HTML | Không render HTML |
| Có nguy cơ XSS | An toàn hơn |

### Ví dụ innerHTML

```javascript
document.querySelector("#demo").innerHTML =
    "<b>Hello World</b>";
```

### Ví dụ textContent

```javascript
document.querySelector("#demo").textContent =
    "<b>Hello World</b>";
```

### XSS

Code nguy hiểm:

```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;
```

Sửa:

```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;
```

## Câu A3 (5đ) — Event Bubbling

### Không dùng stopPropagation()

```text
BUTTON
INNER
OUTER
```

### Có dùng stopPropagation()

```javascript
e.stopPropagation();
```

Output:

```text
BUTTON
```
