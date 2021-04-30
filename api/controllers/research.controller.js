const createResearch = async (req, res) => {
  const {
    title,
    description,
    strategy,
    link,
    method,
  } = req.body;
  const { researchProgram } = req;
  researchProgram.researches = [
    ...researchProgram.researches,
    {
      title,
      description,
      strategy,
      link,
      method,
    }
  ];
  await researchProgram.save();
  res.send(researchProgram);
};

const updateResearch = async (req, res) => {
  const { id } = req.params;
  const { title, description, link } = req.body;
  const { researchProgram } = req;

  const research = researchProgram.researches
    .find(({ _id }) => _id.toString() === id);
  
  research.title = title;
  research.description = description;
  research.link = link;

  await researchProgram.save();
  res.send(researchProgram);
};

const deleteResearch = async (req, res) => {
  const { id } = req.params;
  const { researchProgram } = req;
  
  researchProgram.researches = researchProgram.researches
    .filter(({ _id }) => _id.toString() !== id);
  
  await researchProgram.save();

  res.send(researchProgram);
};

module.exports = {
  createResearch,
  updateResearch,
  deleteResearch,
};