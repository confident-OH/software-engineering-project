class Game_test extends eui.Component implements eui.UIComponent{
    public quit_to_main:eui.Button;
    public sudokoTable:eui.Group;
    public blocks_x = 55;
    public blocks_y = 55;
    public root_x = 20;
    public root_y = 40;
    public sudoku:string = "7,3,2,6,a,a,a,a,9,a,a,a,9,a,a,2,6,3,a,a,a,1,a,a,a,5,a,9,a,a,2,3,a,7,1,a,5,7,a,4,a,a,6,a,8,4,2,1,8,a,6,a,a,5,a,6,5,3,8,a,9,7,1,3,9,7,a,1,2,4,8,a,8,1,a,a,6,9,5,a,2";
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/game_test1Skin.exml";
    }
    protected partAdded(partName: string, instance: any): void{
        super.partAdded(partName, instance);
    }
    protected readsoduko(){
        this.sudoku
    }
    //处理函数
    private onChang(a,b){
        egret.log(a,b);
    }
    private layTxBg(tx:egret.TextField):void {
        var shp:egret.Shape = new egret.Shape;
        shp.graphics.beginFill(0x3D5D98);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.sudokoTable.addChildAt(shp, 0);
        tx.textColor = 0x00ffff;
        tx.stroke = 2;
        tx.strokeColor = 0xffffff;
        this.sudokoTable.addChild(tx);
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
        var sus = this.sudoku.split(',');
        var ss = new eui.ArrayCollection();
        for(var i = 0; i<9; i++){
            for(var j = 0; j<9; j++){
                if(sus[9*i+j] == 'a'){
                    let s2 = new eui.TextInput();
                    s2.maxChars = 1;
                    s2.x = this.root_x+j*this.blocks_x;
                    s2.y = this.root_y+i*this.blocks_y;
                    s2.width = this.blocks_x;
                    s2.height = this.blocks_y;
                    s2.inputType = egret.TextFieldInputType.TEL;
                    this.sudokoTable.addChild(s2);
                    ss.addItemAt(s2, i*9+j);
                }else{
                    let s1 = new egret.TextField();
                    s1.maxChars = 1;
                    s1.x = 20+j*40;
                    s1.y = 40+i*40;
                    s1.width = 40;
                    s1.height = 40;
                    s1.text = sus[9*i+j];
                    s1.textAlign = egret.HorizontalAlign.CENTER;
                    s1.textAlign = egret.VerticalAlign.MIDDLE;
                    s1.bold = true;
                    ss.addItemAt(s1, i*9+j);
                    this.layTxBg(ss.getItemAt(i*9+j));
                    ss.addItemAt(s1, i*9+j);
                }
                
                
                
                
                /**/
            }
        }
        
    }
}