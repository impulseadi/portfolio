import { useState } from 'react';

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a wide range of services including web development, mobile app development, and more.',
    },
    {
      question: 'How seasoned is your squad of experts?',
      answer: 'Our team consists of highly experienced professionals who have worked over different projects and made interactive websites for the clients.',
    },
    {
      question: 'What makes your UI/UX designs stand out?',
      answer: 'Our focus on user-centered design and attention to detail helps us create intuitive and engaging experiences.',
    },
    {
      question: 'What is the process you follow for project development?',
      answer: "Our project development journey starts by diving deep into your needs, brand essence, and challenges. We follow a six-step process that's all about collaboration. At each stage, we gather your insights and feedback to ensure we're on the same page. This keeps us aligned with your vision every step of the way. Before we hand over the project, we give it a final quality check to make sure it's nothing short of amazing",
    },
    {
      question: 'What software do you use?',
      answer: 'We utilize a variety of tools and software based on the specific needs of each project.',
    },
  ];

  return (
    <div className="bg-black text-white p-12 flex flex-col justify-center flex-wrap h-4/5 mt-10 mb-10 mx-5">
      <h2 className="text-white text-center text-5xl mb-10">We’ve got the answers to your questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border border-gray-500 rounded-lg mb-5 p-12 cursor-pointer"
          onClick={() => setOpenIndex(index === openIndex ? null : index)}
        >
          <h3 className="text-violet-500 text-center">{item.question}</h3>
          {openIndex === index && <p className="text-gray-500 text-center font-medium">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
