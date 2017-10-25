module.exports = {
    "id": "all",
    "viewports": [
        {
            "name": "mobile_v",
            "width": 320,
            "height": 1500
        }, {
            "name": "mobile_h",
            "width": 480,
            "height": 1500
        }, {
            "name": "tablet_h",
            "width": 768,
            "height": 1500
        }, {
            "name": "tablet_v",
            "width": 1024,
            "height": 1500
        }, {
            "name": "browser",
            "width": 1200,
            "height": 1500
        }, {
            "name": "browser_lg",
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
    "debug": false
}
