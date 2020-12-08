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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Startscense":"resource/eui_skins/myskin/StartscenseSkin.exml","Game_test":"resource/eui_skins/myskin/game_test1Skin.exml"};generateEUI.paths['resource/eui_skins/backgroundSkin.exml'] = window.backgroundSkin = (function (_super) {
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
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
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
	}
	var _proto = ButtonSkin.prototype;

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
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/game_test1Skin.exml'] = window.game_test1Skin = (function (_super) {
	__extends(game_test1Skin, _super);
	function game_test1Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
<<<<<<< HEAD
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.Button_quit_i(),this._Group1_i()];
	}
	var _proto = game_test1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "001_jpg";
		t.visible = true;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 30;
		t.height = 60;
		t.text = "Welcome";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 320;
		t.y = 660;
		return t;
	};
	_proto.Button_quit_i = function () {
		var t = new eui.Button();
		this.Button_quit = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.label = "Quit";
		t.width = 180;
		t.x = 320;
		t.y = 740;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 50;
		t.y = 60;
		t.elementsContent = [this._TextInput1_i(),this._TextInput2_i(),this._TextInput3_i(),this._TextInput4_i(),this._TextInput5_i(),this._TextInput6_i(),this._TextInput7_i(),this._TextInput8_i(),this._TextInput9_i(),this._TextInput10_i(),this._TextInput11_i(),this._TextInput12_i(),this._TextInput13_i(),this._TextInput14_i(),this._TextInput15_i(),this._TextInput16_i(),this._TextInput17_i(),this._TextInput18_i(),this._TextInput19_i(),this._TextInput20_i(),this._TextInput21_i(),this._TextInput22_i(),this._TextInput23_i(),this._TextInput24_i(),this._TextInput25_i(),this._TextInput26_i(),this._TextInput27_i(),this._TextInput28_i(),this._TextInput29_i(),this._TextInput30_i(),this._TextInput31_i(),this._TextInput32_i(),this._TextInput33_i(),this._TextInput34_i(),this._TextInput35_i(),this._TextInput36_i(),this._TextInput37_i(),this._TextInput38_i(),this._TextInput39_i(),this._TextInput40_i(),this._TextInput41_i(),this._TextInput42_i(),this._TextInput43_i(),this._TextInput44_i(),this._TextInput45_i(),this._TextInput46_i(),this._TextInput47_i(),this._TextInput48_i(),this._TextInput49_i(),this._TextInput50_i(),this._TextInput51_i(),this._TextInput52_i(),this._TextInput53_i(),this._TextInput54_i(),this._TextInput55_i(),this._TextInput56_i(),this._TextInput57_i(),this._TextInput58_i(),this._TextInput59_i(),this._TextInput60_i(),this._TextInput61_i(),this._TextInput62_i(),this._TextInput63_i(),this._TextInput64_i(),this._TextInput65_i(),this._TextInput66_i(),this._TextInput67_i(),this._TextInput68_i(),this._TextInput69_i(),this._TextInput70_i(),this._TextInput71_i(),this._TextInput72_i(),this._TextInput73_i(),this._TextInput74_i(),this._TextInput75_i(),this._TextInput76_i(),this._TextInput77_i(),this._TextInput78_i(),this._TextInput79_i(),this._TextInput80_i(),this._TextInput81_i()];
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.text = "1";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._TextInput2_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto._TextInput3_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._TextInput4_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 180;
		t.y = 0;
		return t;
	};
	_proto._TextInput5_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 240;
		t.y = 0;
		return t;
	};
	_proto._TextInput6_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto._TextInput7_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto._TextInput8_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto._TextInput9_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.text = "3";
		t.width = 60;
		t.x = 120;
		t.y = 60;
		return t;
	};
	_proto._TextInput10_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 180;
		t.y = 60;
		return t;
	};
	_proto._TextInput11_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 240;
		t.y = 60;
		return t;
	};
	_proto._TextInput12_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.text = "8";
		t.width = 60;
		t.x = 300;
		t.y = 60;
		return t;
	};
	_proto._TextInput13_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._TextInput14_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 60;
		t.y = 120;
		return t;
	};
	_proto._TextInput15_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 120;
		t.y = 120;
		return t;
	};
	_proto._TextInput16_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 180;
		t.y = 120;
		return t;
	};
	_proto._TextInput17_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.text = "4";
		t.width = 60;
		t.x = 240;
		t.y = 120;
		return t;
	};
	_proto._TextInput18_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 300;
		t.y = 120;
		return t;
	};
	_proto._TextInput19_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto._TextInput20_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 420;
		t.y = 0;
		return t;
	};
	_proto._TextInput21_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 480;
		t.y = 0;
		return t;
	};
	_proto._TextInput22_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 360;
		t.y = 60;
		return t;
	};
	_proto._TextInput23_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 420;
		t.y = 60;
		return t;
	};
	_proto._TextInput24_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 480;
		t.y = 60;
		return t;
	};
	_proto._TextInput25_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 360;
		t.y = 120;
		return t;
	};
	_proto._TextInput26_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 420;
		t.y = 120;
		return t;
	};
	_proto._TextInput27_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 480;
		t.y = 120;
		return t;
	};
	_proto._TextInput28_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 0;
		t.y = 180;
		return t;
	};
	_proto._TextInput29_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 60;
		t.y = 180;
		return t;
	};
	_proto._TextInput30_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 120;
		t.y = 180;
		return t;
	};
	_proto._TextInput31_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 180;
		t.y = 180;
		return t;
	};
	_proto._TextInput32_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 240;
		t.y = 180;
		return t;
	};
	_proto._TextInput33_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 300;
		t.y = 180;
		return t;
	};
	_proto._TextInput34_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 0;
		t.y = 240;
		return t;
	};
	_proto._TextInput35_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 60;
		t.y = 240;
		return t;
	};
	_proto._TextInput36_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 120;
		t.y = 240;
		return t;
	};
	_proto._TextInput37_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.text = "5";
		t.width = 60;
		t.x = 180;
		t.y = 240;
		return t;
	};
	_proto._TextInput38_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 240;
		t.y = 240;
		return t;
	};
	_proto._TextInput39_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 300;
		t.y = 240;
		return t;
	};
	_proto._TextInput40_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 0;
		t.y = 300;
		return t;
	};
	_proto._TextInput41_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 60;
		t.y = 300;
		return t;
	};
	_proto._TextInput42_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 120;
		t.y = 300;
		return t;
	};
	_proto._TextInput43_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 180;
		t.y = 300;
		return t;
	};
	_proto._TextInput44_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 240;
		t.y = 300;
		return t;
	};
	_proto._TextInput45_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 300;
		t.y = 300;
		return t;
	};
	_proto._TextInput46_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 360;
		t.y = 180;
		return t;
	};
	_proto._TextInput47_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.text = "9";
		t.width = 60;
		t.x = 420;
		t.y = 180;
		return t;
	};
	_proto._TextInput48_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 480;
		t.y = 180;
		return t;
	};
	_proto._TextInput49_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 360;
		t.y = 240;
		return t;
	};
	_proto._TextInput50_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 420;
		t.y = 240;
		return t;
	};
	_proto._TextInput51_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 480;
		t.y = 240;
		return t;
	};
	_proto._TextInput52_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 360;
		t.y = 300;
		return t;
	};
	_proto._TextInput53_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 420;
		t.y = 300;
		return t;
	};
	_proto._TextInput54_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 480;
		t.y = 300;
		return t;
	};
	_proto._TextInput55_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 0;
		t.y = 360;
		return t;
	};
	_proto._TextInput56_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 60;
		t.y = 360;
		return t;
	};
	_proto._TextInput57_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 120;
		t.y = 360;
		return t;
	};
	_proto._TextInput58_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 180;
		t.y = 360;
		return t;
	};
	_proto._TextInput59_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 240;
		t.y = 360;
		return t;
	};
	_proto._TextInput60_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 300;
		t.y = 360;
		return t;
	};
	_proto._TextInput61_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 0;
		t.y = 420;
		return t;
	};
	_proto._TextInput62_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 60;
		t.y = 420;
		return t;
	};
	_proto._TextInput63_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.text = "1";
		t.width = 60;
		t.x = 120;
		t.y = 420;
		return t;
	};
	_proto._TextInput64_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 180;
		t.y = 420;
		return t;
	};
	_proto._TextInput65_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 240;
		t.y = 420;
		return t;
	};
	_proto._TextInput66_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 300;
		t.y = 420;
		return t;
	};
	_proto._TextInput67_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 0;
		t.y = 480;
		return t;
	};
	_proto._TextInput68_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 60;
		t.y = 480;
		return t;
	};
	_proto._TextInput69_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 120;
		t.y = 480;
		return t;
	};
	_proto._TextInput70_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 180;
		t.y = 480;
		return t;
	};
	_proto._TextInput71_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 240;
		t.y = 480;
		return t;
	};
	_proto._TextInput72_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 300;
		t.y = 480;
		return t;
	};
	_proto._TextInput73_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 360;
		t.y = 360;
		return t;
	};
	_proto._TextInput74_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 420;
		t.y = 360;
		return t;
	};
	_proto._TextInput75_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 480;
		t.y = 360;
		return t;
	};
	_proto._TextInput76_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 360;
		t.y = 420;
		return t;
	};
	_proto._TextInput77_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 420;
		t.y = 420;
		return t;
	};
	_proto._TextInput78_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 480;
		t.y = 420;
		return t;
	};
	_proto._TextInput79_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 360;
		t.y = 480;
		return t;
	};
	_proto._TextInput80_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.text = "2";
		t.width = 60;
		t.x = 420;
		t.y = 480;
		return t;
	};
	_proto._TextInput81_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.maxChars = 1;
		t.width = 60;
		t.x = 480;
		t.y = 480;
		return t;
	};
