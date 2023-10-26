import Image from "next/image";
import React from "react";
import Container from "./container";

const Values = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal font-serif">
              Open Source
            </p>
            <p className="text-xl leading-normal ">
              We foster <Mark>collaboration</Mark> with other companies to create an open source ecosystem of tools that is <Mark>interconnected</Mark>.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal font-serif">
              Open Data
            </p>
            <p className="text-xl leading-normal ">
              We create <Mark>open datasets</Mark> from the <Mark>interaction</Mark> between humans and AI for AI to evolve along with culture and language.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal font-serif">
              Open Knowledge
            </p>
            <p className="text-xl leading-normal ">
              We allow everyone to <Mark>build</Mark> from the knowledge of one another and <Mark>map open resources</Mark> that everyone can access to.
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
      <mark className="text-white bg-cyan-500/70 rounded-md dark:ring-cyan-500/70 dark:bg-cyan-500/70 dark:text-black px-1">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Values