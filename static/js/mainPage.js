let name;
const BASE_URL = "localhost:5000";

const init = () => {
  console.log(window.location);
};

const handleKeyUpUserName = () => {
  if (event.key !== "Enter") return;
  handleClickStartBtn();
};

const handleClickStartBtn = () => {
  const username = document.getElementById("username").value;
  name = username;
  postName(username);
};

const postName = (name_give) => {
  fetch(`http://${BASE_URL}/api/name`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name_give,
    }),
  })
    .then((res) => res.json())
    .then((data) => alert(data.msg))
    .then((v) => (window.location.href = "/qna"));
};
