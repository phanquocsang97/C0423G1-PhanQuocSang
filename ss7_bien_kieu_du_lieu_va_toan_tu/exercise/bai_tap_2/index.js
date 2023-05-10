function abc() {
    let th1 = document.getElementById('value1').value;
    let th2 = document.getElementById('value2').value;
    let ketqua = document.getElementById('money').value;
    if  ( th1 =="VND" && th2 == "USD"){
        let ketqua1 = ketqua / 23000;
        document.write('Kết quả là ' + ketqua1)
     }else {
         let ketqua2 = ketqua * 23000;
         document.write('Kết quả là ' + ketqua2)
    }
}