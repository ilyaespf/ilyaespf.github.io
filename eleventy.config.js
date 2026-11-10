import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("src/assets");

  // Réalisations, triées par ordre puis titre
  eleventyConfig.addCollection("realisations", (api) =>
    api
      .getFilteredByGlob("src/realisations/*.md")
      .filter((p) => p.data.publie !== false)
      .sort((a, b) => (a.data.ordre ?? 99) - (b.data.ordre ?? 99))
  );

  // Articles de veille, du plus récent au plus ancien
  eleventyConfig.addCollection("veille", (api) =>
    api
      .getFilteredByGlob("src/veille/articles/*.md")
      .filter((p) => p.data.publie !== false)
      .sort((a, b) => b.date - a.date)
  );

  const fr = (opts) => (d) =>
    new Intl.DateTimeFormat("fr-FR", { timeZone: "Europe/Paris", ...opts }).format(new Date(d));
  eleventyConfig.addFilter("dateLongue", fr({ day: "numeric", month: "long", year: "numeric" }));
  eleventyConfig.addFilter("dateCourte", fr({ day: "2-digit", month: "2-digit", year: "numeric" }));
  eleventyConfig.addFilter("dateIso", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("parCategorie", (items, cat) => items.filter((i) => i.data.categorie === cat));
  eleventyConfig.addFilter("parAxe", (items, axe) => items.filter((i) => String(i.data.axe) === String(axe)));
  eleventyConfig.addFilter("limite", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("trouve", (arr, champ, valeur) =>
    (arr || []).find((x) => String(x[champ]) === String(valeur))
  );
  // Regroupe des articles par mois : [{ mois: "novembre 2026", items: [...] }]
  const moisAn = fr({ month: "long", year: "numeric" });
  eleventyConfig.addFilter("parMois", (items) => {
    const groupes = [];
    for (const it of items) {
      const m = moisAn(it.date);
      const dernier = groupes[groupes.length - 1];
      if (dernier && dernier.mois === m) dernier.items.push(it);
      else groupes.push({ mois: m, items: [it] });
    }
    return groupes;
  });
  eleventyConfig.addFilter("jourMois", fr({ day: "numeric", month: "short" }));
  eleventyConfig.addFilter("compte", (items, key) =>
    items.filter((i) => (i.data.competences || []).includes(key)).length
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
