import { createElement } from "ardelon-create-element";

const loadTitle = () => {
  const titleContainer = createElement({});
  const title = createElement({ innerText: "Linkedin" });

  titleContainer.append(title);
  return titleContainer;
};

const loadPanel = () => {
  const panelContainer = createElement({ id: "panel-container" });

  return panelContainer;
};

document.body.append(loadTitle(), loadPanel());
