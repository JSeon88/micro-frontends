import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
<h1>Network</h1>
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/jobs/">Jobs</a></li>
    <li><a href="/network/">Network</a></li>
  </ul>
</nav>
</div>
`;
