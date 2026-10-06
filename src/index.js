async function fetchYandexData(accessToken) { const response = await fetch("https://login.yandex.ru/info?format=json", { headers: { Authorization: `OAuth ${accessToken}`, }, });
return await response.json(); }

window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "6fffd0eb41de4b00b67fc3f310d364f5",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-src.vercel.app/token.html",
      },
      "https://oauth-master-class-src.vercel.app",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "0",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then(async (data) => {
        console.log("TOKEN RECEIVED", data);
        const result = await fetchYandexData(data.access_token);
        document.getElementById("logs").textContent = "бум бам вы авторизованы!";
        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
  };
};
