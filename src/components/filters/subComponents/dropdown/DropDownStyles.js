import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../../styles/variables";

export const DropDownIconWrapper = styled(motion.div)`
  margin: 0.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  & > svg {
    font-size: 2rem;
    color: ${colors.colorNavLinks};
  }
`;
