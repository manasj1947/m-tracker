import {
  getUsers, createUser, updateUser, getQuestions, createQuestion, updateQuestion, removeUser, removeQuestion
} from './services'

export default function (app) {
  app.get('/get-users', getUsers);
  app.post('/create-user', createUser);
  app.post('/update-user', updateUser);
  app.post('/remove-user', removeUser);
  app.post('/get-questions', getQuestions);
  app.post('/create-question', createQuestion);
  app.post('/update-question', updateQuestion);
  app.post('/remove-question', removeQuestion);
  app.post('/get-migraines');
  app.post('/add-migraine');
  app.post('/update-migraine');
  app.post('/remove-migraine');
};