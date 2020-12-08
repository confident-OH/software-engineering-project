class play_with_man extends eui.Component implements eui.UIComponent{
    public random_mb:eui.Button;
    public open_house:eui.Button;
    public rank:eui.Button;
    public quit_to_main:eui.Button;
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/play_with_computerSkin.exml"
    }
    protected partAdded(partName: string, instance: any):void{
        super.partAdded(partName, instance);
    } 
    protected childrenCreated(): void{
        super.childrenCreated();

        //返回主界面
        this.quit_to_main.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new Startscence());
        }, this)
    }

}