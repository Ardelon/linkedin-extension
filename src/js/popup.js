import { createElement } from "ardelon-create-element";
import { generatePanel } from "./utilities";

const loadTitle = () => {
  const titleContainer = createElement({});
  const title = createElement({ innerText: "Twitter Title" });
  const isTwitter = createElement({
    id: "is-twitter",
    innerText: "not twitter",
    classList: ["not-twitter"],
  });

  titleContainer.append(title, isTwitter);
  return titleContainer;
};

const loadPanel = () => {
  const panelContainer = createElement({ id: "panel-container" });

  return panelContainer;
};

document.body.append(loadTitle(), loadPanel());
