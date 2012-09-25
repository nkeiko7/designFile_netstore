document.write('	<ul id="pageEnd">');
if(document.getElementsByTagName("body")[0].id!="storeTop"){
document.write('		<li class="siteTop"><a href="/store/">ネットストアTOP</a></li>');
}
document.write('		<li class="pageTop"><a href="#header">ページの先頭へ戻る</a></li>'
+'	</ul>');

if(document.getElementsByTagName("body")[0].id!="storeTop"){
document.write('	<div id="storeFooterWrap"><div id="storeFooter">'
+'		<dl id="sfBrowse">'
+'			<dt>商品を探す</dt>'
+'			<dd><a href="#">キャンペーン／特集一覧</a></dd>'
+'			<dd><a href="#">新商品一覧</a></dd>'
+'			<dd><a href="#">商品カテゴリー一覧</a></dd>'
+'		</dl>'
+'		<dl id="sfValuePrice">'
+'			<dt>お買い得情報</dt>'
+'			<dd><a href="#">ファクトリーアウトレット</a></dd>'
+'			<dd><a href="#">まとめ買い</a></dd>'
+'			<dd><a href="#">お手頃価格になりました</a></dd>'
+'			<dd><a href="#">価格を見直しました</a></dd>'
+'		</dl>'
+'		<dl id="sfGuide">'
+'			<dt>ネットストアのご利用方法</dt>'
+'			<dd><a href="#">ご利用ガイド</a></dd>'
+'			<dd><a href="#">MUJI.netメンバーのご案内</a></dd>'
+'			<dd><a href="#">配送料について</a></dd>'
+'			<dd><a href="#">お支払い方法について</a></dd>'
+'			<dd><a href="#">お届けについて</a></dd>'
+'		</dl>'
+'		<dl id="sfCampaign">'
+'			<dt>おすすめのキャンペーン／特集</dt>'
+'			<dd><a href="#"><img src="/img/store/top/090828_campaign2.jpg" alt="脚付きマットレス：期間限定 ボンネルコイル2,000円OFF" height="95" width="130" /></a></dd>'
+'			<dd><a href="#"><img src="/img/store/top/100122_campaign1.jpg" alt="あなたの暮らしをはじめよう：新生活 100" height="95" width="130" /></a></dd>'
+'		</dl>'
+'	</div></div><!-- /#storeFooter and #storeFooterWrap -->');}

document.write('		<ul id="footerNav">'
+'		<li id="fnPrivacy"><a href="#">個人情報の取り扱い</a></li>'
+'		<li id="fnSecurity"><a href="#">セキュリティについて</a></li>'
+'		<li id="fnBrowser"><a href="#">推奨ブラウザについて</a></li>'
+'		<li id="fnContact"><a href="#">お問い合わせ</a></li>'
+'		<li id="fnCorporate"><a href="#">株式会社 良品計画（企業情報）</a></li>'
+'	</ul>'
+'	<p id="copyright"><small>Copyright &copy;Ryohin Keikaku Co., Ltd.</small></p>'
+'</div></div><!-- /#footer and #footerWrap -->');