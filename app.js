/**
 * Audit Data: Les 20 questions séparées en 4 catégories.
 */
const donneesAudit = [
  {
      titre: "Étape 1 : Qualité et Processus",
      questions: [
          {
              identifiant: "q1",
              texte: "Selon vous, comment jugez-vous la gestion des reprises, corrections ou réimpressions dans votre production ?",
              options: [
                  { lettre: "A", texte: "Les reprises sont fréquentes, gérées dans l'urgence et désorganisent la production sans analyse financière.", valeur: 1 },
                  { lettre: "B", texte: "Les reprises sont connues mais acceptées comme normales, sans réelle action pour en réduire l'impact.", valeur: 2 },
                  { lettre: "C", texte: "Les reprises sont limitées, analysées et généralement anticipées, avec un impact maîtrisé.", valeur: 3 },
                  { lettre: "D", texte: "Les reprises sont rares, anticipées et utilisées comme levier d'amélioration continue.", valeur: 4 }
              ]
          },
          {
              identifiant: "q2",
              texte: "Selon votre expérience, comment évaluez-vous la qualité des fichiers transmis par vos clients avant production ?",
              options: [
                  { lettre: "A", texte: "Les fichiers sont souvent non conformes, générant corrections, retards et pertes de temps importantes.", valeur: 1 },
                  { lettre: "B", texte: "Les fichiers sont exploitables mais nécessitent régulièrement des ajustements chronophages.", valeur: 2 },
                  { lettre: "C", texte: "Les fichiers sont majoritairement conformes, avec quelques corrections maîtrisées.", valeur: 3 },
                  { lettre: "D", texte: "Les fichiers sont conformes dès l'entrée, sécurisant délais, coûts et marges.", valeur: 4 }
              ]
          },
          {
              identifiant: "q3",
              texte: "Comment décririez-vous le niveau de standardisation réel de vos processus de production ?",
              options: [
                  { lettre: "A", texte: "Les méthodes varient selon les personnes et les urgences, créant de l'inefficacité.", valeur: 1 },
                  { lettre: "B", texte: "Certaines règles existent mais sont appliquées de manière inégale.", valeur: 2 },
                  { lettre: "C", texte: "Les processus sont clairs et appliqués dans la majorité des cas.", valeur: 3 },
                  { lettre: "D", texte: "Les processus sont simples, partagés et systématiquement respectés.", valeur: 4 }
              ]
          },
          {
              identifiant: "q4",
              texte: "Comment sont aujourd'hui identifiées et traitées les pertes liées à la non-qualité ?",
              options: [
                  { lettre: "A", texte: "Les pertes ne sont ni identifiées ni chiffrées, elles sont subies.", valeur: 1 },
                  { lettre: "B", texte: "Les pertes sont connues mais rarement analysées financièrement.", valeur: 2 },
                  { lettre: "C", texte: "Les pertes sont mesurées et intégrées dans certaines décisions.", valeur: 3 },
                  { lettre: "D", texte: "Les pertes sont suivies et continuellement réduites.", valeur: 4 }
              ]
          },
          {
              identifiant: "q5",
              texte: "Comment évaluez-vous les temps d'attente ou d'inactivité dans vos flux de production ?",
              options: [
                  { lettre: "A", texte: "Les temps morts sont fréquents et rarement visibles.", valeur: 1 },
                  { lettre: "B", texte: "Les temps d'attente sont connus mais peu optimisés.", valeur: 2 },
                  { lettre: "C", texte: "Les temps d'attente sont maîtrisés et suivis.", valeur: 3 },
                  { lettre: "D", texte: "Les flux sont fluides et optimisés.", valeur: 4 }
              ]
          }
      ]
  },
  {
      titre: "Étape 2 : Flux et Pilotage",
      questions: [
          {
              identifiant: "q6",
              texte: "Comment sont gérées les urgences et interruptions imprévues dans votre organisation ?",
              options: [
                  { lettre: "A", texte: "On interrompt tout, on improvise, et l'équipe “éteint des incendies” en permanence, au détriment des commandes rentables.", valeur: 1 },
                  { lettre: "B", texte: "Les urgences sont gérées au cas par cas : on s'en sort, mais cela crée retards, surcoûts cachés et tensions.", valeur: 2 },
                  { lettre: "C", texte: "Il existe des règles de tri/priorisation : les urgences passent, mais l'impact est limité et suivi.", valeur: 3 },
                  { lettre: "D", texte: "Les urgences sont filtrées, cadrées et anticipées : elles n'absorbent plus la marge ni la sérénité des équipes.", valeur: 4 }
              ]
          },
          {
              identifiant: "q7",
              texte: "Comment jugez-vous la fiabilité des informations transmises entre commerce et production ?",
              options: [
                  { lettre: "A", texte: "Des infos manquent ou sont contradictoires : la production découvre les exigences en cours de route, avec reprises et temps perdu.", valeur: 1 },
                  { lettre: "B", texte: "Les infos sont globalement là, mais souvent incomplètes : beaucoup de clarifications, appels, messages, et pertes de temps.", valeur: 2 },
                  { lettre: "C", texte: "Un brief standard existe et est généralement respecté : les écarts restent occasionnels et gérables.", valeur: 3 },
                  { lettre: "D", texte: "La transmission est béton (brief + validation) : moins d'allers-retours, moins d'erreurs, et une exécution plus rentable.", valeur: 4 }
              ]
          },
          {
              identifiant: "q8",
              texte: "Selon vous, dans quelle mesure certaines commandes sont-elles acceptées sans réelle analyse de rentabilité ?",
              options: [
                  { lettre: "A", texte: "On accepte “pour faire du volume” ou “pour dépanner” : la marge se dilue et certaines commandes coûtent plus qu'elles ne rapportent.", valeur: 1 },
                  { lettre: "B", texte: "On estime à la louche : parfois c'est rentable, parfois non, et on le découvre trop tard.", valeur: 2 },
                  { lettre: "C", texte: "On analyse les commandes sensibles (urgence, petite série, complexité) : les mauvaises affaires sont limitées.", valeur: 3 },
                  { lettre: "D", texte: "Chaque commande est cadrée (prix/temps/risques) : on refuse ou on ajuste avant que la marge ne s'évapore.", valeur: 4 }
              ]
          },
          {
              identifiant: "q9",
              texte: "Comment évaluez-vous le temps passé à gérer des problèmes déjà rencontrés par le passé ?",
              options: [
                  { lettre: "A", texte: "On refait les mêmes erreurs : on cherche, on teste, on corrige… et on perd des heures sans capitaliser.", valeur: 1 },
                  { lettre: "B", texte: "On a des solutions “dans la tête” de quelques personnes : ça marche, mais ça dépend trop des individus.", valeur: 2 },
                  { lettre: "C", texte: "On documente l'essentiel : les problèmes reviennent moins et se résolvent plus vite.", valeur: 3 },
                  { lettre: "D", texte: "On capitalise systématiquement (checklists, standards) : chaque incident fait progresser, et le temps perdu chute.", valeur: 4 }
              ]
          },
          {
              identifiant: "q10",
              texte: "Comment décririez-vous votre visibilité sur les marges réelles par type de client ou de prestation ?",
              options: [
                  { lettre: "A", texte: "On ne sait pas vraiment ce qui rapporte : on peut sur-servir certains clients et sous-facturer certaines prestations.", valeur: 1 },
                  { lettre: "B", texte: "On a une idée globale : quelques prestations “semblent” rentables, mais sans preuve régulière.", valeur: 2 },
                  { lettre: "C", texte: "On suit les grandes lignes (familles, offres) : on repère les zones à risque et on ajuste.", valeur: 3 },
                  { lettre: "D", texte: "On pilote par marge (offres/clients) : on investit là où ça rapporte et on élimine ce qui grignote la rentabilité.", valeur: 4 }
              ]
          }
      ]
  },
  {
      titre: "Étape 3 : Équipe et Indicateurs",
      questions: [
          {
              identifiant: "q11",
              texte: "Dans quelle mesure vos équipes sont-elles dépendantes de certaines personnes clés ?",
              options: [
                  { lettre: "A", texte: "Sans 1–2 personnes, tout ralentit : décisions, réglages, validations… et la production perd en vitesse et en qualité.", valeur: 1 },
                  { lettre: "B", texte: "Certaines compétences sont critiques : on compense, mais cela crée goulots, stress et fragilité.", valeur: 2 },
                  { lettre: "C", texte: "La dépendance existe sur des points précis : on a commencé à transférer et sécuriser.", valeur: 3 },
                  { lettre: "D", texte: "Les savoir-faire sont partagés : l'activité tourne sans “héros”, et la performance reste stable.", valeur: 4 }
              ]
          },
          {
              identifiant: "q12",
              texte: "Comment jugez-vous votre capacité à anticiper les problèmes avant qu'ils ne deviennent critiques ?",
              options: [
                  { lettre: "A", texte: "On voit les problèmes quand ils explosent : retard, réclamation, machine bloquée… et on subit.", valeur: 1 },
                  { lettre: "B", texte: "On sent venir, mais on manque de temps/outil pour traiter : on repousse, puis ça coûte plus cher.", valeur: 2 },
                  { lettre: "C", texte: "On détecte la plupart des signaux : on agit avant la casse, même si tout n'est pas encore systématique.", valeur: 3 },
                  { lettre: "D", texte: "On a des routines simples de prévention : moins de surprises, moins d'urgences, et une marge plus protégée.", valeur: 4 }
              ]
          },
          {
              identifiant: "q13",
              texte: "Comment sont prises les décisions techniques impactant les coûts de production ?",
              options: [
                  { lettre: "A", texte: "Souvent au feeling ou dans l'urgence : mauvais choix de support/réglage qui génère pertes matière et temps machine.", valeur: 1 },
                  { lettre: "B", texte: "On décide avec l'expérience : généralement bon, mais sans chiffrage clair des conséquences.", valeur: 2 },
                  { lettre: "C", texte: "On a des règles et validations sur les cas sensibles : les erreurs coûteuses sont limitées.", valeur: 3 },
                  { lettre: "D", texte: "Les décisions sont cadrées (standards + validation) : moins de gaspillage matière, moins de reprises, plus de marge.", valeur: 4 }
              ]
          },
          {
              identifiant: "q14",
              texte: "Comment évaluez-vous la gestion des priorités au quotidien ?",
              options: [
                  { lettre: "A", texte: "Les priorités changent tout le temps : on commence, on stoppe, on reprend… et la productivité s'effondre.", valeur: 1 },
                  { lettre: "B", texte: "Les priorités sont claires le matin, mais explosent dans la journée : on perd du temps en replanification.", valeur: 2 },
                  { lettre: "C", texte: "La plupart des journées sont pilotées : quelques écarts, mais l'équipe garde le cap.", valeur: 3 },
                  { lettre: "D", texte: "Les priorités sont stables et partagées : moins de context switch, plus de débit, et moins de stress.", valeur: 4 }
              ]
          },
          {
              identifiant: "q15",
              texte: "Dans quelle mesure vos indicateurs actuels vous aident-ils réellement à piloter la rentabilité ?",
              options: [
                  { lettre: "A", texte: "On mesure surtout l'activité (CA, volume) : mais on ne voit pas où la marge disparaît.", valeur: 1 },
                  { lettre: "B", texte: "On a des indicateurs, mais ils arrivent trop tard ou ne déclenchent pas d'actions concrètes.", valeur: 2 },
                  { lettre: "C", texte: "Quelques KPI utiles existent (retours, reprises, temps) : ils orientent des décisions régulières.", valeur: 3 },
                  { lettre: "D", texte: "Les indicateurs sont simples et actionnables : ils guident les choix, réduisent les pertes et sécurisent la rentabilité.", valeur: 4 }
              ]
          }
      ]
  },
  {
      titre: "Étape 4 : Culture et Amélioration Continue",
      questions: [
          {
              identifiant: "q16",
              texte: "Comment jugez-vous l'autonomie réelle de vos équipes face aux imprévus ?",
              options: [
                  { lettre: "A", texte: "Les équipes attendent des validations : beaucoup d'arrêts, d'allers-retours, et une dépendance qui coûte du temps.", valeur: 1 },
                  { lettre: "B", texte: "Elles se débrouillent, mais avec des variations : parfois ça marche, parfois ça crée erreurs et reprises.", valeur: 2 },
                  { lettre: "C", texte: "Elles sont autonomes sur la majorité des cas : les escalades restent ciblées.", valeur: 3 },
                  { lettre: "D", texte: "Elles ont un cadre clair (standards, limites) : elles résolvent vite, avec moins d'erreurs et plus de fluidité.", valeur: 4 }
              ]
          },
          {
              identifiant: "q17",
              texte: "Comment évaluez-vous la charge mentale et le stress liés à la désorganisation ?",
              options: [
                  { lettre: "A", texte: "Le stress est quotidien : urgences, reworks, imprévus… l'énergie part à survivre plutôt qu'à produire rentable.", valeur: 1 },
                  { lettre: "B", texte: "Le stress monte par périodes : on tient, mais avec fatigue, irritabilité et baisse de qualité.", valeur: 2 },
                  { lettre: "C", texte: "Le stress est présent mais gérable : on sait revenir à un fonctionnement stable.", valeur: 3 },
                  { lettre: "D", texte: "Le stress est faible : l'organisation absorbe les imprévus, et l'équipe reste efficace et sereine.", valeur: 4 }
              ]
          },
          {
              identifiant: "q18",
              texte: "Comment sont intégrés les retours d'expérience dans vos pratiques ?",
              options: [
                  { lettre: "A", texte: "On en parle, puis on passe à autre chose : les mêmes soucis reviennent et grignotent du temps et de la marge.", valeur: 1 },
                  { lettre: "B", texte: "On corrige localement : ça améliore, mais ce n'est pas partagé à toute l'équipe.", valeur: 2 },
                  { lettre: "C", texte: "On formalise les points clés : les bonnes pratiques se diffusent et les erreurs diminuent.", valeur: 3 },
                  { lettre: "D", texte: "On a une routine de capitalisation : chaque retour améliore un standard et réduit durablement les pertes.", valeur: 4 }
              ]
          },
          {
              identifiant: "q19",
              texte: "Selon vous, votre organisation apprend-elle réellement de ses erreurs ?",
              options: [
                  { lettre: "A", texte: "Les erreurs reviennent : on compense par des efforts humains, ce qui coûte cher en temps et en énergie.", valeur: 1 },
                  { lettre: "B", texte: "On apprend quand ça fait mal : mais l'apprentissage n'est pas systématique, donc la répétition persiste.", valeur: 2 },
                  { lettre: "C", texte: "On apprend régulièrement : les incidents diminuent et la qualité progresse.", valeur: 3 },
                  { lettre: "D", texte: "On apprend vite et en continu : l'erreur devient rare, et la rentabilité se stabilise à un niveau supérieur.", valeur: 4 }
              ]
          },
          {
              identifiant: "q20",
              texte: "Dans quelle mesure votre entreprise pourrait-elle améliorer sa rentabilité sans investir davantage ?",
              options: [
                  { lettre: "A", texte: "On pense qu'il faudrait investir (machines, recrutements) : pourtant beaucoup de gains sont bloqués dans l'organisation actuelle.", valeur: 1 },
                  { lettre: "B", texte: "On voit des gains possibles, mais on ne sait pas par où commencer ni quoi prioriser.", valeur: 2 },
                  { lettre: "C", texte: "On sait où agir (reprises, flux, standards) : on obtient déjà des gains avec des actions ciblées.", valeur: 3 },
                  { lettre: "D", texte: "On améliore en continu : la rentabilité progresse par optimisation, pas par dépenses supplémentaires.", valeur: 4 }
              ]
          }
      ]
  }
];

