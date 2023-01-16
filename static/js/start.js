function goResult(){

}

function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function (){
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++){
            children[i].disable = true;
            children[i].style.display = 'none';
        }
        arr[qIdx] = idx;
        goNext(++qIdx);
    }, false);
}

function goNext(qIdx){
    if (qIdx+1 === endPoint){
        goResult();
        return;
    }
    var q = document.querySelector('.qnaBox');
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar')
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

let qIdx = 0;
goNext(qIdx);


//     function save_answer(num){
//     $.ajax({
//         type: "POST",
//         url: "/api/answer",
//         data: {q_give:'q', a_give:[type['1'], type['2'], type['3']]}
//     });
// }