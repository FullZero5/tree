import HTTP from "./fetch";

const uuid = document.getElementById("app").dataset.uuid;
const culture = document.getElementById("app").dataset.culture;
const getUrl = () =>`https://ekatmaster.ru/api/project/${uuid}/${culture}`;
const BASE_URL = getUrl();
const getData = (url, option) => HTTP(`${BASE_URL}${url}`, option);

const apiService = () => {
  return {
    async getRubricator() {
      return await getData(`/rubricator`);
    },
    async getExhibitors(page = 1, data) {
      return await getData(`/exhibitors?page=${page}`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    },
    async getExhibitor(id) {
      return await getData(`/exhibitors/${id}`);
    }
  };
}

export default new apiService()