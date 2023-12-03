export interface CataloguesModel {
  id: number,
  titre: string,
  description: string,
  imgPath: string
}

export class CataloguesService {
  cataloguesItems: CataloguesModel[] = [
    {
      "id": 1,
      "titre": "Consoles & Jeux Vidéo",
      "description": "Produits liés au gaming, incluant diverses consoles de jeux, jeux vidéo pour différentes plateformes, et accessoires de gaming comme les manettes et les casques.",
      "imgPath": "VideoGame.png"
    },
    {
      "id": 2,
      "titre": "High-Tech",
      "description": "Articles technologiques modernes tels que smartphones, ordinateurs portables, montres intelligentes, écouteurs et appareils photo numériques.",
      "imgPath": "HighTech.png"
    },
    {
      "id": 3,
      "titre": "Jardin & Bricolage",
      "description": "Outils et équipements pour le jardinage et le bricolage, incluant des outils de jardin, plantes, meubles d'extérieur, et outils pour divers projets de bricolage.",
      "imgPath": "GardenDiy.png"
    },
    {
      "id": 4,
      "titre": "Auto-Moto",
      "description": "Accessoires et pièces pour automobiles et motos, y compris des pièces de rechange, outils de maintenance, accessoires de tuning, et équipements de sécurité comme les casques.",
      "imgPath": "AutoMoto.png"
    }
  ];

  getCataloguesItems(): CataloguesModel[] {
    return this.cataloguesItems;
  }
}
