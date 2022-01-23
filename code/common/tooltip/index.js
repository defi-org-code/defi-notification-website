import React from 'react';
import images from '../../../assets/js/images';

function Tooltip({ id = '', _body, _relativeURL, _ID }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return <div className='tooltip' id={id}>
        <button><img src={handleUrl(images.tooltip)} className='tooltip-btn' /></button>
        <section className='tooltip-body'>{_body}</section>
    </div>;
}

export default Tooltip;
