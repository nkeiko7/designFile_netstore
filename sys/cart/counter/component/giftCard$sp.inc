
<div xmlns="http://www.w3.org/1999/xhtml" xmlns:m="http://mayaa.seasar.org" >
<div id="inputGiftAmount">
						<dd class="auth">
						<p>MUJI GIFT CARD裏面の番号をご入力ください</p>
						<ul>
							<li class="cardNo"><label for="giftCardNo">カード番号：</label><input type="text" name="giftCardNo" size="18" maxlength="16" id="giftCardNo" m:id="giftCardInput"/></li>
							<li class="pinNo"><label for="pinNo">PIN番号：</label><input type="text" name="pinNo" size="4" maxlength="4" id="pinNo" m:id="pinNoInput"/></li>
						</ul>
						<div id="cardAuth" class="btn"  m:id="dogiftcard"><a href="javascript:void(0);" url="">照会</a></div>
						</dd>
						<div m:id="hasGiftCardBalance">
						<dd class="balance price">（残高 <span class="num" m:id="giftCardBalance">0</span>円分）</dd>
						<dd class="amount"><input type="number" value="0" max="0" min="0" size="6" id="giftcardAmount" name="giftcardAmount" m:id="giftcardAmountSP">円分を使用</dd>
						</div>
						<div m:id="hasNotGiftCardBalance">
						<dd class="balance price">（残高 <span class="num" m:id="giftCardBalance">0</span>円分）</dd>
						<dd class="amount"><input type="number" value="0" max="0" min="0" size="6" id="giftcardAmount" name="giftcardAmount" m:id="giftcardAmountSP">円分を使用</dd>
						</div>
</div>
<div id="errorMessageGift">
<span id="errorMessage" ></span>
</div>

</div>
