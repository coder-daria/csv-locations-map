const randomizeCoordinates = () => [Math.random() * 51, Math.random() * 14];
const getCoordinates = data => data.map(() => randomizeCoordinates());

export default getCoordinates;
