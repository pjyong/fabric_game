;var PJY = {
};

(function(PJY){
    var canvas;
    var eles = [];
    var mySwiper;

    // 是否使用人物细节选择弹出框
    var useDetailsPopup = false;
    eles[0] = [
        {
            src: 'images/decorate/1.png'
        },
        {
            src: 'images/decorate/2.png'
        },
        {
            src: 'images/decorate/3.png'
        },
        {
            src: 'images/decorate/4.png'
        },
        {
            src: 'images/decorate/5.png'
        },
        {
            src: 'images/decorate/6.png'
        },
        {
            src: 'images/decorate/7.png'
        },
        {
            src: 'images/decorate/8.png'
        },
        {
            src: 'images/decorate/9.png'
        }
    ];
    eles[1] = [
        {
            src: 'images/man.png',
            canvasSrc: 'images/man_base.png',
            cate: 3,
            details:[
                {
                    title: '头发',
                    cate: 0,
                    list: [
                        {
                            src: 'images/man/hairs/11.png',
                            canvasSrc: 'images/man/hairs/1.png',
                        },
                        {
                            src: 'images/man/hairs/22.png',
                            canvasSrc: 'images/man/hairs/2.png',
                        },
                        {
                            src: 'images/man/hairs/33.png',
                            canvasSrc: 'images/man/hairs/3.png',
                        },
                        {
                            src: 'images/man/hairs/44.png',
                            canvasSrc: 'images/man/hairs/4.png',
                        },
                        {
                            src: 'images/man/hairs/55.png',
                            canvasSrc: 'images/man/hairs/5.png',
                        },
                        {
                            src: 'images/man/hairs/66.png',
                            canvasSrc: 'images/man/hairs/6.png',
                        },
                        {
                            src: 'images/man/hairs/77.png',
                            canvasSrc: 'images/man/hairs/7.png',
                        },
                        {
                            src: 'images/man/hairs/88.png',
                            canvasSrc: 'images/man/hairs/8.png',
                        },
                        {
                            src: 'images/man/hairs/99.png',
                            canvasSrc: 'images/man/hairs/9.png',
                        },
                    ]
                },
                {
                    title: '眼镜',
                    cate: 1,
                    list: [
                        {
                            src: 'images/man/glass/11.png',
                            canvasSrc: 'images/man/glass/1.png',
                        },
                        {
                            src: 'images/man/glass/22.png',
                            canvasSrc: 'images/man/glass/2.png',
                        },
                        {
                            src: 'images/man/glass/33.png',
                            canvasSrc: 'images/man/glass/3.png',
                        },
                        {
                            src: 'images/man/glass/44.png',
                            canvasSrc: 'images/man/glass/4.png',
                        },
                        {
                            src: 'images/man/glass/55.png',
                            canvasSrc: 'images/man/glass/5.png',
                        },
                        {
                            src: 'images/man/glass/66.png',
                            canvasSrc: 'images/man/glass/6.png',
                        },
                        {
                            src: 'images/man/glass/77.png',
                            canvasSrc: 'images/man/glass/7.png',
                        },
                        {
                            src: 'images/man/glass/88.png',
                            canvasSrc: 'images/man/glass/8.png',
                        },
                        {
                            src: 'images/man/glass/99.png',
                            canvasSrc: 'images/man/glass/9.png',
                        },

                    ]
                },
                {
                    title: '胡子',
                    cate: 2,
                    list: [
                        {
                            src: 'images/man/huzi/11.png',
                            canvasSrc: 'images/man/huzi/1.png',
                        },
                        {
                            src: 'images/man/huzi/22.png',
                            canvasSrc: 'images/man/huzi/2.png',
                        },
                        {
                            src: 'images/man/huzi/33.png',
                            canvasSrc: 'images/man/huzi/3.png',
                        },
                        {
                            src: 'images/man/huzi/44.png',
                            canvasSrc: 'images/man/huzi/4.png',
                        },
                        {
                            src: 'images/man/huzi/55.png',
                            canvasSrc: 'images/man/huzi/5.png',
                        },
                        {
                            src: 'images/man/huzi/66.png',
                            canvasSrc: 'images/man/huzi/6.png',
                        },
                        {
                            src: 'images/man/huzi/77.png',
                            canvasSrc: 'images/man/huzi/7.png',
                        },
                        {
                            src: 'images/man/huzi/88.png',
                            canvasSrc: 'images/man/huzi/8.png',
                        },
                        {
                            src: 'images/man/huzi/99.png',
                            canvasSrc: 'images/man/huzi/9.png',
                        },
                    ]
                },
                {
                    title: '衣服',
                    cate: 4,
                    list: [
                        {
                            src: 'images/man/cloth/11.png',
                            canvasSrc: 'images/man/cloth/1.png',
                        },
                        {
                            src: 'images/man/cloth/22.png',
                            canvasSrc: 'images/man/cloth/2.png',
                        },
                        {
                            src: 'images/man/cloth/33.png',
                            canvasSrc: 'images/man/cloth/3.png',
                        },
                        {
                            src: 'images/man/cloth/44.png',
                            canvasSrc: 'images/man/cloth/4.png',
                        },
                        {
                            src: 'images/man/cloth/55.png',
                            canvasSrc: 'images/man/cloth/5.png',
                        },
                        {
                            src: 'images/man/cloth/66.png',
                            canvasSrc: 'images/man/cloth/6.png',
                        },
                    ]
                },
                {
                    title: '裤子',
                    cate: 5,
                    list: [
                        {
                            src: 'images/man/kuzi/11.png',
                            canvasSrc: 'images/man/kuzi/1.png',
                        },
                        {
                            src: 'images/man/kuzi/22.png',
                            canvasSrc: 'images/man/kuzi/2.png',
                        },
                        {
                            src: 'images/man/kuzi/33.png',
                            canvasSrc: 'images/man/kuzi/3.png',
                        },
                        {
                            src: 'images/man/kuzi/44.png',
                            canvasSrc: 'images/man/kuzi/4.png',
                        },
                        {
                            src: 'images/man/kuzi/55.png',
                            canvasSrc: 'images/man/kuzi/5.png',
                        },
                        {
                            src: 'images/man/kuzi/66.png',
                            canvasSrc: 'images/man/kuzi/6.png',
                        },
                    ]
                },
            ]
        },
        {
            src: 'images/woman.png',
            canvasSrc: 'images/woman_base.png',
            cate: 3,
            details:[
                {
                    title: '头发',
                    cate: 0,
                    list: [
                        {
                            src: 'images/woman/hairs/11.png',
                            canvasSrc: 'images/woman/hairs/1.png',
                        },
                        {
                            src: 'images/woman/hairs/22.png',
                            canvasSrc: 'images/woman/hairs/2.png',
                        },
                        {
                            src: 'images/woman/hairs/33.png',
                            canvasSrc: 'images/woman/hairs/3.png',
                        },
                        {
                            src: 'images/woman/hairs/44.png',
                            canvasSrc: 'images/woman/hairs/4.png',
                        },
                        {
                            src: 'images/woman/hairs/55.png',
                            canvasSrc: 'images/woman/hairs/5.png',
                        },
                        {
                            src: 'images/woman/hairs/66.png',
                            canvasSrc: 'images/woman/hairs/6.png',
                        },
                        {
                            src: 'images/woman/hairs/77.png',
                            canvasSrc: 'images/woman/hairs/7.png',
                        },
                        {
                            src: 'images/woman/hairs/88.png',
                            canvasSrc: 'images/woman/hairs/8.png',
                        },
                        {
                            src: 'images/woman/hairs/99.png',
                            canvasSrc: 'images/woman/hairs/9.png',
                        },
                    ]
                },
                {
                    title: '眼镜',
                    cate: 1,
                    list: [
                        {
                            src: 'images/woman/glass/11.png',
                            canvasSrc: 'images/woman/glass/1.png',
                        },
                        {
                            src: 'images/woman/glass/22.png',
                            canvasSrc: 'images/woman/glass/2.png',
                        },
                        {
                            src: 'images/woman/glass/33.png',
                            canvasSrc: 'images/woman/glass/3.png',
                        },
                        {
                            src: 'images/woman/glass/44.png',
                            canvasSrc: 'images/woman/glass/4.png',
                        },
                        {
                            src: 'images/woman/glass/55.png',
                            canvasSrc: 'images/woman/glass/5.png',
                        },
                        {
                            src: 'images/woman/glass/66.png',
                            canvasSrc: 'images/woman/glass/6.png',
                        },
                        {
                            src: 'images/woman/glass/77.png',
                            canvasSrc: 'images/woman/glass/7.png',
                        },
                        {
                            src: 'images/woman/glass/88.png',
                            canvasSrc: 'images/woman/glass/8.png',
                        },
                        {
                            src: 'images/woman/glass/99.png',
                            canvasSrc: 'images/woman/glass/9.png',
                        },

                    ]
                },
                {
                    title: '口红',
                    cate: 2,
                    list: [
                        {
                            src: 'images/woman/kouhong/11.png',
                            canvasSrc: 'images/woman/kouhong/1.png',
                        },
                        {
                            src: 'images/woman/kouhong/22.png',
                            canvasSrc: 'images/woman/kouhong/2.png',
                        },
                        {
                            src: 'images/woman/kouhong/33.png',
                            canvasSrc: 'images/woman/kouhong/3.png',
                        },
                        {
                            src: 'images/woman/kouhong/44.png',
                            canvasSrc: 'images/woman/kouhong/4.png',
                        },
                        {
                            src: 'images/woman/kouhong/55.png',
                            canvasSrc: 'images/woman/kouhong/5.png',
                        },
                        {
                            src: 'images/woman/kouhong/66.png',
                            canvasSrc: 'images/woman/kouhong/6.png',
                        },
                        {
                            src: 'images/woman/kouhong/77.png',
                            canvasSrc: 'images/woman/kouhong/7.png',
                        },
                        {
                            src: 'images/woman/kouhong/88.png',
                            canvasSrc: 'images/woman/kouhong/8.png',
                        },
                        {
                            src: 'images/woman/kouhong/99.png',
                            canvasSrc: 'images/woman/kouhong/9.png',
                        },
                    ]
                },
                {
                    title: '衣服',
                    cate: 4,
                    list: [
                        {
                            src: 'images/woman/cloth/11.png',
                            canvasSrc: 'images/woman/cloth/1.png',
                        },
                        {
                            src: 'images/woman/cloth/22.png',
                            canvasSrc: 'images/woman/cloth/2.png',
                        },
                        {
                            src: 'images/woman/cloth/33.png',
                            canvasSrc: 'images/woman/cloth/3.png',
                        },
                        {
                            src: 'images/woman/cloth/44.png',
                            canvasSrc: 'images/woman/cloth/4.png',
                        },
                        {
                            src: 'images/woman/cloth/55.png',
                            canvasSrc: 'images/woman/cloth/5.png',
                        },
                        {
                            src: 'images/woman/cloth/66.png',
                            canvasSrc: 'images/woman/cloth/6.png',
                        },
                    ]
                },
                {
                    title: '裙子',
                    cate: 5,
                    list: [
                        {
                            src: 'images/woman/kuzi/11.png',
                            canvasSrc: 'images/woman/kuzi/1.png',
                        },
                        {
                            src: 'images/woman/kuzi/22.png',
                            canvasSrc: 'images/woman/kuzi/2.png',
                        },
                        {
                            src: 'images/woman/kuzi/33.png',
                            canvasSrc: 'images/woman/kuzi/3.png',
                        },
                        {
                            src: 'images/woman/kuzi/44.png',
                            canvasSrc: 'images/woman/kuzi/4.png',
                        },
                        {
                            src: 'images/woman/kuzi/55.png',
                            canvasSrc: 'images/woman/kuzi/5.png',
                        },
                        {
                            src: 'images/woman/kuzi/66.png',
                            canvasSrc: 'images/woman/kuzi/6.png',
                        },
                    ]
                },
            ]
        },
        {
            src: 'images/child.png',
            canvasSrc: 'images/child.png',
        },
        {
            src: 'images/child2.png',
            canvasSrc: 'images/child2.png',
        },
    ];
    eles[2] = [
        {
            src: 'images/cat/1.png'
        },
        {
            src: 'images/cat/2.png'
        },
        {
            src: 'images/cat/3.png'
        },
        {
            src: 'images/cat/4.png'
        },
        {
            src: 'images/cat/5.png'
        },
        {
            src: 'images/cat/6.png'
        },
        {
            src: 'images/cat/7.png'
        },
        {
            src: 'images/cat/8.png'
        },
        {
            src: 'images/cat/9.png'
        }
    ];
    eles[3] = [
        {
            src: 'images/dog/1.png'
        },
        {
            src: 'images/dog/2.png'
        },
        {
            src: 'images/dog/3.png'
        },
        {
            src: 'images/dog/4.png'
        },
        {
            src: 'images/dog/5.png'
        },
        {
            src: 'images/dog/6.png'
        },
        {
            src: 'images/dog/7.png'
        },
        {
            src: 'images/dog/8.png'
        },
        {
            src: 'images/dog/9.png'
        }
    ];
    eles[4] = [
        {
            src: 'images/car/1.png'
        },
        {
            src: 'images/car/2.png'
        },
        {
            src: 'images/car/3.png'
        },
        {
            src: 'images/car/4.png'
        },
        {
            src: 'images/car/5.png'
        },
        {
            src: 'images/car/6.png'
        },
        {
            src: 'images/car/7.png'
        },
        {
            src: 'images/car/8.png'
        },
        {
            src: 'images/car/9.png'
        }
    ];

    var setCustomControl = function( obj ){
        obj.setOptions({
            'borderColor': 'white',
            'cornerSize': 20,
        });
        obj.setControlVisible( 'tl', false );
        obj.setControlVisible( 'bl', true );
        obj.setControlVisible( 'br', true );
        obj.setControlVisible( 'tr', true );
        obj.setControlVisible( 'ml', false );
        obj.setControlVisible( 'mtr', false );
        obj.setControlVisible( 'mb', false );
        obj.setControlVisible( 'mr', false );
        obj.setControlVisible( 'mt', false );
    };

    var getWindowSize = function(){
        var wWidth = $(window).width();
        var wHeight = $(window).height();

        return {
            width: wWidth,
            height: wHeight
        };
    };

    var getCanvas = function(){
        return canvas;
    };

    var getSwiper = function(){
        return mySwiper;
    };

    var init = function(options){
        var canvasObj = $('#'+options.id);
        var toolbarHeight = 40;
        var wWidth = $(window).width();
        var wHeight = $(window).height();
        canvasObj.attr('width', wWidth);
        canvasObj.attr('height', wHeight);
        var toolContentHeight = parseInt(wHeight*2/5) - toolbarHeight;
        $('#eleContainer .eleList').css('height', toolContentHeight);
        $('#eleContainer #eleDetailsPopup').css('height', toolContentHeight);
        canvas = new fabric.Canvas(options.id, {
            selection: false
        });
        // canvas.setBackgroundColor('#F7F7F7');
        canvas.on('mouse:down', function(opt){
            // 点击任何空白区域都打开第一个tab
            if(opt.target === null){
                slideTo(1);
            }else{
                // 点击删除按钮
                if(opt.target.__corner === 'bl'){
                    if(opt.target.type == 'group'){
                        for(var i in opt.target._objects){
                            canvas.remove(opt.target._objects[i]);
                        }
                        slideTo(1);
                    }
                    canvas.remove(opt.target);
                    return false;
                }
            }
        });

        // 加载工具栏里面的所有选项
        renderEles();

        $('#eleContainer .eleListItem').css('height', Math.ceil(toolContentHeight/3) + 10);
        $('#eleContainer .eleListItem').css('line-height', ( Math.ceil(toolContentHeight/3) + 10 ) + 'px');

        mySwiper = new Swiper('#swiperContainer', {
            loop: true,
            pagination: {
                el: '.ele-pagination',
                type: 'custom',
                clickable :true,
                clickableClass :'weui-navbar__item',
                renderCustom: function(swiper, current, total){
                    console.log(current);
                    return '<div onclick="PJY.slideTo(1, true)" class="weui-navbar__item '+
                        (current==1?'weui_bar__item_on':'')
                    +'"></div>'
                    +'<div onclick="PJY.slideTo(2, true)" class="weui-navbar__item '+
                        (current==2?'weui_bar__item_on':'')
                    +'"></div>'
                    +'<div onclick="PJY.slideTo(3, true)" class="weui-navbar__item '+
                        (current==3?'weui_bar__item_on':'')
                    +'"></div>'
                    +'<div onclick="PJY.slideTo(4, true)" class="weui-navbar__item '+
                        (current==4?'weui_bar__item_on':'')
                    +'"></div>'
                    +'<div onclick="PJY.slideTo(5, true)" class="weui-navbar__item '+
                        (current==5?'weui_bar__item_on':'')
                    +'"></div>'
                    +'<div onclick="PJY.toggleToolbox()" id="toggleToolboxBtn" class="weui-navbar__item"></div>';
                }
            },
        });

        $('.canvasBgSwitch').click(function(){
            fabric.Image.fromURL('images/bg'+$(this).data('index')+'.jpg', function(bgImage){
                if(bgImage == null){
                    alert('背景加载失败');
                    return;
                }
                var canvasWidth = canvas.width;
                var canvasHeight = canvas.height;
                var canvasAspect = canvasWidth / canvasHeight;
                var imgAspect = bgImage.width / bgImage.height;
                var left, top, scaleFactor;
                //
                if (canvasAspect >= imgAspect) {
                    var scaleFactor = canvasWidth / bgImage.width;
                    left = 0;
                    top = -((bgImage.height * scaleFactor) - canvasHeight) / 2;
                } else {
                    var scaleFactor = canvasHeight / bgImage.height;
                    top = 0;
                    left = -((bgImage.width * scaleFactor) - canvasWidth) / 2;
                }
                bgImage.set({
                    top: top,
                    left: left,
                    scaleX: scaleFactor,
                    scaleY: scaleFactor
                });
                canvas.setBackgroundImage(
                    bgImage,
                    canvas.renderAll.bind(canvas)
                );
            });
        });

        $('.canvasBgSwitch.switch_highway').trigger('click');
        $('.canvasSaveBtn').click(function(){
            canvas.discardActiveObject();
            canvas.forEachObject(function(o) {
                o.selectable = false;
            });
            canvas.renderAll();
            $('#swiperContainer').addClass('hide');
            $('.canvasBgSwitch').addClass('hide');
            $('.canvasSaveBtn').addClass('hide');
            $('#resultContainer').removeClass('hide');
            // console.log(JSON.stringify(canvas));
            // if(!canvas.supports('toDataURL')){
            //     alert('not support toDataURL');
            //     return;
            // }
            // console.log(
            //     canvas.toDataURL({
            //         format: 'png',
            //         multiplier: 2
            //     })
            // );
        });
    };

    var isSwiperWrapperClosed = function(){
        if( $('#swiperWrapper').css('display') == 'none' ){
            return true;
        }
        return false;
    };

    var syncStatusToDetailsPopup = function(){
        useDetailsPopup = true;
        if(isSwiperWrapperClosed()){
            $('#eleDetailsPopup').addClass('hide');
        }else{
            $('#eleDetailsPopup').removeClass('hide');
        }
    };

    var hideDetailsPopup = function(){
        $('#eleDetailsPopup').addClass('hide');
        useDetailsPopup = false;
    };

    var slideTo = function(index, fromEle){
        fromEle = (typeof fromEle == 'undefined')?false:true;
        hideDetailsPopup();
        mySwiper.slideTo(index);
        if(isSwiperWrapperClosed() && fromEle){
            toggleToolbox();
        }
    };

    var toggleToolbox = function(){
        $('#swiperWrapper').toggle();
        if(isSwiperWrapperClosed()){
            $('#toggleToolboxBtn').addClass('arrow_up');
        }else{
            $('#toggleToolboxBtn').removeClass('arrow_up');
        }
        if(useDetailsPopup){
            syncStatusToDetailsPopup();
        }
    };

    // 人物细节弹出框
    var renderEleWithDetails = function(x, y)
    {
        if(typeof eles[x][y]
            == 'undefined'){
            return;
        }
        var ele = eles[x][y];
        if(typeof ele.details == 'undefined'
        || ele.details.length == 0){ return; }
        var str = '';
        str += '<div class="ele_details_popup_inner">';
        // 左侧
        str += '<div class="popup_left">';
        for(var i in ele.details){
            var activeCls = i == 0 ? 'active' : '';
            str += '<div class="popup_nav popupNav '+activeCls+'" data-index="'+i+'">';
            str += ele.details[i]['title'];
            str += '</div>';
        }
        str += '</div>';
        // 右侧
        str += '<div class="popup_right">';
        for(var i in ele.details){
            var hideCls = i == 0?'':'hide';
            str += '<div class="popup_content popupContent '+hideCls+'">';
            var detailList = ele.details[i]['list'];
            if(detailList.length == 0){continue;}
            str += '<div class="weui-flex">';
            for(var j in detailList){
                str += '<div class="eleListItem ele_list_item weui-flex__item"';
                str += ' onclick="PJY.addDetailToCanvas('+i+','+j+')">'
                    +'<img src="'+detailList[j]['src']+'" /></div>';
                if((j+1)%3==0){
                    str += '</div><div class="weui-flex">';
                }
            }
            str += '</div>';
            str += '</div>';
        }
        str += '</div>';
        str += '</div>';
        $('#eleDetailsPopup').html(str);
        var maxHiehgt = $('#eleContainer .eleList').height();
        console.log(maxHiehgt);
        $('#eleContainer .eleListItem').css('height', Math.ceil(maxHiehgt/3) + 10);
        $('#eleContainer .eleListItem').css('line-height', ( Math.ceil(maxHiehgt/3) + 10 ) + 'px');
        syncStatusToDetailsPopup();
        $('.popupNav').click(function(){
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var chooseIndex = $(this).data('index');
            $('.popupContent').each(function(index){
                if(index == chooseIndex){
                    $(this).removeClass('hide');
                }else{
                    $(this).addClass('hide');
                }
            });
        });
        $('.popupNav').css('line-height', $('.popupNav').height() + 'px');
    }

    var hasDetails = function(ele){
        if(typeof ele['details'] != 'undefined'
            && ele['details'].length > 0 ){
            return true;
        }
        return false;
    };

    var renderEles = function(){
        $('.eleList').each(function(index){
            if(typeof eles[index] == 'undefined' || eles[index].length == 0){
                return;
            }
            $(this).html('');
            if(eles[index].length % 3 == 0){
                var rowColumns = 3;
            }else{
                var rowColumns = 2;
            }
            var str = '<div class="weui-flex">';
            for(var key in eles[index]){
                var hasDetailsCls = hasDetails(eles[index][key]) ? ' ele_has_details ' : '';
                str += '<div class="eleListItem '+hasDetailsCls+' ele_list_item weui-flex__item" onclick="PJY.addEleToCanvas('+index+','+key+')">'
                    +'<img src="'+eles[index][key]['src']+'" /></div>';
                key = parseInt(key);
                if((key+1)%rowColumns==0){
                    str += '</div><div class="weui-flex">';
                }
            }
            str += '</div>';
            $(this).append(str);
        });

    };

    var addEleToCanvas = function(x, y){
        var callback = function(opt){
            if(typeof opt.target.srcX == 'undefined'){
                return;
            }
            opt.target.bringToFront();
            slideTo(opt.target.srcX + 1);
            renderEleWithDetails(opt.target.srcX,opt.target.srcY);
        };
        canvas.on('selection:created', callback);
        canvas.on('selection:updated', callback);
        if(hasDetails(eles[x][y])){
            addGroupEles(x, y);
            return;
        }
        var loadImgSrc = typeof eles[x][y]['canvasSrc'] == 'undefined' ? eles[x][y]['src'] : eles[x][y]['canvasSrc'];
        fabric.util.loadImage(loadImgSrc, function(img){
            if(img == null){
                alert('素材加载失败');
                return;
            }
            // var windowSize = getWindowSize();
            var imgObj = new fabric.Image(img);
            imgObj.setOptions({
                left: 50,
                top: 50,
                srcX: x,
                srcY: y,
                originX: 'left',
                originY: 'top',
            });
            setCustomControl(imgObj);
            canvas.add( imgObj );
            canvas.setActiveObject(imgObj);
        });
    };

    // 添加图片，利用defer实现监控多个图片加载完成之后调用
    var returnImageDefer = function(loadImgSrc, options, imgObjArr){
        var defer = $.Deferred();
        var imgObj = new fabric.Image();
        imgObj.setSrc(
            loadImgSrc,
            function(obj){
                // canvas.add(obj);
                if(typeof imgObjArr !== 'undefined'
                    && typeof options.srcCate !== 'undefined'){
                    imgObjArr[options.srcCate] = obj;
                }
                defer.resolve();
            },
            options
        );
        return defer;
    };

    // 添加一组素材
    var addGroupEles = function(x, y)
    {
        var tmpEle = eles[x][y];
        var baseImgSrc = typeof tmpEle['canvasSrc'] == 'undefined' ? tmpEle['src'] : tmpEle['canvasSrc'];
        var imgObjArr = [{},{},{},{},{},{}];
        $.when(
            returnImageDefer(baseImgSrc, {
                srcCate: tmpEle['cate'],
                selectable: false,
            }, imgObjArr),
            returnImageDefer(tmpEle['details'][0]['list'][0]['canvasSrc'], {
                srcCate: tmpEle['details'][0]['cate'],
                selectable: false,
            }, imgObjArr),
            returnImageDefer(tmpEle['details'][1]['list'][0]['canvasSrc'], {
                srcCate: tmpEle['details'][1]['cate'],
                selectable: false,
            }, imgObjArr),
            returnImageDefer(tmpEle['details'][2]['list'][0]['canvasSrc'], {
                srcCate: tmpEle['details'][2]['cate'],
                selectable: false,
            }, imgObjArr),
            returnImageDefer(tmpEle['details'][3]['list'][0]['canvasSrc'], {
                srcCate: tmpEle['details'][3]['cate'],
                selectable: false,
            }, imgObjArr),
            returnImageDefer(tmpEle['details'][4]['list'][0]['canvasSrc'], {
                srcCate: tmpEle['details'][4]['cate'],
                selectable: false,
            }, imgObjArr),
        ).done(function(){
            // group里面的层级取决于add的先后顺序，先添加的在最下面
            var group = new fabric.Group(imgObjArr.reverse(), {
                scaleX: 0.5,
                scaleY: 0.5,
                left: 50,
                top: 50,
                srcX: x,
                srcY: y,
            });
            canvas.add(group);
            setCustomControl(group);
            canvas.setActiveObject(group);
        });
    };

    var addDetailToCanvas = function(x, y){
        var obj = canvas.getActiveObject();
        // 需要替换的位置，比如：眼镜/胡子等
        var zIndex = 0;
        var imgData = eles[obj.srcX][obj.srcY]['details'][x]['list'][y];
        var imgCate = eles[obj.srcX][obj.srcY]['details'][x]['cate'];
        var scaleX = obj.scaleX;
        var scaleY = obj.scaleY;
        var initAngle = obj.angle;
        var centerLeft = obj.left;
        var centerTop = obj.top;
        // 检查有没有同分类的元素，如果有就先删掉
        for(var i in obj._objects){
            var tmp = obj._objects[i];
            if(tmp['srcCate'] == imgCate){
                zIndex = obj.getObjects().indexOf(tmp);
                obj.remove(tmp);
                // canvas.remove(tmp);
            }
        }
        var objs = obj.getObjects();
        // 删除旧的group，下面再重新生成新的，因为group里面存在层级，只能通过新建解决
        canvas.remove(obj);
        var loadImgSrc = typeof imgData['canvasSrc'] == 'undefined' ? imgData['src'] : imgData['canvasSrc'];
        fabric.util.loadImage(loadImgSrc, function(img){
            if(img == null){
                alert('素材加载失败');
                return;
            }
            var imgObj = new fabric.Image(img);
            imgObj.setOptions({
                srcCate:imgCate,
                selectable: false,
            });
            // canvas.add(imgObj);
            objs.splice(zIndex, 0, imgObj);
            for(var haha in objs){
                objs[haha].set('left', 0);
                objs[haha].set('top', 0);
            }
            var group = new fabric.Group(objs, {
                srcX: obj.srcX,
                srcY: obj.srcY,
                scaleX: scaleX,
                scaleY: scaleY,
                angle: initAngle,
                left: centerLeft,
                top: centerTop
            });
            canvas.add(group);
            setCustomControl(group);
            canvas.setActiveObject(group);
        });
    };

    PJY.init = init;
    PJY.getCanvas = getCanvas;
    PJY.addEleToCanvas = addEleToCanvas;
    PJY.addDetailToCanvas = addDetailToCanvas;
    PJY.toggleToolbox = toggleToolbox;
    PJY.slideTo = slideTo;
})(PJY);
