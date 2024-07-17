import {Tabs} from "antd";
import type {TabsProps} from 'antd';
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQSection() {
    
    const faqs: {
        category: 'Seafarer' | 'Company' | 'Cadet',
        title: string,
        answer: string
    }[] = [
        {
            category: 'Seafarer',
            title: 'Is there a registration or subscription fee?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet consectetur imperdiet.",
        },
        {
            category: 'Seafarer',
            title: 'Are there any conditions for applying?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet consectetur imperdiet.",
        },
        {
            category: 'Company',
            title: 'Do I need to spend a packet again for a seafarer I have imaged?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet consectetur imperdiet.",
        },
        {
            category: 'Company',
            title: 'Is there a charge for detailed filtering?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet consectetur imperdiet.",
        },
        {
            category: 'Cadet',
            title: 'Can I see the refenras grades of my instructors?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet consectetur imperdiet.",
        }
    ]
    
    const tabs: TabsProps["items"] = [
        {
            key: "1",
            label: 'All',
            children: <FAQAccordion items={faqs}/>
        },
        {
            key: "2",
            label: 'Seafarer',
            children: <FAQAccordion items={faqs.filter((faq) => faq.category === 'Seafarer')} />
        },
        {
            key: "3",
            label: 'Company',
            children: <FAQAccordion items={faqs.filter((faq) => faq.category === 'Company')} />
        },
        {
            key: "4",
            label: 'Cadet',
           children: <FAQAccordion items={faqs.filter((faq) => faq.category === 'Cadet')} />
        },
    ]

    return <section id="faq" className="container mx-auto px-5 max-w-3xl mt-16">
        <Tabs defaultActiveKey="1" items={tabs}/>
    </section>
}