class Game_test extends eui.Component implements eui.UIComponent{
    public quit_to_main:eui.Button;
    public sudokoTable:eui.Group;
    public submit:eui.Button;
    public blocks_x = 55;
    public blocks_y = 55;
    public root_x = 20;
    public root_y = 40;
    public sudoku:string = "7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2";
    public sus = this.sudoku.split(',');   // 数独题面数组
    public ss = new eui.ArrayCollection();  //记录各块的数据
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/game_test1Skin.exml";
    }
    protected partAdded(partName: string, instance: any): void{
        super.partAdded(partName, instance);
    }
    
    //处理函数
    /*
    private onChang(a,b){
        egret.log(a,b);
    }*/
    private High_l(tx:eui.TextInput):void {
        var shp:egret.Shape = new egret.Shape;
        shp.graphics.beginFill(0xffa631);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.sudokoTable.addChildAt(shp, 0);
        this.sudokoTable.addChild(tx);
    }
    private Hline():void{
        var shp:egret.Shape = new egret.Shape;
        shp.graphics.lineStyle(8, 0xa78e44);
        shp.graphics.moveTo(this.root_x, this.root_y+3*this.blocks_y);
        shp.graphics.lineTo(this.root_x+9*this.blocks_x, this.root_y+3*this.blocks_y); //横线1
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x, this.root_y+6*this.blocks_y);
        shp.graphics.lineTo(this.root_x+9*this.blocks_x, this.root_y+6*this.blocks_y); //横线2
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x+3*this.blocks_x, this.root_y);
        shp.graphics.lineTo(this.root_x+3*this.blocks_x, this.root_y+9*this.blocks_y); //竖线1
        this.sudokoTable.addChild(shp);
        shp.graphics.moveTo(this.root_x+6*this.blocks_x, this.root_y);
        shp.graphics.lineTo(this.root_x+6*this.blocks_x, this.root_y+9*this.blocks_y); //竖线2
        this.sudokoTable.addChild(shp);
        
    }
    private isRight():Boolean{
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
    private show_panal(e: string):void{
        let panel = new eui.Panel();
        if(e == "Y"){
            panel.title = "恭喜您完成本届数独挑战";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        else{
            panel.title = "数独错误";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        }
        panel.addChild(panel.closeButton);
    }

    protected childrenCreated(): void{
        super.childrenCreated();
        this.quit_to_main.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new Startscence());
        }, this)
        //添加监听，监听用户的输入
        this.sudokoTable.width = 360;
        this.sudokoTable.height = 360;
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
        /*//点击测试
        for(var i = 0; i<9; i++){
            for(var j = 0; j < 9; j++){
                this.sudokoTable.getElementAt(9*i+j).addEventListener(egret.Event.CHANGING, this.onChang.bind(this,i,j,false), this);
            }
        }*/
        this.Hline();
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            if(this.isRight()){
                this.show_panal("Y");
            }else{
                this.show_panal("N");
            }
        }, this)
    }
}