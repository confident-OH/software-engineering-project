class education extends eui.Component implements eui.UIComponent{
    public quit_to_PC:eui.Button;
    public inputtest:eui.TextInput;
    public a:string;
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/educationSkin.exml"
    }
    protected partAdded(partName: string, instance: any):void{
        super.partAdded(partName, instance);
    } 
    protected childrenCreated(): void{
        super.childrenCreated();
        //返回人机界面
        this.quit_to_PC.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new play_with_computers());
        }, this)
        let button = new eui.Button();
        button.label = "开始!";
        button .horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.show_panal, this);
        this.inputtest.addEventListener(egret.TextEvent.CHANGE, this.show_shu, this);
    }
    protected show_shu(e:egret.TextEvent){
        this.a = this.inputtest.text;
        egret.log(this.a);
    }
    protected show_panal(e: egret.TouchEvent){
        let panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
        panel.title = "欢迎来到新手教程";
        panel.addChild(panel.closeButton);
    }
}