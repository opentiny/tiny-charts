import React, { useEffect, useState } from 'react';
import MarkdownElement from '../../components/MarkdownElement';
import axios from 'axios';

const MarkdownPage = (props) => {
    const [content, setContent] = useState('')
    useEffect(() => {
        axios.get(props.path).then(res => {
            setContent(res.data)
        })
    })
    return (
        <div className="ic-example-explore">
            <MarkdownElement text={content} />
        </div>
    )
}

export default MarkdownPage;