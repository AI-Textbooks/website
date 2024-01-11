import Image from "next/image";
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

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
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