import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footers from '../components/footers';
import { serverURL } from '../constants';
import axios from 'axios';
import StyledText from '../components/styledText';

const PrivacyPolicy = () => {

    const [data, setData] = useState('');

    useEffect(() => {
        async function dashboardData() {
            const postURL = serverURL + `/api/policies`;
            const response = await axios.get(postURL);
            setData(response.data[0].privacy)
        }
        if (sessionStorage.getItem('TermsPolicy') === null && sessionStorage.getItem('PrivacyPolicy') === null) {
            dashboardData();
        } else {
            setData(sessionStorage.getItem('PrivacyPolicy'))
        }
    }, []);

    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={false} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='flex-1 flex items-center justify-center py-10 flex-col'>
                    <p className='text-center font-black text-4xl text-black dark:text-white'>Privacy Policy</p>
                    <div className='w-4/5 py-20'><StyledText text={data} /></div>
                </div>
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default PrivacyPolicy;

