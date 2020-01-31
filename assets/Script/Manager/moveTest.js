// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {


        backFrame: cc.SpriteFrame,
        thisFrame: cc.SpriteFrame,
        frontFrame: {
            default: [],
            type: cc.SpriteFrame
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},


    flipBack: function() {
        let action = cc.skewBy(0.5, 0, -45);
        let action2 = cc.skewTo(0.5, 0, 0);
        this.thisFrame = this.frontFrame[0];
        this.node.runAction(cc.sequence(action,
            cc.callFunc(() => {

                this.node.getComponent(cc.Sprite).spriteFrame = this.frontFrame[0];

            }), action2));
    },
    start() {
        let action = cc.skewBy(0.5, 0, -45);
        let action2 = cc.skewTo(0.5, 0, 0);
        this.thisFrame = this.frontFrame[0];
        this.node.runAction(cc.sequence(action,
            cc.callFunc(() => {

                this.node.getComponent(cc.Sprite).spriteFrame = this.thisFrame;

            }), action2));

    },

    // update (dt) {},
});