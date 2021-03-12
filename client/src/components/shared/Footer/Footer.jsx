import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="team-members">
        &copy; 2021 Designed and developed by:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/huckleberry-ginesta/"
        >
          Huckleberry Ginesta
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/zoe-zhenwen-li-65343a179/"
        >
          Zoe Li
        </a>
        , and{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/bnowen/"
        >
          Brittany Owen
        </a>
      </div>
      <div className="icon">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
