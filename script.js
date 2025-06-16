// Recipe data
const featuredRecipes = [
    {
        title: 'Millet Pulao',
        description: 'A flavorful and nutritious one-pot meal made with mixed vegetables and aromatic spices.',
        image: '/images/Millet Pulao.jpeg',
        time: '30 mins',
        difficulty: 'Easy',
        href: 'https://youtu.be/eCDkjrKXsrk?si=Feg0mXr5msi53DQM'
    },
    {
        title: 'Ragi Cookies',
        description: 'Healthy and delicious cookies made with finger millet flour and natural sweeteners.',
        image: '/images/Ragi Cookies.jpeg',
        time: '45 mins',
        difficulty: 'Medium',
        href: 'https://youtu.be/VRqnBjhxd0I?si=vI5OhHMT_IkIZVPa'
    },
    {
        title: 'Jowar Upma',
        description: 'A wholesome breakfast dish made with sorghum and fresh vegetables.',
        image: '/images/Jowar Upma2.jpeg',
        time: '25 mins',
        difficulty: 'Easy',
        href: 'https://youtu.be/dFBpLD_tKNY?si=fHu--USWvUjdUI5l'
    }
];

// Function to create recipe cards
function createRecipeCards() {
    const recipeGrid = document.getElementById('recipeGrid');
    
    featuredRecipes.forEach(recipe => {
        const card = document.createElement('a');
        card.href = recipe.href;
        card.className = 'recipe-card';
        
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-card-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span>${recipe.time}</span>
                    <span>•</span>
                    <span>${recipe.difficulty}</span>
                </div>
            </div>
        `;
        
        recipeGrid.appendChild(card);
    });
}

// Update footer year
function updateFooterYear() {
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createRecipeCards();
    updateFooterYear();
});