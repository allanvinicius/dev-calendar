import { ItemList, List, Select, Text, TextData } from "./style";

export function DataSelecionada() {
  return (
    <Select>
      <List>
        <ItemList>
          <Text>Início:</Text>
          <TextData>08/06/2023</TextData>
        </ItemList>

        <ItemList>
          <Text>Fim:</Text>
          <TextData>08/06/2023</TextData>
        </ItemList>

        <ItemList>
          <Text>Prazo:</Text>
          <TextData>08/06/2023</TextData>
        </ItemList>
      </List>
    </Select>
  );
}
