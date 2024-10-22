/**
 * 排位赛类
 * 
 * Challenge Competition Class
 */
class Game_test extends eui.Component implements eui.UIComponent {
    // UI界面相关对象初始化
    public quit_to_main: eui.Button;
    public sudokoTable: eui.Group;
    public timeout: eui.Label;
    public submit: eui.Button;
    public endtime: Date = new Date();

    // 数独块UI界面大小相关设置
    public blocks_x = 60;
    public blocks_y = 60;
    public root_x = 0;
    public root_y = 40;

    // 硬编码的9x9数独题面棋盘，a代表需要用户填的空格
    public sudoku: string = "7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2";
    public sus = this.sudoku.split(',');   // 数独题面数组
    public ss = new eui.ArrayCollection();  //记录各块的数据

    // 加载相关的UI界面资源
    constructor() {
        super();
        this.skinName = "resource/eui_skins/myskin/game_test1Skin.exml";
    }
    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    /**
     * 添加数独边框
     * 
     * Add a Sudoku margins
     */
    private Hline(): void {
        var shp: egret.Shape = new egret.Shape;
        shp.graphics.lineStyle(10, 0xffffff);
        shp.graphics.moveTo(this.root_x + 5, this.root_y + 3 * this.blocks_y);

        // 添加横线1
        shp.graphics.lineTo(this.root_x + 9 * this.blocks_x - 5, this.root_y + 3 * this.blocks_y);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x + 5, this.root_y + 6 * this.blocks_y);

        // 添加横线2
        shp.graphics.lineTo(this.root_x + 9 * this.blocks_x - 5, this.root_y + 6 * this.blocks_y);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x + 3 * this.blocks_x, this.root_y + 5);

        // 添加竖线1
        shp.graphics.lineTo(this.root_x + 3 * this.blocks_x, this.root_y + 9 * this.blocks_y - 5);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x + 6 * this.blocks_x, this.root_y + 5);

        // 添加竖线2
        shp.graphics.lineTo(this.root_x + 6 * this.blocks_x, this.root_y + 9 * this.blocks_y - 5);
        this.sudokoTable.addChild(shp);

    }

    /**
     * 判断提交是否正确
     * 
     * judge the answer
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
     * show the comparing result
     */
    private show_panal(e: string): void {
        let panel = new eui.Panel();

        // 用户提交的题解完全正确
        if (e == "Y") {
            panel.title = "答案正确";
            panel.width = 400;
            let tex:eui.Label = new eui.Label;
            tex.textAlign = egret.HorizontalAlign.CENTER;
            tex.x = 20;
            tex.y = 90;
            tex.width = 360;
            tex.textColor = 0x000000;
            tex.text = "恭喜您，挑战成功！\n欢迎您明天再来挑战。"
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
           tex.text = "恭喜您，挑战成功！\n欢迎您明天再来挑战。"
           panel.addChild(tex);
           panel.horizontalCenter = 0;
           panel.verticalCenter = 0;
            this.addChild(panel);
            */
        }
        panel.addChild(panel.closeButton);
    }

    private printtime(): void {
        this.endtime = new Date;
        this.timeout.text = "距离挑战结束还剩: " + (24 - 1 - this.endtime.getHours()).toString() + "时 " +
            (60 - 1 - this.endtime.getMinutes()).toString() + "分 " + (60 - 1 - this.endtime.getSeconds()).toString() + "秒";
    }

    /**
     * 生成数独框图
     * 
     * generate the sudoku
     */
    private gensudoko(): void {
        this.sudokoTable.width = 360;
        this.sudokoTable.height = 360;
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var s2 = new eui.TextInput();
                s2.skinName = "sudokoEditableBlank";
                if (this.sus[9 * i + j] != 'a') {//若该位置数字以确定，不可更改
                    s2.text = this.sus[9 * i + j];
                    s2.textColor = 0x000000;
                    s2.touchChildren = false;
                    s2.skinName = "sudokoSolidBlank";
                }
                s2.maxChars = 1;
                s2.x = this.root_x + j * this.blocks_x;
                s2.y = this.root_y + i * this.blocks_y;
                s2.width = this.blocks_x;
                s2.height = this.blocks_y;
                s2.textDisplay.type = egret.TextFieldType.INPUT;
                s2.textDisplay.inputType = egret.TextFieldInputType.TEL;
                this.sudokoTable.addChild(s2);
                this.ss.addItemAt(s2, i * 9 + j);
            }
        }
        //生成数独边框线
        this.Hline();
    }

    /**
     * 从文件中读取数独(待完成)
     * 
     * read the sudoku from a text file
     */
    private read_from_file(): void {
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
     * 主函数
     * 
     * Main
     */
    protected childrenCreated(): void {
        super.childrenCreated();
        this.quit_to_main.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            timer.stop();
            SceneManager.removeScene(new Startscence());
        }, this);
        var timer: egret.Timer = new egret.Timer(300, 0);    //0.3s执行1次
        timer.addEventListener(egret.TimerEvent.TIMER, () => {
            this.printtime();
        }, this);
        timer.start();
        this.read_from_file();
        this.gensudoko();
        this.test_user_input();
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            if (this.isRight()) {
                this.show_panal("Y");
            } else {
                this.show_panal("N");
            }
        }, this);
    }
}