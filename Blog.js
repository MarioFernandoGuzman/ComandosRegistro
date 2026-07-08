import { previewSoloLearnTools, previewStudentsTools, tools } from "../data/toolsData.js";
import ToolCard from "./ToolCard.js";

function SectionTitle(title){
  const $div = document.createElement('div');
  $div.className = 'blog-title';
  $div.innerHTML = `<h1>${title}</h1>`;

  return $div;
}

function CardsContainer(tools){
  const $cardsContainer = document.createElement('div');
  $cardsContainer.className = 'tool-cards-container';
  
  tools.forEach(tool => {
    $cardsContainer.appendChild(ToolCard(tool));
  });
  
  return $cardsContainer;
}

export default function Blog(){
  const $section = document.createElement('section');
  let sectionName = 'blog';
  
  const someStudentTools = tools.filter(tool => previewStudentsTools.includes(tool.title));
  const someSelfLearningTools = tools.filter(tool => previewSoloLearnTools.includes(tool.title));
  
  const $studentTools = CardsContainer(someStudentTools);
  const $selfLearningTools = CardsContainer(someSelfLearningTools);
  
  $section.appendChild(SectionTitle("Herramientas populares de estudiantes"));
  $section.appendChild($studentTools);
  $section.appendChild(SectionTitle("Herramientas populares de autoaprendizaje"));
  $section.appendChild($selfLearningTools);
  
  $section.className = sectionName;
  $section.id = sectionName;

  return $section;
}