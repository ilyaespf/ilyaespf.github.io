// Filtre simple : des boutons [data-valeur] dans [data-filtre-groupe]
// masquent les éléments [data-filtre-item] dont la valeur ne correspond pas.
(function () {
  var groupe = document.querySelector("[data-filtre-groupe]");
  if (!groupe) return;
  groupe.hidden = false;
  var aide = document.querySelector(".axes__aide");
  if (aide) aide.hidden = false;

  var boutons = groupe.querySelectorAll("button[data-valeur]");
  var items = document.querySelectorAll("[data-filtre-item]");
  var mois = document.querySelectorAll("[data-filtre-mois]");
  var aBoutonTous = !!groupe.querySelector('[data-valeur="tous"]');

  function appliquer(valeur) {
    boutons.forEach(function (b) {
      var actif = valeur === "tous" ? b.dataset.valeur === "tous" : b.dataset.valeur === valeur;
      b.setAttribute("aria-pressed", String(actif));
    });
    groupe.classList.toggle("filtre-actif", valeur !== "tous");
    items.forEach(function (it) {
      it.hidden = valeur !== "tous" && it.dataset.valeur !== valeur;
    });
    mois.forEach(function (m) {
      m.hidden = !m.querySelector("[data-filtre-item]:not([hidden])");
    });
  }

  groupe.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-valeur]");
    if (!b) return;
    var v = b.dataset.valeur;
    if (!aBoutonTous && b.getAttribute("aria-pressed") === "true") v = "tous";
    appliquer(v);
  });

  var depart = new URLSearchParams(location.search).get("cat");
  if (depart && groupe.querySelector('[data-valeur="' + depart + '"]')) appliquer(depart);
})();
