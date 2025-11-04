# Site de Mariage - Mathilde & Jean 💍

Site web élégant pour le mariage de Mathilde et Jean le 2 mai 2026.

## 📋 Description

Site web responsive conçu pour présenter toutes les informations importantes du mariage, incluant :
- Présentation des mariés avec photos du couple
- Programme de la journée avec timeline élégante
- Adresses et informations pratiques avec icônes
- Galerie photos avec carrousel automatique
- Informations RSVP et dress code

## 🎨 Caractéristiques

- **Design élégant** avec palette de couleurs champêtre (beige, vert sauge, or)
- **Typographies raffinées** : The Seasons, Cinzel, Arapey, Great Vibes
- **Navigation fluide** avec menu fixe et smooth scroll
- **Carrousel de photos** défilant automatiquement avec 7 photos du couple
- **Timeline interactive** pour le programme du jour J
- **Icônes personnalisées** pour les différentes adresses
- **Responsive** : adapté aux mobiles, tablettes et ordinateurs

## 🚀 Installation

1. Clonez ce dépôt :
```bash
git clone [URL_DU_REPO]
cd site-mariage-mathilde-jean
```

2. Ouvrez le fichier `index.html` dans votre navigateur

Aucune installation supplémentaire n'est requise ! Le site utilise uniquement HTML, CSS et JavaScript vanilla.

## 📁 Structure des fichiers

```
.
├── index.html              # Page principale du site
├── styles.css              # Tous les styles CSS
├── script.js               # JavaScript pour les interactions
├── images/                 # Dossier contenant toutes les images
│   ├── 1.jpg              # Photo couple 1 (carrousel)
│   ├── 2.jpg              # Photo couple 2 (carrousel)
│   ├── 3.jpg              # Photo couple 3 (carrousel)
│   ├── 4.jpg              # Photo couple 4 (carrousel)
│   ├── 5.jpg              # Photo couple 5 (carrousel)
│   ├── 6.jpg              # Photo couple 6 (carrousel)
│   ├── 7.jpg              # Photo couple 7 (carrousel)
│   ├── fleurs_beige.png   # Décoration florale (section accueil)
│   ├── fleurs_blanc.png   # Décoration florale alternative
│   ├── chateau.png        # Icône lieu de cérémonie
│   ├── eglise.png         # Icône hébergements
│   ├── maison.png         # Icône transport
│   └── titre_mathilde_jean.png  # Image titre (optionnel)
├── README.md              # Ce fichier
└── GUIDE_GITHUB.md       # Guide de déploiement sur GitHub
```

## 🎯 Sections du site

1. **Accueil** : Noms des mariés, carrousel de 7 photos, date du mariage
2. **Programme** : Timeline détaillée du jour J (14h-22h)
3. **Adresses** : Lieu de la cérémonie, hébergements, transport
4. **Photos** : Invitation à partager les photos via QR code
5. **Informations** : Dress code, liste de mariage, RSVP

## 🖼️ Images

Toutes les images sont stockées localement dans le dossier `images/` :

### Photos du carrousel (1.jpg à 7.jpg)
- 7 photos du couple en noir et blanc
- Format optimal : JPG
- Résolution recommandée : 800x800px minimum

### Décorations florales
- **fleurs_beige.png** : Décoration principale (utilisée actuellement)
- **fleurs_blanc.png** : Alternative disponible

### Icônes des adresses
- **chateau.png** : Pour le lieu de la cérémonie
- **eglise.png** : Pour les hébergements
- **maison.png** : Pour le transport

### Personnalisation des images
Pour remplacer les images :
1. Placez vos nouvelles images dans le dossier `images/`
2. Gardez les mêmes noms de fichiers OU
3. Modifiez les références dans `index.html` (lignes 36-48 pour le carrousel)

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (avec Flexbox et animations)
- JavaScript vanilla (ES6)
- Google Fonts (The Seasons, Cinzel, Arapey, Great Vibes)

## 📱 Responsive

Le site est entièrement responsive avec des points de rupture à 768px pour optimiser l'affichage sur :
- 📱 Smartphones
- 📱 Tablettes
- 💻 Ordinateurs de bureau

## 🎨 Palette de couleurs

- `#f2ebe1` - Beige clair (fond principal)
- `#c1a37f` - Or/Beige doré (accents)
- `#6a714b` - Vert sauge (texte principal)
- `#ffffff` - Blanc (sections alternées)

## ✨ Fonctionnalités JavaScript

- **Carrousel automatique** : Défilement infini et fluide des 7 photos
- **Smooth scroll** : Navigation douce entre les sections
- **Menu fixe** : Reste accessible en permanence

## 📝 Personnalisation

Pour personnaliser ce site pour votre propre mariage :

### Textes et dates
1. Ouvrez `index.html`
2. Modifiez les noms "Mathilde" et "Jean" (lignes 27-31)
3. Changez la date "02 . 05 . 2026" (ligne 65)
4. Adaptez les heures du programme (section programme)
5. Modifiez les adresses (section adresses)

### Images
1. Remplacez les photos 1.jpg à 7.jpg par vos propres photos
2. Format recommandé : Carrés (1:1), 800x800px minimum
3. Gardez les mêmes noms ou modifiez les références dans le HTML

### Couleurs
1. Ouvrez `styles.css`
2. Recherchez les codes couleurs :
   - `#f2ebe1` (beige)
   - `#c1a37f` (or)
   - `#6a714b` (vert sauge)
3. Remplacez-les par vos propres couleurs

## 🌐 Déploiement

Le site peut être déployé gratuitement sur :
- **GitHub Pages** (recommandé - voir GUIDE_GITHUB.md)
- **Netlify**
- **Vercel**
- Tout hébergeur web standard

### Déploiement rapide sur GitHub Pages

1. Créez un compte sur [github.com](https://github.com)
2. Créez un nouveau dépôt
3. Poussez tous les fichiers (y compris le dossier `images/`)
4. Activez GitHub Pages dans Settings > Pages
5. Votre site sera en ligne à `https://[username].github.io/[repo-name]`

Voir le fichier **GUIDE_GITHUB.md** pour des instructions détaillées.

## 📧 Contact

Pour toute question concernant ce site :
- Email : mathilde.jean.mariage@gmail.com

## ⚠️ Important

- **Ne pas supprimer** le dossier `images/` - il contient toutes les images du site
- Les images sont nécessaires pour le bon fonctionnement du site
- Assurez-vous que tous les fichiers (HTML, CSS, JS et dossier images) sont bien uploadés ensemble sur votre hébergeur

## 📄 Licence

Ce projet est libre d'utilisation pour des mariages personnels. 

---

**Fait avec ❤️ pour Mathilde & Jean**

*Dernière mise à jour : 4 novembre 2025*
