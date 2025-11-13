const d = document;
const $agents = d.querySelector(".agents");
const $fragment = d.createDocumentFragment();
const $courtain = document.querySelector(".courtain");

setTimeout(() => {
  $courtain.classList.add("open");
}, 1600);

const getAgents = async (url) => {
  try {
    let agentsRes = await fetch(url);
    if (!agentsRes.ok) throw { status: res.status, statusText: res.statusText };

    let agent = await agentsRes.json();

    for (const el of agent.data) {
      const $div = d.createElement("div");
      const $img = d.createElement("img");
      const $h3 = d.createElement("h3");
      const $p = d.createElement("p");

      $img.setAttribute("src", el.fullPortrait);
      $h3.textContent = el.displayName;
      $p.textContent = el.description;
      $div.appendChild($img);
      $div.appendChild($h3);
      $div.appendChild($p);
      $fragment.appendChild($div);
    }
  } catch {
    console.log(err);
    let message = err.statusText || "Hubo un error";
    $agents.innerHTML = `Error ${err.status}: ${message}`;
  }
  $agents.appendChild($fragment);
};

getAgents("https://valorant-api.com/v1/agents");
