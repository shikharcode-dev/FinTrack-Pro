import "./auth.js";
import "./dashboard.js";
import "./transaction.js";
import "./chart.js";
import "./settings.js";
import "./storage.js";
import { updateAnalyticsAndChart } from "./chart.js";
// Inside your updateStatistics() block, add:
updateAnalyticsAndChart();

import { welcomeMessage } from "./utils.js";

welcomeMessage();