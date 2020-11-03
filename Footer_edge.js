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
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Ocean',
                            type: 'image',
                            rect: ['-4px', '31px', '1040px', '227px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Ocean.png",'0px','0px']
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['19px', '95px', '1244', '155', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Land',
                                type: 'image',
                                rect: ['655px', '0px', '589px', '155px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Land.png",'0px','0px']
                            },
                            {
                                id: 'LandCopy',
                                type: 'image',
                                rect: ['0px', '0px', '589px', '155px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Land.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['-723px', '14px', '1589', '227', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Clouds',
                                type: 'image',
                                rect: ['622px', '0px', '967px', '227px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Clouds.png",'0px','0px']
                            },
                            {
                                id: 'CloudsCopy',
                                type: 'image',
                                rect: ['0px', '0px', '967px', '227px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Clouds.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'Space',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '103.2%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Space.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '250px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 14937,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "left",
                            0,
                            14937,
                            "linear",
                            "${Group}",
                            '-723px',
                            '-101px'
                        ],
                        [
                            "eid41",
                            "top",
                            0,
                            14937,
                            "linear",
                            "${Group}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid48",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group2}",
                            '95px',
                            '95px'
                        ],
                        [
                            "eid49",
                            "top",
                            14937,
                            0,
                            "linear",
                            "${Group2}",
                            '95px',
                            '95px'
                        ],
                        [
                            "eid38",
                            "left",
                            0,
                            14937,
                            "linear",
                            "${Group2}",
                            '-636px',
                            '19px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Footer_edgeActions.js");
})("EDGE-110626755");
