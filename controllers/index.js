async function getIndex(_req, res) {
  res.render("index");
}

async function getAbout(_req, res) {
  res.render("about");
}

export { getIndex, getAbout };
