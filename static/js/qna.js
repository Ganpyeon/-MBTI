function save_answer(answer_give) {
  $.ajax({
    type: "POST",
    url: `http://${BASE_URL}/api/answer`,
    data: { name_give: name, answer_give },
  });
}

function goResult() {
  setTimeout(() => {
    window.location.href = "/result";
  }, 1500);
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.id = Number(idx) + 1;
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    () => {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disable = true;
        children[i].style.display = "none";
      }
      arr[qIdx] = idx;
      save_answer(Number(idx) + 1);
      goNext(++qIdx);
    },
    false
  );
}

function goNext(qIdx) {
  var q = document.querySelector(".qnaBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIdx + 1) + "%";

  if (qIdx + 1 === endPoint) {
    goResult();
    return;
  }
}

let qIdx = 0;
goNext(qIdx);
