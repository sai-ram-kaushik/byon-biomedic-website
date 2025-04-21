import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: 'What is Byon Biomedic (M) Sdn. Bhd.?',
        answer: 'Byon Biomedic is a Malaysian biotechnology company dedicated to pioneering innovative, plant-derived pharmaceutical solutions, with a focus on preventive and therapeutic healthcare products.'
    },
    {
        question: 'Where is Byon Biomedic located?',
        answer: 'Yes, Byon Biomedic invests in Research and Development (R&D), collaborating with experts to validate the efficacy and safety of its plant-based therapies for diverse medical conditions.'
    },
    {
        question: 'What products does Byon Biomedic specialize in?',
        answer: 'The company specializes in botanical-based pharmaceuticals, prioritizing formulations that harness natural compounds for immune support, disease prevention, and treatment.'
    },
    {
        question: 'Is Byon Biomedic involved in medical research?',
        answer: 'Yes, Byon Biomedic invests in Research and Development (R&D), collaborating with experts to validate the efficacy and safety of its plant-based therapies for diverse medical conditions.'
    },
    {
        question: 'Does Byon Biomedic have product certifications?',
        answer: 'The company adheres to stringent regulatory standards, including Good Manufacturing Practice (GMP), and ensures all products meet local and international quality assurance requirements.'
    },
    {
        question: 'What is DAMOXIN?',
        answer: 'DAMOXIN is an oral capsule developed by Byon Biomedic, formulated with natural antiviral and immunomodulatory ingredients to target COVID-19 and enhance immune resilience.'
    },
    {
        question: 'How does DAMOXIN work?',
        answer: 'Its bioactive compounds inhibit viral replication and stimulate immune response, aiding the body in combating infections and accelerating recovery.'
    },
    {
        question: 'Is DAMOXIN clinically tested?',
        answer: 'DAMOXIN has undergone preclinical studies and is progressing through structured clinical trials to validate its safety and therapeutic efficacy for regulatory approval.'
    },
    {
        question: 'Where can I purchase DAMOXIN?',
        answer: 'Upon regulatory clearance, DAMOXIN will be distributed through licensed pharmacies, healthcare institutions, and authorized online platforms.'
    },
    {
        question: 'Can DAMOXIN treat illnesses beyond COVID-19?',
        answer: 'While designed for COVID-19, its immune-boosting properties may support respiratory health and offer adjunct benefits for other viral infections, pending further research.'
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        if (faqRef.current) {
            observer.observe(faqRef.current);
        }
        return () => {
            if (faqRef.current) {
                observer.unobserve(faqRef.current);
            }
        };
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div 
            ref={faqRef} 
            initial={{ opacity: 0, y: 50 }} 
            animate={isVisible ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.8 }}
            className='w-full px-5 md:px-10 py-5 md:py-10 container mx-auto'
        >
            <div className='flex items-start mb-6'>
                <h2 className='text-[28px] font-bold text-secondary'>Frequently Asked Questions</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={isVisible ? { opacity: 1, y: 0 } : {}} 
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='border-b border-gray-300 rounded-lg overflow-hidden shadow-md'
                    >
                        <div
                            className='flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-secondary hover:text-white transition-all duration-300'
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3 className='text-lg font-semibold'>{faq.question}</h3>
                            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                        {openIndex === index && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }} 
                                animate={{ opacity: 1, height: 'auto' }} 
                                transition={{ duration: 0.3 }}
                                className='p-4 bg-white text-gray-700'
                            >
                                {faq.answer}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Faq;
