var APP_DATA = {
  "scenes": [
    {
      "id": "0-bed_window",
      "name": "Bed_window",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.07935672843619734,
        "pitch": 0.25187355765868524,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": 0.7764013663128964,
          "pitch": 0.3389617720595428,
          "rotation": 0,
          "target": "1-bed_middle"
        },
        {
          "yaw": -0.08648681782552181,
          "pitch": 0.19597429655842902,
          "rotation": 0,
          "target": "2-bed_wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bed_middle",
      "name": "Bed_middle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -1.6394825528426455,
        "pitch": 0.0560216026983813,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": -0.7708093198586621,
          "pitch": 0.3014300401704091,
          "rotation": 0,
          "target": "2-bed_wardrobe"
        },
        {
          "yaw": -2.394510946863454,
          "pitch": 0.4182019569847011,
          "rotation": 0,
          "target": "0-bed_window"
        },
        {
          "yaw": 0.19450263239936483,
          "pitch": 0.291007142619101,
          "rotation": 0,
          "target": "3-bed_entr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bed_wardrobe",
      "name": "Bed_wardrobe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 3.0390816277964756,
        "pitch": 0.12081012678428138,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": 2.110016472239094,
          "pitch": 0.35917579869020955,
          "rotation": 0,
          "target": "1-bed_middle"
        },
        {
          "yaw": -3.103983803602853,
          "pitch": 0.25520987839953335,
          "rotation": 0,
          "target": "0-bed_window"
        },
        {
          "yaw": 1.3021316191724104,
          "pitch": 0.3104210472138682,
          "rotation": 4.71238898038469,
          "target": "3-bed_entr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bed_entr",
      "name": "Bed_entr",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 3.1190240218127556,
        "pitch": 0.04852880981691321,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": -3.0825344226595046,
          "pitch": 0.25163414702760534,
          "rotation": 0,
          "target": "1-bed_middle"
        },
        {
          "yaw": 0.9626315188539589,
          "pitch": 0.2742789223215887,
          "rotation": 0.7853981633974483,
          "target": "4-mirror"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-mirror",
      "name": "Mirror",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -3.055427951045644,
        "pitch": 0.0532822597047975,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": -2.006030015130751,
          "pitch": 0.2827958422024839,
          "rotation": 5.497787143782138,
          "target": "3-bed_entr"
        },
        {
          "yaw": 1.612985409950003,
          "pitch": 0.2448535543649477,
          "rotation": 0,
          "target": "5-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -3.121496197657807,
        "pitch": 0.10897797849551161,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": 1.5689205755638511,
          "pitch": 0.18447770519846785,
          "rotation": 6.283185307179586,
          "target": "6-bath_entr"
        },
        {
          "yaw": -1.5279424833085127,
          "pitch": 0.23899855430415862,
          "rotation": 0,
          "target": "4-mirror"
        },
        {
          "yaw": -3.1260120401415943,
          "pitch": 0.2063717571648631,
          "rotation": 0,
          "target": "8-main_office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bath_entr",
      "name": "Bath_entr",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0716211388483607,
          "pitch": 0.2514339479407699,
          "rotation": 0,
          "target": "5-entrance"
        },
        {
          "yaw": 0.17384742402320796,
          "pitch": 0.3766117601081884,
          "rotation": 0,
          "target": "7-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bath",
      "name": "Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -1.6153158971661181,
        "pitch": 0.0798602645610611,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": 1.6658297562146736,
          "pitch": 0.28594405689153035,
          "rotation": 0,
          "target": "6-bath_entr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-main_office",
      "name": "Main_office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 2.37980776830757,
        "pitch": 0.035707526182520155,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": -2.9849910760996536,
          "pitch": 0.33772282548912,
          "rotation": 0,
          "target": "9-main_balcony"
        },
        {
          "yaw": -0.0605470599546063,
          "pitch": 0.3608224877926567,
          "rotation": 0,
          "target": "5-entrance"
        },
        {
          "yaw": 1.722820310017818,
          "pitch": 0.2585401781472605,
          "rotation": 0,
          "target": "10-main_middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-main_balcony",
      "name": "Main_balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 1.1532598672793153,
        "pitch": 0.044373387799915065,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": 0.16070452493036314,
          "pitch": 0.22621701859455534,
          "rotation": 0,
          "target": "8-main_office"
        },
        {
          "yaw": 1.028274623328148,
          "pitch": 0.24828116803020706,
          "rotation": 0,
          "target": "10-main_middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-main_middle",
      "name": "Main_middle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -3.1275474585921224,
        "pitch": 0.028721683739586723,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": 2.6244460759319503,
          "pitch": 0.39033554096780065,
          "rotation": 0,
          "target": "11-main_window"
        },
        {
          "yaw": -1.5005592153745209,
          "pitch": 0.32008996278374013,
          "rotation": 0,
          "target": "8-main_office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-main_window",
      "name": "Main_window",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -1.3490248133190619,
        "pitch": 0.09386305408190232,
        "fov": 1.5211197337810989
      },
      "linkHotspots": [
        {
          "yaw": -0.33853779983562937,
          "pitch": 0.3472499054424709,
          "rotation": 0,
          "target": "10-main_middle"
        },
        {
          "yaw": -1.0518674411097457,
          "pitch": 0.19778588534597752,
          "rotation": 0,
          "target": "8-main_office"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Odyńca",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
