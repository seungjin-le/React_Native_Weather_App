import axios from 'axios';

const champions = () => {
  return axios
    .get('http://ddragon.leagueoflegends.com/cdn/13.19.1/data/ko_KR/champion.json', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.data.data)
    .catch((err) => console.log(err));
};

export default champions;
