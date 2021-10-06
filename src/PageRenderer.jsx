import React from "react";
import { useRouteMatch } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { capitalizeFirstLetter } from "./utils/string.helper";

const generatePage = (page) => {
  page = capitalizeFirstLetter(page);
  const component = () => require(`./pages/${page}`).default;

  try {
    return React.createElement(component());
  } catch (error) {
    console.warn(error);
    return React.createElement(PageNotFound);
  }
};

const PageRenderer = () => {
  const {
    params: { page },
  } = useRouteMatch();

  return generatePage(page);
};

export default PageRenderer;
