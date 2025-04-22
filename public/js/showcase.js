/**
 * Wuthering Waves API - Showcase JavaScript
 * Handles the interactive showcase features
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize showcase cards
    initializeShowcase();
    
    // Add event listeners for card interactions
    const cards = document.querySelectorAll('.showcase-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            expandCard(this);
        });
    });
    
    // Close expanded card when clicking outside
    document.addEventListener('click', function(event) {
        const expandedCard = document.querySelector('.showcase-card.expanded');
        if (expandedCard && !expandedCard.contains(event.target)) {
            collapseCard(expandedCard);
        }
    });
});

/**
 * Initialize showcase with character data
 */
function initializeShowcase() {
    const showcaseContainer = document.getElementById('showcase-container');
    if (!showcaseContainer) return;
    
    // Character data
    const characters = [
        {
            id: 'cantarella',
            name: 'Cantarella',
            image: '/images/cantarella_character.jpeg',
            element: 'Electro',
            weapon: 'Pistol',
            rarity: 5,
            description: 'A mysterious woman with electro abilities who wields a pistol with deadly precision.',
            stats: {
                attack: 845,
                defense: 520,
                hp: 12450
            }
        },
        {
            id: 'camellya',
            name: 'Camellya',
            image: '/images/camellya_character.jpeg',
            element: 'Cryo',
            weapon: 'Blade',
            rarity: 5,
            description: 'A skilled swordswoman with cryo powers who can freeze enemies with a single strike.',
            stats: {
                attack: 792,
                defense: 580,
                hp: 13200
            }
        },
        {
            id: 'shorekeeper',
            name: 'Shorekeeper',
            image: '/images/shorekeeper_character.webp',
            element: 'Hydro',
            weapon: 'Resonator',
            rarity: 5,
            description: 'Guardian of the shores with powerful hydro abilities and control over water elements.',
            stats: {
                attack: 810,
                defense: 550,
                hp: 12800
            }
        }
    ];
    
    // Generate HTML for each character card
    characters.forEach(character => {
        const cardHTML = createCardHTML(character);
        showcaseContainer.innerHTML += cardHTML;
    });
}

/**
 * Create HTML for a character card
 * @param {Object} character - Character data
 * @returns {string} HTML string for the card
 */
function createCardHTML(character) {
    const stars = '★'.repeat(character.rarity);
    
    return `
        <div class="showcase-card" data-id="${character.id}">
            <div class="card-front">
                <div class="card-image">
                    <img src="${character.image}" alt="${character.name}">
                    <div class="card-rarity">${stars}</div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${character.name}</h3>
                    <div class="card-element">${character.element}</div>
                    <div class="card-weapon">${character.weapon}</div>
                </div>
            </div>
            <div class="card-back">
                <h3 class="card-title">${character.name}</h3>
                <div class="card-description">${character.description}</div>
                <div class="card-stats">
                    <div class="card-stat">
                        <div class="card-stat-value">${character.stats.attack}</div>
                        <div class="card-stat-label">ATK</div>
                    </div>
                    <div class="card-stat">
                        <div class="card-stat-value">${character.stats.defense}</div>
                        <div class="card-stat-label">DEF</div>
                    </div>
                    <div class="card-stat">
                        <div class="card-stat-value">${character.stats.hp}</div>
                        <div class="card-stat-label">HP</div>
                    </div>
                </div>
                <div class="card-api-link">
                    <a href="/characters/${character.id}" class="btn btn-small">View API Data</a>
                </div>
            </div>
        </div>
    `;
}

/**
 * Expand a card to show more details
 * @param {HTMLElement} card - The card element to expand
 */
function expandCard(card) {
    // First collapse any expanded card
    const expandedCard = document.querySelector('.showcase-card.expanded');
    if (expandedCard && expandedCard !== card) {
        collapseCard(expandedCard);
    }
    
    // Toggle expanded state
    card.classList.toggle('expanded');
    
    // Animate card flip
    if (card.classList.contains('expanded')) {
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }
}

/**
 * Collapse an expanded card
 * @param {HTMLElement} card - The card element to collapse
 */
function collapseCard(card) {
    card.classList.remove('expanded', 'flipped');
}
