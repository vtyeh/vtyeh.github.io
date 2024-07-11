import React from "react";

import NavBar from "./NavBar";
import Social from "./Social";
import SectionTitle from "./SectionTitle";
import Paragraph from "./Paragraph";
import Poem from "./Poem";

import textJSON from "../text/text.json";
import poemsJSON from "../text/poems.json";
import thisMe from "../images/me.JPG";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Social />
      <section id={"main"}>
        <div>
          <SectionTitle title={"venessa tai yeh"} />
          <div className={"fancy-font"}>
            full stack developer + poet based in southern california.
          </div>
        </div>
      </section>
      <section id={"about"}>
        <img src={thisMe} alt={"portrait of me"} />
        <div className={"paragraph-text"}>
          <SectionTitle title={"about me"} />
          <Paragraph text={textJSON.about_me} />
        </div>
      </section>
      <section id={"projects"}>
        <SectionTitle title={"projects"} />
        <p>under construction. please see github for now.</p>
      </section>
      <section id={"poetry"}>
        <div>
          <div className={"fancy-font"}>
            Enjoy your coffee break with some poetry.
          </div>
          <p style={{ marginBottom: "5em" }}>
            <a
              className={"linkButton"}
              href="https://venessa-tai-yeh.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              read more on medium
            </a>
          </p>
        </div>
        <div id={"poetryPage"}>
          <Poem poem={poemsJSON["daffodil river"]} />
        </div>
      </section>
      <footer>
        created with figma, react, and github pages. icons from freepik and
        pixelmeetup. © venessa tai yeh 2024
      </footer>
    </div>
  );
}
