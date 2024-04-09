export function displayDialog(text, onDisplayEnd){
    const dialogUi = document.getElementById("textbox-container");
    const dialog = document.getElementById("dialog");

    dialogUi.style.display = "block";

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(()=>{
        if(index < text.length){
            currentText += text[index];
            dialog.innerHTML = currentText;
            index++;
            return;
        }

        clearInterval(intervalRef)
    }, 5);

    const closeBtn = document.getElementById("close");

    function onCloseBtnCLick(){
        onDisplayEnd();
        dialogUi.style.display = "none";
        dialog.innerHTML = "";
        clearInterval(intervalRef);
        closeBtn.removeEventListener("click", onCloseBtnCLick);
        document.getElementById("game").focus();


    }

    closeBtn.addEventListener('click', onCloseBtnCLick);
}

export function setCamScale(k){
    const resizeFactor = k.width() / k.height();

    if(resizeFactor < 1){
        k.camScale(k.vec2(1));
        return;
    }

    k.camScale(k.vec2(1.5));
}