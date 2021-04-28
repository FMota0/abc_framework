const ResearchProgram = require("../models/ResearchProgram");

const verifyOwner = async (req, res, next) => {
  try {
    const { programId } = req.params;
    const researchProgram = await ResearchProgram.findById(programId);
    if (researchProgram.ownerId !== req.user._id.toString()) {
      return res.status(401).send("Não autorizado");
    }
    req.researchProgram = researchProgram;
    next();
  } catch (e) {
    return res.status(400).send("Algo errado aconteceu");
  }
}

module.exports = verifyOwner;