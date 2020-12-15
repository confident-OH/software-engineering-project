var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
/**
 * 新手教程类
 *
 * Newbie Guide Class
 */
var education = (function (_super) {
    __extends(education, _super);
    // 加载相关的UI界面资源
    function education() {
        var _this = _super.call(this) || this;
        _this.edubutton = new eui.Button;
        _this.a_lable = true;
        _this.nums_t = 4;
        // UI界面大小相关设置
        _this.blocks_x = 60;
        _this.blocks_y = 60;
        _this.root_x = 0;
        _this.root_y = 50;
        // 硬编码的9x9数独题面棋盘，a代表需要用户填的空格
        _this.sudoku = "7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2";
        _this.sudoku_easy = ["7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2",
            "1,a,a,6,a,8,a,5,a,7,3,a,a,a,4,a,a,a,a,a,2,a,a,a,a,3,4,a,6,1,a,7,a,a,a,a,a,a,a,8,a,a,1,6,9,5,a,8,1,a,a,a,a,3,a,1,a,a,a,6,5,9,a,a,9,a,a,1,7,a,a,8,8,a,a,a,4,a,7,a,a",
            "a,a,a,5,8,a,a,a,a,7,a,a,a,a,a,a,a,9,a,a,6,a,a,a,1,4,a,a,a,8,a,2,a,9,a,6,a,a,3,7,a,9,a,5,8,a,1,a,a,a,4,2,3,7,1,a,5,2,3,6,a,a,4,3,6,2,4,9,7,5,8,1,9,a,7,1,5,8,3,a,a",
            "a,8,5,a,a,a,2,1,a,a,9,4,a,1,2,a,a,3,a,a,a,3,a,a,7,a,4,5,a,3,4,a,9,a,a,a,a,4,a,2,a,6,a,3,a,a,a,a,1,a,3,9,a,7,6,a,8,a,a,5,a,a,a,1,a,a,8,4,a,3,6,a,a,2,7,a,a,a,8,9,a",
            "a,4,7,a,5,a,a,a,8,6,a,5,a,3,a,2,a,1,a,a,a,7,a,6,a,3,a,a,a,6,a,7,a,a,2,4,9,a,a,8,a,4,a,a,6,4,5,a,a,1,a,9,a,a,a,1,a,5,a,2,a,a,a,2,a,8,a,4,a,5,a,3,5,a,a,a,9,a,7,1,a"];
        _this.sudoku_hard = ["a,a,6,a,a,a,a,a,3,7,a,a,3,a,a,a,a,a,a,a,a,a,1,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,3,a,1,1,a,a,4,a,a,8,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,2,a,a,a,8,a,a,a",
            "7,a,a,a,a,4,a,2,a,a,9,a,a,a,a,3,a,a,a,a,a,a,a,6,a,a,8,a,8,a,9,a,a,a,a,a,a,3,5,a,a,a,a,a,9,a,a,a,a,7,2,a,4,a,a,a,9,5,2,a,a,a,a,a,a,a,a,a,a,8,6,7,1,a,a,3,a,a,a,a,a",
            "8,a,a,a,a,5,2,a,a,a,a,a,a,6,a,a,3,a,9,a,a,a,a,a,5,a,a,a,7,3,a,a,a,a,6,a,a,a,a,a,2,8,a,a,5,a,5,a,6,a,a,a,a,a,a,2,a,a,a,a,a,a,9,4,a,a,a,a,a,a,a,8,a,a,6,7,3,a,a,2,a",
            "a,4,a,a,a,3,a,a,1,3,a,a,5,a,a,a,9,a,a,a,6,a,7,a,a,a,a,a,2,a,a,8,4,a,a,a,a,a,a,a,6,a,a,4,a,a,a,7,a,a,a,a,5,a,2,a,a,6,a,a,9,a,a,a,a,a,a,a,a,4,a,2,9,a,5,1,a,a,a,a,a",
            "a,a,4,a,1,a,a,5,7,6,a,a,a,a,a,2,a,a,a,a,1,3,a,a,a,a,a,a,a,a,a,4,5,a,a,9,2,4,a,a,a,a,a,a,a,a,a,a,9,a,a,a,1,3,a,7,3,a,a,a,a,a,a,a,a,a,a,a,4,a,9,a,a,a,a,a,6,2,7,a,a"];
        _this.sudoku_medium = ["5,a,a,a,a,9,a,a,a,a,2,a,8,a,a,a,9,1,9,a,a,4,a,a,a,a,3,a,a,7,a,1,a,6,a,a,a,a,a,a,9,a,5,a,a,8,a,a,a,a,a,9,a,a,a,a,1,a,a,a,a,2,7,a,a,a,6,a,5,a,a,a,a,3,a,a,a,2,a,a,a",
            "6,2,a,a,a,3,a,a,a,a,a,a,9,a,a,7,a,a,a,a,4,8,a,a,a,2,a,a,3,a,a,a,8,a,a,2,a,6,a,a,a,a,a,8,a,a,a,a,1,7,a,9,a,a,7,a,8,a,a,a,a,a,a,a,a,2,a,a,a,a,9,a,a,a,a,a,5,2,a,a,3",
            "4,7,a,1,a,8,a,2,9,a,a,a,a,a,a,a,a,a,a,6,9,2,7,1,a,a,a,9,a,6,a,1,a,3,a,3,a,a,a,a,a,a,a,4,a,4,a,7,a,9,a,8,a,a,a,4,8,7,5,3,a,a,a,a,a,a,a,a,a,a,5,8,a,4,a,3,a,9,7,a,a",
            "1,a,a,6,a,8,a,5,a,7,3,a,a,a,4,a,a,a,a,a,2,a,a,a,a,3,4,a,6,1,a,7,a,a,a,a,a,a,a,8,a,a,1,6,9,5,a,8,1,a,a,a,a,3,a,1,a,a,a,6,5,9,a,a,9,a,a,1,7,a,a,8,8,a,a,a,4,a,7,a,a",
            "a,4,7,a,5,a,a,a,8,6,a,5,a,3,a,2,a,1,a,a,a,7,a,6,a,3,a,a,a,6,a,7,a,a,2,4,9,a,a,8,a,4,a,a,6,4,5,a,a,1,a,9,a,a,a,1,a,5,a,2,a,a,a,2,a,8,a,4,a,5,a,3,5,a,a,a,9,a,7,1,a"];
        _this.opt = 1; // 有限状态机1->easy, 2->medium, 3->hard
        _this.sus = _this.sudoku.split(','); // 数独题面数组
        _this.ss = new eui.ArrayCollection(); //记录各块的数据
        _this.skinName = "resource/eui_skins/myskin/educationSkin.exml";
        return _this;
    }
    education.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    /**
     * 添加数独边框
     *
     * Add Sudoku margins
     */
    education.prototype.Hline = function () {
        var shp = new egret.Shape;
        shp.graphics.lineStyle(8, 0xa78e44);
        shp.graphics.moveTo(this.root_x, this.root_y + 3 * this.blocks_y);
        // 横线1
        shp.graphics.lineTo(this.root_x + 9 * this.blocks_x, this.root_y + 3 * this.blocks_y);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x, this.root_y + 6 * this.blocks_y);
        // 横线2
        shp.graphics.lineTo(this.root_x + 9 * this.blocks_x, this.root_y + 6 * this.blocks_y);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x + 3 * this.blocks_x, this.root_y);
        // 竖线1
        shp.graphics.lineTo(this.root_x + 3 * this.blocks_x, this.root_y + 9 * this.blocks_y);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x + 6 * this.blocks_x, this.root_y);
        // 竖线2
        shp.graphics.lineTo(this.root_x + 6 * this.blocks_x, this.root_y + 9 * this.blocks_y);
        this.sudokoTable.addChild(shp);
    };
    /**
     * 判断提交是否正确
     *
     * Judge the answer
     */
    education.prototype.isRight = function () {
        // 判断每一行是否满足对应的游戏规则
        for (var i = 0; i < 9; i++) {
            var judges = new Int32Array(10);
            for (var j = 1; j <= 9; j++) {
                judges[j] = 0;
            }
            for (var j = 0; j < 9; j++) {
                var item = this.ss.getItemAt(i * 9 + j);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error1: ");
                    egret.log(i, j);
                    return false;
                }
                else {
                    judges[cnum] = 1;
                }
            }
        }
        // 判断每一列是否满足对应的游戏规则
        for (var j = 0; j < 9; j++) {
            var judges = new Int32Array(10);
            for (var i = 1; i <= 9; i++) {
                judges[i] = 0;
            }
            for (var i = 0; i < 9; i++) {
                var item = this.ss.getItemAt(i * 9 + j);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error2: ");
                    egret.log(i, j);
                    return false;
                }
                else {
                    judges[cnum] = 1;
                }
            }
        }
        // 判断每个小的九宫格是否满足对应的游戏规则
        for (var i = 0; i < 9; i++) {
            var judges = new Int32Array(10);
            for (var j = 1; j <= 9; j++) {
                judges[j] = 0;
            }
            for (var j = 0; j < 9; j++) {
                var item = this.ss.getItemAt(((i % 3) * 3 + Math.floor(j / 3)) * 9 + Math.floor(i / 3) * 3 + j % 3);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error3: ", cnum, (i % 3) * 3, Math.ceil(j / 3), Math.ceil(i / 3) * 3, j % 3);
                    egret.log(i, j);
                    return false;
                }
                else {
                    judges[cnum] = 1;
                }
            }
        }
        return true;
    };
    /**
     * 显示比对结果
     *
     * Show the comparing result
     */
    education.prototype.show_panal = function (e) {
        var panel = new eui.Panel();
        // 用户提交的题解完全正确
        if (e == "Y") {
            panel.title = "恭喜您完成新手教程";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        else {
            panel.title = "失败乃成功之母，亲亲再尝试一下哦";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        panel.addChild(panel.closeButton);
    };
    /**
     * 用户进入新手教程后的初始欢迎界面
     *
     * Welcome UI
     */
    education.prototype.show_panal2 = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
        panel.title = "欢迎来到新手教程";
        panel.addChild(panel.closeButton);
    };
    /**
     * 生成随机数
     *
     * Generate a random number
     * @param min 随机数的最小值
     * @param max 随机数的最大值
     */
    education.prototype.random_num = function (min, max) {
        var Range = max - min;
        var Rand = Math.random();
        return (min + Math.round(Rand * Range));
    };
    /**
     * 生成数独
     *
     * Generate a Sudoku
     */
    education.prototype.gen_sudoko = function () {
        if (this.a_lable) {
            this.sudokoTable.width = 9 * this.blocks_x;
            this.sudokoTable.height = 9 * this.blocks_y;
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    var s2 = new eui.TextInput();
                    if (this.sus[9 * i + j] != 'a') {
                        s2.text = this.sus[9 * i + j];
                        s2.textColor = 0x00ffff;
                        s2.touchChildren = false;
                    }
                    else {
                        s2.text = "";
                        s2.textColor = 0x000000;
                        s2.touchChildren = true;
                    }
                    s2.maxChars = 1;
                    s2.x = this.root_x + j * this.blocks_x;
                    s2.y = this.root_y + i * this.blocks_y;
                    s2.width = this.blocks_x;
                    s2.height = this.blocks_y;
                    s2.inputType = egret.TextFieldInputType.TEL;
                    this.sudokoTable.addChild(s2);
                    this.ss.addItemAt(s2, i * 9 + j);
                }
            }
            this.Hline();
            this.a_lable = false;
        }
        else {
            var num_r = this.random_num(0, this.nums_t);
            switch (this.opt) {
                case 1: {
                    this.sudoku = this.sudoku_easy[num_r];
                    egret.log(num_r);
                    egret.log(this.sudoku);
                    this.sus = this.sudoku.split(',');
                    this.mode_id.text = "模式：简单";
                    break;
                }
                case 2: {
                    this.sudoku = this.sudoku_medium[num_r];
                    egret.log(num_r);
                    egret.log(this.sudoku);
                    this.sus = this.sudoku.split(',');
                    this.mode_id.text = "模式：中等";
                    break;
                }
                case 3: {
                    this.sudoku = this.sudoku_hard[num_r];
                    egret.log(num_r);
                    egret.log(this.sudoku);
                    this.sus = this.sudoku.split(',');
                    this.mode_id.text = "模式：困难";
                    break;
                }
                default: {
                    egret.log("生成数独状态机出错!");
                }
            }
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    var s2 = this.ss.getItemAt(i * 9 + j);
                    if (this.sus[9 * i + j] != 'a') {
                        s2.text = this.sus[9 * i + j];
                        s2.textColor = 0x00ffff;
                        s2.touchChildren = false;
                    }
                    else {
                        s2.text = "";
                        s2.textColor = 0x000000;
                        s2.touchChildren = true;
                    }
                    s2.maxChars = 1;
                    s2.x = this.root_x + j * this.blocks_x;
                    s2.y = this.root_y + i * this.blocks_y;
                    s2.width = this.blocks_x;
                    s2.height = this.blocks_y;
                    s2.inputType = egret.TextFieldInputType.TEL;
                }
            }
        }
    };
    /**
     * 进入新手教程
     *
     * Enter the Newbie Guide
     */
    education.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //返回人机界面
        this.quit_to_PC.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new play_with_computers());
        }, this);
        this.edubutton.label = "开始!";
        this.edubutton.scaleX = 2;
        this.edubutton.scaleY = 2;
        this.edubutton.horizontalCenter = 0;
        this.edubutton.verticalCenter = 0;
        this.addChild(this.edubutton);
        this.edubutton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start_edu, this);
    };
    /**
     * 开始进行新手教程
     *
     * Start the Newbie Guide
     */
    education.prototype.start_edu = function () {
        var _this = this;
        this.edubutton.visible = false;
        this.submit.visible = true;
        this.easy.visible = true;
        this.medium.visible = true;
        this.hard.visible = true;
        this.mode_id.visible = true;
        this.sudokoTable.visible = true;
        this.opt = 1;
        this.a_lable = true;
        //加载数独题
        this.gen_sudoko(); //样题
        this.easy.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.opt = 1; _this.gen_sudoko(); }, this);
        this.medium.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.opt = 2; _this.gen_sudoko(); }, this);
        this.hard.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.opt = 3; _this.gen_sudoko(); }, this);
        //提交数独题目
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.isRight()) {
                _this.show_panal("Y");
            }
            else {
                _this.show_panal("N");
            }
        }, this);
    };
    return education;
}(eui.Component));
__reflect(education.prototype, "education", ["eui.UIComponent", "egret.DisplayObject"]);
/**
 * 排位赛类
 *
 * Challenge Competition Class
 */