=======
	}
	var _proto = game_test1Skin.prototype;

>>>>>>> 138220c1c0217d87c3a7a4b37e7b579d02fe7021
	return game_test1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/StartscenseSkin.exml'] = window.StartscenseSkin = (function (_super) {
	__extends(StartscenseSkin, _super);
	function StartscenseSkin() {
		_super.call(this);
		this.skinParts = ["Startscence","StartPlay"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.Startscence_i(),this.StartPlay_i()];
	}
	var _proto = StartscenseSkin.prototype;

	_proto.Startscence_i = function () {
		var t = new eui.Image();
		this.Startscence = t;
		t.bottom = 0;
		t.fillMode = "scale";
		t.left = 0;
		t.right = 0;
		t.source = "resource/assets/001.jpg";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.StartPlay_i = function () {
		var t = new eui.Button();
		this.StartPlay = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 40;
		t.enable = true;
		t.height = 80;
		t.label = "Start";
		t.width = 240;
		t.x = 320;
		t.y = 500;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/table_testSkin.exml'] = window.table_testSkin = (function (_super) {
	__extends(table_testSkin, _super);
	function table_testSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
		this.x = 0;
		this.elementsContent = [this._TextInput1_i(),this._TextInput2_i(),this._TextInput3_i(),this._TextInput4_i(),this._TextInput5_i(),this._TextInput6_i(),this._TextInput7_i(),this._TextInput8_i(),this._TextInput9_i(),this._TextInput10_i(),this._TextInput11_i(),this._TextInput12_i(),this._TextInput13_i(),this._TextInput14_i(),this._TextInput15_i(),this._TextInput16_i(),this._TextInput17_i(),this._TextInput18_i(),this._TextInput19_i(),this._TextInput20_i(),this._TextInput21_i(),this._TextInput22_i(),this._TextInput23_i(),this._TextInput24_i(),this._TextInput25_i(),this._TextInput26_i(),this._TextInput27_i(),this._TextInput28_i(),this._TextInput29_i(),this._TextInput30_i(),this._TextInput31_i(),this._TextInput32_i(),this._TextInput33_i(),this._TextInput34_i(),this._TextInput35_i(),this._TextInput36_i(),this._TextInput37_i(),this._TextInput38_i(),this._TextInput39_i(),this._TextInput40_i(),this._TextInput41_i(),this._TextInput42_i(),this._TextInput43_i(),this._TextInput44_i(),this._TextInput45_i(),this._TextInput46_i(),this._TextInput47_i(),this._TextInput48_i(),this._TextInput49_i(),this._TextInput50_i(),this._TextInput51_i(),this._TextInput52_i(),this._TextInput53_i(),this._TextInput54_i(),this._TextInput55_i(),this._TextInput56_i(),this._TextInput57_i(),this._TextInput58_i(),this._TextInput59_i(),this._TextInput60_i(),this._TextInput61_i(),this._TextInput62_i(),this._TextInput63_i(),this._TextInput64_i(),this._TextInput65_i(),this._TextInput66_i(),this._TextInput67_i(),this._TextInput68_i(),this._TextInput69_i(),this._TextInput70_i(),this._TextInput71_i(),this._TextInput72_i(),this._TextInput73_i(),this._TextInput74_i(),this._TextInput75_i(),this._TextInput76_i(),this._TextInput77_i(),this._TextInput78_i(),this._TextInput79_i(),this._TextInput80_i(),this._TextInput81_i()];
	}
	var _proto = table_testSkin.prototype;

	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.skinName = "e:\SoftwareEngineeringPractice\software-engineering-project\src\1037suduko\resource\eui_skins\myskin\table_testSkin.exml";
		t.text = "1";
		t.width = 60;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._TextInput2_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 110;
		t.y = 50;
		return t;
	};
	_proto._TextInput3_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 170;
		t.y = 50;
		return t;
	};
	_proto._TextInput4_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 230;
		t.y = 50;
		return t;
	};
	_proto._TextInput5_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 290;
		t.y = 50;
		return t;
	};
	_proto._TextInput6_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 350;
		t.y = 50;
		return t;
	};
	_proto._TextInput7_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 50;
		t.y = 110;
		return t;
	};
	_proto._TextInput8_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 110;
		t.y = 110;
		return t;
	};
	_proto._TextInput9_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 170;
		t.y = 110;
		return t;
	};
	_proto._TextInput10_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 230;
		t.y = 110;
		return t;
	};
	_proto._TextInput11_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 290;
		t.y = 110;
		return t;
	};
	_proto._TextInput12_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 350;
		t.y = 110;
		return t;
	};
	_proto._TextInput13_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 50;
		t.y = 170;
		return t;
	};
	_proto._TextInput14_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 110;
		t.y = 170;
		return t;
	};
	_proto._TextInput15_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 170;
		t.y = 170;
		return t;
	};
	_proto._TextInput16_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 230;
		t.y = 170;
		return t;
	};
	_proto._TextInput17_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 290;
		t.y = 170;
		return t;
	};
	_proto._TextInput18_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 350;
		t.y = 170;
		return t;
	};
	_proto._TextInput19_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 410;
		t.y = 50;
		return t;
	};
	_proto._TextInput20_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 470;
		t.y = 50;
		return t;
	};
	_proto._TextInput21_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 530;
		t.y = 50;
		return t;
	};
	_proto._TextInput22_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 410;
		t.y = 110;
		return t;
	};
	_proto._TextInput23_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 470;
		t.y = 110;
		return t;
	};
	_proto._TextInput24_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 530;
		t.y = 110;
		return t;
	};
	_proto._TextInput25_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 410;
		t.y = 170;
		return t;
	};
	_proto._TextInput26_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 470;
		t.y = 170;
		return t;
	};
	_proto._TextInput27_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 530;
		t.y = 170;
		return t;
	};
	_proto._TextInput28_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 50;
		t.y = 230;
		return t;
	};
	_proto._TextInput29_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 110;
		t.y = 230;
		return t;
	};
	_proto._TextInput30_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 170;
		t.y = 230;
		return t;
	};
	_proto._TextInput31_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 230;
		t.y = 230;
		return t;
	};
	_proto._TextInput32_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 290;
		t.y = 230;
		return t;
	};
	_proto._TextInput33_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 350;
		t.y = 230;
		return t;
	};
	_proto._TextInput34_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 50;
		t.y = 290;
		return t;
	};
	_proto._TextInput35_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 110;
		t.y = 290;
		return t;
	};
	_proto._TextInput36_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 170;
		t.y = 290;
		return t;
	};
	_proto._TextInput37_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 230;
		t.y = 290;
		return t;
	};
	_proto._TextInput38_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 290;
		t.y = 290;
		return t;
	};
	_proto._TextInput39_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 350;
		t.y = 290;
		return t;
	};
	_proto._TextInput40_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 50;
		t.y = 350;
		return t;
	};
	_proto._TextInput41_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 110;
		t.y = 350;
		return t;
	};
	_proto._TextInput42_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 170;
		t.y = 350;
		return t;
	};
	_proto._TextInput43_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 230;
		t.y = 350;
		return t;
	};
	_proto._TextInput44_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 290;
		t.y = 350;
		return t;
	};
	_proto._TextInput45_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 350;
		t.y = 350;
		return t;
	};
	_proto._TextInput46_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 410;
		t.y = 230;
		return t;
	};
	_proto._TextInput47_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 470;
		t.y = 230;
		return t;
	};
	_proto._TextInput48_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 530;
		t.y = 230;
		return t;
	};
	_proto._TextInput49_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 410;
		t.y = 290;
		return t;
	};
	_proto._TextInput50_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 470;
		t.y = 290;
		return t;
	};
	_proto._TextInput51_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 530;
		t.y = 290;
		return t;
	};
	_proto._TextInput52_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 410;
		t.y = 350;
		return t;
	};
	_proto._TextInput53_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 470;
		t.y = 350;
		return t;
	};
	_proto._TextInput54_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 530;
		t.y = 350;
		return t;
	};
	_proto._TextInput55_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 50;
		t.y = 410;
		return t;
	};
	_proto._TextInput56_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 110;
		t.y = 410;
		return t;
	};
	_proto._TextInput57_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 170;
		t.y = 410;
		return t;
	};
	_proto._TextInput58_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 230;
		t.y = 410;
		return t;
	};
	_proto._TextInput59_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 290;
		t.y = 410;
		return t;
	};
	_proto._TextInput60_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 350;
		t.y = 410;
		return t;
	};
	_proto._TextInput61_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 50;
		t.y = 470;
		return t;
	};
	_proto._TextInput62_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 110;
		t.y = 470;
		return t;
	};
	_proto._TextInput63_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 170;
		t.y = 470;
		return t;
	};
	_proto._TextInput64_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 230;
		t.y = 470;
		return t;
	};
	_proto._TextInput65_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 290;
		t.y = 470;
		return t;
	};
	_proto._TextInput66_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 350;
		t.y = 470;
		return t;
	};
	_proto._TextInput67_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 50;
		t.y = 530;
		return t;
	};
	_proto._TextInput68_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 110;
		t.y = 530;
		return t;
	};
	_proto._TextInput69_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 170;
		t.y = 530;
		return t;
	};
	_proto._TextInput70_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 230;
		t.y = 530;
		return t;
	};
	_proto._TextInput71_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 290;
		t.y = 530;
		return t;
	};
	_proto._TextInput72_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 350;
		t.y = 530;
		return t;
	};
	_proto._TextInput73_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 410;
		t.y = 410;
		return t;
	};
	_proto._TextInput74_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 470;
		t.y = 410;
		return t;
	};
	_proto._TextInput75_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 530;
		t.y = 410;
		return t;
	};
	_proto._TextInput76_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 410;
		t.y = 470;
		return t;
	};
	_proto._TextInput77_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 470;
		t.y = 470;
		return t;
	};
	_proto._TextInput78_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 530;
		t.y = 470;
		return t;
	};
	_proto._TextInput79_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 410;
		t.y = 530;
		return t;
	};
	_proto._TextInput80_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 470;
		t.y = 530;
		return t;
	};
	_proto._TextInput81_i = function () {
		var t = new eui.TextInput();
		t.alpha = 0.5;
		t.height = 60;
		t.width = 60;
		t.x = 530;
		t.y = 530;
		return t;
	};
	return table_testSkin;
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