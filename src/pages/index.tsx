import { Calendario } from "@/components/Calendario";
import { DataSelecionada } from "@/components/DataSelecionada";
import { Seo } from "@/components/Seo";
import { Container, SectionCalendar } from "./style";

export default function Home() {
  return (
    <>
      <Seo title="Dev Calendar" description="Estudo de componente" />

      <SectionCalendar>
        <Container>
          <Calendario />
          <DataSelecionada />
        </Container>
      </SectionCalendar>
    </>
  );
}