// Aplatir les questions et insérer des écrans de transition
const toutesLesQuestions = [];
let numeroQuestion = 1;

donneesAudit.forEach((etape, indexEtape) => {
  // Page de transition annonçant le nouveau thème
  toutesLesQuestions.push({
      type: 'transition',
      titreEtape: etape.titre,
      indexEtape: indexEtape + 1
  });

  // Questions de l'étape
  etape.questions.forEach((question) => {
      toutesLesQuestions.push({
          ...question,
          type: 'question',
          titreEtape: etape.titre,
          numeroTotal: numeroQuestion++
      });
  });
});

/**
* Gestion de l'état (State Management)
*/
const EtatApp = {
  indiceQuestionActuelle: -2, // -3: Inscription, -2: Login, -1: Accueil, 0+: Questions
  reponsesUtilisateur: {},     // Stocke identifiant_question -> valeur (1 à 4)
  utilisateur: null,           // Stocke l'adresse email de l'utilisateur connecté
  utilisateurPrenom: null,     // Stocke le prénom pour personnalisation
  utilisateurNom: null,        // Stocke le nom de famille
  utilisateurEntreprise: null, // Stocke l'entreprise de l'utilisateur
  scoreTotal: 0,
  directionAnimation: 'animate-next', // Pour l'animation d'entrée
  
  scoresParCategorie: [],
  analyseGenerale: null,
  
  // Sauvegarder la réponse
  definirReponse(identifiant, valeur) {
      this.reponsesUtilisateur[identifiant] = valeur;
  },
  
  // Calculer le score final et le détail par catégorie
  calculerScore() {
      this.scoreTotal = 0;
      this.scoresParCategorie = donneesAudit.map(etape => {
          let scoreEtape = 0;
          etape.questions.forEach(q => {
              scoreEtape += this.reponsesUtilisateur[q.identifiant] || 0;
          });
          this.scoreTotal += scoreEtape;
          // Ne conserver que le nom explicite de la catégorie en enlevant "Étape X : "
          const labelCourt = etape.titre.split(" : ")[1] || etape.titre;
          return { label: labelCourt, score: scoreEtape };
      });
      return this.scoreTotal;
  },

  questionActuelleEstRepondue() {
      if (this.indiceQuestionActuelle < 0 || this.indiceQuestionActuelle >= toutesLesQuestions.length) return false;
      const etape = toutesLesQuestions[this.indiceQuestionActuelle];
      if (etape.type === 'transition') return true; // Les transitions n'ont pas besoin de réponse
      return !!this.reponsesUtilisateur[etape.identifiant];
  }
};

