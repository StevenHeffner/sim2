module.exports= {
  getAll: (req, res) => {
    const db = req.app.get('db')
    console.log(db)

    db.getAllHouses()
    .then( response => res.status(200).send(response))
    .catch( (error) => res.status(500).send(error) );
  }
}