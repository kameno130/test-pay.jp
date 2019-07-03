var form = $("#card_token");
  Payjp.setPublicKey("pk_test_731ea1b57bd2b5a7ec83783a");
//まずはテスト鍵をセットする↑
  $("#credit_form_btn").on("click",function(e){
    e.preventDefault();
  //↑ここでrailsの処理を止めることでjsの処理を行う
    var card = {
      number: $("#card_number").val(),
      cvc: $("#cvc").val(),
      exp_month: $("#exp_month").val(),
      exp_year: $("#exp_year").val()
    };
   //↑Pay.jpに登録するデータを準備する
    Payjp.createToken(card,function(status,response){
   //↑先ほどのcard情報がトークンという暗号化したものとして返ってくる
      form.find("input[type=submit]").prop("disabled", true);
      if(status == 200){//←うまくいった場合200になるので
        $("#card_number").removeAttr("name");
        $("#cvc").removeAttr("name");
        $("#exp_month").removeAttr("name");
        $("#exp_year").removeAttr("name");
       //↑このremoveAttr("name")はデータを保持しないように消している
        var payjphtml = `<input type="hidden" name="payjpToken" value=${response.id}>`
        form.append(payjphtml);
        //↑これはdbにトークンを保存するのでjsで作ったトークンをセットしてる
        document.inputForm.submit();
       //↑そしてここでsubmit！！これでrailsのアクションにいく！もちろん上でトークンをセットしているのでparamsの中には{payjpToken="トークン"}という情報が入っている
      }else{
        alert("カード情報が正しくありません。");
      }
    });
  });