import Image from "next/image";
import question from '@/assets/question.png'
import FAQSection from '@/components/FAQSection'

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full container mx-auto py-20">
      <Image className="w-60" alt="Question mark" src={question} />
      <div className="flex flex-col items-center text-center gap-7 mt-10">
        <h1 className="text-3xl font-bold">FAQ</h1>
        <p className="text-base text-graytext max-w-2xl px-3">
          Welcome to our FAQ page! Here, you will find answers to the most commonly asked questions about our services, products, and policies. If you need further assistance, please feel free to contact our support team.
        </p>
      </div>

      <FAQSection />
    </main>
  );
}
