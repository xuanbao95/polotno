import React from "react";
//xử lý mõi khi ng dùng handle vào bất kì element nào sẽ chạy hàm đọc JSON

//xử lý đọc JSON
export const loadFileJSON = (file, store) => {
    //tạo object hứng lại file Reader
    let reader = new FileReader();
    // hàm xử lý khi chạy tới cuối sẽ cho kết quả thành công hay thất bại
    reader.onloadend = function () {
        let text = reader.result;
        let json;
        //gán dử liệu cho json 
        try {
            json = JSON.parse(text);
        } catch (er) {
            alert('Can not load the project.')
        };

        //xét json có dử liệu rồi gán nó vào dử liệu của polotno
        if (json) {
            store.loadJSON(json);
        }
    };
    //trả kết quả cuối cùng nếu có loi sẽ alert
    reader.onerror = function () {
        alert('Can not load Polotno project file.')
    };
    //đây là hàm viết sau cung nhưng lại chạy đầu tiên vì nó sẽ nhận file và store để các hàm trên chạy
    reader.readAsText(file)
};
//xử lý dataimg
export const loadImg = (file, store) => {
    //object mới hứng readfile
    let reader = new FileReader();
    reader.onloadend = function () {
        //img sẽ có đường dẫn
        let url = reader.result;
        let img = new Image();
        img.src = url;
        //img sẽ có các width và height khác nhau nên sẽ xét nó cùng vs store polotno
        img.onload = () => {
            const scale = Math.min(1,
                store.width / img.width,
                store.height / img.height
            );
            //active để hình polotno cung định dạng vs Image
            store.activePage.addElement({
                type: "image",
                width: img.width * scale,
                height: img.height * scale,
                src: url,
            })
        };
    };
    reader.onerror = function () {
        alert('Can not load image.')
    };
    reader.readAsDataURL(file)

};


export const loadFile=(file,store)=>{
    //xet nếu user bấm vào hình or file sẽ truyển vào hàm tương ứng
    if(file.type.indexOf('image')>=0){
        loadImg(file,store)
    }else{
        loadFileJSON(file,store)
    };
};