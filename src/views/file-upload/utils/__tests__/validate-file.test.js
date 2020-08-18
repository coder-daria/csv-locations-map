import {
  FILE,
  FILE_WITH_TOO_MANY_ROWS,
  FILE_WITH_INCORRECT_COLUMNS_NUM,
  INCORRECT_FILE,
  FILE_WITH_EMPTY_FIELDS,
} from '../../../__mocks__/file.mock';

import { ERROR_MESSAGE } from '../../constants';

import { validateFile } from '..';

const { INCORRECT_ROW_ITEMS, INCORRECT_ROWS_NUM, EMPTY_FIELDS } = ERROR_MESSAGE;

describe('validateFile', () => {
  it('should return undefined if file is correct', () => {
    const error = validateFile(FILE);

    expect(error).toBeUndefined();
  });

  it('should return error if file is incorrect', () => {
    const error = validateFile(INCORRECT_FILE);

    expect(error).toBeDefined();
  });

  it('should display error message when file has empty fields', () => {
    const error = validateFile(FILE_WITH_EMPTY_FIELDS);

    expect(error).toBe(EMPTY_FIELDS);
  });

  it('should display error message when file has too many rows', () => {
    const error = validateFile(FILE_WITH_TOO_MANY_ROWS);

    expect(error).toBe(INCORRECT_ROWS_NUM);
  });

  it("should display error message when file has incorrect columns' number", () => {
    const error = validateFile(FILE_WITH_INCORRECT_COLUMNS_NUM);

    expect(error).toBe(INCORRECT_ROW_ITEMS);
  });
});
