import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const performCalculation = (num1, num2, operation) => {
  switch (operation) {
    case 'Add':
      return num1 + num2;
    case 'Subtract':
      return num1 - num2;
    case 'Multiply':
      return num1 * num2;
    case 'Divide':
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    default:
      return 'Invalid operation';
  }
};

const performScientificCalculation = (num, operation) => {
  switch (operation) {
    case 'SquareRoot':
      return Math.sqrt(num);
    // Add more scientific functions as needed
    default:
      return 'Invalid operation';
  }
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  const result = performCalculation(parseFloat(num1), parseFloat(num2), operation);
  res.send(`The result of ${operation.toLowerCase()}ing ${num1} and ${num2} is: ${result}`);
});

app.post('/calculate-scientific', (req, res) => {
  const { num, operation } = req.body;
  const result = performScientificCalculation(parseFloat(num), operation);
  res.send(`The result of ${operation.toLowerCase()}ing ${num} is: ${result}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
