import httpStatus from "http-status";

//'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
const getStatusCode = (method) => {
  switch (method) {
    case "GET":
    case "PUT":
    case "PATCH":
    case "DELETE":
      return httpStatus.OK;
    case "POST":
      return httpStatus.CREATED;
    default:
      return httpStatus.OK;
  }
};

const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .then((data) => {
      const statusCode = getStatusCode(req.method);
      res.status(httpStatus.OK).json({
        statusCode,
        data,
      });
    })
    .catch(next);
};

export { catchAsync };
