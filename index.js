const provinces = {
    'Antananarivo': [-18.8792, 47.5079],
    'Fianarantsoa': [-21.4526, 47.0857],
    'Toamasina': [-18.1492, 49.4023],
    'Mahajanga': [-15.7164, 46.3167],
    'Toliara': [-23.35, 43.6667],
    'Antsiranana': [-12.2833, 49.2833],
    'Tamatave': [-18.1492, 49.4023],
    'Morondava': [-20.2833, 44.3167],
    'Diego-Suarez': [-12.2833, 49.2833],
    'Manakara': [-22.1333, 48.0167],
    'Ihosy': [-22.4, 46.1167],
    'Ambalavao': [-21.8333, 46.9333],
    'Ambanja': [-13.6833, 48.45],
    'Maevatanana': [-16.6667, 46.6333],
    'Ambatondrazaka': [-17.8333, 48.4167],
    'Marovoay': [-16.1, 46.6333],
    'Antsohihy': [-14.8667, 47.9833],
    'Sambava': [-14.2667, 50.1667],
    'Tsiroanomandidy': [-18.7667, 46.0333],
    'Mandritsara': [-15.8333, 48.8333],
    'Manandriana': [-21.6667, 47.3333],
    'Ambositra': [-20.5333, 47.25],
    'Ikongo': [-21.8833, 46.5667],
    'Vangaindrano': [-23.35, 47.6],
    'Vohipeno': [-23.8833, 47.6],
    'Tsihombe': [-25.3, 45.4833],
    'Itampolo': [-24.2833, 44.4833],
    'Ambovombe': [-25.1833, 46.0833],
    'Taolanaro': [-25.0333, 46.9833],
    'Andapa': [-14.6333, 49.6167],
    'Betafo': [-19.8333, 46.8667],
    'Ambato-Boeny': [-16.45, 46.7167],
    'Ankazobe': [-18.3167, 47.1167],
    'Belo-sur-Tsiribihina': [-19.7, 44.55],
    'Vavatenina': [-17.4833, 49.0333],
    'Antalaha': [-14.8833, 50.2833],
    'Vohemar': [-13.3667, 50.0],
    'Farafangana': [-22.8167, 47.8333],
    'Andapa': [-14.6333, 49.6167],
    'Antalaha': [-14.8833, 50.2833],
};


const roadNames = [
    { name: 'RN1', coords: ['Antsiranana', 'Toliary'] },
    { name: 'RN2', coords: ['Toamasina', 'Morondava'] },
    { name: 'RN3', coords: ['Antananarivo', 'Mahajanga'] },
    { name: 'RN4', coords: ['Antananarivo', 'Fianarantsoa'] },
    { name: 'RN5', coords: ['Mahajanga', 'Antsiranana'] },
    { name: 'RN6', coords: ['Antananarivo', 'Toamasina'] },
    { name: 'RN7', coords: ['Antananarivo', 'Toliara'] },
    { name: 'RN8', coords: ['Fianarantsoa', 'Manakara'] },
    { name: 'RN9', coords: ['Ambalavao', 'Ihosy'] },
    { name: 'RN10', coords: ['Antananarivo', 'Antsirabe'] },
    { name: 'RN11', coords: ['Fianarantsoa', 'Mananjary'] },
    { name: 'RN12', coords: ['Morondava', 'Beloha'] },
    { name: 'RN13', coords: ['Toliara', 'Betroka'] },
    { name: 'RN14', coords: ['Moramanga', 'Sambava'] },
    { name: 'RN15', coords: ['Antsohihy', 'Ambanja'] },
    { name: 'RN16', coords: ['Tsiroanomandidy', 'Soavinandriana'] },
    { name: 'RN17', coords: ['Mandritsara', 'Ambilobe'] },
    { name: 'RN18', coords: ['Ambanja', 'Marovoay'] },
    { name: 'RN19', coords: ['Marovoay', 'Maevatanana'] },
    { name: 'RN20', coords: ['Maevatanana', 'Ambatondrazaka'] },
    { name: 'RN21', coords: ['Ambatondrazaka', 'Moramanga'] },
    { name: 'RN22', coords: ['Sambava', 'Vohemar'] },
    { name: 'RN23', coords: ['Ihosy', 'Farafangana'] },
    { name: 'RN24', coords: ['Mananjary', 'Vohipeno'] },
    { name: 'RN25', coords: ['Fandriana', 'Manandriana'] },
    { name: 'RN26', coords: ['Antsirabe', 'Ambositra'] },
    { name: 'RN27', coords: ['Fianarantsoa', 'Ikongo'] },
    { name: 'RN28', coords: ['Ambalavao', 'Ihosy'] },
    { name: 'RN29', coords: ['Ambositra', 'Fandriana'] },
    { name: 'RN30', coords: ['Vangaindrano', 'Farafangana'] },
    { name: 'RN31', coords: ['Ikongo', 'Manakara'] },
    { name: 'RN32', coords: ['Vohipeno', 'Mananjary'] },
    { name: 'RN33', coords: ['Beloha', 'Tsihombe'] },
    { name: 'RN34', coords: ['Betroka', 'Itampolo'] },
    { name: 'RN35', coords: ['Itampolo', 'Ambovombe'] },
    { name: 'RN36', coords: ['Ambovombe', 'Taolanaro'] },
    { name: 'RN37', coords: ['Vohemar', 'Andapa'] },
    { name: 'RN38', coords: ['Antsirabe', 'Betafo'] },
    { name: 'RN39', coords: ['Marovoay', 'Ambato-Boeny'] },
    { name: 'RN40', coords: ['Tsiroanomandidy', 'Ankazobe'] },
    { name: 'RN41', coords: ['Andapa', 'Sambava'] },
    { name: 'RN42', coords: ['Ambato-Boeny', 'Maevatanana'] },
    { name: 'RN43', coords: ['Ankazobe', 'Moramanga'] },
    { name: 'RN44', coords: ['Fianarantsoa', 'Manakara'] },
    { name: 'RN45', coords: ['Morondava', 'Belo-sur-Tsiribihina'] },
    { name: 'RN46', coords: ['Belo-sur-Tsiribihina', 'Tsiroanomandidy'] },
    { name: 'RN47', coords: ['Ambatondrazaka', 'Vavatenina'] },
    { name: 'RN48', coords: ['Sambava', 'Antalaha'] },
    { name: 'RN49', coords: ['Ambilobe', 'Vohemar'] },
    { name: 'RN50', coords: ['Ihosy', 'Farafangana'] },
    { name: 'RN51', coords: ['Mananjary', 'Vohipeno'] },
    { name: 'RN52', coords: ['Antsirabe', 'Ambositra'] },
    { name: 'RN53', coords: ['Fianarantsoa', 'Ikongo'] },
    { name: 'RN54', coords: ['Ambalavao', 'Ihosy'] },
    { name: 'RN55', coords: ['Ambositra', 'Fandriana'] },
    { name: 'RN56', coords: ['Vangaindrano', 'Farafangana'] },
    { name: 'RN57', coords: ['Ikongo', 'Manakara'] },
    { name: 'RN58', coords: ['Vohipeno', 'Mananjary'] },
    { name: 'RN59', coords: ['Beloha', 'Tsihombe'] },
    { name: 'RN60', coords: ['Betroka', 'Itampolo'] },
    { name: 'RN61', coords: ['Itampolo', 'Ambovombe'] },
    { name: 'RN62', coords: ['Ambovombe', 'Taolanaro'] },
    { name: 'RN63', coords: ['Vohemar', 'Andapa'] },
    { name: 'RN64', coords: ['Antsirabe', 'Betafo'] },
    { name: 'RN65', coords: ['Marovoay', 'Ambato-Boeny'] },
    { name: 'RN66', coords: ['Tsiroanomandidy', 'Ankazobe'] },
    { name: 'RN67', coords: ['Andapa', 'Sambava'] },
    { name: 'RN68', coords: ['Ambato-Boeny', 'Maevatanana'] },
    { name: 'RN69', coords: ['Ankazobe', 'Moramanga'] },
    { name: 'RN70', coords: ['Fianarantsoa', 'Manakara'] },
    { name: 'RN71', coords: ['Morondava', 'Belo-sur-Tsiribihina'] },
    { name: 'RN72', coords: ['Belo-sur-Tsiribihina', 'Tsiroanomandidy'] },
    { name: 'RN73', coords: ['Ambatondrazaka', 'Vavatenina'] },
    { name: 'RN74', coords: ['Sambava', 'Antalaha'] },
    { name: 'RN75', coords: ['Ambilobe', 'Vohemar'] },
    { name: 'RN76', coords: ['Sambava', 'Antalaha'] },
    { name: 'RN77', coords: ['Ambilobe', 'Vohemar'] },
];

