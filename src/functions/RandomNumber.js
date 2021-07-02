import { usersData } from '../data/data';

const RandomNumber = () => {
  return (
    Math.floor(Math.random() * usersData.length)
  )
};

export default RandomNumber;