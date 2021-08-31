import { HashLink as Link } from "react-router-hash-link";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/#main">
        <div className={"chinese"}>
          <span>葉</span>
          <span>香</span>
          <span>儀</span>
        </div>
      </Link>
      <div className={"navbarLinks"}>
        <Link to="/#about">about me</Link>
        <Link to="/#projects">projects</Link>
        <Link to="/#poetry">poetry</Link>
      </div>
    </div>
  );
}
