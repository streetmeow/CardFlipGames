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
        cardFront: cc.SpriteFrame,
        cardBack: cc.SpriteFrame,
        tem: 5
    },

    // LIFE-CYCLE CALLBACKS:




    onLoad() {
        var isChecked = false;
        var action = cc.delayTime(3);

        this.flipfront();

        cc.log("why");
    },

    flipback: function() {
        let action = cc.skewBy(0.5, 0, 0);
        let action2 = cc.skewTo(0.5, 0, 15);

        this.node.runAction(cc.sequence(action,
            cc.callFunc(() => {

                this.node.getComponent(cc.Sprite).spriteFrame = this.cardBack;

            }), action2
        ));
    },
    flipfront: function() {
        let action3 = cc.skewBy(0.5, 0, 15);
        let action4 = cc.skewTo(0.5, 0, 0);

        this.node.runAction(cc.sequence(action3,
            cc.callFunc(() => {

                this.node.getComponent(cc.Sprite).spriteFrame = this.cardFront;

            }), action4
        ));
    },
    checked: function() {
        if (isChecked === false) {
            this.node.color = cc.color(150, 150, 150);
            isChecked = true;
        } else if (isChecked === true) {
            this.node.color = cc.color(0, 0, 0);
            isChecked = false;
        }
    },
    start() {

    },

    // update (dt) {},
});