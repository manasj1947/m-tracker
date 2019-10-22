const authPool = require('../connectionPool').authPool;
const promiseAuthPool = authPool.promise();

export const getUsers = (req, res, next) => {
  try {
    promiseAuthPool.query("SELECT * from users")
      .then(data => {
        res.send(data[0]);
        return next();
      })
      .catch(e => {
        return next(e);
      })

  } catch (e) {
    return next(e)
  }
}

export const createUser = (req, res, next) => {
  try {
    const { name, email, age, gender } = req.body;
    const query = 'INSERT INTO users (`name`, `email`, `age`, `gender`) VALUES (?,?,?,?)';
    promiseAuthPool.query(query, [name, email, age, gender])
      .then(data => {
        const query = 'SELECT * from users where id=?';
        promiseAuthPool.query(query, [data[0].insertId])
          .then(data => res.send(data[0]))
          .catch(err => next(err))
      })
      .catch(e => {
        return next(e);
      })
  } catch (e) {
    return next(e)
  }
}

export const removeUser = (req, res, next) => {
  try {
    const { id } = req.body;
    const query = 'DELETE FROM `users` WHERE (`id`=?)';
    promiseAuthPool.query(query, [id])
      .then(data => {
        res.send({ status: true, deletedId: id })
      })
      .catch(e => {
        return next(e);
      })
  } catch (e) {
    return next(e)
  }
}

export const updateUser = (req, res, next) => {
  try {
    const { name, email, age, gender, id } = req.body;
    const query = 'UPDATE `users` SET `name` = ?, `email` = ?, `age` = ?, `gender` = ? WHERE (`id` = ?)';
    promiseAuthPool.query(query, [name, email, age, gender, id])
      .then(data => {
        const query = 'SELECT * from users where id=?';
        promiseAuthPool.query(query, [id])
          .then(data => res.send(data[0]))
          .catch(err => next(err))
      })
      .catch(e => {
        return next(e);
      })
  } catch (e) {
    return next(e)
  }
}

export const getQuestions = (req, res, next) => {
  try {
    promiseAuthPool.query("SELECT * from questions")
      .then(data => {
        res.send(data[0]);
        return next();
      })
      .catch(e => {
        return next(e);
      })

  } catch (e) {
    return next(e)
  }
}

export const createQuestion = (req, res, next) => {
  try {
    const { question_text, type } = req.body;
    const query = 'INSERT INTO questions (`question_text`, `type`) VALUES (?,?)';
    promiseAuthPool.query(query, [question_text, type])
      .then(data => {
        const query = 'SELECT * from questions where id=?';
        promiseAuthPool.query(query, [data[0].insertId])
          .then(data => res.send(data[0]))
          .catch(err => next(err))
      })
      .catch(e => {
        return next(e);
      })
  } catch (e) {
    return next(e)
  }
}

export const updateQuestion = (req, res, next) => {
  try {
    const { id, question_text, type } = req.body;
    const query = 'UPDATE `questions` SET `question_text` = ?, `type` = ? WHERE (`id` = ?)';
    promiseAuthPool.query(query, [question_text, type, id])
      .then(data => {
        const query = 'SELECT * from questions where id=?';
        promiseAuthPool.query(query, [id])
          .then(data => res.send(data[0]))
          .catch(err => next(err))
      })
      .catch(e => {
        return next(e);
      })
  } catch (e) {
    return next(e)
  }
}

export const removeQuestion = (req, res, next) => {
  try {
    const { id } = req.body;
    const query = 'DELETE FROM `questions` WHERE (`id`=?)';
    promiseAuthPool.query(query, [id])
      .then(data => {
        res.send({ status: true, deletedId: id })
      })
      .catch(e => {
        return next(e);
      })
  } catch (e) {
    return next(e)
  }
}