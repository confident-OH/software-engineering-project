var egret = window.egret;window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = {"center_1":{"size":"20","border":"true","horizonCenter":"true"}};
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Startscense":"resource/eui_skins/myskin/StartscenseSkin.exml","Game_test":"resource/eui_skins/myskin/game_test1Skin.exml","play_with_computer":"resource/eui_skins/myskin/play_with_computerSkin.exml","play_with_man":"resource/eui_skins/myskin/play_with_manSkin.exml","challenge":"resource/eui_skins/myskin/challengeSkin.exml","education":"resource/eui_skins/myskin/challengeSkin.exml","competations":"resource/eui_skins/myskin/competationsSkin.exml"};generateEUI.paths['resource/eui_skins/backgroundSkin.exml'] = window.backgroundSkin = (function (_super) {
	__extends(backgroundSkin, _super);
	function backgroundSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 404;
		this.width = 395;
		this._TweenGroup1_i();
	}
	var _proto = backgroundSkin.prototype;

	_proto._TweenGroup1_i = function () {
		var t = new egret.tween.TweenGroup();
		return t;
	};
	return backgroundSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["image_u","labelDisplay","iconDisplay","image_d"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.labelDisplay_i(),this.iconDisplay_i()];
		this.image_u_i();
		
		this.image_d_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("image_u","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("image_d","",1,""),
					new eui.SetProperty("image_u","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("image_u","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto.image_u_i = function () {
		var t = new eui.Image();
		this.image_u = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image_d_i = function () {
		var t = new eui.Image();
		this.image_d = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.source = "mine_select_down_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/challengeSkin.exml'] = window.challengeSkin = (function (_super) {
	__extends(challengeSkin, _super);
	function challengeSkin() {
		_super.call(this);
		this.skinParts = ["quit_to_PC"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.quit_to_PC_i()];
	}
	var _proto = challengeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 1454;
		t.source = "soduko_bg_jpg";
		t.width = 868.54;
		t.x = -143.54;
		t.y = -157;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.text = "挑战模式";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 204;
		t.x = 222;
		t.y = 204;
		return t;
	};
	_proto.quit_to_PC_i = function () {
		var t = new eui.Button();
		this.quit_to_PC = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.label = "返回";
		t.width = 136;
		t.x = 250;
		t.y = 881;
		return t;
	};
	return challengeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/competationsSkin.exml'] = window.competationsSkin = (function (_super) {
	__extends(competationsSkin, _super);
	function competationsSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
	}
	var _proto = competationsSkin.prototype;

	return competationsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/educationSkin.exml'] = window.educationSkin = (function (_super) {
	__extends(educationSkin, _super);
	function educationSkin() {
		_super.call(this);
		this.skinParts = ["quit_to_PC","sudokoTable","submit","easy","medium","hard","mode_id"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.quit_to_PC_i(),this._Label1_i(),this.sudokoTable_i(),this.submit_i(),this.easy_i(),this.medium_i(),this.hard_i(),this.mode_id_i()];
	}
	var _proto = educationSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 1454;
		t.source = "soduko_bg_jpg";
		t.width = 868.54;
		t.x = -143.54;
		t.y = -157;
		return t;
	};
	_proto.quit_to_PC_i = function () {
		var t = new eui.Button();
		this.quit_to_PC = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.label = "返回";
		t.width = 136;
		t.x = 250;
		t.y = 881;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 160;
		t.bold = true;
		t.height = 40;
		t.text = "新手教程";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 320;
		t.x = 320;
		t.y = 30;
		return t;
	};
	_proto.sudokoTable_i = function () {
		var t = new eui.Group();
		this.sudokoTable = t;
		t.visible = false;
		t.x = 50;
		t.y = 120;
		return t;
	};
	_proto.submit_i = function () {
		var t = new eui.Button();
		this.submit = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 108.5;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.horizontalCenter = 0;
		t.label = "提交题解";
		t.visible = false;
		t.width = 217;
		t.y = 803;
		return t;
	};
	_proto.easy_i = function () {
		var t = new eui.Button();
		this.easy = t;
		t.label = "简单";
		t.visible = false;
		t.x = 134;
		t.y = 103;
		return t;
	};
	_proto.medium_i = function () {
		var t = new eui.Button();
		this.medium = t;
		t.label = "中等";
		t.visible = false;
		t.x = 272;
		t.y = 103;
		return t;
	};
	_proto.hard_i = function () {
		var t = new eui.Button();
		this.hard = t;
		t.label = "困难";
		t.skinName = "skins.ButtonSkin";
		t.visible = false;
		t.x = 410;
		t.y = 103;
		return t;
	};
	_proto.mode_id_i = function () {
		var t = new eui.Label();
		this.mode_id = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.size = 25;
		t.text = "模式：简单";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 149;
		t.x = 454;
		t.y = 48;
		return t;
	};
	return educationSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/game_test1Skin.exml'] = window.game_test1Skin = (function (_super) {
	__extends(game_test1Skin, _super);
	function game_test1Skin() {
		_super.call(this);
		this.skinParts = ["quit_to_main","submit","sudokoTable"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.quit_to_main_i(),this.submit_i(),this.sudokoTable_i(),this._Label1_i()];
	}
	var _proto = game_test1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1322;
		t.source = "education_jpg";
		t.visible = true;
		t.width = 653.635;
		t.x = -6.635;
		t.y = -80;
		return t;
	};
	_proto.quit_to_main_i = function () {
		var t = new eui.Button();
		this.quit_to_main = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "返回";
		t.width = 140;
		t.x = 320;
		t.y = 887;
		return t;
	};
	_proto.submit_i = function () {
		var t = new eui.Button();
		this.submit = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 108.5;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.horizontalCenter = 0;
		t.label = "提交题解";
		t.width = 217;
		t.y = 803;
		return t;
	};
	_proto.sudokoTable_i = function () {
		var t = new eui.Group();
		this.sudokoTable = t;
		t.x = 50;
		t.y = 120;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 160;
		t.bold = true;
		t.height = 40;
		t.text = "首届挑战赛";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 320;
		t.x = 320;
		t.y = 30;
		return t;
	};
	return game_test1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/play_with_computerSkin.exml'] = window.play_with_computerSkin = (function (_super) {
	__extends(play_with_computerSkin, _super);
	function play_with_computerSkin() {
		_super.call(this);
		this.skinParts = ["new_man_b","randam_sb","soduko_chb","quit_to_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.new_man_b_i(),this.randam_sb_i(),this.soduko_chb_i(),this.quit_to_main_i()];
	}
	var _proto = play_with_computerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 1266.891;
		t.source = "PC_bg_jpg";
		t.width = 737;
		t.x = -47;
		t.y = -4;
		return t;
	};
	_proto.new_man_b_i = function () {
		var t = new eui.Button();
		this.new_man_b = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81;
		t.label = "新手教程";
		t.width = 250;
		t.x = 193;
		t.y = 198;
		return t;
	};
	_proto.randam_sb_i = function () {
		var t = new eui.Button();
		this.randam_sb = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81;
		t.label = "随机数独";
		t.width = 250;
		t.x = 193;
		t.y = 422;
		return t;
	};
	_proto.soduko_chb_i = function () {
		var t = new eui.Button();
		this.soduko_chb = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81;
		t.label = "数独闯关";
		t.width = 250;
		t.x = 193;
		t.y = 646;
		return t;
	};
	_proto.quit_to_main_i = function () {
		var t = new eui.Button();
		this.quit_to_main = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.label = "返回";
		t.width = 136;
		t.x = 250;
		t.y = 881;
		return t;
	};
	return play_with_computerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/play_with_manSkin.exml'] = window.play_with_manSkin = (function (_super) {
	__extends(play_with_manSkin, _super);
	function play_with_manSkin() {
		_super.call(this);
		this.skinParts = ["random_mb","open_house","rank","quit_to_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.random_mb_i(),this.open_house_i(),this.rank_i(),this.quit_to_main_i()];
	}
	var _proto = play_with_manSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 1266.891;
		t.source = "PC_bg_jpg";
		t.width = 737;
		t.x = -47;
		t.y = -4;
		return t;
	};
	_proto.random_mb_i = function () {
		var t = new eui.Button();
		this.random_mb = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81;
		t.label = "随机匹配";
		t.width = 250;
		t.x = 193;
		t.y = 198;
		return t;
	};
	_proto.open_house_i = function () {
		var t = new eui.Button();
		this.open_house = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81;
		t.label = "开房间";
		t.width = 250;
		t.x = 193;
		t.y = 422;
		return t;
	};
	_proto.rank_i = function () {
		var t = new eui.Button();
		this.rank = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81;
		t.label = "天梯";
		t.width = 250;
		t.x = 193;
		t.y = 646;
		return t;
	};
	_proto.quit_to_main_i = function () {
		var t = new eui.Button();
		this.quit_to_main = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.label = "返回";
		t.width = 136;
		t.x = 250;
		t.y = 881;
		return t;
	};
	return play_with_manSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/randomSkin.exml'] = window.randomSkin = (function (_super) {
	__extends(randomSkin, _super);
	function randomSkin() {
		_super.call(this);
		this.skinParts = ["quit_to_PC"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.quit_to_PC_i()];
	}
	var _proto = randomSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 1454;
		t.source = "soduko_bg_jpg";
		t.width = 868.54;
		t.x = -143.54;
		t.y = -157;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.text = "随机数独";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 204;
		t.x = 222;
		t.y = 204;
		return t;
	};
	_proto.quit_to_PC_i = function () {
		var t = new eui.Button();
		this.quit_to_PC = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.label = "返回";
		t.width = 136;
		t.x = 250;
		t.y = 881;
		return t;
	};
	return randomSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/StartscenseSkin.exml'] = window.StartscenseSkin = (function (_super) {
	__extends(StartscenseSkin, _super);
	function StartscenseSkin() {
		_super.call(this);
		this.skinParts = ["StartPlay","StartPlay1","StartPlay2"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.StartPlay_i(),this.StartPlay1_i(),this.StartPlay2_i()];
	}
	var _proto = StartscenseSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 360;
		t.anchorOffsetY = 640;
		t.fillMode = "scale";
		t.height = 1280;
		t.source = "start_image";
		t.visible = true;
		t.width = 720;
		t.x = 320;
		t.y = 640;
		return t;
	};
	_proto.StartPlay_i = function () {
		var t = new eui.Button();
		this.StartPlay = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 0;
		t.enable = true;
		t.height = 80;
		t.label = "人机练习";
		t.width = 320;
		t.x = 320;
		t.y = 660;
		return t;
	};
	_proto.StartPlay1_i = function () {
		var t = new eui.Button();
		this.StartPlay1 = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "匹配模式";
		t.width = 320;
		t.x = 320;
		t.y = 780;
		return t;
	};
	_proto.StartPlay2_i = function () {
		var t = new eui.Button();
		this.StartPlay2 = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "比赛";
		t.width = 320;
		t.x = 320;
		t.y = 900;
		return t;
	};
	return StartscenseSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/SudokoBlank.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.horizontalCenter = "0";
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i(),this.promptDisplay_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
				])
			,
			new eui.State ("disabledWithPrompt",
				[
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x3D5D98;
		t.percentHeight = 100;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.horizontalCenter = "1";
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "1";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.alpha = 0.8;
		t.bold = true;
		t.height = 24;
		t.left = 10;
		t.maxChars = 1;
		t.right = 10;
		t.size = 50;
		t.textAlign = "center";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);