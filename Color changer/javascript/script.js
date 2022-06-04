let div;
window.onload = function(){
    div = document.createElement('div');
    div.innerHTML = '<h1>Hello World</h1><input type="text" value="Hello World"/>';
    document.body.appendChild(div);

    div.style.position = "absolute";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";

    div.querySelector("input").addEventListener("input", function(e){
        let value = e.target.value;
        if(value.match(/^#[0-9a-f]{6}$/i)){
            document.body.style.backgroundColor = value;
        }
        else{
            document.body.style.backgroundColor = white;
        }
    });
}