let map;
let routingControl;

function initialize() {
    map = L.map('map').setView([-18.8792, 47.5079], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    populateDropdowns();
}

function populateDropdowns() {
    const startSelect = document.getElementById('startProvince');
    const endSelect = document.getElementById('endProvince');
    const roadNameSelect = document.getElementById('roadNameSelect');

    // Remplir les menus déroulants pour les provinces de départ et d'arrivée
    Object.keys(provinces).forEach(province => {
        const option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        startSelect.appendChild(option.cloneNode(true)); // Cloner l'option pour l'ajouter à la fin
        endSelect.appendChild(option); // Ajouter l'option à la fin
    });

    // Remplir le menu déroulant pour le nom de la route en éliminant les doublons
    const uniqueRoadNames = [...new Set(roadNames.map(road => road.name))];
    uniqueRoadNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        roadNameSelect.appendChild(option);
    });
}

function findMyRoad() {
    const startProvince = document.getElementById('startProvince').value;
    const endProvince = document.getElementById('endProvince').value;

    if (startProvince && endProvince) {
        if (routingControl) {
            map.removeControl(routingControl);
        }

        const startCoords = provinces[startProvince];
        const endCoords = provinces[endProvince];

        routingControl = L.Routing.control({
            waypoints: [
                L.latLng(startCoords),
                L.latLng(endCoords)
            ],
            routeWhileDragging: true,
            show: false // Ne pas afficher les instructions de navigation
        }).addTo(map);
    } else {
        alert('Please select both a start and end province.');
    }
}


function searchByRoadName() {
    const selectedRoadName = document.getElementById('roadNameSelect').value;

    if (selectedRoadName) {
        const selectedRoad = roadNames.find(road => road.name === selectedRoadName);

        if (selectedRoad) {
            const startCoords = provinces[selectedRoad.coords[0]];
            const endCoords = provinces[selectedRoad.coords[1]];

            if (routingControl) {
                map.removeControl(routingControl);
            }

            routingControl = L.Routing.control({
                waypoints: [
                    L.latLng(startCoords),
                    L.latLng(endCoords)
                ],
                lineOptions: {
                    styles: [{ color: 'green', opacity: 0.8, weight: 5 }]
                },
                show: false // Ne pas afficher les instructions de navigation
            }).addTo(map);

            map.fitBounds([L.latLng(startCoords), L.latLng(endCoords)]);
        } else {
            alert('Selected road name not found.');
        }
    } else {
        alert('Please select a road name to search.');
    }

    return false; // Pour empêcher le rechargement de la page
}



window.onload = initialize;
