let data = ["blue", "cyan", "teal"];
let eles=[]


function box(data){
    const that = this;

    this.counter = 0;
    this.ele=document.createElement("div");
    this.ele.innerHTML=this.name;
    this.ele.style.height = "100px";
    this.ele.style.width = "200px";
    this.ele.style.display = "flex";
    this.ele.style.fontSize= "18px";
    this.ele.style.borderRadius = "10px";
    this.ele.style.backgroundColor = data;
    this.ele.style.alignItems = "center";
    this.ele.style.justifyContent = "center";




    this.ele.addEventListener("click", function(){
        that.autoIncrement();
    })

    this.ele.innerHTML = this.counter;
    document.body.appendChild(this.ele);
}

box.prototype.autoIncrement = function(){
    this.counter = this.counter +1;
    this.ele.innerHTML = this.counter;
}

for (let i=0; i<data.length; i++){
    eles.push(new box(data[i]));

}

