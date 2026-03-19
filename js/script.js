let likeCount = 0;
let curtido = false; // flag booleana

function curtir() {
  if(curtido == false) {
    likeCount++;
    curtido = true;
    document.ElementById("likeCount").innerText = likeCount;
  }else{
    likeCount--;
    curtido = false;
    document.ElementById("likeCount").innerText = likeCount;
  }
} 

document.getElementById("likeBtn").addEventListener("click", curtir);
