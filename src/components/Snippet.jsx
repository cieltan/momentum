import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const SnippetWrapper = styled.div``;

const Snippet = props => {
    const { data } = props;
    const { content, title } = data;
    return (
        <SnippetWrapper>
            <h1>{title}</h1>
            {parse(JSON.parse(content))}
        </SnippetWrapper>
    );
};

export default Snippet;
