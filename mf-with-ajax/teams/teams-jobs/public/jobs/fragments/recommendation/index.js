fetch("http://localhost:3002/jobs/api/recommendations.json")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(
      "#jobs-fragment-recommendation .recommendations"
    ).innerHTML = data
      .map((item) => `<div><a href="${item.url}">${item.name}</a></div>`)
      .join("");
  });
