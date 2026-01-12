// Tổng hiệu tích thương; Đổi độ C qua F; Chẵn lẽ; If/else và toán tử so sánh


var tinhTong=document.getElementById("tinhtong");
var tinhHieu=document.getElementById("tinhhieu");
var tinhTich=document.getElementById("tinhtich");
var tinhThuong=document.getElementById("tinhthuong");
tinhTong.onclick=function(){
    var bienA= Number(document.getElementById("soA").value);
    var bienB= Number(document.getElementById("soB").value);
    console.log(bienA)
    let bienC= bienA+bienB;
    alert(bienC);
};
tinhHieu.onclick=function(){
    var bienA= Number(document.getElementById("soA").value);
    var bienB= Number(document.getElementById("soB").value);
    console.log(bienA)
    let bienC= bienA-bienB;
    alert(bienC);
};
tinhTich.onclick=function(){
    var bienA= Number(document.getElementById("soA").value);
    var bienB= Number(document.getElementById("soB").value);
    console.log(bienA)
    let bienC= bienA*bienB;
    alert(bienC);
};
tinhThuong.onclick=function(){
    var bienA= Number(document.getElementById("soA").value);
    var bienB= Number(document.getElementById("soB").value);
    console.log(bienA)
    let bienC= bienA/bienB;
    alert(bienC);
};
// ---------------------------------------------
var changeCtoF=document.getElementById("changeCtoFBtn");
changeCtoF.onclick= function(){
    var bien = Number(document.getElementById('changeCtoF').value);
    bien=bien*9/5+32;
    alert(bien)
}
//----------------------------------------------
var checkChanLe = document.getElementById('checkchanleBtn');
checkChanLe.onclick=function(){
    var bien = Number(document.getElementById('checkchanle').value);
    if (bien%2==0) alert("Chẵn");
    else alert("Lẻ");
}
//---------------------------------------------
var diemTB = document.getElementById('diemTB');
diemTB.onsubmit=function(e){
    e.preventDefault();
    var toan = Number(document.getElementById('toan').value);
    var ly = Number(document.getElementById('ly').value);
    var hoa = Number(document.getElementById('hoa').value);
    var trungBinh = (toan + ly + hoa)/3;
    alert(trungBinh);
}

// -------------------------------------------
var diemTB = document.getElementById('checkDiemTB-bai2');
diemTB.onclick=function(){
    var diem = Number(document.getElementById('checkDiemTB').value)
    if (diem>10 || diem <0) alert ('Nhập điểm trong khoảng 0-10');
    else if (diem>5) alert('Đậu');
    else alert ('Rớt');
}
// -------------------------------------------
var hocluc = document.getElementById('hocluc');
hocluc.onclick=function(){
    var diem = Number(document.getElementById('checkDiemTB').value)
    if (diem>10 || diem <0) alert ('Nhập điểm trong khoảng 0-10');
    else if (diem>9) alert('Xuất sắc');
    else if (diem>8) alert ('Giỏi');
    else if (diem>7) alert ('Khá');
    else if (diem>5) alert ('Trung bình - Tiên tiến');
    else alert ('Yếu');
}

// ------------------------------------------
var checkNamNhuan= document.getElementById('namnhuanBtn');
checkNamNhuan.onclick= function(){
    var nam = Number(document.getElementById('nam').value);
    if (nam%4==0) alert('Năm nhuận');
    else alert ('Không phải năm nhuận');
}
//------------------------------------------
var tongN = document.getElementById('tongNBtn');
tongN.onclick= function(){
    var N = Number(document.getElementById('tongN').value);
    var sum=0;
    for (var i = 0; i<=N; i++){
        sum= sum+i;
    }
    alert(sum)
}