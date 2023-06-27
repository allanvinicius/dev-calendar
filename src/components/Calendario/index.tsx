import { ButtonCalendar } from "../ButtonCalendar";
import { Date } from "../Date";
import {
  BoxCalendar,
  Number,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Top,
  Tr,
  TrDates,
} from "./style";

export function Calendario() {
  return (
    <BoxCalendar>
      <Top>
        <Date />
        <ButtonCalendar />
      </Top>

      <Table>
        <Thead>
          <Tr>
            <Th>DOM.</Th>
            <Th>SEG.</Th>
            <Th>TER.</Th>
            <Th>QUA.</Th>
            <Th>QUI.</Th>
            <Th>SEX.</Th>
            <Th>SÁB.</Th>
          </Tr>
        </Thead>

        <Tbody>
          <TrDates>
            <Td>
              <Number>1</Number>
            </Td>

            <Td>
              <Number>2</Number>
            </Td>

            <Td>
              <Number>3</Number>
            </Td>

            <Td>
              <Number>4</Number>
            </Td>

            <Td>
              <Number>5</Number>
            </Td>

            <Td>
              <Number>6</Number>
            </Td>

            <Td>
              <Number>7</Number>
            </Td>
          </TrDates>

          <TrDates>
            <Td>
              <Number>8</Number>
            </Td>

            <Td>
              <Number>9</Number>
            </Td>

            <Td>
              <Number>10</Number>
            </Td>

            <Td>
              <Number>11</Number>
            </Td>

            <Td>
              <Number>12</Number>
            </Td>

            <Td>
              <Number>13</Number>
            </Td>

            <Td>
              <Number>14</Number>
            </Td>
          </TrDates>

          <TrDates>
            <Td>
              <Number>15</Number>
            </Td>

            <Td>
              <Number>16</Number>
            </Td>

            <Td>
              <Number>17</Number>
            </Td>

            <Td>
              <Number>18</Number>
            </Td>

            <Td>
              <Number>19</Number>
            </Td>

            <Td>
              <Number>20</Number>
            </Td>

            <Td>
              <Number>21</Number>
            </Td>
          </TrDates>

          <TrDates>
            <Td>
              <Number>22</Number>
            </Td>

            <Td>
              <Number>23</Number>
            </Td>

            <Td>
              <Number>24</Number>
            </Td>

            <Td>
              <Number>25</Number>
            </Td>

            <Td>
              <Number>26</Number>
            </Td>

            <Td>
              <Number>27</Number>
            </Td>

            <Td>
              <Number>28</Number>
            </Td>
          </TrDates>

          <TrDates>
            <Td>
              <Number>29</Number>
            </Td>

            <Td>
              <Number>30</Number>
            </Td>

            <Td>
              <Number>31</Number>
            </Td>

            <Td>
              <Number>1</Number>
            </Td>

            <Td>
              <Number>2</Number>
            </Td>

            <Td>
              <Number>3</Number>
            </Td>

            <Td>
              <Number>4</Number>
            </Td>
          </TrDates>
        </Tbody>
      </Table>
    </BoxCalendar>
  );
}
