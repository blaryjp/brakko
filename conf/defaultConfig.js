module.exports = {
    "id": "all",
    "viewports": [
        {
            "name": "mobilev",
            "width": 320,
            "height": 1500
        }, {
            "name": "mobileh",
            "width": 480,
            "height": 1500
        }, {
            "name": "tableth",
            "width": 768,
            "height": 1500
        }, {
            "name": "tabletv",
            "width": 1024,
            "height": 1500
        }, {
            "name": "browser",
            "width": 1200,
            "height": 1500
        }, {
            "name": "browserlg",
            "width": 1600,
            "height": 1500
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
