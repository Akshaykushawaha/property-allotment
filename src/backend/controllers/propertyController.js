const Property = require('../models/Property');

const showProperty = async (req, res) => {
    try {
      console.log("called showProperty!");
      const property = await Property.find({});
      console.log ("this is the resposne: ");
      console.log (property);
      console.log ("this is end.");
      res.status(200).json(property);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = { showProperty };