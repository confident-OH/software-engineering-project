class play_with_computers extends eui.Component implements eui.UIComponent{
    public new_man_b:eui.Button;
    public randam_sb:eui.Button;
    public soduko_chb:eui.Button;
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