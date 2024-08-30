import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introducão ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque
            consectetur accusamus cumque eos deleniti, consequuntur quidem at
            odit quas labore error aperiam quos est autem ratione sapiente,
            laboriosam nemo! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Necessitatibus aut quod iste blanditiis officia tenetur quia
            quos temporibus consectetur distinctio labore, maxime nobis tempore
            assumenda. Tenetur a vel laboriosam optio? Necessitatibus aut quod.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