/* ==========================================================================
   Gestion de Session Locale (7 jours) & Base de données Utilisateurs
   ========================================================================== */
function obtenirUtilisateurs() {
    try {
        const raw = localStorage.getItem('printProfitUsers');
        if (raw) return JSON.parse(raw);
    } catch(e) {}
    return {};
}

function enregistrerUtilisateur(email, prenom, nom, entreprise, password) {
    const users = obtenirUtilisateurs();
    users[email] = { prenom, nom, entreprise, password };
    localStorage.setItem('printProfitUsers', JSON.stringify(users));
}

function authentifierUtilisateur(email, password) {
    const users = obtenirUtilisateurs();
    if (!users[email]) return "not_found";
    if (users[email].password !== password) return "invalid_password";
    return users[email];
}
function sauvegarderSession(email, prenom, nom, entreprise) {
    const data = { email, prenom, nom, entreprise, expires: new Date().getTime() + (7 * 24 * 60 * 60 * 1000) };
    localStorage.setItem('printProfitSession', JSON.stringify(data));
}

function chargerSession() {
    try {
        const raw = localStorage.getItem('printProfitSession');
        if (raw) {
            const data = JSON.parse(raw);
            if (new Date().getTime() < data.expires) {
                EtatApp.utilisateur = data.email;
                EtatApp.utilisateurPrenom = data.prenom || data.email.split('@')[0];
                EtatApp.utilisateurNom = data.nom || "";
                EtatApp.utilisateurEntreprise = data.entreprise || "Non renseigné";
                return true;
            } else {
                localStorage.removeItem('printProfitSession');
            }
        }
    } catch(e) {}
    return false;
}

function deconnecterUtilisateur() {
    localStorage.removeItem('printProfitSession');
    EtatApp.utilisateur = null;
    EtatApp.utilisateurPrenom = null;
    EtatApp.utilisateurNom = null;
    transitionVers(() => {
        EtatApp.indiceQuestionActuelle = -2;
        EtatApp.directionAnimation = 'animate-prev';
        afficherQuestion();
    });
}

function toggleDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) dropdown.classList.toggle('active');
}

// Fermer le menu déroulant en cliquant à l'extérieur
document.addEventListener('click', () => {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) dropdown.classList.remove('active');
});

/**
* Rendu DOM
*/
const conteneurApplication = document.getElementById('app');

function genererLogoSVG() {
  return `
      <div class="logo-container">
          <img src="print_profit_system_logo-blanc-or.png" alt="Print Profit System logo" style="max-height: 65px; width: auto; object-fit: contain;">
      </div>
  `;
}

function getHeaderBar() {
  if (EtatApp.utilisateur && EtatApp.indiceQuestionActuelle >= -1) {
      const p = EtatApp.utilisateurPrenom ? EtatApp.utilisateurPrenom : EtatApp.utilisateur.split('@')[0];
      const initial = p.charAt(0).toUpperCase();
      const nomAffichage = p.charAt(0).toUpperCase() + p.slice(1);
      
      return `
          <div class="user-header-container" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <div class="app-branding" style="display: flex; align-items: center; gap: 0.75rem;">
                  <img src="print_profit_system_logo-blanc-or.png" alt="Logo PPS" style="height: 40px; width: auto; object-fit: contain;">
              </div>
              <div class="user-profile-btn" onclick="toggleDropdown(event)">
                  <div class="user-avatar">${initial}</div>
                  <div class="user-name">${nomAffichage}</div>
                  <svg style="width: 16px; height: 16px; color: var(--gold);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  
                  <div class="user-dropdown" id="userDropdown">
                      <div class="dropdown-item logout" onclick="deconnecterUtilisateur()">
                          <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                          Déconnexion
                      </div>
                  </div>
              </div>
          </div>
      `;
  }
  return '';
}

function transitionVers(callback) {
  const panel = document.querySelector('.glass-panel');
  if (panel) {
      panel.classList.add('fade-out');
      setTimeout(() => {
          callback();
      }, 300);
  } else {
      callback();
  }
}



function allerAInscription(event) {
  if (event) event.preventDefault();
  transitionVers(() => {
      EtatApp.indiceQuestionActuelle = -3;
      EtatApp.directionAnimation = 'animate-next';
      afficherQuestion();
  });
}

function allerALogin(event) {
  if (event) event.preventDefault();
  transitionVers(() => {
      EtatApp.indiceQuestionActuelle = -2;
      EtatApp.directionAnimation = 'animate-prev';
      afficherQuestion();
  });
}

