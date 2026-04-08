let likeCount = 0;
let curtido = false;

let deslikeCount = 0;
let descurtido = false;

function curtir() {
  if (curtido === false) {
    likeCount++;
    curtido = true;
  } else {
    likeCount--;
    curtido = false;
  }

  document.getElementById("likeCount").innerText = likeCount;
}

function descurtir() {
  if (descurtido === false) {
    deslikeCount++;
    descurtido = true;
  } else {
    deslikeCount--;
    descurtido = false;
  }

  document.getElementById("deslikeCount").innerText = deslikeCount;
}

document.getElementById("likeBtn").addEventListener("click", curtir);
document.getElementById("deslikeBtn").addEventListener("click", descurtir);