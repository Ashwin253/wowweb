import React, { useState } from 'react';
import Image from 'next/image';
import arrowup from '../../assets/arrowup.png';
import arrowdown from '../../assets/arrowdown.png';

function Accordion({ header, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion">
      <div className="accordion-header text-lg font-medium flex p-2" onClick={toggleAccordion}>
        {header} {isOpen? <Image className='animate-bounce'
        src={arrowdown}
        width={25}
        height={25}
        alt="Picture of the author"
      />: <Image className='animate-bounce'
      src={arrowup}
      width={25}
      height={25}
      alt="Picture of the author"
    />}
      </div>
      {isOpen && (
        <div className='transition delay-150 duration-300'>
          {content.map((item, index) => (
              <li className='leading-normal	' key={index}>{item}</li>
            ))}
        </div>
      )}
    </div>
  );
}

export default Accordion;