function afficherLogin() {
  conteneurApplication.innerHTML = `
      <div class="glass-panel login-panel ${EtatApp.directionAnimation}">
          ${genererLogoSVG()}
          <h2 style="color: var(--text-main); margin-bottom: 0.5rem; text-align: center;">Connexion</h2>
          <p class="subtitle" style="margin-bottom: 2rem;">Accédez à votre session d'audit sécurisée</p>
          

          <form id="loginForm" onsubmit="traiterLogin(event)">
              <div class="form-group">
                  <label for="email">Adresse e-mail</label>
                  <input type="email" id="email" class="form-control" placeholder="votre@email.com" required>
              </div>
              <div class="form-group" style="margin-bottom: 2rem;">
                  <label for="password" style="display: flex; justify-content: space-between;">
                      Mot de passe 
                      <a href="#" onclick="afficherMotDePasseOublie(event)" style="color: var(--gold); text-decoration: none; font-size: 0.85rem;">Mot de passe oublié ?</a>
                  </label>
                  <input type="password" id="password" class="form-control" placeholder="••••••••" required>
              </div>
              <button type="submit" class="btn" style="width: 100%; margin-bottom: 1rem;">Se connecter</button>
              <div style="font-size: 0.95rem; color: var(--text-muted);">
                  Pas encore de compte ? <a href="#" onclick="allerAInscription(event)" style="color: var(--gold); text-decoration: none; font-weight: 500;">Créer un compte</a>
              </div>
          </form>
      </div>
  `;
}

function afficherInscription() {
  conteneurApplication.innerHTML = `
      <div class="glass-panel login-panel ${EtatApp.directionAnimation}">
          ${genererLogoSVG()}
          <h2 style="color: var(--text-main); margin-bottom: 0.5rem; text-align: center;">Créer un compte</h2>
          <p class="subtitle" style="margin-bottom: 2rem;">Rejoignez-nous pour réaliser votre audit</p>
          

          <form id="registerForm" onsubmit="traiterInscription(event)">
               <div class="form-group">
                  <label for="reg-prenom">Votre Prénom</label>
                  <input type="text" id="reg-prenom" class="form-control" placeholder="Jean" required>
              </div>
              <div class="form-group">
                  <label for="reg-nom">Votre Nom</label>
                  <input type="text" id="reg-nom" class="form-control" placeholder="Dupont" required>
              </div>
              <div class="form-group">
                  <label for="reg-name">Nom de l'entreprise</label>
                  <input type="text" id="reg-name" class="form-control" placeholder="Impression Express" required>
              </div>
              <div class="form-group">
                  <label for="reg-email">Adresse e-mail</label>
                  <input type="email" id="reg-email" class="form-control" placeholder="votre@email.com" required>
              </div>
              <div class="form-group" style="margin-bottom: 2rem;">
                  <label for="reg-password">Mot de passe</label>
                  <input type="password" id="reg-password" class="form-control" placeholder="••••••••" required minlength="6">
              </div>
              <button type="submit" class="btn" style="width: 100%; margin-bottom: 1rem;">S'inscrire</button>
              <div style="font-size: 0.95rem; color: var(--text-muted);">
                  Déjà un compte ? <a href="#" onclick="allerALogin(event)" style="color: var(--gold); text-decoration: none; font-weight: 500;">Se connecter</a>
              </div>
          </form>
      </div>
  `;
}

function afficherMotDePasseOublie(event) {
  if (event) event.preventDefault();
  conteneurApplication.innerHTML = `
      <div class="glass-panel login-panel ${EtatApp.directionAnimation}">
          ${genererLogoSVG()}
          <h2 style="color: var(--text-main); margin-bottom: 0.5rem; text-align: center;">Mot de passe oublié</h2>
          <p class="subtitle" style="margin-bottom: 2rem;">Entrez votre adresse e-mail pour réinitialiser votre mot de passe</p>
          
          <form onsubmit="traiterVerificationEmailMDP(event)">
              <div class="form-group" style="margin-bottom: 2rem;">
                  <label for="reset-email">Adresse e-mail</label>
                  <input type="email" id="reset-email" class="form-control" placeholder="votre@email.com" required>
              </div>
              <button type="submit" class="btn" style="width: 100%; margin-bottom: 1rem;">Vérifier</button>
              <div style="font-size: 0.95rem; color: var(--text-muted); text-align: center;">
                  <a href="#" onclick="allerALogin(event)" style="color: var(--gold); text-decoration: none;">Retour à la connexion</a>
              </div>
          </form>
      </div>
  `;
}

function traiterVerificationEmailMDP(event) {
  event.preventDefault();
  const email = document.getElementById('reset-email').value.trim();
  const users = obtenirUtilisateurs();
  if (users[email]) {
      afficherNouveauMotDePasse(email);
  } else {
      alert("Cette adresse e-mail n'est pas reconnue.");
  }
}

function afficherNouveauMotDePasse(email) {
  conteneurApplication.innerHTML = `
      <div class="glass-panel login-panel animate-next">
          ${genererLogoSVG()}
          <h2 style="color: var(--text-main); margin-bottom: 0.5rem; text-align: center;">Nouveau mot de passe</h2>
          <p class="subtitle" style="margin-bottom: 2rem;">Pour le compte : ${email}</p>
          
          <form onsubmit="traiterNouveauMotDePasse(event, '${email}')">
              <div class="form-group" style="margin-bottom: 2rem;">
                  <label for="new-password">Nouveau mot de passe</label>
                  <input type="password" id="new-password" class="form-control" placeholder="••••••••" required minlength="6">
              </div>
              <button type="submit" class="btn" style="width: 100%; margin-bottom: 1rem;">Mettre à jour & Se connecter</button>
          </form>
      </div>
  `;
}

function traiterNouveauMotDePasse(event, email) {
  event.preventDefault();
  const newPassword = document.getElementById('new-password').value;
  const users = obtenirUtilisateurs();
  if (users[email]) {
      users[email].password = newPassword;
      localStorage.setItem('printProfitUsers', JSON.stringify(users));
      alert("Mot de passe mis à jour avec succès !");
      allerALogin(null);
  }
}

function traiterInscription(event) {
  event.preventDefault();
  const email = document.getElementById('reg-email').value.trim();
  const prenom = document.getElementById('reg-prenom').value.trim();
  const nom = document.getElementById('reg-nom').value.trim();
  const entreprise = document.getElementById('reg-name').value.trim();
  const password = document.getElementById('reg-password').value;
  
  if (!email || !prenom || !nom || !entreprise || !password) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
  }
  
  // Enregistrement sécurisé
  enregistrerUtilisateur(email, prenom, nom, entreprise, password);

  EtatApp.utilisateur = email;
  EtatApp.utilisateurPrenom = prenom;
  EtatApp.utilisateurNom = nom;
  EtatApp.utilisateurEntreprise = entreprise;
  sauvegarderSession(email, prenom, nom, entreprise);
  
  // Plus d'envoi automatique à l'inscription pour éviter les doublons au début
  
  transitionVers(() => {
      EtatApp.indiceQuestionActuelle = -1;
      EtatApp.directionAnimation = 'animate-next';
      afficherQuestion();
  });
}

