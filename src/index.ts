function helloWorld(req: any, res: any) {
  const message: string = req.query.message || req.body.message || 'Hello Nishizawa Shooooorisan!';
  res.status(200).send(message);
}

module.exports = {
  helloWorld: helloWorld
}