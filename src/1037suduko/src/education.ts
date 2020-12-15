/**
 * 新手教程类
 * 
 * Newbie Guide Class
 */
class education extends eui.Component implements eui.UIComponent{
    // UI界面相关对象初始化
    public quit_to_PC:eui.Button;
    public edubutton:eui.Button = new eui.Button;
    public easy:eui.Button;
    public medium:eui.Button;
    public hard:eui.Button;
    public submit:eui.Button;
    public sudokoTable:eui.Group;
    public a_lable:boolean = true;
    public nums_t = 4;
    public mode_id:eui.Label;

    // UI界面大小相关设置
    public blocks_x = 60;
    public blocks_y = 60;
    public root_x = 0;
    public root_y = 50;

    // 硬编码的9x9数独题面棋盘，a代表需要用户填的空格
    public sudoku:string = "7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2";
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
    public opt:Number = 1;    // 有限状态机1->easy, 2->medium, 3->hard
    public sus = this.sudoku.split(',');   // 数独题面数组
    public ss = new eui.ArrayCollection();  //记录各块的数据

    // 加载相关的UI界面资源
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/educationSkin.exml"
    }
    protected partAdded(partName: string, instance: any):void{
        super.partAdded(partName, instance);
    }

    /**
     * 添加数独边框
     * 
     * Add Sudoku margins
     */
    private Hline():void{
        var shp:egret.Shape = new egret.Shape;
        shp.graphics.lineStyle(8, 0xa78e44);
        shp.graphics.moveTo(this.root_x, this.root_y+3*this.blocks_y);

        // 横线1
        shp.graphics.lineTo(this.root_x+9*this.blocks_x, this.root_y+3*this.blocks_y); 
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x, this.root_y+6*this.blocks_y);

        // 横线2
        shp.graphics.lineTo(this.root_x+9*this.blocks_x, this.root_y+6*this.blocks_y); 
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x+3*this.blocks_x, this.root_y);

        // 竖线1
        shp.graphics.lineTo(this.root_x+3*this.blocks_x, this.root_y+9*this.blocks_y); 
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x+6*this.blocks_x, this.root_y);

        // 竖线2
        shp.graphics.lineTo(this.root_x+6*this.blocks_x, this.root_y+9*this.blocks_y); 
        this.sudokoTable.addChild(shp);
        
    }

    /**
     * 判断提交是否正确
     * 
     * Judge the answer
     */
    private isRight():Boolean{
        // 判断每一行是否满足对应的游戏规则
        for(var i = 0; i<9; i++){
            var judges = new Int32Array(10);
            for(var j = 1; j<=9; j++){
                judges[j] = 0;
            }
            for(var j = 0; j<9; j++){
                var item:eui.TextInput = this.ss.getItemAt(i*9+j);
                var cnum = parseInt(item.text);
                if(cnum>9||cnum<1||judges[cnum] != 0){
                    egret.log("Error1: ");
                    egret.log(i, j);
                    return false;
                }else{
                    judges[cnum] = 1;
                }
            }
        }

        // 判断每一列是否满足对应的游戏规则
        for(var j = 0; j<9; j++){
            var judges = new Int32Array(10);
            for(var i = 1; i<=9; i++){
                judges[i] = 0;
            }
            for(var i = 0; i<9; i++){
                var item:eui.TextInput = this.ss.getItemAt(i*9+j);
                var cnum = parseInt(item.text);
                if(cnum>9||cnum<1||judges[cnum] != 0){
                    egret.log("Error2: ");
                    egret.log(i, j);
                    return false;
                }else{
                    judges[cnum] = 1;
                }
            }
        }

        // 判断每个小的九宫格是否满足对应的游戏规则
        for(var i = 0; i<9; i++){
            var judges = new Int32Array(10);
            for(var j = 1; j<=9; j++){
                judges[j] = 0;
            }
            for(var j = 0; j<9; j++){
                var item:eui.TextInput = this.ss.getItemAt(((i%3) * 3 + Math.floor(j/3))*9 +  Math.floor(i/3) * 3 + j%3);
                var cnum = parseInt(item.text);
                if(cnum>9||cnum<1||judges[cnum] != 0){
                    egret.log("Error3: ", cnum, (i%3)*3, Math.ceil(j/3), Math.ceil(i/3) * 3, j%3);
                    egret.log(i, j);
                    return false;
                }else{
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
    private show_panal(e: string):void{
        let panel = new eui.Panel();

        // 用户提交的题解完全正确
        if(e == "Y"){
            panel.title = "恭喜您完成新手教程";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        // 用户提交的题解未完全匹配
        else{
            panel.title = "失败乃成功之母，亲亲再尝试一下哦";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        panel.addChild(panel.closeButton);
    }

    /**
     * 用户进入新手教程后的初始欢迎界面
     * 
     * Welcome UI
     */
    private show_panal2(e: egret.TouchEvent){
        let panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
        panel.title = "欢迎来到新手教程";
        panel.addChild(panel.closeButton);
    }

    /**
     * 生成随机数
     * 
     * Generate a random number
     * @param min 随机数的最小值
     * @param max 随机数的最大值
     */
    private random_num(min:number,max:number){
        let Range = max - min;  
        let Rand = Math.random();  
        return (min + Math.round(Rand * Range));  
    }

    /**
     * 生成数独
     * 
     * Generate a Sudoku
     */
    private gen_sudoko():void{
        if(this.a_lable){
            this.sudokoTable.width = 9*this.blocks_x;
            this.sudokoTable.height = 9*this.blocks_y;
            for(var i = 0; i<9; i++){
                for(var j = 0; j<9; j++){
                    var s2 = new eui.TextInput();  
                    if(this.sus[9*i+j] != 'a'){
                        s2.text = this.sus[9*i+j];
                        s2.textColor = 0x00ffff;
                        s2.touchChildren = false;
                    }else{
                        s2.text = "";
                        s2.textColor = 0x000000;
                        s2.touchChildren = true;
                    }
                    s2.maxChars = 1;
                    s2.x = this.root_x+j*this.blocks_x;
                    s2.y = this.root_y+i*this.blocks_y;
                    s2.width = this.blocks_x;
                    s2.height = this.blocks_y;
                    s2.inputType = egret.TextFieldInputType.TEL;
                    this.sudokoTable.addChild(s2);
                    this.ss.addItemAt(s2, i*9+j);
                }
            }
            this.Hline();
            this.a_lable = false;
        }else{
            var num_r = this.random_num(0, this.nums_t);
            switch(this.opt){
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
                default:{
                    egret.log("生成数独状态机出错!");
                }
            }
            for(var i = 0; i<9; i++){
                for(var j = 0; j<9; j++){
                    var s2:eui.TextInput = this.ss.getItemAt(i*9+j);
                    if(this.sus[9*i+j] != 'a'){
                        s2.text = this.sus[9*i+j];
                        s2.textColor = 0x00ffff;
                        s2.touchChildren = false;
                    }else{
                        s2.text = "";
                        s2.textColor = 0x000000;
                        s2.touchChildren = true;
                    }
                    s2.maxChars = 1;
                    s2.x = this.root_x+j*this.blocks_x;
                    s2.y = this.root_y+i*this.blocks_y;
                    s2.width = this.blocks_x;
                    s2.height = this.blocks_y;
                    s2.inputType = egret.TextFieldInputType.TEL;
                }
            }
        }
    }
    /**
     * 进入新手教程
     * 
     * Enter the Newbie Guide
     */
    protected childrenCreated(): void{
        super.childrenCreated();
        //返回人机界面
        this.quit_to_PC.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new play_with_computers());
        }, this)
        this.edubutton.label = "开始!";
        this.edubutton.scaleX = 2;
        this.edubutton.scaleY = 2;
        this.edubutton.horizontalCenter = 0;
        this.edubutton.verticalCenter = 0;
        this.addChild(this.edubutton);
        this.edubutton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start_edu, this);
    }

    /**
     * 开始进行新手教程
     * 
     * Start the Newbie Guide
     */
    private start_edu():void{
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
        this.gen_sudoko();  //样题
        this.easy.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.opt = 1;this.gen_sudoko();}, this);
        this.medium.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.opt = 2;this.gen_sudoko();}, this);
        this.hard.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.opt = 3;this.gen_sudoko();}, this);
        //提交数独题目
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            if(this.isRight()){
                this.show_panal("Y");
            }else{
                this.show_panal("N");
            }
        }, this)
    }
}