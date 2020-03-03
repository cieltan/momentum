import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const SnippetWrapper = styled.div``;

const Snippet = props => {
    const { data } = props;
    const { content } = data;
    return <SnippetWrapper>{parse(JSON.parse(content))}</SnippetWrapper>;
};

export default Snippet;
