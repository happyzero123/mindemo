import axios from 'axios';
function getJson() {
  let address = `https://raw.githubusercontent.com/happyzero123/demodata/master/bigdemo-card.json?${Math.random()}`;
  return axios.get(address)
    .then( (res) => (
      { getJson:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}
function getMd(add) {
  let address = `https://raw.githubusercontent.com/happyzero123/demodata/master/blog/${add}.md?${Math.random()}`;
  return axios.get(address)
    .then( (res) => (
      { getMd:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

export { getJson,getMd };
