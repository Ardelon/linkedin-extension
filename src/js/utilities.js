export function isTwitterPost(givenUrl) {
  const url = new URL(givenUrl);

  if (url.hostname !== "twitter.com") return false;
  const regex = /status\/\d+\/?$/;
  return regex.test(url.pathname);
}

export function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}
