"use strict";

module.exports = Alert => {
  Alert.getAllAlerts = async () => {
    const alertFilter = {
      where: {
        active: false,
      },
    };
    const alerts = await Alert.find(alertFilter);
    return alerts;
  };
};
