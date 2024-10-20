import Section from "@/components/ui/section";
import { homeContent } from "@/queries/homeQueries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type ImageBlock = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
};

export default async function Home() {
  const components = {
    types: {
      image: ({ value }: { value: ImageBlock }) => (
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || " "}
          className="my-4 mx-auto"
          width={800}
          height={800}
        />
      ),
    },
  };

  const homeData = await client.fetch(homeContent);

  return (
    <div className="my-20">
      <h1 className="text-7xl font-bold my-4 text-center">{homeData.title}</h1>
      <h2 className="text-xl font-medium text-center ">{homeData.subtitle}</h2>
      <Section className="prose prose-h1:text-white text-white prose-p:text-xl">
        <PortableText value={homeData.content} components={components} />
      </Section>
    </div>
  );
}
