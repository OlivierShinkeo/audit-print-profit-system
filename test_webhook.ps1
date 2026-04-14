$makeWebhookUrl = 'https://hook.eu2.make.com/rhsb4t60cu7xdauncvaf7wpjou949hlo'

$payload = @{
    prenom = "Julien"
    email = "freelance@google.com"
    entreprise = "Impression Express"
    scoreObtenu = 52
    constat = "Lors de l'audit, nous avons croisé vos résultats sur l'axe `"Flux et Pilotage`" avec vos pratiques de production. Le constat est sans appel : votre organisation subit des frictions majeures à ce niveau. Cela reflète une absence de standardisation qui génère des micro-pertes fréquentes et désorganise la chaîne de valeur."
    risque = "L'impact financier de ces dysfonctionnements sur l'axe `"Flux et Pilotage`" est lourd. Au-delà du temps perdu, le coût de la non-qualité et de l'inaction grignote silencieusement 10% à 20% de votre marge nette. Poursuivre ainsi revient à accepter une fuite de rentabilité continue."
    solution = "Voici le plan d'action immédiat selon la méthode Print Profit System :`n1. Audit des processus bloquants : Cartographiez précisément les étapes problématiques sur l'axe `"Flux et Pilotage`".`n2. Standardisation immédiate : Implémentez des checklists visuelles et strictes aux postes de travail concernés.`n3. Pilotage de la marge : Mettez en place 2 indicateurs clés de performance (KPI) pour mesurer la réduction de ces frictions sous 30 jours."
    horodatage = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ")
}

$jsonBody = $payload | ConvertTo-Json -Depth 10 -Compress

Invoke-RestMethod -Uri $makeWebhookUrl -Method Post -Body $jsonBody -ContentType 'application/json'
Write-Host "Test Webhook TOUT-EN-UN envoyé pour mapping Make !"
