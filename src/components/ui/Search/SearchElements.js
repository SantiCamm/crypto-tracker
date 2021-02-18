import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;
`;

export const SearchForm = styled.form`
  border: none;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 50px;
  font-weight: 700;
  border-radius: 4px;
  border: none;
  background-image: linear-gradient(
    -225deg,
    #ac32ea 0%,
    #7918f2 48%,
    #4801ff 100%
  );

  ::placeholder,
  :focus {
    color: white;
    outline: none;
    text-align: center;
  }
`;
