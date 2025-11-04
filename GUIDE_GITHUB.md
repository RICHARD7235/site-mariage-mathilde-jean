# Guide rapide : Déployer sur GitHub

## Étape 1 : Créer un dépôt GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton "+" en haut à droite et sélectionnez "New repository"
3. Nommez votre dépôt (ex: `mariage-mathilde-jean`)
4. Laissez-le en **Public** si vous voulez utiliser GitHub Pages gratuitement
5. **NE COCHEZ PAS** "Initialize with README" (vous en avez déjà un)
6. Cliquez sur "Create repository"

## Étape 2 : Pousser vos fichiers sur GitHub

Ouvrez un terminal dans le dossier contenant vos fichiers et exécutez :

```bash
# Initialiser le dépôt git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Premier commit - Site de mariage Mathilde & Jean"

# Ajouter le dépôt distant (remplacez USERNAME et REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Pousser vers GitHub
git branch -M main
git push -u origin main
```

## Étape 3 : Activer GitHub Pages

1. Sur votre dépôt GitHub, allez dans **Settings** (Paramètres)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous "Source", sélectionnez :
   - Branch: `main`
   - Folder: `/ (root)`
4. Cliquez sur **Save**
5. Attendez quelques minutes

Votre site sera accessible à : `https://USERNAME.github.io/REPO/`

## Étape 4 : Mettre à jour votre site

Pour modifier votre site après la mise en ligne :

```bash
# Après avoir modifié vos fichiers
git add .
git commit -m "Description de vos modifications"
git push
```

Les modifications apparaîtront sur votre site en quelques minutes.

## Conseils

- **Testez localement** : Ouvrez `index.html` dans votre navigateur avant de pousser
- **Vérifiez les liens** : Assurez-vous que tous les liens d'images fonctionnent
- **Personnalisez l'URL** : Vous pouvez acheter un nom de domaine et le lier à GitHub Pages

## Besoin d'aide ?

- Documentation GitHub Pages : https://docs.github.com/pages
- Guide Git : https://git-scm.com/book/fr/v2

---

Bon courage ! 🚀
