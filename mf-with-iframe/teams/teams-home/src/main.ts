import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="main">메인입니당</div>
<div id="team-jobs-recommendation">
  <iframe src="http://localhost:3002/jobs/fragments/recommendation"></iframe>
</div>
`;
