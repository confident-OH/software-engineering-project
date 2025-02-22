/*
 * 模块名：random
 * 功能：随机数独页面的游戏界面和游戏底层逻辑
 * 
 * 
 */
class random extends eui.Component implements eui.UIComponent {
    public quit_to_PC: eui.Button;
    public easy: eui.Button;
    public medium: eui.Button;
    public hard: eui.Button;
    public submit1: eui.Button;
    public sudokoTable1: eui.Group;
    public a_lable: boolean = true;
    public nums_t = 4;
    public mode_id: eui.Label;

    // UI界面大小相关设置
    public blocks_x = 60;
    public blocks_y = 60;
    public root_x = 0;
    public root_y = 50;

    // 硬编码的9x9数独题面棋盘，a代表需要用户填的空格
    public sudoku: string = "7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2";
    public sudoku_easy = ["7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2",
        "1,a,a,6,a,8,a,5,a,7,3,a,a,a,4,a,a,a,a,a,2,a,a,a,a,3,4,a,6,1,a,7,a,a,a,a,a,a,a,8,a,a,1,6,9,5,a,8,1,a,a,a,a,3,a,1,a,a,a,6,5,9,a,a,9,a,a,1,7,a,a,8,8,a,a,a,4,a,7,a,a",
        "a,a,a,5,8,a,a,a,a,7,a,a,a,a,a,a,a,9,a,a,6,a,a,a,1,4,a,a,a,8,a,2,a,9,a,6,a,a,3,7,a,9,a,5,8,a,1,a,a,a,4,2,3,7,1,a,5,2,3,6,a,a,4,3,6,2,4,9,7,5,8,1,9,a,7,1,5,8,3,a,a",
        "a,8,5,a,a,a,2,1,a,a,9,4,a,1,2,a,a,3,a,a,a,3,a,a,7,a,4,5,a,3,4,a,9,a,a,a,a,4,a,2,a,6,a,3,a,a,a,a,1,a,3,9,a,7,6,a,8,a,a,5,a,a,a,1,a,a,8,4,a,3,6,a,a,2,7,a,a,a,8,9,a",
        "a,4,7,a,5,a,a,a,8,6,a,5,a,3,a,2,a,1,a,a,a,7,a,6,a,3,a,a,a,6,a,7,a,a,2,4,9,a,a,8,a,4,a,a,6,4,5,a,a,1,a,9,a,a,a,1,a,5,a,2,a,a,a,2,a,8,a,4,a,5,a,3,5,a,a,a,9,a,7,1,a"];
    public sudoku_hard = ["a,a,6,a,a,a,a,a,3,7,a,a,3,a,a,a,a,a,a,a,a,a,1,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,3,a,1,1,a,a,4,a,a,8,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,2,a,a,a,8,a,a,a",
        "7,a,a,a,a,4,a,2,a,a,9,a,a,a,a,3,a,a,a,a,a,a,a,6,a,a,8,a,8,a,9,a,a,a,a,a,a,3,5,a,a,a,a,a,9,a,a,a,a,7,2,a,4,a,a,a,9,5,2,a,a,a,a,a,a,a,a,a,a,8,6,7,1,a,a,3,a,a,a,a,a",
        "8,a,a,a,a,5,2,a,a,a,a,a,a,6,a,a,3,a,9,a,a,a,a,a,5,a,a,a,7,3,a,a,a,a,6,a,a,a,a,a,2,8,a,a,5,a,5,a,6,a,a,a,a,a,a,2,a,a,a,a,a,a,9,4,a,a,a,a,a,a,a,8,a,a,6,7,3,a,a,2,a",
        "a,4,a,a,a,3,a,a,1,3,a,a,5,a,a,a,9,a,a,a,6,a,7,a,a,a,a,a,2,a,a,8,4,a,a,a,a,a,a,a,6,a,a,4,a,a,a,7,a,a,a,a,5,a,2,a,a,6,a,a,9,a,a,a,a,a,a,a,a,4,a,2,9,a,5,1,a,a,a,a,a",
        "a,a,4,a,1,a,a,5,7,6,a,a,a,a,a,2,a,a,a,a,1,3,a,a,a,a,a,a,a,a,a,4,5,a,a,9,2,4,a,a,a,a,a,a,a,a,a,a,9,a,a,a,1,3,a,7,3,a,a,a,a,a,a,a,a,a,a,a,4,a,9,a,a,a,a,a,6,2,7,a,a"];
    public sudoku_medium = ["5,a,a,a,a,9,a,a,a,a,2,a,8,a,a,a,9,1,9,a,a,4,a,a,a,a,3,a,a,7,a,1,a,6,a,a,a,a,a,a,9,a,5,a,a,8,a,a,a,a,a,9,a,a,a,a,1,a,a,a,a,2,7,a,a,a,6,a,5,a,a,a,a,3,a,a,a,2,a,a,a",
        "6,2,a,a,a,3,a,a,a,a,a,a,9,a,a,7,a,a,a,a,4,8,a,a,a,2,a,a,3,a,a,a,8,a,a,2,a,6,a,a,a,a,a,8,a,a,a,a,1,7,a,9,a,a,7,a,8,a,a,a,a,a,a,a,a,2,a,a,a,a,9,a,a,a,a,a,5,2,a,a,3",
        "4,7,a,1,a,8,a,2,9,a,a,a,a,a,a,a,a,a,a,6,9,2,7,1,a,a,a,9,a,6,a,1,a,3,a,3,a,a,a,a,a,a,a,4,a,4,a,7,a,9,a,8,a,a,a,4,8,7,5,3,a,a,a,a,a,a,a,a,a,a,5,8,a,4,a,3,a,9,7,a,a",
        "1,a,a,6,a,8,a,5,a,7,3,a,a,a,4,a,a,a,a,a,2,a,a,a,a,3,4,a,6,1,a,7,a,a,a,a,a,a,a,8,a,a,1,6,9,5,a,8,1,a,a,a,a,3,a,1,a,a,a,6,5,9,a,a,9,a,a,1,7,a,a,8,8,a,a,a,4,a,7,a,a",
        "a,4,7,a,5,a,a,a,8,6,a,5,a,3,a,2,a,1,a,a,a,7,a,6,a,3,a,a,a,6,a,7,a,a,2,4,9,a,a,8,a,4,a,a,6,4,5,a,a,1,a,9,a,a,a,1,a,5,a,2,a,a,a,2,a,8,a,4,a,5,a,3,5,a,a,a,9,a,7,1,a"];
    public opt: Number = 1;    // 有限状态机1->easy, 2->medium, 3->hard
    public sus = this.sudoku.split(',');   // 数独题面数组
    public ss = new eui.ArrayCollection();  //记录各块的数据

