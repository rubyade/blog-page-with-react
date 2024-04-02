import { useEffect, useState } from 'react';
import '../index.css';
import InputBox from '../components/InputBox/InputBox';
import Button from '../components/Button';
import SectionFirst from '../components/SectionFirst';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import axios from 'axios';
const url = 'https://api.quotable.io/random';

function Home() {
  const [quote, setQuote] = useState('');
  const fetchQuote = async () => {
    try {
      const response = await axios(url);
      const data = response.data.content;
      setQuote(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  // useEffect(() => {
  //   fetchQuote();
  // }, []);

  return (
    <div>
      <div className='container-1'>
        <h2 className='header-text'>Discover restaurants and more near you</h2>
        <InputBox />
        <Button
          type='button'
          handleClick={fetchQuote}
          label='CLICK TO GET  A BEAUTIFUL QUOTE'
        />
        {quote && <p className='quote'>{quote}</p>}
      </div>

      <div className='container-2'>
        <SectionFirst
          img='https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg'
          topic='Become a Dasher'
          shorttext="As a delivery driver, you'll make reliable money—working anytime, anywhere."
          link='Start earning'
        />

        <SectionFirst
          img='https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg'
          topic='Become a Partner'
          shorttext='Grow your business and reach new customers by partnering with us.'
          link='Sign up your store'
        />

        <SectionFirst
          img='https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg'
          topic='Get the best DoorDash experience'
          shorttext='Experience the best your neighborhood has to offer, all in one app.'
          link='Get the app'
        />
      </div>

      <div>
        <SectionTwo
          firstword='Everything you crave, delivered.'
          secondword='Your favorite local restaurants'
          thirdword="Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try."
          label='Find restaurants'
          img='https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png'
        />

        <SectionThree
          firstword='DashPass is delivery for less'
          thirdword="Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days."
          label='Get DashPass'
          img='https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/dashpass_desktop.png'
        />
      </div>
    </div>
  );
}

export default Home;
