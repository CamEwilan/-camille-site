# Portfolio Camille Villat — brief de passation

Ce document résume l'état du site au 19 avril 2026. À lire avant toute modification.

---

## 1. Contexte

- Portfolio statique en HTML / CSS / JS vanilla, sans build.
- Auteure : Camille Villat (M2 Gestion de l'information et médiation documentaire).
- Objectif : portfolio professionnel à destination de recruteurs (bibliothèque / librairie / médiation). Doit paraître **incarné, professionnel, crédible** — pas un effet « template IA ».
- Serveur local pour tester : `python3 -m http.server 8000` à la racine du dossier `camille-site/`.

## 2. Arborescence

```
camille-site/
├── index.html                 Accueil (intro longue + 3 axes + preuves + citation + contact)
├── portfolio.html             Grille des 6 projets
├── mon-parcours.html          Parcours narratif
├── competences.html           6 cartes A-F avec "En savoir plus"
├── competence-a.html … competence-f.html  6 pages détaillées (savoirs / savoir-faire / savoir-être)
├── bilan-reflexif.html        Bilan réflexif
├── cv.html                    Page CV
├── projet-emi.html            Projet 01 — EMI Florimont (dossiers péda, supports 3e, quiz feedback)
├── projet-librerit.html       Projet 02 — Librerit (Reel Instagram intégré)
├── projet-bdfugue.html        Projet 03 — BDFugue Nice (Reel Instagram intégré)
├── projet-cdi.html            Projet 04 — CDI Florimont
├── projet-les-livrees.html    Projet 05 — Les Livrées / Wagon-lit
├── projet-ambd.html           Projet 06 — AMBD
├── assets/
│   ├── styles.css             Feuille de style unique (tout est ici)
│   └── script.js              Nav active, lightbox galerie, formulaire mailto
├── images/                    Images classées par projet (accueil/, librerit/, bdfugue/, florimont-cdi/, florimont-emi/, les-livrees/, ambd/)
├── downloads/                 PDFs proposés au téléchargement
└── LISEZ-MOI.txt
```

## 3. Design system (CSS)

Variables dans `:root` (fichier `assets/styles.css`) :

- `--bg: #f5efe7` (beige papier), `--bg-soft: #fbf8f4`, `--paper: #fffdf9`
- `--ink: #2f2925`, `--muted: #6e645b`
- `--accent: #8c6b4f`, `--accent-dark: #6f533d`, `--line: #d9cfc3`
- `--radius: 24px`, `--radius-sm: 16px`
- Typo : titres en **Georgia serif**, texte en **Inter sans-serif**
- Conteneur : `--container: min(1180px, calc(100vw - 2rem))`

Classes clés réutilisables :
- `.container`, `.page`, `.page-title`, `.section`, `.grid-2`, `.grid-3`
- Cartes : `.content-card`, `.hero-card`, `.quote-card`, `.cta-card`, `.contact-card`
- Boutons : `.btn.primary`, `.btn.secondary`, `.btn.small`
- Galerie : `.gallery`, `.gallery.wide`, `.gallery.full` (3 col par défaut, lightbox via JS)
- Liste de fichiers : `.file-list` + `.file-item` + `.ico` + `.txt`
- Cartes compétence : `.dom-card`, `.dom-letter`, `.chip-list` / `.chip`, `.dom-more`
- Pages compétence détaillées : `.skill-page`, `.skill-letter`, `.skill-block`, `.skill-proj-links`
- Accueil : `.axes-grid` / `.axis-card` (3 axes), `.proofs-block` / `.proofs-grid` / `.proof-card` / `.proof-ext-links`
- Reels Instagram : `.reel-wrap`, `.reel-caption`

Responsive : breakpoints à 980px et 640px, à respecter si tu ajoutes des sections.

## 4. Conventions

- **Langue** : français, typographie fine (`&nbsp;` avant `: ; ? !`, `&mdash;`, guillemets `«&nbsp;...&nbsp;»`).
- **Ton** : professionnel mais incarné. Pas de phrases génériques « j'ai eu l'opportunité de... », pas de superlatifs creux.
- **Header** : identique sur toutes les pages (6 liens de nav + brand).
- **Footer** : identique sur toutes les pages. Ligne exacte :
  `France &bull; Librairie, bibliothèque et médiation documentaire`
- **Liens externes** : toujours `target="_blank" rel="noreferrer"`.
- **Pas d'images sur les pages compétence détaillées** (consigne auteure).
- **Sources externes utilisées** :
  - LinkedIn : `https://www.linkedin.com/in/camille-villat-9b1a19128/`
  - Linktree : `https://linktr.ee/CamEwilan`
  - Instagram : `https://www.instagram.com/camewilan_/`
  - Librerit Reel : `https://www.instagram.com/reel/DVd-FfMCKCv/`
  - BDFugue Reel : `https://www.instagram.com/reel/C84mG8CK9TN/`
  - Sélection Camille Librerit : `https://www.lalibrerit.ch/mot-du-vendeur/camille-2000/mois=/an=/base=`
  - Profil BDFugue : `https://www.bdfugue.com/gamification/profile/view/id/205531`

## 5. Fichiers téléchargeables actuels (`downloads/`)

- `CV_VILLAT_CAMILLE.pdf`
- `dossier-pedagogique-3e-ligne-editoriale.pdf`
- `dossier-pedagogique-4e-information.pdf`
- `projet-emi-pierre-wazem.pdf` (PDF reconstruit : cover + présentation Wazem + photo atelier + dossier péda + script)
- `mediation-lecture-jaspage-coups-de-coeur.pdf`
- `trame-intervention-wagon-lit.pdf`
- `point-actu-3eme-diaporama.pdf` (diaporama 3e, version PDF du PowerPoint de classe)
- `retour-quiz-semaine-presse-medias.pdf` (synthèse du quiz de feedback)

## 6. État actuel (complété)

- Structure complète 18 pages.
- Photo d'accueil : `images/accueil/camille-en-action.jpg` (Camille en médiation Librerit).
- Deux Reels Instagram intégrés (Librerit + BDFugue) via `blockquote.instagram-media` + `embed.js`.
- Page d'accueil refondue : intro 4 paragraphes, section **3 axes**, **grille de 6 cartes de preuves** (vidéos, supports, médiation, CDI, comptes pro).
- Page EMI : ajout des sections **Supports pédagogiques 3e** (`#supports-3e`) et **Quiz feedback** (`#quiz-feedback`).
- Page CDI : doublon `cdi-espace-travail.jpeg` retiré de la galerie.
- Page Compétences : textes A-F réécrits, ligne « Illustré par » rendue cliquable, bouton `.dom-more` → `competence-x.html`.
- 6 pages détaillées créées avec structure : intro + Savoirs + Savoir-faire + Savoir-être + Illustré par / projets associés (+ boutons vers projets).
- Footer uniformisé sur les 18 pages.
- URL LinkedIn correcte (`camille-villat-9b1a19128`) partout.

## 7. Points à garder en tête pour la suite

- **PowerPoint natif 3e** : le fichier `.pptx` n'a pas encore été fourni. Actuellement seul le PDF du diaporama est lié. Si Camille fournit le `.pptx`, le poser dans `downloads/` et ajouter un `<a class="file-item" ...>` dans la section `#supports-3e` de `projet-emi.html`.
- **Lien Forms du quiz** : Camille peut vouloir ajouter l'URL du formulaire Google Forms à côté du PDF de synthèse dans la section `#quiz-feedback`.
- **Images des pages projets** : la Librerit a 6 vignettes, BDFugue 6, CDI 4, EMI 2 (affiche + mise en place). Ne pas rajouter d'images basse qualité ou redondantes.
- **Tone guard** : Camille veut éviter l'effet « IA » — quand tu reformules, préfère des phrases courtes, concrètes, avec un verbe d'action. Pas de « en définitive », « il convient de », « fort de ».
- **Cohérence A/B** : quand tu modifies le footer ou le header, applique sur les 18 pages en même temps (un simple `find/replace` sur le contenu exact suffit).
- **Pas de backend** : formulaire contact = `mailto:` (cf. `data-contact-form` géré dans `script.js`).

## 8. Commandes utiles

```bash
# Servir le site
cd camille-site && python3 -m http.server 8000

# Vérifier qu'aucune page ne référence encore l'ancien footer
grep -r "Médiation Documentaire : Libraire" .

# Lister les pages qui manquent une ancre / un lien
grep -r "href=\"#\"" .

# Zipper le site pour livrer
cd .. && zip -r portfolio-camille-villat.zip camille-site -x "*.DS_Store"
```

## 9. Tâches potentielles à donner à Codex

À préciser selon besoin :
- « Intègre le PowerPoint natif `xxx.pptx` dans la section `#supports-3e` de `projet-emi.html`, avec une description courte. »
- « Ajoute l'URL du Google Forms dans la section `#quiz-feedback` de `projet-emi.html` à côté du PDF de synthèse. »
- « Crée une page `projet-wazem.html` dédiée au projet Pierre Wazem, avec galerie, dossier péda, script, et ajoute-la dans `portfolio.html`. »
- « Relis toutes les pages projet et uniformise le ton : phrases actives, pas de superlatifs creux, pas de jargon inutile. »
- « Ajoute un menu mobile hamburger pour les écrans < 640px. »
- « Ajoute un fil d'Ariane en haut de chaque page projet et compétence. »

---

*Dernière mise à jour : 19 avril 2026.*