    constructor() {
        super();
        this.skinName = "resource/eui_skins/myskin/randomSkin.exml"
    }
    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    /**
     * 添加数独边框
     * Add Sudoku margins
     */
    private Hline(): void {
        var shp: egret.Shape = new egret.Shape;
        shp.graphics.lineStyle(10, 0xffffff);
        shp.graphics.moveTo(this.root_x + 5, this.root_y + 3 * this.blocks_y);

        // 横线1
        shp.graphics.lineTo(this.root_x + 9 * this.blocks_x - 5, this.root_y + 3 * this.blocks_y);
        this.sudokoTable1.addChild(shp);
        shp.graphics.moveTo(this.root_x + 5, this.root_y + 6 * this.blocks_y);

        // 横线2
        shp.graphics.lineTo(this.root_x + 9 * this.blocks_x - 5, this.root_y + 6 * this.blocks_y);
        this.sudokoTable1.addChild(shp);
        shp.graphics.moveTo(this.root_x + 3 * this.blocks_x, this.root_y + 5);

        // 竖线1
        shp.graphics.lineTo(this.root_x + 3 * this.blocks_x, this.root_y + 9 * this.blocks_y - 5);
        this.sudokoTable1.addChild(shp);
        shp.graphics.moveTo(this.root_x + 6 * this.blocks_x, this.root_y + 5);

        // 竖线2
        shp.graphics.lineTo(this.root_x + 6 * this.blocks_x, this.root_y + 9 * this.blocks_y - 5);
        this.sudokoTable1.addChild(shp);

    }

    /**
     * 判断提交是否正确
     * Judge the answer
     */
    private isRight(): Boolean {
        // 判断每一行是否满足对应的游戏规则
        for (var i = 0; i < 9; i++) {
            var judges = new Int32Array(10);
            for (var j = 1; j <= 9; j++) {
                judges[j] = 0;
            }
            for (var j = 0; j < 9; j++) {
                var item: eui.TextInput = this.ss.getItemAt(i * 9 + j);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error1: ");
                    egret.log(i, j);
                    return false;
                } else {
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
                var item: eui.TextInput = this.ss.getItemAt(i * 9 + j);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error2: ");
                    egret.log(i, j);
                    return false;
                } else {
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
                var item: eui.TextInput = this.ss.getItemAt(((i % 3) * 3 + Math.floor(j / 3)) * 9 + Math.floor(i / 3) * 3 + j % 3);
                var cnum = parseInt(item.text);
                if (cnum > 9 || cnum < 1 || judges[cnum] != 0) {
                    egret.log("Error3: ", cnum, (i % 3) * 3, Math.ceil(j / 3), Math.ceil(i / 3) * 3, j % 3);
                    egret.log(i, j);
                    return false;
                } else {
                    judges[cnum] = 1;
                }
            }
        }
        return true;
    }

