# flask import 하는 부분
from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

# pymongo import 하는 부분
from pymongo import MongoClient

# bs4 import 하는 부분
from bs4 import BeautifulSoup

# Certifi import 하는 부분 (Port 5000을 사용하기 위해서)
import certifi
ca = certifi.where()

# request import 하는 부분
import requests


# MongoDB client, db 변수 선언
client = MongoClient(
    'mongodb+srv://test:1234@cluster0.vfu4hiz.mongodb.net/Cluster0?retryWrites=true&w=majority',
    tlsCAFile=ca)
db = client.dbsparta

result_dic = {
    '1':'-url',
    '2':'-url',
    '3':'-url',
    '4':'-url',
    '5':'-url'
}


@app.route('/')
def home():
    return render_template('index.html')


## 닉네임 저장
@app.route("/api/name", methods=["POST"])
def name_post():
    name_receive = request.form['name_give']

    ## result 값을 숫자로 받음 -> 숫자를 통해서 사진 url 받아옴.
    result_receive = 0;
    url_receive = 'http://spartacodingclub.shop/static/images/rtans/SpartaIcon01.png'

    doc = {
        'name': name_receive,
        'result': result_receive,
        'image': url_receive,
    }

    db.users.insert_one(doc)
    return jsonify({'msg':'닉네임 등록 완료!'})

## 결과값을 질문지 하나하나마다 할때 post API 실행
@app.route("/api/answer", methods=["POST"])
def answer_post():
    name_receive = request.form['name_give']

    ## result 값을 숫자로 받음 -> 숫자를 통해서 사진 url 받아옴.
    result_receive = 0
    url_receive = 'http://spartacodingclub.shop/static/images/rtans/SpartaIcon01.png'

    doc = {
        'name': name_receive,
        'result': result_receive,
        'image': url_receive,
    }

    db.users.insert_one(doc)
    return jsonify({'msg':'닉네임 등록 완료!'})


## 결과물 보여주기
@app.route("/api/result", methods=["GET"])
def result_get():
    veggie_list = list(db.veggie.find({}, {'_id': False}))
    return jsonify({'veggie':veggie_list})



## 내 결과 다시보기
@app.route("/api/result/name?", methods=["GET"])
def re_result_get():
    veggie_list = list(db.veggie.find({}, {'_id': False}))
    return jsonify({'veggie':veggie_list})


## 르탄이 이미지 가져오기
@app.route("/api/img", methods=["GET"])
def img_get():
    veggie_list = list(db.veggie.find({}, {'_id': False}))
    return jsonify({'veggie':veggie_list})




if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)