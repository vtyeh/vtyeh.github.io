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
          <SectionTitle title={"venessa yeh"} />
          <div className={"fancy-font"} style={{ width: "13em" }}>
            full stack developer + poet based in southern california.
          </div>
        </div>
      </section>
      <section id={"about"}>
        <img src={thisMe} alt={"me in foster city"} />
        <div style={{ width: "50%" }}>
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
          <div className={"fancy-font"} style={{ width: "75%" }}>
            Enjoy your coffee break with some poetry.
          </div>
          <p>
            <a className={"linkButton"} href="https://medium.com/@venessa-yeh">
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
        pixelmeetup. © venessa yeh 2021
      </footer>
    </div>
  );
}
