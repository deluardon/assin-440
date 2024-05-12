document.querySelector("#submit-btn").addEventListener("click", function(){
    // console.log("clickMessage");
    const textFlied = document.getElementById("text-area");
    const textValue = textFlied.value;
    // console.log(textFlied.value);


    const p= document.createElement("p");
    p.innerText = textValue;
    // console.log(p);
    const container = document.getElementById("review");
    container.appendChild(p);
    textFlied.value = "";
})