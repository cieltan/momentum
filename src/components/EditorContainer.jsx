import React, { Component } from "react";
import ReactDOM from "react-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import styled from "styled-components";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MyEditorWrapper = styled.div`
    max-width: 40rem;
    height: 50rem;
    padding: 10px;
    overflow: auto;
    background-color: white;
    color: #333f58;
`;

export default class EditorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange = editorState => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <MyEditorWrapper>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        image: {
                            // uploadCallback: uploadImageCallBack,
                            alt: { present: true, mandatory: true },
                        },
                    }}
                />
            </MyEditorWrapper>
        );
    }
}
