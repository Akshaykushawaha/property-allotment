const AccessDb = require('../models/access');

const showAllAccess = async (req, res) => {
  try {
    console.log("called showProperty!");
    const AccessDbList = await AccessDb.find({}).toArray({});
    console.log("this is the resposne: ");
    console.log(AccessDbList);
    console.log("this is end.");
    res.status(200).json(AccessDbList);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const showAccess = async (req, res) => {
  let { requestid } = req.params;
  if ((typeof requestid) == "string") {
    requestid = parseInt(requestid);
  }
  try {

    const requestData = await AccessDb.findOne({ requestId: requestid });

    if (!requestData) {
      return res.status(404).json({ message: 'Request data not found' });
    }

    console.log('RequestData:', requestData);
    res.status(200).json(requestData);
  } catch (error) {
    console.error('Error finding Request Data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { showAllAccess, showAccess };