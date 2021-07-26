import HTTP from "./fetch";

const version = "v3";
const getUrl = (v) => `https://www.klerk.ru/yindex.php/${v}/event/rubrics`;
const BASE_URL = getUrl(version);
const getData = (url, option) => HTTP(`${BASE_URL}${url}`, option);

const apiService = () => {
  return {
    async getRubrics(params) {
      return await getData(`${params}`);
    }
  };
};

export default new apiService();