app.post('/users', [UsersController.insert]);

app.get('/users/:userId', [UsersController.getById]);
