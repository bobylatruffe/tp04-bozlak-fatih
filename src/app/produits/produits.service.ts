export interface ProduitsModel {
  typeCategorie: string,
  contenuCategorieProduits: {
    id: number,
    titre: string,
    description: string,
  }[]
}

export interface ProduitModel {
  id: number,
  titre: string,
  description: string,
}

export class ProduitsService {
  produits: ProduitsModel[] = [
    {
      typeCategorie: "Consoles & Jeux Vidéo",
      contenuCategorieProduits: [
        {
          "id": 1,
          "titre": "PlayStation 5",
          "description": "Console de jeu de nouvelle génération avec des graphismes en ultra-haute définition et un chargement ultra-rapide."
        },
        {
          "id": 2,
          "titre": "Xbox Series X",
          "description": "Console de jeu puissante offrant des performances de haute qualité et une compatibilité étendue avec les anciens jeux."
        },
        {
          "id": 3,
          "titre": "Nintendo Switch",
          "description": "Console de jeu hybride qui peut être utilisée comme une console de salon ou comme une console portable."
        },
        {
          "id": 4,
          "titre": "Cyberpunk 2077 pour PS5",
          "description": "Jeu d'action-aventure en monde ouvert avec une narration riche situé dans un futur dystopique."
        },
        {
          "id": 5,
          "titre": "The Legend of Zelda: Breath of the Wild",
          "description": "Jeu d'aventure en monde ouvert pour Nintendo Switch offrant une liberté d'exploration sans précédent."
        },
        {
          "id": 6,
          "titre": "Xbox Game Pass",
          "description": "Abonnement offrant un accès illimité à une vaste bibliothèque de jeux sur Xbox et PC."
        },
        {
          "id": 7,
          "titre": "Manette sans fil DualSense pour PS5",
          "description": "Manette révolutionnaire avec retour haptique et gâchettes adaptatives pour une expérience immersive."
        },
        {
          "id": 8,
          "titre": "Halo Infinite pour Xbox",
          "description": "Le dernier opus de la série Halo, offrant une expérience de tir à la première personne épique."
        },
        {
          "id": 9,
          "titre": "Carte PSN",
          "description": "Carte prépayée permettant d'ajouter des fonds au porte-monnaie PlayStation Store."
        },
        {
          "id": 10,
          "titre": "Casque de réalité virtuelle Oculus Quest 2",
          "description": "Casque de VR autonome offrant une expérience immersive dans les jeux et les applications VR."
        }
      ]
    },
    {
      typeCategorie: "High-Tech",
      contenuCategorieProduits: [
        {
          id: 11,
          titre: "Smartphone haut de gamme",
          description: "Un smartphone dernier cri avec un écran OLED et des fonctionnalités de pointe."
        },
        {
          id: 12,
          titre: "Laptop ultrafin",
          description: "Ordinateur portable léger avec une autonomie de batterie exceptionnelle et un écran haute résolution."
        },
        {
          id: 13,
          titre: "Casque audio sans fil",
          description: "Casque avec réduction de bruit et qualité sonore supérieure pour une expérience audio immersive."
        },
        {
          id: 14,
          titre: "Montre connectée",
          description: "Montre intelligente avec suivi de la santé, notifications et résistance à l'eau."
        },
        {
          id: 15,
          titre: "Drone avec caméra HD",
          description: "Drone équipé d'une caméra haute définition, parfait pour la photographie aérienne et les vidéos."
        }
      ]
    },
    {
      typeCategorie: "Jardin & Bricolage",
      contenuCategorieProduits: [
        {
          id: 21,
          titre: "Tronçonneuse électrique",
          description: "Une tronçonneuse robuste et efficace, idéale pour tous vos travaux de jardinage."
        },
        {
          id: 22,
          titre: "Kit d'outils de jardinage",
          description: "Ensemble complet d'outils pour l'entretien du jardin, incluant pelle, râteau et sécateurs."
        },
        {
          id: 23,
          titre: "Tondeuse à gazon",
          description: "Tondeuse puissante et facile à utiliser pour un entretien impeccable du gazon."
        },
        {
          id: 24,
          titre: "Nettoyeur haute pression",
          description: "Appareil idéal pour nettoyer les surfaces extérieures, les véhicules et les outils de jardin."
        },
        {
          id: 25,
          titre: "Banc de jardin",
          description: "Banc de jardin élégant et confortable, parfait pour se détendre à l'extérieur."
        }
      ]
    },
    {
      typeCategorie: "Auto-Moto",
      contenuCategorieProduits: [
        {
          id: 31,
          titre: "Casque de moto intégral",
          description: "Casque de moto haute sécurité, confortable et stylé pour tous les motards."
        },
        {
          id: 32,
          titre: "GPS pour voiture",
          description: "Système de navigation GPS avec mise à jour des cartes en temps réel et alertes de circulation."
        },
        {
          id: 33,
          titre: "Kit de nettoyage auto",
          description: "Ensemble complet pour le nettoyage intérieur et extérieur de votre voiture."
        },
        {
          id: 34,
          titre: "Chargeur de batterie pour moto",
          description: "Chargeur de batterie efficace et fiable pour maintenir votre moto prête à l'emploi."
        },
        {
          id: 35,
          titre: "Housse de protection pour voiture",
          description: "Housse résistante aux intempéries pour protéger votre voiture des éléments extérieurs."
        }
      ]
    }
  ];

  getProduits(typeCategorie: string): ProduitModel[] {
    return (this.produits.filter((produits) => produits.typeCategorie === typeCategorie))[0]["contenuCategorieProduits"];
  }
}
