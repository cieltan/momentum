import React from "react";
import parse from "html-react-parser";

const Snippet = props => {
    const { content } = props;
    console.log(JSON.parse(content));
    return <div>{parse(JSON.parse(content))}</div>;
};

export default Snippet;
