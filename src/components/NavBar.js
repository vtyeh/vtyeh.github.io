import { useState } from "react";

export default function NavBar(currentSection) {
  const [active, setActive] = useState(null);

  function scrollSmoothTo(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
      setActive(elementId);
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="navbar">
      <button onClick={() => scrollSmoothTo("main")}>
        <div className={"chinese"}>
          <span>葉</span>
          <span>香</span>
          <span>儀</span>
        </div>
      </button>
      <div className={"navbarLinks"}>
        <button
          className={active === "about" ? "active" : ""}
          onClick={() => scrollSmoothTo("about")}
        >
          about me
        </button>
        <button
          className={active === "projects" ? "active" : ""}
          onClick={() => scrollSmoothTo("projects")}
        >
          projects
        </button>
        <button
          className={active === "poetry" ? "active" : ""}
          onClick={() => scrollSmoothTo("poetry")}
        >
          poetry
        </button>
      </div>
    </div>
  );
}
