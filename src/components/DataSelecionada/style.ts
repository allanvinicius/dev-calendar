import styled from "styled-components";

export const Select = styled.div`
  background-color: var(--gray200);
  width: 100%;
  max-width: 62rem;
  border: 1px solid var(--gray300);
  border-radius: 8px;
  margin-top: 1rem;
  padding: 2.6rem 4.2rem 2.6rem 2.8rem;
`;

export const List = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ItemList = styled.li``;

export const Text = styled.span`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 140%;
  color: var(--white);
`;

export const TextData = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray300);
  border-radius: 6px;
  padding: 0.8rem 2.6rem;
  margin-top: 0.8rem;

  font-weight: 400;
  font-size: 1.8rem;
  line-height: 140%;
  color: var(--white);
`;
