function highlightKeywords(template, keywords) {
    return template.replace(/\$\{(\d+)\}/g, (_, index) => {
      const keyword = keywords[Number(index)];
      if (keyword === undefined) return ''; 
      return `<span class="highlight">${keyword}</span>`;
    });
}


const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals 
//for <span class='highlight'>tagged</span> manipulation."
  