import styled from "styled-components";

export const ListItem = styled.div.attrs((props: { active: boolean }) => props)`
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  border: 1px solid #a1a1a1;
`;