function traiterLogin(event) {
  event.preventDefault();
  
  const errorDiv = document.getElementById('login-error');
  if(errorDiv) errorDiv.style.display = 'none';

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  
  const authResult = authentifierUtilisateur(email, password);
  
  if (authResult === "not_found" || authResult === "invalid_password") {
      if (!errorDiv) {
          const newError = document.createElement('div');
          newError.id = 'login-error';
          newError.style = "color: #ff6b6b; font-size: 0.9rem; text-align: center; margin-bottom: 1rem; padding: 0.5rem; background: rgba(255,0,0,0.1); border-radius: 4px; border: 1px solid rgba(255,0,0,0.2);";
          newError.innerText = authResult === "not_found" ? "Compte inexistant, veuillez vous inscrire." : "Mot de passe incorrect.";
          document.getElementById('loginForm').prepend(newError);
      } else {
          errorDiv.style.display = 'block';
          errorDiv.innerText = authResult === "not_found" ? "Compte inexistant, veuillez vous inscrire." : "Mot de passe incorrect.";
      }
      return; 
  }
  
  // Connexion de la session
  EtatApp.utilisateur = email;
  EtatApp.utilisateurPrenom = authResult.prenom;
  EtatApp.utilisateurNom = authResult.nom || "";
  EtatApp.utilisateurEntreprise = authResult.entreprise;
  sauvegarderSession(email, authResult.prenom, authResult.nom || "", authResult.entreprise);
  
  transitionVers(() => {
      EtatApp.indiceQuestionActuelle = -1;
      EtatApp.directionAnimation = 'animate-next';
      afficherQuestion();
  });
}

function afficherEveil() {
  const pName = EtatApp.utilisateurPrenom ? " " + EtatApp.utilisateurPrenom : "";
  conteneurApplication.innerHTML = `
      ${getHeaderBar()}
      <div class="glass-panel ${EtatApp.directionAnimation}" style="text-align: center;">
          <h2 style="color: var(--gold-light); margin-bottom: 0.5rem;">Bienvenue${pName},</h2>
          <p class="subtitle" style="margin-bottom: 2rem;">Prêt(e) à évaluer la rentabilité, l'organisation et la performance de votre production d'impression ?</p>
          <button class="btn" onclick="demarrerAudit()">Démarrer l'Audit ✨</button>
      </div>
  `;
}

function demarrerAudit() {
  transitionVers(() => {
      EtatApp.indiceQuestionActuelle = 0;
      EtatApp.directionAnimation = 'animate-next';
      afficherQuestion();
  });
}

function selectionnerOption(identifiant, valeur) {
  EtatApp.definirReponse(identifiant, valeur);
  
  // Pour le visuel immédiat du contour doré
  const cards = document.querySelectorAll('.option-card');
  cards.forEach(card => card.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
  
  // Amélioration de la fluidité : passage automatique à la question suivante avec transition
  setTimeout(() => {
      // Vérifier que la valeur actuelle de l'indice n'a pas été modifiée
      if (EtatApp.indiceQuestionActuelle >= 0 && EtatApp.indiceQuestionActuelle < toutesLesQuestions.length) {
          questionSuivante();
      }
  }, 400); // Reste 400ms sur la question pour voir le choix, puis déclenche questionSuivante (qui va fadeOut)
}

function afficherQuestion() {
  if (EtatApp.indiceQuestionActuelle === -3) return afficherInscription();
  if (EtatApp.indiceQuestionActuelle === -2) return afficherLogin();
  if (EtatApp.indiceQuestionActuelle === -1) return afficherEveil();
  if (EtatApp.indiceQuestionActuelle >= toutesLesQuestions.length) return afficherTraitement();

  const etape = toutesLesQuestions[EtatApp.indiceQuestionActuelle];
  
  // Calcul de progression basé sur le nombre absolu de questions (20)
  const currentQNum = etape.type === 'question' ? (etape.numeroTotal - 1) : 
      (EtatApp.indiceQuestionActuelle === 0 ? 0 : toutesLesQuestions[EtatApp.indiceQuestionActuelle-1].numeroTotal);
  const pourcentageProgression = ((currentQNum) / 20) * 100;
  
  const pName = EtatApp.utilisateurPrenom ? " " + EtatApp.utilisateurPrenom : "";
  
  // ==========================================
  // Rendu de l'écran de Transition (Thématique)
  // ==========================================
  if (etape.type === 'transition') {
      const htmlContenu = `
          ${getHeaderBar()}
          <div class="progress-container">
              <div class="progress-header">
                  <span>Progression de l'audit</span>
                  <span>${Math.round(pourcentageProgression)}% achevé</span>
              </div>
              <div class="progress-track">
                  <div class="progress-bar" style="width: ${pourcentageProgression}%"></div>
              </div>
          </div>
          
          <div class="glass-panel ${EtatApp.directionAnimation}" style="text-align: center; align-items: center;">
              <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--primary-gradient); display: flex; justify-content: center; align-items: center; font-size: 1.5rem; font-weight: bold; color: var(--bg-dark); margin: 0 auto 2rem auto; box-shadow: 0 0 20px rgba(223, 185, 115, 0.4);">
                  ${etape.indexEtape}
              </div>
              <h3 style="color: var(--gold); font-size: 1.1rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.5rem;">Nouveau Thème</h3>
              <h2 style="font-size: 2.2rem; color: var(--text-main); margin-bottom: 1.5rem; font-weight: 800;">${etape.titreEtape.split(" : ")[1] || etape.titreEtape}</h2>
              <p style="color: var(--text-muted); font-size: 1.1rem; max-width: 500px; margin: 0 auto 3rem auto;">Prêt(e) pour analyser cet aspect de votre production${pName} ?</p>
              
              <button class="btn" style="padding: 1.25rem 3rem; font-size: 1.1rem;" onclick="questionSuivante()">
                  Démarrer la section ${etape.indexEtape}
              </button>
              
              ${EtatApp.indiceQuestionActuelle > 0 ? `
              <div style="margin-top: 2rem;">
                  <a href="#" onclick="event.preventDefault(); questionPrecedente();" style="color: rgba(255,255,255,0.4); font-size: 0.9rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">
                      ← Revenir en arrière
                  </a>
              </div>` : ''}
          </div>
      `;
      conteneurApplication.innerHTML = htmlContenu;
      return;
  }
  
  // ==========================================
  // Rendu normal d'une Question
  // ==========================================
  const sousTitreMotivation = (etape.numeroTotal === 11) 
        ? `<div style="text-align: center; color: var(--gold-light); margin-bottom: 2.5rem; font-weight: 600; font-size: 1.15rem; animation: pulse 2s infinite;">Presque fini,${pName} ! Vous êtes à la moitié de l'audit.</div>` 
        : '';
        
  let htmlContenu = `
      ${getHeaderBar()}
      <div class="progress-container">
          <div class="progress-header">
              <span>Question ${etape.numeroTotal} sur 20</span>
              <span>${Math.round(pourcentageProgression)}% achevé</span>
          </div>
          <div class="progress-track">
              <div class="progress-bar" style="width: ${pourcentageProgression}%"></div>
          </div>
      </div>
      
      <div class="glass-panel ${EtatApp.directionAnimation}">
          ${sousTitreMotivation}
          
          <div class="category-header">
              <div class="category-subtitle">Bilan d'expertise</div>
              <div class="category-title">${etape.titreEtape}</div>
          </div>
          
          <div class="question-block">
              <div class="question-title">${etape.texte}</div>
              <div class="options-grid">
  `;

  etape.options.forEach(opt => {
      const estSelectionne = EtatApp.reponsesUtilisateur[etape.identifiant] === opt.valeur;
      htmlContenu += `
          <div class="option-card ${estSelectionne ? 'selected' : ''}" onclick="selectionnerOption('${etape.identifiant}', ${opt.valeur})">
              <div class="option-letter">${opt.lettre}</div>
              <div class="option-text">${opt.texte}</div>
          </div>
      `;
  });

  htmlContenu += `
              </div>
              
              ${EtatApp.indiceQuestionActuelle > 0 ? `
              <div style="text-align: center; margin-top: 2.5rem;">
                  <a href="#" onclick="event.preventDefault(); questionPrecedente();" style="color: rgba(255,255,255,0.4); font-size: 0.95rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">
                      ← Revenir à la question précédente
                  </a>
              </div>` : ''}
          </div>
      </div>
  `;

  conteneurApplication.innerHTML = htmlContenu;
}

function questionSuivante() {
  if (EtatApp.questionActuelleEstRepondue()) {
      transitionVers(() => {
          EtatApp.indiceQuestionActuelle++;
          EtatApp.directionAnimation = 'animate-next';
          afficherQuestion();
      });
  }
}

function questionPrecedente() {
  if (EtatApp.indiceQuestionActuelle > 0) {
      transitionVers(() => {
          EtatApp.indiceQuestionActuelle--;
          EtatApp.directionAnimation = 'animate-prev';
          afficherQuestion();
      });
  }
}

/**
* Simulation du traitement IA & Webhook
*/
async function afficherTraitement() {
  const phrases = [
      "Scan des 20 points de contrôle...",
      "Identification des fuites de rentabilité...",
      "Comparaison avec les benchmarks Print Profit System...",
      "Génération de votre plan d'action personnalisé..."
  ];
  
  let currentPhrase = 0;

  const htmlContenu = `
      ${getHeaderBar()}
      <div class="progress-container">
          <div class="progress-header">
              <span>Analyse approfondie en cours...</span>
              <span>100% achevé</span>
          </div>
          <div class="progress-track">
              <div class="progress-bar" style="width: 100%"></div>
          </div>
      </div>
      <div class="glass-panel loader-container animate-next">
          <div class="spinner"></div>
          <div class="loader-text" id="ai-loader-text" style="transition: opacity 0.3s ease;">${phrases[0]}</div>
      </div>
  `;
  conteneurApplication.innerHTML = htmlContenu;

  EtatApp.calculerScore();
  
  // Animation fluide du texte de l'IA (mise à jour toutes les 800ms)
  const intervalId = setInterval(() => {
      currentPhrase++;
      if (currentPhrase < phrases.length) {
          const el = document.getElementById('ai-loader-text');
          if (el) {
              el.style.opacity = 0;
              setTimeout(() => {
                  el.innerText = phrases[currentPhrase];
                  el.style.opacity = 1;
              }, 300);
          }
      } else {
          clearInterval(intervalId);
      }
  }, 900);

  // Attente simulée pour synchroniser avec l'effet textuel (environ 4 intervalles)
  await new Promise(resolve => setTimeout(resolve, 3800));
  
  afficherResultats();
}

function envoyerVersWebhook(actionType = 'audit_results') {
  const chargeUtile = {
      action: actionType,
      prenom: EtatApp.utilisateurPrenom,
      nom: EtatApp.utilisateurNom,
      email: EtatApp.utilisateur,
      entreprise: EtatApp.utilisateurEntreprise || "Non renseigné",
      horodatage: new Date().toISOString()
  };
  
  if (actionType !== 'registration') {
      chargeUtile.scoreObtenu = EtatApp.scoreTotal;
      chargeUtile.constat = EtatApp.analyseGenerale?.constat || "";
      chargeUtile.risque = EtatApp.analyseGenerale?.risque || "";
      chargeUtile.solution = EtatApp.analyseGenerale?.solution || "";
      chargeUtile.constat_ia = EtatApp.analyseGenerale?.constat || "";
      chargeUtile.risque_ia = EtatApp.analyseGenerale?.risque || "";
      chargeUtile.solution_ia = EtatApp.analyseGenerale?.solution || "";
      chargeUtile.gains_possibles = EtatApp.analyseGenerale?.gains_possibles || "+ 0% de marge";
      chargeUtile.synthese = EtatApp.analyseGenerale?.synthese || "";
      chargeUtile.synthese_strategique = EtatApp.analyseGenerale?.synthese_strategique || "";
  }
  
  console.log("== Données prêtes pour le Webhook ==", chargeUtile);
  
  // Requête vers le Webhook Make.com
  fetch('https://hook.eu2.make.com/rhsb4t60cu7xdauncvaf7wpjou949hlo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chargeUtile)
  })
  .then(response => {
      console.log('Envoi au webhook réussi', response.status);
  })
  .catch(erreur => {
      console.error("Erreur de transmission Webhook : ", erreur);
  });
}

