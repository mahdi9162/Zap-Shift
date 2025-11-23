import React from 'react';
import Container from '../../../components/Container/Container';

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: 'How does this posture corrector work?',
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      id: 2,
      question: 'Is it suitable for all ages and body types?',
      answer:
        'Yes, our posture corrector is designed to be highly adjustable to fit a wide range of body types and sizes, making it suitable for most adults and older teens. Always check the specific size guide before purchasing.',
    },
    {
      id: 3,
      question: 'Does it really help with back pain and posture improvement?',
      answer:
        'While results vary, consistent and correct use of the posture corrector can significantly aid in reducing common back pain by retraining muscle memory and relieving pressure on the spine. It is a complementary tool for posture improvement.',
    },
    {
      id: 4,
      question: 'Does it have smart features like vibration alerts?',
      answer:
        'Our premium models feature smart technology, including vibration alerts that gently remind you to straighten up whenever you slouch beyond a certain angle. Check the product specifications for details on smart features.',
    },
    {
      id: 5,
      question: 'How will I be notified when the product is back in stock?',
      answer:
        'You can sign up for our email notification list on the product page. We will send an immediate alert once the item is restocked and available for purchase.',
    },
  ];

  return (
    <Container>
      <section className="my-24">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-4 text-[#03373D]">Frequently Asked Question (FAQ)</h3>
          <p className="w-2xl mx-auto text-center text-[#606060]">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen
            your body with ease!
          </p>
        </div>
        {/* FAQ */}
        <div className="mt-10">
          {faqData.map((faq) => (
            <div className="bg-base-100 border-base-300 collapse border mb-4">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-white text-[#606060] font-bold peer-checked:bg-[#CAEB66] peer-checked:text-[#606060] ">
                {faq.question}
              </div>
              <div className="collapse-content bg-[#CAEB66] text-primary-content peer-checked:bg-[#CAEB66] peer-checked:text-[#606060] peer-checked:border-t peer-checked:border-gray-400/20 peer-checked:py-2">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="btn border-0 bg-[#CAEB66] px-8 rounded-2xl">See More FAQ's</button>
        </div>
      </section>
    </Container>
  );
};

export default Faq;
