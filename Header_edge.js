/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['-1150px', '31px', '1714', '193', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Header',
                                type: 'image',
                                rect: ['872px', '0px', '841px', '193px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Header.png",'0px','0px']
                            },
                            {
                                id: 'HeaderCopy',
                                type: 'image',
                                rect: ['0px', '0px', '841px', '193px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Header.png",'0px','0px']
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '55.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 21000,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "left",
                            0,
                            21000,
                            "linear",
                            "${Group}",
                            '-1150px',
                            '-276px'
                        ],
                        [
                            "eid3",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '31px',
                            '31px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Header_edgeActions.js");
})("EDGE-98127329");