    /**
     * 显示比对结果
     * 
     * Show the comparing result
     */
    private show_panal(e: string): void {
        let panel = new eui.Panel();

        // 用户提交的题解完全正确
        if (e == "Y") {
            panel.title = "答案正确";
            panel.width = 400;
            let tex: eui.Label = new eui.Label;
            tex.textAlign = egret.HorizontalAlign.CENTER;
            tex.x = 20;
            tex.y = 90;
            tex.width = 360;
            tex.textColor = 0x000000;
            tex.text = "解题成功\n要再来一局吗？"
            panel.addChild(tex);
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        // 用户提交的题解未完全匹配
        else {

            panel.title = "答案错误";
            panel.width = 400;
            let tex: eui.Label = new eui.Label;
            tex.textAlign = egret.HorizontalAlign.CENTER;
            tex.x = 20;
            tex.y = 90;
            tex.width = 360;
            tex.textColor = 0x000000;
            tex.text = "失败乃成功之母\n　亲亲再尝试一下哦~~"
            panel.addChild(tex);
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);

            /*
            panel.title = "答案正确";
            panel.width = 400;
            let tex:eui.Label = new eui.Label;
            tex.textAlign = egret.HorizontalAlign.CENTER;
            tex.x = 20;
            tex.y = 90;
            tex.width = 360;
            tex.textColor = 0x000000;
            tex.text = "解题成功\n要再来一局吗？"
            panel.addChild(tex);
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
            */
        }
        panel.addChild(panel.closeButton);
    }

    /**
     * 生成随机数
     * 
     * Generate a random number
     * @param min 随机数的最小值
     * @param max 随机数的最大值
     */
    private random_num(min: number, max: number) {
        let Range = max - min;
        let Rand = Math.random();
        return (min + Math.round(Rand * Range));
    }

    /**
     * 生成数独
     * 
     * Generate a Sudoku
     */
    private gen_sudoko(): void {
        if (this.a_lable) {
            this.sudokoTable1.width = 9 * this.blocks_x;
            this.sudokoTable1.height = 9 * this.blocks_y;
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    var s2 = new eui.TextInput();
                    if (this.sus[9 * i + j] != 'a') {
                        s2.text = this.sus[9 * i + j];
                        s2.skinName = "sudokoSolidBlank";
                        s2.textColor = 0x4D83D2;
                        s2.touchChildren = false;
                    } else {
                        s2.text = "";
                        s2.skinName = "sudokoEditableBlank";
                        s2.textColor = 0xffffff;
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
        } else {
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
                    var s2: eui.TextInput = this.ss.getItemAt(i * 9 + j);
                    if (this.sus[9 * i + j] != 'a') {
                        s2.text = this.sus[9 * i + j];
                        s2.skinName = "sudokoSolidBlank";
                        s2.textColor = 0x4D83D2;
                        s2.touchChildren = false;
                    } else {
                        s2.text = "";
                        s2.skinName = "sudokoEditableBlank";
                        s2.textColor = 0xffffff;
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
    }

    private is_input_error(i: number, j: number, sudoku_a: eui.ArrayCollection, scene: egret.Stage): void {
        var x: number = i, y: number = j;
        egret.log(x);
        egret.log(y);
        var item: eui.TextInput = sudoku_a.getItemAt(x * 9 + y);
        egret.log(item.text);
        if (!((item.text[0] >= '1' && item.text[0] <= '9') || item.text.length == 0)) {
            item.textColor = 0xDC143C;
            let error_p: eui.Panel = new eui.Panel;
            error_p.title = "不恰当的输入";
            let tex: eui.EditableText = new eui.EditableText;
            tex.x = 50;
            tex.y = 70;
            tex.width = 400;
            tex.textColor = 0x000000;
            tex.text = "数独仅包含数字1~9哦~~"
            tex.touchEnabled = false;
            error_p.addChild(tex);
            error_p.horizontalCenter = 0;
            error_p.verticalCenter = 0;
            scene.addChild(error_p);
            //error_p.addChild(error_p.closeButton);
        } else {
            item.textColor = 0xffffff;
        }
    }

    /**
     * 判断用户是否出现非法输入
     * 
     * judge the user input.
     */
    private test_user_input(): void {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var block_i = this.ss.getItemAt(i * 9 + j);
                block_i.addEventListener(egret.Event.CHANGE,
                    this.is_input_error.bind(egret.Event.CHANGE, i, j, this.ss, this, this), this);
            }
        }
    }

    /**
     * 随机数独模块整体控制
     * Random Sudoku Control
     */
    protected childrenCreated(): void {
        super.childrenCreated();
        //返回人机界面
        this.quit_to_PC.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SceneManager.removeScene(new play_with_computers);
        }, this);
        this.opt = 1;
        this.a_lable = true;
        this.easy.visible = true;
        this.medium.visible = true;
        this.hard.visible = true;
        //加载数独题
        this.gen_sudoko();  //样题
        this.easy.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.opt = 1; this.gen_sudoko(); }, this);
        this.medium.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.opt = 2; this.gen_sudoko(); }, this);
        this.hard.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.opt = 3; this.gen_sudoko(); }, this);
        //检测非法输入
        this.test_user_input();
        //提交数独题目
        this.submit1.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            if (this.isRight()) {
                this.show_panal("Y");
            } else {
                this.show_panal("N");
            }
        }, this);
    }
}