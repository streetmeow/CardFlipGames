// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var outers = cc.Class({
    extends: cc.Component,

    properties: {
        cardNode: {
            default: [],
            type: cc.Node,
        },
        frontSprite: {
            default: [],
            type: cc.SpriteFrame,
        },
        temp: 1
    },

    // LIFE-CYCLE CALLBACKS:


    // onLoad () {},
    randomOrder: function(a) {
        var j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        return a;
    },

    init: function() {
        var arrayTemp = new Array();
        var inArray = [0, 1, 2, 3, 4, 5, 6, 7];
        arrayTemp = randomOrder(inArray);
        for (var a = 0; a < 8; a++) {
            this.cardNode[a].getInt(0);
        }
        module.exports = outers;
    },
    onLoad() {
        var temp = 0;
        this.init();
    },
    start() {

    },

    // update (dt) {},
});