---
slug: github-actions-introduction
title: GitHub Actions - Ton premier workflow step by step!
authors: [lloyd]
tags: [github, actions, workflows, devops]
---

# GitHub Actions - Ton premier workflow step by step!

## Pour commencer, GitHub Action, c'est quoi?

GitHub Actions est une fonctionnalité de GitHub. Disponible depuis le repo de ton projet, elle te permet d’automatiser tes pipelines de CI/CD, de test, de securité, …

GitHub Actions te permet aussi d’exécuter des workflows lorsque d’autres événements se produisent dans ton repo. Par exemple, tu peux exécuter un workflow pour ajouter automatiquement les tags appropriés chaque fois que quelqu’un crée une issue.

GitHub fournit des machines virtuelles Linux, Windows et macOS pour exécuter tes workflows, ou tu peux héberger tes propres runners dans ton propre centre de données ou ton infrastructure cloud.

En gros, il y en a pour tout les goûts.

## Le nerf de la guerre: les workflows.

Selon la documentation de Microsoft, un workflow est un processus configurable, reproductible et défini dans un fichier. Et je n'ai rien à rajouter la dessus tellement ça coule de source.

Quand tu utilises GitHub Actions, tu définis la configuration de ton workflow dans un fichier YAML. 

Ce fichier doit être stocké dans ton projet au sein d’un dossier nommé .github comprenant un autre dossier workflows. Ce chemin à son importance car il permettra à GitHub d'aller retrouver ton fichier pour l'executer.

Afin de mieux comprendre son fonctionnement, nous allons encore creuser un peu.

## Le Runner.

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled.png)

Ton workflow doit accéder à une machine ou un GPU doté du système d’exploitation pour pouvoir exécuter les actions. C'est là que GitHub Actions utilise ces Runner. Ce sont des ordinateurs configurés pour exécuter les étapes de déploiement. À la place d’une exécution manuelle des commandes, le service GitHub Actions indique au Runner d’exécuter les étapes que tu as définies dans le fichier YAML de workflow.

Aussi, GitHub Actions fournit plusieurs types de Runner pour les différents systèmes d’exploitation, par exemple Linux ou Windows.

## The eyes of the Triggers

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%201.png)

Le Trigger va indiquer à GitHub Actions quand exécuter ton workflow et il en existe plusieurs types:

- Le push-event-trigger (CI trigger ou trigger d’intégration continue pour utiliser mon meilleur franglais) permet d'executer une action à chaque fois que l'on apporte une modification à une branche spécifique.
- L'execution ton workflow par planification
- Le déclenchement manuel
- ...

## Les Steps.

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%202.png)

Un Step représente une opération unique qui sera effectuée par le workflow. Ce Step est similaire aux commandes individuelles que tu exécutes dans Bash ou PowerShell. C'est au sein de votre fichier YAML que tu vas définir l'ordre de ces différentes étapes.

## Les Jobs.

Les Jobs sont tout simplement une succession de steps, ni plus, ni moins! Lors de déploiements plus gros ou plus complexe, il n'est pas rare de voir un workflow contenant plusieurs jobs.

## Anatomie d'un workflow (dernière étape avant la grande aventure).

Regardons de plus près cet exemple et examinons en détail chaque partie du fichier :

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%203.png)

- *name* : c'est le nom du workflow. Il sera est affiché dans l’interface web GitHub.
- *on* : c'est notre Trigger! Il indique au workflow quand s’exécuter. Dans ce cas, on: [workflow_dispatch] indique que l'on va le déclencher manuellement.
- *jobs* : ça regroupe toutes les tâches dans ton workflow.
- *say-hello* : c'est le nom du job.
- *runs-on* : pas compliqué, c'est le Runner.
- *steps* : liste la séquence des étapes à exécuter dans le travail.

## Créer et exécuter son premier workflow de base! (Youpi on y est!)

Maintenant que tu es devenu un as de la théorie, il est temps de tout mettre en pratique. Je te passe les étapes de création d'un repo sur GitHub et on retourne directement voir notre fichier YAML. (Oui celui-ci n'a qu'un seul step, l'autre c'était un exemple, mais si tu l'as vu, ça prouve que tu suis!)

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%204.png)

Pour que GitHub puisse retrouver ton workflow, il est important de placer ton fichier dans un endroit bien précis. Au sein de ton projet, crée un dossier nommé *.github*, qui lui même contient un dossier *workflows.*

C'est celui-ci qui va contenir tes fichiers YAML.

Une fois que tout est à sa place, il te suffit de commit et de push ton projet avec les commandes git habituelles.

## Run workflow! Run!!!!

A ce stade, si t'as bien tout suivi, ton workflow a été détecté par GitHub et donc, doit apparaitre dans la liste de tes actions.

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%205.png)

Pour executer ce beau monde, vu que l'on à choissi un trigger de type manuel, clique d'abord sur ton workflow et ensuite sur Run Workflow. En gros, comme sur la photo.

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%206.png)

Cette opération va démarrer une nouvelle exécution de votre workflow. Cela peut prendre un certain temps en fonction de la complexité de celui-ci. La page s’actualise automatiquement et te montre où en est l'execution (file d’attente, en cours d’exécution ou terminé).

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%207.png)

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%208.png)

## Vérifier l'execution de notre workflow.

C'est bien beau tout ça, mais ton workflow, il était pas sensé me dire bonjour?

Pas de panique, je vais te montrer l'endroit où tu pourras aller vérifier que ton workflow s'est bien exécuté. (ou pas d'ailleur)

Pour celà, il te suffit de raflaichir la page si ça ne s'est pas fait tout seul, de cliquer sur ton workflow et là, tu devrait tomber sur la liste de tes jobs ici encore une fois, on en a qu'un, donc tout est ok).

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%209.png)

Si l'on va encore plus loin et que l'on clique sur notre job, la page d'informations de celui-ci s’affiche, avec le journal des steps exécutés par le workflow.

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%2010.png)

En déroulant notre step "Dis bonjour Tanuki", on peut y voir l'execution de celui-ci!

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%2011.png)

Et voilà, maintenant t'es le nouveau roi de la GitHub Action!

N'hésites pas à tester des choses car comme je te l’ai dit plus haut, les GitHub Action de servent pas uniquement à déployer.

Le boutton *New workflow* te permet d'accéder à une multitude d'exemple que tu n'auras plus qu'a modifier.

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%2012.png)

![Untitled](GitHub%20Actions%20-%20Ton%20premier%20workflow%20step%20by%20step%200e9e63cc6ea04ee3b4068124af3a72f6/Untitled%2013.png)