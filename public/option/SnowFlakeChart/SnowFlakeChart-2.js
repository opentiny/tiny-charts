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
          children: [
            {
              deviceType: 'Other',
              deviceName: 'sta-3-1',
              mac: '222-1',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: 'sta-3-2',
              mac: '222-2',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            },
            {
              deviceType: 'Other',
              deviceName: 'sta-3-1',
              mac: '222-3',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: 'sta-3-2',
              mac: '222-4',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            }
          ]
        },
        {
          deviceType: 'AP',
          deviceName: '从网关2',
          mac: '333',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          rxPower: '-50dBm',
          rxPowerMin: '-60',
          rxPowerMax: '-10',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '40GB',
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
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '20MB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关4',
          mac: '555',
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
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
          trafficStatistics: '100GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关6',
          mac: '777',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          rxPower: '-50dBm',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          children: [
            {
              deviceType: 'Other',
              deviceName: 'sta-3-1',
              mac: '777-1',
              connectInterface: 'SSID-2.4G',
              signalStrength: '-28dBm',
              isAP: 0,
              wifiChannel: 0, // 信道数量
              trafficStatistics: '20GB',
            },
            {
              deviceType: 'PC',
              deviceName: 'sta-3-2',
              mac: '777-2',
              connectInterface: 'SSID-5G',
              signalStrength: '-10dBm',
              isAP: 0,
              trafficStatistics: '10GB',
            }
          ]
        },
        {
          deviceType: 'AP',
          deviceName: '从网关7',
          mac: '888',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '100GB',
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
          trafficStatistics: '100GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关9',
          mac: '1000',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '100GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关10',
          mac: '1001',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '100GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关11',
          mac: '1002',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '100GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关12',
          mac: '1003',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '100GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关13',
          mac: '1004',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '100GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关14',
          mac: '1005',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '100GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关15',
          mac: '1006',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '100GB',
        },
        {
          deviceType: 'AP',
          deviceName: '从网关16',
          mac: '1007',
          connectInterface: 'Straight-PON',
          lineStrokeColor: '#96711B',
          isAP: 1,
          upRate: '1111Kpbs', // 上下行速率
          downRate: '2222Kpbs',
          trafficStatistics: '100GB',
        },
      ],
    },
  ],
};