function afficherResultats() {
  const score = EtatApp.scoreTotal;
  const entrepriseText = EtatApp.utilisateurEntreprise || "votre structure";
  // 1. Logique d'Analyse (Intelligence de l'Audit)
  const scoreMaximal = 20 * 4;
  const percentScore = score / scoreMaximal;
  const cats = EtatApp.scoresParCategorie; 
  let minCat = cats.reduce((prev, curr) => (prev.score < curr.score) ? prev : curr);
  let maxCat = cats.reduce((prev, curr) => (prev.score > curr.score) ? prev : curr);

  // Récupérer les 3 pires réponses pour l'ancrage réel
  const piresPoints = toutesLesQuestions
      .filter(q => q.type === 'question' && typeof EtatApp.reponsesUtilisateur[q.identifiant] !== 'undefined')
      .map(q => {
          const val = EtatApp.reponsesUtilisateur[q.identifiant];
          const questionOriginale = toutesLesQuestions.find(tq => tq.identifiant === q.identifiant);
          const optionTexte = questionOriginale.options.find(o => o.valeur === val)?.texte || "votre réponse";
          return { id: q.identifiant, texte: q.texte, valeur: val, reponseDonnee: optionTexte, cat: q.titreEtape };
      })
      .sort((a, b) => a.valeur - b.valeur)
      .slice(0, 3);

  // --- GÉNÉRATEUR D'ANALYSE MULTI-TONALITÉ (SENIOR STRATEGY) ---
  const calculGainPercent = 5 + (12 - 5) * (1 - (Math.max(20, Math.min(80, score)) - 20) / 60);
  const gainPercentAffiche = calculGainPercent.toFixed(0); // Pas de virgule pour un look plus "chiffre rond" d'expert
  const gainsPossiblesLabel = `+ ${gainPercentAffiche}% de marge`;
  
  const tons = ['DIRECTIF', 'VISIONNAIRE', 'ANALYSTE', 'MENTOR'];
  const tonChoisi = tons[Math.floor(Math.random() * tons.length)];
  
  let constatDetail = "";
  let risqueDetail = "";
  let solutionDetail = "";
  let texteInterpretation = "";

  const q1 = piresPoints[0];
  const q2 = piresPoints[1];
  const q3 = piresPoints[2];

  switch(tonChoisi) {
      case 'DIRECTIF':
          constatDetail = `Il y a de l'argent qui dort chez ${entrepriseText}. Précisément sur "${q1.texte}", vous indiquez "${q1.reponseDonnee}". En redressant chirurgicalement cet axe "${minCat.label}", vous ne faites pas que réparer un processus : vous débloquez un flux de profitabilité immédiat. Ce n'est pas une option, c'est votre priorité absolue pour l'exercice en cours.`;
          risqueDetail = `L'inaction vous coûte votre place sur le podium. En ne captant pas ces ${gainPercentAffiche}% de marge supplémentaire, vous laissez la concurrence s'armer à votre place. La fragilité de "${q2.texte}" n'est pas une fatalité, c'est un manque de courage organisationnel qui bride votre capacité d'autofinancement et de réinvestissement.`;
          solutionDetail = `Reprenez les commandes. 1. Standardisation brutale de "${q1.texte}" pour arrêter l'hémorragie. 2. Pilotage de performance sur "${q2.texte}" avec des objectifs de gain chiffrés. 3. Verrouillage de la marge sur "${q3.texte}". Chaque point de pourcentage récupéré est une victoire nette pour votre trésorerie.`;
          texteInterpretation = `Levier d'accélération : <strong>${gainsPossiblesLabel}</strong>. Votre axe <strong>${minCat.label}</strong> est le pivot de cette rentabilité cachée.`;
          break;
          
      case 'VISIONNAIRE':
          constatDetail = `Votre vision pour ${entrepriseText} mérite un moteur à la hauteur de vos ambitions. Le goulot identifié sur "${minCat.label}", notamment avec votre réponse "${q1.reponseDonnee}" sur "${q1.texte}", est la seule barrière entre votre état actuel et une structure de classe mondiale. Ce gain de marge n'est pas qu'un chiffre, c'est votre futur carburant de croissance.`;
          risqueDetail = `Le monde de l'impression change, et ceux qui ne captent pas ces ${gainPercentAffiche}% de rentabilité interne seront exclus de la course à l'innovation. En ignorant le levier sur "${q2.texte}", vous bridez votre scalabilité. Vous avez le choix entre rester un artisan performant ou devenir le leader industriel qui dicte les règles du marché.`;
          solutionDetail = `Ouvrez de nouveaux horizons. 1. Automatisez la rigueur sur "${q1.texte}" pour passer à l'échelle supérieure. 2. Repensez "${q2.texte}" comme un avantage compétitif majeur. 3. Sanctifiez votre marge sur "${q3.texte}". C'est en dominant vos flux internes que vous dominerez votre marché.`;
          texteInterpretation = `Ambition stratégique : <strong>${gainsPossiblesLabel}</strong>. En débloquant <strong>${minCat.label}</strong>, vous changez radicalement d'échelle opérationnelle.`;
          break;

      case 'ANALYSTE':
          constatDetail = `L'analyse des ratios d'efficience sur ${entrepriseText} met en lumière un gisement de profitabilité inexploité. L'étape "${q1.texte}" ("${q1.reponseDonnee}") confirme qu'une partie de votre axe "${minCat.label}" dégrade votre ratio de marge opérationnelle. L'optimisation chirurgicale de ce point est le vecteur mathématique le plus court vers une rentabilité supérieure.`;
          risqueDetail = `Sur un CA de référence, ne pas capter ces ${gainPercentAffiche}% de marge dégrade mécaniquement votre capacité de levier financier. Le coût d'opportunité sur "${q2.texte}" est le principal frein à l'amélioration de votre EBITDA. Sans standardisation, votre rentabilité sur "${maxCat.label}" ne pourra plus supporter les inefficacités structurelles de "${minCat.label}".`;
          solutionDetail = `Optimisation par le calcul. 1. Mise en place d'un protocole de validation strict sur "${q1.texte}". 2. Réduction de la variance opérationnelle sur "${q2.texte}". 3. Monitorage de la contribution nette sur "${q3.texte}". La méthode Print Profit System transforme chaque friction en profit.`;
          texteInterpretation = `Ratio d'efficience : <strong>${gainsPossiblesLabel}</strong>. Le levier sur <strong>${minCat.label}</strong> est votre principal vecteur de profitabilité réelle.`;
          break;

      case 'MENTOR':
          constatDetail = `Vous avez une équipe dévouée, mais votre système actuel travaille contre eux. En laissant "${q1.reponseDonnee}" sur "${q1.texte}", vous imposez une charge de rattrapage inutile qui sature votre axe "${minCat.label}". Libérer ces ${gainPercentAffiche}% de marge, c'est d'abord libérer le potentiel humain de ${entrepriseText} en simplifiant leur quotidien opérationnel.`;
          risqueDetail = `La fatigue des équipes sur "${q2.texte}" est le signal faible d'une structure qui s'épuise. Ignorer ce gain de rentabilité, c'est accepter que votre talent s'érode. Un cadre flou est un cadre coûteux : à la fois pour votre sérénité de dirigeant et pour le compte de résultat de l'entreprise. Votre équipe mérite un système qui les rend fiers et rentables.`;
          solutionDetail = `Instaurez une culture de la réussite. 1. Co-création d'un standard robuste sur "${q1.texte}" avec vos piliers. 2. Simplification drastique des flux sur "${q2.texte}". 3. Responsabilisation et fierté retrouvée sur "${q3.texte}". La rentabilité durable naît de la clarté des processus.`;
          texteInterpretation = `Engagement et Profit : <strong>${gainsPossiblesLabel}</strong>. La sérénité de l'équipe sur <strong>${minCat.label}</strong> est le moteur de votre rentabilité récupérée.`;
          break;
  }

  // Stockage définitif et certifié pour le Webhook
  EtatApp.analyseGenerale = {
      constat: constatDetail,
      risque: risqueDetail,
      solution: solutionDetail,
      gains_possibles: gainsPossiblesLabel,
      synthese: texteInterpretation.replace(/<\/?[^>]+(>|$)/g, "").replace(/\n\n/g, ' '),
      synthese_strategique: texteInterpretation.replace(/<\/?[^>]+(>|$)/g, "") // Extraction propre sans balises
  };

  const htmlContenu = `
      ${getHeaderBar()}
      <div class="glass-panel animate-next">
          <div style="text-align: center; margin-bottom: 1rem;">
             <span style="background: var(--gold); color: #000; padding: 0.2rem 0.8rem; border-radius: 20px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">Diagnostic : Ton ${tonChoisi}</span>
          </div>
          <h2 style="text-align: center; margin-bottom: 2rem; color: var(--text-main);">Rapport d'Audit</h2>
          
          <div style="display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; align-items: center; margin-bottom: 2.5rem;">
              <div class="score-circle" style="margin: 0;">
                  <div style="text-align: center;">
                      <div class="score-value">${score}</div>
                      <div class="score-total">/ ${scoreMaximal}</div>
                  </div>
              </div>
              
              <div style="width: 100%; max-width: 340px; background: rgba(0,0,0,0.25); border-radius: 12px; padding: 1.5rem; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                  <canvas id="radarChart"></canvas>
              </div>
          </div>
          
          <div class="result-interpretation" style="margin-bottom: 3.5rem; text-align: left; background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 12px; border: 1px solid rgba(223, 185, 115, 0.1);">
              <div style="color: var(--gold); font-weight: 800; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 2px; margin-bottom: 1rem; border-bottom: 1px solid rgba(223, 185, 115, 0.2); padding-bottom: 0.5rem; display: inline-block;">Synthèse Stratégique</div>
              <div id="syntheseTexteContainer" style="line-height: 1.7; font-size: 1.05rem;">
                  ${texteInterpretation.replace(/\n\n/g, '<br/><br/>')}
              </div>
          </div>
          
          <div style="text-align: center; margin-top: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: center;">
              
              <!-- Appel à l'Action Principal -->
              <div style="margin-bottom: 1rem;">
                  <a href="https://shinkeo.systeme.io/614e81e7" class="btn" style="width: 100%; max-width: 480px; font-size: 1.15rem; font-weight: 800; padding: 1.25rem; box-shadow: 0 0 30px rgba(223, 185, 115, 0.4); text-align: center; justify-content: center; transform: scale(1.05); transition: transform 0.2s;">
                      Recevoir mon diagnostic stratégique pour 49€
                  </a>
                  <p style="color: var(--gold-light); font-size: 0.8rem; margin-top: 0.75rem; font-style: italic;">Inclus : Constat chirurgical, Projection des risques & Plan d'action détaillé.</p>
              </div>

              <div style="width: 100%; max-width: 480px; height: 1px; background: rgba(255,255,255,0.1); margin: 1rem 0;"></div>

              <div style="background: rgba(74, 222, 128, 0.1); border: 1px solid rgba(74, 222, 128, 0.2); padding: 1.5rem; border-radius: 12px; max-width: 480px; text-align: center;">
                  <p style="color: #4ade80; font-weight: 700; margin-bottom: 0.5rem; font-size: 1.1rem;">✨ Félicitations !</p>
                  <p style="color: var(--text-main); font-size: 0.95rem; line-height: 1.5; margin: 0;">Votre bilan vient de vous être envoyé par e-mail<br/><span style="color: var(--text-muted); font-size: 0.85rem;">(Pensez à vérifier vos spams !)</span></p>
              </div>

              <button class="btn btn-secondary" style="width: 100%; max-width: 450px; margin-top: 1rem; opacity: 0.6;" onclick="location.reload()">Réaliser un nouvel audit</button>
          </div>
      </div>
  `;
  conteneurApplication.innerHTML = htmlContenu;

  // Déclencher l'envoi webhook uniquement si le score est bien calculé
  if (score !== null && typeof score !== 'undefined') {
      // On s'assure que le texte de la synthèse est bien capturé depuis l'élément DOM créé
      const elementSynthese = document.getElementById('syntheseTexteContainer');
      if (elementSynthese) {
          EtatApp.analyseGenerale.synthese_strategique = elementSynthese.innerText.trim();
      }
      envoyerVersWebhook();
  }

  // Initialisation du graphique en étoile (Radar Chart)
  setTimeout(() => {
      const canvas = document.getElementById('radarChart');
      if (canvas) {
          const ctx = canvas.getContext('2d');
          const labels = EtatApp.scoresParCategorie.map(c => c.label);
          const data = EtatApp.scoresParCategorie.map(c => c.score);
          
          new Chart(ctx, {
              type: 'radar',
              data: {
                  labels: labels,
                  datasets: [{
                      label: 'Points',
                      data: data,
                      backgroundColor: 'rgba(223, 185, 115, 0.35)', // Gold transparent
                      borderColor: 'rgba(223, 185, 115, 1)',   // Gold solid
                      pointBackgroundColor: 'rgba(223, 185, 115, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(223, 185, 115, 1)',
                      borderWidth: 2
                  }]
              },
              options: {
                  animation: {
                      duration: 1500,
                      easing: 'easeOutQuart'
                  },
                  scales: {
                      r: {
                          angleLines: { color: 'rgba(255, 255, 255, 0.15)' },
                          grid: { color: 'rgba(255, 255, 255, 0.1)' },
                          pointLabels: { color: 'rgba(255, 255, 255, 0.85)', font: { size: 10, family: "'Inter', sans-serif" } },
                          ticks: { 
                              display: false,
                              min: 0, 
                              max: 20, 
                              stepSize: 5 
                          }
                      }
                  },
                  plugins: {
                      legend: { display: false },
                      tooltip: {
                          backgroundColor: 'rgba(15, 16, 18, 0.95)',
                          titleColor: '#dfb973',
                          titleFont: { size: 13, family: "'Inter', sans-serif" },
                          bodyColor: '#fff',
                          bodyFont: { size: 14, weight: 'bold' },
                          borderColor: 'rgba(223, 185, 115, 0.3)',
                          borderWidth: 1,
                          callbacks: {
                              label: function(context) { return "Score: " + context.raw + " / 20"; }
                          }
                      }
                  }
              }
          });
      }
  }, 100);
}

