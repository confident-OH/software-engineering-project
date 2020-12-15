/**
 * 排位赛类
 * 
 * Challenge Competition Class
 */
class Game_test extends eui.Component implements eui.UIComponent{
    // UI界面相关对象初始化
    public quit_to_main:eui.Button;
    public sudokoTable:eui.Group;
    public timeout:eui.Label;
    public submit:eui.Button;
    public endtime:Date = new Date();

    // 数独块UI界面大小相关设置
    public blocks_x = 60;
    public blocks_y = 60;
    public root_x = 0;
    public root_y = 40;

    // 硬编码的9x9数独题面棋盘，a代表需要用户填的空格
    public sudoku:string = "7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2";
    public sus = this.sudoku.split(',');   // 数独题面数组
    public ss = new eui.ArrayCollection();  //记录各块的数据

    // 加载相关的UI界面资源
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/game_test1Skin.exml";
    }
    protected partAdded(partName: string, instance: any): void{
        super.partAdded(partName, instance);
    }
    
    /**
     * 处理用户操作
     * 
     * Deal with operations
     */
    private High_l(tx:eui.TextInput):void {
        var shp:egret.Shape = new egret.Shape;
        shp.graphics.beginFill(0xffa631);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.sudokoTable.addChildAt(shp, 0);
        this.sudokoTable.addChild(tx);
    }

    /**
     * 添加数独边框
     * 
     * Add a Sudoku margins
     */
    private Hline():void{
        var shp:egret.Shape = new egret.Shape;
        shp.graphics.lineStyle(8, 0xa78e44);
        shp.graphics.moveTo(this.root_x, this.root_y+3*this.blocks_y);

        // 添加横线1
        shp.graphics.lineTo(this.root_x+9*this.blocks_x, this.root_y+3*this.blocks_y);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x, this.root_y+6*this.blocks_y);

        // 添加横线2
        shp.graphics.lineTo(this.root_x+9*this.blocks_x, this.root_y+6*this.blocks_y); 
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x+3*this.blocks_x, this.root_y);

        // 添加竖线1
        shp.graphics.lineTo(this.root_x+3*this.blocks_x, this.root_y+9*this.blocks_y);
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x+6*this.blocks_x, this.root_y);

        // 添加竖线2
        shp.graphics.lineTo(this.root_x+6*this.blocks_x, this.root_y+9*this.blocks_y);
        this.sudokoTable.addChild(shp);
        
    }

    /**
     * 判断提交是否正确
     * 
     * judge the answer
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
     * show the comparing result
     */
    private show_panal(e: string):void{
        let panel = new eui.Panel();

        // 用户提交的题解完全正确
        if(e == "Y"){
            panel.title = "恭喜您完成本届数独挑战";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        // 用户提交的题解未完全匹配
        else{
            panel.title = "数独错误";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        panel.addChild(panel.closeButton);
    }

    private printtime():void{
        this.endtime = new Date;
        this.timeout.text = "距离挑战结束还剩: "+ (24-1-this.endtime.getHours()).toString() + "时 " + 
                            (60-1-this.endtime.getMinutes()).toString() + "分 " + (60-1-this.endtime.getSeconds()).toString() + "秒";
    }

    private gensudoko():void{
        this.sudokoTable.width = 360;
        this.sudokoTable.height = 360;
        for(var i = 0; i<9; i++){
            for(var j = 0; j<9; j++){
                var s2 = new eui.TextInput();  
                if(this.sus[9*i+j] != 'a'){
                    s2.text = this.sus[9*i+j];
                    s2.textColor = 0x00ffff;
                    s2.touchChildren = false;
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
    }

    private read_from_file():void{
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

    protected childrenCreated(): void{
        super.childrenCreated();
        this.quit_to_main.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            timer.stop();
            SceneManager.removeScene(new Startscence());
        }, this);
        var timer:egret.Timer = new egret.Timer(300, 0);    //0.3s执行1次
        timer.addEventListener(egret.TimerEvent.TIMER, ()=>{ 
            this.printtime();
        }, this);
        timer.start();
        timer.addEventListener(egret.Event.CHANGE, ()=>{ 
            this.printtime();
        }, this);
        this.read_from_file();
        this.gensudoko();
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            if(this.isRight()){
                this.show_panal("Y");
            }else{
                this.show_panal("N");
            }
        }, this);
        var timer:egret.Timer = new egret.Timer(500,5);
        //注册事件侦听器
    }
}