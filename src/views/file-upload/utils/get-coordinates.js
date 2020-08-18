const randomizeCoordinates = () => [Math.random() * 51.40, Math.random() * 14.87];
const getCoordinates = data => data.map(() => randomizeCoordinates());

export default getCoordinates;
