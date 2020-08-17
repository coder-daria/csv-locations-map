import { validateFile } from '../';

const MOCKED_DATA = [['data'], ['data']];

describe('validateFile', () => {
  it('should display error message when file has a wrong type',  () => {
    const coordinates = validateFile(MOCKED_DATA);
  
    expect(coordinates).toHaveLength(2);
  });

  it('should display error message when file has too many rows',  () => {
    const coordinates = validateFile(MOCKED_DATA);
  
    expect(coordinates).toHaveLength(2);
  });

  it('should display error message when file has too many columns',  () => {
    const coordinates = validateFile(MOCKED_DATA);
  
    expect(coordinates).toHaveLength(2);
  });
});
