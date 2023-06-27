import styled from "styled-components";

export const BoxCalendar = styled.div`
  background-color: var(--gray200);
  width: 100%;
  max-width: 62rem;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  padding: 2.4rem;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Table = styled.table`
  border-collapse: collapse;
  display: block;
  margin-top: 2.4rem;
`;

export const Thead = styled.thead`
  display: block;
`;

const TrTable = styled.tr`
  display: flex;
  flex-wrap: nowrap;
`;

export const Tr = styled(TrTable)``;

export const Th = styled.th`
  flex: 1;
  text-align: center;
  font-family: var(--roboto);
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 160%;
  text-align: center;
  color: var(--gray400);
`;

export const Tbody = styled.tbody`
  display: block;
  margin-top: 1.2rem;
`;

export const TrDates = styled(TrTable)`
  margin-bottom: 0.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Td = styled.td`
  display: flex;
  justify-content: center;
  text-align: center;

  flex: 1;
  cursor: pointer;
`;

export const Number = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.6rem;
  height: 5.8rem;
  text-align: center;
  font-family: var(--roboto);
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 160%;
  color: var(--white);
`;
