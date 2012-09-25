/*
 * ajax.js
 * requires: jQuery
 */

var Ajax = {
	MSG_CANNOT_CONNECT_SERVER: "現在、サービスをご利用頂けません。時間を置いて再度利用をお願いします。",

	/**
	 * AjaxでJSONデータを取得する
	 * @param url Ajaxで通信するURL（常にGET）
	 * @param onSuccess(json) 成功時のコールバック。コールバック引数は取得したJSONオブジェクト。
	 * @param onApplicationError(err) アプリケーションエラー時のコールバック。
	 *                                コールバック引数は取得したエラー情報のJSONオブジェクト。
	 *                                デフォルトはAjax._defaultErrorCallback。
	 * @param onNetworkError() ネットワークエラー時のコールバック。デフォルトはAjax._defaultNetworkError。
	 * @param method HTTPメソッド
	 */
	json_by_method: function(url, onSuccess, onApplicationError, onNetworkError, method) {
		var callback = Ajax._createJsonCallback(
			onSuccess, onApplicationError ? onApplicationError : Ajax._defaultErrorCallback);
		var networkErrorCallback = onNetworkError ? onNetworkError : Ajax._defaultNetworkError;
		Ajax._loadJson("json", url, callback, networkErrorCallback, method);
	},

	/**
	 * AjaxでJSONデータを取得する
	 * @param url Ajaxで通信するURL（常にGET）
	 * @param onSuccess(json) 成功時のコールバック。コールバック引数は取得したJSONオブジェクト。
	 * @param onApplicationError(err) アプリケーションエラー時のコールバック。
	 *                                コールバック引数は取得したエラー情報のJSONオブジェクト。
	 *                                デフォルトはAjax._defaultErrorCallback。
	 * @param onNetworkError() ネットワークエラー時のコールバック。デフォルトはAjax._defaultNetworkError。
	 */
	json: function(url, onSuccess, onApplicationError, onNetworkError) {
		 Ajax.json_by_method(url, onSuccess, onApplicationError, onNetworkError, "GET");
	},

	/**
	 * Ajaxでテキストデータを取得する
	 * @param url Ajaxで通信するURL（常にGET）
	 * @param onSuccess(text) 成功時のコールバック。コールバック引数は取得したテキストデータ。
	 * @param onApplicationError(err) アプリケーションエラー時のコールバック。
	 *                                コールバック引数は取得したエラー情報のJSONオブジェクト。
	 *                                デフォルトはAjax._defaultErrorCallback。
	 * @param onNetworkError() ネットワークエラー時のコールバック。デフォルトはAjax._defaultNetworkError。
	 */
	text: function(url, onSuccess, onApplicationError, onNetworkError) {
		var callback = Ajax._createTextCallback(
			onSuccess, onApplicationError ? onApplicationError : Ajax._defaultErrorCallback);
		var networkErrorCallback = onNetworkError ? onNetworkError : Ajax._defaultNetworkError;
		Ajax._loadJson("text", url, callback, networkErrorCallback,"GET");
	},

	/**
	 * AjaxでHTMLデータを取得する
	 * @param elem 取得したHTMLを表示する要素
	 * @param url Ajaxで通信するURL（HTML内でSelectorを使ってフィルタリングする場合は、$.loadのurlと同一の仕様）
	 * @param onSuccess(text) 成功時のコールバック。コールバック引数は取得したHTMLデータ。
	 * @param onNetworkError() ネットワークエラー時のコールバック。
	 */
	html: function(elem, url, params, onSuccess, onNetworkError) {
		var networkErrorCallback = onNetworkError ? onNetworkError : function() {
			$(elem).text(Ajax.MSG_CANNOT_CONNECT_SERVER);
		};
		var callback = Ajax._craeteHtmlCallback(elem, onSuccess, networkErrorCallback);
		$.ajaxSetup({
			error: networkErrorCallback
		});
		$(elem).load(url, params, callback);
	},

	/**
	 * Ajax通信を行う(jQueryのラッパー)
	 */
	_loadJson: function (dataType, url, callback, errorCallback, method) {
		$.ajaxSetup({cache: false});
		$.ajax({
			url: url,
			type: method,
			dataType: dataType,
			success: callback,
			error: errorCallback
		});
	},
	_defaultErrorCallback: function(error) {
		alert(error.message);
	},
	_defaultNetworkError: function() {
		alert(Ajax.MSG_CANNOT_CONNECT_SERVER);
	},

	/**
	 * JSONデータ取得時のコールバック関数を作成する。
	 * 通信結果に応じて、以下のように動作する。
	 * 正常時: onSuccessを呼び出す
	 * アプリケーション時(サーバーからエラーオブジェクトを受け取ったとき): onErrorを呼び出す
	 */
	_createJsonCallback: function(onSuccess, onError) {
		var ret =  function(json) {
			if (!json) {
				var err = { message: Ajax.MSG_CANNOT_CONNECT_SERVER };
				onError(err);
			} else if (json["error"]) {
				onError(json["error"]);
			} else {
				onSuccess(json);
			}
		};
		return ret;
	},
	/**
	 * Textデータ取得時のコールバック関数を作成する。
	 * 通信結果に応じて、以下のように動作する。
	 * 正常時: onSuccessを呼び出す
	 * アプリケーション時(サーバーからエラーオブジェクトを受け取ったとき): onErrorを呼び出す
	 */
	_createTextCallback: function(onSuccess, onError) {
		var ret =  function(data) {
			if (!data) {
				var err = { message: Ajax.MSG_CANNOT_CONNECT_SERVER };
				onError(err);
				return;
			}
			var json = eval("(" + data + ")");
			if (json && json["error"]) {
				onError(json["error"]);
			} else {
				onSuccess(data);
			}
		};
		return ret;
	},
	/**
	 * HTMLデータ取得時のコールバック関数を作成する。
	 * 通信結果に応じて、以下のように動作する。
	 * 正常時: onSuccessを呼び出す
	 * アプリケーション時(文字列がない場合): エラーメッセージを引数にonSuccessを呼び出す
	 */
	_craeteHtmlCallback: function(elem, onSuccess, onNetworkError) {
		var ret =  function(data) {
			if (!data || data.length == 0) {
				onNetworkError();
			} else {
				onSuccess(data);
			}
		};
		return ret;
	}
};