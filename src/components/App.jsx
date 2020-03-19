import React, { Component } from "react";
import { withTheme } from "styled-components";
import Snippet from "./Snippet";
import EditorContainer from "./EditorContainer";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: {},
            note: null,
        };
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        let notes = localStorage.getItem("storage");
        if (!notes) {
            localStorage.setItem("storage", JSON.stringify({}));
            localStorage.setItem("count", String(0));
        } else {
            notes = JSON.parse(localStorage.getItem("storage"));
        }
        this.setState(
            {
                notes,
            },
            () => {
                const { notes } = this.state;
                let length = Object.keys(notes).length;
                let random = Math.ceil(Math.random() * length);
                this.setState({ note: notes[random] });
            }
        );
    };

    render() {
        let { notes, note } = this.state;
        notes = Object.entries(notes) || [];
        return (
            <div>
                {/* {notes.map(note => {
                    const [id, data] = note;
                    return <Snippet key={note} data={data}></Snippet>;
                })} */}
                {note && <Snippet data={note}></Snippet>}
            </div>
        );
    }
}
