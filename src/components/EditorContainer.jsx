import React, { Component } from "react";
import ReactDOM from "react-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import styled from "styled-components";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import SaveIcon from "./icons/addbutton.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const SaveIconWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: 20px;
    fill: #333f58;
`;

const MyEditorWrapper = styled.div`
    position: relative;
    height: 50rem;
    min-width: 45.5rem;
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

    onSave = editorState => {
        console.log("fired");
        localStorage.setItem(
            "test",
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
        );
        this.notify();
    };

    notify = () => toast("Note has been saved.");

    render() {
        const { editorState } = this.state;
        return (
            <>
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
                    <SaveIconWrapper onClick={() => this.onSave(editorState)}>
                        <SaveIcon style={{ height: "40px", width: "40px" }} />
                    </SaveIconWrapper>
                </MyEditorWrapper>
                <ToastContainer hideProgressBar={true} />
            </>
        );
    }
}
