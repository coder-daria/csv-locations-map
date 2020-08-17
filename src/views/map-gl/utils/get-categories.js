let categoriesStyle = {};

function generateColor() {
  return `#${Math.random().toString(16).substr(-6)}`;
}

function getCategories(file, categoryColumnIndex) {
  file.data.forEach(row => {
    const categoryName = row[categoryColumnIndex].toLowerCase();
    const isCategoryDuplicated = categoriesStyle[categoryName];
  
    if(!isCategoryDuplicated) {
      categoriesStyle[categoryName] = generateColor();
    }
  
  });

  return categoriesStyle;
};

export default getCategories;
