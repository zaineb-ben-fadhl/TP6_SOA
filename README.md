# TP Kafka avec Node.js et MongoDB

## 📝 Description

Ce projet est un **TP pratique** pour illustrer l’utilisation de **Kafka** comme système de messagerie, **Node.js** comme environnement de traitement, et **MongoDB** pour la persistance des messages.

Le but est de :
- Produire et consommer des messages Kafka.
- Stocker les messages dans une base de données MongoDB.
- Exposer une API REST permettant de consulter les messages enregistrés.

---

## 📦 Technologies utilisées

- [Apache Kafka](https://kafka.apache.org/)
- [Node.js](https://nodejs.org/)
- [KafkaJS](https://kafka.js.org/) - Client Kafka pour Node.js
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/) - ODM MongoDB pour Node.js
- [Express](https://expressjs.com/) - Framework web pour l'API
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Structure du projet

```bash
SOAtp6/
│
├── consumer.js          # Consommateur Kafka qui sauvegarde les messages dans MongoDB
├── producer.js          # (Optionnel) Producteur Kafka pour envoyer des messages
├── server.js            # API REST Express pour consulter les messages
├── .env                 # Variables d’environnement (MONGO_URI, etc.)
└── package.json         # Dépendances Node.js
