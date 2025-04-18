const { Kafka } = require('kafkajs');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Message = mongoose.model('Message', {
  value: String,
  timestamp: { type: Date, default: Date.now }
});


const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const value = message.value.toString();
      console.log('Message reçu :', value);

      // Sauvegarde en base de données
      const newMsg = new Message({ value });
      await newMsg.save();
    },
  });
};

run().catch(console.error);
