function append()
{
    let data = JSON.parse(localStorage.getItem("products")) || [];
    let all_products = document.getElementById("all_products");

    data.forEach(function(elem,index)
    {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.image;
        let ty = document.createElement("ty");
        ty.innerText = elem.type;
        let des = document.createElement("des");
        des.innerText = elem.desc;
        let pr = document.createElement("pr");
        pr.innerText = elem.price;
let btn = document.createElement("button");
btn.innerText = "Remove";
btn.addEventListener("click",function (){
remove(index);
})

        div.append(img,ty,des,pr,btn);
        all_products.append(div);
    })
    let div = document.createElement("div");
}
append();


function remove(index)
{
    let data = JSON.parse(localStorage.getItem("products")) || [];
    // console.log(index);
    let newProd = data.filter(function (elem, i)

    {
        if( i == index)
        {
            let rem = JSON.parse(localStorage.getItem("rem")) || [];
            rem.push(elem);
            localStorage.setItem("rem", JSON.stringify(rem));
        }
        else{
            return i !== index;
        }

       
    });
    localStorage.setItem("products", JSON.stringify(newProd));
    append();
// console.log(newProd);
}