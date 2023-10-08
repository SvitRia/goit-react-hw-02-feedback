import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid color: ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.radius.sm};
  padding: ${p => p.theme.spacing(1)};
  backgraund-color: ${p => p.theme.colors.btn_color}
`;