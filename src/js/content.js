console.log("Content script running.");

setTimeout(() => {
  const startPostButton = document.getElementById("ember26");
  startPostButton.click();
  setTimeout(() => {
    const postArea = [...document.getElementsByClassName("ql-editor ql-blank")];
    const paragraph = postArea[0].querySelector("p");
    paragraph.click();

    paragraph.innerText = "Dummy post";

    // const postButton = document.getElementById("ember312");
    const postButton = [
      ...document.getElementsByClassName(
        "share-actions__primary-action artdeco-button artdeco-button--2 artdeco-button--primary ember-view"
      ),
    ];
    console.log(postButton);
    setTimeout(() => {
      postButton[0].click();
    }, 500);
  }, 5000);
}, 5000);
