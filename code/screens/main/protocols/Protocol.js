import React from 'react';
import animations from '../../../../assets/js/animations';

function Protocol({ url, image, _body, _relativeURL, _ID }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return <li className='main-protocols-list-item' data-aos = {animations.fadeUp}>

        <a href={url} target='_blank' >
            <img src={handleUrl(image)} alt='' className='main-protocols-list-item-img' />
            {_body}
        </a>

    </li>;
}

export default Protocol;
