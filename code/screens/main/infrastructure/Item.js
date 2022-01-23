import React from 'react';
import animations from '../../../../assets/js/animations';

function Item({ url, image, _relativeURL, _ID, _body }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return <li className='main-partners-list-item' data-aos = {animations.fadeUp}>

        <a href={url} target='_blank' >
            <img src={handleUrl(image)} alt='' className='main-partners-list-item-img' />
            {_body}
        </a>

    </li>;
}

export default Item;
