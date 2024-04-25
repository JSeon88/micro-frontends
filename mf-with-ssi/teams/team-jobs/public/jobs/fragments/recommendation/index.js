fetch("/jobs/api/recommendations.json")
  .then((res) => res.json())
  .then((recommendations) => {
    document.querySelector(
      "#jobs-fragment-recommendation .recommendations"
    ).innerHTML = recommendations
      .map(
        ({ name, url }) =>
          `<div><a href="${url}" target="_blank">${name}</a></div>`
      )
      .join("");
  });
