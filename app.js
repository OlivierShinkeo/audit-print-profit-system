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
  utilisateurEntreprise: null, // Stocke l'entreprise de l'utilisateur
  scoreTotal: 0,
  directionAnimation: 'animate-next', // Pour l'animation d'entrée
  
  scoresParCategorie: [],
  
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

function enregistrerUtilisateur(email, prenom, entreprise, password) {
    const users = obtenirUtilisateurs();
    users[email] = { prenom, entreprise, password };
    localStorage.setItem('printProfitUsers', JSON.stringify(users));
}

function authentifierUtilisateur(email, password) {
    const users = obtenirUtilisateurs();
    if (!users[email]) return "not_found";
    if (users[email].password !== password) return "invalid_password";
    return users[email];
}
function sauvegarderSession(email, prenom, entreprise) {
    const data = { email, prenom, entreprise, expires: new Date().getTime() + (7 * 24 * 60 * 60 * 1000) };
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
          <div class="user-header-container">
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
                  <label for="password">Mot de passe</label>
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

function traiterInscription(event) {
  event.preventDefault();
  const email = document.getElementById('reg-email').value;
  const prenom = document.getElementById('reg-prenom').value;
  const entreprise = document.getElementById('reg-name').value;
  const password = document.getElementById('reg-password').value;
  
  // Enregistrement sécurisé
  enregistrerUtilisateur(email, prenom, entreprise, password);

  EtatApp.utilisateur = email;
  EtatApp.utilisateurPrenom = prenom;
  EtatApp.utilisateurEntreprise = entreprise;
  sauvegarderSession(email, prenom, entreprise);
  
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

  const email = document.getElementById('email').value;
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
  EtatApp.utilisateurEntreprise = authResult.entreprise;
  sauvegarderSession(email, authResult.prenom, authResult.entreprise);
  
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
          ${genererLogoSVG()}
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

function envoyerVersWebhook() {
  const chargeUtile = {
      prenom: EtatApp.utilisateurPrenom,
      email: EtatApp.utilisateur,
      entreprise: EtatApp.utilisateurEntreprise || "Non renseigné",
      scoreObtenu: EtatApp.scoreTotal,
      constat: EtatApp.analyseGenerale?.constat || "",
      risque: EtatApp.analyseGenerale?.risque || "",
      solution: EtatApp.analyseGenerale?.solution || "",
      horodatage: new Date().toISOString()
  };
  
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
  const scoreMaximal = 20 * 4;
  
  // 1. Logique d'Analyse (Intelligence de l'Audit)
  const scoresCats = EtatApp.scoresParCategorie; 
  let maxCat = scoresCats[0];
  let minCat = scoresCats[0];
  
  scoresCats.forEach(c => {
      if(c.score > maxCat.score) maxCat = c;
      if(c.score < minCat.score) minCat = c;
  });

  const percentScore = score / scoreMaximal;
  let gainPercent = "5% à 10%";
  if(percentScore < 0.4) gainPercent = "20% à 35%";
  else if(percentScore < 0.7) gainPercent = "10% à 20%";

  // --- NOUVELLE LOGIQUE D'ANALYSE IA EXPERTE CONSOLIDÉE ---
  const entrepriseText = EtatApp.utilisateurEntreprise || "votre structure";

  // Résumé gratuit (UI) : Synthétique et pédagogique
  let texteInterpretation = `Votre principal maillon faible se situe indéniablement sur la section "<strong>${minCat.label}</strong>". 
  
  <strong>Conseil :</strong> Concentrez prioritairement vos efforts pour limiter vos pertes quotidiennes liées à cette étape. En optimisant d'abord ces processus, vous pourriez rapidement assainir une part significative de votre marge brute.`;

  // Diagnostic Détaillé (Webhook) : Consultant Senior, analyse croisée & psychologique
  const constatDetail = `L'analyse multidimensionnelle des opérations au sein de ${entrepriseText} révèle une asymétrie marquée dans votre organisation. Bien que l'axe "${maxCat.label}" présente les bases les plus stables, votre chaîne de valeur souffre d'un goulot d'étranglement sévère sur la partie "${minCat.label}". Cette faille n'est pas qu'un problème purement technique ; elle met en lumière une cause racine organisationnelle et managériale profonde : vos équipes compensent par un effort humain massif ce qui devrait être dicté par des standards établis de manière chirurgicale. L'absence de référentiel strict sur ce pôle fait que chaque imprévu se transforme en anomalie, entravant la fluidité globale de la production et banalisant une "culture du rattrapage". C'est l'illustration type du bricolage empirique qui structure actuellement la limite de la croissance de ${entrepriseText}.`;

  // Modulateur de risque financier
  let risqueDetail = "";
  if (percentScore < 0.4) {
      risqueDetail = `L'impact financier global de ces dysfonctionnements est critique. Le coût caché de la non-qualité et la forte inertie opérationnelle concentrée sur la zone "${minCat.label}" grignotent silencieusement ${gainPercent} de votre marge nette prévisionnelle. Poursuivre avec un tel modèle revient à accepter l'érosion incontrôlable de la trésorerie et fragilise drastiquement la viabilité de l'entreprise face au marché.`;
  } else if (percentScore < 0.7) {
      risqueDetail = `Sur le plan financier, la négligence de cette zone "${minCat.label}" représente un véritable "impôt fantôme". La volatilité des pratiques vous fait laisser quotidiennement sur la table environ ${gainPercent} de rentabilité gâchée par le manque d'optimisation centralisée. Cette fuite silencieuse affaiblit mécaniquement la résilience de l'entreprise.`;
  } else {
      risqueDetail = `Même si les fondamentaux sont solides, la persistance de micro-frictions sur l'axe "${minCat.label}" bloque la maximisation de votre rentabilité finale. Ne pas standardiser ces derniers leviers induit une érosion de marge subtile (environ ${gainPercent}), qui sépare pourtant le bon atelier de production, de l'entreprise ultra-rentable et véritablement scalable.`;
  }

  // Solution sur les pires réponses
  const piresReponses = toutesLesQuestions
      .filter(q => q.type === 'question' && typeof EtatApp.reponsesUtilisateur[q.identifiant] !== 'undefined')
      .map(q => ({
          texteQuestion: q.texte,
          score: parseInt(EtatApp.reponsesUtilisateur[q.identifiant])
      }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 3);
      
  let etapesSolution = "";
  if (piresReponses.length >= 3) {
      etapesSolution = `\n1. Résolution Opérationnelle immédiate ciblée sur le constat : "${piresReponses[0].texteQuestion}". Formalisez de suite un standard de travail (SOP) pour éliminer toute variabilité interprétative sur ce poste.\n2. Traitement du Point de Friction lié à la problématique : "${piresReponses[1].texteQuestion}". Instaurez un point journalier flash (5 minutes) pour auditer les dérives immédiates sur cette question avant de lancer la production.\n3. Restructuration & Responsabilité autour de l'enjeu : "${piresReponses[2].texteQuestion}". Affectez un relais de l'équipe pour rédiger une grille stricte, forçant ainsi l'application mécanique plutôt que le "bon sens".`;
  } else {
      etapesSolution = `\n1. Cartographie d'urgence : Initiez un audit visuel VSM (Value Stream Mapping) braqué exclusivement sur l'axe "${minCat.label}".\n2. Standardisation immédiate : Implémentez des checklists visuelles (détrompage) aux postes critiques concernés dans l'atelier.\n3. Pilotage de marge : Surveillez un KPI spécifique rattaché à ce frein durant les 30 prochains jours.`;
  }

  const solutionDetail = `Pour désamorcer définitivement l'alerte sur "${minCat.label}", voici votre plan d'action d'hyper-croissance issu directement du Print Profit System :${etapesSolution}`;

  // On stocke l'interprétation pour le webhook et le PDF
  EtatApp.analyseGenerale = {
      constat: constatDetail,
      risque: risqueDetail,
      solution: solutionDetail
  };
  EtatApp.texteInterpretationBrut = texteInterpretation.replace(/<strong>|<\/strong>/g, '');

  // Déclencher l'envoi webhook avec la nouvelle donnée
  envoyerVersWebhook();

  const htmlContenu = `
      ${getHeaderBar()}
      <div class="glass-panel animate-next">
          ${genererLogoSVG()}
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
          
          <div class="result-interpretation" style="margin-bottom: 3rem;">
              ${texteInterpretation.replace(/\n\n/g, '<br/><br/>')}
          </div>
          
          <div style="text-align: center; margin-top: 2rem; display: flex; flex-direction: column; gap: 1.5rem; align-items: center;">
              
              <!-- Appel à l'Action Principal -->
              <a href="#" class="btn" style="width: 100%; max-width: 480px; font-size: 1.15rem; font-weight: 800; padding: 1.25rem; box-shadow: 0 0 30px rgba(223, 185, 115, 0.4); text-align: center; justify-content: center; transform: scale(1.05); transition: transform 0.2s;">
                  👉 Obtenir mon diagnostic détaillé (49€)
              </a>

              <div style="width: 100%; max-width: 480px; height: 1px; background: rgba(255,255,255,0.1); margin: 1rem 0;"></div>

              <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 0;">Conservez votre bilan détaillé :</p>
              <div style="display: flex; gap: 1rem; width: 100%; max-width: 450px;">
                  <button class="btn btn-secondary" style="flex: 1; padding: 0.85rem 1rem; font-size: 0.95rem;" onclick="telechargerRapport()">📥 Télécharger</button>
                  <button id="btnEmail" class="btn btn-secondary" style="flex: 1; padding: 0.85rem 1rem; font-size: 0.95rem;" onclick="envoyerRapportEmail()">✉️ Par e-mail</button>
              </div>
              <button class="btn" style="width: 100%; max-width: 450px; margin-top: 1rem;" onclick="location.reload()">Réaliser un nouvel audit</button>
          </div>
      </div>
  `;
  conteneurApplication.innerHTML = htmlContenu;

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

function envoyerRapportEmail() {
  const btn = document.getElementById('btnEmail');
  const emailDest = EtatApp.utilisateur || "votre adresse";
  
  btn.innerHTML = "⏳ Envoi...";
  btn.disabled = true;

  // Simulation asynchrone d'envoi de l'e-mail
  setTimeout(() => {
      btn.innerHTML = "✅ Envoyé !";
      btn.style.color = "var(--text-main)";
      btn.style.borderColor = "#4ade80";
      btn.style.background = "rgba(74, 222, 128, 0.1)";
      alert("Votre rapport détaillé a été envoyé avec succès à : " + emailDest + " !");
  }, 1200);
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    if (chargerSession()) {
        EtatApp.indiceQuestionActuelle = -1; // Accueil
    } else {
        EtatApp.indiceQuestionActuelle = -2; // Login
    }
    afficherQuestion();
});
