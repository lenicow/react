import React from "react";
import styled from "styled-components";

// définition d'un composant avec ses styles propres.
const Presentation = styled.h1`
	color: red;
	font-size: 1.2rem;
`;

const App = () => <Presentation>Hello world !!</Presentation>;

export default App;