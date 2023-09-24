import { GetDetails } from './MemberOrder.js'
import { DisplayData } from './CRUD.js'
let CurrentPage = 1
DisplayData(CurrentPage, "../php/Order/DisplayOrderEmployee.php")
$(document).on('click', '.card-footer span', function () {
    CurrentPage = parseInt($(this).text())
    DisplayData(CurrentPage, "../php/Order/DisplayOrderEmployee.php")
})
$(document).on("click", "#detail", function () {
    let OrderID = $(this).parent().parent().attr("data-id")
    GetDetails(OrderID)
    $("#myModal").modal("toggle")
})
let ExportExcel = (data, columnnames, filename, filepath) => {
    const workbook = XLSX.utils.book_new()
    const worksheetdata = [columnnames, ...data]
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetdata)
    XLSX.utils.book_append_sheet(workbook, worksheet, filename)
    XLSX.writeFile(workbook, filepath)
}
$(document).on("click", ".excel-export", function () {
    $.ajax({
        url: "../php/Order/FetchOrder.php",
        method: "get",
        success: function (data) {
            let Obj = JSON.parse(data)
            ExportExcel(Obj.Row, Obj.Header, "Report", "XuatHoaDon.xlsx")
        }
    })
})
$(document).on("click", "#export-details", function () {
    let ID = $(this).parent().parent().find("table").find("tbody").children().eq(0).children().eq(0).text()
    $.ajax({
        url: "../php/Order/FetchOrderDetail.php",
        method: "post",
        data: { OrderID: ID },
        success: function (data) {
            let Obj = JSON.parse(data)
            ExportExcel(Obj.Row, Obj.Header, "OrderDetails", "ChiTietHoaDon.xlsx")
        }
    })
})
$(document).on("change", "#state", function () {
    $.ajax({
        url: "../php/Order/ChangeStatus.php",
        data: { State: $(this).val(), ID: $(this).parent().parent().attr("data-id") },
        method: "post",
        success: function (data) {
            if (data != '') {
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    html: "<h4>Đã cập nhật trạng thái!</h4>",
                })
            }
        }
    })
})
$(document).on("click", "#deletebutton", function () {
    let StartDate = $(this).parent().parent().children().eq(6).text().split("-")
    let EndDate = $(this).parent().parent().children().eq(8).text().split("-")
    if (EndDate.lenth > 0 && new Date(EndDate[2] + "-" + EndDate[1] + "-" + EndDate[0]) > new Date()) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            html: "<h4>Hóa đơn vẫn chưa thanh toán!</h4>",
        })
        return
    }
    if (new Date(StartDate[2] + "-" + StartDate[1] + "-" + StartDate[0]) > new Date()) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            html: "<h4>Hóa đơn vẫn chưa thanh toán!</h4>",
        })
        return
    }
    let OrderID = $(this).parent().parent().attr("data-id")
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: "Cảnh báo",
        html: "<h4>Bạn có muốn xóa hóa đơn này không?</h4>",
        showCancelButton: true,
        cancelButtonText: "Hủy",
        confirmButtonText: "Đồng ý"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "../php/Order/CancelOrder.php",
                method: "post",
                data: { OrderID: OrderID },
                success: function (data) {
                    if (data != '') {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            html: "<h4>Đơn hàng đã được xóa thành công</h4>",
                            showCancelButton: true
                        })
                        DisplayData(CurrentPage, "../php/Order/DisplayOrderEmployee.php")
                    }
                }
            })
        }
    })
})