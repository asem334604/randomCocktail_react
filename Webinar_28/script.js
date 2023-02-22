// DOM elements, listener, button, etc. - Presentation
(()=>{

    const getRandomBtn = document.getElementById('getRandomCocktail');
    const contentRes = document.getElementById('contentRes');

    const dataRepository = new DataRepository();

    getRandomBtn.addEventListener('click',async ()=>{
        const data = await dataRepository.getRandomCocktail(); // Cocktail
        console.log(data);
        contentRes.textContent = `${data.name} ${data.category} ${data.id} ${data.alc}`;

    });
})();
