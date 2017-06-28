const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require('../db/queries');
const validTodo = require('../lib/validations').validTodo;
const validId = require('../lib/validations').validId;
const setStatusRenderError = require('../lib/responseHelpers');
// console.log("hello");

router.get('/', (req, res) => {
  // if route has query string param user_id, fetch all todos for user_id with knex.
  if (req.session.user_id) {
    return knex('todo')
      .where({
        user_id: req.session.user_id
      })
      .then(todos => {
        res.render('all', {
          todos: todos
        });
      });
  } else {
    res.render('all');
  }

});

router.get('/layouts', (req, res) => {
  res.render('layouts');
});




// router.get('/login', (req, res) => {
//   res.render('login');
// });


router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  respondAndRenderTodo(id, res, 'single');
});




router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  respondAndRenderTodo(id, res, 'edit');

});

router.post('/', (req, res) => {
  validateTodoRenderError(req, res, (todo) => {
    todo.date = new Date();
    todo.user_id = req.session.user_id;
    queries
      .create(todo)
      .then(ids => {
        const id = ids[0];
        res.redirect(`/todo/${id}`)

      });
  });

});

router.put('/:id', (req, res) => {
  validateTodoRenderError(req, res, (todo) => {
    const id = req.params.id;
    todo.date = new Date();
    queries
      .update(id, todo)
      .then(() => {
        res.redirect(`/todo/${id}`);

      });
  });


});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  if (validId(id)) {
    queries
      .delete(id)
      .then(() => {
        res.redirect('/todo')
      });
  } else {
    setStatusRenderError(res, 500, 'Invalid id');
  }

});

function validateTodoRenderError(req, res, callback) {
  if (validTodo(req.body)) {
    const todo = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
    };


    callback(todo)
  } else {
    setStatusRenderError(res, 500, 'Invalid todo');

  }

}

function respondAndRenderTodo(id, res, viewName) {
  if (validId(id)) {
    queries
      .getOne(id)
      .then(todo => {
        res.render(viewName, todo)
      });
  } else {
    setStatusRenderError(res, 500, 'Invalid id');
  }
}



module.exports = router;
