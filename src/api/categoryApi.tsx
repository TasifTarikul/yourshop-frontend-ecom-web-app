import getHandler from "../apiMethonHandlers/getHandler";

const fetchCategory = () => {
  const url = "api/v1/product/web/category"
  const data = getHandler(url);
  return data
};

export { fetchCategory };
