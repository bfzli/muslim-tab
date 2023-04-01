import { useState } from "react";

import {
  Container,
  Description,
  Title,
  Button,
  List,
  Item,
} from "./Components";

export default function Pro() {
  const [mode, setMode] = useState("");

  return (
    <Container>
      <Title>Go Pro</Title>
      <Description>
        Upgrade to our Pro plan and gain access to an extensive library of
        entrepreneur quotes and background images and start taking your
        entrepreneurial journey to new heights.
      </Description>

      <List>
        <Item>Access to 500 more quotes.</Item>
        <Item>Account to manage billings</Item>
        <Item>Access to 100 more backgroudns</Item>
      </List>

      <Button>Subscribe for $2.99 a month</Button>
      <span>cancel any time</span>
      <span>already subscrbed, login instead</span>
    </Container>
  );
}