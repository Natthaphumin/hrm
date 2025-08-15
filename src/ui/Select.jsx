import styled from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi2";

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledSelect = styled.select.withConfig({
  shouldForwardProp: (prop) => prop !== "error",
})`
  width: 100%;
  padding: 0.8rem 3rem 0.8rem 1.2rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid
    ${({ error }) => (error ? "var(--color-red-700)" : "var(--color-gray-300)")};
  background-color: ${({ disabled }) =>
    disabled ? "var(--color-gray-200)" : "white"};
  color: ${({ disabled }) =>
    disabled ? "var(--color-gray-500)" : "var(--color-gray-800)"};
  transition: border-color 0.3s, box-shadow 0.3s;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: none;
    border-color: ${({ error }) =>
      error ? "var(--color-red-700)" : "var(--color-yellow-600)"};
    box-shadow: 0 0 0 3px
      ${({ error }) =>
        error ? "rgba(255, 0, 0, 0.3)" : "rgba(234, 179, 8, 0.4)"};
  }
`;

const DropdownIcon = styled(HiOutlineChevronDown)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-gray-500);
  font-size: 2rem;
`;

const ErrorMessage = styled.p`
  color: var(--color-red-700);
  margin-top: 0.5rem;
`;

function Select({ id, children, error, disabled, ...props }) {
  return (
    <SelectWrapper>
      <StyledSelect id={id} disabled={disabled} error={!!error} {...props}>
        {children}
      </StyledSelect>
      <DropdownIcon />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SelectWrapper>
  );
}

export default Select;
