import { useEffect,useState } from 'react';
import Accordion from './Accordion';
import Glassmorphism from './glassmorphism';
import ReactiveButton from 'reactive-button';
import Image from 'next/image';
import Hubspot from '../../public/tools/hubspot.png';
import Ahrefs from '../../public/tools/ahrefs.png';
import Semrush from '../../public/tools/semrush.png';
import Sitebulb from '../../public/tools/sitebulb.png';
import Screamingfrog from '../../public/tools/screamingfrog.png';
import cart from '../../assets/cart.png';
import mobile from '../../assets/mobile.png';
import seo from '../../assets/seo.png';
import Head from 'next/head';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');

    // send an HTTP request
    setTimeout(() => {
      setState('success');
      window.location.replace('https://wxilazan4ad.typeform.com/to/rjPYAvx5');
    }, 2000);
  };
 

  const accordionContent = [
    'SEO helps businesses connect with users actively searching for them. These users that come to your website through Google search results are the most valuable kind of website visitors since they have a high intent to buy from you.',
    'SEO aids increase in the quantity of relevant traffic',
    'Organic SEO builds trust and credibility in your brand',
    'SEO services are a lot less expensive than paid advertising',
    'SEO is low-maintenance – once you achieve organic ranking for your target keywords it’s easy to maintain them and pull in consistent traffic month after month',
    'SEO marketing, if done right, ultimately delivers the highest ROI compared to all other forms of digital marketing'
  ];
 const accofirst = [
  'SEO is an acronym for Search Engine Optimization.','It is the process of optimizing your website such that it pulls in organic or unpaid traffic from the results pages of major search engines like Google, Bing, and DuckDuckGo.','The better the SEO the greater the chances of your site appearing at the top of search results and pulling in more traffic.So how does SEO work?Search Engines rely on search algorithms, comprising of up to 200 ranking factors, to display the most relevant and high-quality websites in search results.','SEO specialists understand these algorithms and ranking factors and optimize your website accordingly.'
 ]
 const accotypes= [
' There are 4 main types of SEO:',
'Technical SEO – this ensures that a search engine can crawl, explore and read your website without any issues. This involves setting up a robots.txt file, creating an xml sitemap and fixing crawl issues. Additionally, site speed, mobile responsiveness are also key factors in technical SEO.',
'On-page SEO – Search Engines rank individual pages so it’s important to optimize every single page on a website. A well-structured page, titles and heading tags optimized with targeted keywords, descriptive URLs aids good on-page optimization.',
'Content SEO – while most people club content optimization with on-page seo, we feel it deserves a separate mention given its importance as a ranking factor. All content on a website should be optimized to aid a customer’s journey to conversion.',
'Off-page SEO – This is about promoting your website on the Internet to gain more popularity and authority. Getting back links and brand mentions from popular, authoritative sites help build your own.'
 ]
  return (
    <div className='bg-white'>
    <meta name="google-site-verification" content="Mdw-pPMFSg8CVHWQJItHVxcJ551f4UddPegA2BqONjQ" />
    <header className="flex text-gray-600 body-font justify-evenly	">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between	">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="animate-bounce w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span className="ml-3 text-xl text-mypurple">Wond</span>
      <span className="text-xl text-sky-500">er</span>
      <span className="ml-1 text-xl text-sky-500">On</span>
      <span className="ml-1 text-xl text-emerald-600">Web</span>
    </a>
    <div>
    <ReactiveButton
      buttonState={state}
      idleText="SCHEDULE AN SEO AUDIT WITH US"
      style={{ borderRadius: '25px',fontWeight: 'bold',backgroundColor:'#7f71b3' }}
      height={50}
      width={300}
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
    />
  </div>
  </div>
</header>
<Glassmorphism/>
<Head>
        <title>Wonder On Web</title>
            <meta name="google-site-verification" content="Mdw-pPMFSg8CVHWQJItHVxcJ551f4UddPegA2BqONjQ" />
      </Head>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">What Makes Us the Best-in-Class SEO Company?</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We makes sure that the entire work is completed correctly & your website performs well all around Google and other search engines. We give affordable SEO services for small and big businesses.</p>
    </div>
    <div className="flex flex-wrap place-content-center	">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Excellent Support</h2>
        <p className="leading-relaxed text-base mb-4"> We offer personalized and responsive support to ensure our clients' satisfaction and success.</p>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Strategic Approach</h2>
        <p className="leading-relaxed text-base mb-4">We prioritize a methodical and proactive approach to achieve our clients' goals.</p>
      
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Premium Tools</h2>
        <p className="leading-relaxed text-base mb-4"> We leverage advanced and cutting-edge tools to deliver efficient and high-quality services.</p>
      </div>
    
    </div>
    </div>
</section>
<div>
<p className='capitalize underline text-xl text-black	mx-16	mt-0'>Empowering businesses of every SEO needs whether their App,Web or E-commerce</p>
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-mypurple rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <div className="mt-3 text-mypurple">
                        <Image src={mobile} height={150} alt="Mobile ASO SEO "/>
                        </div>
                        
                        <div className="my-4 flex justify-center">
                            <span className="font-bold text-mypurple text-base">App Store ranking <br/>and Web Optimization</span>
                        </div>
                    </div>
                </div>

                <div className="bg-emerald-600 rounded-xl mx-12	">
                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <div className="mt-3 text-emerald-600">
                        <Image src={seo} height={150} alt="Google SEO ranking" />
                        </div>
                        <div className="my-4 flex justify-center">
                            <span className="font-bold text-emerald-600 text-base">Search Engines Optimization</span>
                        </div>
                    </div>
                </div>


                <div className="bg-sky-500 rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <div className="mt-3 text-sky-500">
                        <Image src={cart} height={150} alt="Improve sales with E-commerce rank"/>
                        </div>
                        <div className="my-4 flex justify-center">
                            <span className="font-bold text-sky-500 text-base">E-commerce growth </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <section class="my-20	 text-gray-600 body-font">
  <div class="container px-6 my-10 border-dotted border-2	 py-10 mx-auto">
    <p className='capitalize underline text-xl	m-5	mt-0'>Empowering businesses with industry-standard software usage and results.</p>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="flex items-center justify-center p-2 sm:w-1/5 w-full">
     <Image src={Hubspot} width={150} alt="Hubspot logo"/>
      </div>
      <div class="flex items-center justify-center p-2 sm:w-1/5 w-full">
      <Image src={Ahrefs} width={150} alt="Ahrefs logo"/>
      </div>
      <div class="flex items-center justify-center p-2 sm:w-1/5 w-full">
      <Image src={Screamingfrog} width={150} alt="ScreamingFrog logo"/>
      </div>
      <div class="flex items-center justify-center p-2 sm:w-1/5 w-full">
      <Image src={Semrush} width={150} alt="Semrush logo"/>
      </div>
      <div class="flex items-center justify-center p-2 sm:w-1/5 w-full">
      <Image src={Sitebulb} width={150} alt="Sitebulb logo"/>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Get a FREE Digital-Presence Evaluation of Your Business.<br/>
Get in Touch with Us Today!</h1>
<ReactiveButton
      buttonState={state}
      idleText="GET A FREE REPORT"
      style={{ borderRadius: '25px',fontWeight: 'bold',backgroundColor:'#0ea5e9' }}
      height={50}
      width={300}
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
    />
    </div>
  </div>
</section>
<div>
<p className='capitalize underline text-xl text-black mx-16		mt-0'>Empowering businesses with SEO reach for any demographics and category </p>
    <div className="md:flex md:justify-center md:space-x-8 md:px-14">
      
      {/* <!-- box-1 --> */}
      <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm">
          <div className="mt-4 text-mypurple text-center">
            <h1 className="text-xl font-bold">E-commerce SEO</h1>
            <p className="mt-4 text-gray-600">We focus on optimizing product pages, implementing effective keyword targeting, and improving the overall user experience to increase organic traffic and maximize sales.</p>
         </div>
        </div>
      </div>

      {/* <!-- bo+x-2 --> */}
      <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm">
          <div className="mt-4 text-sky-500 text-center">
            <h1 className="text-xl font-bold">International SEO</h1>
            <p className="mt-4 text-gray-600"> We implement a tailored approach to help our clients expand their reach and establish a strong presence in global markets.</p>
          </div>
        </div>
      </div>

      {/* <!-- box-3 --> */}
      <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm">
          <div className="mt-4 text-green-600 text-center">
            <h1 className="text-xl font-bold">Local SEO</h1>
            <p className="mt-4 text-gray-600">Our local SEO strategy helps our clients increase their visibility and attract more customers in their targeted geographical area.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
<div className="flex flex-col justify-center items-center text-center">
                <div className="max-w-sm font-bold font-sans">
                    Get the most out of your mobile with the right subscription
                </div>
                <div className="font-light max-w-lg mt-5 text-sm">
                    All devices come with free delivery or pickup as standard. See information on available shopping
                    options for your location.
                </div>
            </div>
         
           

{/* FAQ  */}
<section  className="text-gray-600 body-font">
  <p className='mx-auto w-3/4 text-4xl font-bold p-2'>FAQ</p>
  <div className='mx-auto w-3/4 leading-10'>
<Accordion header="What is SEO?How does it work?" content={accofirst} />
    <Accordion header="Why is SEO so important?" content={accordionContent} />
<Accordion header="Types of SEO services" content={accotypes}/>
</div>
</section>
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:justify-around	 md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className=" w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl text-mypurple">Wond</span>
      <span className="text-xl text-sky-500">er</span>
      <span className="ml-1 text-xl text-sky-500">On</span>
      <span className="ml-1 text-xl text-emerald-600">Web</span>
    </a>
    <p>Get expertise, tools, and strategies to help you achieve your digital  goals and drive sustainable growth for your business.</p>
    </div>
   
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <ReactiveButton
      buttonState={state}
      idleText="CONNECT WITH US"
      style={{ borderRadius: '25px',fontWeight: 'bold',backgroundColor:'#059669' }}
      height={50}
      width={300}
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
    />
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
             </div>
         </div>
   
    </div>
    
  </div>
  
</footer>
</div>
  )
}
