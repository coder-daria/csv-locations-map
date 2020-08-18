import React from 'react';
import { func, instanceOf, string, shape, arrayOf } from 'prop-types';

import SortableList from './sortable-list/SortableList';
import useFormDetails from './utils/use-form-details';

import { BUTTON } from './constants';

import {
  ActionButtons,
  Button,
  Container,
  FileInformation,
  FormInfo,
  RowItemPreview,
  RowPreviewContainer,
  StyledForm,
} from './Form.styles';

const { ACCEPT, CANCEL } = BUTTON;

const SORTABLE_AXIS = 'x';

function Form({ setColumnsOrder, file, uploadFile }) {
  const {
    cancelForm,
    fields,
    isSorting,
    onSortEnd,
    onSortStart,
    onSubmit,
  } = useFormDetails({ setColumnsOrder, uploadFile });

  return (
    <Container>
      <StyledForm>
        <FileInformation>
          <span>{`${file.name} - ${file.data.length} rows`}</span>
        </FileInformation>
        <FormInfo>
          To display locations correctly, <b>drag</b> and <b>drop</b> below
          fields to their columns header equivalents. <br />
          <span>Below you will find an example of a row in uploaded file.</span>
        </FormInfo>
        <SortableList
          axis={SORTABLE_AXIS}
          isSorting={isSorting}
          items={fields}
          onSortEnd={onSortEnd}
          onSortStart={onSortStart}
        />
        <div>
          <RowPreviewContainer>
            {file.data[0].map(rowItem => (
              <RowItemPreview key={rowItem}>{rowItem}</RowItemPreview>
            ))}
          </RowPreviewContainer>
        </div>
        <ActionButtons>
          <Button onClick={cancelForm}>{CANCEL}</Button>
          <Button onClick={onSubmit}>{ACCEPT}</Button>
        </ActionButtons>
      </StyledForm>
    </Container>
  );
}

Form.propTypes = {
  file: shape({
    data: arrayOf(arrayOf(string)),
    errors: instanceOf(Array),
    name: string,
  }).isRequired,
  setColumnsOrder: func.isRequired,
  uploadFile: func.isRequired,
};

export default Form;