function telechargerRapport() {
  const score = EtatApp.scoreTotal;
  const scoreMaximal = 20 * 4;
  
  let detailParCategorie = "--- DÉTAIL PAR AXE D'ANALYSE ---\n";
  EtatApp.scoresParCategorie.forEach(c => {
      detailParCategorie += "- " + c.label + " : " + c.score + " / 20\n";
  });

  const contenu = 
  "==========================================================\n" +
  "          RAPPORT D'AUDIT - PRINT PROFIT SYSTEM           \n" +
  "==========================================================\n\n" +
  "Date : " + new Date().toLocaleDateString('fr-FR') + "\n" +
  "Utilisateur : " + (EtatApp.utilisateur || "Anonyme") + "\n\n" +
  "----------------------------------------------------------\n" +
  "SCORE FINAL : " + score + " / " + scoreMaximal + "\n" +
  "----------------------------------------------------------\n\n" +
  detailParCategorie + "\n" +
  "----------------------------------------------------------\n\n" +
  "INTERPRÉTATION & RECOMMANDATIONS :\n" +
  (EtatApp.texteInterpretationBrut || "") + "\n\n" +
  "==========================================================\n" +
  "Print Profit System - Optimisez votre Rentabilité";

  const blob = new Blob([contenu], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Audit_PrintProfitSystem_" + new Date().toISOString().split('T')[0] + ".txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


/* ==========================================================================
   SUPPORT CLIENT & WEBHOOK EXPERT
   ========================================================================== */

function setupSupportUI() {
    const supportHTML = `
        <div class="support-floating-btn" onclick="toggleSupportModal(true)">
            <span>💬 Besoin d'aide ?</span>
        </div>

        <div id="supportOverlay" class="support-overlay">
            <div class="support-modal">
                <span class="support-close" onclick="toggleSupportModal(false)">&times;</span>
                <h3>Contactez le support PPS</h3>
                <form id="supportForm" class="support-form" onsubmit="envoyerSupport(event)">
                    <div class="form-group">
                        <label>Type de demande</label>
                        <select id="supportType" class="form-control" required>
                            <option value="" disabled selected>Choisir une option...</option>
                            <option value="bug">Signaler un bug</option>
                            <option value="avis">Donner un avis</option>
                            <option value="technique">Question technique</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Votre message</label>
                        <textarea id="supportMessage" class="form-control" placeholder="Comment pouvons-nous vous aider ?" required></textarea>
                    </div>
                    <button type="submit" class="btn" style="width: 100%;">Envoyer mon message</button>
                </form>
            </div>
        </div>

        <div id="supportNotif" class="support-notification">
            Merci ! Votre message nous a bien été transmis. Réponse sous 24h.
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', supportHTML);
}

function toggleSupportModal(show) {
    const overlay = document.getElementById('supportOverlay');
    overlay.style.display = show ? 'flex' : 'none';
    if (show) {
        document.getElementById('supportType').focus();
    }
}

async function envoyerSupport(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button');
    const type = document.getElementById('supportType').value;
    const message = document.getElementById('supportMessage').value;

    btn.disabled = true;
    btn.innerHTML = "⏳ Envoi en cours...";

    const chargeUtile = {
        type_demande: type,
        message: message,
        email: EtatApp.utilisateur || "Non connecté",
        prenom: EtatApp.utilisateurPrenom || "Anonyme",
        entreprise: EtatApp.utilisateurEntreprise || "Non renseigné",
        horodatage: new Date().toISOString()
    };

    try {
        const response = await fetch("https://hook.eu2.make.com/uy9n7x7ofwqexjba1xmk8tughxpgavdd", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(chargeUtile)
        });

        if (response.ok) {
            toggleSupportModal(false);
            event.target.reset();
            
            // Notification de succès
            const notif = document.getElementById('supportNotif');
            notif.classList.add('active');
            setTimeout(() => {
                notif.classList.remove('active');
            }, 4000);
        } else {
            throw new Error("Erreur serveur");
        }
    } catch (error) {
        alert("Erreur lors de l'envoi. Veuillez réessayer ou contacter support@printprofitsystem.fr");
    } finally {
        btn.disabled = false;
        btn.innerHTML = "Envoyer mon message";
    }
}


// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    if (chargerSession()) {
        EtatApp.indiceQuestionActuelle = -1; // Accueil
    } else {
        EtatApp.indiceQuestionActuelle = -2; // Login
    }
    setupSupportUI(); // Initialiser l'aide
    afficherQuestion();
});