var Game_test = (function (_super) {
    __extends(Game_test, _super);
    // 加载相关的UI界面资源
    function Game_test() {
        var _this = _super.call(this) || this;
        _this.endtime = new Date();
        // 数独块UI界面大小相关设置
        _this.blocks_x = 60;
        _this.blocks_y = 60;
        _this.root_x = 0;
        _this.root_y = 40;
        // 硬编码的9x9数独题面棋盘，a代表需要用户填的空格
        _this.sudoku = "7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2";
        _this.sus = _this.sudoku.split(','); // 数独题面数组
        _this.ss = new eui.ArrayCollection(); //记录各块的数据
        _this.skinName = "resource/eui_skins/myskin/game_test1Skin.exml";
        return _this;
    }
    Game_test.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    /**
     * 添加数独边框
     *
     * Add a Sudoku margins
     */
    Game_test.prototype.Hline = function () {
        var shp = new egret.Shape;
        shp.graphics.lineStyle(8, 0xa78e44);
        shp.graphics.moveTo(this.root_x, this.root_y + 3 * this.blocks_y);
        // 添加横线1
        shp.graphics.lineTo(this.root_x + 9 * this.blocks_x, this.root_y + 3 * this.blocks_y);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x, this.root_y + 6 * this.blocks_y);
        // 添加横线2
        shp.graphics.lineTo(this.root_x + 9 * this.blocks_x, this.root_y + 6 * this.blocks_y);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x + 3 * this.blocks_x, this.root_y);
        // 添加竖线1
        shp.graphics.lineTo(this.root_x + 3 * this.blocks_x, this.root_y + 9 * this.blocks_y);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x + 6 * this.blocks_x, this.root_y);
        // 添加竖线2
        shp.graphics.lineTo(this.root_x + 6 * this.blocks_x, this.root_y + 9 * this.blocks_y);
        this.sudokoTable.addChild(shp);
    };
    /**
     * 判断提交是否正确
     *
     * judge the answer
     */
    Game_test.prototype.isRight = function () {
        // 判断每一行是否满足对应的游戏规则
        for (var i = 0; i < 9; i++) {
            var judges = new Int32Array(10);
            for (var j = 1; j <= 9; j++) {
                judges[j] = 0;
            }
            for (var j = 0; j < 9; j++) {
                var item = this.ss.getItemAt(i * 9 + j);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error1: ");
                    egret.log(i, j);
                    return false;
                }
                else {
                    judges[cnum] = 1;
                }
            }
        }
        // 判断每一列是否满足对应的游戏规则
        for (var j = 0; j < 9; j++) {
            var judges = new Int32Array(10);
            for (var i = 1; i <= 9; i++) {
                judges[i] = 0;
            }
            for (var i = 0; i < 9; i++) {
                var item = this.ss.getItemAt(i * 9 + j);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error2: ");
                    egret.log(i, j);
                    return false;
                }
                else {
                    judges[cnum] = 1;
                }
            }
        }
        // 判断每个小的九宫格是否满足对应的游戏规则
        for (var i = 0; i < 9; i++) {
            var judges = new Int32Array(10);
            for (var j = 1; j <= 9; j++) {
                judges[j] = 0;
            }
            for (var j = 0; j < 9; j++) {
                var item = this.ss.getItemAt(((i % 3) * 3 + Math.floor(j / 3)) * 9 + Math.floor(i / 3) * 3 + j % 3);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error3: ", cnum, (i % 3) * 3, Math.ceil(j / 3), Math.ceil(i / 3) * 3, j % 3);
                    egret.log(i, j);
                    return false;
                }
                else {
                    judges[cnum] = 1;
                }
            }
        }
        return true;
    };
    /**
     * 显示比对结果
     *
     * show the comparing result
     */
    Game_test.prototype.show_panal = function (e) {
        var panel = new eui.Panel();
        // 用户提交的题解完全正确
        if (e == "Y") {
            panel.title = "恭喜您完成本届数独挑战";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        else {
            panel.title = "数独错误";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        panel.addChild(panel.closeButton);
    };
    Game_test.prototype.printtime = function () {
        this.endtime = new Date;
        this.timeout.text = "距离挑战结束还剩: " + (24 - 1 - this.endtime.getHours()).toString() + "时 " +
            (60 - 1 - this.endtime.getMinutes()).toString() + "分 " + (60 - 1 - this.endtime.getSeconds()).toString() + "秒";
    };
    /**
     * 生成数独框图
     *
     * generate the sudoku
     */
    Game_test.prototype.gensudoko = function () {
        this.sudokoTable.width = 360;
        this.sudokoTable.height = 360;
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var s2 = new eui.TextInput();
                if (this.sus[9 * i + j] != 'a') {
                    s2.text = this.sus[9 * i + j];
                    s2.textColor = 0x00ffff;
                    s2.touchChildren = false;
                }
                s2.maxChars = 1;
                s2.x = this.root_x + j * this.blocks_x;
                s2.y = this.root_y + i * this.blocks_y;
                s2.width = this.blocks_x;
                s2.height = this.blocks_y;
                s2.inputType = egret.TextFieldInputType.TEL;
                this.sudokoTable.addChild(s2);
                this.ss.addItemAt(s2, i * 9 + j);
            }
        }
        //生成数独边框线
        this.Hline();
        this.test_user_input();
    };
    /**
     * 从文件中读取数独
     *
     * read the sudoku from a text file
     */
    Game_test.prototype.read_from_file = function () {
        /*
        var url = "resource/texts/s_answer.txt";
        var  request:egret.HttpRequest = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.GET);
        request.once(egret.Event.COMPLETE, (evt:egret.Event)=>{
            var request:egret.HttpRequest = evt.currentTarget;
            this.sudoku = request.response;
            egret.log(this.sudoku);
        }, null);
        */
    };
    Game_test.prototype.is_input_error = function (i, j, sudoku_a, scene) {
        var x = i, y = j;
        egret.log(x);
        egret.log(y);
        var item = sudoku_a.getItemAt(x * 9 + y);
        egret.log(item.text);
        if (!((item.text[0] >= '1' && item.text[0] <= '9') || item.text.length == 0)) {
            item.textColor = 0xDC143C;
            var error_p = new eui.Panel;
            error_p.title = "非法输入，请输入数字1~9";
            error_p.horizontalCenter = 0;
            error_p.verticalCenter = 0;
            scene.addChild(error_p);
            error_p.addChild(error_p.closeButton);
        }
        else {
            item.textColor = 0xffffff;
        }
    };
    /**
     * 显示比对结果
     *
     * show the comparing result
     */
    Game_test.prototype.test_user_input = function () {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var block_i = this.ss.getItemAt(i * 9 + j);
                block_i.addEventListener(egret.Event.CHANGE, this.is_input_error.bind(egret.Event.CHANGE, i, j, this.ss, this, this), this);
            }
        }
    };
    /**
     * 主函数
     *
     * Main
     */
    Game_test.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.quit_to_main.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            timer.stop();
            SceneManager.removeScene(new Startscence());
        }, this);
        var timer = new egret.Timer(300, 0); //0.3s执行1次
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.printtime();
        }, this);
        timer.start();
        this.read_from_file();
        this.gensudoko();
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.isRight()) {
                _this.show_panal("Y");
            }
            else {
                _this.show_panal("N");
            }
        }, this);
    };
    return Game_test;
}(eui.Component));
__reflect(Game_test.prototype, "Game_test", ["eui.UIComponent", "egret.DisplayObject"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        SceneManager.stage = this.stage;
        SceneManager.addScene(new Startscence());
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var challenges = (function (_super) {
    __extends(challenges, _super);
    function challenges() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/myskin/challengeSkin.exml";
        return _this;
    }
    challenges.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    challenges.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //返回人机界面
        this.quit_to_PC.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new play_with_computers);
        }, this);
    };
    return challenges;
}(eui.Component));
__reflect(challenges.prototype, "challenges", ["eui.UIComponent", "egret.DisplayObject"]);
/**
 * 随机数独类
 *
 * Random Sudoku Class
 */
