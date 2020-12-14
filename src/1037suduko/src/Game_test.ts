class Game_test extends eui.Component implements eui.UIComponent{
    public quit_to_main:eui.Button;
    public sudokoTable:eui.Group;
    public sudoku:string;
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
        shp.graphics.beginFill(0x993366);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.sudokoTable.addChildAt(shp, 0);
        tx.textColor = 0xffffff;
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
        var url = "resource/texts/s_answer.txt";
        var  request:egret.HttpRequest = new egret.HttpRequest();
        var respHandler = function( evt:egret.Event ):void{
            switch ( evt.type ){
                case egret.Event.COMPLETE:
                    var request:egret.HttpRequest = evt.currentTarget;
                    console.log( "respHandler:n", request.response );
                    break;
                case egret.IOErrorEvent.IO_ERROR:
                    console.log( "respHandler io error" );
                    break;
            }
        }
        request.open(url, egret.HttpMethod.GET); 
        request.once(egret.Event.COMPLETE, respHandler, null);
        
        var ss = new eui.ArrayCollection();
        for(var i = 0; i<9; i++){
            for(var j = 0; j<9; j++){
                let s1 = new egret.TextField();
                s1.type = egret.TextFieldType.INPUT;
                s1.x = 20+j*40;
                s1.y = 40+i*40;
                s1.width = 40;
                s1.height = 40;
                s1.text = "1";
                s1.textAlign = egret.HorizontalAlign.CENTER;
                s1.textAlign = egret.VerticalAlign.MIDDLE;
                s1.bold = true;
                ss.addItemAt(s1, i*9+j);
                this.layTxBg(ss.getItemAt(i*9+j));
            }
            
        }
    }
}