import styled from 'styled-components';

const StyledUL = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`;

export default StyledUL;
