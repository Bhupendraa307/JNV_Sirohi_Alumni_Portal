const mongoose = require("mongoose");

const SiteStatsSchema = new mongoose.Schema({
    totalVisitors: { type: Number, default: 0 },
    pageViews: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("SiteStats", SiteStatsSchema);
