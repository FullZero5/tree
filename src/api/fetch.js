export default function HTTP(url, options) {
    return fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => console.log("there was an error --> " + error));
  }
  