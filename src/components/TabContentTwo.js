import React from 'react'
import {Button} from './Button'
import styled from 'styled-components'
import ImgTv from '../images/tab-tv.png'
import ImgTablet from '../images/tab-tablet.png'
import ImgMacBook from '../images/tab-macbook.png'
import {generateMedia} from 'styled-media-query'

export default function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: '1.5rem'}}>
                        Watch TV shows and movies anytime, anywhere - personalized for you.
                    </span>
                    <Button className="btn">try it now</Button>
                </div>

                {/* Tab bottom content */}
                <div className="tab-bottom-content">
                    {/* TV Image container */}
                    <div>
                        <img src={ImgTv} style={{width: '18.75rem'}} alt="tab content two tv"/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, XBox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>

                    {/* Tablet Image container */}
                    <div>
                        <img src={ImgTablet} style={{width: '18.75rem', paddingTop: '0.625rem'}} alt="tab content two tablet"/>
                        <h3>Watch instatntly or download for later</h3>
                        <p>Available on phone and tablet, wherever you go</p>
                    </div>

                    {/* Macbook Image container */}
                    <div>
                        <img src={ImgMacBook} style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}} alt="tab content two laptop"/>
                        <h3>Use any computer</h3>
                        <p>Wath right on Netflix.com.</p>
                    </div>
                </div>
            </div>

        </TabContainer>
    )
}

//media
const customMedia = generateMedia({
    smDesktop: '1440px',
    tablet: '900px'
})

// main tab content container
const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content{
        margin: 0 15%;
    }

    .tab-top-content{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-item: center;
        padding: 2.5rem 0;
        ${customMedia.lessThan('smDesktop')`
            grid-template-columns: repeat(2, 1fr)
        `}
    }

    ${customMedia.lessThan('tablet')`
        grid-template-columns: 1fr;
        text-align: center;
        row-gap: 1.5rem;
    `}

    span{
        grid-column: 1 / 8;
        ${customMedia.lessThan('tablet')`
            grid-column: 1 / -1;
            font-size: 1.5rem;
        `}
    }

    .btn{
        margin: 0 1.25rem 1.25rem;
        grid-column: 10 / 12;  
        ${customMedia.lessThan('tablet')`
            grid-column: 1 / -1;
            margin-left: 30%;
            margin-right: 30%;
        `} 
    }

    img{
        width: 100%;
    }

    .tab-bottom-content{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
        ${customMedia.lessThan('tablet')`
            grid-template-columns: 1fr;
        `} 
    }

    h3{
        margin: 0.5rem 0;
    }

    p{
        color: var(--main-grey);
    }
`;
