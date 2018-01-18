// pages/protection/first/first.js
var qcloud = require('../../../vendor/wafer2-client-sdk/index');
var constants = require('../../../vendor/wafer2-client-sdk/lib/constants');
// 引入配置
var config = require('../../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    protection_listUrl: config.service.protection_listUrl,
    files: [],
    page: '',
    tittle: '第一次用药（种植后20天）',
    section_tittle: '预防蚜虫、小地老虎、青虫等发生。',
    section_1_h: '蚜虫：',
    section_1: '蚜虫对马铃薯危害有两种情况，一种是直接危害。蚜虫群在叶子背面和幼嫩的顶部取食，刺伤叶片吸取汁液，同时排泄出一种粘物，堵塞气孔，使叶片皱缩变形，幼嫩部分生长受到妨碍，直接影响产量。 第二是种取食过程中，把病毒传染给健康植株，引起病毒病造成退化现象，还会使病毒在田间扩散，使更多植株发生退化。',
    section_1_image_1: config.service.host + '/images/zhibao_process/yachong_1.png',
    section_1_image_2: config.service.host + '/images/zhibao_process/yachong_2.jpg',
    section_2: '地老虎，以幼虫危害性大。成虫是一种夜蛾，分小地老虎和黄地老虎等多种。 地老虎主要危害马铃薯等作物的幼苗，在贴近地面的地方把幼苗咬断，使整棵苗子死掉。幼虫低龄时，也咬食嫩叶，使叶片出现孔洞；它也会在地下咬食块茎。',
    section_2_h: '地老虎',
    section_2_image_1: config.service.host + '/images/zhibao_process/dilaohu_1.jpg',
    section_2_image_2: config.service.host + '/images/zhibao_process/dilaohu_2.png',
    section_3: '',
    section_3_image_1: '',
    section_3_image_2: '',
    section_1_image_1_id: 1,
    section_1_image_2_id: 2,
    section_2_image_1_id: 3,
    section_2_image_2_id: 4,
    section_3_image_1_id: 5,
    section_3_image_2_id: 6,
    table_image_id: 0,
    table: config.service.host + '/images/zhibao_process/first_table.png',
    sumwarter: 100,
    arryData: '',
    countryCodes: ["亩数", "水量"],
    countryCodeIndex: 0,
    placeholder:'请输入亩数',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = options.page;
    var that = this;
    if (page == 1) {
      this.setData({
        page: options.page,
        tittle: '第一次用药（种植后20天）',
        section_tittle: '预防蚜虫、小地老虎、青虫等发生。',
        section_1_h: '蚜虫：',
        section_1: '蚜虫对马铃薯危害有两种情况，一种是直接危害。蚜虫群在叶子背面和幼嫩的顶部取食，刺伤叶片吸取汁液，同时排泄出一种粘物，堵塞气孔，使叶片皱缩变形，幼嫩部分生长受到妨碍，直接影响产量。 第二是种取食过程中，把病毒传染给健康植株，引起病毒病造成退化现象，还会使病毒在田间扩散，使更多植株发生退化。',
        section_1_image_1: config.service.host + '/images/zhibao_process/yachong_1.png',
        section_1_image_2: config.service.host + '/images/zhibao_process/yachong_2.jpg',
        section_2: '地老虎，以幼虫危害性大。成虫是一种夜蛾，分小地老虎和黄地老虎等多种。 地老虎主要危害马铃薯等作物的幼苗，在贴近地面的地方把幼苗咬断，使整棵苗子死掉。幼虫低龄时，也咬食嫩叶，使叶片出现孔洞；它也会在地下咬食块茎。',
        section_2_h: '地老虎',
        section_2_image_1: config.service.host + '/images/zhibao_process/dilaohu_1.jpg',
        section_2_image_2: config.service.host + '/images/zhibao_process/dilaohu_2.png',
        section_3: '',
        section_3_image_1: '',
        section_3_image_2: '',
        section_3_image_1_id: 5,
        section_3_image_2_id: 6,
        table: config.service.host + '/images/zhibao_process/first_table.png',
        files: [config.service.host + '/images/zhibao_process/first_table.png', config.service.host + '/images/zhibao_process/yachong_1.png', config.service.host + '/images/zhibao_process/yachong_2.jpg', config.service.host + '/images/zhibao_process/dilaohu_1.jpg', config.service.host + '/images/zhibao_process/dilaohu_2.png']
      });
      that.requestProtection(1, 1, 0);
    };
    if (page == 2) {
      this.setData({
        page: options.page,
        tittle: '第二次用药（种植后30天）',
        section_tittle: '预防早晚疫病、青虫、蚜虫等发生。',
        section_1_h: '早疫病：',
        section_1: '症状：典型症状是在叶面发生褐色或黑色带有同心轮纹的病斑。空气潮湿时，病斑表面可形成黑褐色霉层。其最大危害是叶丛受害干枯，严重者全株枯死，大幅度降低产量。 发病条件、传染途径：病菌可存在于作物残株、被侵染的块茎里或其他茄科植物上。真菌通过表皮直接侵入叶片。初侵染发生在老叶片上。发病在6-25℃最适宜。 一般在湿润和干燥天气交替期间，该病害发展最迅速。',
        section_1_image_1: config.service.host + '/images/zhibao_process/zaoyi_1.png',
        section_1_image_2: config.service.host + '/images/zhibao_process/zaoyi_2.jpg',
        section_2: '症状： 在叶片上出现的病斑像被开水浸过，几天内叶片坏死，干燥时变成褐色，潮湿时变成黑色。在阴湿条件下，叶背面可看到白霉似的孢子襄枝。通常在叶片病斑的周围形成淡黄色的退绿边缘。茎上病斑很脆弱，茎秆经常从病斑处折断，有时带病斑的茎秆可能发生萎蔫。发病条件、传染途径：最适温度是10-25℃，相对湿度75%，连续数天，有较大露水或降雨。通常在连续降雨或降雨后连续阴天，晚疫病最容易发生。借气流传播进行再侵染，形成发病中心。',
        section_2_h: '晚疫病：',
        section_2_image_1: config.service.host + '/images/zhibao_process/wanyi_1.png',
        section_2_image_2: config.service.host + '/images/zhibao_process/wanyi_2.jpg',
        section_3: '蚜虫对马铃薯危害有两种情况，一种是直接危害。蚜虫群在叶子背面和幼嫩的顶部取食，刺伤叶片吸取汁液，同时排泄出一种粘物，堵塞气孔，使叶片皱缩变形，幼嫩部分生长受到妨碍，直接影响产量。 第二是种取食过程中，把病毒传染给健康植株，引起病毒病造成退化现象，还会使病毒在田间扩散，使更多植株发生退化。',
        section_3_h: '蚜虫：',
        section_3_image_1: config.service.host + '/images/zhibao_process/yachong_1.png',
        section_3_image_2: config.service.host + '/images/zhibao_process/yachong_2.jpg',
        table: config.service.host + '/images/zhibao_process/second_table.png',
        files: [config.service.host + '/images/zhibao_process/second_table.png', config.service.host + '/images/zhibao_process/zaoyi_1.png', config.service.host + '/images/zhibao_process/zaoyi_2.jpg', config.service.host + '/images/zhibao_process/wanyi_1.png', config.service.host + '/images/zhibao_process/wanyi_2.jpg', config.service.host + '/images/zhibao_process/yachong_1.png', config.service.host + '/images/zhibao_process/yachong_2.jpg']
      });
      that.requestProtection(2, 1, 0);
    };//end page=2//
    if (page == 3) {
      this.setData({
        page: options.page,
        tittle: '第三次用药（种植后40天）',
        section_tittle: '预防早晚疫病、蚜虫的发生，控苗。',
        section_1_h: '早疫病：',
        section_1: '症状：典型症状是在叶面发生褐色或黑色带有同心轮纹的病斑。空气潮湿时，病斑表面可形成黑褐色霉层。其最大危害是叶丛受害干枯，严重者全株枯死，大幅度降低产量。 发病条件、传染途径：病菌可存在于作物残株、被侵染的块茎里或其他茄科植物上。真菌通过表皮直接侵入叶片。初侵染发生在老叶片上。发病在6-25℃最适宜。 一般在湿润和干燥天气交替期间，该病害发展最迅速。',
        section_1_image_1: config.service.host + '/images/zhibao_process/zaoyi_1.png',
        section_1_image_2: config.service.host + '/images/zhibao_process/zaoyi_2.jpg',
        section_2: '症状： 在叶片上出现的病斑像被开水浸过，几天内叶片坏死，干燥时变成褐色，潮湿时变成黑色。在阴湿条件下，叶背面可看到白霉似的孢子襄枝。通常在叶片病斑的周围形成淡黄色的退绿边缘。茎上病斑很脆弱，茎秆经常从病斑处折断，有时带病斑的茎秆可能发生萎蔫。发病条件、传染途径：最适温度是10-25℃，相对湿度75%，连续数天，有较大露水或降雨。通常在连续降雨或降雨后连续阴天，晚疫病最容易发生。借气流传播进行再侵染，形成发病中心。',
        section_2_h: '晚疫病：',
        section_2_image_1: config.service.host + '/images/zhibao_process/wanyi_1.png',
        section_2_image_2: config.service.host + '/images/zhibao_process/wanyi_2.jpg',
        section_3: '蚜虫对马铃薯危害有两种情况，一种是直接危害。蚜虫群在叶子背面和幼嫩的顶部取食，刺伤叶片吸取汁液，同时排泄出一种粘物，堵塞气孔，使叶片皱缩变形，幼嫩部分生长受到妨碍，直接影响产量。 第二是种取食过程中，把病毒传染给健康植株，引起病毒病造成退化现象，还会使病毒在田间扩散，使更多植株发生退化。',
        section_3_h: '蚜虫：',
        section_3_image_1: config.service.host + '/images/zhibao_process/yachong_1.png',
        section_3_image_2: config.service.host + '/images/zhibao_process/yachong_2.jpg',
        table: config.service.host + '/images/zhibao_process/third_table.png',
        files: [config.service.host + '/images/zhibao_process/third_table.png', config.service.host + '/images/zhibao_process/zaoyi_1.png', config.service.host + '/images/zhibao_process/zaoyi_2.jpg', config.service.host + '/images/zhibao_process/wanyi_1.png', config.service.host + '/images/zhibao_process/wanyi_2.jpg', config.service.host + '/images/zhibao_process/yachong_1.png', config.service.host + '/images/zhibao_process/yachong_2.jpg']
      });
      that.requestProtection(3, 1, 0);
    };//end page=3//
    if (page == 4) {
      this.setData({
        page: options.page,
        tittle: '第四次用药（种植后50天）',
        section_tittle: '预防细菌性病害、早晚疫病、蚜虫和进行控苗。',
        section_1_h: '早疫病：',
        section_1: '症状：典型症状是在叶面发生褐色或黑色带有同心轮纹的病斑。空气潮湿时，病斑表面可形成黑褐色霉层。其最大危害是叶丛受害干枯，严重者全株枯死，大幅度降低产量。 发病条件、传染途径：病菌可存在于作物残株、被侵染的块茎里或其他茄科植物上。真菌通过表皮直接侵入叶片。初侵染发生在老叶片上。发病在6-25℃最适宜。 一般在湿润和干燥天气交替期间，该病害发展最迅速。',
        section_1_image_1: config.service.host + '/images/zhibao_process/zaoyi_1.png',
        section_1_image_2: config.service.host + '/images/zhibao_process/zaoyi_2.jpg',
        section_2: '症状： 在叶片上出现的病斑像被开水浸过，几天内叶片坏死，干燥时变成褐色，潮湿时变成黑色。在阴湿条件下，叶背面可看到白霉似的孢子襄枝。通常在叶片病斑的周围形成淡黄色的退绿边缘。茎上病斑很脆弱，茎秆经常从病斑处折断，有时带病斑的茎秆可能发生萎蔫。发病条件、传染途径：最适温度是10-25℃，相对湿度75%，连续数天，有较大露水或降雨。通常在连续降雨或降雨后连续阴天，晚疫病最容易发生。借气流传播进行再侵染，形成发病中心。',
        section_2_h: '晚疫病：',
        section_2_image_1: config.service.host + '/images/zhibao_process/wanyi_1.png',
        section_2_image_2: config.service.host + '/images/zhibao_process/wanyi_2.jpg',
        section_3: '蚜虫对马铃薯危害有两种情况，一种是直接危害。蚜虫群在叶子背面和幼嫩的顶部取食，刺伤叶片吸取汁液，同时排泄出一种粘物，堵塞气孔，使叶片皱缩变形，幼嫩部分生长受到妨碍，直接影响产量。 第二是种取食过程中，把病毒传染给健康植株，引起病毒病造成退化现象，还会使病毒在田间扩散，使更多植株发生退化。',
        section_3_h: '蚜虫：',
        section_3_image_1: config.service.host + '/images/zhibao_process/yachong_1.png',
        section_3_image_2: config.service.host + '/images/zhibao_process/yachong_2.jpg',
        table: config.service.host + '/images/zhibao_process/fourth_table.png',
        files: [config.service.host + '/images/zhibao_process/fourth_table.png', config.service.host + '/images/zhibao_process/zaoyi_1.png', config.service.host + '/images/zhibao_process/zaoyi_2.jpg', config.service.host + '/images/zhibao_process/wanyi_1.png', config.service.host + '/images/zhibao_process/wanyi_2.jpg', config.service.host + '/images/zhibao_process/yachong_1.png', config.service.host + '/images/zhibao_process/yachong_2.jpg']
      });
      that.requestProtection(4, 1, 0);
    };//end page=4//
    if (page == 5) {
      this.setData({
        page: options.page,
        tittle: '第五次用药（种植后60天）',
        section_tittle: '预防早晚疫病、叶斑病、霜冻等的发生。',
        section_1_h: '早疫病：',
        section_1: '症状：典型症状是在叶面发生褐色或黑色带有同心轮纹的病斑。空气潮湿时，病斑表面可形成黑褐色霉层。其最大危害是叶丛受害干枯，严重者全株枯死，大幅度降低产量。 发病条件、传染途径：病菌可存在于作物残株、被侵染的块茎里或其他茄科植物上。真菌通过表皮直接侵入叶片。初侵染发生在老叶片上。发病在6-25℃最适宜。 一般在湿润和干燥天气交替期间，该病害发展最迅速。',
        section_1_image_1: config.service.host + '/images/zhibao_process/zaoyi_1.png',
        section_1_image_2: config.service.host + '/images/zhibao_process/zaoyi_2.jpg',
        section_2: '症状： 在叶片上出现的病斑像被开水浸过，几天内叶片坏死，干燥时变成褐色，潮湿时变成黑色。在阴湿条件下，叶背面可看到白霉似的孢子襄枝。通常在叶片病斑的周围形成淡黄色的退绿边缘。茎上病斑很脆弱，茎秆经常从病斑处折断，有时带病斑的茎秆可能发生萎蔫。发病条件、传染途径：最适温度是10-25℃，相对湿度75%，连续数天，有较大露水或降雨。通常在连续降雨或降雨后连续阴天，晚疫病最容易发生。借气流传播进行再侵染，形成发病中心。',
        section_2_h: '晚疫病：',
        section_2_image_1: config.service.host + '/images/zhibao_process/wanyi_1.png',
        section_2_image_2: config.service.host + '/images/zhibao_process/wanyi_2.jpg',
        section_3: '',
        section_3_h: '',
        section_3_image_1: '',
        section_3_image_2: '',
        table: config.service.host + '/images/zhibao_process/five_table.png',
        files: [config.service.host + '/images/zhibao_process/five_table.png', config.service.host + '/images/zhibao_process/zaoyi_1.png', config.service.host + '/images/zhibao_process/zaoyi_2.jpg', config.service.host + '/images/zhibao_process/wanyi_1.png', config.service.host + '/images/zhibao_process/wanyi_2.jpg']
      });
      that.requestProtection(5, 1, 0);
    };//end page=5//
    if (page == 6) {
      this.setData({
        page: options.page,
        tittle: '第六次用药（种植后70天）',
        section_tittle: '预防晚疫病、炭疽病的发生。',
        section_1_h: '晚疫病：',
        section_1: '症状： 在叶片上出现的病斑像被开水浸过，几天内叶片坏死，干燥时变成褐色，潮湿时变成黑色。在阴湿条件下，叶背面可看到白霉似的孢子襄枝。通常在叶片病斑的周围形成淡黄色的退绿边缘。茎上病斑很脆弱，茎秆经常从病斑处折断，有时带病斑的茎秆可能发生萎蔫。发病条件、传染途径：最适温度是10-25℃，相对湿度75%，连续数天，有较大露水或降雨。通常在连续降雨或降雨后连续阴天，晚疫病最容易发生。借气流传播进行再侵染，形成发病中心。',
        section_1_image_1: config.service.host + '/images/zhibao_process/wanyi_1.png',
        section_1_image_2: config.service.host + '/images/zhibao_process/wanyi_2.jpg',
        section_2: '',
        section_2_h: '',
        section_2_image_1: '',
        section_2_image_2: '',
        section_3: '',
        section_3_h: '',
        section_3_image_1: '',
        section_3_image_2: '',
        table: config.service.host + '/images/zhibao_process/six_table.png',
        files: [config.service.host + '/images/zhibao_process/six_table.png', config.service.host + '/images/zhibao_process/wanyi_1.png', config.service.host + '/images/zhibao_process/wanyi_2.jpg']
      });
      that.requestProtection(6, 1, 0);
    };//end page=6//
    if (page == 7) {
      this.setData({
        page: options.page,
        tittle: '第七次用药（种植后85天）',
        section_tittle: '预防潜叶蝇、叶斑病、晚疫病、蚜虫的发生。',
        section_1_h: '晚疫病：',
        section_1: '症状： 在叶片上出现的病斑像被开水浸过，几天内叶片坏死，干燥时变成褐色，潮湿时变成黑色。在阴湿条件下，叶背面可看到白霉似的孢子襄枝。通常在叶片病斑的周围形成淡黄色的退绿边缘。茎上病斑很脆弱，茎秆经常从病斑处折断，有时带病斑的茎秆可能发生萎蔫。发病条件、传染途径：最适温度是10-25℃，相对湿度75%，连续数天，有较大露水或降雨。通常在连续降雨或降雨后连续阴天，晚疫病最容易发生。借气流传播进行再侵染，形成发病中心。',
        section_1_image_1: config.service.host + '/images/zhibao_process/wanyi_1.png',
        section_1_image_2: config.service.host + '/images/zhibao_process/wanyi_2.jpg',
        section_2: '蚜虫对马铃薯危害有两种情况，一种是直接危害。蚜虫群在叶子背面和幼嫩的顶部取食，刺伤叶片吸取汁液，同时排泄出一种粘物，堵塞气孔，使叶片皱缩变形，幼嫩部分生长受到妨碍，直接影响产量。 第二是种取食过程中，把病毒传染给健康植株，引起病毒病造成退化现象，还会使病毒在田间扩散，使更多植株发生退化。',
        section_2_h: '蚜虫：',
        section_2_image_1: config.service.host + '/images/zhibao_process/yachong_1.png',
        section_2_image_2: config.service.host + '/images/zhibao_process/yachong_2.jpg',
        section_3: '',
        section_3_h: '',
        section_3_image_1: '',
        section_3_image_2: '',
        table: config.service.host + '/images/zhibao_process/seven_table.png',
        files: [config.service.host + '/images/zhibao_process/seven_table.png', config.service.host + '/images/zhibao_process/wanyi_1.png', config.service.host + '/images/zhibao_process/wanyi_2.jpg', config.service.host + '/images/zhibao_process/yachong_1.png', config.service.host + '/images/zhibao_process/yachong_2.jpg'],
        dataArray: [{ name: '烯酰吗啉（烯酰吗啉）', format: '10g/包', volume: '10g', warter: '90', sumpik: '', sumwarter: '90(斤)' }, { name: '磷酸二氢钾（开心果膨果着色肥）', format: '200g/包', volume: '20g', sumpik: '', sumwarter: '' }, { name: '百菌清（甲基硫菌灵）', format: '100g/包', volume: '33g', sumpik: '', sumwarter: '' }, { name: '阿维高氯（阿维•高氯）', format: '500mL/瓶', volume: '30mL', sumpik: '', sumwarter: '' }],
      });
      that.requestProtection(7, 1, 0);
    };//end page=7//

   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  previewImage: function (e) {
    wx.previewImage({
      current: this.data.files[e.currentTarget.id], // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  formSubmit: function (e) {
    var that = this;
    var thedata = e.detail.value.sumwarter;
    if (that.data.countryCodeIndex==0){
      //亩数计算
      this.requestProtection(this.data.page, thedata, 0)
    }else{
      this.requestProtection(this.data.page, 0, thedata)
    }
  },
 requestProtection:function(times,amount,warter){
   wx.showLoading({
     title: '计算中',
   });
   var that = this;
   qcloud.request({
     // 要请求的地址
     url: that.data.protection_listUrl,
     method: 'GET',
     // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
     login: true,
     data: { times: times, amount: amount, warter: warter},
     success(result) {
       that.setData({
         dataArray: result.data.content
       }
       );
       wx.hideLoading();
       console.log(result.data.content);
     },

     fail(error) {
       showModel('请求失败', error);
       console.log('request fail', error);
     },

     complete() {
       console.log('request complete');
     }
   });
 },
 bindCountryCodeChange: function (e) {
   console.log('picker country code 发生选择改变，携带值为', e.detail.value);
   if (e.detail.value==0){
     this.setData({
       countryCodeIndex: e.detail.value,
       placeholder:'请输入亩数'
     })
   }else{
     this.setData({
       countryCodeIndex: e.detail.value,
       placeholder: '请输入兑水量'
     })
   }
 },
})