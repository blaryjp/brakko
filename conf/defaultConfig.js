module.exports = {
    "id": "all",
    "viewports": [
        {
            "name": "mobilev",
            "width": 320
        }, {
            "name": "mobileh",
            "width": 480
        }, {
            "name": "tableth",
            "width": 768
        }, {
            "name": "tabletv",
            "width": 1024
        }, {
            "name": "browser",
            "width": 1200
        }, {
            "name": "browserlg",
            "width": 1600
        }
    ],
    "scenarios": [],
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test":      "backstop_data/bitmaps_test",
        "casper_scripts":    "casper_scripts",
        "html_report":       "backstop_data/html_report",
        "ci_report":         "backstop_data/ci_report"
    },
    "casperFlags": [],
    "engine": "chrome",
    "report": ["browser", "CI"],
    "debug": true
}
