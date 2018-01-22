/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://nmamtf.club';
//var host = 'http://localhost:8080';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,
  
        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login_1`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/userinfo`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,
        //请求经文地址
        getamtjUrl: `${host}/weapp/test.do`,
        schedule_addUrl: `${host}/weapp/schedule/add`,
        schedule_listUrl: `${host}/weapp/schedule/list`,
        fertilization_listUrl: `${host}/weapp/fertilization`,
        weather_listUrl: `${host}/weapp/weather`,
        circle_addUrl: `${host}/weapp/circle/add`,
        circle_uploadUrl: `${host}/weapp/circle/upload`,
        circle_listUrl: `${host}/weapp/circle/list`,
        circle_mylistUrl: `${host}/weapp/circle/mylist`,
        protection_listUrl: `${host}/weapp/protectionList`,
        purview_listUrl: `${host}/weapp/purview`,
        verify_login: `${host}/weapp/verify_login`,
        binding: `${host}/weapp/binding`,
        plat_all: `${host}/weapp/platAll`,
        platByUser: `${host}/weapp/platByUser`,
        plat_one: `${host}/weapp/platOne`,
        add_support: `${host}/weapp/addSupport`,
        add_comment: `${host}/weapp/addComment`,
        cslt_add: `${host}/cslt/add`,
        cslt_list: `${host}/cslt/list`,
        cslt_detail: `${host}/cslt/detail`,
        cslt_answer: `${host}/cslt/answer`,
        cslt_answer2: `${host}/cslt/answer2`,
        supple: `${host}/cslt/supple`,
        cslt_upload: `${host}/cslt/upload`,
        cslt_upload2: `${host}/cslt/upload2`,
        edit_info: `${host}/weapp/editInfo`,
    }
};

module.exports = config;