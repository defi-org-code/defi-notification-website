import React from 'react'
import animations from '../../../../assets/js/animations'
import images from '../../../../assets/js/images'

function LearnMore({ links }) {


    return (
        <div className='main-learn-more' data-aos={animations.fadeUp}>
            {links}
        </div>
    )
}

export default LearnMore
