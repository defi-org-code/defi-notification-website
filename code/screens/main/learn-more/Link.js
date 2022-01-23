import React from 'react';
import images from '../../../../assets/js/images';

function Link({ _relativeURL, _ID, image, url, title, tooltip, _body }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }

    return <div className='main-learn-more-link'>
        <section className='main-learn-more-link-title'>
            <h4>{title}</h4>
            {tooltip}
        </section>

        <a href={url} target='_blank'>
            <div className='main-learn-more-link-wrapper'>
            <img src={handleUrl(image)} className='main-learn-more-link-img' />
            <section className='main-learn-more-link-body'>
            {_body}
            </section>
            <img src={handleUrl(images.arrowRight)} className='main-learn-more-link-arrow' />
            </div>
        </a>
    </div>
}

export default Link;
