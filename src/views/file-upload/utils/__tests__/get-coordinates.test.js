import { getCoordinates } from '../';

const MOCKED_DATA = [['data'], ['data']];

describe('getCoordinates', () => {
  it('should generate coordinates',  () => {
    const coordinates = getCoordinates(MOCKED_DATA);
  
    expect(coordinates).toHaveLength(2);
  });
});
