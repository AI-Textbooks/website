import Image from "next/image";
import Container from "./container";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap h-full xl:h-[75vh]">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-normal font-header leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              we make custom GPTs tailored to your company
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              using collaborative knowledge bases
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href={"/#contact"}
                rel="noopener"
                className="px-6 py-2 text-lg text-center text-black bg-gradient-to-r from-emerald-300 to-cyan-200/70">
                make my GPT
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              className='mx-auto'
              src='/hero.svg'
              alt='AI Textbooks logo'
              width="616"
              height="617"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;