exports.getServices = (req, res) => {
    // Mock data - replace with actual data retrieval logic
    const services = ['Aadhaar', 'UPI', 'DigiLocker'];
    res.json(services);
  };

  exports.getTutorial = (req, res) => {
    const { service } = req.body;
    // Mock data - replace with actual tutorial content
    const tutorials = {
      Aadhaar: 'Aadhaar tutorial content...',
      UPI: 'UPI tutorial content...',
      DigiLocker: 'DigiLocker tutorial content...'
    };
    res.json({ tutorial: tutorials[service] || 'Tutorial not found' });
  };