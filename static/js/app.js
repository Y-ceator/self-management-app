document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScriptファイルが正常に読み込まれました！");

    // テスト用の目標日時（2026年12月31日の年末締め切り）
    const targetDate = new Date('2026-12-31T23:59:59').getTime();

    // 1秒（1000ミリ秒）ごとに実行するタイマー
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // 残り時間を日・時・分・秒に変換
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // HTMLの特定の場所（背番号 countdown-area）をカウントダウンの文字に書き換える
        document.getElementById('countdown-area').innerText = 
            `2026年末の締切まであと: ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
    }, 1000);
});
