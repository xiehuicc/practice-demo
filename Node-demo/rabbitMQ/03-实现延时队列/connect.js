const amqp = require('amqplib');
let connection = null

module.exports = {
  connection,
  init: () => amqp.connect('amqp://admin:admin@47.103.142.69:5672/?heartbeat=30').then(conn => {
    connection = conn;
    console.log('rabbitMQ connection established');
    return connection
  })
}