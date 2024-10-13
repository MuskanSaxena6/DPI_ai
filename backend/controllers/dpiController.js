const tutorials = {
  aadhaar: {
    en: {
      title: 'How to use Aadhaar',
      steps: [
        'Visit the nearest Aadhaar enrollment center',
        'Provide necessary documents',
        'Complete biometric verification',
        'Receive your Aadhaar number'
      ]
    },
    hi: {
      title: 'आधार का उपयोग कैसे करें',
      steps: [
        'निकटतम आधार नामांकन केंद्र पर जाएं',
        'आवश्यक दस्तावेज प्रदान करें',
        'बायोमेट्रिक सत्यापन पूरा करें',
        'अपना आधार नंबर प्राप्त करें'
      ]
    },
    te: {
      title: 'ఆధార్‌ను ఎలా ఉపయోగించాలి',
      steps: [
        'సమీపంలోని ఆధార్ నమోదు కేంద్రాన్ని సందర్శించండి',
        'అవసరమైన పత్రాలను అందించండి',
        'పూర్తి బయోమెట్రిక్ ధృవీకరణ',
        'మీ ఆధార్ నంబర్ పొందండి'
      ]
    }
  }
  // Add more services
};
exports.getServices = (req, res) => {
    // Mock data - replace with actual data retrieval logic
    const services = ['Aadhaar', 'UPI', 'DigiLocker'];
    res.json(services);
  };

  /*
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
  */
  exports.getTutorial = (req, res) => {
    const { service, language } = req.body;
    const tutorial = tutorials[service]?.[language];
    
    if (!tutorial) {
      return res.status(404).json({ message: 'Tutorial not found' });
    }
    
    res.json(tutorial);
  };