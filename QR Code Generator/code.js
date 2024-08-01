const box = document.querySelector(".box"),
Input = box.querySelector(".page input"),
generateBtn = box.querySelector(".page button"),
Img = box.querySelector(".qrcode img");
let Value;

generateBtn.addEventListener("click", () => {
 let qrValue = Input.value.trim();
 if(!qrValue || Value === qrValue) return;
 Value = qrValue;
 generateBtn.innerText = "Generate";
 Img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
 Img.addEventListener("load", () => {
 box.classList.add("active");
 generateBtn.innerText = "Generate...";
    });
});
Input.addEventListener("keyup", () => {
    if(!Input.value.trim()) {
      box.classList.remove("active");
        Value = "";}
});
