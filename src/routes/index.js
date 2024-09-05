const express = require("express");
const booksRoutes = require("./books");
const authRoutes = require("./auth");
const reviewsRoutes = require("./reviews");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/books",
    route: booksRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/reviews",
    route: reviewsRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
