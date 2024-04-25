class HomeComponent extends HTMLElement {
  constructor() {
    super();

    // shadowDom 생성
    this.attachShadow({ mode: "open" });

    // 커스텀 템플릿 생성
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        h2 {
          color: blue;
        }
      </style>
      <h2>Team Home</h2>
      <button id="btn">버튼</button>
    `;

    // 템플릿 재활용
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // this.shadowRoot.querySelector("#btn").addEventListener("click", () => {
    //   alert("버튼 클릭...!!");
    // });

    this.shadowRoot
      .querySelector("#btn")
      .addEventListener("click", this.onClick);
  }

  onClick() {
    alert("버튼 클릭...!!");
  }
}

// 커스텀 엘레먼트 정의
customElements.define("home-component", HomeComponent);
