import React from "react";
import ItemLayout from "@/components/about/ItemLayout";

const AboutDetails = () => {
  return (
    <section className="w-full py-20">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">Clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+
            <sub className="font-semibold text-base pl-2">
              Years of experience
            </sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=turbosohaib&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon=FEFE5B&text_bold=false"
            alt="SohaibShah"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=turbosohaib&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon=FEFE5B&text_bold=false"
            alt="SohaibShah"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn"
            alt="skills"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=turbosohaib&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="github streaks"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src=" https://github-readme-stats.vercel.app/api/pin/?username=turbosohaib&repo=3d-wizard-portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon=FEFE5B&text_bold=false&description_lines_count=2"
            alt="SohaibShah"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
