// const BASE_URL = "54.199.172.111";
const BASE_URL = "http://localhost:5000";

const init = () => {
  console.log(window.location);
};
init();

const getResult = (name_give) => {
  fetch(`${BASE_URL}/api/result`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name_give: "swing",
    }),
  })
    .then((res) => res.json())
    .then((data) => alert(data.msg));
};

getResult();
