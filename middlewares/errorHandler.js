export default function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(500).send('Error 500');
}