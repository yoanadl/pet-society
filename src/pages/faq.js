import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './faq.css';
import { useNavigate } from 'react-router-dom';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };



  return (
    <div id="faq">
      <h1>FAQs</h1>
      <button onClick={goToHome} className="link-button">
          &lt; Back
        </button>
      <h2>Adoption</h2>
      <div className="faq-container">
        {/* Adoption Questions */}
        <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleAnswer(0)}>
          <div className="question">
            What is the adoption process like?
            <div className="arrow">{activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 0 && <div className="answer">The adoption process includes filling out an application, a home visit, and an interview to ensure the pet is a good fit for your home.</div>}
        </div>
        <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAnswer(1)}>
          <div className="question">
            What should I bring when I adopt a pet?
            <div className="arrow">{activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 1 && <div className="answer">You should bring a valid ID, a proof of address, and a list of family members who will be involved in the adoption process.</div>}
        </div>
        <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAnswer(2)}>
          <div className="question">
            How do I know which pet is right for me?
            <div className="arrow">{activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 2 && <div className="answer">You can meet the pets at our shelter, and our team will guide you in choosing a pet that fits your lifestyle and living situation.</div>}
        </div>
        <div className={`faq-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAnswer(3)}>
          <div className="question">
            Can I adopt a pet if I live in an apartment?
            <div className="arrow">{activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 3 && <div className="answer">Yes! We help match pets with the right living environment, whether you're in an apartment, house, or have a backyard.</div>}
        </div>
        <div className={`faq-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleAnswer(4)}>
          <div className="question">
            What happens if I need to return an adopted pet?
            <div className="arrow">{activeIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 4 && <div className="answer">If you need to return a pet, please contact us immediately. We will work with you to find a solution or help find a new home for the pet.</div>}
        </div>
    </div>

    <h2>Release a Pet</h2>
    <div className="faq-container">

        <div className={`faq-item ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleAnswer(5)}>
          <div className="question">
            How do I release a pet to the shelter?
            <div className="arrow">{activeIndex === 5 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 5 && <div className="answer">To release a pet to the shelter, please contact us to schedule an appointment, and we will provide you with all the necessary steps and paperwork.</div>}
        </div>
        <div className={`faq-item ${activeIndex === 6 ? 'active' : ''}`} onClick={() => toggleAnswer(6)}>
          <div className="question">
            Is there a fee for releasing a pet to the shelter?
            <div className="arrow">{activeIndex === 6 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 6 && <div className="answer">There may be a small fee to cover the cost of processing and care, but this depends on the specific situation.</div>}
        </div>
        <div className={`faq-item ${activeIndex === 7 ? 'active' : ''}`} onClick={() => toggleAnswer(7)}>
          <div className="question">
            Can I visit the pet after releasing it to the shelter?
            <div className="arrow">{activeIndex === 7 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 7 && <div className="answer">Yes, you can visit the pet in the shelter, but please contact us in advance to schedule your visit.</div>}
        </div>
    </div>

    
    <h2>Volunteer</h2>
    <div className="faq-container">

        <div className={`faq-item ${activeIndex === 8 ? 'active' : ''}`} onClick={() => toggleAnswer(8)}>
          <div className="question">
            How can I volunteer at the shelter?
            <div className="arrow">{activeIndex === 8 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 8 && <div className="answer">To volunteer, you can sign up on our website or contact us to get more information about available opportunities and training.</div>}
        </div>
        <div className={`faq-item ${activeIndex === 9 ? 'active' : ''}`} onClick={() => toggleAnswer(9)}>
          <div className="question">
            Do I need to have any prior experience to volunteer?
            <div className="arrow">{activeIndex === 9 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 9 && <div className="answer">No prior experience is required! We provide training to all volunteers, and we welcome people with various skills.</div>}
        </div>
        <div className={`faq-item ${activeIndex === 10 ? 'active' : ''}`} onClick={() => toggleAnswer(10)}>
          <div className="question">
            What kind of tasks can volunteers help with?
            <div className="arrow">{activeIndex === 10 ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {activeIndex === 10 && <div className="answer">Volunteers can assist with tasks such as pet care, adoption events, administrative work, and fundraising activities.</div>}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
