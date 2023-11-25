//Lấy giá trị mảng sản phẩm từ LocalStorage
const mangdaloc = JSON.parse(localStorage.getItem('filteredProducts'));
function ListSellingProductsss(filterthuonghieu = [], filtergiaban = [], filtercpu = [], filtervga = []) {
    let s ='';
    for (let i = 0; i < mangdaloc.length; i++) {
        const product = mangdaloc[i];
        var anh = product.img;
        var thuonghieu = product.thuonghieu;
        var name = product.name;
        var cpu = product.cpu;  
        var ram = product.ram;
        var ssd = product.ssd;
        var vga = product.vga;
        var lcd = product.lcd;
        var pricecompare = product.pricecompare;
        var pricehighlight = product.pricehighlight;
        var labelonsale = product.labelonsale;

        console.log('filter.thuonghieu.length');
        if (filterthuonghieu.length > 0) {
            if (filterthuonghieu.includes(thuonghieu) == false)
                continue;
        }

        if (filtergiaban.length > 0) {
            if (pricehighlight < 10000000 && !filtergiaban.includes('1')) continue;
            if (pricehighlight >= 10000000 && pricehighlight <= 15000000 && !filtergiaban.includes('2')) continue;
            if (pricehighlight > 15000000 && pricehighlight <= 25000000 && !filtergiaban.includes('3')) continue;
            if (pricehighlight > 25000000 && !filtergiaban.includes('4')) continue;
        }

        if (filtercpu.length > 0) {
           if(filtercpu.includes(cpu) == false)
             continue;
        }

        if (filtervga.length > 0) {
            if(filtervga.includes(vga) == false)
              continue;
         }
        if(filterthuonghieu.length > 0 || filtergiaban.length > 0 || filtercpu.length > 0 || filtergiaban.length > 0)
        textss = document.getElementById('filter-result');
        textss.innerHTML = "Laptop";
       
        s += `
            <div class="item-show-filter" id="item-show">
                <a href="#">
                    <img src="${anh}" width="100%"/>
                </a>
                <div class="detail">
                    <h3 class="name-product">
                        <a id="name" href="#" title="${name}" tabindex="0">${name}</a>
                    </h3>
                    <div class="technical">
                        <div class="cpu">
                            <span>${cpu}</span>
                        </div>
                        <div class ="vga">
                            <span>${vga}</span>
                        </div>
                        <div class="ram">
                            <span>${ram}</span>
                        </div>
                        <div class="ssd">
                            <span>${ssd}</span>
                        </div>
                        <div class="lcd">
                            <span>${lcd}</span>
                        </div>
                    </div>
                    <div class="price">
                        <div class="price--compare">
                            <del>${pricecompare}</del>
                        </div>
                        <div class="price--default">
                            <span class="pricehighlight">${pricehighlight}</span>
                            <span class="label--on-sale">${labelonsale}</span>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    document.getElementById("item-selling-products").innerHTML = s;
}

const urlParams = new URLSearchParams(window.location.search);
const filterTerm = urlParams.get('Filter');

function filteritem() {
    var arrthuonghieu = document.getElementsByClassName("thuonghieu");
    var filterthuonghieu = [];
    for (var i = 0; i < arrthuonghieu.length; i++) {
        if (arrthuonghieu[i].checked) filterthuonghieu.push(arrthuonghieu[i].value);
    }

    var arrgiaban = document.getElementsByClassName("gia");
    var filtergiaban = [];
    for(var i = 0; i< arrgiaban.length; i++){
        if(arrgiaban[i].checked) filtergiaban.push(arrgiaban[i].value);
    }


    var arrcpu = document.getElementsByClassName("cpu");
    var filtercpu = [];
    for(var i=0; i< arrcpu.length; i++){
        if(arrcpu[i].checked) filtercpu.push(arrcpu[i].value);
    }

    var arrvga = document.getElementsByClassName("vga");
    var filtervga = [];
    for(var i=0; i< arrvga.length; i++){
        if(arrvga[i].checked) filtervga.push(arrvga[i].value);
    }


    ListSellingProductsss(filterthuonghieu,filtergiaban, filtercpu, filtervga);  

    console.log(filterthuonghieu);
    console.log(filtergiaban);
}




//Mảng giá trị lọc
// Tạo một mảng để lưu trữ thông tin từ các phần tử
//Lấy giá trị mảng sản phẩm từ LocalStorage
/// Lấy dữ liệu từ local storage và chuyển đổi thành đối tượng JavaScript
 brandarray = JSON.parse(localStorage.getItem('brandarray'));
console.log(brandarray);
var listbrandfilter = `<ul id="listthuonghieu-checkbox" class="listcheckbox">`;
// Kiểm tra xem filtertest có tồn tại và có chứa ít nhất một phần tử không
for(var i=0; i< brandarray.length; i++) {
    // Tạo chuỗi HTML cho danh sách các thương hiệu
    console.log(brandarray[i]);
    listbrandfilter += `
        <li>
            <label id="label-item-search">
                <input type="checkbox" onchange="filteritem()" class="thuonghieu" value="${brandarray[i]}">${brandarray[i]}
            </label>
        </li>`;
        listbrandfilter += `</ul>`;

    // Gán chuỗi HTML vào một phần tử có id="listthuonghieu-checkbox"
    document.getElementById('listthuonghieu-checkbox').innerHTML = listbrandfilter;
}