var play_with_computers = (function (_super) {
    __extends(play_with_computers, _super);
    function play_with_computers() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/myskin/play_with_computerSkin.exml";
        return _this;
    }
    play_with_computers.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    /**
     * 返回主界面
     *
     * Go back to the main menu
     */
    play_with_computers.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.quit_to_main.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new Startscence());
        }, this);
        this.new_man_b.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new education());
        }, this);
        this.randam_sb.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new random());
        }, this);
        this.soduko_chb.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new challenges());
        }, this);
    };
    return play_with_computers;
}(eui.Component));
__reflect(play_with_computers.prototype, "play_with_computers", ["eui.UIComponent", "egret.DisplayObject"]);
/**
 * 玩家匹配类
 *
 * Player VS Player Class
 */
var play_with_man = (function (_super) {
    __extends(play_with_man, _super);
    function play_with_man() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/myskin/play_with_manSkin.exml";
        return _this;
    }
    play_with_man.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    /**
     * 返回主菜单
     *
     * Go back to the main menu
     */
    play_with_man.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.quit_to_main.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new Startscence());
        }, this);
    };
    return play_with_man;
}(eui.Component));
__reflect(play_with_man.prototype, "play_with_man", ["eui.UIComponent", "egret.DisplayObject"]);
/*
 * 模块名：random
 * 功能：随机数独页面的游戏界面和游戏底层逻辑
 *
 *
 */
