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
        var ss = new eui.ArrayCollection();
        for(var i = 0; i<9; i++){
            let s1 = new egret.TextField();
            s1.type = egret.TextFieldType.INPUT;
            s1.textAlign = egret.HorizontalAlign.CENTER;
            s1.textAlign = egret.VerticalAlign.MIDDLE;
            s1.width = 40;
            s1.height = 40;
            s1.text = "1";
            ss.addItemAt(s1, i);
            this.layTxBg(ss.getItemAt(i));
        }
    }
}