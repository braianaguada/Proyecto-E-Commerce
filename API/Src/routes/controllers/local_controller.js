const { Local } = require("../../models/Local");
const fetch = require("node-fetch");

const postLocal = async (req, res) => {
  const { name } = req.body;
  try {
    const newLocal = await Local.create({
      name,
    });
    res.status(200).send(newLocal);
  } catch (error) {
    res.status(404).send("Datos incorrectos");
  }
};

const getLocal = async (req, res) => {
  try {
    const newReq = await Local.findAll();
    res.status(200).send(newReq);
  } catch (error) {
    res.status(404).send("No se pudo realizar la consulta");
  }
};

const fetchLocal = (req, res) => {
  try {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => res.send(json));
  } catch (error) {
    res.status(404).send("No se pudo realizar la consulta");
  }
};

const fetchOnlyLocal = (req, res) => {
  try {
    fetch(`https://fakestoreapi.com/products/${req.params.id}`)
      .then((res) => res.json())
      .then((json) => res.send(json));
  } catch (error) {
    res.status(404).send("No se pudo realizar la consulta");
  }
};

const searchLocal = (req, res) => {
  try {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
  } catch (error) {
    res.status(404).send("No se pudo realizar la consulta");
  }
};

module.exports = {
  postLocal,
  getLocal,
  fetchLocal,
  fetchOnlyLocal,
  searchLocal,
};
