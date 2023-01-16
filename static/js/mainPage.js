// const BASE_URL = "54.199.172.111";
const BASE_URL = "http://localhost:5000";

const init = () => {
  console.log(window.location);
};

init();

const handleKeyUpUserName = () => {
  if (event.key !== "Enter") return;
  handleClickStartBtn();
};

const handleClickStartBtn = () => {
  const username = document.getElementById("username").value;
  postName(username);
};

const postName = (name_give) => {
  fetch(`${BASE_URL}/api/name`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name_give,
    }),
  })
    .then((res) => res.json())
    .then((data) => alert(data.msg));
  // $.ajax({
  //   type: "POST",
  //   url: "/api/answer",
  //   data: { name_give: "테스트2", answer_give: 1 },
  //   success: function (response) {
  //     alert(response["msg"]);
  //   },
  // });
  // $.ajax({
  //   type: "POST",
  //   url: `${BASE_URL}/api/name`,
  //   data: { name_give: "swing" },
  //   success: function (response) {
  //     alert(response["img_url"]);
  //   },
  // });
  // $.ajax({
  //   type: "POST",
  //   url: "/api/re_result",
  //   data: { name_give: "테스트2"},
  //   success: function (response) {
  //     alert(response["msg"]);
  //   },
  // });
};
