import React from "react";
import Container from "./container";

const Benefits = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl font-heading font-bold mb-3">
              A knowledge base that evolves
            </p>
            <p className="text-xl leading-normal ">
              Using <Mark>your knowledge</Mark> to keep <Mark>your team up-to-date</Mark> with what is relevant for your company.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl font-heading font-bold mb-3">
              With the latest AI models
            </p>
            <p className="text-xl leading-normal ">
              Using <Mark>GPT-4</Mark> to power up your collaboration. Allowing every person to <Mark>get relevant insights</Mark> at the right time.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl font-heading font-bold mb-3">
              Tailored to your needs
            </p>
            <p className="text-xl leading-normal ">
              Adapting the tools to <Mark>your needs</Mark> and working together to allow <Mark>your knowledge to grow</Mark>.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Mark(props: { children: string }) {
  return (
    <>
      {" "}
      <mark className="text-black bg-emerald-300 dark:ring-cyan-500/70 dark:bg-gradient-to-r dark:from-emerald-300 dark:to-cyan-200/70 dark:text-black px-1">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Benefits