function helloWorld(req: any, res: any) {
  const message: string = req.query.message || req.body.message || 'Hello hoge!';
  res.status(200).send(message);
}

module.exports = {
  helloWorld: helloWorld
}