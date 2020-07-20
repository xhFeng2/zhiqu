function init(){
    var bottomContent = ` <div class="bottom">
    <ul class="bottomItmes">
        <li><a href="#">关于我们</a></li>
        <li><a href="#">联系我们</a></li>
        <li><a href="#">人才招募</a></li>
        <li><a href="#">服务协议</a></li>
    </ul>
    <p class="address">Copyright © 2001 -2015 福建智趣网络信息技术有限公司.  AII rights reserved.闽ICP备10007183号-5</p>
</div>
    `
    var bottom = document.getElementById('bottom')
    bottom.innerHTML=bottomContent
}
init();