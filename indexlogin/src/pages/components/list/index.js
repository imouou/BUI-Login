/**
 * 列表滚动加载
 * 默认模块名: pages/list/list
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    // 接收component传过来的参数
    var param = bui.history.getParams(module.id);
    // 没登录不执行
    if (!store.isLogin) {
        return;
    }
    var uiList = bui.list({
        id: `#${module.id} .bui-scroll`, // 根据父层id区分不同scroll结构
        url: `${module.path}index.json`, // 根据模块路径来加载测试数据
        pageSize: 5,
        data: param,
        //如果分页的字段名不一样,通过field重新定义
        field: {
            page: "page",
            size: "pageSize",
            data: "data"
        },
        callback: function(e) {
            // e.target 为你当前点击的元素
        },
        template: function(data) {
            var html = "";
            data.forEach(function(el, index) {

                html += `<li class="bui-btn bui-box" href="pages/article/index.html?title=${el.name}">
                    <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
                    <div class="span1">
                        <h3 class="item-title">${el.name}</h3>
                        <p class="item-text">${el.address}</p>
                        <p class="item-text">${el.distance}公里</p>
                    </div>
                    <span class="price"><i>￥</i>${el.price}</span>
                </li>`
            });

            return html;
        }
    });



})