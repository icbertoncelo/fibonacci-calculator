import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  label {
    margin-right: 10px;

    color: #37474f;
  }

  input {
    padding: 10px 5px;
    border-radius: 4px 0 0 4px;
    border: 1px solid #00838f;
    font-size: 1.6rem;
    margin: 0;
    color: #00838f;

    &::placeholder {
      color: #37474f;
    }
  }

  button {
    padding: 10px 5px;
    border: 1px solid #00838f;
    border-radius: 0 4px 4px 0;

    font-size: 1.6rem;
    background: #00838f;
    color: white;
  }
`;

export const Legend = styled.h3`
  margin-bottom: 20px;

  color: #37474f;
`;
