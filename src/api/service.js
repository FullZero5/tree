import HTTP from "./fetch";

const getUrl = () => `https://www.klerk.ru/yindex.php/v3/event/rubrics`;
const BASE_URL = getUrl();
const getData = (url, option) => HTTP(`${BASE_URL}${url}`, option);

const apiService = () => {
  return {
    async getRubrics(params) {
      return await getData(`${params}`);
    }
  };
};

export default new apiService();