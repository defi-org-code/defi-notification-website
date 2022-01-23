import React from 'react';
import animations from '../../../../assets/js/animations';

function Partners({ _body, list }) {
    return <div className='main-partners grid' data-aos = {animations.fadeUp}>
        <h3 className='title'>{_body}</h3>
        <ul className='main-partners-list'>
            {list}
        </ul>
    </div>;
}

export default Partners;
