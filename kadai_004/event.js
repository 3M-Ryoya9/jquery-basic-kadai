// $("window") ←これは「windowという名前のタグを探してる」
// $("document") ←これもダメ！！
// $("div")←これはOK！ 
$(window).on("load scroll", (e) => {
  if (e.type === "load" ){
    console.log("loadイベントが発生しました");
  }
  if (e.type === "scroll"){
    console.log("scrollイベントが発生しました");
  }
});
