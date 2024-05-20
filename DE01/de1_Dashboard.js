document.addEventListener("DOMContentLoaded", function () {
  // Bắt sự kiện submit của biểu mẫu
  document
    .getElementById("chartForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn chặn gửi biểu mẫu lại

      // Lấy giá trị năm nhập học từ biểu mẫu
      var startYear = parseInt(document.getElementById("startYear").value);

      // Mô phỏng dữ liệu số lượng sinh viên theo năm
      var data = {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: "Số lượng sinh viên",
            data: [100, 120, 150, 200, 180, 250],
            backgroundColor: function (context) {
              return context.dataIndex == startYear - 2019
                ? "rgba(54, 162, 235, 0.6)"
                : "rgba(255, 99, 132, 0.6)";
            },
            borderColor: function (context) {
              return context.dataIndex == startYear - 2019
                ? "rgba(54, 162, 235, 1)"
                : "rgba(255, 99, 132, 1)";
            },
            borderWidth: 1,
          },
        ],
      };

      // Lấy thẻ canvas để vẽ biểu đồ
      var ctx = document.getElementById("myChart").getContext("2d");

      // Tạo biểu đồ
      var myChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    });
});
