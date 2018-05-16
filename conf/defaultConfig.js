const conf = require('./commonSettings');

module.exports = {
    "id": "default",
    "viewports": conf.viewports,
    "scenarios": [],
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test":      "backstop_data/bitmaps_test",
        "casper_scripts":    "casper_scripts",
        "engine_scripts":    "backstop_data/engine_scripts",
        "html_report":       "backstop_data/html_report",
        "ci_report":         "backstop_data/ci_report"
    },
    "casperFlags": [],
    "engine": "puppeteer",
    "engineOptions": {
        "ignoreHTTPSErrors": true,
        "args": ["--no-sandbox", "--disable-setuid-sandbox"]
    },
    "report": ["browser", "CI"],
    "debug": false,
    "debugWindow": false
}
