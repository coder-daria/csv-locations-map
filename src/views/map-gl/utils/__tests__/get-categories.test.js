
import { FILE } from '../../../__mocks__/file.mock';

import getCategories from '../get-categories';

const CATEGORY_COLUMN_INDEX = 4;

describe('getCategories', () => {
  it('should return unique categories',  () => {
    const coordinates = getCategories(FILE, CATEGORY_COLUMN_INDEX);
    const categoriesNum = Object.keys(coordinates).length;

    expect(categoriesNum).toBe(2);
  });
});