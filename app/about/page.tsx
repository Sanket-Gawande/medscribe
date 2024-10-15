import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutPage() {
  return (
    <div className="p-4 md:p-6">
      <title>About us</title>
      <section
        style={{ background: 'url("/banner-scaled.jpg") center/cover' }}
        className="text-center p-4 py-10 md:p-6 md:py-16 lg:p-8 lg:py-20 rounded-2xl"
      >
        <article className="flex items-center justify-center">
          <Image src="/icon.svg" width={40} height={40} alt="Logo" />
          <p className="font-semibold">Med Scribe</p>
        </article>
        <div className="flex items-center gap-1 justify-center my-2">
          <Link href="/">Home</Link>
          <small>/</small>
          <Link href="/about">About</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-black">About us</h1>
      </section>
      <section className="p-4 md:p-6 space-y-6 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        suscipit modi omnis illum quidem, ut sapiente officia voluptate deserunt
        aliquam optio quod quia odit commodi necessitatibus dolor non deleniti.
        Natus harum deserunt pariatur ad. Deleniti doloribus culpa adipisci
        asperiores earum hic atque eligendi eius numquam fugit ex consequuntur
        officiis, illum fugiat vel corrupti explicabo animi aliquid error quasi
        quo, facere repudiandae? Adipisci quibusdam dolores vero amet
        repellendus consectetur? Molestias dolorem suscipit vitae animi
        sapiente, quasi enim ipsum atque quae in ex similique quod. Totam
        possimus quod nostrum ut eveniet corrupti, excepturi dolores eligendi
        tenetur magni officiis accusamus inventore ratione nihil iure aliquid
        est dolorem quia in, atque porro, animi harum sequi.
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quos
          autem corrupti quam dicta, quidem, voluptatibus velit eum officia quis
          blanditiis ipsa. Tenetur aperiam autem dolores, culpa inventore
          eligendi veniam ipsam natus enim velit deserunt magnam, itaque est at,
          aliquam laborum dolorem earum! Accusantium error ipsam, consequatur
          fuga neque commodi deserunt accusamus consectetur magnam aut sapiente
          sit, porro quod, necessitatibus rem voluptatem nulla nam nemo delectus
          a exercitationem natus distinctio. Quod pariatur modi ipsam nisi
          possimus. Quos deserunt illum excepturi ad eveniet sapiente error
          laboriosam vero, reiciendis atque dolor molestias velit eaque maxime
          ipsum quas perferendis culpa sit quam fugit alias optio totam iste
          quia? Rerum quo odio in dolore veniam!
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
