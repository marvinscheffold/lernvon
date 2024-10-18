import { Container } from "app/_components/Container";
import { h2 } from "app/_tailwind-classes/headlines";
import { textMedium } from "app/_tailwind-classes/texts";
import Image from "next/image";

export function HomeTestimonials() {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="py-24 flex flex-col gap-12 items-center">
          <h2 className={h2}>
            Professional hosts use PriceBee to earn more money
          </h2>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            <div className="border rounded-2xl flex flex-col justify-between bg-white px-8 py-4 ">
              <div className={`mb-2 ${textMedium}`}>
                “It saves me about 2 hours every month”
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src="/images/avatar-1.jpg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <span className="font-medium">Marla Grey</span>
                <span className="text-gray-500">Berlin</span>
              </div>
            </div>
            <div className="border rounded-2xl flex flex-col justify-between bg-white px-8 py-4 ">
              <div className={`mb-2 ${textMedium}`}>
                “I would have missed the Olympics in Paris without PriceBee”
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src="/images/avatar-1.jpg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <span className="font-medium">Marla Grey</span>
                <span className="text-gray-500">Berlin</span>
              </div>
            </div>
            <div className="border rounded-2xl flex flex-col justify-between bg-white px-8 py-4 ">
              <div className={`mb-2 ${textMedium}`}>
                “Made 780$ more in only one summer. It’s so good!”
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src="/images/avatar-1.jpg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <span className="font-medium">Marla Grey</span>
                <span className="text-gray-500">Berlin</span>
              </div>
            </div>
            <div className="border rounded-2xl flex flex-col justify-between bg-white px-8 py-4 ">
              <div className={`mb-2 ${textMedium}`}>
                “This is the first Smart Pricing that actually works for me”
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src="/images/avatar-1.jpg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                />
                <span className="font-medium">Marla Grey</span>
                <span className="text-gray-500">Berlin</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
