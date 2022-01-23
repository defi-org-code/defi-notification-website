import React from 'react';
import images from '../../../assets/js/images';

function Tooltip({ id = '', _body }) {
    return <div className='tooltip' id={id}>
        <button><img src={images.tooltip} className='tooltip-btn' /></button>
        <section className='tooltip-body'>{_body}</section>
    </div>;
}

export default Tooltip;
