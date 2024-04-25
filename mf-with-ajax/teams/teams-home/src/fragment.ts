export const loadFragment = async (root: HTMLElement) => {
  const template = root.getAttribute("data-fragment");

  const htmlUrl = `${template}/index.html`;
  const styleUrl = `${template}/index.css`;
  const scriptUrl = `${template}/index.js`;

  try {
    // html 로드
    const html = await fetch(htmlUrl).then((response) => response.text());
    root.innerHTML = html;

    // css 로드
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = styleUrl;
    root.appendChild(link);

    // 스크립트 로드
    const script = document.createElement("script");
    script.src = scriptUrl;
    root.appendChild(script);
  } catch (error) {
    // TODO 에러처리
    console.log(error);
  }
};
