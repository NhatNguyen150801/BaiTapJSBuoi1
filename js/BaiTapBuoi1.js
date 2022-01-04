console.log("BÀI TẬP 3");
/***
 * Khối 1: nhapUSD, giaMotUSD
 * 
 * Khối 2: 
 * B1:tạo biến và gán giá trị
 * B2:thanhTien = nhapUSD * giaMotUSD;
 * 
 * Khối 3: thanhTienVND
 */

var nhapUSD = 2;
console.log("Số tiền quy đổi: " + nhapUSD.toLocaleString() + " USD");
var giaMotUSD = 23.500;
var thanhTienVND = 0;

    thanhTienVND = nhapUSD * giaMotUSD;
console.log("Thành tiền VND: " + thanhTienVND.toFixed(3) + "VNĐ");

console.log("BÀI TẬP 4");

/***
 * Khối 1: chieuDai, chieuRong
 * Khối 2: 
 * B1:tạo biến và gán giá trị
 * B2:thực hiện phép toán
 * dienTich = chieuDai * chieuRong;
 * chuVi = (chieuDai + chieuRong) * 2;
 * B3: dienTich, chuVi
 */
 var chieuDai = 5;
 console.log("Chiều dài: " + chieuDai);
 var chieuRong = 6;
 var dienTich = 0;
 var chuVi = 0;
 console.log("Chiều Rộng: " + chieuRong);
  dienTich = chieuDai * chieuRong;
  chuVi = (chieuDai + chieuRong) * 2;
console.log("Diện tích hình chữ nhật là: " + dienTich);
console.log("Chu vi hình chữ nhật là: " + chuVi);



console.log("BÀI TẬP 5");


/***
 * Khối 1:so, so_hang_dv, so_hang_chuc, sum
 * 
 * Khối 2: thực hiện tính toán
 * B1: tạo biến và gán giá trị
 * B2:lấy số hàng đơn vị: int so_hang_dv = so % 10;
 *    lấy số hàng chục: int so_hang_chuc = so / 10;
 *    var sum = so_hang_chuc + so_hang_dv;
 * 
 * Khối 3: sum
 */

var so = 44;
var so_hang_dv = 0;
var so_hang_chuc = 0;
var sum = 0;
 so_hang_dv = so % 10;

console.log("Số hàng đơn vị: " + so_hang_dv);
 so_hang_chuc = Math.floor(so / 10);

console.log("Số hàng chục: " + so_hang_chuc);
 sum = so_hang_chuc + so_hang_dv;
console.log("Kết quả 2 số cộng lại là: " + sum);
