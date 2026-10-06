window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "6fffd0eb41de4b00b67fc3f310d364f5",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-fookzy5k4-test11-7bd2.vercel.app/token.html",
      },
      "https://oauth-master-class-fookzy5k4-test11-7bd2.vercel.app",
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
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Something get wrong", error));
  };
};
