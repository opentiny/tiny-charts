const mediaScreenOption = [
  // {
  //   option: {
  //     legend: {
  //       show: true,
  //       icon: 'rect',
  //       itemWidth: 10,
  //       itemHeight: 10
  //     }
  //   }
  // },
  {
    maxWidth: 1600,
    minWidth: 1000,
    option: {
      legend: {
        show: true,
        icon: 'circle',
        itemWidth: 100,
        itemHeight: 100
      }
    }
  },
  {
    maxWidth: 1800,
    minWidth: 800,
    option: {
      markLine: {
        top: 40
      }
    }
  },
  // {
  //   maxWidth: 999,
  //   option: {
  //     legend: {
  //       show: true,
  //       icon: 'circle',
  //       itemWidth: 20,
  //       itemHeight: 20
  //     }
  //   }
  // },
  // {
  //   maxWidth: 600,
  //   option: {
  //     legend: {
  //       show: true,
  //       icon: 'circle',
  //       itemWidth: 30,
  //       itemHeight: 30
  //     }
  //   }
  // },
  // {
  //   minWidth: 800,
  //   option: {
  //     theme:'dark',
  //   }
  // },
  // {
  //   minWidth: 550,
  //   option: {
  //     markLine:{
  //       top:20
  //     }
  //   }
  // },
];

const defaultOption = [
  {
    maxWidth: 1920,
    minWidth: 1901,
    option: {
      legend: {
        show: true,
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10
      }
    }
  },
  {
    maxWidth: 1900,
    minWidth: 1401,
    option: {
      legend: {
        show: true,
        icon: 'circle',
        itemWidth: 20,
        itemHeight: 20
      }
    }
  },
  {
    maxWidth: 1400,
    minWidth: 1201,
    option: {
      legend: {
        show: true,
        icon: 'rect',
        itemWidth: 30,
        itemHeight: 30
      }
    }
  },
  {
    maxWidth: 1200,
    minWidth: 601,
    option: {
      legend: {
        show: true,
        icon: 'rect',
        itemWidth: 40,
        itemHeight: 40
      }
    }
  },
  {
    maxWidth: 600,
    minWidth: 551,
    option: {
      legend: {
        show: true,
        icon: 'circle',
        itemWidth: 50,
        itemHeight: 50
      }
    }
  },
  {
    maxWidth: 550,
    minWidth: 301,
    option: {
      legend: {
        show: true,
        icon: 'circle',
        itemWidth: 60,
        itemHeight: 60
      }
    }
  },
  {
    maxWidth: 300,
    minWidth: 211,
    option: {
      legend: {
        show: true,
        itemWidth: 70,
        itemHeight: 70
      }
    }
  },
  {
    maxWidth: 210,
    minWidth: 141,
    option: {
      legend: {
        show: true,
        itemWidth: 80,
        itemHeight: 80
      }
    }
  },
  {
    maxWidth: 140,
    minWidth: 0,
    option: {
      legend: {
        show: true,
        itemWidth: 90,
        itemHeight: 90
      }
    }
  }
];

export { mediaScreenOption, defaultOption };
