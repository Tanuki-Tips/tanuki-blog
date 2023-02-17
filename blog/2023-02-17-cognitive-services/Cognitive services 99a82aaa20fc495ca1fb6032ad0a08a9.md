---
slug: cognitive-services-pt1
title: Cognitive Services pt1 🧠
authors: [antoine]
tags: [Cogntive-Service, Microsoft, Azure, AI, Service]
---

# Cognitive services

### **l’Intelligence Artificielle est la création de logiciels qui imitent les capacités et les comportements humains**


 [GitHub - Cognitive Services](https://github.com/AntoineSmet/CognitiveServices.git)

```bash
git clone https://github.com/AntoineSmet/CognitiveServices.git
```



## Introduction : artificial intelligence as service

Les AIaaS (artificial intelligence as service) sont une offre qui vise à facilter les entreprises à ajouter des services d’IA dans leurs applications. Celle-ci ne demande ni développement de modèle ni d’entraînement car Azure fournit directement leurs propres modèles dont certains sont personnalisables.

Cela permet aux entreprises de gagner du temps et des coûts en matière de développement et de maintien. De plus cela ne nécessite pas de grande compétence en tant que data scientist !

Comment implémenter de l’intelligence artificielle dans nos applications grâce aux cognitive *services ?


> 💡  Services fait référence à un ensemble de fonctionnalités qui peuvent être utilisées pour développer des applications et des solutions .



Les Azures Cognitive Services sont des services d’intelligence artificielle facile à intégrer dans vos applications et solutions ! Ils se présentent comme des appels au *API et/ou *SDK à effectuer afin d’ajouter facillement des composants d’intelligence artificielle dans vos applications ! Les services Azure Cognitive Services permettent aux développeurs de bénéficier de la puissance de l'IA sans avoir à construire et à entraîner eux-mêmes les modèles d'IA complexes, ce qui peut être coûteux et prendre beaucoup de temps. 


> 💡  Kit de développement logiciel est un ensemble d'outils, de bibliothèques et de documentation qui aide les développeurs à créer des applications pour une plate-forme ou un système d'exploitation spécifique


> 💡 **API (** *Application Programming Interface )* est pour faire de façon imagée , un serveur d’un restaurant qui vient prendre la nourriture(service, données,… ) de la cuisine (base de données ) pour la servir au client


Avant que nous regardions comment intégrer les differentes solutions, prenons le temps de différenciers les services que nous propose Azure ! 

Je vais les séparer en 3 catégories

![Screenshot 2023-02-06 202724.png](Cognitive%20services%2099a82aaa20fc495ca1fb6032ad0a08a9/Screenshot_2023-02-06_202724.png)

0. Machine Learning

Azure Machine Learning, cette solution de service cloud permet de gérer des projets de Machine Learning. Souvent utilisé par les data scientist pour l’apprentissage et le déploiement des modèles, et gestion du *MLOps.


> 💡 MLOps ( machine learning + devOps ) est un ensemble de pratiques qui vise à déployer et à maintenir des modèles d'apprentissage automatique en production grâce à un développement continu dans le domaine logiciel


1. Custom Model

Un custom model est comme sont nom l’indique un modèle que l’on va personnaliser avec nos propres données afin de remplir à une problématique précise !

Le custom model est un modèle d'apprentissage qui est conçu pour répondre aux besoins spécifiques d'une personne ou d'une organisation. Pour le consommer Il nous faudra simplement rajouter nos données personnelles dans un dataset  afin de l’affiner. 

Mais comment un custom model sans donnée de base peut-être efficace avec si peu de donnée ?

![elon musk.jpg](Cognitive%20services%2099a82aaa20fc495ca1fb6032ad0a08a9/elon_musk.jpg)

La raison principale est l'utilisation d'algorithmes d'apprentissage automatiques performants (Ici conçu par Microsoft). Mais c’est vrai qu’avec un modèle entraîné avec peu de données, il nous est difficile d'obtenir une précision élevée, mais les custom model de ce type utilisent des techniques d'apprentissage supervisées pour tirer parti au mieux des données disponibles. Cependant, pour obtenir les meilleurs résultats, il est recommandé de fournir un dataset suffisant et diversifié pour l'entraînement.


> 📢 Le grand point positif du custom model que propose Azure est la vitesse de résultat que l’on obtient avec un petit dataset



1. Pre-Trained Model

Un modèle pré-entrainé est un modèle créé par un tiers et prêt à être utilisé sans fournir de dataset ni d’entrainement. Cette personne/entreprise a déjà effectué ce travail de création de modèle et d’entrainement. Les modèles sont souvent utilisés par l’utilisateur si le modèle correspond au même cas précis. Il est géneralement utilisé comme point de départ ou phase de test par les data scientist au lieu de commencer avec un modèle de 0.

Dans notre cas Azure (Microsoft) a créé un modèle à grande échelle avec un énorme *dataset géneralisé pour toucher le plus grand nombre possible d’utilisateurs voulant utiliser ce service.


> 💡 Dataset (jeu de données) est un mot couramment utilisé en machine learning. Ils regroupent un ensemble de données qui peuvent se présenter sous différents formats (textes, , images, son , vidéo etc…).



 

Voici un tableau reprenant tous les cognitive services et indiquant s’il fonctionne avec du pre-Trained Model ou du custom Model


> 📢 No training data required = Pre-trained Model

> 📢 You provide some or all training data = Custom Model


![cognitve service.png](Cognitive%20services%2099a82aaa20fc495ca1fb6032ad0a08a9/cognitve_service.png)

# Les domaines des **Cognitive Services**

---

> 📢 Le  repos github contient de nombreux exemples d’implémentation


![Screenshot 2023-02-07 113531.png](Cognitive%20services%2099a82aaa20fc495ca1fb6032ad0a08a9/Screenshot_2023-02-07_113531.png)

## Les différents domaines d’**Azure Cognitive Services**

- **Speech** conçu pour transcrire et convertir la parole en texte
    
    Reconnaissance vocale
    
    Synthèse vocale
    
    Traduction vocale
    
    Reconnaissance de l’orateur
    
- **Langage** permet de comprendre et de traiter le langage naturel, il est conçu pour comprendre et traiter du texte écrit
    
    Reconnaissance d’entité
    
    Analyse de sentiment
    
    Réponse aux questions
    
    Language Understanding
    
    Traducteur
    
- **Vision** permet d'analyser et de comprendre les images/vidéos
    
     Face Api
    
    Custom Vision
    
    Computer vision
    
- **Decision** vous offre la possibilité de faire des prédictions ou des recommandations
    
    Détecteur d’anomalies
    
    Modérateur 
    
    Personalizer
    
- **Génération de contenue (OpenAi)** donne la possibilté de créer des images, textes , ect…
    
    Les services d’OpenAi ( Dall-e,..)
