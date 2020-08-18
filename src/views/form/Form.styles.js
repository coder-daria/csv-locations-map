import styled from 'styled-components';
import { Container as Background } from '../../shared/styles';

export const Container = styled(Background)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledForm = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;
  padding: 20px;
`;

export const FileInformation = styled.div`
  font-size: 1rem;
  padding-bottom: 20px;
`;

export const FormInfo = styled.span`
  color: #fff;
  font-size: 1.5rem;
  display: inline-block;
  text-align: center;
`;

export const RowPreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RowPreview = styled.span`
  display: inline-block;
  width: 200px;
  text-align: center;
`;

export const ActionButtons = styled.div`
  align-self: flex-end;

  button {
    border-radius: 5px;
  }

  button:first-child {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  border: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.2rem;
  height: 40px;
  outline: none;
  width: 100px;

  &:hover {
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
  }

  &:active {
    background: transparent;
    border: 3px solid #fff;
    color: #fff;
  }

  &:disabled {
    background: #fff;
    color: black;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
