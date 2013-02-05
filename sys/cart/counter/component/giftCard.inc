<div xmlns="http://www.w3.org/1999/xhtml" xmlns:m="http://mayaa.seasar.org" >
<div id="inputGiftAmount">
<div id="balance" >

	<h3>ギフトカード照会</h3>
	<div id="balanceCheck">

		<dl>
		<dt class="cardNo">カード番号</dt><dd class="cardNo"><input type="text" m:id="giftCardInput" name="giftCardNo" id="giftCardNo" size="18" maxlength="16" ></dd>
		<dt class="cardPin">PIN番号 <span class="tips">[<a href="javascript:void(0);" class="tipObj">？</a>]</span></dt><dd class="cardPin"><input type="text" m:id="pinNoInput" name="pinNo" id="pinNo"  size="4" maxlength="4" ></dd>
		</dl>
		<div id="balanceCheckBtn">
			<span class="btn"><a id="doGiftCard" m:id="dogiftcard" href="javascript:void(0);" url="">照会</a></span>
		</div>

	</div>
	<!-- <div class="card"><img src="/img/store/cart/cart_giftcard01.jpg" alt="カード番号、PIN番号は、ギフトカードの裏面に記載されています。" /></div> -->

	<div m:id="hasGiftCard">
	<div id="inputAmount">

			<div m:id="hasGiftCardBalance">
				<p>ご利用額を入力してください。</p>
			</div>
			<div m:id="hasNotGiftCardBalance">
				<p>ご利用のギフトカードには、現在残高がありません。</p>
			</div>
			<div id="result">
				<dl>
					<dt>カード番号</dt>
					<dd><span m:id="giftCardNo" >1111111</span></dd>
					<dd class="price">残高<span m:id="giftCardBalance" class="num">0</span>円分</dd>
				</dl>
			</div>
			<div m:id="hasGiftCardBalance">
			<div id="input">
				<dl class="subTotal">
					<dt class="gift"><b>MUJI GIFT CARDご利用額</b></dt><dd><input m:id="giftcardAmount" value="0" type="text" id="giftcardAmount" name="giftcardAmount" size="5" maxlength="5" />円</dd>
				</dl>
			</div>
			</div>
			<div m:id="hasNotGiftCardBalance">
				<input value="0" type="hidden" id="giftcardAmount" name="giftcardAmount"/>
			</div>

	</div>
	</div>
</div>
</div>

<div id="errorMessageGift">
<span id="errorMessage" ></span>
</div>

</div>
