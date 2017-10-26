module.exports = {
    "id": "all",
    "viewports": [
        {
            "name": "mobile_v__xs",
            "width": 320,
            "height": 1500
        }, {
            "name": "mobile_h__sm",
            "width": 576,
            "height": 1500
        }, {
            "name": "tablet__md",
            "width": 768,
            "height": 1500
        }, {
            "name": "browser__lg",
            "width": 992,
            "height": 1500
        }, {
            "name": "browser__xl",
            "width": 1200,
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
