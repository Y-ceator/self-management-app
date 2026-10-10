from flask import Flask, render_template

app = Flask(__name__)

# ホーム画面を表示するルート
@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    # デバッグモードをONにして起動
    app.run(debug=True)
