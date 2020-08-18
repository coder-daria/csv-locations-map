import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const StyledForm = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 5px #5f5c6d;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
  padding: 20px;
  width: 60%;
`;

export const FileInformation = styled.div`
  font-size: 1rem;
  padding-bottom: 20px;
`;

export const FormInfo = styled.span`
  align-self: center;
  font-size: 1.5rem;
  text-align: center;
  width: 60%;

  > span {
    font-size: 1rem;
  }
`;

export const RowPreviewContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 5px 20px 5px;
  width: 100%;
`;

export const RowItemPreview = styled.span`
  display: inline-block;
  text-align: center;
  width: 200px;
`;

export const ActionButtons = styled.div`
  align-self: flex-end;

  button:first-child {
    margin-right: 20px;

    &:hover {
      background-color: #be6b6bb5;
      color: #fff;
    }

    &:active {
      background-color: #be6b6be0;
      color: #fff;
    }
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  border: 2px solid #faf8ff;
  color: #5f5c6d;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.2rem;
  height: 40px;
  outline: none;
  width: 100px;

  &:hover {
    background-color: #55a66da3;
    color: #fff;
  }

  &:active {
    background-color: #55a66dcc;
    color: #fff;
  }
`;
