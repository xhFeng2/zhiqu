function init(){
    var topContent = ` <div class="top">
    <img src="../img/icon.jpg" alt="icon" class="zhiquIcon" height="80px" width="252px">
    <ul class="items">
        <li><a href="#">首页</a></li>
        <li><a href="#">智趣产品</a><img src="../img/icon1.jpg" alt="" width="10px" height="10px"></li>
        <li><a href="#">智趣动态</a></li>
        <li><a href="#">关于智趣</a></li>
        <li><a href="#">联系我们</a></li>
        <li><a href="#">加入我们</a></li>
    </ul>
</div>
    `
    var top = document.getElementById('top')
    top.innerHTML=topContent
}
init();