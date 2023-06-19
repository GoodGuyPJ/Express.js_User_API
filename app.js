const express = require('express');
const app = express();

// example data taken here
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
];

// GET "/api/users" for the endpoint
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET "/api/users/:id" for the user endpoint
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    res.json(user);
  }
});

// Start the server
const port = 3000; 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
