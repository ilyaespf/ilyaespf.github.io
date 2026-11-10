(function () {
  var groupe = document.querySelector(".filtres");
  if (!groupe) return;
  groupe.hidden = false;
  var boutons = groupe.querySelectorAll("button");
  var lignes = document.querySelectorAll(".articles--complet .article-ligne");
  groupe.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    var axe = b.dataset.axe;
    boutons.forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
    lignes.forEach(function (l) { l.hidden = axe !== "tous" && l.dataset.axe !== axe; });
  });
})();
