const getResult = () => {
  const mbti = document.getElementById("mbti");
  const mbtiImg = document.getElementById("mbti_img");
  const mbtiDes = document.getElementById("mbti_des");

  fetch(`http://${BASE_URL}/api/result`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name_give: name,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      mbti.innerText = data.xxx;
      mbtiImg.src = data.xxx;
      mbtiDes.innerText = data.xxx;
    });
};

getResult();
