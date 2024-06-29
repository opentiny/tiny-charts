const option = {
  theme: 'light',
  distance: {
    minDistance: 200,
    minDistanceDrill: 400
  },
  ratio: {
    minRatio: 0.5,
    maxRatio: 0.75,
    minRatioDrill: 0.7,
    maxRatioDrill: 0.8
  },
  overAll: true,
  data: [
    {
      deviceType: 'ONT',
      deviceName: '主网关',
      mac: '111',
      onlineDuration: '在线时长：25天',
      signalStrength: '-24dBm', // 信号强度(单位需要图表加)
      rxPower: '-50dBm', // (网关信号强度展示rxPower)
      rxPowerMin: '-60',
      rxPowerMax: '-10',
      isRoot: true,
      faultNumber: 3,
      trafficStatistics: '30GB',
      children: [
        {
          deviceType: 'SmartPhone',
          deviceName: 'sta-1',
          mac: 'sta-1',
          connectInterface: 'SSID-5G',
          wifiChannel: 30,
          signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
          isAP: 0,
          faultNumber: 1,

          trafficStatistics: '30GB',
        },
        {
          deviceType: 'SmartPhone',
          deviceName: 'sta-2',
          mac: 'sta-2',
          connectInterface: 'Straight-LAN2',
          lineStrokeColor: '#777777',
          signalStrength: '-24dBm',
          isAP: 0,
          faultNumber: 1,

          trafficStatistics: '30GB',
        },
        {
          deviceType: 'SmartPhone',
          deviceName: 'sta-3',
          mac: 'sta-3',
          connectInterface: 'SSID-5G',
          wifiChannel: 30,
          signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
          isAP: 0,
          faultNumber: 1,

          trafficStatistics: '30GB',
        },
        {
          deviceType: 'SmartPhone',
          deviceName: 'sta-4',
          mac: 'sta-4',
          connectInterface: 'Straight-LAN2',
          lineStrokeColor: '#777777',
          signalStrength: '-24dBm',
          isAP: 0,
          faultNumber: 1,

          trafficStatistics: '30GB',
        },
        {
          deviceType: 'SmartPhone',
          deviceName: 'sta-5',
          mac: 'sta-5',
          connectInterface: 'SSID-5G',
          wifiChannel: 30,
          signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
          isAP: 0,
          faultNumber: 1,

          trafficStatistics: '30GB',
        },
        {
          deviceType: 'SmartPhone',
          deviceName: 'sta-6',
          mac: 'sta-6',
          connectInterface: 'Straight-LAN2',
          lineStrokeColor: '#777777',
          signalStrength: '-24dBm',
          isAP: 0,
          faultNumber: 1,

          trafficStatistics: '30GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关6',
          mac: '777',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          rxPower: '-50dBm',
          rxPowerMin: '-60',
          rxPowerMax: '-10',
          isAP: 1,
          trafficStatistics: '40GB',
          children: [
            {
              deviceType: 'Other',
              deviceName: '777-1',
              mac: '777-1',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: '777-2',
              mac: '777-2',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            },
            {
              deviceType: 'Other',
              deviceName: '777-3',
              mac: '777-3',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: '777-4',
              mac: '777-4',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            },
            {
              deviceType: 'Other',
              deviceName: '777-5',
              mac: '777-5',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: '777-6',
              mac: '777-6',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            },
            {
              deviceType: 'Other',
              deviceName: '777-7',
              mac: '777-7',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: '777-8',
              mac: '777-8',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            },
            {
              deviceType: 'Other',
              deviceName: '777-9',
              mac: '777-9',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: '777-10',
              mac: '777-10',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            },
            {
              deviceType: 'Other',
              deviceName: '777-11',
              mac: '777-11',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: '777-12',
              mac: '777-12',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            },
            {
              deviceType: 'Other',
              deviceName: '777-13',
              mac: '777-13',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: '777-14',
              mac: '777-14',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            },
            {
              deviceType: 'PC',
              deviceName: '777-15',
              mac: '777-15',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            },
            {
              deviceType: 'PC',
              deviceName: '777-16',
              mac: '777-16',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            }
          ]
        },
        {
          deviceType: 'AP',
          deviceName: '从网关1',
          mac: '222',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          faultNumber: 2,

          trafficStatistics: '50GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关4',
          mac: '555',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          faultNumber: 2,

          trafficStatistics: '50GB',
          children: [
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-7',
              mac: 'sta-7',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-8',
              mac: 'sta-8',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-9',
              mac: 'sta-9',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-10',
              mac: 'sta-10',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-11',
              mac: 'sta-11',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-12',
              mac: 'sta-12',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-13',
              mac: 'sta-13',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-14',
              mac: 'sta-14',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-15',
              mac: 'sta-15',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-16',
              mac: 'sta-16',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-17',
              mac: 'sta-17',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-18',
              mac: 'sta-18',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-19',
              mac: 'sta-19',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: 'sta-20',
              mac: 'sta-20',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
          ]
        },
        {
          deviceType: 'AP',
          deviceName: '从网关5',
          mac: '666',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          faultNumber: 2,

          trafficStatistics: '50GB',
          children: [
            {
              deviceType: 'SmartPhone',
              deviceName: '666-1',
              mac: '666-1',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-2',
              mac: '666-2',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-3',
              mac: '666-3',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-4',
              mac: '666-4',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-5',
              mac: '666-5',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-6',
              mac: '666-6',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-3-13',
              mac: '666-3-13',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-3-14',
              mac: '666-3-14',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-3-15',
              mac: '666-3-15',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-3-16',
              mac: '666-3-16',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-3-17',
              mac: '666-3-17',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-3-18',
              mac: '666-3-18',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-3-19',
              mac: '666-3-19',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '666-3-20',
              mac: '666-3-20',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
          ]
        },
        {
          deviceType: 'AP',
          deviceName: '从网关3',
          mac: '444',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          rxPower: '-70dBm',
          rxPowerMin: '-20',
          rxPowerMax: '0',
          isAP: 1,
          trafficStatistics: '20MB',
          children: [
            {
              deviceType: 'Other',
              deviceName: 'sta-3-1',
              mac: '444-1',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: 'sta-3-2',
              mac: '444-2',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            }
          ]
        },
        {
          deviceType: 'AP',
          deviceName: '从网关6',
          mac: '888',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          faultNumber: 2,

          trafficStatistics: '50GB',
          children: [
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1',
              mac: '777-1',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-2',
              mac: '777-1-2',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-3',
              mac: '777-1-3',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-4',
              mac: '777-1-4',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-5',
              mac: '777-1-5',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-6',
              mac: '777-1-6',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-3-13',
              mac: '777-1-3-13',
              connectInterface: 'SSID-5G',
              wifiChannel: 30,
              signalStrength: '-24dBm', // (sta信号强度展示signalStrength)
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-3-14',
              mac: '777-1-3-14',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-3-15',
              mac: '777-1-3-15',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-3-16',
              mac: '777-1-3-16',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-3-17',
              mac: '777-1-3-17',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
            {
              deviceType: 'SmartPhone',
              deviceName: '777-1-3-18',
              mac: '777-1-3-18',
              connectInterface: 'Straight-LAN2',
              lineStrokeColor: '#777777',
              signalStrength: '-24dBm',
              isAP: 0,
              faultNumber: 1,

              trafficStatistics: '30GB',
            },
          ]
        },
        {
          deviceType: 'AP',
          deviceName: '从网关8',
          mac: '999',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          faultNumber: 2,

          trafficStatistics: '50GB',
        },
      ],
    },
  ],
};
