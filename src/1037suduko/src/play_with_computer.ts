/*
    Module:人机对抗模块
*/
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

    /*
        Method:返回主界面
    */
    protected childrenCreated(): void{
        super.childrenCreated();
        
        this.quit_to_main.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new Startscence());
        }, this)
        this.new_man_b.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new education());
        }, this)
        this.randam_sb.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new random());
        }, this)
        this.soduko_chb.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new challenges());
        }, this)
    }
}