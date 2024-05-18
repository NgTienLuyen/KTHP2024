// Lấy phần tử div chứa form đặt hàng
const orderFormContainer = document.getElementById("orderFormContainer");

// Lấy phần tử nút đặt hàng
const orderButtons = document.querySelectorAll(".order-button");

// Lặp qua từng nút đặt hàng và thêm sự kiện click
orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Hiển thị form đặt hàng
    orderFormContainer.style.display = "block";
  });
});

// Hàm xử lý sự kiện khi người dùng gửi form
function submitForm() {
  // Lấy thông tin người dùng nhập vào form
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;

  // Hiển thị thông báo hoặc xử lý thông tin nhập vào tùy theo logic của bạn
  alert(`Đã nhận thông tin đặt hàng:\nHọ và tên: ${fullName}\nEmail: ${email}`);

  // Reset form sau khi gửi
  document.getElementById("orderForm").reset();

  // Ẩn form đặt hàng sau khi gửi
  orderFormContainer.style.display = "none";
}

// Hàm xử lý sự kiện khi người dùng nhấn nút "Đăng nhập"
function showLoginForm() {
  const loginForm = document.getElementById("loginForm");
  loginForm.style.display =
    loginForm.style.display === "block" ? "none" : "block";
}

// Hàm xử lý sự kiện khi người dùng nhấn nút "Thêm vào giỏ hàng"
function addToCart() {
  // Viết code để thêm sản phẩm vào giỏ hàng ở đây
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
}

// Số lượng sản phẩm trong giỏ hàng
let cartCount = 0;

// Hàm để cập nhật số lượng sản phẩm trong giỏ hàng và hiển thị nó trên header
function updateCartCount() {
  const cartButton = document.getElementById("cartButton");
  cartButton.textContent = `Giỏ hàng (${cartCount})`;
}

// Khởi tạo một biến global để lưu trữ danh sách sản phẩm trong giỏ hàng
let cartItems = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productElement) {
  const productName = productElement.querySelector("h2").textContent;
  const productPrice = productElement.querySelector("p").textContent;
  const productImage = productElement.querySelector("img").src;

  // Thêm sản phẩm vào danh sách giỏ hàng
  cartItems.push({
    name: productName,
    price: productPrice,
    image: productImage,
  });

  // Cập nhật số lượng sản phẩm trong giỏ hàng trên nút "Giỏ hàng" trên header
  const cartButton = document.getElementById("cartButton");
  cartButton.innerText = `Giỏ hàng (${cartItems.length})`;
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
}

// Hàm hiển thị modal giỏ hàng
function showCartModal() {
  const modal = document.getElementById("cartModal");
  modal.style.display = "block";

  const cartItemList = document.getElementById("cartItemList");
  cartItemList.innerHTML = "";

  cartItems.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td><img src="${item.image}" class="product-image"></td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>
        <button class="action-button delete-button" onclick="removeFromCart(${index})">Xóa</button>
        <button class="action-button buy-button" onclick="buyItem(${index})">Mua hàng</button>
      </td>
    `;
    cartItemList.appendChild(row);
  });
}

// Hàm đóng modal giỏ hàng
function closeCartModal() {
  // Lấy phần tử modal
  const modal = document.getElementById("cartModal");
  // Đóng modal
  modal.style.display = "none";
}
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartCount();
  showCartModal();
}

function buyItem(index) {
  closeCartModal();
  showOrderForm();
}

function showOrderForm() {
  document.getElementById("orderFormContainer").style.display = "block";
}
/// XỬ LÝ THÔNG TIN ĐẶT HÀNHG

function openOrderForm(productName, productPrice) {
  var orderModal = document.getElementById("orderModal");
  var orderDetails = document.getElementById("orderDetails");
  orderDetails.innerHTML = `
      <p><strong>Sản phẩm:</strong> ${productName}</p>
      <p><strong>Giá:</strong> ${productPrice}</p>
  `;
  orderModal.style.display = "block";
}

function closeOrderForm() {
  document.getElementById("orderModal").style.display = "none";
}

function submitForm(event) {
  event.preventDefault();

  var fullName = document.getElementById("fullName").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  console.log("Họ và tên:", fullName);
  console.log("Địa chỉ:", address);
  console.log("SDT:", phone);
  console.log("Email:", email);

  alert("Bạn đã đặt hàng thành công !!!");
  document.getElementById("orderModal").style.display = "none";
}

////////////
// Lấy dropdown list
var dropdown = document.getElementById("productType");

// Lấy phần hiển thị danh sách sản phẩm
var productList = document.getElementById("productList");

// Mảng chứa các sản phẩm tương ứng với từng loại
var products = {
  giay1: {
    name: "Giày Sneaker",
    price: "12.000.000 VND",
    image: "./image/giay1.jpg",
  },
  giay2: {
    name: "Adidas",
    price: "30.000.000 VND",
    image: "./image/giay2.jpg",
  },
  giay3: {
    name: "Chuck Taylor All Star Cruise",
    price: "30.000.000 VND",
    image: "./image/giay3.jpg",
  },
  giay4: {
    name: "Run Star Legacy CX",
    price: "30.000.000 VND",
    image: "./image/giay4.jpg",
  },
  giay5: {
    name: "Chuck 70 Plus",
    price: "30.000.000 VND",
    image: "./image/giay5.jpg",
  },
  // Thêm các sản phẩm khác tương ứng với loại sản phẩm
};

// Xử lý sự kiện khi người dùng chọn loại sản phẩm
dropdown.addEventListener("change", function () {
  var selectedProductType = dropdown.value; // Lấy giá trị được chọn từ dropdown list
  var selectedProduct = products[selectedProductType]; // Lấy thông tin sản phẩm tương ứng từ mảng products

  // Hiển thị thông tin sản phẩm tương ứng
  productList.innerHTML = `
      <section class="product">
          <img src="${selectedProduct.image}" alt="${selectedProduct.name}" />
          <h2>${selectedProduct.name}</h2>
          <p>${selectedProduct.price}</p>
          <button onclick="addToCart(this.parentElement)">
              Thêm vào giỏ hàng
          </button>
          <button onclick="placeOrder()">Đặt hàng</button>
      </section>
  `;
});
dropdown.addEventListener("change", function () {
  var selectedProductType = dropdown.value; // Lấy giá trị được chọn từ dropdown list

  // Xóa nội dung cũ của danh sách sản phẩm
  productList.innerHTML = "";

  // Hiển thị tất cả các sản phẩm hoặc sản phẩm của loại được chọn
  if (selectedProductType === "all") {
    for (var key in products) {
      if (products.hasOwnProperty(key)) {
        var product = products[key];
        productList.innerHTML += `
            <section class="product">
                <img src="${product.image}" alt="${product.name}" />
                <h2>${product.name}</h2>
                <p>${product.price}</p>
                <button onclick="addToCart(this.parentElement)">
                    Thêm vào giỏ hàng
                </button>
                <button onclick="placeOrder()">Đặt hàng</button>
            </section>
        `;
      }
    }
  } else {
    // Hiển thị sản phẩm của loại được chọn
    var selectedProduct = products[selectedProductType]; // Lấy thông tin sản phẩm tương ứng từ mảng products
    productList.innerHTML = `
        <section class="product">
            <img src="${selectedProduct.image}" alt="${selectedProduct.name}" />
            <h2>${selectedProduct.name}</h2>
            <p>${selectedProduct.price}</p>
            <button onclick="addToCart(this.parentElement)">
                Thêm vào giỏ hàng
            </button>
            <button onclick="placeOrder()">Đặt hàng</button>
        </section>
    `;
  }
});