var random = (function (_super) {
    __extends(random, _super);
    function random() {
        var _this = _super.call(this) || this;
        _this.a_lable = true;
        _this.nums_t = 4;
        // UI界面大小相关设置
        _this.blocks_x = 60;
        _this.blocks_y = 60;
        _this.root_x = 0;
        _this.root_y = 50;
        // 硬编码的9x9数独题面棋盘，a代表需要用户填的空格
        _this.sudoku = "7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2";
        _this.sudoku_easy = ["7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2",
            "1,a,a,6,a,8,a,5,a,7,3,a,a,a,4,a,a,a,a,a,2,a,a,a,a,3,4,a,6,1,a,7,a,a,a,a,a,a,a,8,a,a,1,6,9,5,a,8,1,a,a,a,a,3,a,1,a,a,a,6,5,9,a,a,9,a,a,1,7,a,a,8,8,a,a,a,4,a,7,a,a",
            "a,a,a,5,8,a,a,a,a,7,a,a,a,a,a,a,a,9,a,a,6,a,a,a,1,4,a,a,a,8,a,2,a,9,a,6,a,a,3,7,a,9,a,5,8,a,1,a,a,a,4,2,3,7,1,a,5,2,3,6,a,a,4,3,6,2,4,9,7,5,8,1,9,a,7,1,5,8,3,a,a",
            "a,8,5,a,a,a,2,1,a,a,9,4,a,1,2,a,a,3,a,a,a,3,a,a,7,a,4,5,a,3,4,a,9,a,a,a,a,4,a,2,a,6,a,3,a,a,a,a,1,a,3,9,a,7,6,a,8,a,a,5,a,a,a,1,a,a,8,4,a,3,6,a,a,2,7,a,a,a,8,9,a",
            "a,4,7,a,5,a,a,a,8,6,a,5,a,3,a,2,a,1,a,a,a,7,a,6,a,3,a,a,a,6,a,7,a,a,2,4,9,a,a,8,a,4,a,a,6,4,5,a,a,1,a,9,a,a,a,1,a,5,a,2,a,a,a,2,a,8,a,4,a,5,a,3,5,a,a,a,9,a,7,1,a"];
        _this.sudoku_hard = ["a,a,6,a,a,a,a,a,3,7,a,a,3,a,a,a,a,a,a,a,a,a,1,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,3,a,1,1,a,a,4,a,a,8,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,2,a,a,a,8,a,a,a",
            "7,a,a,a,a,4,a,2,a,a,9,a,a,a,a,3,a,a,a,a,a,a,a,6,a,a,8,a,8,a,9,a,a,a,a,a,a,3,5,a,a,a,a,a,9,a,a,a,a,7,2,a,4,a,a,a,9,5,2,a,a,a,a,a,a,a,a,a,a,8,6,7,1,a,a,3,a,a,a,a,a",
            "8,a,a,a,a,5,2,a,a,a,a,a,a,6,a,a,3,a,9,a,a,a,a,a,5,a,a,a,7,3,a,a,a,a,6,a,a,a,a,a,2,8,a,a,5,a,5,a,6,a,a,a,a,a,a,2,a,a,a,a,a,a,9,4,a,a,a,a,a,a,a,8,a,a,6,7,3,a,a,2,a",
            "a,4,a,a,a,3,a,a,1,3,a,a,5,a,a,a,9,a,a,a,6,a,7,a,a,a,a,a,2,a,a,8,4,a,a,a,a,a,a,a,6,a,a,4,a,a,a,7,a,a,a,a,5,a,2,a,a,6,a,a,9,a,a,a,a,a,a,a,a,4,a,2,9,a,5,1,a,a,a,a,a",
            "a,a,4,a,1,a,a,5,7,6,a,a,a,a,a,2,a,a,a,a,1,3,a,a,a,a,a,a,a,a,a,4,5,a,a,9,2,4,a,a,a,a,a,a,a,a,a,a,9,a,a,a,1,3,a,7,3,a,a,a,a,a,a,a,a,a,a,a,4,a,9,a,a,a,a,a,6,2,7,a,a"];
        _this.sudoku_medium = ["5,a,a,a,a,9,a,a,a,a,2,a,8,a,a,a,9,1,9,a,a,4,a,a,a,a,3,a,a,7,a,1,a,6,a,a,a,a,a,a,9,a,5,a,a,8,a,a,a,a,a,9,a,a,a,a,1,a,a,a,a,2,7,a,a,a,6,a,5,a,a,a,a,3,a,a,a,2,a,a,a",
            "6,2,a,a,a,3,a,a,a,a,a,a,9,a,a,7,a,a,a,a,4,8,a,a,a,2,a,a,3,a,a,a,8,a,a,2,a,6,a,a,a,a,a,8,a,a,a,a,1,7,a,9,a,a,7,a,8,a,a,a,a,a,a,a,a,2,a,a,a,a,9,a,a,a,a,a,5,2,a,a,3",
            "4,7,a,1,a,8,a,2,9,a,a,a,a,a,a,a,a,a,a,6,9,2,7,1,a,a,a,9,a,6,a,1,a,3,a,3,a,a,a,a,a,a,a,4,a,4,a,7,a,9,a,8,a,a,a,4,8,7,5,3,a,a,a,a,a,a,a,a,a,a,5,8,a,4,a,3,a,9,7,a,a",
            "1,a,a,6,a,8,a,5,a,7,3,a,a,a,4,a,a,a,a,a,2,a,a,a,a,3,4,a,6,1,a,7,a,a,a,a,a,a,a,8,a,a,1,6,9,5,a,8,1,a,a,a,a,3,a,1,a,a,a,6,5,9,a,a,9,a,a,1,7,a,a,8,8,a,a,a,4,a,7,a,a",
            "a,4,7,a,5,a,a,a,8,6,a,5,a,3,a,2,a,1,a,a,a,7,a,6,a,3,a,a,a,6,a,7,a,a,2,4,9,a,a,8,a,4,a,a,6,4,5,a,a,1,a,9,a,a,a,1,a,5,a,2,a,a,a,2,a,8,a,4,a,5,a,3,5,a,a,a,9,a,7,1,a"];
        _this.opt = 1; // 有限状态机1->easy, 2->medium, 3->hard
        _this.sus = _this.sudoku.split(','); // 数独题面数组
        _this.ss = new eui.ArrayCollection(); //记录各块的数据
        _this.skinName = "resource/eui_skins/myskin/randomSkin.exml";
        return _this;
    }
    random.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    /**
     * 添加数独边框
     * Add Sudoku margins
     */
    random.prototype.Hline = function () {
        var shp = new egret.Shape;
        shp.graphics.lineStyle(8, 0xa78e44);
        shp.graphics.moveTo(this.root_x, this.root_y + 3 * this.blocks_y);
        // 横线1
        shp.graphics.lineTo(this.root_x + 9 * this.blocks_x, this.root_y + 3 * this.blocks_y);
        this.sudokoTable1.addChild(shp);
        shp.graphics.moveTo(this.root_x, this.root_y + 6 * this.blocks_y);
        // 横线2
        shp.graphics.lineTo(this.root_x + 9 * this.blocks_x, this.root_y + 6 * this.blocks_y);
        this.sudokoTable1.addChild(shp);
        shp.graphics.moveTo(this.root_x + 3 * this.blocks_x, this.root_y);
        // 竖线1
        shp.graphics.lineTo(this.root_x + 3 * this.blocks_x, this.root_y + 9 * this.blocks_y);
        this.sudokoTable1.addChild(shp);
        shp.graphics.moveTo(this.root_x + 6 * this.blocks_x, this.root_y);
        // 竖线2
        shp.graphics.lineTo(this.root_x + 6 * this.blocks_x, this.root_y + 9 * this.blocks_y);
        this.sudokoTable1.addChild(shp);
    };
    /**
     * 判断提交是否正确
     * Judge the answer
     */
    random.prototype.isRight = function () {
        // 判断每一行是否满足对应的游戏规则
        for (var i = 0; i < 9; i++) {
            var judges = new Int32Array(10);
            for (var j = 1; j <= 9; j++) {
                judges[j] = 0;
            }
            for (var j = 0; j < 9; j++) {
                var item = this.ss.getItemAt(i * 9 + j);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error1: ");
                    egret.log(i, j);
                    return false;
                }
                else {
                    judges[cnum] = 1;
                }
            }
        }
        // 判断每一列是否满足对应的游戏规则
        for (var j = 0; j < 9; j++) {
            var judges = new Int32Array(10);
            for (var i = 1; i <= 9; i++) {
                judges[i] = 0;
            }
            for (var i = 0; i < 9; i++) {
                var item = this.ss.getItemAt(i * 9 + j);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error2: ");
                    egret.log(i, j);
                    return false;
                }
                else {
                    judges[cnum] = 1;
                }
            }
        }
        // 判断每个小的九宫格是否满足对应的游戏规则
        for (var i = 0; i < 9; i++) {
            var judges = new Int32Array(10);
            for (var j = 1; j <= 9; j++) {
                judges[j] = 0;
            }
            for (var j = 0; j < 9; j++) {
                var item = this.ss.getItemAt(((i % 3) * 3 + Math.floor(j / 3)) * 9 + Math.floor(i / 3) * 3 + j % 3);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error3: ", cnum, (i % 3) * 3, Math.ceil(j / 3), Math.ceil(i / 3) * 3, j % 3);
                    egret.log(i, j);
                    return false;
                }
                else {
                    judges[cnum] = 1;
                }
            }
        }
        return true;
    };
    /**
     * 显示比对结果
     * Show the comparing result
     */
    random.prototype.show_panal = function (e) {
        var panel = new eui.Panel();
        // 用户提交的题解完全正确
        if (e == "Y") {
            panel.title = "恭喜您完成新手教程";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        else {
            panel.title = "失败乃成功之母，亲亲再尝试一下哦";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        panel.addChild(panel.closeButton);
    };
    /**
     * 生成随机数
     * Generate a random number
     * @param min 随机数的最小值
     * @param max 随机数的最大值
     */
    random.prototype.random_num = function (min, max) {
        var Range = max - min;
        var Rand = Math.random();
        return (min + Math.round(Rand * Range));
    };
    /**
     * 生成数独
     * Generate a Sudoku
     */
    random.prototype.gen_sudoko = function () {
        if (this.a_lable) {
            this.sudokoTable1.width = 9 * this.blocks_x;
            this.sudokoTable1.height = 9 * this.blocks_y;
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    var s2 = new eui.TextInput();
                    if (this.sus[9 * i + j] != 'a') {
                        s2.text = this.sus[9 * i + j];
                        s2.textColor = 0x00ffff;
                        s2.touchChildren = false;
                    }
                    else {
                        s2.text = "";
                        s2.textColor = 0x000000;
                        s2.touchChildren = true;
                    }
                    s2.maxChars = 1;
                    s2.x = this.root_x + j * this.blocks_x;
                    s2.y = this.root_y + i * this.blocks_y;
                    s2.width = this.blocks_x;
                    s2.height = this.blocks_y;
                    s2.inputType = egret.TextFieldInputType.TEL;
                    this.sudokoTable1.addChild(s2);
                    this.ss.addItemAt(s2, i * 9 + j);
                }
            }
            this.Hline();
            this.a_lable = false;
        }
        else {
            var num_r = this.random_num(0, this.nums_t);
            switch (this.opt) {
                case 1: {
                    this.sudoku = this.sudoku_easy[num_r];
                    egret.log(num_r);
                    egret.log(this.sudoku);
                    this.sus = this.sudoku.split(',');
                    this.mode_id.text = "模式：简单";
                    break;
                }
                case 2: {
                    this.sudoku = this.sudoku_medium[num_r];
                    egret.log(num_r);
                    egret.log(this.sudoku);
                    this.sus = this.sudoku.split(',');
                    this.mode_id.text = "模式：中等";
                    break;
                }
                case 3: {
                    this.sudoku = this.sudoku_hard[num_r];
                    egret.log(num_r);
                    egret.log(this.sudoku);
                    this.sus = this.sudoku.split(',');
                    this.mode_id.text = "模式：困难";
                    break;
                }
                default: {
                    egret.log("生成数独状态机出错!");
                }
            }
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    var s2 = this.ss.getItemAt(i * 9 + j);
                    if (this.sus[9 * i + j] != 'a') {
                        s2.text = this.sus[9 * i + j];
                        s2.textColor = 0x00ffff;
                        s2.touchChildren = false;
                    }
                    else {
                        s2.text = "";
                        s2.textColor = 0x000000;
                        s2.touchChildren = true;
                    }
                    s2.maxChars = 1;
                    s2.x = this.root_x + j * this.blocks_x;
                    s2.y = this.root_y + i * this.blocks_y;
                    s2.width = this.blocks_x;
                    s2.height = this.blocks_y;
                    s2.inputType = egret.TextFieldInputType.TEL;
                }
            }
        }
    };
    /**
     * 随机数独模块整体控制
     * Random Sudoku Control
     */
    random.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        //返回人机界面
        this.quit_to_PC.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new play_with_computers);
        }, this);
        this.opt = 1;
        this.a_lable = true;
        this.easy.visible = true;
        this.medium.visible = true;
        this.hard.visible = true;
        //加载数独题
        this.gen_sudoko(); //样题
        this.easy.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.opt = 1; _this.gen_sudoko(); }, this);
        this.medium.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.opt = 2; _this.gen_sudoko(); }, this);
        this.hard.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.opt = 3; _this.gen_sudoko(); }, this);
        //提交数独题目
        this.submit1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.isRight()) {
                _this.show_panal("Y");
            }
            else {
                _this.show_panal("N");
            }
        }, this);
    };
    return random;
}(eui.Component));
__reflect(random.prototype, "random", ["eui.UIComponent", "egret.DisplayObject"]);
/*
 * 模块名：SceneManager
 * 功能：提供页面跳转的API函数
 *
 */
var SceneManager = (function () {
    function SceneManager() {
    }
    //跳转到下一页面
    SceneManager.addScene = function (scene) {
        this.stage.addChild(scene);
    };
    //跳转到上一页面
    SceneManager.removeScene = function (scene) {
        this.stage.removeChildren();
        this.stage.addChild(scene);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
/*
 * 模块名：Startscence
 * 功能：提供进入页面
 *
 *
 */
var Startscence = (function (_super) {
    __extends(Startscence, _super);
    function Startscence() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/myskin/StartscenseSkin.exml";
        return _this;
    }
    Startscence.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Startscence.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //进入人机练习模式
        this.StartPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new play_with_computers());
        }, this);
        //进入匹配模式
        this.StartPlay1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new play_with_man());
        }, this);
        //进入比赛模式
        this.StartPlay2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene(new Game_test());
        }, this);
    };
    return Startscence;
}(eui.Component));
__reflect(Startscence.prototype, "Startscence", ["eui.UIComponent", "egret.DisplayObject"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
//# sourceMappingURL=main.min.js.map
;window.Main = Main;