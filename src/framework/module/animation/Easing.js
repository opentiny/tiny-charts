/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
//Linear（线性），Quadratic（二次方），Cubic（三次方），Quintic（四次方），Quintic（五次方），Sinusoidal（正弦波），Exponential（指数），Circular（圆形），
//Elastic（弹性），Back（后退）和Bounce（反弹），然后按缓动类型：In（进），out（出）和InOut（进出）
let Easing = Object.freeze({
    Linear: Object.freeze({
        None: function (percent) {
            return percent;
        },
        In: function (percent) {
            return percent;
        },
        Out: function (percent) {
            return percent;
        },
        InOut: function (percent) {
            return percent;
        },
    }),
    Quadratic: Object.freeze({
        In: function (percent) {
            return percent * percent;
        },
        Out: function (percent) {
            return percent * (2 - percent);
        },
        InOut: function (percent) {
            if ((percent *= 2) < 1) {
                return 0.5 * percent * percent;
            }
            return -0.5 * (--percent * (percent - 2) - 1);
        },
    }),
    Cubic: Object.freeze({
        In: function (percent) {
            return percent * percent * percent;
        },
        Out: function (percent) {
            return --percent * percent * percent + 1;
        },
        InOut: function (percent) {
            if ((percent *= 2) < 1) {
                return 0.5 * percent * percent * percent;
            }
            return 0.5 * ((percent -= 2) * percent * percent + 2);
        },
    }),
    Quartic: Object.freeze({
        In: function (percent) {
            return percent * percent * percent * percent;
        },
        Out: function (percent) {
            return 1 - --percent * percent * percent * percent;
        },
        InOut: function (percent) {
            if ((percent *= 2) < 1) {
                return 0.5 * percent * percent * percent * percent;
            }
            return -0.5 * ((percent -= 2) * percent * percent * percent - 2);
        },
    }),
    Quintic: Object.freeze({
        In: function (percent) {
            return percent * percent * percent * percent * percent;
        },
        Out: function (percent) {
            return --percent * percent * percent * percent * percent + 1;
        },
        InOut: function (percent) {
            if ((percent *= 2) < 1) {
                return 0.5 * percent * percent * percent * percent * percent;
            }
            return 0.5 * ((percent -= 2) * percent * percent * percent * percent + 2);
        },
    }),
    Sinusoidal: Object.freeze({
        In: function (percent) {
            return 1 - Math.sin(((1.0 - percent) * Math.PI) / 2);
        },
        Out: function (percent) {
            return Math.sin((percent * Math.PI) / 2);
        },
        InOut: function (percent) {
            return 0.5 * (1 - Math.sin(Math.PI * (0.5 - percent)));
        },
    }),
    Exponential: Object.freeze({
        In: function (percent) {
            return percent === 0 ? 0 : Math.pow(1024, percent - 1);
        },
        Out: function (percent) {
            return percent === 1 ? 1 : 1 - Math.pow(2, -10 * percent);
        },
        InOut: function (percent) {
            if (percent === 0) {
                return 0;
            }
            if (percent === 1) {
                return 1;
            }
            if ((percent *= 2) < 1) {
                return 0.5 * Math.pow(1024, percent - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (percent - 1)) + 2);
        },
    }),
    Circular: Object.freeze({
        In: function (percent) {
            return 1 - Math.sqrt(1 - percent * percent);
        },
        Out: function (percent) {
            return Math.sqrt(1 - --percent * percent);
        },
        InOut: function (percent) {
            if ((percent *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - percent * percent) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (percent -= 2) * percent) + 1);
        },
    }),
    Elastic: Object.freeze({
        In: function (percent) {
            if (percent === 0) {
                return 0;
            }
            if (percent === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (percent - 1)) * Math.sin((percent - 1.1) * 5 * Math.PI);
        },
        Out: function (percent) {
            if (percent === 0) {
                return 0;
            }
            if (percent === 1) {
                return 1;
            }
            return Math.pow(2, -10 * percent) * Math.sin((percent - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (percent) {
            if (percent === 0) {
                return 0;
            }
            if (percent === 1) {
                return 1;
            }
            percent *= 2;
            if (percent < 1) {
                return -0.5 * Math.pow(2, 10 * (percent - 1)) * Math.sin((percent - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (percent - 1)) * Math.sin((percent - 1.1) * 5 * Math.PI) + 1;
        },
    }),
    Back: Object.freeze({
        In: function (percent) {
            var s = 1.70158;
            return percent === 1 ? 1 : percent * percent * ((s + 1) * percent - s);
        },
        Out: function (percent) {
            var s = 1.70158;
            return percent === 0 ? 0 : --percent * percent * ((s + 1) * percent + s) + 1;
        },
        InOut: function (percent) {
            var s = 1.70158 * 1.525;
            if ((percent *= 2) < 1) {
                return 0.5 * (percent * percent * ((s + 1) * percent - s));
            }
            return 0.5 * ((percent -= 2) * percent * ((s + 1) * percent + s) + 2);
        },
    }),
    Bounce: Object.freeze({
        In: function (percent) {
            return 1 - Easing.Bounce.Out(1 - percent);
        },
        Out: function (percent) {
            if (percent < 1 / 2.75) {
                return 7.5625 * percent * percent;
            }
            else if (percent < 2 / 2.75) {
                return 7.5625 * (percent -= 1.5 / 2.75) * percent + 0.75;
            }
            else if (percent < 2.5 / 2.75) {
                return 7.5625 * (percent -= 2.25 / 2.75) * percent + 0.9375;
            }
            else {
                return 7.5625 * (percent -= 2.625 / 2.75) * percent + 0.984375;
            }
        },
        InOut: function (percent) {
            if (percent < 0.5) {
                return Easing.Bounce.In(percent * 2) * 0.5;
            }
            return Easing.Bounce.Out(percent * 2 - 1) * 0.5 + 0.5;
        },
    }),
    generatePow: function (power) {
        if (power === void 0) { power = 4; }
        power = power < Number.EPSILON ? Number.EPSILON : power;
        power = power > 10000 ? 10000 : power;
        return {
            In: function (percent) {
                    return Math.pow(percent, power);
            },
            Out: function (percent) {
                    return 1 - Math.pow((1 - percent), power);
            },
            InOut: function (percent) {
                    if (percent < 0.5) {
                    return Math.pow((percent * 2), power) / 2;
                }
                return (1 - Math.pow((2 - percent * 2), power)) / 2 + 0.5;
            },
        };
    },
});
export default Easing;