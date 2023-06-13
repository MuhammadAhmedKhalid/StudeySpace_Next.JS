'use client';

import HomeContent from '@components/HomeContent';

export default function Home() {

    const isMobile = window.innerWidth <= 768;

    return (
        <>
        {
            isMobile ? 
            <div className='container y-axis' style={{marginBottom: '10px', marginTop: '40px'}}>
               <HomeContent/>
                <img src='/images/home_bg1.png' style={{height: '25%'}}/>
            </div>
            : 
            <div className='container'>
                <div className='left-portion y-axis' style={{marginBottom: '10px', marginTop: '40px'}}>
                    <HomeContent/>
                </div>
                <div className='square right-portion'>
                    <img alt='home_bg' src='/images/home_bg.png' />
                </div>
            </div>
        }
        </>
    )
}