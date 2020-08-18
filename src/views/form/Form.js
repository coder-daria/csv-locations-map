import React from 'react';
import { func, string, number } from 'prop-types';

import SortableList from './sortable-list/SortableList';
import useFormDetails from './utils/use-form-details';

import { FORM_INFORMATION, BUTTON } from './constants';

import {
  ActionButtons,
  Button,
  Container,
  FileInformation,
  FormInfo,
  RowPreview,
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
        <FormInfo>{FORM_INFORMATION}</FormInfo>
        <SortableList
          axis={SORTABLE_AXIS}
          isSorting={isSorting}
          items={fields}
          onSortEnd={onSortEnd}
          onSortStart={onSortStart}
        />
        <div>
          <div>First row in uploaded file.</div>
          <RowPreviewContainer>
            {file.data[0].map((rowItem) => <RowPreview>{rowItem}</RowPreview>)}
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
  fileName: string.isRequired,
  rowsNum: number.isRequired,
  setColumnsOrder: func.isRequired,
  uploadFile: func.isRequired,
};

export default Form;
