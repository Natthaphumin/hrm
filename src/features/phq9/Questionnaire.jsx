import { useState } from "react";

import option from "./options";
import question from "./question";

import Button from "../../ui/Button";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";

// Styled Components
const FormWrapper = styled.form`
  padding: 2rem;
  background: var(--color-gray-50); /* ใช้ตัวแปรสีพื้นหลัง */
  box-shadow: var(--shadow-sm);
  font-size: var(--font-size-md);
`;

const QuestionBlock = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  transition: background-color 0.3s ease;
`;

const QuestionText = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.4rem;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

const OptionsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  input[type="radio"] {
    margin-right: 0.5rem;
    width: 18px;
    height: 18px;
    accent-color: var(--color-yellow-700); /* ใช้ตัวแปรธีม */
    cursor: pointer;
    transition: accent-color 0.3s ease;
  }
`;

const OptionText = styled.span`
  font-size: var(--font-size-md);
  color: var(--color-gray-600);
  user-select: none;
  transition: color 0.3s ease;
`;

function Questionnaire({ onSubmit }) {
  // เก็บคำตอบเป็น object { questionId: value }
  const [answers, setAnswers] = useState({});

  function getResult(score) {
    if (score <= 4) {
      return {
        level: "ปกติ",
        description: "ไม่มีอาการหรือมีอาการเล็กน้อยมาก",
        severity: "normal",
      };
    } else if (score <= 9) {
      return {
        level: "ภาวะซึมเศร้าเล็กน้อย",
        description: "อาจมีอาการซึมเศร้าเล็กน้อย ควรสังเกตอาการ",
        severity: "mild",
      };
    } else if (score <= 14) {
      return {
        level: "ภาวะซึมเศร้าปานกลาง",
        description: "ควรพิจารณาปรึกษาผู้เชี่ยวชาญหรือติดตามอาการ",
        severity: "moderate",
      };
    } else if (score <= 19) {
      return {
        level: "ภาวะซึมเศร้าค่อนข้างรุนแรง",
        description: "ควรพบผู้เชี่ยวชาญด้านสุขภาพจิต",
        severity: "moderately severe",
      };
    } else {
      return {
        level: "ภาวะซึมเศร้ารุนแรง",
        description: "แนะนำให้พบจิตแพทย์ทันที",
        severity: "severe",
      };
    }
  }

  function handleChange(questionId, value) {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: Number(value),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    //   คำนวณคะแนนรวม;
    const totalScore = Object.values(answers).reduce(
      (sum, val) => sum + val,
      0
    );
    console.log(totalScore);
    const result = getResult(totalScore);

    onSubmit && onSubmit({ answers, totalScore, result });
    console.log(result);
  }

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        {question.map((q) => (
          <QuestionBlock key={q.id}>
            <QuestionText>{q.text}</QuestionText>
            <OptionsWrapper>
              {option.map((opt) => (
                <OptionLabel key={opt.value}>
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={opt.value}
                    checked={answers[q.id] === opt.value}
                    onChange={() => handleChange(q.id, opt.value)}
                    required
                  />
                  <OptionText>{opt.label}</OptionText>
                </OptionLabel>
              ))}
            </OptionsWrapper>
          </QuestionBlock>
        ))}

        <FormRow>
          <Button type="reset" variation="secondary">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </FormRow>

        <span>
          <strong>
            หมายเหตุ <br />
          </strong>
          <span>
            แบบประเมินนี้พัฒนาจาก แบบสอบถามสุขภาพผู้ป่วย (Patient Health
            Questionnaire: PHQ-9) ศ. นพ.มาโนช หล่อตระกูล และคณะ
            คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี
            การประเมินนี้เป็นการประเมินระดับภาวะซึมเศร้าในขั้นต้น
            ส่วนการวินิจฉัยนั้นจำเป็นต้องพบแพทย์เพื่อซักประวัติ ตรวจร่างกาย
            รวมถึงส่งตรวจเพิ่มเติมที่จำเป็น เพื่อยืนยันการวินิจฉัยที่แน่นอน
            รวมถึงเพื่อแยกโรคหรือภาวะอื่น ๆ
            เนื่องจากภาวะซึมเศร้าเป็นจากสาเหตุต่าง ๆ ได้มากมาย เช่น
            โรคทางจิตเวชอื่นที่มีอาการซึมเศร้าร่วมด้วย
            โรคทางร่างกายเช่นโรคไทรอยด์ โรคแพ้ภูมิตัวเอง
            หรือเป็นจากยาหรือสารต่าง ๆ
            ผลการประเมินและคำแนะนำที่ได้รับจากโปรแกรมนี้จึงไม่สามารถใช้แทนการตัดสินใจของแพทย์ได้
            การตรวจรักษาเพิ่มเติมหรือการให้ยารักษาขึ้นอยู่กับดุลยพินิจของแพทย์และการปรึกษากันระหว่างแพทย์และตัวท่าน
          </span>
        </span>
      </FormWrapper>
    </>
  );
}

export default Questionnaire;
