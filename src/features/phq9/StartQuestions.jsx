import { useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Button";

import Heading from "../../ui/Heading";
import Questionnaire from "./Questionnaire";

const StartWrapper = styled.div`
  text-align: center;
  margin-top: 10rem;
`;

const Details = styled.p`
  font-size: 1.6rem;
  color: var(--color-gray-500);
  font-weight: 400;
  margin-bottom: 2rem;
  line-height: 1.4;
`;

function StartQuestion() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <StartWrapper>
        <Heading as="h1">ยินดีต้อนรับสู่ PHQ-9 แบบประเมิน</Heading>
        <Details>กดปุ่มเพื่อเริ่มทำแบบสอบถามภาวะซึมเศร้า</Details>
        <Button onClick={() => setStarted(true)}>เริ่มทำแบบสอบถาม</Button>
      </StartWrapper>
    );
  }

  return <Questionnaire />;
}

export default StartQuestion;
