import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.input`
    padding: 10px;
    min-width: 45.5rem;
    min-height: 2.5rem;
    font-size: 20px;
    margin-bottom: 10px;
`;

const Title = props => {
    let { title, onTitleChange } = props;
    return (
        <TitleWrapper
            name="title"
            value={title}
            onChange={onTitleChange}
        ></TitleWrapper>
    );
};

export default Title;
