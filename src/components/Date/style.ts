import styled from "styled-components";

export const Data = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 160%;
`;

export const TextData = styled(Text)`
  color: var(--white);
  margin-right: 0.5rem;
`;

export const TextAno = styled(Text)`
  color: var(--gray400);
`;
