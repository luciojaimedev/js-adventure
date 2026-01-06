const AGENTS_ENDPOINT = "https://valorant-api.com/v1/agents";

const d = document;
const $agentsContainer = d.querySelector(".agents");
const $courtain = d.querySelector(".courtain");
const $searchInput = d.getElementById("search-input");
const $selectorFilter = d.getElementById("filter");

let agentsArray = [];
let filteredAgents = [];

setTimeout(() => {
  $courtain.classList.add("open");
}, 1500);

const renderInputOptions = (array) => {
  const $fragment = d.createDocumentFragment();
  const $roleFilter = d.getElementById("filter");

  const uniqueRoles = [
    ...new Set(array.map((agent) => agent.role.displayName)),
  ];

  uniqueRoles.forEach((role) => {
    const $filterOption = d.createElement("option");
    $filterOption.value = role;
    $filterOption.textContent = role;
    $fragment.appendChild($filterOption);
  });

  $roleFilter.appendChild($fragment);
};

const getAgents = async (url) => {
  try {
    const agentsRes = await fetch(url);

    if (!agentsRes.ok)
      throw new Error(
        `${agentsRes.statusText ? agentsRes.statusText : "Algo malio sal"} ${
          agentsRes.status
        }`
      );

    const data = await agentsRes.json();

    agentsArray = data.data;
    filteredAgents = agentsArray;

    renderAgents(filteredAgents);
    renderInputOptions(agentsArray);
  } catch (err) {
    console.log(err);
    const message = err.statusText || "Hubo un error";
    $agentsContainer.innerHTML = `Error ${err.status}: ${message}`;
  }
};

const roleFilter = (e) => {
  const role = e.target.value;
  if (!role) filteredAgents = agentsArray;
  else {
    filteredAgents = agentsArray.filter(
      (agent) => agent.role.displayName === role
    );
  }

  renderAgents(filteredAgents);
};

const renderCard = (agent) => {
  const $card = d.createElement("div");
  const $infoSection = d.createElement("div");
  const $img = d.createElement("img");
  const $h3 = d.createElement("h3");
  const $p = d.createElement("p");

  $img.setAttribute("src", agent.fullPortrait);
  $img.setAttribute("style", `background-image: url(${agent.background})`);
  $infoSection.classList.add("card-info");
  $h3.textContent = agent.displayName;
  $p.textContent = agent.description;
  $card.appendChild($img);
  $card.appendChild($infoSection);
  $infoSection.appendChild($h3);
  $infoSection.appendChild($p);

  return $card;
};

const renderAgents = (array) => {
  $agentsContainer.innerHTML = "";

  const $fragment = d.createDocumentFragment();

  array.forEach((agent) => {
    const $card = renderCard(agent);
    $fragment.appendChild($card);
  });

  $agentsContainer.appendChild($fragment);
};

d.addEventListener("input", (e) => {
  if (e.target.matches("#search-input")) {
    const inputValue = e.target.value.trim().toLowerCase();

    const result = filteredAgents.filter((agent) =>
      agent.displayName.toLowerCase().includes(inputValue)
    );

    if (inputValue === "") {
      renderAgents(agentsArray);
    }

    renderAgents(result);
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches("#filter > option")) {
    roleFilter(e, agentsArray);
  }

  if (e.target.matches(".val-logo")) {
    renderAgents(agentsArray);
  }
});

getAgents(AGENTS_ENDPOINT);
