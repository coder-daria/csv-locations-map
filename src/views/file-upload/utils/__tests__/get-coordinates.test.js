import { getCoordinates } from '../';
import { DATA } from '../../../__mocks__/file.mock';

describe('getCoordinates', () => {
  it('should generate coordinates',  () => {
    const coordinates = getCoordinates(DATA);

    expect(coordinates).toHaveLength(3);
  });
});
